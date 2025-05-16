<?php

namespace App\Http\Controllers;

use App\Models\Status;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class StatusController extends Controller
{
    public function index()
    {
        try {
            $data = Status::with('jenisStatus')
                ->orderBy('created_at', 'desc')
                ->get();
            
            return response()->json([
                'status' => 'success',
                'data' => $data
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to retrieve status data: ' . $e->getMessage()
            ], 500);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'idJenisStatus' => 'required|exists:jenis_statuses,id',
            'namaStatus' => 'required|string|max:255|unique:statuses,namaStatus',
            'keterangan' => 'nullable|string|max:255',
        ], [
            'idJenisStatus.required' => 'Jenis status wajib dipilih',
            'idJenisStatus.exists' => 'Jenis status tidak valid',
            'namaStatus.required' => 'Nama status wajib diisi',
            'namaStatus.unique' => 'Nama status sudah digunakan',
            'namaStatus.max' => 'Nama status maksimal 255 karakter',
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
            $status = Status::create($validator->validated());

            return response()->json([
                'status' => 'success',
                'message' => 'Status berhasil ditambahkan',
                'data' => $status
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to create status: ' . $e->getMessage()
            ], 500);
        }
    }

    public function show($id)
    {
        try {
            $status = Status::with('jenisStatus')->findOrFail($id);
            
            return response()->json([
                'status' => 'success',
                'data' => $status
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Status tidak ditemukan'
            ], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'idJenisStatus' => 'required|exists:jenis_statuses,id',
            'namaStatus' => 'required|string|max:255|unique:statuses,namaStatus,'.$id,
            'keterangan' => 'nullable|string|max:255',
        ], [
            'idJenisStatus.required' => 'Jenis status wajib dipilih',
            'idJenisStatus.exists' => 'Jenis status tidak valid',
            'namaStatus.required' => 'Nama status wajib diisi',
            'namaStatus.unique' => 'Nama status sudah digunakan',
            'namaStatus.max' => 'Nama status maksimal 255 karakter',
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
            $status = Status::findOrFail($id);
            $status->update($validator->validated());

            return response()->json([
                'status' => 'success',
                'message' => 'Status berhasil diperbarui',
                'data' => $status
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to update status: ' . $e->getMessage()
            ], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $status = Status::findOrFail($id);
            $status->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'Status berhasil dihapus'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to delete status: ' . $e->getMessage()
            ], 500);
        }
    }
}