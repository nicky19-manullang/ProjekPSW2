<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class JenisStatus extends Model
{
    use SoftDeletes;

    protected $table = 'jenis_statuses';
    protected $primaryKey = 'id';
    
    protected $fillable = [
        'jenis_status',
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
            // Add logic before creating
        });

        static::updating(function ($model) {
            // Add logic before updating
        });
    }
}