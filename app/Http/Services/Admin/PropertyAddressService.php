<?php

namespace App\Http\Services\Admin;

use Illuminate\Support\Facades\DB;
use App\Models\PropertyAddressDetails;

class PropertyAddressService
{
    private $googleMapUrl;
    private $googleMapKey;
    private $googleMapPlaceUrl;
    private $googleMapGeocodingUrl;

    public function __construct()
    {
        $this->googleMapUrl = config('app.google_map_api_url');
        $this->googleMapKey = config('app.google_map_api_key');
        $this->googleMapPlaceUrl = config('app.google_map_place_url');
        $this->googleMapGeocodingUrl = config('app.google_map_geocoding_url');
    }

    public function fetchMainLocation(array $payload = null)
    {
        $fetchGeocodingUrl = $this->googleMapGeocodingUrl . "/json?address=" . urlencode($payload['address']) . "&key=" . $this->googleMapKey;
        $geoCodeResponse = $this->handleGetMethod($fetchGeocodingUrl);
        $geoCode = [];

        foreach ($geoCodeResponse->results as $result) {
            $geoCode['formatted_address'] = $result->formatted_address;
            $geoCode['md5'] = md5($result->formatted_address);
            $geoCode['longitude'] = $result->geometry->location->lng;
            $geoCode['latitude'] = $result->geometry->location->lat;
            $geoCode['place_id'] = $result->place_id;
            $geoCode['property_id'] = $payload["property_id"];
            $geoCode['current'] = 1;
        }

        $insertData = PropertyAddressDetails::insertOrIgnore($geoCode);

        return $insertData;
    }

    public function nearby(array $payload = null)
    {
        $findPlaceNearbyUrl = $this->googleMapPlaceUrl . ":searchNearby";

        $propertyDetails = PropertyAddressDetails::whereHas('property', function ($query) {
            $query->where('status', 'active');
        })
            ->where('property_id', $payload['property_id'])
            ->where('current', 1)
            ->first();

        if (empty($propertyDetails)) return null;

        $fetchPlaceNearbyData = [
            "includedTypes" => explode(",", $payload['includedTypes']),
            "maxResultCount" => (int)$payload['maxResultCount'],
            "locationRestriction" => [
                "circle" => [
                    "center" => [
                        "latitude" => $propertyDetails->latitude,
                        "longitude" => $propertyDetails->longitude
                    ],
                    "radius" => (int)$payload['radius']
                ]
            ],
            "fields" => $payload['fields']
        ];

        $response = $this->handlePostMethod($findPlaceNearbyUrl, $fetchPlaceNearbyData);

        if (isset($response['error']) && $response['error']['code'] != 0) return null;

        // save the nearby data to db
        $result = array_map(function ($item) use ($payload) {
            $iconPath = $this->iconsReplacement($item['types']);

            return [
                'formatted_address' => $item['formattedAddress'],
                'md5' => md5($item['formattedAddress']),
                'place_id' => $item['id'],
                'longitude' => $item['location']['longitude'],
                'latitude' => $item['location']['latitude'],
                'display_name' => $item['displayName']['text'],
                'nearby' => 1,
                'nearby_types' => json_encode($item['types']),
                'property_id' => $payload['property_id'],
                'icon_url' => $iconPath
            ];
        }, $response['places']);

        $insertData = PropertyAddressDetails::insertOrIgnore($result);

        return $insertData;
    }

    public function iconsReplacement(array $types)
    {
        $icons = "";

        foreach ($types as $type) {
            switch ($type) {
                case 'restaurant':
                case 'cafe':
                    $icons = "food_icons";
                    break;
                case 'hospital':
                case 'pharmacy':
                    $icons = "hospital_icons";
                    break;
                case 'primary_school':
                case 'secondary_school':
                    $icons = "school_icons";
                    break;
                case 'gym';
                    $icons = "gym_icons";
                    break;
                default:
                    break;
            }
        }

        return $icons;
    }

    public function handleGetMethod(string $url)
    {
        $cURLConnection = curl_init();

        curl_setopt($cURLConnection, CURLOPT_URL, $url);
        curl_setopt($cURLConnection, CURLOPT_RETURNTRANSFER, true);

        $execution = curl_exec($cURLConnection);
        curl_close($cURLConnection);

        $response = json_decode($execution);

        return $response;
    }

    public function handlePostMethod(string $url, $data = [])
    {
        $cURLConnection = curl_init($url);

        $headers = [
            "X-Goog-Api-Key: " . $this->googleMapKey,
            "Content-Type: application/json",
        ];

        if (isset($data['fields'])) {
            $fields = [
                "X-Goog-FieldMask: " . $data['fields']
            ];
            $headers = array_merge($headers, $fields);
            unset($data['fields']);
        }

        curl_setopt($cURLConnection, CURLOPT_URL, $url);
        curl_setopt($cURLConnection, CURLOPT_POST, true);
        curl_setopt($cURLConnection, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($cURLConnection, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($cURLConnection, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($cURLConnection, CURLOPT_HEADER, true);

        $execution = curl_exec($cURLConnection);
        curl_close($cURLConnection);

        $headerSize = curl_getinfo($cURLConnection, CURLINFO_HEADER_SIZE);
        $removeHeader = substr($execution, $headerSize);

        $response = json_decode($removeHeader, true);

        return $response;
    }
}
