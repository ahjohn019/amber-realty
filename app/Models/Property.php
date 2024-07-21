<?php

namespace App\Models;

use App\Models\User;
use App\Models\ServerFile;
use App\Models\PropertyTags;
use App\Models\PropertyTypes;
use App\Traits\HasModelTrait;
use App\Models\PropertyDetails;
use App\Models\PropertyHighlight;
use App\Models\PropertyAddressDetails;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Property extends Model
{
    use HasFactory;
    use HasModelTrait;
    use SoftDeletes;

    protected $guarded = [];

    const PROPERTY_IMAGE_TYPE = ['file', 'banner_url'];
    const STATUS_ACTIVE = 'active';
    const LATEST = 'desc';

    public function propertyDetail(): HasOne
    {
        return $this->hasOne(PropertyDetails::class);
    }

    public function highlight(): HasOne
    {
        return $this->hasOne(PropertyHighlight::class);
    }

    public function tags(): HasMany
    {
        return $this->hasMany(PropertyTags::class);
    }

    public function propertyType(): BelongsTo
    {
        return $this->belongsTo(PropertyTypes::class, 'type_id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function state(): BelongsTo
    {
        return $this->belongsTo(State::class);
    }

    public function banner(): MorphOne
    {
        return $this->morphOne(Banner::class, 'entity');
    }

    public function sliders(): MorphMany
    {
        return $this->morphMany(Slider::class, 'entity')->orderBy('seq_value', 'asc');
    }

    public function image(): MorphOne
    {
        return $this->morphOne(ServerFile::class, 'uploadable');
    }

    public function nearbyDetails(): HasMany
    {
        return $this->hasMany(PropertyAddressDetails::class);
    }

    public function property_users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'user_posts', 'post_id', 'user_id')->wherePivotNull('deleted_at')->withTimestamps();
    }

    // static methods
    public static function convertListingType($listingTypeKey)
    {
        $listingTypeList = [
            "buy" => "sale",
            "rent" => "rent",
        ];

        return $listingTypeList[$listingTypeKey] ?? null;
    }
}
