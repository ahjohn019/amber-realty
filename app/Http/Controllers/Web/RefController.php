<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\PropertyTypes;
use App\Models\State;

class RefController extends Controller
{
	public function propertyFilterOptionGroup()
	{
		$propertyTypes = PropertyTypes::get();
		$states = State::get();

		$result = [
			'property_types' => $propertyTypes,
			'states' => $states,
		];

		return self::successResponse("Success", $result);
	}
}
