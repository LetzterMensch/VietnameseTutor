<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {

		$table->integer('id',);
		$table->string('email',100)->default('None');
		$table->string('fullname',100)->default('None');
		$table->string('password',30)->default('None');
		$table->string('designation',100)->default('None');
		$table->date('created_at')->nullable()->default('NULL');
		$table->date('updated_at')->nullable()->default('NULL');
		$table->primary('id');

        });
    }

    public function down()
    {
        Schema::dropIfExists('students');
    }
}