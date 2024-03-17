<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Slider;
use Illuminate\Http\Request;
use App\Http\Services\ImageService;
use App\Http\Requests\Admin\ServerFile\UpdateFormRequest;

class ServerFileController extends Controller
{
    //
    public function update(UpdateFormRequest $request)
    {
        $payload = $request->validated();

        $modelType = [
            'banner-image' => new Banner,
            'slider-image' => new Slider
        ];

        if (isset($payload['sequenceFiles'])) {
            collect($payload['sequenceFiles'])->each(
                function ($pEntity) use ($modelType) {
                    $model = $modelType[$pEntity['module_path']]->find($pEntity['id']);
                    $model->update(['seq_value' => $pEntity['seq_value']]);
                }
            );
        }

        if (isset($payload['files'])) {
            collect($payload['files'])->each(
                function ($pEntity) use ($modelType) {
                    if (isset($pEntity['file'])) {
                        $model = $modelType[$pEntity['module_path']]->find($pEntity['id']);
                        $serverFile = $model->image()->first();

                        $model->update([
                            'name' => $pEntity['file']->getClientOriginalName()
                        ]);

                        if (isset($pEntity['file'])) {
                            ImageService::updateServerImage($pEntity, $serverFile, $pEntity['file']);
                        }
                    }
                }
            );
        }

        return self::successResponse('Updated Successfully');
    }

    public function delete(Request $request)
    {
        $result = ImageService::deleteImage($request);
        return self::successResponse('Deleted Successfully', $result);
    }
}
