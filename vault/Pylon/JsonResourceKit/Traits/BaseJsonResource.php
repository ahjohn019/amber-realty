<?php

namespace Pylon\JsonResourceKit\Traits;

use Pylon\JsonResourceKit\BaseAnonymousResourceCollection;
use Pylon\JsonResourceKit\PaginateResourceCollection;

trait BaseJsonResource
{
	/**
	 * Create a new anonymous resource collection.
	 *
	 * @param mixed $resource
	 *
	 * @return \Pylon\Resources\BaseAnonymousResourceCollection
	 */
	public static function collection($resource)
	{
		return tap(new BaseAnonymousResourceCollection($resource, static::class), function ($collection)
		{
			if (property_exists(static::class, 'preserveKeys'))
			{
				$collection->preserveKeys = (new static([]))->preserveKeys === true;
			}
		});
	}

	/**
	 * Create a new anonymous resource collection.
	 *
	 * @param mixed $resource
	 *
	 * @return \Pylon\Resources\PaginateResourceCollection
	 */
	public static function paginateCollection($resource)
	{
		return tap(new PaginateResourceCollection($resource, static::class), function ($collection)
		{
			if (property_exists(static::class, 'preserveKeys'))
			{
				$collection->preserveKeys = (new static([]))->preserveKeys === true;
			}
		});
	}
}
