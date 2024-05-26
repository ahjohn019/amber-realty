<?php

namespace App\Http\Services\Web;

use App\Helpers\Helpers;
use App\Models\Property;
use App\Models\PropertyHighlight;
use App\Models\PropertyDetailViews;
use App\Queriplex\PropertyQueriplex;
use Spatie\Activitylog\Models\Activity;
use App\Http\Services\Web\PropertyViewService;
use App\Http\Resources\Web\Property\PropertyResource;

class PropertyService
{
    public function __construct(
        protected Property $property,
        protected Activity $activity,
        protected PropertyViewService $propertyViewService,
        protected Helpers $helpers
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

    public function fetchDetails($request)
    {
        $detailsId = $request['route_id'] ?? "";
        $result = $this->property->find($detailsId);

        $result->load(['banner.image', 'sliders.image']);

        $this->propertyViewService->totalViewsValidation($result);
        $this->helpers->storeLogs($result, $request);
        $this->propertyViewService->updateTotalViews($detailsId, $result);

        $result = new PropertyResource($result);

        return $result;
    }

    public function list(array $payload)
    {
        $result = PropertyQueriplex::make($this->property->query(), $payload)
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

    public function detailTotalViews($id)
    {
        $result = PropertyDetailViews::where('property_id', $id)->first();

        return $result;
    }
}
