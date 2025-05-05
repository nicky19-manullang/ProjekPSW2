<?php

namespace App\Http\Controllers;
use App\Models\PermohonanSewa; 
use Illuminate\Http\Request;

class PermohonanSewaController extends Controller
{
    public function index()
    {
        return PermohonanSewa::all();
    }
    public function create()
    {
        //
    }
    public function store(Request $request)
    {
        // Validasi data yang diterima dari request
        $validatedData = $request->validate([
            'nomorSuratPermohonan' => 'required|string|max:255',
            'tanggalPengajuan' => 'required|date',
            'idWajibRetribusi' => 'nullable|integer',
            'idObjekRetribusi' => 'nullable|integer',
            'idJenisJangkaWaktu' => 'nullable|integer',
            'lamaSewa' => 'nullable|string|max:255',
            'idPeruntukanSewa' => 'nullable|integer',
            'idStatus' => 'nullable|integer',
        ]);

        // Membuat data baru PermohonanSewa di database
        return PermohonanSewa::create($validatedData);
    }
    public function show(PermohonanSewa $permohonanSewa)
    {
        // Menampilkan data PermohonanSewa berdasarkan ID
        return $permohonanSewa;
    }
    public function edit(PermohonanSewa $permohonanSewa)
    {
        //
    }
    public function update(Request $request, PermohonanSewa $permohonanSewa)
    {
        // Validasi data yang diterima dari request
        $validatedData = $request->validate([
            'nomorSuratPermohonan' => 'required|string|max:255',
            'tanggalPengajuan' => 'required|date',
            'idWajibRetribusi' => 'nullable|integer',
            'idObjekRetribusi' => 'nullable|integer',
            'idJenisJangkaWaktu' => 'nullable|integer',
            'lamaSewa' => 'nullable|string|max:255',
            'idPeruntukanSewa' => 'nullable|integer',
            'idStatus' => 'nullable|integer',
        ]);

        // Mengupdate data PermohonanSewa di database
        $permohonanSewa->update($validatedData);

        return $permohonanSewa;
    }
    public function destroy(PermohonanSewa $permohonanSewa)
    {
        // Menghapus data PermohonanSewa dari database
        $permohonanSewa->delete();
        return response()->json(['message' => 'Permohonan Sewa deleted successfully']);
    }
}
