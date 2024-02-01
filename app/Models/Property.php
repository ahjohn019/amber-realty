<?php

namespace App\Models;

use App\Models\User;
use App\Models\ServerFile;
use App\Models\PropertyTags;
use App\Models\PropertyTypes;
use App\Models\PropertyDetails;
use App\Traits\HasModelTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

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

    public function image(): MorphOne
    {
        return $this->morphOne(ServerFile::class, 'uploadable');
    }

	// methods

	// static methods
	public static function convertListingType(string $listingTypeKey): string
	{
		$listingTypeList = [
			"buy" => "sale",
			"rent" => "rent",
		];

		return $listingTypeList[$listingTypeKey] ?? null;
	}
}
