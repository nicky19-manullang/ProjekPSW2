<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        try {
            $users = User::all();
            return response()->json([
                'status' => 'success',
                'data' => $users
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to fetch users'
            ], 500);
        }
    }

    public function store(Request $request)
{
    try {
        $validatedData = $request->validate([
            'username' => 'required|string|max:255',
            'password' => 'required|string|min:8',
            'email' => 'required|email|unique:users',
            'token' => 'required|string|max:255',
            'keterangan' => 'required|string|max:255'
        ]);

        $validatedData['password'] = Hash::make($validatedData['password']);
        $user = User::create($validatedData);

        return response()->json([
            'status' => 'success',
            'data' => $user
        ], 201);

    } catch (\Illuminate\Validation\ValidationException $e) {
        // Return error validasi spesifik
        return response()->json([
            'status' => 'error',
            'errors' => $e->errors() // Tambahkan ini
        ], 422);
    }
}

    public function show(User $user)
    {
        try {
            return response()->json([
                'status' => 'success',
                'data' => $user
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to fetch user'
            ], 500);
        }
    }

    public function update(Request $request, $id) // Ganti parameter jadi $id
{
    try {
        $user = User::findOrFail($id); // Manual find user
        
        $validatedData = $request->validate([
            'username' => 'sometimes|string|max:255', // Pakai 'sometimes' biar optional
            'password' => 'nullable|string|min:8', // Hapus 'confirmed'
            'email' => 'sometimes|email|unique:users,email,' . $user->id,
            'token' => 'sometimes|string|max:255',
            'keterangan' => 'sometimes|string|max:255' // Hapus 'required'
        ]);

        if (!empty($validatedData['password'])) {
            $validatedData['password'] = Hash::make($validatedData['password']);
        }

        $user->update($validatedData);

        return response()->json([
            'status' => 'success',
            'data' => $user
        ], 200);
        
    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'status' => 'error',
            'errors' => $e->errors()
        ], 422);
    } catch (\Exception $e) {
        return response()->json([
            'status' => 'error',
            'message' => 'Failed to update user: ' . $e->getMessage() // Tambah detail error
        ], 500);
    }
}
  public function destroy($id)
{
    try {
        User::findOrFail($id)->delete();
        return response()->json([
            'status' => 'success',
            'message' => 'User deleted successfully'
        ]);
    } catch (\Exception $e) {
        return response()->json([
            'status' => 'error',
            'message' => 'Failed to delete user'
        ], 500);
    }
}
}
