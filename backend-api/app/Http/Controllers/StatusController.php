<?php

namespace App\Http\Controllers;
use App\Models\Status; 
use Illuminate\Http\Request;

class StatusController extends Controller
{
    public function index()
    {
        // Mengambil semua data status dari database
        return Status::all();
    }
    public function create()
    {
        //
    }
    public function store(Request $request)
    {
        // Validasi data yang diterima dari request
        $validatedData = $request->validate([
            'idJenisStatus' => 'required|exists:jenis_statuses,id',
            'namaStatus' => 'required|string|max:255',
            'keterangan' => 'nullable|string|max:255',
        ]);

        // Membuat data baru status di database
        return Status::create($validatedData);
    }
    public function show(Status $status)
    {
        // Menampilkan data status berdasarkan ID
        return $status;
    }
    public function edit(Status $status)
    {
        //
    }
    public function update(Request $request, Status $status)
    {
        // Validasi data yang diterima dari request
        $validatedData = $request->validate([
            'idJenisStatus' => 'required|exists:jenis_statuses,id',
            'namaStatus' => 'required|string|max:255',
            'keterangan' => 'nullable|string|max:255',
        ]);

        // Mengupdate data status di database
        $status->update($validatedData);

        return $status;
    }
    public function destroy(Status $status)
    {
        // Menghapus data status dari database
        $status->delete();

        return response()->json(['message' => 'Status deleted successfully']);
    }
}
