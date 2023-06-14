<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCertificationsTable extends Migration
{
    public function up()
    {
        Schema::create('certifications', function (Blueprint $table) {

		$table->integer('id',);
		$table->string('cer_name',100)->default('None');
		$table->string('from',100)->default('None');
		$table->date('years');
		$table->integer('teacher_id',)->nullable()->default('NULL');
		$table->date('created_at')->nullable()->default('NULL');
		$table->date('update_at')->nullable()->default('NULL');
		$table->primary('id');
		$table->foreign('teacher_id')->references('id')->on('teachers');
        });
    }

    public function down()
    {
        Schema::dropIfExists('certifications');
    }
}