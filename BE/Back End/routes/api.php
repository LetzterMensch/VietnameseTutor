<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\SearchController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('course/1', [CourseController::class, 'show']);
Route::get('course', [CourseController::class, 'list']);
Route::post('course', [CourseController::class, 'create']);
Route::put('course', [CourseController::class, 'update']);
Route::delete('course/1', [CourseController::class, 'destroy']);

Route::get('course/1', [TeacherController::class, 'show']);
Route::get('course', [TeacherController::class, 'list']);
Route::post('course', [TeacherController::class, 'create']);
Route::put('course', [TeacherController::class, 'update']);
Route::delete('course/1', [TeacherController::class, 'destroy']);

Route::get('searchTeacher', [SearchController::class, 'searchTeacher']);
Route::get('searchCourse', [SearchController::class, 'searchCourse']);