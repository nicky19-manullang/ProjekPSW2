<?php

namespace App\Http\Controllers;

use App\Models\WajibRetribusi;  // Pastikan model yang benar digunakan
use Illuminate\Http\Request;

class WajibRetribusiController extends Controller
{
    public function index()
    {
        // Mengambil semua data WajibRetribusi dari database
        return WajibRetribusi::all();
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        // Validasi data yang diterima dari request
        $validatedData = $request->validate([
            'wajib_retribusi' => 'required|string|max:255',
            'keterangan' => 'nullable|string|max:255',
        ]);

        // Membuat data baru WajibRetribusi di database
        return WajibRetribusi::create($validatedData);
    }

    public function show(WajibRetribusi $wajibRetribusi)
    {
        // Menampilkan data WajibRetribusi berdasarkan ID
        return $wajibRetribusi;
    }

    public function edit(WajibRetribusi $wajibRetribusi)
    {
        //
    }

    public function update(Request $request, WajibRetribusi $wajibRetribusi)
    {
        // Validasi data yang diterima dari request
        $validatedData = $request->validate([
            'wajib_retribusi' => 'required|string|max:255',
            'keterangan' => 'nullable|string|max:255',
        ]);

        // Mengupdate data WajibRetribusi di database
        $wajibRetribusi->update($validatedData);

        return $wajibRetribusi;
    }

    public function destroy(WajibRetribusi $wajibRetribusi)
    {
        // Menghapus data WajibRetribusi dari database
        $wajibRetribusi->delete();

        return response()->json(['message' => 'Data deleted successfully']);
    }
}
