<?php

namespace App\Http\Controllers;
use App\Models\JangkaWaktuSewa; 

use Illuminate\Http\Request;

class JangkaWaktuSewaController extends Controller
{
    public function index()
    {
        return JangkaWaktuSewa::all();
    }
    public function create()
    {
        //
    }
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
        return JangkaWaktuSewa::create($validatedData);
    }
    public function show(JangkaWaktuSewa $jangkaWaktuSewa)
    {
        // Menampilkan data jangka waktu sewa berdasarkan ID
        return $jangkaWaktuSewa;
    }
    public function edit(JangkaWaktuSewa $jangkaWaktuSewa)
    {
        //
    }
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

        return $jangkaWaktuSewa;
    }
    public function destroy(JangkaWaktuSewa $jangkaWaktuSewa)
    {
        // Menghapus data jangka waktu sewa dari database
        $jangkaWaktuSewa->delete();

        return response()->json(['message' => 'Jangka Waktu Sewa deleted successfully']);
    }
}
