<?php

namespace App\Http\Controllers;

use App\Models\JangkaWaktuSewa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class JangkaWaktuSewaController extends Controller
{
    public function index()
    {
        try {
            $data = JangkaWaktuSewa::with(['jenisJangkaWaktu'])->get();
            return response()->json([
                'status' => 'success',
                'data' => $data
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal mengambil data jangka waktu sewa'
            ], 500);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'idJenisJangkaWaktu' => 'required|exists:jenis_jangka_waktus,id',
            'jangkaWaktu' => 'required|string|max:255|unique:jangka_waktu_sewas',
            'keterangan' => 'nullable|string|max:255',
            'isDefault' => 'required|in:0,1'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            // Reset default if new one is being set
            if ($request->isDefault == '1') {
                JangkaWaktuSewa::where('isDefault', '1')->update(['isDefault' => '0']);
            }

            $data = JangkaWaktuSewa::create($request->all());
            return response()->json([
                'status' => 'success',
                'data' => $data,
                'message' => 'Jangka waktu sewa berhasil dibuat'
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal membuat jangka waktu sewa: ' . $e->getMessage()
            ], 500);
        }
    }

    public function show($id)
    {
        try {
            $data = JangkaWaktuSewa::with(['jenisJangkaWaktu'])->findOrFail($id);
            return response()->json([
                'status' => 'success',
                'data' => $data
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Data jangka waktu sewa tidak ditemukan'
            ], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'idJenisJangkaWaktu' => 'required|exists:jenis_jangka_waktus,id',
            'jangkaWaktu' => 'required|string|max:255|unique:jangka_waktu_sewas,jangkaWaktu,'.$id,
            'keterangan' => 'nullable|string|max:255',
            'isDefault' => 'required|in:0,1'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $data = JangkaWaktuSewa::findOrFail($id);
            
            // Reset default if this one is being set as default
            if ($request->isDefault == '1' && $data->isDefault != '1') {
                JangkaWaktuSewa::where('isDefault', '1')->update(['isDefault' => '0']);
            }

            $data->update($request->all());
            return response()->json([
                'status' => 'success',
                'data' => $data,
                'message' => 'Jangka waktu sewa berhasil diperbarui'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal memperbarui jangka waktu sewa'
            ], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $data = JangkaWaktuSewa::findOrFail($id);
            
            // Prevent deletion if this is the default
            if ($data->isDefault == '1') {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Tidak dapat menghapus jangka waktu sewa default'
                ], 400);
            }

            $data->delete();
            return response()->json([
                'status' => 'success',
                'message' => 'Jangka waktu sewa berhasil dihapus'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal menghapus jangka waktu sewa'
            ], 500);
        }
    }
}