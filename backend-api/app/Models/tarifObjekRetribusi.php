<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TarifObjekRetribusi extends Model
{
    use HasFactory;

    protected $table = 'tarif_objek_retribusis';
    protected $primaryKey = 'id';
    protected $fillable = [
        'idObjekRetribusi',
        'idJenisJangkaWaktu',
        'tanggalDinilai',
        'namaPenilai',
        'nominalTarif',
        'fileHasilPenilaian',
        'keterangan'
    ];

    protected $casts = [
        'tanggalDinilai' => 'date',
        'nominalTarif' => 'decimal:2',
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];

    public function objekRetribusi()
    {
        return $this->belongsTo(ObjekRetribusi::class, 'idObjekRetribusi');
    }

    public function jenisJangkaWaktu()
    {
        return $this->belongsTo(JenisJangkaWaktu::class, 'idJenisJangkaWaktu');
    }
}