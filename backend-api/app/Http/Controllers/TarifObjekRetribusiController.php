<?php

namespace App\Http\Controllers;

use App\Models\TarifObjekRetribusi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TarifObjekRetribusiController extends Controller
{
    public function index()
    {
        try {
            $data = TarifObjekRetribusi::with(['objekRetribusi', 'jenisJangkaWaktu'])->get();
            return response()->json([
                'status' => 'success',
                'data' => $data
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal mengambil data tarif objek retribusi'
            ], 500);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'idObjekRetribusi' => 'required|exists:objek_retribusis,id',
            'idJenisJangkaWaktu' => 'required|exists:jenis_jangka_waktus,id',
            'tanggalDinilai' => 'required|date',
            'namaPenilai' => 'required|string|max:255',
            'nominalTarif' => 'required|numeric|min:0',
            'fileHasilPenilaian' => 'nullable|string',
            'keterangan' => 'nullable|string|max:255'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $data = TarifObjekRetribusi::create($request->all());
            return response()->json([
                'status' => 'success',
                'data' => $data,
                'message' => 'Tarif objek retribusi berhasil dibuat'
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal membuat tarif objek retribusi: ' . $e->getMessage()
            ], 500);
        }
    }

    public function show($id)
    {
        try {
            $data = TarifObjekRetribusi::with(['objekRetribusi', 'jenisJangkaWaktu'])->findOrFail($id);
            return response()->json([
                'status' => 'success',
                'data' => $data
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Data tarif objek retribusi tidak ditemukan'
            ], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'idObjekRetribusi' => 'required|exists:objek_retribusis,id',
            'idJenisJangkaWaktu' => 'required|exists:jenis_jangka_waktus,id',
            'tanggalDinilai' => 'required|date',
            'namaPenilai' => 'required|string|max:255',
            'nominalTarif' => 'required|numeric|min:0',
            'fileHasilPenilaian' => 'nullable|string',
            'keterangan' => 'nullable|string|max:255'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $data = TarifObjekRetribusi::findOrFail($id);
            $data->update($request->all());
            return response()->json([
                'status' => 'success',
                'data' => $data,
                'message' => 'Tarif objek retribusi berhasil diperbarui'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal memperbarui tarif objek retribusi'
            ], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $data = TarifObjekRetribusi::findOrFail($id);
            $data->delete();
            return response()->json([
                'status' => 'success',
                'message' => 'Tarif objek retribusi berhasil dihapus'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal menghapus tarif objek retribusi'
            ], 500);
        }
    }
}