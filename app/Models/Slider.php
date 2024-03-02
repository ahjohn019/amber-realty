<?php

namespace App\Models;

use App\Traits\ServerFileTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Slider extends Model
{
    use HasFactory, SoftDeletes, ServerFileTrait;

    protected $guarded = [];

    public function image(): MorphOne
    {
        return $this->morphOne(ServerFile::class, 'uploadable');
    }

    public function sliders(): MorphTo
    {
        return $this->morphTo();
    }
}
