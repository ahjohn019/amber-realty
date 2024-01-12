<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PropertyTypes extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function properties(): HasMany
    {
        return $this->hasMany(Property::class);
    }
}
