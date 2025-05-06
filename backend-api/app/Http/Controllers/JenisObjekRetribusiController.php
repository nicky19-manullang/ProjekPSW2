<?php

namespace App\Http\Controllers;
use App\Models\JenisObjekRetribusi; 

use Illuminate\Http\Request;

class JenisObjekRetribusiController extends Controller
{
    public function index()
    {
        // Mengambil semua data jenis objek retribusi dari database
        return JenisObjekRetribusi::all();
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        // Validasi data yang diterima dari request
        $validatedData = $request->validate([
            'jenisObjekRetribusi' => 'required|string|max:255',
            'keterangan' => 'nullable|string|max:255',
        ]);

        // Membuat data baru jenis objek retribusi di database
        return JenisObjekRetribusi::create($validatedData);
    }

    public function show(JenisObjekRetribusi $jenisObjekRetribusi)
    {
        // Menampilkan data jenis objek retribusi berdasarkan ID
        return $jenisObjekRetribusi;
    }

    public function edit(JenisObjekRetribusi $jenisObjekRetribusi)
    {
        //
    }

    public function update(Request $request, JenisObjekRetribusi $jenisObjekRetribusi)
    {
        // Validasi data yang diterima dari request
        $validatedData = $request->validate([
            'jenisObjekRetribusi' => 'required|string|max:255',
            'keterangan' => 'nullable|string|max:255',
        ]);

        // Mengupdate data jenis objek retribusi di database
        $jenisObjekRetribusi->update($validatedData);

        return $jenisObjekRetribusi;
    }

    public function destroy(JenisObjekRetribusi $jenisObjekRetribusi)
    {
        // Menghapus data jenis objek retribusi dari database
        $jenisObjekRetribusi->delete();

        return response()->json(['message' => 'Jenis Objek Retribusi deleted successfully']);
    }

}
