<?php

namespace App\Http\Services\Web;

use App\Models\Property;
use App\Models\PropertyHighlight;
use App\Queriplex\PropertyQueriplex;
use App\Http\Resources\Web\Property\PropertyResource;

class PropertyService
{
    public function __construct(
        protected Property $property
    ) {
    }

    public function fetchLatestProperty($payload)
    {
        $result = $this->property->where('status', Property::STATUS_ACTIVE)
            ->orderBy('created_at', Property::LATEST)
            ->limit($payload->limit)
            ->get();

        $result->load(['banner.image', 'sliders.image']);

        $result = PropertyResource::collection($result);

        return $result;
    }

    public function fetchDetails($id)
    {
        $result = $this->property->find($id);

        $result->load(['banner.image', 'sliders.image']);
        $this->property->storeLogs($result);

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
}
