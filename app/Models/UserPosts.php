<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserPosts extends Model
{
    use HasFactory;
    use SoftDeletes;

    const USER_POST_ACTIVE = 1;

    protected $guarded = [];

    public function scopeAuthUserPost($query, $request)
    {
        return $query->where('user_id', auth()->user()->id)->where('post_id', $request);
    }
}
