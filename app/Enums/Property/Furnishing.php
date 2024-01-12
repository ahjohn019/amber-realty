<?php

namespace App\Enums\Property;

enum Furnishing: string
{
    case Unfurnished = 'unfurnished';
    case Partially_Furnished = 'partially_furnished';
    case Furnished = 'furnished';
}
