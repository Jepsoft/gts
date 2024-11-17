<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProcessController extends Controller
{
    public function apply(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'age' => 'required|email',
            'marital' => 'required',
            'nod' => 'required',
            ''
        ]);
    }
}
