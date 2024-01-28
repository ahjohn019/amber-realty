<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Services\Web\PropertyService;

class PropertyController extends Controller
{
    public function __construct(
        protected PropertyService $propertyService
    ) {
    }


    /**
     * Display a listing of the resource.
     */
    public function latest(Request $request)
    {
        $result = $this->propertyService->fetchLatestProperty($request);
        return self::successResponse('Latest Property Display Successfully', $result);
    }
}
