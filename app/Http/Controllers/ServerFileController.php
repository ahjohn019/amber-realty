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

        collect($payload)->each(
            function ($pEntity) {
                $model = ServerFile::where('uploadable_id', $pEntity['id'])->first();
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
