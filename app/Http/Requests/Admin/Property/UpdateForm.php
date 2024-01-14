<?php

namespace App\Http\Requests\Admin\Property;

use App\Models\State;
use App\Models\PropertyTypes;
use App\Enums\Property\PropertyStatusEnum;
use Illuminate\Validation\Rules\Enum;
use Illuminate\Foundation\Http\FormRequest;

class UpdateForm extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            //
            'id' => ['required', 'integer'],
            'name' => ['sometimes'],
            'description' => ['sometimes'],
            'short_description' => ['sometimes'],
            'status' => ['sometimes', new Enum(PropertyStatusEnum::class)],
            'price' => ['sometimes'],
            'type_id' => [
                'sometimes',
                'integer',
                function ($attribute, $value, $fail) {
                    $this->validateType($value, $fail, PropertyTypes::query());
                }
            ],
            'state_id' => [
                'sometimes',
                'integer',
                function ($attribute, $value, $fail) {
                    $this->validateType($value, $fail, State::query());
                }
            ],
            'tenure' => ['sometimes', 'in:freehold,leasehold'],
            'bathroom' => ['sometimes', 'integer'],
            'bedroom' => ['sometimes', 'integer'],
            'square_feet' => ['sometimes', 'integer'],
            'listing_type' => ['sometimes', 'in:sale,rent'],
            'furnishing' => ['sometimes', 'in:unfurnished,partially_furnished,furnished'],
            'property_details' => ['sometimes', 'boolean']
        ];
    }

    /**
     * Validate the state ID.
     *
     * @param mixed $value
     * @param callable $fail
     * @return void
     */
    private function validateType($value, $fail, $query)
    {
        $list = $query->where('id', $value)->first();

        if (!$list) {
            $fail('The :attribute is not included in list.');
        }
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'property_details' => $this->input('property_details') === '1' ? true : false,
        ]);
    }
}