<?php

namespace App\Queriplex;

use Kyrax324\Queriplex\Queriplex;

class PropertyQueriplex extends Queriplex
{
	public $sortingKey = "sort_by";

	/**
	 * Get the filtering rules that apply to the model builder.
	 *
	 * @return array
	 */
	public function filterRules()
	{
		return [
			'id' => 'id',
			'active' => 'active',
			'min_price' => function ($query, $value) {
				if ($value) {
					$query->where('price', ">=", $value);
				}
			},
			'max_price' => function ($query, $value) {
				if ($value) {
					$query->where('price', "<=", $value);
				}
			},
			'min_floor_size' => function ($query, $value) {
				if ($value) {
					$query->whereHas('propertyDetail', function ($q) use ($value) {
						$q->where('square_feet', ">=", $value);
					});
				}
			},
			'max_floor_size' => function ($query, $value) {
				if ($value) {
					$query->whereHas('propertyDetail', function ($q) use ($value) {
						$q->where('square_feet', "<=", $value);
					});
				}
			},
			'listing_type' => function ($query, $value) {
				if ($value) {
					$query->where('listing_type', $value);
				}
			},
			'property_types' => function ($query, $value) {
				$query->whereHas('propertyType', function ($q) use ($value) {
					$q->whereIn('id', $value);
				});
			},
			'tenures' => function ($query, $value) {
				$query->whereHas('propertyDetail', function ($q) use ($value) {
					$q->whereIn('tenure', $value);
				});
			},
			'state_id' => 'state_id',
			'search' => (fn ($query, $value) => $this->searchQuery($query, $value))
		];
	}

	/**
	 * Get the sorting rules that apply to the model builder.
	 *
	 * @return array
	 */
	public function sortRules()
	{
		$orderMode = $this->getInput('sort_desc') ? "DESC" : "ASC";

		return [
			"id" => fn ($query) => $query->orderBy('id', $orderMode),
			"date" => fn ($query) => $query->orderBy('updated_at', $orderMode),
			"price" => fn ($query) => $query->orderBy('price', $orderMode),
		];
	}

	private function searchQuery($query, $value)
	{
		$search_by = $this->getInput('search_by');

		$commonSearchable = [
			'id',
			'name',
		];

		if (in_array($search_by, $commonSearchable)) {
			$query->keywordSearch($search_by, $value);
		} else {
			switch ($search_by) {
				default:
					break;
			}
		}

		return null;
	}
}
