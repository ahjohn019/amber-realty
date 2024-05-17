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
        Schema::create('property_address_details', function (Blueprint $table) {
            $table->id();
            $table->text('formatted_address');
            $table->text('md5');
            $table->string('place_id')->nullable()->unique();
            $table->decimal('longitude', total: 20, places: 7)->nullable();
            $table->decimal('latitude', total: 20, places: 7)->nullable();
            $table->string('display_name')->nullable();
            $table->tinyInteger('current')->default(0);
            $table->tinyInteger('nearby')->default(0);
            $table->text('nearby_types')->nullable();
            $table->text('icon_url')->nullable();
            $table->string('property_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('property_address_details');
    }
};
