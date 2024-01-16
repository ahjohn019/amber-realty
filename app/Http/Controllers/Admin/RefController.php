<?php

namespace App\Http\Controllers\Admin;

use App\Models\State;
use App\Models\Category;
use App\Models\PropertyTypes;
use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\Ref\StateResource;
use App\Http\Resources\Admin\Ref\PropertyTypeResource;

class RefController extends Controller
{
    //
    public function category()
    {
        $result = Category::get();

        return self::successResponse('Category Display Successfully', $result);
    }

    public function state()
    {
        $state = State::get();
        $result = StateResource::collection($state);

        return self::successResponse('State Display Successfully', $result);
    }

    public function propertyTypes()
    {
        $propertyTypes = PropertyTypes::get();
        $result = PropertyTypeResource::collection($propertyTypes);

        return self::successResponse('Property Types Display Successfully', $result);
    }
}
