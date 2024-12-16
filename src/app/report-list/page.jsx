"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../icons/logo.svg";

export default function Report_list() {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
            const tokenUnlock = localStorage.getItem('gts_token');
            const response = await fetch(`${apiUrl}/load_reports`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${tokenUnlock}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setReports(data.reports || []); // Handle cases where reports might be undefined
            } else {
                console.error("Failed to fetch reports");
            }
        } catch (error) {
            console.error("Error fetching reports:", error);
        } finally {
            setLoading(false);
        }
    };
    const handleViewReport = (reportId,Report_email) => {
        localStorage.setItem('report_id', reportId);
        localStorage.setItem('report_email', Report_email);
        window.location.href = 'report-list/reports';
    };

    return (
        <div>
            <nav className="p-4 md:p-10 text-white">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                    <Image
                        src={Logo}
                        alt="GTS Logo"
                        className="absolute h-40 w-52 left-3 top-[-14px] sm:left-1"
                    />
                    <div className="absolute left-0 right-0 top-6">
                        <h1 className="text-center text-[25px] hidden lg:block font-bold text-white">
                            G T S Reports
                        </h1>
                    </div>
                    <span className="bg-opacity-30 rounded-3xl pt-3 pb-3 absolute right-0 md:right-10 lg:right-10 top-8 sm:pt-2 sm:pb-2 sm:right-2 sm:top-9">
                        <Link href="/sign-in">
                            <span className="p-3 rounded-3xl ml-1 mt-1 mb-1 mr-2 pr-5 sm:p-2 sm:pl-3 sm:mr-1 text-white">
                                Hi Admin
                            </span>
                        </Link>
                    </span>
                </div>
            </nav>
            <div className="bg-white h-auto mt-20 rounded-3xl bg-opacity-25 mx-[5%]">
                {loading ? (
                    <p className="text-center text-gray-500 py-10">Loading reports...</p>
                ) : reports.length > 0 ? (
                    <div className="flex flex-col items-center">
                        {reports.map((report, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 mt-5 mb-5 p-5 h-auto w-full max-w-[90%] rounded-3xl flex flex-wrap items-center justify-between gap-4 shadow-lg"
                            >
                                {/* Logo Section */}
                                <div className="flex-1 text-center hidden sm:block sm:w-[20%]">
                                    <Image
                                        src={Logo}
                                        alt="Logo"
                                        className="w-[60px] sm:w-[80px] mt-[-10px] mb-[-20px]"
                                    />
                                </div>

                                {/* ID Section */}
                                <div className="flex-1 text-center hidden sm:block sm:w-[20%]">
                                    <h1 className="text-white text-xs sm:text-base font-bold">
                                        ID {report.report_id}
                                    </h1>
                                </div>

                                {/* Email Section */}
                                <div className="flex-1 text-center hidden sm:block sm:w-[20%]">
                                    <h1 className="text-white text-xs sm:text-base font-bold">
                                        {report.u_id}
                                    </h1>
                                </div>

                                {/* Date Section */}
                                <div className="flex-1 text-center sm:w-[20%]">
                                    <h1 className="text-white text-xs sm:text-base font-bold">
                                        {new Date(report.created_at).toLocaleDateString()}
                                    </h1>
                                </div>

                                {/* Button Section */}
                                <div className="w-full sm:w-auto flex justify-center sm:justify-end">
                                    <h1
                                        className="bg-green-500 flex items-center justify-center px-4 py-2 text-xs sm:text-base font-bold text-white rounded-3xl cursor-pointer hover:bg-green-600 transition-all"
                                        onClick={() => handleViewReport(report.report_id,report.u_id)}
                                    >
                                        View Report
                                    </h1>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500 py-10">No reports found.</p>
                )}
            </div>
        </div>
    );
}
