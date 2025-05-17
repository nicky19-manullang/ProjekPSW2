<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JenisPermohonan extends Model
{
    protected $fillable = [
        'parent_id',
        'jenis_permohonan',
        'keterangan'
    ];

}