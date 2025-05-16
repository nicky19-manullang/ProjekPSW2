<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class JenisJangkaWaktu extends Model
{
    use SoftDeletes;

    protected $table = 'jenis_jangka_waktus';
    protected $primaryKey = 'id';
    
    protected $fillable = [
        'jenisJangkaWaktu', 
        'keterangan'
    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
        'deleted_at' => 'datetime:Y-m-d H:i:s',
    ];

    public static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            // Add any logic for creating event
        });

        static::updating(function ($model) {
            // Add any logic for updating event
        });
    }
}