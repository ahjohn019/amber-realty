<?php

namespace App\Helpers;

use Spatie\Activitylog\Models\Activity;

class Helpers
{
    public function storeLogs($model, String $event = null)
    {
        $findIpAddress = Activity::whereJsonContains('properties->ip_address', request()->ip())->exists();
        if ($findIpAddress) return true;

        activity()
            ->performedOn($model)
            ->event($event)
            ->withProperties(['ip_address' => request()->ip()])
            ->log(json_encode($model));
    }
}
