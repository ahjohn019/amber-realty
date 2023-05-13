<?php

namespace Database\Seeders;

use App\Models\User;
use App\Library\RoleTag;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        User::insert(
            [
                [
                    'name' => 'Admin',
                    'email' => 'admin_one@example.com',
                    'password' => bcrypt('1111aaaa'),
                ],
                [
                    'name' => 'User',
                    'email' => 'user_one@example.com',
                    'password' => bcrypt('1111aaaa'),
                ],
            ]
        );

        User::find(1)->assignRole(RoleTag::ADMIN);
        User::find(2)->assignRole(RoleTag::USER);
    }
}
