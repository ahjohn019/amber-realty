<?php

use App\Library\RoleTag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\{
    AuthController,
    PostController,
    UserController,
    CommentController,
    PropertyController,
    RefController
};

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Property List
Route::prefix('ref')->name('ref')->group(function () {
    Route::get('/property/filter-option-group', [RefController::class, 'propertyFilterOptionGroup'])->name('list');
});

Route::prefix('property')->name('web.property')->group(function () {
    Route::get('/list', [PropertyController::class, 'list'])->name('list');
    Route::get('/latest', [PropertyController::class, 'latest'])->name('latest');
    Route::post('/details', [PropertyController::class, 'details'])->name('details');
    Route::get('/highlights', [PropertyController::class, 'highlights'])->name('highlights');
    Route::get('/detail-views/{id}', [PropertyController::class, 'detailTotalViews'])->name('detail_total_views');
    Route::get('/nearby-location/{id}', [PropertyController::class, 'viewNearbyLocation'])->name('nearby_location');
});

Route::prefix('auth')->middleware([])->group(
    function () {
        Route::post('/login', [AuthController::class, 'login']);
        Route::post('/register', [AuthController::class, 'register']);
        Route::post('/reset-password', [AuthController::class, 'resetPassword']);
        Route::post('/forgot-password', [AuthController::class, 'forgotPassword']);
    }
);

Route::middleware('auth:sanctum')->group(function () {
    Route::prefix('auth')->middleware([])->group(function () {
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::post('/update-password', [AuthController::class, 'updatePassword']);
    });
});

// sanctum auth
Route::middleware('auth:sanctum', 'role:' . RoleTag::USER)->group(function () {
    Route::get('/user-test', [UserController::class, 'index']);

    Route::prefix('post')->group(function () {
        Route::get('/list', [PostController::class, 'list'])->name('web.posts.list');
        Route::post('/store', [PostController::class, 'store'])->name('web.posts.store');
        Route::get('/show/{id}', [PostController::class, 'show'])->name('web.posts.show');
        Route::post('/update', [PostController::class, 'update'])->name('web.posts.update');
        Route::delete('/delete/{id}', [PostController::class, 'delete'])->name('web.posts.delete');
        Route::post('/user-like', [PostController::class, 'sendUserLikes'])->name('web.posts.likes');
    });

    Route::prefix('comment')->group(function () {
        Route::get('/list', [CommentController::class, 'list'])->name('web.comments.list');
        Route::post('/store', [CommentController::class, 'store'])->name('web.comments.store');
        Route::get('/show/{id}', [CommentController::class, 'show'])->name('web.comments.show');
        Route::delete('/delete/{id}', [CommentController::class, 'delete'])->name('web.comments.delete');
    });
});
