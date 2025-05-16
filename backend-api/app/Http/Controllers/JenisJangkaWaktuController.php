<?php

namespace App\Http\Controllers;

use App\Models\JenisJangkaWaktu;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class JenisJangkaWaktuController extends Controller
{
    public function index()
    {
        try {
            $data = JenisJangkaWaktu::orderBy('created_at', 'desc')->get();
            return response()->json([
                'status' => 'success',
                'data' => $data
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to retrieve data: ' . $e->getMessage()
            ], 500);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'jenisJangkaWaktu' => 'required|string|max:255|unique:jenis_jangka_waktus',
            'keterangan' => 'nullable|string|max:255',
        ], [
            'jenisJangkaWaktu.required' => 'Jenis jangka waktu wajib diisi',
            'jenisJangkaWaktu.unique' => 'Jenis jangka waktu sudah ada',
            'jenisJangkaWaktu.max' => 'Jenis jangka waktu maksimal 255 karakter',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $data = JenisJangkaWaktu::create($validator->validated());

            return response()->json([
                'status' => 'success',
                'message' => 'Data berhasil ditambahkan',
                'data' => $data
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to create data: ' . $e->getMessage()
            ], 500);
        }
    }

    public function show($id): JsonResponse
    {
        try {
            $jenisJangkaWaktu = JenisJangkaWaktu::findOrFail($id);
            return response()->json([
                'status' => 'success',
                'data' => $jenisJangkaWaktu
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Data tidak ditemukan'
            ], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'jenisJangkaWaktu' => 'required|string|max:255|unique:jenis_jangka_waktus,jenisJangkaWaktu,'.$id,
            'keterangan' => 'nullable|string|max:255',
        ], [
            'jenisJangkaWaktu.required' => 'Jenis jangka waktu wajib diisi',
            'jenisJangkaWaktu.unique' => 'Jenis jangka waktu sudah ada',
            'jenisJangkaWaktu.max' => 'Jenis jangka waktu maksimal 255 karakter',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $jenisJangkaWaktu = JenisJangkaWaktu::findOrFail($id);
            $jenisJangkaWaktu->update($validator->validated());

            return response()->json([
                'status' => 'success',
                'message' => 'Data berhasil diupdate',
                'data' => $jenisJangkaWaktu
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to update data: ' . $e->getMessage()
            ], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $jenisJangkaWaktu = JenisJangkaWaktu::findOrFail($id);
            $jenisJangkaWaktu->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'Data berhasil dihapus'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to delete data: ' . $e->getMessage()
            ], 500);
        }
    }
}