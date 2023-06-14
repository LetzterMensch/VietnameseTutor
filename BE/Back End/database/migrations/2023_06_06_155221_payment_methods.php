<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentMethodsTable extends Migration
{
    public function up()
    {
        Schema::create('payment_methods', function (Blueprint $table) {

		$table->integer('id',);
		$table->string('bank_name',100)->default('None');
		$table->string('card_number',30)->default('None');
		$table->string('security_code',30)->default('None');
		$table->integer('user_id',)->nullable()->default('NULL');
		$table->date('created_at')->nullable()->default('NULL');
		$table->date('updated_at')->nullable()->default('NULL');
		$table->primary('id');
		$table->foreign('user_id')->references('id')->on('students');
        });
    }

    public function down()
    {
        Schema::dropIfExists('payment_methods');
    }
}