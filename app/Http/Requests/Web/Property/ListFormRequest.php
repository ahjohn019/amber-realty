<?php

namespace App\Http\Requests\Web\Property;

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
			'search' => ['nullable', 'nullable', 'string'],
			'search_by' => ['nullable', 'string'],
        ];
    }
}
