<?php

use App\Http\Controllers\MessageController;
use App\Http\Controllers\ProcessController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post('/apply',[ProcessController::class, 'apply']);
Route::post('/login', [UserController::class, 'login']);
Route::post('/contact', [UserController::class, 'contact']);
Route::post('/signup', [UserController::class, 'signup']);
Route::post('/verify', [MessageController::class, 'send']);
Route::post('/verify_phone', [MessageController::class, 'send']);
Route::post('/forgot-password', [UserController::class, 'reset']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/profile', [UserController::class, 'get_user_data']);
    Route::post('/delete_account', [UserController::class, 'delete_account']);
    Route::post('/update_password', [UserController::class, 'update_password']);
    Route::post('/update_profile', [UserController::class, 'update_user_data']);
});
