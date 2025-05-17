<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JenisPermohonan;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class JenisPermohonanController extends Controller
{
    public function index(): JsonResponse
    {
        try {
            $data = JenisPermohonan::with('parent')
                ->orderBy('created_at', 'desc')
                ->get();
                
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

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'parent_id' => 'nullable|exists:jenis_permohonans,id',
            'jenis_permohonan' => 'required|string|max:255|unique:jenis_permohonans',
            'keterangan' => 'nullable|string|max:255',
        ], [
            'parent_id.exists' => 'Parent ID tidak valid',
            'jenis_permohonan.required' => 'Jenis permohonan wajib diisi',
            'jenis_permohonan.unique' => 'Jenis permohonan sudah ada',
            'jenis_permohonan.max' => 'Jenis permohonan maksimal 255 karakter',
            'keterangan.max' => 'Keterangan maksimal 255 karakter',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $data = JenisPermohonan::create($validator->validated());

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
            $jenisPermohonan = JenisPermohonan::with('parent', 'children')
                ->findOrFail($id);
                
            return response()->json([
                'status' => 'success',
                'data' => $jenisPermohonan
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Data tidak ditemukan'
            ], 404);
        }
    }

    public function update(Request $request, $id): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'parent_id' => 'nullable|exists:jenis_permohonans,id',
            'jenis_permohonan' => 'required|string|max:255|unique:jenis_permohonans,jenis_permohonan,'.$id,
            'keterangan' => 'nullable|string|max:255',
        ], [
            'parent_id.exists' => 'Parent ID tidak valid',
            'jenis_permohonan.required' => 'Jenis permohonan wajib diisi',
            'jenis_permohonan.unique' => 'Jenis permohonan sudah ada',
            'jenis_permohonan.max' => 'Jenis permohonan maksimal 255 karakter',
            'keterangan.max' => 'Keterangan maksimal 255 karakter',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $jenisPermohonan = JenisPermohonan::findOrFail($id);
            $jenisPermohonan->update($validator->validated());

            return response()->json([
                'status' => 'success',
                'message' => 'Data berhasil diupdate',
                'data' => $jenisPermohonan
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to update data: ' . $e->getMessage()
            ], 500);
        }
    }

    public function destroy($id): JsonResponse
    {
        try {
            $jenisPermohonan = JenisPermohonan::findOrFail($id);
            
            // Check if this jenis permohonan has children
            if ($jenisPermohonan->children()->count() > 0) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Tidak dapat menghapus karena memiliki sub-jenis permohonan'
                ], 400);
            }
            
            $jenisPermohonan->delete();

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