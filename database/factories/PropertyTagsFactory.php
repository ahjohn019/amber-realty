<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class PropertyTagsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $dateByThisYear = fake()->dateTimeThisYear()->format('Y-m-d H:i:s');

        return [
            'property_id' => fake()->numberBetween(1, 50),
            'tag_id' => fake()->numberBetween(1, 50),
            'created_at' => $dateByThisYear,
            'updated_at' => $dateByThisYear
        ];
    }
}
