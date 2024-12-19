<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

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
            'Phone' => $validatedData['phone'],
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
    public function delete_account(Request $request){
        $user = $request->user();
        $user->delete();
        return response()->json(['result' => 'success'], 200);
    }
    public function get_user_data(Request $request)
    {
        $userDetails = [
            'First_Name' => $request->user()->First_Name,
            'Last_Name' => $request->user()->Last_Name,
            'Email' => $request->user()->email,
            'Status' => $request->user()->status,
            'Phone' => $request->user()->Phone,
            'Gender' => $request->user()->Gender,
            'NIC' => $request->user()->NIC_Number
        ];
        return response()->json(['result' => $userDetails], 200);
    }
    public function update_password(Request $request){
        $validatedData = $request->validate([
            'password' => 'required|string|min:8'
        ]);

        $user = $request->user();
        $user->password = Hash::make($validatedData['password']);
        $user->save();

        return response()->json(['result' => 'success'], 200);
    }

    public function update_user_data(Request $request)
    {
        $validatedData = $request->validate([
            'Phone' => 'required|string|max:20',
        ]);
        $user = $request->user();
        $user->update($validatedData);
        return response()->json(['message' => 'User data updated successfully'], 200);
    }
    public function reset(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:8'
        ]);
        $email = $validatedData['email'];
        $user = User::where('email', $email)->first();
        if ($user) {
            $phoneNumber = $user->phone;
            return response()->json(['status' => 'success', 'phone' => $phoneNumber], 200);
        }
        $pathToFile = base_path('vendor/notifylk/notify-php/docs/Api/SmsApi.php');
        include_once($pathToFile);
        return response()->json([
            'status' => $status,
            'result' => $result
        ], 200);
    }

public function contact(Request $request) {
    $validatedData = $request->validate([
        'name' => 'required',
        'email' => 'required|email',
        'messag' => 'required'
    ]);
    $sender_email = $validatedData['email'];
    // Send email to the user
    Mail::send('emails.test', $validatedData, function ($message) use ($sender_email) {
        $message->to($sender_email)
                ->subject('Your Message Received');
    });
    // Send email to your info email
    Mail::send('emails.us', $validatedData, function ($message) {
        $message->to('info@gtsglobaltalentsolutions.com')
                ->subject('Email Received');
    });
    return 'Email sent successfully!';
}

}