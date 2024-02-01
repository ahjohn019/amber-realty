<?php

namespace Pylon\JsonResourceKit;

use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class BaseAnonymousResourceCollection extends AnonymousResourceCollection
{
	public function nestedAdditional(array $data)
	{
		return $this->collection->each->additional($data);
	}
}
