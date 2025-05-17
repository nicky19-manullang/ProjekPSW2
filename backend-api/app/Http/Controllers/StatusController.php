<?php

namespace App\Http\Controllers;

use App\Models\Status;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class StatusController extends Controller
{
    /**
     * Display a listing of the resource with pagination and search
     */
    public function index(Request $request)
    {
        try {
            $perPage = $request->input('per_page', 10);
            $search = $request->input('search');
            
            $query = Status::with('jenisStatus')
                ->orderBy('created_at', 'desc');
            
            if ($search) {
                $query->where(function($q) use ($search) {
                    $q->where('namaStatus', 'like', '%'.$search.'%')
                      ->orWhere('keterangan', 'like', '%'.$search.'%')
                      ->orWhereHas('jenisStatus', function($q) use ($search) {
                          $q->where('namaJenisStatus', 'like', '%'.$search.'%');
                      });
                });
            }
            
            $data = $query->paginate($perPage);
            
            return response()->json([
                'status' => 'success',
                'data' => $data->items(),
                'meta' => [
                    'current_page' => $data->currentPage(),
                    'per_page' => $data->perPage(),
                    'total' => $data->total(),
                ]
            ], 200);
            
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to retrieve status data',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Store a newly created resource in storage with transaction
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'idJenisStatus' => 'required|exists:jenis_statuses,id',
            'namaStatus' => [
                'required',
                'string',
                'max:255',
                'unique:statuses,namaStatus',
                function ($attribute, $value, $fail) {
                    if (strtolower($value) === 'admin') {
                        $fail('Nama status tidak boleh "admin"');
                    }
                }
            ],
            'keterangan' => 'nullable|string|max:500',
        ], [
            'idJenisStatus.required' => 'Jenis status wajib dipilih',
            'idJenisStatus.exists' => 'Jenis status tidak valid',
            'namaStatus.required' => 'Nama status wajib diisi',
            'namaStatus.unique' => 'Nama status sudah digunakan',
            'namaStatus.max' => 'Nama status maksimal 255 karakter',
            'keterangan.max' => 'Keterangan maksimal 500 karakter',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validasi gagal',
                'errors' => $validator->errors()
            ], 422);
        }

        DB::beginTransaction();
        try {
            $status = Status::create($validator->validated());
            
            DB::commit();
            
            return response()->json([
                'status' => 'success',
                'message' => 'Status berhasil ditambahkan',
                'data' => $status->load('jenisStatus')
            ], 201);
            
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal menambahkan status',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource with caching
     */
    public function show($id)
    {
        try {
            $status = Status::with('jenisStatus')
                ->findOrFail($id);
            
            return response()->json([
                'status' => 'success',
                'data' => $status
            ], 200);
            
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Status tidak ditemukan',
                'error' => $e->getMessage()
            ], 404);
        }
    }

    /**
     * Update the specified resource in storage with transaction
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'idJenisStatus' => 'required|exists:jenis_statuses,id',
            'namaStatus' => [
                'required',
                'string',
                'max:255',
                'unique:statuses,namaStatus,'.$id,
                function ($attribute, $value, $fail) {
                    if (strtolower($value) === 'admin') {
                        $fail('Nama status tidak boleh "admin"');
                    }
                }
            ],
            'keterangan' => 'nullable|string|max:500',
        ], [
            'idJenisStatus.required' => 'Jenis status wajib dipilih',
            'idJenisStatus.exists' => 'Jenis status tidak valid',
            'namaStatus.required' => 'Nama status wajib diisi',
            'namaStatus.unique' => 'Nama status sudah digunakan',
            'namaStatus.max' => 'Nama status maksimal 255 karakter',
            'keterangan.max' => 'Keterangan maksimal 500 karakter',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validasi gagal',
                'errors' => $validator->errors()
            ], 422);
        }

        DB::beginTransaction();
        try {
            $status = Status::findOrFail($id);
            $status->update($validator->validated());
            
            DB::commit();
            
            return response()->json([
                'status' => 'success',
                'message' => 'Status berhasil diperbarui',
                'data' => $status->load('jenisStatus')
            ], 200);
            
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal memperbarui status',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage with transaction
     */
    public function destroy($id)
    {
        DB::beginTransaction();
        try {
            $status = Status::findOrFail($id);
            $status->delete();
            
            DB::commit();
            
            return response()->json([
                'status' => 'success',
                'message' => 'Status berhasil dihapus'
            ], 200);
            
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal menghapus status',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}