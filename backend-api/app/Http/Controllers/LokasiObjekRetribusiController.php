<?php

namespace App\Http\Controllers;
use App\Models\LokasiObjekRetribusi;

use Illuminate\Http\Request;

class LokasiObjekRetribusiController extends Controller
{
    public function index()
    {
        // Mengambil semua data lokasi objek retribusi dari database
        return LokasiObjekRetribusi::all();
    }
    public function create()
    {
        //
    }
    public function store(Request $request)
    {
        // Validasi data yang diterima dari request
        $validatedData = $request->validate([
            'lokasi_objek_retribusi' => 'required|string|max:255',
            'keterangan' => 'nullable|string|max:255',
        ]);

        // Membuat data baru lokasi objek retribusi di database
        return LokasiObjekRetribusi::create($validatedData);
    }
    public function show(LokasiObjekRetribusi $lokasiObjekRetribusi)
    {
        // Menampilkan data lokasi objek retribusi berdasarkan ID
        return $lokasiObjekRetribusi;
    }
    public function edit(LokasiObjekRetribusi $lokasiObjekRetribusi)
    {
        //
    }
    public function update(Request $request, LokasiObjekRetribusi $lokasiObjekRetribusi)
    {
        // Validasi data yang diterima dari request
        $validatedData = $request->validate([
            'lokasi_objek_retribusi' => 'required|string|max:255',
            'keterangan' => 'nullable|string|max:255',
        ]);

        // Mengupdate data lokasi objek retribusi di database
        $lokasiObjekRetribusi->update($validatedData);

        return $lokasiObjekRetribusi;
    }
    public function destroy(LokasiObjekRetribusi $lokasiObjekRetribusi)
    {
        // Menghapus data lokasi objek retribusi dari database
        $lokasiObjekRetribusi->delete();

        return response()->json(['message' => 'Lokasi Objek Retribusi deleted successfully']);
    }
}
