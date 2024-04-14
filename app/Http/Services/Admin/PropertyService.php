<?php

namespace App\Http\Services\Admin;

use App\Models\Property;
use App\Enums\OrderByEnum;
use App\Models\PropertyHighlight;
use Illuminate\Support\Facades\DB;
use App\Http\Services\ImageService;
use App\Http\Services\ExceptionService;
use App\Enums\Property\PropertyStatusEnum;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Resources\Admin\Property\PropertyResource;

class PropertyService
{
    public function __construct(
        protected ExceptionService $exceptionService,
        protected ImageService $imageService
    ) {
    }

    private function createImage($payload, $property)
    {
        $modelType = [
            'banner-image' => $property->banner(),
            'slider-image' => $property->sliders()
        ];

        $this->imageService->handleCreateImage($payload, $modelType);
    }

    public function list(array $payload)
    {
        $postAttribute = $payload['attribute'] ?? OrderByEnum::createdAt->value;
        $postSortable = $payload['sortable'] ?? OrderByEnum::descending->value;

        $result = Property::where('status', PropertyStatusEnum::Active->value)
            ->orderBy($postAttribute, $postSortable)
            ->searchable($payload)
            ->paginate($payload['paginate'] ?? 15);

        $result->load(['propertyDetail', 'propertyType', 'user', 'state', 'highlight']);
        $result = PropertyResource::collection($result)->response()->getData();

        return $result;
    }

    public function store(array $payload)
    {
        return DB::transaction(function () use ($payload) {
            try {
                if (isset($payload['file'])) {
                    $this->imageService->handleFileInit($payload);
                }

                $property = Property::create([
                    'name' => $payload['name'],
                    'description' => $payload['description'],
                    'short_description' => $payload['short_description'],
                    'full_address' => isset($payload['full_address']) ? $payload['full_address'] : null,
                    'status' => $payload['status'],
                    'price' => $payload['price'],
                    'type_id' => $payload['type_id'],
                    'state_id' => $payload['state_id'],
                    'listing_type' => $payload['listing_type'],
                    'details' => $payload['property_details'],
                    'user_id' => auth()->user()->id
                ]);

                if (isset($payload['file'])) {
                    $this->createImage($payload, $property);
                }

                if (isset($payload['property_details']) && $payload['property_details']) {
                    $property->propertyDetail()->create([
                        'property_id' => $property->id,
                        'tenure' => $payload['tenure'],
                        'bathroom' => $payload['bathroom'],
                        'bedroom' => $payload['bedroom'],
                        'car_park' => $payload['car_park'],
                        'square_feet' => $payload['square_feet'],
                        'furnishing' => $payload['furnishing']
                    ]);
                }

                return $property;
            } catch (\Throwable $th) {
                return $this->exceptionService->exception($th->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
            }
        });
    }

    public function show($id)
    {
        try {
            $property = Property::find($id);

            if (!$property) {
                return $this->exceptionService->exception('Property Not Found', Response::HTTP_NOT_FOUND);
            }

            $property->load(['propertyDetail', 'propertyType', 'user', 'state', 'banner.image', 'sliders.image']);
            $result = new PropertyResource($property);

            return $result;
        } catch (\Throwable $th) {
            return $this->exceptionService->exception($th->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function update($payload, $id)
    {
        return DB::transaction(function () use ($payload, $id) {
            try {
                if (isset($payload['file'])) {
                    $this->imageService->handleFileInit($payload);
                }

                $property = Property::find($id);

                if (isset($payload['file'])) {
                    $this->createImage($payload, $property);
                }

                if (!$property) {
                    return $this->exceptionService->exception('Property Not Found', Response::HTTP_NOT_FOUND);
                }

                if ($property->user_id != auth()->user()->id) {
                    return $this->exceptionService->exception('You are not allowed to update other people\'s posts', Response::HTTP_FORBIDDEN);
                }

                $property->update([
                    'name' => $payload['name'],
                    'description' => $payload['description'],
                    'short_description' => $payload['short_description'],
                    'full_address' => isset($payload['full_address']) ? $payload['full_address'] : null,
                    'status' => $payload['status'],
                    'price' => $payload['price'],
                    'type_id' => $payload['type_id'],
                    'state_id' => $payload['state_id'],
                    'listing_type' => $payload['listing_type'],
                    'details' => $payload['property_details'],
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
                            'furnishing' => $payload['furnishing']
                        ]
                    );
                }

                $property->load(['propertyDetail', 'propertyType', 'user', 'state']);

                return $property;
            } catch (\Throwable $th) {
                return $this->exceptionService->exception($th->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
            }
        });
    }

    public function delete($id)
    {
        return DB::transaction(function () use ($id) {
            try {
                $property = Property::find($id);

                if (!$property) {
                    return $this->exceptionService->exception('Property Not Found', Response::HTTP_NOT_FOUND);
                }

                $payload = $property->delete();
                $property->image()->delete();
                $property->propertyDetail()->delete();

                return $payload;
            } catch (\Throwable $th) {
                return $this->exceptionService->exception($th->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
            }
        });
    }

    public function submitHighlight($params)
    {
        $filterHighlight = array_filter($params, function ($value) {
            return $value['highlight'];
        });

        if (count($filterHighlight) > 3) {
            return $this->exceptionService->exception("Select only three property highlights.", Response::HTTP_BAD_REQUEST);
        }

        return DB::transaction(function () use ($params) {
            try {
                collect($params)->each(function ($item) {
                    $result = PropertyHighlight::updateOrCreate([
                        'property_id' => $item['id'],
                        'user_id' => auth()->user()->id
                    ], [
                        'property_id' => $item['id'],
                        'user_id' => auth()->user()->id,
                        'status' => $item['highlight'] ? 1 : 0
                    ]);

                    return $result;
                });
            } catch (\Throwable $th) {
                return $this->exceptionService->exception($th->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
            }
        });
    }
}
