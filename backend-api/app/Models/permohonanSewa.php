<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PermohonanSewa extends Model
{
    use HasFactory;

    protected $table = 'permohonan_sewa';
    protected $primaryKey = 'idPermohonanSewa';

    protected $fillable = [
        'nomorSuratPermohonan',
        'tanggalPengajuan',
        'idWajibRetribusi',
        'idObjekRetribusi',
        'idJenisJangkaWaktu',
        'lamaSewa',
        'idPeruntukanSewa',
        'idStatus',
    ];

    protected $dates = ['tanggalPengajuan'];

    // Relationships
    public function wajibRetribusi()
    {
        return $this->belongsTo(WajibRetribusi::class, 'idWajibRetribusi');
    }

    public function objekRetribusi()
    {
        return $this->belongsTo(ObjekRetribusi::class, 'idObjekRetribusi');
    }

    public function jenisJangkaWaktu()
    {
        return $this->belongsTo(JenisJangkaWaktu::class, 'idJenisJangkaWaktu');
    }

    public function peruntukanSewa()
    {
        return $this->belongsTo(PeruntukanSewa::class, 'idPeruntukanSewa');
    }

    public function status()
    {
        return $this->belongsTo(Status::class, 'idStatus');
    }
}