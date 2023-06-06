<?php

use App\Http\Controllers\CourseController;
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

Route::get('/', function () {
    return view('welcome');
});

Route::controller(CourseController::class)->group(function () {
    Route::get('/course/{id}', 'show');
    Route::get('/course', 'list');
    Route::post('/course','create');
    Route::patch('/course/{id}','update');
    Route::delete('/course/{id}','destroy');
});

Route::controller(Teacher::class)->group(function () {
    Route::get('/teacher/{id}', 'show');
    Route::get('/teacher', 'list');
    Route::post('/teacher','create');
    Route::patch('/teacher/{id}','update');
    Route::delete('/teacher/{id}','destroy');
});
