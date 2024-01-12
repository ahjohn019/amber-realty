<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Property>
 */
class PropertyFactory extends Factory
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
            //
            'name' => fake()->name,
            'description' => fake()->paragraph,
            'short_description' => fake()->sentence,
            'price' => fake()->randomFloat(2, 100000, 999999),
            'type_id' => fake()->numberBetween(1, 8),
            'user_id' => 1,
            'state_id' => fake()->numberBetween(1, 16),
            'status' => fake()->randomElement(['active', 'inactive']),
            'created_at' => $dateByThisYear,
            'updated_at' => $dateByThisYear
        ];
    }
}
