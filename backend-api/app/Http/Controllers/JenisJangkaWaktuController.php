<?php

namespace App\Http\Controllers;
use App\Models\JenisJangkaWaktu; 
use Illuminate\Http\Request;

class JenisJangkaWaktuController extends Controller
{
    public function index()
    {
        // Mengambil semua data jenis jangka waktu dari database
        return JenisJangkaWaktu::all();
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        // Validasi data yang diterima dari request
        $validatedData = $request->validate([
            'jenisJangkaWaktu' => 'required|string|max:255',
            'keterangan' => 'nullable|string|max:255',
        ]);

        // Membuat data baru jenis jangka waktu di database
        return JenisJangkaWaktu::create($validatedData);
    }

    public function show(JenisJangkaWaktu $jenisJangkaWaktu)
    {
        // Menampilkan data jenis jangka waktu berdasarkan ID
        return $jenisJangkaWaktu;
    }

    public function edit(JenisJangkaWaktu $jenisJangkaWaktu)
    {
        //
    }

    public function update(Request $request, JenisJangkaWaktu $jenisJangkaWaktu)
    {
        // Validasi data yang diterima dari request
        $validatedData = $request->validate([
            'jenisJangkaWaktu' => 'required|string|max:255',
            'keterangan' => 'nullable|string|max:255',
        ]);

        // Mengupdate data jenis jangka waktu di database
        $jenisJangkaWaktu->update($validatedData);

        return $jenisJangkaWaktu;
    }

    public function destroy(JenisJangkaWaktu $jenisJangkaWaktu)
    {
        // Menghapus data jenis jangka waktu dari database
        $jenisJangkaWaktu->delete();

        return response()->json(['message' => 'Jenis Jangka Waktu deleted successfully']);
    }
}
