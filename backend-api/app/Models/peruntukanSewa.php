<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PeruntukanSewa extends Model
{
    protected $table = 'peruntukan_sewas';
    
    protected $fillable = [
        'jenis_kegiatan',
        'peruntukan_sewa',
        'keterangan'
    ];

    public $timestamps = true;
}