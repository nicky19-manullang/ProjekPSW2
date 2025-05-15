<?php

namespace App\Http\Controllers;

use App\Models\JenisJangkaWaktu;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class JenisJangkaWaktuController extends Controller
{
    public function index()
    {
        try {
            $data = JenisJangkaWaktu::all();
            return response()->json([
                'status' => 'success',
                'data' => $data
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'jenisJangkaWaktu' => 'required|string|max:255',
                'keterangan' => 'nullable|string|max:255',
            ]);

            $data = JenisJangkaWaktu::create($validatedData);

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

    public function edit(JenisJangkaWaktu $jenisJangkaWaktu)
    {
        //
    }

    public function update(Request $request, JenisJangkaWaktu $jenisJangkaWaktu)
    {
        try {
            $validatedData = $request->validate([
                'jenisJangkaWaktu' => 'required|string|max:255',
                'keterangan' => 'nullable|string|max:255',
            ]);

            $jenisJangkaWaktu->update($validatedData);

            return response()->json([
                'status' => 'success',
                'message' => 'Data berhasil diupdate!',
                'data' => $jenisJangkaWaktu
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

    public function destroy(JenisJangkaWaktu $jenisJangkaWaktu)
    {
        try {
            $jenisJangkaWaktu->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'Data berhasil dihapus'
            ], 200);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Data tidak ditemukan'
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Terjadi kesalahan: ' . $e->getMessage()
            ], 500);
        }
    }
}
