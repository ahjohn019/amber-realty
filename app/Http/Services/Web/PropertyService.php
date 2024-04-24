<?php

namespace App\Http\Services\Web;

use App\Models\Property;
use App\Models\PropertyHighlight;
use App\Queriplex\PropertyQueriplex;
use App\Http\Resources\Web\Property\PropertyResource;

class PropertyService
{
    public function fetchLatestProperty($payload)
    {
        $result = Property::where('status', Property::STATUS_ACTIVE)
            ->orderBy('created_at', Property::LATEST)
            ->limit($payload->limit)
            ->get();

        $result->load(['banner.image', 'sliders.image']);

        $result = PropertyResource::collection($result);

        return $result;
    }

    public function fetchDetails($id)
    {
        $result = Property::find($id);

        $result->load(['banner.image', 'sliders.image']);

        $result = new PropertyResource($result);

        return $result;
    }

    public function list(array $payload)
    {
        $result = PropertyQueriplex::make(Property::query(), $payload)
            ->paginate($payload['items_per_page'] ?? 15);

        $result->load([
            "user",
            "propertyDetail",
            "tags",
            "propertyType",
            "image",
            "state",
            'banner.image',
            'sliders.image'
        ]);
        $result = PropertyResource::paginateCollection($result);

        return $result;
    }

    public function highlights()
    {
        $result = PropertyHighlight::with('property', 'property.propertyDetail', 'property.banner.image')->where('status', 1)->get();

        return $result;
    }

    public function handleLocation($request)
    {
        $googleMapUrl = config('app.google_map_url');
        $googleMapKey = config('app.google_map_api_key');

        $fullAddress = preg_replace('/\s+/', '+', $request['params']);
        $fullAddressResult = empty($fullAddress) ? false : $googleMapUrl . "place?key=" . $googleMapKey . "&q=" . $fullAddress;

        return $fullAddressResult;
    }

    public function handleActiveLocation($request)
    {
        $googleMapUrl = config('app.google_map_url');
        $googleMapKey = config('app.google_map_api_key');

        $fullAddress = preg_replace('/\s+/', '+', $request['full_address']);
        $query = $request['query'] == "place" ? null : $request['type'] . "+near+in+";

        $fullAddressResult = empty($fullAddress) ? false : $googleMapUrl . $request['query'] . "?key=" . $googleMapKey . "&q=" . $query . $fullAddress;


        return $fullAddressResult;
    }
}
