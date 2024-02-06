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
                $model = $modelType[$pEntity['module_path']]->find($pEntity['id'])->image()->first();
                ImageService::updateServerImage($pEntity, $model, $pEntity['file']);
            }
        );

        return self::successResponse('Updated Successfully');
    }

    public function delete(Request $request)
    {
        $result = ImageService::deleteImage($request);
        return self::successResponse('Deleted Successfully', $result);
    }
}
