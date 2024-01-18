<?php

namespace App\Http\Services;

use App\Models\ServerFile;
use App\Traits\ServerFileTrait;
use Illuminate\Http\UploadedFile;

class ImageService
{
    public static function createImage(array $payload, $model, $file = null)
    {
        $serverFile = ServerFileTrait::uploadServerFiles($file, [
            'model_id' => $model->id,
            'image' => $file,
            'module_path' => ServerFile::MODULE_PATH_WEB_IMAGE,
            'file_type_id' => ServerFile::FILE_TYPE_IMAGE,
            'max_size' => 1000,
            'width' => isset($payload['width']) ? $payload['width'] : "",
            'height' => isset($payload['height']) ? $payload['height'] : "",
            'folder_name' => $payload['folder_name'],
        ]);

        $result = $model->image()->updateOrCreate($serverFile);

        return $result;
    }

    public static function updateImage(array $payload, $model)
    {
        $checkFileExists = $model->image()->exists();

        if (!$checkFileExists) {
            return self::createImage($payload, $model);
        }

        $serverFile = ServerFileTrait::uploadServerFiles($payload['file'], [
            'model_id' => $model->id,
            'image' => $payload['file'],
            'module_path' => ServerFile::MODULE_PATH_WEB_IMAGE,
            'file_type_id' => ServerFile::FILE_TYPE_IMAGE,
            'max_size' => 1000,
            'width' => isset($payload['width']) ? $payload['width'] : "",
            'height' => isset($payload['height']) ? $payload['height'] : "",
            'server_files' => $model->image()->firstOrThrowError(),
            'folder_name' => $payload['folder_name']
        ], true);

        $result = $model->image()->update($serverFile);

        return $result;
    }

    public static function handleUploadImageAmount($payload, $property)
    {
        if ($payload['file'] instanceof UploadedFile) {
            ImageService::createImage($payload, $property, $payload['file']);
        }

        if (is_array($payload['file'])) {
            $payload['folder_name'] = 'Property';

            collect($payload['file'])->each(function ($item) use ($payload, $property) {
                ImageService::createImage($payload, $property, $item);
            });
        }
    }
}
