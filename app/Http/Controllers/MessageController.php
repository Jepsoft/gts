<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function send(Request $request)
    {

        // Include the external PHP file containing the SMS API functionality
        $pathToFile = base_path('vendor/notifylk/notify-php/docs/Api/SmsApi.php');
        include_once($pathToFile);
        return response()->json([
            'status' => $status,
            'result' => $result
        ], 200);

    }
}
