"use client";
import React, { useEffect, useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Logo from "../../icons/logo.svg";
import Link from "next/link";
import Image from "next/image";
import BG from "../../icons/background.svg";
import { enqueueSnackbar } from "notistack";
import Phonee from "./phone-call.png";
import mail from "./mail.png";
import website from "./click.png";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Colors } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
import { Doughnut } from "react-chartjs-2";
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

    const parseValue = (value) => {
        const num = parseFloat(value);
        const unit = value.slice(-1).toUpperCase();  // Get the last character (K or M)

        if (unit === 'K') {
            return num * 1000;  // Convert K to thousands
        } else if (unit === 'M') {
            return num * 1000000;  // Convert M to millions
        } else if (unit === 'B') {
            return num * 1000000000;  // Convert B to billions
        } else {
            return num;  // If no unit, just return the number as it is
        }
    };

    const [newData, setChartData] = useState({

        labels: ["Solution", "Gap"],
        datasets: [
            {
                data: [0, percentage],
                backgroundColor: ["#FFFF15", "#FF1818"],
                borderWidth: 1,
            },
        ],
    });

    const [newData1, setChartData1] = useState({

        labels: ["Solution", "Gap"],
        datasets: [
            {
                data: [0, percentage],
                backgroundColor: ["#FFFF15", "#FF1818"],
                borderWidth: 1,
            },
        ],
    });

    const [newData2, setChartData2] = useState({

        labels: ["Solution", "Gap"],
        datasets: [
            {
                data: [0, percentage],
                backgroundColor: ["#FFFF15", "#FF1818"],
                borderWidth: 1,
            },
        ],
    });
    const [newData3, setChartData3] = useState({

        labels: ["Solution", "Gap"],
        datasets: [
            {
                data: [0, percentage],
                backgroundColor: ["#FFFF15", "#FF1818"],
                borderWidth: 1,
            },
        ],
    });
    const [newData4, setChartData4] = useState({

        labels: ["Solution", "Gap"],
        datasets: [
            {
                data: [0, percentage],
                backgroundColor: ["#FFFF15", "#FF1818"],
                borderWidth: 1,
            },
        ],
    });
    const [newData5, setChartData5] = useState({

        labels: ["Solution", "Gap"],
        datasets: [
            {
                data: [0, percentage],
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
    var percentage;
    useEffect(() => {
        getData();

    }, []);

    const getData = async () => {
        try {
            const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
            const rep_id = localStorage.getItem('report_id');
            const rep_email= localStorage.getItem('report_email');
            const tokenUnlock = localStorage.getItem('gts_token');
            const response = await fetch(`${apiUrl}/load_report`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${tokenUnlock}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ report_id: rep_id,report_email:rep_email })
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
            const dateOnly = new Date(data.report[0].created_at).toISOString().split("T")[0];
            setcdate(dateOnly);
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
            const p1 = (data.report[0].h_gap / data.report[0].h_tn) * 100;
            const p11 = (data.report[0].h_exs / data.report[0].h_tn) * 100;
            setChartData({

                labels: ["Solution", "Gap"],
                datasets: [
                    {
                        data: [p11, p1],
                        backgroundColor: ["#FFFF15", "#FF1818"],
                        borderWidth: 1,
                    },
                ],
            });

            const p2 = (data.report[0].p_gap / data.report[0].p_tn) * 100;
            const p22 = (data.report[0].p_exs / data.report[0].p_tn) * 100;
            setChartData1({

                labels: ["Solution", "Gap"],
                datasets: [
                    {
                        data: [p22, p2],
                        backgroundColor: ["#FFFF15", "#FF1818"],
                        borderWidth: 1,
                    },
                ],
            });
            const p3 = (data.report[0].e_gap / data.report[0].e_tn) * 100;
            const p33 = (data.report[0].e_exs / data.report[0].e_tn) * 100;
            setChartData2({

                labels: ["Solution", "Gap"],
                datasets: [
                    {
                        data: [p33, p3],
                        backgroundColor: ["#FFFF15", "#FF1818"],
                        borderWidth: 1,
                    },
                ],
            });

            const p4 = (data.report[0].r_gap / data.report[0].r_tn) * 100;
            const p44 = (data.report[0].r_exs / data.report[0].r_tn) * 100;
            setChartData3({

                labels: ["Solution", "Gap"],
                datasets: [
                    {
                        data: [p44, p4],
                        backgroundColor: ["#FFFF15", "#FF1818"],
                        borderWidth: 1,
                    },
                ],
            });

            const p5 = (data.report[0].s_gap / data.report[0].s_tn) * 100;
            const p55 = (data.report[0].s_exs / data.report[0].s_tn) * 100;
            setChartData4({

                labels: ["Solution", "Gap"],
                datasets: [
                    {
                        data: [p55, p5],
                        backgroundColor: ["#FFFF15", "#FF1818"],
                        borderWidth: 1,
                    },
                ],
            });
            const dummyData = {
                "Last 7 days": [
                    { label: "Hea", value1: p1, value2: p11 },
                    { label: "Pro", value1: p2, value2: p22 },
                    { label: "Edu", value1: p3, value2: p33 },
                    { label: "Ret", value1: p4, value2: p44 },
                    { label: "Sav", value1: p5, value2: p55 }
                ],
            };
            const dataaa = dummyData[selectedTimeRange];
            setChartDataa({
                labels: dataaa.map((item) => item.label), // Labels for the X-axis (Mon, Tue, etc.)
                datasets: [
                    {
                        label: "Total Need",
                        data: dataaa.map((item) => item.value1), // First dataset
                        backgroundColor: "rgba(75, 192, 192, 0.2)", // Light green
                        borderColor: "rgba(75, 192, 192, 1)", // Green
                        borderWidth: 1,
                    },
                    {
                        label: "Existing Solution",
                        data: dataaa.map((item) => item.value2),
                        backgroundColor: "rgba(255, 99, 132, 0.2)",
                        borderColor: "rgba(255, 99, 132, 1)",
                        borderWidth: 1,
                    },
                ],
            });
            setthev('visible');
        } catch (error) {
            setthev('hidden');
            console.error("Error fetching data:", error);
        }
    };
    const [cdate, setcdate] = useState('Loading...');
    const contentRef = useRef();
    const [thev, setthev] = useState('hidden');
    const saveAsPdf = async () => {
        try {
            const content = contentRef.current;
            if (!content) {
                console.error("Content to save as PDF is missing.");
                return;
            }

            // Use html2canvas to render the content to a canvas
            const canvas = await html2canvas(content, {
                scale: 2, // Increase resolution for better image quality
                useCORS: true,
            });

            // Convert the canvas to image data
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");

            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = pageWidth; // Scale image to fit the page width
            const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

            let yPosition = 0;
            // Add the first page with the image
            pdf.addImage(imgData, "PNG", 0, yPosition, imgWidth, imgHeight);

            // If the image is too tall, split it across pages
            if (imgHeight > pageHeight) {
                let remainingHeight = imgHeight - pageHeight;
                let offset = pageHeight;

                while (remainingHeight > 0) {
                    // Add a new page
                    pdf.addPage();
                    // Add a section of the image on the new page
                    pdf.addImage(
                        imgData,
                        "PNG",
                        0,
                        -offset, // Pull up the image by the offset
                        imgWidth,
                        imgHeight
                    );

                    // Update remaining height and offset
                    remainingHeight -= pageHeight;
                    offset += pageHeight;
                }
            }

            // Save the PDF with the given file name
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

    const [selectedTimeRange, setSelectedTimeRange] = useState("Last 7 days");
    const [chartDataa, setChartDataa] = useState(null);

    // Dummy data for chart



    const toggleDropdown = () => {
        const dropdown = document.getElementById("lastDaysdropdown");
        dropdown.classList.toggle("hidden");
    };

    return (
        <div>
            <nav className="p-4 md:p-10 text-white">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                    <Image
                        src={Logo}
                        alt="GTS Logo"
                        width={100}
                        height={100}
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
            <div className={`${thev}`}>
                <div className="bg-white h-80 mt-10 mt-20  rounded-3xl bg-opacity-25 ml-[5%] md:hidden lg:hidden xl:hidden visible mr-[5%] flex items-center justify-center">
                    <h1 className="text-white font-bold">No Preview For Mobile Devices</h1>
                </div>
                <div className="flex justify-center items-center mt-[50px] hidden md:block md:flex">
                    <div
                        className={` ${thev} text-sm min-w-[210mm] min-h-[296mm]  overflow-hidden`}
                        ref={contentRef}
                        style={{
                            width: "210mm",
                            zIndex: -1,
                            height: "296mm",
                            padding: "10mm",
                            backgroundColor: "white",
                            color: "black",
                            boxSizing: "border-box",
                        }}
                    >

                        <div className=" border-b-4 mb-5 border-[#FBAC1A] h-[110px] overflow-hidden left-0 flex justify-center items-center ml-[-38px] mr-[-38px] mt-[-38px] " style={{ background: "linear-gradient(to right, #011521, #03395A)" }}>
                            <div className="mt-[55px] ml-5">
                                <p className="text-left mt-5 text-white ml-[-30px]">Report Id - {report_id}</p>
                                <Image src={Logo} className="w-52 ml-[-40px] mt-[-25px]" alt="logo" height={100} /><br />

                            </div>
                            <div className="mt-[10px] ml-[200px]">
                                <p className="m-0 text-left text-white ">No 126, 3/23-B 3RD Floor, YMBA building, Colombo 01</p><br />
                                <p className="m-0 text-right text-white ">To  {firstname} {lastname}</p>
                                <p className="m-0 text-right text-white "> {cdate}</p>
                                <br />
                            </div>

                        </div>
                        <Image src={BG} height={100} className="w-[800px] absolute ml-[200px] opacity-25 rotate-90 mt-[-600px] " width={100} alt="logo" />

                        {/* Personal Information Section */}
                        <div className="mb-2 ">
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
                        <div className="grid grid-cols-2 gap-8 mb-[-20px]">
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
                                        <Doughnut data={newData1} options={options} className="w-44 h-44" />
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
                        <div className="grid grid-cols-2 gap-8 mb-[-20px]">
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
                                        <Doughnut data={newData2} options={options} className="w-44 h-44" />
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
                                            <span>{rtn}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-bold">Existing Solution</span>
                                            <span>-</span>
                                            <span>{rexs}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-bold">Gap</span>
                                            <span>-</span>
                                            <span>{rgap}</span>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <Doughnut data={newData3} options={options} className="w-44 h-44" />
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
                                        <Doughnut data={newData4} options={options} className="w-44 h-44" />
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
                            <div className="max-w-sm w-full  rounded-lg ">

                                <div className="flex items-center">
                                    <h1 className="text-xl font-bold">Total Analyze</h1>
                                    <hr className="flex-grow ml-4 border-t-2 border-black" />
                                </div>
                                {/* Chart */}
                                {chartDataa && <Bar data={chartDataa} options={{ responsive: true }} />}

                                <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className=" border-t-4 border-[#FBAC1A] mb-5  h-[70px] overflow-hidden left-0 flex mt-[-10px]  justify-between items-center ml-[-38px] mr-[-38px] pl-[2%] pr-[2%] " style={{ background: "linear-gradient(to right, #011521, #03395A)" }}>
                            {/* Phone Section */}
                            <div className="flex items-center">
                                <Image
                                    unoptimized
                                    src={Phonee}
                                    alt="Phone"
                                    height={40}
                                    width={40}
                                    className="w-[40px] bg-[#FBAC1A] p-2 rounded-full mr-3"
                                />
                                <div className="text-white text-left">
                                    <h1 className="font-bold text-xs">Phone</h1>
                                    <div className="flex justify-between text-xs">
                                        <a href="tel:+40761839118" className="text-xs">0761 839 118</a>
                                        <p className="text-xs">|</p>
                                        <a href="tel:+40743381537" className="text-xs">0743 381 537</a>
                                    </div>
                                </div>
                            </div>

                            {/* Email Section */}
                            <div className="flex items-center">
                                <Image
                                    unoptimized
                                    src={mail}
                                    alt="Email"
                                    height={40}
                                    width={40}
                                    className="w-[40px] bg-[#FBAC1A] p-2 rounded-full mr-3"
                                />
                                <div className="text-white text-left">
                                    <h3 className="font-bold text-xs">Email</h3>
                                    <a href="mailto:info@gtsglobaltalentsolutions.com" className="text-xs">
                                        info@gtsglobaltalentsolutions.com
                                    </a>
                                </div>
                            </div>

                            {/* Website Section */}
                            <div className="flex items-center">
                                <Image
                                    unoptimized
                                    src={website}
                                    alt="Website"
                                    height={40}
                                    width={40}
                                    className="w-[40px] bg-[#FBAC1A] p-2 rounded-full mr-3"
                                />
                                <div className="text-white text-left">
                                    <h1 className="font-bold text-xs">Website</h1>
                                    <a href="https://gtsglobaltalentsolutions.com" className="text-xs" target="_blank" rel="noopener noreferrer">
                                        gtsglobaltalentsolutions.com
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div >

                </div >
                <div className="flex justify-center ">
                    <button
                        onClick={saveAsPdf}
                        className="mt-6 px-6 py-3 bg-blue-600 text-white hover:bg-blue-800 hover:text-white hover:font-bold w-[59%] duration-500 rounded-[25px] "
                    >
                        Download PDF
                    </button>
                </div>
            </div>
        </div >
    );
}
