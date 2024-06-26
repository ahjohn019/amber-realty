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
            'description' => ['required'],
            'short_description' => ['required', 'max:255'],
            'full_address' =>  ['sometimes'],
            'status' => ['required', new Enum(PropertyStatusEnum::class)],
            'price' => ['required', 'integer', 'min:300'],
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
            'tenure' => ['sometimes', 'in:freehold,leasehold'],
            'bathroom' => ['sometimes', 'integer', 'between:1,10'],
            'bedroom' => ['sometimes', 'integer', 'between:1,10'],
            'car_park' => ['sometimes', 'integer', 'between:1,10'],
            'square_feet' => ['sometimes', 'integer'],
            'listing_type' => ['required', 'in:sale,rent'],
            'furnishing' => ['sometimes', 'in:unfurnished,partially_furnished,furnished'],
            'property_details' => ['sometimes', 'boolean'],
            'file' => ['nullable'],
            'file.*' => ['file', 'max:1024', 'mimes:jpeg,png'],
            'sequences.*' => ['sometimes'],
            'module_path' => ['nullable', $this->uniqueBannerImage()],
            'banner_url' => ['nullable'],
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'type_id.required' => 'Property types required.',
            'state_id.required' => 'State required.',
        ];
    }

    /**
     * Get a unique value validation rule instance.
     *
     * @return \Illuminate\Contracts\Validation\Rule
     */
    protected function uniqueBannerImage()
    {
        return function ($attribute, $value, $fail) {
            $checkBannerImage = array_count_values($value)['banner-image'] ?? 0;

            if ($checkBannerImage > 1) {
                $fail('Banner Image Cannot More Than One');
            }
        };
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
