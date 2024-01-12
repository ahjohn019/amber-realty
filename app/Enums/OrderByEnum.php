<?php

namespace App\Enums;

enum OrderByEnum: string
{
    case createdAt = 'created_at';
    case descending = 'desc';
}
