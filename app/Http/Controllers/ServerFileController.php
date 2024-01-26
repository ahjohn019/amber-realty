<?php

namespace App\Http\Controllers;

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
        $fetchModulePath = array_column($payload, 'module_path');
        $countBannerImage = array_count_values($fetchModulePath)['banner-image'] ?? 0;

        if ($countBannerImage > 1) {
            return self::failedResponse('Banner Cannot Add More Than One', 'Banner Unavailable', Response::HTTP_BAD_REQUEST);
        }


        collect($payload)->each(
            function ($pEntity) {
                $model = ServerFile::find($pEntity['file_id']);
                $file = isset($pEntity['file']) ? $pEntity['file'] : null;

                ImageService::updateServerImage($pEntity, $model, $file);
            }
        );
    }

    public function delete(Request $request)
    {
        $result = ImageService::deleteImage($request);
        return self::successResponse('Deleted Successfully', $result);
    }
}
