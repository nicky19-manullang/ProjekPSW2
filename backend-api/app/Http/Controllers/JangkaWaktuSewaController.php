<?php

namespace App\Http\Controllers;

use App\Models\JangkaWaktuSewa;
use Illuminate\Http\Request;

class JangkaWaktuSewaController extends Controller
{
    // Menampilkan semua data jangka waktu sewa
    public function index()
    {
        return response()->json(JangkaWaktuSewa::all(), 200);
    }

    // Menyimpan data jangka waktu sewa baru
    public function store(Request $request)
    {
        // Validasi data yang diterima dari request
        $validatedData = $request->validate([
            'idJenisJangkaWaktu' => 'required|exists:jenis_jangka_waktus,id',
            'idWajibRetribusi' => 'required|exists:wajib_retribusis,id',
            'jangkaWaktu' => 'required|string|max:255',
            'keterangan' => 'nullable|string|max:255',
        ]);

        // Membuat data baru jangka waktu sewa di database
        $jangkaWaktuSewa = JangkaWaktuSewa::create($validatedData);

        // Mengembalikan data yang baru dibuat beserta status HTTP 201
        return response()->json($jangkaWaktuSewa, 201);
    }

    // Menampilkan data jangka waktu sewa berdasarkan ID
    public function show(JangkaWaktuSewa $jangkaWaktuSewa)
    {
        return response()->json($jangkaWaktuSewa, 200);
    }

    // Mengupdate data jangka waktu sewa yang ada
    public function update(Request $request, JangkaWaktuSewa $jangkaWaktuSewa)
    {
        // Validasi data yang diterima dari request
        $validatedData = $request->validate([
            'idJenisJangkaWaktu' => 'required|exists:jenis_jangka_waktus,id',
            'idWajibRetribusi' => 'required|exists:wajib_retribusis,id',
            'jangkaWaktu' => 'required|string|max:255',
            'keterangan' => 'nullable|string|max:255',
        ]);

        // Mengupdate data jangka waktu sewa di database
        $jangkaWaktuSewa->update($validatedData);

        // Mengembalikan data yang sudah diperbarui beserta status HTTP 200
        return response()->json($jangkaWaktuSewa, 200);
    }

    // Menghapus data jangka waktu sewa dari database
    public function destroy(JangkaWaktuSewa $jangkaWaktuSewa)
    {
        // Menghapus data
        $jangkaWaktuSewa->delete();

        // Mengembalikan respons sukses dengan status HTTP 200
        return response()->json(['message' => 'Jangka Waktu Sewa deleted successfully'], 200);
    }
}
