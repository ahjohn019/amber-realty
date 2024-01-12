<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class TagsFactory extends Factory
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
            'name' => fake()->word,
            'created_at' => $dateByThisYear,
            'updated_at' => $dateByThisYear
        ];
    }
}
