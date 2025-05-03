<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JenisStatusController;

Route::apiResource('jenis-status', JenisStatusController::class);
