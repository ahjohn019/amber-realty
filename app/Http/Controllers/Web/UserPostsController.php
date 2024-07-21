<?php

namespace App\Http\Controllers\Web;

use App\Models\UserPosts;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserPostsController extends Controller
{
    public function saved($request)
    {
        $authUser = auth()->user();

        $findUserShortlist = $authUser->saved_property()->where('post_id', $request)->first();

        if ($findUserShortlist) {
            return self::failedResponse('You have already saved the posts', null, 404);
        }

        $result = $authUser->saved_property()->attach($request, ['type' => 'shortlist']);

        return self::successResponse('Post Shortlisted Successfully', $result);
    }

    public function toggle(Request $request)
    {
        $favoriteList = $request->all();
        $findUserPosts = UserPosts::withTrashed()->authUserPost($favoriteList['id'])->first();

        if (empty($findUserPosts)) {
            return $this->saved($favoriteList['id']);
        }

        if (!$favoriteList['status']) {
            $findUserPosts->delete();
        } else {
            $findUserPosts->restore();
        }

        return self::successResponse('Status Updated Successfully', $findUserPosts);
    }
}
