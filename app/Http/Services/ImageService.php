<?php

namespace App\Http\Services;

use App\Models\Banner;
use App\Models\Slider;
use App\Models\ServerFile;
use App\Traits\ServerFileTrait;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class ImageService
{
    public static function initServerImage(array $payload, $model, $file = null)
    {
        $initServerImage = [
            'model_id' => $model->id,
            'image' => isset($file['file']) ? $file['file'] : null,
            'file_type_id' => ServerFile::FILE_TYPE_IMAGE,
            'max_size' => 1000,
            'width' => isset($payload['width']) ? $payload['width'] : "",
            'height' => isset($payload['height']) ? $payload['height'] : "",
            'folder_name' => isset($payload['folder_name']) ?  $payload['folder_name'] : "",
        ];

        if (isset($file['module_path'])) {
            $modulePath = ['module_path' => $file['module_path']];
            $initServerImage = array_merge($modulePath, $initServerImage);
        }

        return $initServerImage;
    }

    public static function createImage(array $payload, $model, $file = null)
    {
        $serverFile = ServerFileTrait::uploadServerFiles($file['file'], self::initServerImage($payload, $model, $file));
        $result = $model->image()->create($serverFile);

        return $result;
    }

    public static function updateServerImage(array $payload, $model, $file = null)
    {
        $uploadable = $model->uploadable()->first();
        $initServerImage = self::initServerImage($payload, $uploadable, $payload);
        $serverFiles = ['server_files' => $model->first()->firstOrThrowError()];
        $serverImageMerge = array_merge($serverFiles, $initServerImage);

        $uploadServerFiles = ServerFileTrait::uploadServerFiles($file, $serverImageMerge, true);
        $result = $model->update($uploadServerFiles);

        return $result;
    }

    public static function deleteImage($payload)
    {
        $result = Storage::disk(config('filesystems.default'))->delete('/' . $payload->uploadable_id . '/' . $payload->name);
        $model = ServerFile::find($payload->image['id']);

        $model->delete();
        $model->uploadable()->delete();

        return $result;
    }
}
