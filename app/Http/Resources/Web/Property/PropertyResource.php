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
            "short_description" => $this->short_description,
            "price" => $this->price,
            "type" => $this->propertyType->name,
            "status" => $this->status,
            "state" => new StateResource($this->state),
            "user" => new UserResource($this->user),
            "details" => new PropertyDetailsResource($this->propertyDetail),
			"propertyType" => $this->propertyType,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            "banner_image" => $this->image()->where('module_path', 'banner-image')->first(),
            "slider_image" => $this->image()->where('module_path', 'slider-image')->get(),
        ];
    }
}
