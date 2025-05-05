<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JenisStatusController;
use App\Http\Controllers\JenisPermohonanController;
use App\Http\Controllers\WajibRetribusiController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PermohonanSewaController;
use App\Http\Controllers\PeruntukanSewaController;

Route::apiResource('jenis-status', JenisStatusController::class);
Route::apiResource('jenis-permohonan', JenisPermohonanController::class);
Route::apiResource('wajib-retribusi', WajibRetribusiController::class);
Route::apiResource('users', UserController::class);
Route::apiResource('permohonan-sewa', PermohonanSewaController::class);
Route::apiResource('peruntukan-sewa', PeruntukanSewaController::class);
