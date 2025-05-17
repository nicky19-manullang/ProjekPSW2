<?php

namespace App\Http\Controllers;

use App\Models\PermohonanSewa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PermohonanSewaController extends Controller
{
    public function index()
    {
        try {
            $permohonanSewa = PermohonanSewa::with([
                'wajibRetribusi',
                'objekRetribusi',
                'jenisJangkaWaktu',
                'peruntukanSewa',
                'status'
            ])->get();

            return response()->json([
                'success' => true,
                'data' => $permohonanSewa
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch data',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nomorSuratPermohonan' => 'required|string|max:255|unique:permohonan_sewa',
            'tanggalPengajuan' => 'required|date',
            'idWajibRetribusi' => 'required|exists:wajib_retribusi,idWajibRetribusi',
            'idObjekRetribusi' => 'required|exists:objek_retribusi,idObjekRetribusi',
            'idJenisJangkaWaktu' => 'required|exists:jenis_jangka_waktu,idJenisJangkaWaktu',
            'lamaSewa' => 'required|string|max:255',
            'idPeruntukanSewa' => 'required|exists:peruntukan_sewa,idPeruntukanSewa',
            'idStatus' => 'required|exists:status,idStatus',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $permohonanSewa = PermohonanSewa::create($request->all());

            return response()->json([
                'success' => true,
                'data' => $permohonanSewa,
                'message' => 'Permohonan Sewa created successfully'
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to create Permohonan Sewa',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function show($id)
    {
        try {
            $permohonanSewa = PermohonanSewa::with([
                'wajibRetribusi',
                'objekRetribusi',
                'jenisJangkaWaktu',
                'peruntukanSewa',
                'status'
            ])->findOrFail($id);

            return response()->json([
                'success' => true,
                'data' => $permohonanSewa
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Permohonan Sewa not found',
                'error' => $e->getMessage()
            ], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'nomorSuratPermohonan' => 'required|string|max:255|unique:permohonan_sewa,nomorSuratPermohonan,'.$id.',idPermohonanSewa',
            'tanggalPengajuan' => 'required|date',
            'idWajibRetribusi' => 'required|exists:wajib_retribusi,idWajibRetribusi',
            'idObjekRetribusi' => 'required|exists:objek_retribusi,idObjekRetribusi',
            'idJenisJangkaWaktu' => 'required|exists:jenis_jangka_waktu,idJenisJangkaWaktu',
            'lamaSewa' => 'required|string|max:255',
            'idPeruntukanSewa' => 'required|exists:peruntukan_sewa,idPeruntukanSewa',
            'idStatus' => 'required|exists:status,idStatus',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $permohonanSewa = PermohonanSewa::findOrFail($id);
            $permohonanSewa->update($request->all());

            return response()->json([
                'success' => true,
                'data' => $permohonanSewa,
                'message' => 'Permohonan Sewa updated successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to update Permohonan Sewa',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $permohonanSewa = PermohonanSewa::findOrFail($id);
            $permohonanSewa->delete();

            return response()->json([
                'success' => true,
                'message' => 'Permohonan Sewa deleted successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete Permohonan Sewa',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}