<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use App\Models\WajibRetribusi;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class WajibRetribusiController extends Controller
{
    public function index(): JsonResponse
    {
        try {
            $data = WajibRetribusi::all();
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

    public function store(Request $request): JsonResponse
{
    try {
        $validatedData = $request->validate([
            'id_jenis_retribusi' => 'required|integer',
            'nama' => 'required|string|max:255',  // Diubah
            'pekerjaan' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'no_hp' => 'required|string|max:20',
            'no_wa' => 'required|string|max:20',
            'nik' => 'required|string|size:16',
            'alamat' => 'required|string',
            'file_foto' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'id_wajib_retribusi' => 'required|integer|unique:wajib_retribusis' // Pastikan unik
        ]);

        // Upload file foto (jika ada)
        if ($request->hasFile('file_foto')) {
            $file = $request->file('file_foto');
            $filename = time() . '_' . $file->getClientOriginalName();
            $file->storeAs('public/foto_wajib_retribusi', $filename);
            $validatedData['file_foto'] = $filename;
        }

        $data = WajibRetribusi::create($validatedData);

        return response()->json([
            'status' => 'success',
            'message' => 'Data berhasil ditambahkan',
            'data' => $data
        ], 201);

    } catch (\Exception $e) {
        return response()->json([
            'status' => 'error',
            'message' => $e->getMessage()
        ], 500);
    }
}

    public function show($id): JsonResponse
    {
        try {
            $wajibRetribusi = WajibRetribusi::findOrFail($id);
            return response()->json([
                'status' => 'success',
                'data' => $wajibRetribusi
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
    try {
        // Cari data yang akan diupdate
        $wajibRetribusi = WajibRetribusi::findOrFail($id);

        // Validasi input
        $validatedData = $request->validate([
            'id_jenis_retribusi' => 'required|integer',
            'nama' => 'required|string|max:255',  // Diubah
            'pekerjaan' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:wajib_retribusis,email,'.$id,
            'no_hp' => 'required|string|max:20',
            'no_wa' => 'required|string|max:20',
            'nik' => 'required|string|size:16|unique:wajib_retribusis,nik,'.$id,
            'alamat' => 'required|string',
            'file_foto' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'id_wajib_retribusi' => 'required|integer|unique:wajib_retribusis,id_wajib_retribusi,'.$id
        ]);

        // Handle file upload (jika ada file baru)
        if ($request->hasFile('file_foto')) {
            // Hapus file lama jika ada
            if ($wajibRetribusi->file_foto && Storage::exists('public/foto_wajib_retribusi/'.$wajibRetribusi->file_foto)) {
                Storage::delete('public/foto_wajib_retribusi/'.$wajibRetribusi->file_foto);
            }
            
            // Upload file baru
            $file = $request->file('file_foto');
            $filename = time() . '_' . $file->getClientOriginalName();
            $file->storeAs('public/foto_wajib_retribusi', $filename);
            $validatedData['file_foto'] = $filename;
        }

        // Update data
        $wajibRetribusi->update($validatedData);

        return response()->json([
            'status' => 'success',
            'message' => 'Data berhasil diupdate!',
            'data' => $wajibRetribusi
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
    public function destroy($id): JsonResponse
    {
        try {
            $wajibRetribusi = WajibRetribusi::findOrFail($id);
            $wajibRetribusi->delete();

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
 