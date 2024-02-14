<?php

namespace App\Http\Services;

class ExceptionService
{
    public static function exception(string $message, $code)
    {
        return ['error' => $message, 'code' => $code];
    }
}
