<?php

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
Route::get('/teachers/search', 'App\Http\Controllers\TeacherController@search');
Route::get('/courses/searchByPrice', 'CourseController@searchByPriceRange')->name('courses.searchByPrice');
Route::get('/courses', 'CoursesController@index')->name('courses.index');