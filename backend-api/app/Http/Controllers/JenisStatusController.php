<?php

namespace App\Http\Controllers;

use App\Models\JenisStatus;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class JenisStatusController extends Controller
{
    public function index()
    {
        try {
            $data = JenisStatus::orderBy('created_at', 'desc')->get();
            
            return response()->json([
                'status' => 'success',
                'data' => $data
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to retrieve jenis status data: ' . $e->getMessage()
            ], 500);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'jenis_status' => 'required|string|max:255|unique:jenis_statuses,jenis_status',
            'keterangan' => 'nullable|string|max:255',
        ], [
            'jenis_status.required' => 'Jenis status wajib diisi',
            'jenis_status.unique' => 'Jenis status sudah ada',
            'jenis_status.max' => 'Jenis status maksimal 255 karakter',
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
            $jenisStatus = JenisStatus::create($validator->validated());

            return response()->json([
                'status' => 'success',
                'message' => 'Jenis status berhasil ditambahkan',
                'data' => $jenisStatus
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to create jenis status: ' . $e->getMessage()
            ], 500);
        }
    }

    public function show($id)
    {
        try {
            $jenisStatus = JenisStatus::findOrFail($id);
            
            return response()->json([
                'status' => 'success',
                'data' => $jenisStatus
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Jenis status tidak ditemukan'
            ], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'jenis_status' => 'required|string|max:255|unique:jenis_statuses,jenis_status,'.$id,
            'keterangan' => 'nullable|string|max:255',
        ], [
            'jenis_status.required' => 'Jenis status wajib diisi',
            'jenis_status.unique' => 'Jenis status sudah ada',
            'jenis_status.max' => 'Jenis status maksimal 255 karakter',
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
            $jenisStatus = JenisStatus::findOrFail($id);
            $jenisStatus->update($validator->validated());

            return response()->json([
                'status' => 'success',
                'message' => 'Jenis status berhasil diperbarui',
                'data' => $jenisStatus
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to update jenis status: ' . $e->getMessage()
            ], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $jenisStatus = JenisStatus::findOrFail($id);
            $jenisStatus->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'Jenis status berhasil dihapus'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to delete jenis status: ' . $e->getMessage()
            ], 500);
        }
    }
}