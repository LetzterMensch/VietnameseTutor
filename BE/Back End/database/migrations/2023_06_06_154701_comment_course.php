<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentCourseTable extends Migration
{
    public function up()
    {
        Schema::create('comment_course', function (Blueprint $table) {

		$table->integer('id',);
		$table->integer('id_student',)->nullable()->default('NULL');
		$table->integer('id_course',)->nullable()->default('NULL');
		$table->text('context');
		$table->integer('rating',)->nullable()->default('NULL');
		$table->date('created_at')->nullable()->default('NULL');
		$table->date('updated_at')->nullable()->default('NULL');
		$table->primary('id');
		$table->foreign('id_student')->references('id')->on('students');		$table->foreign('id_course')->references('id')->on('courses');
        });
    }

    public function down()
    {
        Schema::dropIfExists('comment_course');
    }
}