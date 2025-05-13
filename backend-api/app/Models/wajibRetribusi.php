<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WajibRetribusi extends Model
{
    protected $fillable = [
        'id_jenis_retribusi',
        'nama',  // Diubah dari nama_pekerjaan
        'pekerjaan',  // Field baru
        'email',
        'no_hp',
        'no_wa',
        'nik',
        'alamat',
        'file_foto',
        'id_wajib_retribusi'
    ];

    // Tidak perlu relasi karena semua ID bukan FK
}
