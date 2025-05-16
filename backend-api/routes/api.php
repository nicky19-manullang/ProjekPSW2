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
Route::prefix('v1')->group(function () {
    Route::get('/jenis-permohonan', [JenisPermohonanController::class, 'index']);
    Route::post('/jenis-permohonan', [JenisPermohonanController::class, 'store']);
    Route::get('/jenis-permohonan/{id}', [JenisPermohonanController::class, 'show']);
    Route::put('/jenis-permohonan/{id}', [JenisPermohonanController::class, 'update']);
    Route::delete('/jenis-permohonan/{id}', [JenisPermohonanController::class, 'destroy']);
});
Route::prefix('v1')->group(function () {
    Route::get('/wajib-retribusi', [WajibRetribusiController::class, 'index']);
    Route::post('/wajib-retribusi', [WajibRetribusiController::class, 'store']);
    Route::get('/wajib-retribusi/{id}', [WajibRetribusiController::class, 'show']);
    Route::put('/wajib-retribusi/{id}', [WajibRetribusiController::class, 'update']);
    Route::delete('/wajib-retribusi/{id}', [WajibRetribusiController::class, 'destroy']);
});
Route::prefix('v1')->group(function () {
    Route::get('/users', [UserController::class, 'index']);
    Route::post('/users', [UserController::class, 'store']);
    Route::get('/users/{id}', [UserController::class, 'show']);
    Route::put('/users/{id}', [UserController::class, 'update']);
    Route::delete('/users/{id}', [UserController::class, 'destroy']);
});

Route::prefix('v1')->group(function () {
    Route::get('/permohonan-sewa', [PermohonanSewaController::class, 'index']);
    Route::post('/permohonan-sewa', [PermohonanSewaController::class, 'store']);
    Route::get('/permohonan-sewa/{id}', [PermohonanSewaController::class, 'show']);
    Route::put('/permohonan-sewa/{id}', [PermohonanSewaController::class, 'update']);
    Route::delete('/permohonan-sewa/{id}', [PermohonanSewaController::class, 'destroy']);
});
Route::prefix('v1')->group(function () {
    Route::get('/peruntukan-sewa', [PeruntukanSewaController::class, 'index']);
    Route::post('/peruntukan-sewa', [PeruntukanSewaController::class, 'store']);
    Route::get('/peruntukan-sewa/{id}', [PeruntukanSewaController::class, 'show']);
    Route::put('/peruntukan-sewa/{id}', [PeruntukanSewaController::class, 'update']);
    Route::delete('/peruntukan-sewa/{id}', [PeruntukanSewaController::class, 'destroy']);
});
Route::prefix('v1')->group(function () {
    Route::get('/status', [StatusController::class, 'index']);
    Route::post('/status', [StatusController::class, 'store']);
    Route::get('/status/{id}', [StatusController::class, 'show']);
    Route::put('/status/{id}', [StatusController::class, 'update']);
    Route::delete('/status/{id}', [StatusController::class, 'destroy']);
});
Route::prefix('v1')->group(function () {
    Route::get('/jenis-jangka-waktu', [JenisJangkaWaktuController::class, 'index']);
    Route::post('/jenis-jangka-waktu', [JenisJangkaWaktuController::class, 'store']);
    Route::get('/jenis-jangka-waktu/{id}', [JenisJangkaWaktuController::class, 'show']);
    Route::put('/jenis-jangka-waktu/{id}', [JenisJangkaWaktuController::class, 'update']);
    Route::delete('/jenis-jangka-waktu/{id}', [JenisJangkaWaktuController::class, 'destroy']);
});
Route::prefix('v1')->group(function () {
    Route::get('/jangka-waktu-sewa', [JangkaWaktuSewaController::class, 'index']);
    Route::post('/jangka-waktu-sewa', [JangkaWaktuSewaController::class, 'store']);
    Route::get('/jangka-waktu-sewa/{id}', [JangkaWaktuSewaController::class, 'show']);
    Route::put('/jangka-waktu-sewa/{id}', [JangkaWaktuSewaController::class, 'update']);
    Route::delete('/jangka-waktu-sewa/{id}', [JangkaWaktuSewaController::class, 'destroy']);
});
Route::prefix('v1')->group(function () {
    Route::get('/tarif-objek-retribusi', [TarifObjekRetribusiController::class, 'index']);
    Route::post('/tarif-objek-retribusi', [TarifObjekRetribusiController::class, 'store']);
    Route::get('/tarif-objek-retribusi/{id}', [TarifObjekRetribusiController::class, 'show']);
    Route::put('/tarif-objek-retribusi/{id}', [TarifObjekRetribusiController::class, 'update']);
    Route::delete('/tarif-objek-retribusi/{id}', [TarifObjekRetribusiController::class, 'destroy']);
});

Route::prefix('v1')->group(function () {
    Route::get('/jenis-objek-retribusi', [JenisObjekRetribusiController::class, 'index']);
    Route::post('/jenis-objek-retribusi', [JenisObjekRetribusiController::class, 'store']);
    Route::get('/jenis-objek-retribusi/{id}', [JenisObjekRetribusiController::class, 'show']);
    Route::put('/jenis-objek-retribusi/{id}', [JenisObjekRetribusiController::class, 'update']);
    Route::delete('/jenis-objek-retribusi/{id}', [JenisObjekRetribusiController::class, 'destroy']);
});

Route::prefix('v1')->group(function () {
    Route::get('/objek-retribusi', [ObjekRetribusiController::class, 'index']);
    Route::post('/objek-retribusi', [ObjekRetribusiController::class, 'store']);
    Route::get('/objek-retribusi/{id}', [ObjekRetribusiController::class, 'show']);
    Route::put('/objek-retribusi/{id}', [ObjekRetribusiController::class, 'update']);
    Route::delete('/objek-retribusi/{id}', [ObjekRetribusiController::class, 'destroy']);
});
 Route::prefix('v1')->group(function () {
    Route::get('/lokasi-objek-retribusi', [LokasiObjekRetribusiController::class, 'index']);
    Route::post('/lokasi-objek-retribusi', [LokasiObjekRetribusiController::class, 'store']);
    Route::get('/lokasi-objek-retribusi/{id}', [LokasiObjekRetribusiController::class, 'show']);
    Route::put('/lokasi-objek-retribusi/{id}', [LokasiObjekRetribusiController::class, 'update']);
    Route::delete('/lokasi-objek-retribusi/{id}', [LokasiObjekRetribusiController::class, 'destroy']);
});