<?php

namespace App\Http\Resources\Web\Property;

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
            'tenure' => ucwords($this->tenure),
            'bathroom' => $this->bathroom,
            'bedroom' => $this->bedroom,
            'square_feet' => $this->square_feet,
            'listing_type' => ucwords($this->listing_type),
            'furnishing' => $this->furnishing,
        ];
    }
}