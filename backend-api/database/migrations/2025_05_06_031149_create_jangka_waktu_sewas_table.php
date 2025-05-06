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
        Schema::create('jangka_waktu_sewas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('idJenisJangkaWaktu')->nullable(); // ID parent jika ada
            $table->string('jangkaWaktu');
            $table->string('keterangan')->nullable();
            $table->string('isDefault')->default('0'); // 0 = tidak default, 1 = default
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jangka_waktu_sewas');
    }
};
