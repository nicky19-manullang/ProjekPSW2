<?php

namespace App\Http\Controllers;
use App\Models\TarifObjekRetribusi;

use Illuminate\Http\Request;

class TarifObjekRetribusiController extends Controller
{
    public function index()
    {
        // Mengambil semua data tarif objek retribusi dari database
        return TarifObjekRetribusi::all();
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        // Validasi data yang diterima dari request
        $validatedData = $request->validate([
            'idObjekRetribusi' => 'required|integer',
            'idJenisJangkaWaktu' => 'required|integer',
            'tarif' => 'required|numeric',
            'keterangan' => 'nullable|string|max:255',
        ]);

        // Membuat data baru tarif objek retribusi di database
        return TarifObjekRetribusi::create($validatedData);
    }

    public function show(TarifObjekRetribusi $tarifObjekRetribusi)
    {
        // Menampilkan data tarif objek retribusi berdasarkan ID
        return $tarifObjekRetribusi;
    }

    public function edit(TarifObjekRetribusi $tarifObjekRetribusi)
    {
        //
    }

    public function update(Request $request, TarifObjekRetribusi $tarifObjekRetribusi)
    {
        // Validasi data yang diterima dari request
        $validatedData = $request->validate([
            'idObjekRetribusi' => 'required|integer',
            'idJenisJangkaWaktu' => 'required|integer',
            'tarif' => 'required|numeric',
            'keterangan' => 'nullable|string|max:255',
        ]);

        // Mengupdate data tarif objek retribusi di database
        $tarifObjekRetribusi->update($validatedData);

        return $tarifObjekRetribusi;
    }

    public function destroy(TarifObjekRetribusi $tarifObjekRetribusi)
    {
        // Menghapus data tarif objek retribusi dari database
        $tarifObjekRetribusi->delete();

        return response()->json(['message' => 'Data deleted successfully']);
    }
    
}
