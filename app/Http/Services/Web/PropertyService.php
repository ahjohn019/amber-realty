<?php

namespace App\Http\Services\Web;

use App\Models\Property;
use App\Http\Resources\Web\Property\PropertyResource;
use App\Queriplex\PropertyQueriplex;

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
		]);
		$result = PropertyResource::paginateCollection($result);

        return $result;
    }
}
