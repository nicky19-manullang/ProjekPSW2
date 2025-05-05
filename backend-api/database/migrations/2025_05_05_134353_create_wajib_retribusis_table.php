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
        Schema::create('wajib_retribusis', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('idJenisWajibRetribusi')->nullable(); // ID parent jika ada
            $table->string('NIK'); // Nama jenis permohonan
            $table->string('namaWajibRetribusi'); // Nama jenis permohonan
            $table->string('Pekerjaan'); // Nama jenis permohonan
            $table->string('alamat'); // Nama jenis permohonan
            $table->string('nomorPosel'); // Nama jenis permohonan
            $table->string('nomorWhatsapp'); // Nama jenis permohonan
            $table->string('email'); // Nama jenis permohonan
            $table->unsignedBigInteger('idJenisRetribusi')->nullable();
            $table->string('filePhoto')->nullable(); // Nama jenis permohonan
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wajib_retribusis');
    }
};
