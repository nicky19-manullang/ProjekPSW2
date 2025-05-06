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
        Schema::create('objek_retribusis', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('idLokasiObjekRetribusi')->nullable();
            $table->unsignedBigInteger('idJenisObjekRetribusi')->nullable();
            $table->string('kodeObjekRetribusi')->nullable();
            $table->string('noBangunan')->nullable();
            $table->string('jumlahLantai')->nullable();
            $table->string('objekRetribusi')->nullable();
            $table->string('panjangTanah')->nullable();
            $table->string('lebarTanah')->nullable();
            $table->string('luasTanah')->nullable();
            $table->string('panjangBangunan')->nullable();
            $table->string('lebarBangunan')->nullable();
            $table->string('luasBangunan')->nullable();
            $table->string('alamat')->nullable();
            $table->string('latitute')->nullable();
            $table->string('longitute')->nullable();
            $table->string('keterangan')->nullable();
            $table->string('gambarDenahTanah')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('objek_retribusis');
    }
};
