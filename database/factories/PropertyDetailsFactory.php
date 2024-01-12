<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PropertyDetails>
 */
class PropertyDetailsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $dateByThisYear = fake()->dateTimeThisYear()->format('Y-m-d H:i:s');
        $propertyId = 50;

        return [
            'property_id' => fake()->unique()->numberBetween(1, $propertyId),
            'tenure' => fake()->randomElement(['freehold', 'leasehold']),
            'bathroom' => fake()->numberBetween(1, 10),
            'bedroom' => fake()->numberBetween(1, 10),
            'square_feet' => fake()->numberBetween(1000, 9999),
            'listing_type' => fake()->randomElement(['sale', 'rent']),
            'furnishing' => fake()->randomElement(['unfurnished', 'partially_furnished', 'furnished']),
            'created_at' => $dateByThisYear,
            'updated_at' => $dateByThisYear
        ];
    }
}
