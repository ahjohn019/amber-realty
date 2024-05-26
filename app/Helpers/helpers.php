<?php

namespace App\Helpers;

use Spatie\Activitylog\Models\Activity;

class Helpers
{
    public function storeLogs($model, array $payload = null)
    {
        $device = $payload['device'] ?? 'desktop';
        $event = $payload['event'] ?? '';

        $findIpAddress = Activity::where([
            ['event', $event],
            ['subject_id', $model->id]
        ])->whereJsonContains('properties->ip_address', request()->ip())
            ->whereJsonContains('properties->device', $device)
            ->exists();
        if ($findIpAddress) return true;

        activity()
            ->performedOn($model)
            ->event($event)
            ->withProperties(['ip_address' => request()->ip(), 'device' => $device])
            ->log(json_encode($model));
    }
}
