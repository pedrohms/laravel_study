<?php

namespace App\Http\Controllers;

class IndexController extends Controller
{
    public function index() {
        $curlHandler = curl_init('http://localhost:16000/restMainService/getQueryAsJson');

        curl_setopt($curlHandler, CURLOPT_POSTFIELDS, 'select * from ecf_empresa');
        curl_setopt($curlHandler, CURLOPT_HTTPHEADER, [  'Content-Type: text/plain' ]);
        curl_setopt($curlHandler, CURLOPT_RETURNTRANSFER, true);

        $resultHandler = json_decode(curl_exec($curlHandler), true);


        return inertia('Index', [
            'teste_var'=> $resultHandler
        ]);
    }
}
