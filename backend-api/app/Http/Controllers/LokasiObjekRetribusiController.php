<?php

namespace App\Http\Controllers;

use App\Models\LokasiObjekRetribusi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LokasiObjekRetribusiController extends Controller
{
    public function index()
    {
        try {
            $data = LokasiObjekRetribusi::all();
            return response()->json([
                'status' => 'success',
                'data' => $data
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal mengambil data lokasi objek retribusi'
            ], 500);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'LokasiObjekRetribusi' => 'required|string|max:255|unique:lokasi_objek_retribusis',
            'keterangan' => 'nullable|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $data = LokasiObjekRetribusi::create($request->all());
            return response()->json([
                'status' => 'success',
                'data' => $data,
                'message' => 'Lokasi objek retribusi berhasil dibuat'
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal membuat lokasi objek retribusi'
            ], 500);
        }
    }

    public function show($id)
    {
        try {
            $data = LokasiObjekRetribusi::findOrFail($id);
            return response()->json([
                'status' => 'success',
                'data' => $data
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Data lokasi objek retribusi tidak ditemukan'
            ], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'LokasiObjekRetribusi' => 'required|string|max:255|unique:lokasi_objek_retribusis,LokasiObjekRetribusi,'.$id,
            'keterangan' => 'nullable|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $data = LokasiObjekRetribusi::findOrFail($id);
            $data->update($request->all());
            return response()->json([
                'status' => 'success',
                'data' => $data,
                'message' => 'Lokasi objek retribusi berhasil diperbarui'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal memperbarui lokasi objek retribusi'
            ], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $data = LokasiObjekRetribusi::findOrFail($id);
            $data->delete();
            return response()->json([
                'status' => 'success',
                'message' => 'Lokasi objek retribusi berhasil dihapus'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal menghapus lokasi objek retribusi'
            ], 500);
        }
    }
}