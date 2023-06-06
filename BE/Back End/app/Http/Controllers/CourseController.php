<?php

namespace App\Http\Controllers;

use App\Models\Courses;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function searchByPriceRange(Request $request)
    {
        $minPrice = $request->input('min_price');
        $maxPrice = $request->input('max_price');
    
        $courses = Courses::whereBetween('price', [$minPrice, $maxPrice])->get();
        return response()->json($courses);
    }
}