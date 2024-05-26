<?php

namespace App\Http\Controllers\Web;

use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Models\PropertyAddressDetails;
use App\Http\Services\Web\PropertyService;
use App\Http\Requests\Web\Property\ListFormRequest;

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

    public function details(Request $request)
    {
        $result = $this->propertyService->fetchDetails($request->all());
        return self::successResponse('Details Display Successfully', $result);
    }

    public function list(ListFormRequest $request)
    {
        $payload = $request->validated();

        $result = $this->propertyService->list($payload);

        return self::successResponse("Success", $result);
    }

    public function highlights()
    {
        $result = $this->propertyService->highlights();

        if (isset($result['error'])) {
            return self::failedResponse('Invalid Property Data', $result['error'], $result['code']);
        }

        return self::successResponse('Fetch Highlight Successfully', $result);
    }

    public function viewNearbyLocation(String $id)
    {
        $result = PropertyAddressDetails::where('property_id', $id)->get();

        if (empty($result)) {
            return self::failedResponse('Invalid Property Data', "Nearby Location Not Available", Response::HTTP_NOT_FOUND);
        }

        return self::successResponse('Success', $result);
    }

    public function detailTotalViews(String $id)
    {
        $result = $this->propertyService->detailTotalViews($id);

        if (empty($result)) {
            return self::failedResponse('Invalid Property Data', "Property Doesn't Exist", Response::HTTP_NOT_FOUND);
        }

        return self::successResponse("Success", $result);
    }
}
