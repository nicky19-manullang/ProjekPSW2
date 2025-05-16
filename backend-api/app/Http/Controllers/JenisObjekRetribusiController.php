<?php

namespace App\Http\Controllers;

use App\Models\JenisObjekRetribusi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class JenisObjekRetribusiController extends Controller
{
    public function index()
    {
        try {
            $data = JenisObjekRetribusi::all();
            return response()->json([
                'status' => 'success',
                'data' => $data
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to retrieve data'
            ], 500);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'jenisObjekRetribusi' => 'required|string|max:255|unique:jenis_objek_retribusis',
            'keterangan' => 'nullable|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $data = JenisObjekRetribusi::create($request->all());
            return response()->json([
                'status' => 'success',
                'data' => $data
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to create data'
            ], 500);
        }
    }

    public function show($id)
    {
        try {
            $data = JenisObjekRetribusi::findOrFail($id);
            return response()->json([
                'status' => 'success',
                'data' => $data
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Data not found'
            ], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'jenisObjekRetribusi' => 'required|string|max:255|unique:jenis_objek_retribusis,jenisObjekRetribusi,'.$id,
            'keterangan' => 'nullable|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $data = JenisObjekRetribusi::findOrFail($id);
            $data->update($request->all());
            return response()->json([
                'status' => 'success',
                'data' => $data
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to update data'
            ], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $data = JenisObjekRetribusi::findOrFail($id);
            $data->delete();
            return response()->json([
                'status' => 'success',
                'message' => 'Data deleted successfully'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to delete data'
            ], 500);
        }
    }
}