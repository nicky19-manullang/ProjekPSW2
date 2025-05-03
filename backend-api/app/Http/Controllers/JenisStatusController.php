<?php

namespace App\Http\Controllers;

use App\Models\jenisStatus;
use Illuminate\Http\Request;

class JenisStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Mengambil semua data jenisStatus dari database
        return jenisStatus::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validasi data yang diterima dari request
        $validatedData = $request->validate([
            'jenis_status' => 'required|string|max:255',
            'keterangan' => 'nullable|string|max:255',
        ]);

        // Membuat data baru jenisStatus di database
        return jenisStatus::create($validatedData);
    }

    /**
     * Display the specified resource.
     */
    public function show(jenisStatus $jenisStatus)
    {
        // Menampilkan data jenisStatus berdasarkan ID
        return $jenisStatus;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(jenisStatus $jenisStatus)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, jenisStatus $jenisStatus)
    {
        // Validasi data yang diterima dari request
        $validatedData = $request->validate([
            'jenis_status' => 'required|string|max:255',
            'keterangan' => 'nullable|string|max:255',
        ]);

        // Melakukan update data jenisStatus di database
        $jenisStatus->update($validatedData);

        return $jenisStatus;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(jenisStatus $jenisStatus)
    {
        // Menghapus data jenisStatus berdasarkan ID
        $jenisStatus->delete();

        return response()->json(['message' => 'Data berhasil dihapus']);
    }
}
