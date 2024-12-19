<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reports extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'report_id',
        'emp_id',
        'u_id',
        'dob',
        'mon_income',
        'mon_expenses',
        'occupation',
        'h_tn',
        'h_exs',
        'h_gap',
        'p_tn',
        'p_exs',
        'p_gap',
        'e_tn',
        'e_exs',
        'e_gap',
        'r_tn',
        'r_exs',
        'r_gap',
        's_tn',
        's_exs',
        's_gap',
    ];
}
