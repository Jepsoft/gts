<?php

namespace App\Http\Controllers;

use App\Models\Nam;
use App\Models\Reports;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use SebastianBergmann\CodeCoverage\Report\Xml\Report;

class ProcessController extends Controller
{
    public function load_reports(Request $request)
    {
       $position = $request->user()->position;
        if ($position === "admin") {
            $reports = Reports::orderBy('created_at', 'desc')->get();
            $formattedReports = $reports->map(function ($report) {
                $user = User::where('email', $report->u_id)->first();
                if ($user) {
                    $report->first_name = $user->First_Name;
                    $report->last_name = $user->Last_Name;
                }
                return $report->toArray();
            });
            return response()->json([
                'reports' => $formattedReports,
            ], 200);
        } else if ($position == "employee") {
            $reports = Reports::where('emp_id', $request->user()->id)
                ->orderBy('created_at', 'desc')
                ->get();
            $formattedReports = $reports->map(function ($report) {
                $user = User::where('email', $report->u_id)->first();
                if ($user) {
                    $report->first_name = $user->First_Name;
                    $report->last_name = $user->Last_Name;
                }
                return $report->toArray();
            });

            return response()->json([
                'reports' => $formattedReports,
            ], 200);
        } else {

            $userDetails = [
                'First_Name' => $request->user()->First_Name,
                'Last_Name' => $request->user()->Last_Name,
                'Email' => $request->user()->email,
                'Status' => $request->user()->status,
                'Phone' => $request->user()->phone,
                'Gender' => $request->user()->Gender,
                'NIC' => $request->user()->NIC_Number
            ];
            $email = $userDetails['Email'];
            $reports = Reports::where('u_id', $email)->get();
            $formattedReports = [];
            foreach ($reports as $report) {
                $formattedReports[] = $report->toArray();
            }
            return response()->json([
                'result' => $userDetails,
                'reports' => $formattedReports,
            ], 200);
        }
    }

    public function load_report(Request $request)
    {
        $request->validate([
            'report_id' => 'required',
        ]);

        $report_id = $request->input('report_id');
        $report_email = $request->input('report_email');

        $position = $request->user()->position;
        if ($position == "admin" || $position == "employee") {
            $user = User::where('email', $report_email)->first();

            if ($user) {
                $userDetails = [
                    'First_Name' => $user->First_Name,
                    'Last_Name' => $user->Last_Name,
                    'Email' => $user->email,
                    'Status' => $user->status,
                    'Phone' => $user->phone,
                    'Gender' => $user->Gender,
                    'NIC' => $user->NIC_Number
                ];
            }
            $reports = Reports::where('u_id', $report_email)
                ->where('report_id', $report_id)
                ->get();
            return response()->json([
                'result' => $userDetails,
                'report' => $reports,
            ], 200);
        } else {
            $userDetails = [
                'First_Name' => $request->user()->First_Name,
                'Last_Name' => $request->user()->Last_Name,
                'Email' => $request->user()->email,
                'Status' => $request->user()->status,
                'Phone' => $request->user()->phone,
                'Gender' => $request->user()->Gender,
                'NIC' => $request->user()->NIC_Number
            ];
            $email = $userDetails['Email'];
            $reports = Reports::where('u_id', $email)
                ->where('report_id', $report_id)
                ->get();
            return response()->json([
                'result' => $userDetails,
                'report' => $reports,
            ], 200);
        }
    }
    public function save_need_analyze(Request $request)
    {
        $position = $request->user()->position;
        if ($position == "admin" || $position == "employee") {
            $validatedData = $request->validate([
                'report_id' => 'numeric|required',
                'u_id' => 'email|required',
                'dob' => 'date|required',
                'mon_income' => 'numeric|required',
                'occupation' => 'string|required',
                'mon_expenses' => 'numeric|required',
                'h_tn' => '',
                'h_exs' => '',
                'h_gap' => '',
                'p_tn' => '',
                'p_exs' => '',
                'p_gap' => '',
                'e_tn' => '',
                'e_exs' => '',
                'e_gap' => '',
                'r_tn' => '',
                'r_exs' => '',
                'r_gap' => '',
                's_tn' => '',
                's_exs' => '',
                's_gap' => '',
            ]);
            $email = $validatedData['u_id'];

            $exists = User::where('email', $email)->exists();
            if ($exists) {
                $main_details = Reports::create([
                    'report_id' => $validatedData['report_id'],
                    'u_id' => $validatedData['u_id'],
                    'emp_id' => request()->user()->id,
                    'dob' => $validatedData['dob'],
                    'mon_income' => $validatedData['mon_income'],
                    'occupation' => $validatedData['occupation'],
                    'mon_expenses' => $validatedData['mon_expenses'],
                    'h_tn' => $validatedData['h_tn'],
                    'h_exs' => $validatedData['h_exs'],
                    'h_gap' => $validatedData['h_gap'],
                    'p_tn' => $validatedData['p_tn'],
                    'p_exs' => $validatedData['p_exs'],
                    'p_gap' => $validatedData['p_gap'],
                    'e_tn' => $validatedData['e_tn'],
                    'e_exs' => $validatedData['e_exs'],
                    'e_gap' => $validatedData['e_gap'],
                    'r_tn' => $validatedData['r_tn'],
                    'r_exs' => $validatedData['r_exs'],
                    'r_gap' => $validatedData['r_gap'],
                    's_tn' => $validatedData['s_tn'],
                    's_exs' => $validatedData['s_exs'],
                    's_gap' => $validatedData['s_gap'],
                ]);
                if ($main_details) {
                    $response = [
                        'status' => 'success',
                        'message' => 'Need analysis completed successfully.'
                    ];
                }

                return response()->json($response, 200);
            } else {
                $response = [
                    'status' => 'error',
                    'message' => 'Unauthorized'
                ];
                return response()->json($response, 401);
            }
        } else {
            $response = [
                'status' => 'error',
                'message' => 'Unauthorized Customer'
            ];
            return response()->json($response, 401);
        }
    }
}
