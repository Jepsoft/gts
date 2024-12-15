"use client";
import React, { useEffect, useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Logo from "../../icons/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { enqueueSnackbar } from "notistack";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
export default function Reports() {
    const [d2, setd2] = useState('Ready');
    const [report_id, setreport_id] = useState('Loading...');
    const [firstname, setfirstname] = useState('Loading...');
    const [lastname, setlastname] = useState('Loading...');
    const [phone, setphone] = useState('Loading...');
    const [age, setAge] = useState("loading...");
    const [nic, setnic] = useState('Loading...');
    const [dob, setdob] = useState('Loading...');
    const [occupation, setoccupation] = useState('Loading...');
    const [monthlyincome, setmonthlyincome] = useState('Loading...');
    const [monthlyexpencess, setmonthlyexpencess] = useState('Loading...');
    const [gender, setgender] = useState('Loading...');
    const [d2color, setd2color] = useState('bg-blue-700');
    const [newData, setChartData] = useState({
        labels: ["Solution", "Gap"],
        datasets: [
            {
                data: [100, 0],
                backgroundColor: ["#FFFF15", "#FF1818"],
                borderWidth: 1,
            },
        ],
    });
    const options = {
        plugins: {
            legend: {
                labels: {
                    color: "#000000",
                },
            },
        },
    };
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
            const rep_id = localStorage.getItem('report_id');
            const tokenUnlock = localStorage.getItem('gts_token');
            const response = await fetch(`${apiUrl}/load_report`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${tokenUnlock}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ report_id: rep_id })
            });
            const data = await response.json();
            console.log(data);
            function formatNumber(value) {
                if (value === null || value === undefined) return '0';

                // Round to two decimal places
                let roundedValue = parseFloat(value).toFixed(2);

                // Convert the value to a number to deal with larger or smaller values
                let numValue = parseFloat(roundedValue);

                // Format the number according to its size
                if (numValue >= 1000000) {
                    return (numValue / 1000000).toFixed(1) + 'M';
                } else if (numValue >= 100000) {
                    return (numValue / 1000).toFixed(1) + 'K';
                } else if (numValue >= 1000) {
                    return (numValue / 1000).toFixed(1) + 'K';
                } else {
                    return numValue.toFixed(2);
                }
            }

            // Example usage with your values:

            setoccupation(formatNumber(data.report[0].occupation));
            sethelthtotalneed(formatNumber(data.report[0].h_tn));
            sethelthexsolution(formatNumber(data.report[0].h_exs));
            setreport_id(data.report[0].report_id);
            sethealthgap(formatNumber(data.report[0].h_gap));
            setptn(formatNumber(data.report[0].p_tn));
            setpexs(formatNumber(data.report[0].p_exs));
            setpgap(formatNumber(data.report[0].p_gap));
            setetn(formatNumber(data.report[0].e_tn));
            seteexs(formatNumber(data.report[0].e_exs));
            setegap(formatNumber(data.report[0].e_gap));
            setrtn(formatNumber(data.report[0].r_tn));
            setrexs(formatNumber(data.report[0].r_exs));
            setrgap(formatNumber(data.report[0].r_gap));
            setstotalneed(formatNumber(data.report[0].s_tn));
            setsEXSISTINGSAVINGS(formatNumber(data.report[0].s_exs));
            setsgap(formatNumber(data.report[0].s_gap));
            setfirstname(data.result.First_Name);
            setlastname(data.result.Last_Name);
            setphone(data.result.Phone);
            setnic(data.result.NIC);
            setdob(data.report[0].dob);
            const birthDate = new Date(data.report[0].dob);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            setAge(age);
            setoccupation(data.report[0].occupation);
            setmonthlyincome(data.report[0].mon_income);
            setmonthlyexpencess(data.report[0].mon_expenses);
            setgender(data.result.Gender);
            setthev('visible');
        } catch (error) {
            setthev('hidden');
            console.error("Error fetching data:", error);
        }
    };

    const contentRef = useRef();
    const [thev, setthev] = useState('hidden');
    const saveAsPdf = async () => {
        try {
            const content = contentRef.current;
            if (!content) {
                console.error("Content to save as PDF is missing.");
                return;
            }

            const canvas = await html2canvas(content, {
                scale: 2,
                useCORS: true,
            });

            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = pageWidth;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            let yPosition = 0;
            pdf.addImage(imgData, "PNG", 0, yPosition, imgWidth, imgHeight);

            if (imgHeight > pageHeight) {
                let remainingHeight = imgHeight - pageHeight;
                while (remainingHeight > 0) {
                    yPosition -= pageHeight;
                    pdf.addPage();
                    pdf.addImage(imgData, "PNG", 0, yPosition, imgWidth, imgHeight);
                    remainingHeight -= pageHeight;
                }
            }

            pdf.save("GTS_Report_For_Maneth_Dulwan.pdf");
        } catch (error) {
            console.error("An error occurred while generating the PDF:", error);
        }
    };
    const [helthtotalneed, sethelthtotalneed] = useState('Loading...');
    const [helthexsolution, sethelthexsolution] = useState('Loading...');
    const [healthgap, sethealthgap] = useState('Loading...');
    const [ptn, setptn] = useState('Loading...');
    const [pexs, setpexs] = useState('Loading...');
    const [pgap, setpgap] = useState('Loading...');
    const [etn, setetn] = useState('Loading...');
    const [eexs, seteexs] = useState('Loading...');
    const [egap, setegap] = useState('Loading...');
    const [rtn, setrtn] = useState('Loading...');
    const [rexs, setrexs] = useState('Loading...');
    const [rgap, setrgap] = useState('Loading...');
    const [stotalneed, setstotalneed] = useState('Loading...');
    const [sEXSISTINGSAVINGS, setsEXSISTINGSAVINGS] = useState('Loading...');
    const [sgap, setsgap] = useState('Loading...');

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
            <div
                className={` ${thev} text-sm`}
                ref={contentRef}
                style={{
                    width: "210mm",
                    zIndex: -1,
                    height: "287mm",
                    padding: "10mm",
                    backgroundColor: "white",
                    color: "black",
                    boxSizing: "border-box",
                }}
            >
                <div>
                    <p className="text-left">Report Id - {report_id}</p>
                </div>
                <h1 className="text-center text-[25px] font-bold mb-6">
                    GTS Need Analyze Report
                </h1>

                {/* Personal Information Section */}
                <div className="mb-6">
                    <div className="flex items-center">
                        <h1 className="text-xl font-bold">Personal Information</h1>
                        <hr className="flex-grow ml-4 border-t-2 border-black" />
                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-4">
                        <div>
                            <div className="flex justify-between mb-4">
                                <span className="font-bold">First Name</span>
                                <span>-</span>
                                <span>{firstname}</span>
                            </div>
                            <div className="flex justify-between mb-4">
                                <span className="font-bold">Mobile Number</span>
                                <span>-</span>
                                <span>{phone}</span>
                            </div>
                            <div className="flex justify-between mb-4">
                                <span className="font-bold">Date of Birth</span>
                                <span>-</span>
                                <span>{dob}</span>
                            </div>
                            <div className="flex justify-between mb-4">
                                <span className="font-bold">Gender</span>
                                <span>-</span>
                                <span>{gender}</span>
                            </div>
                            <div className="flex justify-between mb-4">
                                <span className="font-bold">Monthly Income</span>
                                <span>-</span>
                                <span>{monthlyincome}</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-4">
                                <span className="font-bold">Last Name</span>
                                <span>-</span>
                                <span>{lastname}</span>
                            </div>
                            <div className="flex justify-between mb-4">
                                <span className="font-bold">NIC Number</span>
                                <span>-</span>
                                <span>{nic}</span>
                            </div>
                            <div className="flex justify-between mb-4">
                                <span className="font-bold">Age</span>
                                <span>-</span>
                                <span>{age}</span>
                            </div>
                            <div className="flex justify-between mb-4">
                                <span className="font-bold">Occupation</span>
                                <span>-</span>
                                <span>{occupation}</span>
                            </div>
                            <div className="flex justify-between mb-4">
                                <span className="font-bold">Monthly Expenses</span>
                                <span>-</span>
                                <span>{monthlyexpencess}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Health and Protection Sections */}
                <div className="grid grid-cols-2 gap-8">
                    {/* Health Section */}
                    <div>
                        <div className="flex items-center">
                            <h1 className="text-xl font-bold">Health</h1>
                            <hr className="flex-grow ml-4 border-t-2 border-black" />
                        </div>
                        <div className="mt-4 grid grid-cols-2 items-center">
                            <div className="flex flex-col space-y-4">
                                <div className="flex justify-between">
                                    <span className="font-bold">Total Need</span>
                                    <span>-</span>
                                    <span>{helthtotalneed}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-bold">Existing Solution</span>
                                    <span>-</span>
                                    <span>{helthexsolution}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-bold">Gap</span>
                                    <span>-</span>
                                    <span>{healthgap}</span>
                                </div>
                            </div>
                            <div className="relative">
                                <Doughnut data={newData} options={options} className="w-44 h-44" />
                                <div
                                    className={`${d2color} h-16 w-16 rounded-full absolute top-[65.5%] left-[50%] transform -translate-x-1/2 -translate-y-1/2`}
                                >
                                    <h1 className="text-white text-center text-sm leading-none font-bold mt-[40%]">
                                        {d2}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Protection Section */}
                    <div>
                        <div className="flex items-center">
                            <h1 className="text-xl font-bold">Protection</h1>
                            <hr className="flex-grow ml-4 border-t-2 border-black" />
                        </div>
                        <div className="mt-4 grid grid-cols-2 items-center">
                            <div className="flex flex-col space-y-4">
                                <div className="flex justify-between">
                                    <span className="font-bold">Total Need</span>
                                    <span>-</span>
                                    <span>{ptn}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-bold">Existing Solution</span>
                                    <span>-</span>
                                    <span>{pexs}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-bold">Gap</span>
                                    <span>-</span>
                                    <span>{pgap}</span>
                                </div>
                            </div>
                            <div className="relative">
                                <Doughnut data={newData} options={options} className="w-44 h-44" />
                                <div
                                    className={`${d2color} h-16 w-16 rounded-full absolute top-[65.5%] left-[50%] transform -translate-x-1/2 -translate-y-1/2`}
                                >
                                    <h1 className="text-white text-center text-sm leading-none font-bold mt-[40%]">
                                        {d2}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    {/* Health Section */}
                    <div>
                        <div className="flex items-center">
                            <h1 className="text-xl font-bold">Education</h1>
                            <hr className="flex-grow ml-4 border-t-2 border-black" />
                        </div>
                        <div className="mt-4 grid grid-cols-2 items-center">
                            <div className="flex flex-col space-y-4">
                                <div className="flex justify-between">
                                    <span className="font-bold">Total Need</span>
                                    <span>-</span>
                                    <span>{etn}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-bold">Existing Solution</span>
                                    <span>-</span>
                                    <span>{eexs}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-bold">Gap</span>
                                    <span>-</span>
                                    <span>{egap}</span>
                                </div>
                            </div>
                            <div className="relative">
                                <Doughnut data={newData} options={options} className="w-44 h-44" />
                                <div
                                    className={`${d2color} h-16 w-16 rounded-full absolute top-[65.5%] left-[50%] transform -translate-x-1/2 -translate-y-1/2`}
                                >
                                    <h1 className="text-white text-center text-sm leading-none font-bold mt-[40%]">
                                        {d2}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Protection Section */}
                    <div>
                        <div className="flex items-center">
                            <h1 className="text-xl font-bold">Retirement</h1>
                            <hr className="flex-grow ml-4 border-t-2 border-black" />
                        </div>
                        <div className="mt-4 grid grid-cols-2 items-center">
                            <div className="flex flex-col space-y-4">
                                <div className="flex justify-between">
                                    <span className="font-bold">Total Need</span>
                                    <span>-</span>
                                    <span>12000</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-bold">Existing Solution</span>
                                    <span>-</span>
                                    <span>12000</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-bold">Gap</span>
                                    <span>-</span>
                                    <span>3200</span>
                                </div>
                            </div>
                            <div className="relative">
                                <Doughnut data={newData} options={options} className="w-44 h-44" />
                                <div
                                    className={`${d2color} h-16 w-16 rounded-full absolute top-[65.5%] left-[50%] transform -translate-x-1/2 -translate-y-1/2`}
                                >
                                    <h1 className="text-white text-center text-sm leading-none font-bold mt-[40%]">
                                        {d2}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    {/* Health Section */}
                    <div>
                        <div className="flex items-center">
                            <h1 className="text-xl font-bold">Savings</h1>
                            <hr className="flex-grow ml-4 border-t-2 border-black" />
                        </div>
                        <div className="mt-4 grid grid-cols-2 items-center">
                            <div className="flex flex-col space-y-4">
                                <div className="flex justify-between">
                                    <span className="font-bold">Total Need</span>
                                    <span>-</span>
                                    <span>{stotalneed}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-bold">Existing Solution</span>
                                    <span>-</span>
                                    <span>{sEXSISTINGSAVINGS}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-bold">Gap</span>
                                    <span>-</span>
                                    <span>{sgap}</span>
                                </div>
                            </div>
                            <div className="relative">
                                <Doughnut data={newData} options={options} className="w-44 h-44" />
                                <div
                                    className={`${d2color} h-16 w-16 rounded-full absolute top-[65.5%] left-[50%] transform -translate-x-1/2 -translate-y-1/2`}
                                >
                                    <h1 className="text-white text-center text-sm leading-none font-bold mt-[40%]">
                                        {d2}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Protection Section */}
                    <div>
                        <div className="flex items-center">
                            <h1 className="text-xl font-bold">Protection</h1>
                            <hr className="flex-grow ml-4 border-t-2 border-black" />
                        </div>
                        <div className="mt-4 grid grid-cols-2 items-center">
                            <div className="flex flex-col space-y-4">
                                <div className="flex justify-between">
                                    <span className="font-bold">Total Need</span>
                                    <span>-</span>
                                    <span>12000</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-bold">Existing Solution</span>
                                    <span>-</span>
                                    <span>12000</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-bold">Gap</span>
                                    <span>-</span>
                                    <span>3200</span>
                                </div>
                            </div>
                            <div className="relative">
                                <Doughnut data={newData} options={options} className="w-44 h-44" />
                                <div
                                    className={`${d2color} h-16 w-16 rounded-full absolute top-[65.5%] left-[50%] transform -translate-x-1/2 -translate-y-1/2`}
                                >
                                    <h1 className="text-white text-center text-sm leading-none font-bold mt-[40%]">
                                        {d2}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div>
                    </div>
                </div>
            </div >

            <button
                onClick={saveAsPdf}
                className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
                Download PDF
            </button>
        </div >
    );
}
