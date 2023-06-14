<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoursesTable extends Migration
{
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {

		$table->integer('id',);
		$table->string('name',100)->default('None');
		$table->string('level',30)->default('None');
		$table->string('method',30)->nullable()->default('NULL');
		$table->text('description');
		$table->float('price');
		$table->integer('id_teacher',)->nullable()->default('NULL');
		$table->date('created_at')->nullable()->default('NULL');
		$table->date('updated_at')->nullable()->default('NULL');
		$table->primary('id');
		$table->foreign('id_teacher')->references('id')->on('teachers');
        });
    }

    public function down()
    {
        Schema::dropIfExists('courses');
    }
}