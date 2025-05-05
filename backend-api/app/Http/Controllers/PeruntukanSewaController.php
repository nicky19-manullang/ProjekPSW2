<?php

namespace App\Http\Controllers;
use App\Models\PeruntukanSewa;
use Illuminate\Http\Request;

class PeruntukanSewaController extends Controller
{
    public function index()
    {
        return PeruntukanSewa::all();
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        // Validasi data yang diterima dari request
        $validatedData = $request->validate([
            'peruntukan' => 'required|string|max:255',
            'keterangan' => 'nullable|string|max:255',
        ]);

        // Membuat data baru PeruntukanSewa di database
        return PeruntukanSewa::create($validatedData);
    }

    public function show(PeruntukanSewa $peruntukanSewa)
    {
        // Menampilkan data PeruntukanSewa berdasarkan ID
        return $peruntukanSewa;
    }

    public function edit(PeruntukanSewa $peruntukanSewa)
    {
        //
    }

    public function update(Request $request, PeruntukanSewa $peruntukanSewa)
    {
        // Validasi data yang diterima dari request
        $validatedData = $request->validate([
            'peruntukan' => 'required|string|max:255',
            'keterangan' => 'nullable|string|max:255',
        ]);

        // Mengupdate data PeruntukanSewa di database
        $peruntukanSewa->update($validatedData);

        return $peruntukanSewa;
    }

    public function destroy(PeruntukanSewa $peruntukanSewa)
    {
        // Menghapus data PeruntukanSewa dari database
        $peruntukanSewa->delete();
        return response()->json(['message' => 'Peruntukan Sewa deleted successfully']);
    }
}
