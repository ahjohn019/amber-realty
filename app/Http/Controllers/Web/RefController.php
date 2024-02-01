<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\PropertyTypes;

class RefController extends Controller
{
	public function propertyFilterOptionGroup()
	{
		$propertyTypes = PropertyTypes::get();

		$result = [
			'property_types' => $propertyTypes,
		];

		return self::successResponse("Success", $result);
	}
}
