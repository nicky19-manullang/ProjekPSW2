<?php

namespace App\Http\Controllers;
use App\Models\ObjekRetribusi;

use Illuminate\Http\Request;

class ObjekRetribusiController extends Controller
{
    public function index()
    {
        // Mengambil semua data objek retribusi dari database
        return ObjekRetribusi::all();
    }
    public function create()
    {
        //
    }
    public function store(Request $request)
    {
        // Validasi data yang diterima dari request
        $validatedData = $request->validate([
            'objek_retribusi' => 'required|string|max:255',
            'keterangan' => 'nullable|string|max:255',
        ]);

        // Membuat data baru objek retribusi di database
        return ObjekRetribusi::create($validatedData);
    }
    public function show(ObjekRetribusi $objekRetribusi)
    {
        // Menampilkan data objek retribusi berdasarkan ID
        return $objekRetribusi;
    }
    public function edit(ObjekRetribusi $objekRetribusi)
    {
        //
    }
    public function update(Request $request, ObjekRetribusi $objekRetribusi)
    {
        // Validasi data yang diterima dari request
        $validatedData = $request->validate([
            'objek_retribusi' => 'required|string|max:255',
            'keterangan' => 'nullable|string|max:255',
        ]);

        // Mengupdate data objek retribusi di database
        $objekRetribusi->update($validatedData);

        return $objekRetribusi;
    }
    public function destroy(ObjekRetribusi $objekRetribusi)
    {
        // Menghapus data objek retribusi dari database
        $objekRetribusi->delete();

        return response()->json(['message' => 'Objek Retribusi deleted successfully']);
    }
}
