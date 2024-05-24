<?php

namespace App\Helpers;

class Helpers
{
    public function storeLogs($model, String $event = null)
    {
        activity()
            ->performedOn($model)
            ->event($event)
            ->withProperties(['ip_address' => request()->ip()])
            ->log(json_encode($model));
    }
}
