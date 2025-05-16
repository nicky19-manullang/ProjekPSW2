<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JangkaWaktuSewa extends Model
{
    use HasFactory;

    protected $table = 'jangka_waktu_sewas';
    protected $primaryKey = 'id';
    protected $fillable = [
        'idJenisJangkaWaktu',
        'jangkaWaktu',
        'keterangan',
        'isDefault'
    ];

    protected $casts = [
        'isDefault' => 'string',
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];

    public function jenisJangkaWaktu()
    {
        return $this->belongsTo(JenisJangkaWaktu::class, 'idJenisJangkaWaktu');
    }
}