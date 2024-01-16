<?php

namespace App\Http\Requests\Admin\Property;

use App\Models\State;
use App\Models\PropertyTypes;
use App\Enums\Property\PropertyStatusEnum;
use Illuminate\Validation\Rules\Enum;
use Illuminate\Foundation\Http\FormRequest;

class CreateForm extends FormRequest
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
            'name' => ['required', 'unique:properties'],
            'description' => ['sometimes'],
            'short_description' => ['sometimes'],
            'status' => ['required', new Enum(PropertyStatusEnum::class)],
            'price' => ['required'],
            'type_id' => [
                'required',
                'integer',
                function ($attribute, $value, $fail) {
                    $this->validateType($value, $fail, PropertyTypes::query());
                }
            ],
            'state_id' => [
                'required',
                'integer',
                function ($attribute, $value, $fail) {
                    $this->validateType($value, $fail, State::query());
                }
            ],
            'tenure' => ['required', 'in:freehold,leasehold'],
            'bathroom' => ['required', 'integer', 'between:1,10'],
            'bedroom' => ['required', 'integer', 'between:1,10'],
            'square_feet' => ['required', 'integer'],
            'listing_type' => ['required', 'in:sale,rent'],
            'furnishing' => ['required', 'in:unfurnished,partially_furnished,furnished'],
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
        $list = $query->pluck('id')->toArray();

        if (!in_array($value, $list)) {
            $fail('The :attribute is not included in list.');
        }
    }
}
