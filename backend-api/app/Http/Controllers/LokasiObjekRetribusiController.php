<?php

namespace App\Http\Controllers;
use App\Models\LokasiObjekRetribusi;

use Illuminate\Http\Request;

class LokasiObjekRetribusiController extends Controller
{
    public function index()
    {
        try {
            $data = LokasiObjekRetribusi::all();
            return response()->json([
                'status' => 'success',
                'message' => 'Data retrieved successfully',
                'data' => $data
            ], 200)->header('Content-Type', 'application/json');
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to fetch data',
                'error' => $e->getMessage(),
                'error_code' => $e->getCode()
            ], 500)->header('Content-Type', 'application/json');
        }
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'lokasiObjekRetribusi' => 'required|string|max:255',
                'keterangan' => 'nullable|string|max:255',
            ]);

            $data = LokasiObjekRetribusi::create($validatedData);
            return response()->json([
                'status' => 'success',
                'message' => 'Data created successfully',
                'data' => $data,
                'timestamp' => now()
            ], 201)->header('Content-Type', 'application/json');
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to create data',
                'error' => $e->getMessage(),
                'error_code' => $e->getCode(),
                'timestamp' => now()
            ], 500)->header('Content-Type', 'application/json');
        }
    }

    public function show(LokasiObjekRetribusi $lokasiObjekRetribusi)
    {
        try {
            return response()->json([
                'status' => 'success',
                'message' => 'Data retrieved successfully',
                'data' => $lokasiObjekRetribusi,
                'timestamp' => now()
            ], 200)->header('Content-Type', 'application/json');
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to fetch data',
                'error' => $e->getMessage(),
                'error_code' => $e->getCode(),
                'timestamp' => now()
            ], 500)->header('Content-Type', 'application/json');
        }
    }

    public function edit(LokasiObjekRetribusi $lokasiObjekRetribusi)
    {
        //
    }

    public function update(Request $request, LokasiObjekRetribusi $lokasiObjekRetribusi)
    {
        try {
            $validatedData = $request->validate([
                'lokasiObjekRetribusi' => 'required|string|max:255',
                'keterangan' => 'nullable|string|max:255',
            ]);

            $lokasiObjekRetribusi->update($validatedData);

            return response()->json([
                'status' => 'success',
                'message' => 'Data updated successfully',
                'data' => $lokasiObjekRetribusi,
                'timestamp' => now()
            ], 200)->header('Content-Type', 'application/json');
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to update data',
                'error' => $e->getMessage(),
                'error_code' => $e->getCode(),
                'timestamp' => now()
            ], 500)->header('Content-Type', 'application/json');
        }
    }

    public function destroy(LokasiObjekRetribusi $lokasiObjekRetribusi)
    {
        try {
            $lokasiObjekRetribusi->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'Data deleted successfully',
                'timestamp' => now()
            ], 200)->header('Content-Type', 'application/json');
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to delete data',
                'error' => $e->getMessage(),
                'error_code' => $e->getCode(),
                'timestamp' => now()
            ], 500)->header('Content-Type', 'application/json');
        }
    }
}
