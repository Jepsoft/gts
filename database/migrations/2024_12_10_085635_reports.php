<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->string('report_id');
            $table->string('emp_id');
            $table->string('u_id');
            $table->date('dob');
            $table->double('mon_income');
            $table->double('mon_expenses');
            $table->string('occupation');
            $table->double('h_tn')->default("0");
            $table->double('h_exs')->default("0");
            $table->double('h_gap')->default("0");
            $table->double('p_tn')->default("0");
            $table->double('p_exs')->default("0");
            $table->double('p_gap')->default("0");
            $table->double('e_tn')->default("0");
            $table->double('e_exs')->default("0");
            $table->double('e_gap')->default("0");
            $table->double('r_tn')->default("0");
            $table->double('r_exs')->default("0");
            $table->double('r_gap')->default("0");
            $table->double('s_tn')->default("0");
            $table->double('s_exs')->default("0");
            $table->double('s_gap')->default("0");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
