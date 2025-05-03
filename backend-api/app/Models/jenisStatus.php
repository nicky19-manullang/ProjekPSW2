<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; // Import SoftDeletes

class jenisStatus extends Model
{
    use HasFactory, SoftDeletes; // Menggunakan SoftDeletes

    // Pastikan hanya kolom yang perlu diisi yang tercantum di sini
    protected $fillable = ['jenis_status', 'keterangan'];

    // Menambahkan kolom deleted_at untuk soft delete
    protected $dates = ['deleted_at'];
}
