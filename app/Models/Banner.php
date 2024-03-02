<?php

namespace App\Models;

use App\Models\ServerFile;
use App\Traits\HasModelTrait;
use App\Traits\ServerFileTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Banner extends Model
{
    use HasFactory, SoftDeletes, HasModelTrait, ServerFileTrait;

    protected $guarded = [];

    public function image(): MorphOne
    {
        return $this->morphOne(ServerFile::class, 'uploadable');
    }

    public function banner(): MorphTo
    {
        return $this->morphTo();
    }
}
