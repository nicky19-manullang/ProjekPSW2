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
        Schema::create('peruntukan_sewas', function (Blueprint $table) {
            $table->id();
            $table->string('jenisKegiatan'); // Nama jenis kegiatan
            $table->string('peruntukanSewa'); // Nama peruntukan sewa
            $table->string('keterangan')->nullable(); // Keterangan tambahan
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('peruntukan_sewas');
    }
};
