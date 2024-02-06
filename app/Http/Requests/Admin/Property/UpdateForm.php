<?php

namespace App\Http\Requests\Admin\Property;

use App\Models\State;
use App\Models\Banner;
use App\Models\Property;
use App\Models\PropertyTypes;
use Illuminate\Validation\Rules\Enum;
use App\Enums\Property\PropertyStatusEnum;
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
        $modulePathValidation = ['sometimes'];

        if (in_array("banner-image", request()->module_path)) {
            $modulePathBannerValidation = [$this->uniqueBannerImage()];
            $modulePathValidation = array_merge($modulePathBannerValidation, $modulePathValidation);
        }

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
            'car_park' => ['sometimes', 'integer', 'between:1,10'],
            'square_feet' => ['sometimes', 'integer'],
            'listing_type' => ['sometimes', 'in:sale,rent'],
            'furnishing' => ['sometimes', 'in:unfurnished,partially_furnished,furnished'],
            'property_details' => ['sometimes', 'boolean'],
            'file' => ['nullable'],
            'file.*' => ['file', 'max:5120', 'mimes:jpeg,png'],
            'module_path' => $modulePathValidation,
            'banner_url' => ['nullable'],
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

    /**
     * Get a unique value validation rule instance.
     *
     * @return \Illuminate\Contracts\Validation\Rule
     */
    protected function uniqueBannerImage()
    {
        return function ($attribute, $value, $fail) {
            $banner = Banner::where('entity_id', request()->id)->exists();

            if ($banner) {
                $fail('Banner Image Already Exists');
            }
        };
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'property_details' => $this->input('property_details') === '1' ? true : false,
        ]);
    }
}
