<?php

namespace App\Http\Services\Web;

use App\Models\Property;
use App\Http\Resources\Web\Property\PropertyResource;

class PropertyService
{
    public function fetchLatestProperty($payload)
    {
        $result = Property::where('status', Property::STATUS_ACTIVE)
            ->orderBy('created_at', Property::LATEST)
            ->limit($payload->limit)
            ->get();

        $result = PropertyResource::collection($result);

        return $result;
    }

    public function fetchDetails($id)
    {
        $result = Property::find($id);

        $result = new PropertyResource($result);

        return $result;
    }
}
