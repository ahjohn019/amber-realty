<?php

namespace App\Http\Controllers\Admin;

use App\Models\Category;
use App\Enums\Property\Tenure;
use App\Enums\Property\Furnishing;
use App\Http\Controllers\Controller;

class RefController extends Controller
{
    //
    public function category()
    {
        $result = Category::get();

        return self::successResponse('Category Display Successfully', $result);
    }

    public function furnishing()
    {
        $result = Furnishing::cases();

        return self::successResponse('Furnish List', $result);
    }
}
