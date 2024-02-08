<?php

namespace App\Http\Resources\Admin\Property;

use Illuminate\Http\Request;
use App\Http\Resources\Ref\StateResource;
use App\Http\Resources\Admin\User\UserResource;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Admin\Property\PropertyDetailsResource;

class PropertyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "description" => $this->description,
            "short_description" => nl2br($this->short_description),
            "price" => $this->price,
            "type" => $this->propertyType->name,
            "status" => $this->status,
            "state" => new StateResource($this->state),
            "user" => new UserResource($this->user),
            "details" => new PropertyDetailsResource($this->propertyDetail),
            'listing_type' => $this->listing_type,
            "created_at" => $this->created_at,
            "banner" => $this->banner,
            "sliders" => $this->sliders
        ];;
    }
}
