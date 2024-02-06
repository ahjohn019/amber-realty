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
        Schema::create('property_details', function (Blueprint $table) {
            $table->id();
            $table->integer('property_id');
            $table->enum('tenure', ['freehold', 'leasehold'])->default('freehold');
            $table->integer('bathroom')->default(1);
            $table->integer('bedroom')->default(1);
            $table->integer('car_park')->default(1);
            $table->integer('square_feet');
            $table->enum('listing_type', ['sale', 'rent'])->default('sale');
            $table->enum('furnishing', ['unfurnished', 'partially_furnished', 'furnished'])->default('unfurnished');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('property_details');
    }
};
