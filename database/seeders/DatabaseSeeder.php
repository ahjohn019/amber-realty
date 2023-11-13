<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\PostSeeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\CommentSeeder;
use Database\Seeders\RoleTagSeeder;
use Database\Seeders\CategorySeeder;
use Database\Seeders\PopularitySeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RoleTagSeeder::class,
            UserSeeder::class,
            CategorySeeder::class,
            PostSeeder::class,
            CommentSeeder::class,
            PopularitySeeder::class,
        ]);
    }
}
