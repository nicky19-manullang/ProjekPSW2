<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JenisPermohonan;

class JenisPermohonanController extends Controller
{
    public function index()
    {
        return JenisPermohonan::all();
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'jenis_permohonan' => 'required|string|max:255',
            'keterangan' => 'nullable|string|max:255',
        ]);

        return JenisPermohonan::create($validatedData);
    }

    public function show(JenisPermohonan $jenisPermohonan)
    {
        return $jenisPermohonan;
    }

    public function edit(JenisPermohonan $jenisPermohonan)
    {
        //
    }

    public function update(Request $request, JenisPermohonan $jenisPermohonan)
    {
        $validatedData = $request->validate([
            'jenis_permohonan' => 'required|string|max:255',
            'keterangan' => 'nullable|string|max:255',
        ]);

        $jenisPermohonan->update($validatedData);

        return $jenisPermohonan;
    }

    public function destroy(JenisPermohonan $jenisPermohonan)
    {
        $jenisPermohonan->delete();

        return response()->json(['message' => 'Data deleted successfully']);
    }
}
