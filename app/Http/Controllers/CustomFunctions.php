<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CustomFunctions extends Controller
{
    public function getSomeData( Request $request): array
    {
        return ['Teste' => 'Info'];
    }
}
