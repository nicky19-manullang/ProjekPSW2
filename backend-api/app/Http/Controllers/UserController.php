<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
       return User::all();
    }
    public function create()
    {
        //
    }
    public function store(Request $request)
    {
        // Validasi data yang diterima dari request
        $validatedData = $request->validate([
            'username' => 'required|string|max:255',
            'password' => 'required|string|min:8|confirmed',
            'email' => 'required|string|email|max:255|unique:users',
            'token' => 'required|string|max:255',
            'keterangan' => 'required|string|max:255'
        ]);

        // Membuat data baru User di database
        return User::create($validatedData);
    }
    public function show(User $user)
    {
        // Menampilkan data User berdasarkan ID
        return $user;
    }
    public function edit(User $user)
    {
        //
    }
    public function update(Request $request, User $user)
    {
        // Validasi data yang diterima dari request
        $validatedData = $request->validate([
            'username' => 'required|string|max:255',
            'password' => 'nullable|string|min:8|confirmed',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'token' => 'required|string|max:255',
            'keterangan' => 'required|string|max:255'
        ]);

        // Mengupdate data User di database
        $user->update($validatedData);

        return $user;
    }
    public function destroy(User $user)
    {
        // Menghapus data User dari database
        $user->delete();
        return response()->json(['message' => 'User deleted successfully']);
    }
}
