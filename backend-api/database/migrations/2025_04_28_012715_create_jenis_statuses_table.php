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
        Schema::create('jenis_statuses', function (Blueprint $table) {
            $table->id();
            $table->string('jenis_status'); 
            $table->string('keterangan')->nullable();  // Keterangan boleh kosong
            $table->timestamps(); // Otomatis menambahkan created_at dan updated_at
            $table->softDeletes(); // Menambahkan kolom deleted_at untuk soft deletes
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jenis_statuses');
    }
};
