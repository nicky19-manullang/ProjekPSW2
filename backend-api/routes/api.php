<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JenisStatusController;
use App\Http\Controllers\JenisPermohonanController;
use App\Http\Controllers\WajibRetribusiController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PermohonanSewaController;
use App\Http\Controllers\PeruntukanSewaController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\JenisJangkaWaktuController;
use App\Http\Controllers\JangkaWaktuSewaController;
use App\Http\Controllers\TarifObjekRetribusiController;
use App\Http\Controllers\JenisObjekRetribusiController;
use App\Http\Controllers\ObjekRetribusiController;
use App\Http\Controllers\LokasiObjekRetribusiController;


Route::apiResource('jenis-status', JenisStatusController::class);
Route::apiResource('jenis-permohonan', JenisPermohonanController::class);
// Group untuk API versioning (optional)
Route::prefix('v1')->group(function () {
    // User CRUD endpoints
    Route::get('/wajib-retribusi', [WajibRetribusiController::class, 'index']);
    Route::post('/wajib-retribusi', [WajibRetribusiController::class, 'store']);
    Route::get('/wajib-retribusi/{id}', [WajibRetribusiController::class, 'show']);
    Route::put('/wajib-retribusi/{id}', [WajibRetribusiController::class, 'update']);
    Route::delete('/wajib-retribusi/{id}', [WajibRetribusiController::class, 'destroy']);
});
Route::prefix('v1')->group(function () {
    // User CRUD endpoints
    Route::get('/users', [UserController::class, 'index']);
    Route::post('/users', [UserController::class, 'store']);
    Route::get('/users/{id}', [UserController::class, 'show']);
    Route::put('/users/{id}', [UserController::class, 'update']);
    Route::delete('/users/{id}', [UserController::class, 'destroy']);
});
Route::apiResource('permohonan-sewa', PermohonanSewaController::class);
Route::apiResource('peruntukan-sewa', PeruntukanSewaController::class);
Route::apiResource('status', StatusController::class);
Route::apiResource('jenis-jangka-waktu', JenisJangkaWaktuController::class);
Route::apiResource('jangka-waktu-sewa', JangkaWaktuSewaController::class);
Route::apiResource('tarif-objek-retribusi', TarifObjekRetribusiController::class);
Route::apiResource('jenis-objek-retribusi', JenisObjekRetribusiController::class);
Route::apiResource('objek-retribusi', ObjekRetribusiController::class);
Route::apiResource('lokasi-objek-retribusi', LokasiObjekRetribusiController::class);
