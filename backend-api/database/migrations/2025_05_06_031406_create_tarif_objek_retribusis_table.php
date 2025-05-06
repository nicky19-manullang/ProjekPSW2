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
        Schema::create('tarif_objek_retribusis', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('idObjekRetribusi')->nullable();
            $table->unsignedBigInteger('idJenisJangkaWaktu')->nullable();
            $table->date('tanggalDinilai');
            $table->string('namaPenilai');
            $table->string('nominalTarif');
            $table->string('fileHasilPenilaian')->nullable();
            $table->string('keterangan')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tarif_objek_retribusis');
    }
};
