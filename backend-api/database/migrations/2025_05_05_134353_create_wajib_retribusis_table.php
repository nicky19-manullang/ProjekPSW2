<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('wajib_retribusis', function (Blueprint $table) {
            $table->id(); // Auto-increment primary key (tetap ada)
            $table->integer('id_jenis_retribusi'); // Input manual (bukan FK)
            $table->string('nama');  // Ganti dari nama_pekerjaan
            $table->string('pekerjaan');  // Tambah field baru
            $table->string('email');
            $table->string('no_hp');
            $table->string('no_wa');
            $table->string('nik');
            $table->string('alamat');
            $table->string('file_foto')->nullable();
            $table->integer('id_wajib_retribusi'); // Input manual (bukan FK)
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('wajib_retribusis');
    }
};