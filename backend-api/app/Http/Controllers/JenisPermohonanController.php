<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JenisPermohonan;
use Illuminate\Http\JsonResponse;

class JenisPermohonanController extends Controller
{
    public function index()
    {
        return JenisPermohonan::all();
    }

    public function create()
    {
        //
    }

    // public function store(Request $request)
    // {
    //     $validatedData = $request->validate([
    //         'parent_id' => 'required|string|max:255',
    //         'jenis_permohonan' => 'required|string|max:255',
    //         'keterangan' => 'nullable|string|max:255',
    //     ]);

    //     return JenisPermohonan::create($validatedData);
        
    // }
    public function store(Request $request): JsonResponse
{
    try {
        $validatedData = $request->validate([
                'parent_id' => 'required|string|max:255',
                'jenis_permohonan' => 'required|string|max:255',
                'keterangan' => 'nullable|string|max:255',
        ]);

        $data = JenisPermohonan::create($validatedData);

        return response()->json([
            'status' => 'success',
            'message' => 'Data berhasil ditambahkan',
            'data' => $data
        ], 201);

    } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
        return response()->json([
            'status' => 'error',
            'message' => 'Data tidak ditemukan!'
        ], 404);
    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'status' => 'error',
            'message' => 'Validasi gagal',
            'errors' => $e->errors()
        ], 422);
    } catch (\Exception $e) {
        return response()->json([
            'status' => 'error',
            'message' => 'Terjadi kesalahan: ' . $e->getMessage()
        ], 500);
    }
}

    public function show(JenisPermohonan $jenisPermohonan)
    {
        return $jenisPermohonan;
    }

    public function edit(JenisPermohonan $jenisPermohonan)
    {
        //
    }

    public function update(Request $request, $id): JsonResponse
{
    try {
        // Cari data yang akan diupdate
        $jenisPermohonan = JenisPermohonan::findOrFail($id);

        // Validasi input
        $validatedData = $request->validate([
                'parent_id' => 'required|string|max:255',
                'jenis_permohonan' => 'required|string|max:255',
                'keterangan' => 'nullable|string|max:255',
        ]);

        // Update data
        $jenisPermohonan->update($validatedData);

        return response()->json([
            'status' => 'success',
            'message' => 'Data berhasil diupdate!',
            'data' => $jenisPermohonan
        ], 200);

    } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
        return response()->json([
            'status' => 'error',
            'message' => 'Data tidak ditemukan!'
        ], 404);
    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'status' => 'error',
            'message' => 'Validasi gagal',
            'errors' => $e->errors()
        ], 422);
    } catch (\Exception $e) {
        return response()->json([
            'status' => 'error',
            'message' => 'Terjadi kesalahan: ' . $e->getMessage()
        ], 500);
    }
}

    public function destroy(JenisPermohonan $jenisPermohonan)
    {
        $jenisPermohonan->delete();

        return response()->json(['message' => 'Data deleted successfully']);
    }
}
