<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JenisObjekRetribusi extends Model
{
    use HasFactory;

    protected $fillable = [
        'jenisObjekRetribusi',
        'keterangan'
    ];

    protected $table = 'jenis_objek_retribusis';
}