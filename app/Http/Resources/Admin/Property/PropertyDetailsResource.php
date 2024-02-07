<?php

namespace App\Http\Resources\Admin\Property;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PropertyDetailsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'tenure' => $this->tenure,
            'bathroom' => $this->bathroom,
            'bedroom' => $this->bedroom,
            'car_park' => $this->car_park,
            'square_feet' => $this->square_feet,
            'furnishing' => $this->furnishing,
        ];
    }
}
