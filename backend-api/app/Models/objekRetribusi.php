<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ObjekRetribusi extends Model
{
    use HasFactory;

    protected $table = 'objek_retribusis';
    protected $primaryKey = 'id';
    protected $fillable = [
        'idLokasiObjekRetribusi',
        'idJenisObjekRetribusi',
        'kodeObjekRetribusi',
        'noBangunan',
        'jumlahLantai',
        'objekRetribusi',
        'panjangTanah',
        'lebarTanah',
        'luasTanah',
        'panjangBangunan',
        'lebarBangunan',
        'luasBangunan',
        'alamat',
        'latitute',
        'longitute',
        'keterangan',
        'gambarDenahTanah'
    ];

    protected $casts = [
        'jumlahLantai' => 'integer',
        'panjangTanah' => 'decimal:2',
        'lebarTanah' => 'decimal:2',
        'luasTanah' => 'decimal:2',
        'panjangBangunan' => 'decimal:2',
        'lebarBangunan' => 'decimal:2',
        'luasBangunan' => 'decimal:2',
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];

    public function lokasiObjekRetribusi()
    {
        return $this->belongsTo(LokasiObjekRetribusi::class, 'idLokasiObjekRetribusi');
    }

    public function jenisObjekRetribusi()
    {
        return $this->belongsTo(JenisObjekRetribusi::class, 'idJenisObjekRetribusi');
    }
}