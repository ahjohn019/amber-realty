<?php

namespace App\Http\Controllers\Admin;

use App\Models\Property;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Services\Admin\PropertyService;
use App\Http\Requests\Admin\Property\CreateForm;
use App\Http\Requests\Admin\Property\UpdateForm;
use App\Http\Requests\Web\ListFormRequest;
use Symfony\Component\HttpFoundation\Response;

class PropertyController extends Controller
{
    public function __construct(
        protected PropertyService $propertyService
    ) {
    }

    /**
     * Display a listing of the resource.
     */
    public function list(ListFormRequest $request)
    {
        //
        $result = $this->propertyService->list($request->validated());
        return self::successResponse('Property Display Successfully', $result);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateForm $request)
    {
        $result = $this->propertyService->store($request->validated());

        if (isset($result['error'])) {
            return self::failedResponse('Invalid Property Data', $result['error'], $result['code']);
        }

        return self::successResponse('Property Created Successfully', $result);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $result = $this->propertyService->show($id);

        if (isset($result['error'])) {
            return self::failedResponse('Invalid Property Data', $result['error'], $result['code']);
        }

        return self::successResponse('Property Display Successfully', $result);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateForm $request, string $id)
    {
        //
        $result = $this->propertyService->update($request->validated(), $id);

        if (isset($result['error'])) {
            return self::failedResponse('Invalid Property Data', $result['error'], $result['code']);
        }

        return self::successResponse('Property Updated Successfully', $result);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $result = $this->propertyService->delete($id);

        if (isset($result['error'])) {
            return self::failedResponse('Invalid Property Data', $result['error'], $result['code']);
        }

        return self::successResponse('Property Deleted Successfully', $result);
    }
}
