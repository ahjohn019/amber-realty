<?php

namespace App\Models;

use App\Models\PropertyTags;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Tags extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function propertyTags(): BelongsToMany
    {
        return $this->belongsToMany(PropertyTags::class);
    }
}
