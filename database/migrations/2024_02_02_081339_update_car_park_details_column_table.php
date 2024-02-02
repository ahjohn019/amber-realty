<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //
        Schema::table('property_details', function (Blueprint $table) {
            $table->integer('car_park')->default(0)->after('bedroom');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::table('property_details', function (Blueprint $table) {
            $table->dropColumn('car_park');
        });
    }
};
