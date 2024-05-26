<?php

namespace App\Http\Services\Web;

use App\Models\PropertyDetailViews;
use Spatie\Activitylog\Models\Activity;

class PropertyViewService
{
    public function __construct(
        protected Activity $activity,
        protected PropertyDetailViews $propertyDetailViews,
    ) {
    }

    public function updateTotalViews(int $id, $model)
    {
        $detailsLogCount = $this->activity->where([
            ['event', 'details'],
            ['subject_id', $model->id]
        ])->count();

        $propertyDetailViews = $this->propertyDetailViews->where('property_id', $id)->first();
        $countDetailViews = $propertyDetailViews->old_total ?? 0;

        $this->propertyDetailViews->updateOrCreate([
            'property_id' => $id
        ], [
            'property_id' => $id,
            'current_total' => $detailsLogCount + $countDetailViews
        ]);
    }

    public function totalViewsValidation($model)
    {
        $detailsLogCount = $this->activity->where([
            ['event', 'details'],
            ['subject_id', $model->id]
        ])->count();

        $propertyDetailViews = $this->propertyDetailViews->where('property_id', $model->id)->first();

        if ($detailsLogCount <= 0 && $propertyDetailViews !== null) {
            $propertyDetailViews->update([
                'old_total' => $propertyDetailViews->current_total
            ]);
        }
    }
}
