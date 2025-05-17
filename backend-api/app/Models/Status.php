<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Builder;

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

    /**
     * The "booting" method of the model.
     */
    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope('active', function (Builder $builder) {
            $builder->whereNull('deleted_at');
        });

        static::creating(function ($model) {
            // Auto-generate slug or other fields if needed
        });

        static::updating(function ($model) {
            // Additional logic before updating
        });

        static::deleting(function ($model) {
            // Prevent deletion if has important relations
            // if ($model->importantRelations()->count() > 0) {
            //     throw new \Exception('Cannot delete status with existing relations');
            // }
        });
    }

    /**
     * Relationship to JenisStatus
     */
    public function jenisStatus(): BelongsTo
    {
        return $this->belongsTo(JenisStatus::class, 'idJenisStatus')
            ->withDefault([
                'namaJenisStatus' => 'Tidak Ada'
            ]);
    }

    /**
     * Scope for active statuses
     */
    public function scopeActive($query)
    {
        return $query->whereNull('deleted_at');
    }

    /**
     * Scope for searching
     */
    public function scopeSearch($query, $term)
    {
        return $query->where(function($q) use ($term) {
            $q->where('namaStatus', 'like', '%'.$term.'%')
              ->orWhere('keterangan', 'like', '%'.$term.'%')
              ->orWhereHas('jenisStatus', function($q) use ($term) {
                  $q->where('namaJenisStatus', 'like', '%'.$term.'%');
              });
        });
    }
}