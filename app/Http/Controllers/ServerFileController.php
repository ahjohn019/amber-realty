<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Slider;
use App\Models\ServerFile;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
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

        collect($payload)->each(
            function ($pEntity) use ($modelType) {
                if (isset($pEntity['file'])) {
                    $model = $modelType[$pEntity['module_path']]->find($pEntity['id']);
                    $serverFile = $model->image()->first();

                    $model->update([
                        'name' => $pEntity['file']->getClientOriginalName()
                    ]);

                    if (isset($pEntity['sequences'])) {
                        $model->update(['seq_value' => $pEntity['sequences']]);
                    }

                    if (isset($pEntity['file'])) {
                        ImageService::updateServerImage($pEntity, $serverFile, $pEntity['file']);
                    }
                }
            }
        );


        return self::successResponse('Updated Successfully');
    }

    public function delete(Request $request)
    {
        $result = ImageService::deleteImage($request);
        return self::successResponse('Deleted Successfully', $result);
    }

    public function updateSequence(Request $request)
    {
        $modelType = [
            'banner-image' => new Banner,
            'slider-image' => new Slider
        ];

        $modulePath = $request['module_path'];

        $existModulePath = $modelType[$modulePath]->find($request['id']);
        $fetchPreviousId = $existModulePath->seq_value;
        $existModulePath->update(['seq_value' => $request['sequences']]);

        $previousModulePath = $modelType[$modulePath]->handlePreviousModulePath($request)->first();
        $previousModulePath->update(['seq_value' => $fetchPreviousId]);

        $getLatestModulePath = $modelType[$modulePath]->where('entity_id', $request['entity_id'])->with('image')->get();

        return self::successResponse('Sequence Display Successfully', $getLatestModulePath);
    }
}
