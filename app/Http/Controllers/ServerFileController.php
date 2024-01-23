<?php

namespace App\Http\Controllers;

use App\Models\Property;
use App\Models\ServerFile;
use Illuminate\Http\Request;
use App\Http\Services\ImageService;
use Illuminate\Support\Facades\Storage;

class ServerFileController extends Controller
{
    //
    public function update(Request $request)
    {
        $payload = $request->all();

        collect($payload)->each(function ($item) use ($payload) {
            $model = ServerFile::find($item['id']);
            $payload['banner_url_name'] = 'slider-image';


            ImageService::updateServerImage($payload, $model, $item['file']);
        });
    }

    public function delete(Request $request)
    {
        $result = ImageService::deleteImage($request);
        return self::successResponse('Deleted Successfully', $result);
    }
}
