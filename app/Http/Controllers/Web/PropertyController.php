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
     * Display latest property
     *
     * @param Request $request
     * @return void
     */
    public function latest(Request $request)
    {
        $result = $this->propertyService->fetchLatestProperty($request);
        return self::successResponse('Latest Property Display Successfully', $result);
    }

    public function details(String $id)
    {
        $result = $this->propertyService->fetchDetails($id);
        return self::successResponse('Details Display Successfully', $result);
    }
}
