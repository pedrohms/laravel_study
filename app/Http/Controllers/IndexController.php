<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Inertia\Inertia;

class IndexController extends Controller
{
    public function index(Request $request)
    {

        $request->cookies->add([Cookie::make(name: 'testeCookie', value: 1, httpOnly: true)]);
        echo json_encode($request->cookie('testeCookie'));

        if (!$request->cookies->has('testeCookie')) {
            $request->cookies->add([Cookie::make(name: 'testeCookie', value: 1, httpOnly: true)]);
        } else {
            $request->cookies->set('testeCookie', $request->cookies->get('testeCookie', 1) + 1);
        }


        try {
            $curlHandler = curl_init('http://demo.compuforte-ddns.com.br:16000/restMainService/getQueryAsJson');

            curl_setopt($curlHandler, CURLOPT_POSTFIELDS, 'select * from ecf_empresa');
            curl_setopt($curlHandler, CURLOPT_HTTPHEADER, ['Content-Type: text/plain']);
            curl_setopt($curlHandler, CURLOPT_RETURNTRANSFER, true);

            $resultHandler = json_decode(curl_exec($curlHandler), true);

            return Inertia::render('Index', [
                'teste_var' => $resultHandler,
                'count' => $request->cookies->get('testeCookie')
            ])->toResponse($request);
        } catch (Exception $err) {
            return Inertia::render('Index', [
                'teste_var' => $err,
                'count' => $request->cookies->get('testeCookie')
            ])->toResponse($request);
        }
    }
}
