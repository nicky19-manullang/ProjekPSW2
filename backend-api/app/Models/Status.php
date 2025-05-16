<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Status extends Model
{
    use SoftDeletes;

    protected $table = 'statuses';
    protected $primaryKey = 'id';
    
    protected $fillable = [
        'idJenisStatus',
        'namaStatus',
        'keterangan'
    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
        'deleted_at' => 'datetime:Y-m-d H:i:s',
    ];

    public function jenisStatus(): BelongsTo
    {
        return $this->belongsTo(JenisStatus::class, 'idJenisStatus');
    }

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