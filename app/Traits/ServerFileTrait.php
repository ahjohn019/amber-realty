<?php

namespace App\Traits;

use Illuminate\Http\UploadedFile;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;

trait ServerFileTrait
{
    public static function uploadServerFiles(UploadedFile $file, array $payload, $clearStorage = false): array
    {
        //
        $disk = $payload['disk'] ?? config('filesystems.default');
        $file_type_id = $payload['file_type_id'];
        $folderName = $payload['folder_name'] ?? 'uploads';

        $resizeImages = self::resizeImage($file, $payload['width'], $payload['height']);
        $storageDisk = Storage::disk($disk);
        $filePath = $folderName . '/' . $payload['model_id'] . '/';

        $storageDisk->put($filePath .  $file->hashName(), (string)$resizeImages->encode());

        $serverFileArr = [
            'name' => $file->hashName(),
            'url' => Storage::disk($disk)->url($filePath . $file->hashName()),
            'disk' => $disk,
            'file_type_id' => $file_type_id,
            'mime_type' => $file->getMimeType(),
            'extension' => $file->extension(),
            'size' => $file->getSize(),
            'ori_file' => $file->getClientOriginalName(),
            'uploadable_id' => $payload['model_id'],
        ];

        if (isset($payload['module_path'])) {
            $modulePath = ['module_path' => $payload['module_path']];
            $serverFileArr = array_merge($modulePath, $serverFileArr);
        }

        return $serverFileArr;
    }

    public static function resizeImage($file, $width, $height)
    {
        $imgFile = Image::make($file->getRealPath());
        $imgFile->resize($width, $height, function ($constraint) {
            $constraint->aspectRatio();
        });

        return $imgFile;
    }

    public static function scopeHandlePreviousModulePath($query, $request)
    {
        return $query->where('seq_value', $request['sequences'])
            ->where('entity_id', $request['entity_id'])
            ->where('id', '!=', $request['id']);
    }
}
