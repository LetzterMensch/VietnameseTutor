<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCourseStudentsTable extends Migration
{
    public function up()
    {
        Schema::create('course_students', function (Blueprint $table) {

		$table->integer('id_course',)->nullable()->default('NULL');
		$table->integer('id_student',)->nullable()->default('NULL');
		$table->integer('id',);
		$table->integer('progress',);
		$table->date('created_at')->nullable()->default('NULL');
		$table->date('updated_at')->nullable()->default('NULL');
		$table->primary(['progress','id']);
		$table->foreign('id_course')->references('id')->on('courses');		$table->foreign('id_student')->references('id')->on('students');
        });
    }

    public function down()
    {
        Schema::dropIfExists('course_students');
    }
}