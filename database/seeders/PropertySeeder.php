<?php

namespace Database\Seeders;

use App\Models\Property;
use App\Models\PropertyDetails;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PropertySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('properties')->truncate();
        DB::table('property_details')->truncate();

        Property::factory(50)->create();
        PropertyDetails::factory(50)->create();
    }
}
