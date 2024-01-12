<?php

namespace Database\Seeders;

use App\Models\PropertyTypes;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PropertyTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('property_types')->truncate();

        $currentTimestamp = now()->format('Y-m-d H:i:s');

        $propertyTypes = [
            ['name' => 'House', 'slug' => 'house', 'created_at' => $currentTimestamp, 'updated_at' => $currentTimestamp],
            ['name' => 'Apartment', 'slug' => 'apartment', 'created_at' => $currentTimestamp, 'updated_at' => $currentTimestamp],
            ['name' => 'Condo', 'slug' => 'condo', 'created_at' => $currentTimestamp, 'updated_at' => $currentTimestamp],
            ['name' => 'Townhouse', 'slug' => 'townhouse', 'created_at' => $currentTimestamp, 'updated_at' => $currentTimestamp],
            ['name' => 'Villa', 'slug' => 'villa', 'created_at' => $currentTimestamp, 'updated_at' => $currentTimestamp],
            ['name' => 'Bungalow', 'slug' => 'bungalow', 'created_at' => $currentTimestamp, 'updated_at' => $currentTimestamp],
            ['name' => 'Terrace', 'slug' => 'terrace', 'created_at' => $currentTimestamp, 'updated_at' => $currentTimestamp],
            ['name' => 'Studio', 'slug' => 'studio', 'created_at' => $currentTimestamp, 'updated_at' => $currentTimestamp],
        ];

        PropertyTypes::insert($propertyTypes);
    }
}
