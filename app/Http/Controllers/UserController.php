<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    //user register
    public function signup(Request $request)
    {
        $validatedData = $request->validate([
            'First_Name' => 'required|string|max:255',
            'Last_Name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'phone' => 'required|string|max:20',
            'status' => 'required',
            'password' => 'required|string|min:8|confirmed',
            'Gender' => 'required|string',
            'NIC_Number' => 'required|string|max:20',
        ]);

        $user = User::create([
            'First_Name' => $validatedData['First_Name'],
            'Last_Name' => $validatedData['Last_Name'],
            'email' => $validatedData['email'],
            'phone' => $validatedData['phone'],
            'status' => $validatedData['status'],
            'password' => Hash::make($validatedData['password']),
            'Gender' => $validatedData['Gender'],
            'NIC_Number' => $validatedData['NIC_Number'],
        ]);

        event(new Registered($user));
        Auth::login($user);
        $rememberToken =  $user->createToken('auth_token')->plainTextToken;
        return response()->json(['message' => 'User registered successfully', 'token' => $rememberToken], 200);
    }

    //user login
    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:8'
        ]);
        if (!Auth::attempt($validatedData)) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
        $user = Auth::user();
        $rememberToken =  $user->createToken('auth_token')->plainTextToken;
        return response()->json(['message' => 'User Sign In successfully', 'token' => $rememberToken], 200);
    }
    public function get_user_data(Request $request)
    {
        $userDetails = [
            'First_Name' => $request->user()->First_Name,
            'Last_Name' => $request->user()->Last_Name,
            'Email' => $request->user()->email,
            'Phone' => $request->user()->phone,
            'Gender' => $request->user()->Gender,
            'NIC' => $request->user()->NIC_Number
        ];
        return response()->json(['result' => $userDetails], 200);
    }
}
