<?php

namespace App\Traits;

use Illuminate\Support\Facades\App;
use App\Exceptions\BadRequestExceptions;
use Symfony\Component\HttpFoundation\Response;

trait HasModelTrait
{
    public static function scopeFirstOrThrowError($query, String $message = 'Data Not Found', $status = Response::HTTP_NOT_FOUND)
    {
        return $query->firstOr(function () use ($message, $status) {
            throw new BadRequestExceptions($message, $status);
        });
    }

    public static function scopeSearchable($query, array $payload = null, array $hasModelForeign = null)
    {
        $searchableMain = isset($payload['searchable']) ? $payload['searchable'] : null;

        collect($searchableMain)->map(function ($search) use ($query, $payload, $hasModelForeign) {
            $searchKeyword = '%' . $payload['keyword'] . '%';

            $searchMainResult = $query->where($search, 'like', $searchKeyword)
                ->orWhere($search, 'like', $searchKeyword);

            if ($hasModelForeign) {
                collect($hasModelForeign)->each(function ($foreign, $key) use ($searchMainResult,  $searchKeyword) {
                    $searchMainResult->orWhereHas($key, function ($query) use ($foreign, $searchKeyword) {
                        $query->where($foreign, 'like', $searchKeyword);
                    });
                });
            }

            return $searchMainResult;
        });
    }

    public function scopeKeywordSearch($query, $column, $value)
    {
        $keywords = explode(' ', $value);

        return $query->where(function ($q) use ($column, $keywords) {
            foreach ($keywords as $keyword) {
                $q->where($column, 'like', '%' . $keyword . '%');
            }
        });
    }
}
