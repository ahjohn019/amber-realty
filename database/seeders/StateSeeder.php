<?php

namespace Database\Seeders;

use App\Models\State;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class StateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('states')->truncate();

        $currentTimestamp = now()->format('Y-m-d H:i:s');

        State::insert([
            ['name' => 'Johor', 'slug' => 'johor', 'created_at' => $currentTimestamp, 'updated_at' => $currentTimestamp],
            ['name' => 'Kedah', 'slug' => 'kedah', 'created_at' => $currentTimestamp, 'updated_at' => $currentTimestamp],
            ['name' => 'Kelantan', 'slug' => 'kelantan', 'created_at' => $currentTimestamp, 'updated_at' => $currentTimestamp],
            ['name' => 'Melaka', 'slug' => 'melaka', 'created_at' => $currentTimestamp, 'updated_at' => $currentTimestamp],
            ['name' => 'Negeri Sembilan', 'slug' => 'negeri-sembilan', 'created_at' => $currentTimestamp, 'updated_at' => $currentTimestamp],
            ['name' => 'Pahang', 'slug' => 'pahang', 'created_at' => $currentTimestamp, 'updated_at' => $currentTimestamp],
            ['name' => 'Perak', 'slug' => 'perak', 'created_at' => $currentTimestamp, 'updated_at' => $currentTimestamp],
            ['name' => 'Perlis', 'slug' => 'perlis', 'created_at' => $currentTimestamp, 'updated_at' => $currentTimestamp],
            ['name' => 'Pulau Pinang', 'slug' => 'pulau-pinang', 'created_at' => $currentTimestamp, 'updated_at' => $currentTimestamp],
            ['name' => 'Sabah', 'slug' => 'sabah', 'created_at' => $currentTimestamp, 'updated_at' => $currentTimestamp],
            ['name' => 'Sarawak', 'slug' => 'sarawak', 'created_at' => $currentTimestamp, 'updated_at' => $currentTimestamp],
            ['name' => 'Selangor', 'slug' => 'selangor', 'created_at' => $currentTimestamp, 'updated_at' => $currentTimestamp],
            ['name' => 'Terengganu', 'slug' => 'terengganu', 'created_at' => $currentTimestamp, 'updated_at' => $currentTimestamp],
            ['name' => 'Kuala Lumpur', 'slug' => 'kuala-lumpur', 'created_at' => $currentTimestamp, 'updated_at' => $currentTimestamp],
            ['name' => 'Labuan', 'slug' => 'labuan', 'created_at' => $currentTimestamp, 'updated_at' => $currentTimestamp],
            ['name' => 'Putrajaya', 'slug' => 'putrajaya', 'created_at' => $currentTimestamp, 'updated_at' => $currentTimestamp],
        ]);
    }
}
