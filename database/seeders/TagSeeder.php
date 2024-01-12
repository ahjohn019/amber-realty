<?php

namespace Database\Seeders;

use App\Models\Tags;
use App\Models\PropertyTags;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('tags')->truncate();
        DB::table('property_tags')->truncate();

        Tags::factory(50)->create();
        PropertyTags::factory(50)->create();
    }
}
