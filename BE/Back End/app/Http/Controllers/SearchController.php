<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\TeacherController;

class SearchController extends Controller
{
    public function searchTeacher(Request $request)
    {
        $query = Teacher::query();

        if ($request->has('fullname')) {
            $query->where('fullname', 'like', '%'.$request->input('fullname').'%');
        }

        if ($request->has('designation')) {
            $query->where('designation', $request->input('designation'));
        }

        if ($request->has('experience')) {
            $query->where('experience', $request->input('experience'));
        }

        $results = $query->get();

        return response()->json([
            'data' => $results
        ]);
    }
    public function searchCourse(Request $request)
    {
        $query = Course::query();
        
        if ($request->has('name')) {
            $query->where('name', 'like', '%'.$request->input('name').'%');
        }

        if ($request->has('minPrice')) {
            $query->where('price', '>=', $request->input('minPrice'));
        }

        if ($request->has('maxPrice')) {
            $query->where('price', '<=', $request->input('maxPrice'));
        }

        $results = $query->get();

        return response()->json([
            'data' => $results
        ]);
    }
}
