<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use Illuminate\Http\Request;

class TeacherController extends Controller
{
    public function search(Request $request)
    {
        $query = Teacher::query();

        if ($request->filled('Skills')) {
            $skills = explode(',', $request->input('Skills'));
            $query->where(function ($q) use ($skills) {
                foreach ($skills as $skill) {
                    $q->orWhere('Skills', 'LIKE', '%' . trim($skill) . '%');
                }
            });
        }

        if ($request->filled('Experiences')) {
            $experiences = $request->input('Experiences');
            $query->where('Experiences', '>=', $experiences);
        }

        if ($request->filled('Degree')) {
            $degrees = $request->input('Degree');
            $query->where('Degree', 'LIKE', '%' . $degrees . '%');
        }

        $query->orderBy('Name', 'asc');

        $teachers = $query->take(10)->get();

        if ($teachers->isEmpty()) {
            return response()->json(['message' => 'No teachers found.'], 404);
        }

        return response()->json($teachers);
    }
}