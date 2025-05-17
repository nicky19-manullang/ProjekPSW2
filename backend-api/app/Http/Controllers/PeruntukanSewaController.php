<?php

namespace App\Http\Controllers;

use App\Models\PeruntukanSewa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\JsonResponse;

class PeruntukanSewaController extends Controller
{
    public function index(): JsonResponse
    {
        $peruntukanSewas = PeruntukanSewa::all();
        return response()->json([
            'success' => true,
            'data' => $peruntukanSewas
        ], 200);
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'jenis_kegiatan' => 'required|string|max:100|unique:peruntukan_sewas,jenis_kegiatan',
            'peruntukan_sewa' => 'required|string|max:255',
            'keterangan' => 'nullable|string|max:500'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $peruntukanSewa = PeruntukanSewa::create($validator->validated());

        return response()->json([
            'success' => true,
            'data' => $peruntukanSewa,
            'message' => 'Peruntukan Sewa created successfully'
        ], 201);
    }

    public function show(PeruntukanSewa $peruntukanSewa): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => $peruntukanSewa
        ], 200);
    }

    public function update(Request $request, PeruntukanSewa $peruntukanSewa): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'jenis_kegiatan' => 'required|string|max:100|unique:peruntukan_sewas,jenis_kegiatan,'.$peruntukanSewa->id,
            'peruntukan_sewa' => 'required|string|max:255',
            'keterangan' => 'nullable|string|max:500'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $peruntukanSewa->update($validator->validated());

        return response()->json([
            'success' => true,
            'data' => $peruntukanSewa,
            'message' => 'Peruntukan Sewa updated successfully'
        ], 200);
    }

    public function destroy(PeruntukanSewa $peruntukanSewa): JsonResponse
    {
        $peruntukanSewa->delete();
        return response()->json([
            'success' => true,
            'message' => 'Peruntukan Sewa deleted successfully'
        ], 200);
    }
}