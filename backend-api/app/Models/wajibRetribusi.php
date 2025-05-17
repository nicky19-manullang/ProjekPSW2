<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WajibRetribusi extends Model
{
    protected $fillable = [
        'idJenisWajibRetribusi',
        'NIK',
        'namaWajibRetribusi',
        'Pekerjaan',
        'alamat',
        'nomorPosel',
        'nomorWhatsapp',
        'email',
        'idJenisRetribusi',
        'filePhoto'
    ];
}
