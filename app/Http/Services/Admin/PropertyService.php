<?php

namespace App\Http\Services\Admin;

use App\Models\Banner;
use App\Models\Slider;
use App\Models\Property;
use App\Enums\OrderByEnum;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use App\Http\Services\ImageService;
use App\Enums\Property\PropertyStatusEnum;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Resources\Admin\Property\PropertyResource;

class PropertyService
{
    private function handleNotFoundError()
    {
        return ['error' => 'Property Not Found', 'code' => Response::HTTP_NOT_FOUND];
    }

    private function handleUpdatePermissionError()
    {
        return ['error' => 'You are not allowed to update other people\'s posts', 'code' => Response::HTTP_FORBIDDEN];
    }

    private function handleException($th)
    {
        return ['error' => $th->getMessage(), 'code' => Response::HTTP_INTERNAL_SERVER_ERROR];
    }

    private function handleFileInit($payload)
    {
        foreach ($payload['file'] as $key => $value) {
            $newFileResult[$key] = ['file' => $value, 'module_path' => $payload['module_path'][$key]];
        }

        return $newFileResult;
    }

    private function handleCreateImage($payload, $property)
    {
        $fileResult = self::handleFileInit($payload);

        $modelType = [
            'banner-image' => $property->banner(),
            'slider-image' => $property->sliders()
        ];

        collect($fileResult)->each(function ($item) use ($payload, $modelType) {
            $model = $modelType[$item['module_path']]->create([
                'name' => $item['file']->getClientOriginalName(),
            ]);

            ImageService::createImage($payload, $model, $item);
        });
    }

    public function list(array $payload)
    {
        $postAttribute = $payload['attribute'] ?? OrderByEnum::createdAt->value;
        $postSortable = $payload['sortable'] ?? OrderByEnum::descending->value;

        $result = Property::where('status', PropertyStatusEnum::Active->value)
            ->orderBy($postAttribute, $postSortable)
            ->paginate($payload['paginate'] ?? 15);

        $result->load(['propertyDetail', 'propertyType', 'user', 'state']);
        $result = PropertyResource::collection($result)->response()->getData();

        return $result;
    }

    public function store(array $payload)
    {
        return DB::transaction(function () use ($payload) {
            try {
                if (isset($payload['file'])) {
                    $this->handleFileInit($payload);
                }

                $property = Property::create([
                    'name' => $payload['name'],
                    'description' => $payload['description'],
                    'short_description' => $payload['short_description'],
                    'status' => $payload['status'],
                    'price' => $payload['price'],
                    'type_id' => $payload['type_id'],
                    'state_id' => $payload['state_id'],
                    'user_id' => auth()->user()->id
                ]);

                if (isset($payload['file'])) {
                    $this->handleCreateImage($payload, $property);
                }

                if (isset($payload['property_details']) && $payload['property_details']) {
                    $property->propertyDetail()->create([
                        'property_id' => $property->id,
                        'tenure' => $payload['tenure'],
                        'bathroom' => $payload['bathroom'],
                        'bedroom' => $payload['bedroom'],
                        'car_park' => $payload['car_park'],
                        'square_feet' => $payload['square_feet'],
                        'listing_type' => $payload['listing_type'],
                        'furnishing' => $payload['furnishing']
                    ]);
                }

                return $property;
            } catch (\Throwable $th) {
                return $this->handleException($th);
            }
        });
    }

    public function show($id)
    {
        try {
            $property = Property::find($id);

            if (!$property) {
                return $this->handleNotFoundError();
            }

            $property->load(['propertyDetail', 'propertyType', 'user', 'state', 'banner.image', 'sliders.image']);
            $result = new PropertyResource($property);

            return $result;
        } catch (\Throwable $th) {
            return $this->handleException($th);
        }
    }

    public function update($payload, $id)
    {
        return DB::transaction(function () use ($payload, $id) {
            try {
                if (isset($payload['file'])) {
                    $this->handleFileInit($payload);
                }

                $property = Property::find($id);

                if (isset($payload['file'])) {
                    $this->handleCreateImage($payload, $property);
                }

                if (!$property) {
                    return $this->handleNotFoundError();
                }

                if ($property->user_id != auth()->user()->id) {
                    return $this->handleUpdatePermissionError();
                }

                $property->update([
                    'name' => $payload['name'],
                    'description' => $payload['description'],
                    'short_description' => $payload['short_description'],
                    'status' => $payload['status'],
                    'price' => $payload['price'],
                    'type_id' => $payload['type_id'],
                    'state_id' => $payload['state_id'],
                    'user_id' => auth()->user()->id
                ]);

                if (isset($payload['property_details']) && $payload['property_details']) {
                    $property->propertyDetail()->updateOrCreate(
                        ['property_id' => $property->id],
                        [
                            'property_id' => $property->id,
                            'tenure' => $payload['tenure'],
                            'bathroom' => $payload['bathroom'],
                            'bedroom' => $payload['bedroom'],
                            'car_park' => $payload['car_park'],
                            'square_feet' => $payload['square_feet'],
                            'listing_type' => $payload['listing_type'],
                            'furnishing' => $payload['furnishing']
                        ]
                    );
                }

                $property->load(['propertyDetail', 'propertyType', 'user', 'state']);

                return $property;
            } catch (\Throwable $th) {
                return $this->handleException($th);
            }
        });
    }

    public function delete($id)
    {
        return DB::transaction(function () use ($id) {
            try {
                $property = Property::find($id);

                if (!$property) {
                    return $this->handleNotFoundError();
                }

                $payload = $property->delete();
                $property->image()->delete();
                $property->propertyDetail()->delete();

                return $payload;
            } catch (\Throwable $th) {
                return $this->handleException($th);
            }
        });
    }
}
