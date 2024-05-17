<?php

namespace App\Models;

use App\Models\Property;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PropertyAddressDetails extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function property(): BelongsTo
    {
        return $this->belongsTo(Property::class);
    }

    public function scopeCurrentLocation($query = null, array $payload)
    {
        return $query->whereHas('property', function ($query) {
            $query->where('status', 'active');
        })
            ->where('property_id', $payload['property_id'])
            ->where('current', 1);
    }
}
