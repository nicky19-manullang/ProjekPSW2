<?php

namespace App\Http\Controllers;

use App\Models\ObjekRetribusi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ObjekRetribusiController extends Controller
{
    public function index()
    {
        try {
            $data = ObjekRetribusi::with(['lokasiObjekRetribusi', 'jenisObjekRetribusi'])->get();
            return response()->json([
                'status' => 'success',
                'data' => $data
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal mengambil data objek retribusi'
            ], 500);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'idLokasiObjekRetribusi' => 'required|exists:lokasi_objek_retribusis,id',
            'idJenisObjekRetribusi' => 'required|exists:jenis_objek_retribusis,id',
            'kodeObjekRetribusi' => 'required|string|max:50|unique:objek_retribusis',
            'noBangunan' => 'nullable|string|max:50',
            'jumlahLantai' => 'nullable|integer|min:0',
            'objekRetribusi' => 'required|string|max:255',
            'panjangTanah' => 'nullable|numeric|min:0',
            'lebarTanah' => 'nullable|numeric|min:0',
            'luasTanah' => 'nullable|numeric|min:0',
            'panjangBangunan' => 'nullable|numeric|min:0',
            'lebarBangunan' => 'nullable|numeric|min:0',
            'luasBangunan' => 'nullable|numeric|min:0',
            'alamat' => 'required|string',
            'latitute' => 'nullable|string|max:50',
            'longitute' => 'nullable|string|max:50',
            'keterangan' => 'nullable|string',
            'gambarDenahTanah' => 'nullable|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $data = ObjekRetribusi::create($request->all());
            return response()->json([
                'status' => 'success',
                'data' => $data,
                'message' => 'Objek retribusi berhasil dibuat'
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal membuat objek retribusi: ' . $e->getMessage()
            ], 500);
        }
    }

    public function show($id)
    {
        try {
            $data = ObjekRetribusi::with(['lokasiObjekRetribusi', 'jenisObjekRetribusi'])->findOrFail($id);
            return response()->json([
                'status' => 'success',
                'data' => $data
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Data objek retribusi tidak ditemukan'
            ], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'idLokasiObjekRetribusi' => 'required|exists:lokasi_objek_retribusis,id',
            'idJenisObjekRetribusi' => 'required|exists:jenis_objek_retribusis,id',
            'kodeObjekRetribusi' => 'required|string|max:50|unique:objek_retribusis,kodeObjekRetribusi,'.$id,
            'noBangunan' => 'nullable|string|max:50',
            'jumlahLantai' => 'nullable|integer|min:0',
            'objekRetribusi' => 'required|string|max:255',
            'panjangTanah' => 'nullable|numeric|min:0',
            'lebarTanah' => 'nullable|numeric|min:0',
            'luasTanah' => 'nullable|numeric|min:0',
            'panjangBangunan' => 'nullable|numeric|min:0',
            'lebarBangunan' => 'nullable|numeric|min:0',
            'luasBangunan' => 'nullable|numeric|min:0',
            'alamat' => 'required|string',
            'latitute' => 'nullable|string|max:50',
            'longitute' => 'nullable|string|max:50',
            'keterangan' => 'nullable|string',
            'gambarDenahTanah' => 'nullable|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $data = ObjekRetribusi::findOrFail($id);
            $data->update($request->all());
            return response()->json([
                'status' => 'success',
                'data' => $data,
                'message' => 'Objek retribusi berhasil diperbarui'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal memperbarui objek retribusi'
            ], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $data = ObjekRetribusi::findOrFail($id);
            $data->delete();
            return response()->json([
                'status' => 'success',
                'message' => 'Objek retribusi berhasil dihapus'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal menghapus objek retribusi'
            ], 500);
        }
    }
}