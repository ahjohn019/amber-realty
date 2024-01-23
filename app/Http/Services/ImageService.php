<?php

namespace App\Http\Services;

use App\Models\ServerFile;
use App\Traits\ServerFileTrait;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class ImageService
{
    public static function initServerImage(array $payload, $model, $file = null)
    {
        return [
            'model_id' => $model->id,
            'image' => $file,
            'module_path' => isset($payload['banner_url_name']) ? $payload['banner_url_name'] : ServerFile::MODULE_PATH_WEB_IMAGE,
            'file_type_id' => ServerFile::FILE_TYPE_IMAGE,
            'max_size' => 1000,
            'width' => isset($payload['width']) ? $payload['width'] : "",
            'height' => isset($payload['height']) ? $payload['height'] : "",
            'folder_name' => isset($payload['folder_name']) ?  $payload['folder_name'] : "",
        ];
    }

    public static function createImage(array $payload, $model, $file = null)
    {
        $serverFile = ServerFileTrait::uploadServerFiles($file, self::initServerImage($payload, $model, $file));
        $result = $model->image()->create($serverFile);

        return $result;
    }

    public static function updateServerImage(array $payload, $model, $file = null)
    {
        $uploadable = $model->uploadable()->first();
        $initServerImage = self::initServerImage($payload, $uploadable, $file);
        $serverFiles = ['server_files' => $model->first()->firstOrThrowError()];
        $serverImageMerge = array_merge($serverFiles, $initServerImage);
        $serverFile = ServerFileTrait::uploadServerFiles($file, $serverImageMerge, true);

        $result = $model->update($serverFile);

        return $result;
    }

    public static function updateBannerImage(array $payload, $model, $file = null)
    {
        $bannerPath = $model->image()->where('module_path', $payload['banner_url_name']);
        $initServerImage = self::initServerImage($payload, $model, $file);
        $serverFiles = ['server_files' => $model->image()->firstOrThrowError()];
        $serverImageMerge = array_merge($serverFiles, $initServerImage);
        $serverFile = ServerFileTrait::uploadServerFiles($file, $serverImageMerge, true);

        $result = $bannerPath->update($serverFile);

        return $result;
    }

    public static function deleteImage($payload)
    {
        $result = Storage::disk(config('filesystems.default'))->delete('/' . $payload->uploadable_id . '/' . $payload->name);
        $model = ServerFile::find($payload->id);
        $model->delete();

        return $result;
    }

    public static function handleUploadImageAmount(array $payload, $model, $file, $type)
    {
        if ($file instanceof UploadedFile) {
            $payload['banner_url_name'] = 'banner-image';

            if ($type == 'update') {
                self::updateBannerImage($payload, $model, $file);
            } else {
                self::createImage($payload, $model, $file);
            }
        }

        if (is_array($file)) {
            collect($file)->each(function ($item) use ($payload, $model) {
                $payload['banner_url_name'] = 'slider-image';
                self::createImage($payload, $model, $item);
            });
        }
    }

    public static function handleFileCategory(array $payload, $property, $fileName, $type = null)
    {
        $file = [
            'banner_url' => isset($payload['banner_url']) ? $payload['banner_url'] : null,
            'file' => isset($payload['file']) ? $payload['file'] : null,
        ];

        if ($file[$fileName]) {
            self::handleUploadImageAmount($payload, $property, $file[$fileName], $type);
        }
    }
}
