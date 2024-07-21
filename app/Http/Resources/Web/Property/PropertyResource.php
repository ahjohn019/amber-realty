<?php

namespace App\Http\Resources\Web\Property;

use Illuminate\Http\Request;
use App\Http\Resources\Ref\StateResource;
use App\Http\Resources\Admin\User\UserResource;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Web\Property\PropertyDetailsResource;
use Pylon\JsonResourceKit\Traits\BaseJsonResource;

class PropertyResource extends JsonResource
{
    use BaseJsonResource;

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "name" => ucwords($this->name),
            "description" => $this->description,
            "short_description" => nl2br($this->short_description),
            "full_address" => $this->full_address,
            "price" => $this->price,
            "type" => $this->propertyType->name,
            "status" => $this->status,
            "state" => new StateResource($this->state),
            "user" => new UserResource($this->user),
            "details" => new PropertyDetailsResource($this->propertyDetail),
            "listing_type" => $this->listing_type,
            "propertyType" => $this->propertyType,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            "banner" => $this->banner,
            "sliders" => $this->sliders,
            'details_toggle' => $this->details == 1 ? true : false,
            'nearby_details' => $this->nearbyDetails,
            'user_shortlists' => $this->property_users->isNotEmpty()
        ];
    }
}
