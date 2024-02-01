<?php

namespace App\Http\Requests\Web\Property;

use App\Models\Property;
use Illuminate\Foundation\Http\FormRequest;

class ListFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

	protected function prepareForValidation()
	{
		$this->merge([
			'listing_type' => Property::convertListingType($this->listing_type),
		]);
	}

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
			'page' => ['nullable', 'integer'],
			'items_per_page' => ['nullable', 'integer'],
			'sort_by' => ['nullable', 'string'],
			'sort_desc' => ['nullable', 'boolean'],
			'search' => ['nullable', 'string'],
			'search_by' => ['nullable', 'string'],

			"listing_type" => ['nullable', 'in:sale,rent'],
			"property_types" => ['nullable'],
			"min_floor_size" => ['nullable', 'numeric'],
			"max_floor_size" => ['nullable', 'numeric'],
			"min_price" => ['nullable', 'numeric', 'decimal:0,2'],
			"max_price" => ['nullable', 'numeric', 'decimal:0,2'],
			"tenures" => ['nullable'],
        ];
    }
}
