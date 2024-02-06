<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Requests\Web\Ref\ListFormRequest;
use App\Models\PropertyTypes;
use App\Models\State;

class RefController extends Controller
{
	public function propertyFilterOptionGroup(ListFormRequest $request)
	{
		$payload = $request->validated();
		$result = [];

		if(isset($payload['propertyTypes'])){
			$propertyTypes = PropertyTypes::get();
			$result['property_types'] = $propertyTypes;
		}

		if(isset($payload['states'])){
			$states = State::get();
			$result['states'] = $states;
		}

		return self::successResponse("Success", $result);
	}
}
