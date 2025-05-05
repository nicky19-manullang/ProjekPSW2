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
        Schema::create('permohonan_sewas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('idJenisPermohonan')->nullable(); // ID parent jika ada
            $table->string('nomorSuratPermohonan'); // Nama jenis permohonan
            $table->string('tanggalPengajuan');
            $table->unsignedBigInteger('idWajibRetribusi')->nullable();
            $table->unsignedBigInteger('idObjekRetribusi')->nullable();
            $table->unsignedBigInteger('idJenisJangkaWaktu')->nullable();
            $table->string('lamaSewa')->nullable();
            $table->unsignedBigInteger('idPeruntukanSewa')->nullable();
            $table->unsignedBigInteger('idStatus')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('permohonan_sewas');
    }
};
