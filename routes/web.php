<?php

use App\Http\Controllers\CustomFunctions;
use App\Http\Controllers\IndexController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [IndexController::class, 'index']);
Route::get('/testeroute', [IndexController::class, 'testeroute']);
Route::get('/getSomeData', [CustomFunctions::class, 'getSomeData']);
Route::get('/testeroute', [IndexController::class, 'testeroute']);
