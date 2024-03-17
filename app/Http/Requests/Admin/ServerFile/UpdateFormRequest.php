<?php

namespace App\Http\Requests\Admin\ServerFile;

use Illuminate\Foundation\Http\FormRequest;

class UpdateFormRequest extends FormRequest
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
            'sequenceFiles' => ['sometimes'],
            'files' => ['sometimes'],
            '*.file' => ['file', 'max:1024', 'mimes:jpeg,png'],
            '*.module_path' => ['sometimes'],
            '*.id' => ['sometimes'],
        ];
    }
}
