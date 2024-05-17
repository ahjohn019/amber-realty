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
}
