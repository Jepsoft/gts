'use client';

import Logo from "../../icons/logo.svg";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors } from "chart.js";
import { use, useEffect, useState } from "react";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function NeedAnalyze() {
    const [visibilitygts, setvisibilitygts] = useState('hidden');
    useEffect(() => {
        getData();
    }, [0])
    const getData = async () => {
        try {
            const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
            const tokenUnlock = localStorage.getItem('gts_token');
            const response = await fetch(`${apiUrl}/check_permission`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${tokenUnlock}`
                }
            });
            if (response.status == 200) {
                setvisibilitygts('visible')
            } else {
                setvisibilitygts('hidden')
                enqueueSnackbar("You Dont Have Access to Do this", { variant: 'error' });
                setTimeout(() => {
                    enqueueSnackbar("Redirecting to home...", { variant: 'info' });
                    setTimeout(() => {
                        window.location.href = '../';
                    }, 2000);
                }, 2000);
            }
        } catch (error) {
            setvisibilitygts('hidden')
            enqueueSnackbar("You Dont Have Access to Do this", { variant: 'error' });
            setTimeout(() => {
                enqueueSnackbar("Redirecting to home...", { variant: 'info' });
                setTimeout(() => {
                    window.location.href = '../';
                }, 2000);
            }, 2000);
        }
    }
    const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const [data, setData] = useState({
        labels: ["Gap", "Solution"],
        datasets: [
            {
                data: [100, 0],
                backgroundColor: ["#FF1818", "#FFFF15"],
                hoverBackgroundColor: ["#45B649", "#FFAA42"],
                borderWidth: 1,
            },
        ],
    });
    const [data3, setData3] = useState({
        labels: ["Gap", "Solution"],
        datasets: [
            {
                data: [100, 0],
                backgroundColor: ["#FF1818", "#FFFF15"],
                hoverBackgroundColor: ["#45B649", "#FFAA42"],
                borderWidth: 1,
            },
        ],
    });

    const [data4, setData4] = useState({
        labels: ["Gap", "Solution"],
        datasets: [
            {
                data: [100, 0],
                backgroundColor: ["#FF1818", "#FFFF15"],
                hoverBackgroundColor: ["#45B649", "#FFAA42"],
                borderWidth: 1,
            },
        ],
    });

    const [data5, setData5] = useState({
        labels: ["Gap", "Solution"],
        datasets: [
            {
                data: [100, 0],
                backgroundColor: ["#FF1818", "#FFFF15"],
                hoverBackgroundColor: ["#45B649", "#FFAA42"],
                borderWidth: 1,
            },
        ],
    });
    const [current, setcurrent] = useState(1);
    const [need, setNeed] = useState('');
    const [Solution, setSolution] = useState('');
    const [Gap, setGap] = useState('');
    const [ptotal, setPtotal] = useState('');
    const [pms, setpms] = useState('');
    const [prate, setprate] = useState('');
    const [pes, setpes] = useState('');
    const [etotal, setetotal] = useState('');
    const [ygap, setygap] = useState('');
    const [acneed, setecneed] = useState('');
    const [esol, setesol] = useState('');
    const [sxsaving, setexsaving] = useState('');
    const [ygaps, setygaps] = useState('');
    const [stotalneed, setstatlneed] = useState('');
    const [sEXSISTINGSAVINGS, SETextestingsavings] = useState('');
    const [monsal, setmonsal] = useState('');
    const [rrate, setrrate] = useState('');
    const [totneedr, settotneedr] = useState('');
    const [rexsol, setrexsol] = useState('');
    const [d1, setd1] = useState('Ready');
    const [exf, setexf] = useState('');
    const [d1color, setd1color] = useState('bg-blue-700');

    const [d2, setd2] = useState('Ready');
    const [d2color, setd2color] = useState('bg-blue-700');

    const [d3, setd3] = useState('Ready');
    const [d3color, setd3color] = useState('bg-blue-700');

    const [d4, setd4] = useState('Ready');
    const [d4color, setd4color] = useState('bg-blue-700');

    const [d5, setd5] = useState('Ready');
    const [d5color, setd5color] = useState('bg-blue-700');

    const [btntxt, setbtntxt] = useState('Next');

    const [newData, setChartData] = useState({
        labels: ["Solution", "Gap"],
        datasets: [
            {
                data: [100, 0],
                backgroundColor: ["#FFFF15", "#FF1818"],
                hoverBackgroundColor: ["#45B649", "#FFAA42"],
                borderWidth: 1,
            },
        ],
    });

    const handleCalculation2 = () => {
        const yearSalary = pms * 12;
        const totalNeed = yearSalary * prate;
        setPtotal(totalNeed);

        const gap = totalNeed - pes;
        const gapPercentage = (gap / totalNeed) * 100;
        const solutionPercentage = (pes / totalNeed) * 100;

        setChartData({
            labels: ["Solution", "Gap"],
            datasets: [
                {
                    data: [solutionPercentage, gapPercentage],
                    backgroundColor: ["#FFFF15", "#FF1818"],
                    hoverBackgroundColor: ["#45B649", "#FFAA42"],
                    borderWidth: 1,
                },
            ],
        });
        if (gapPercentage <= 20) {
            setd2color("bg-green-700");
            setd2("Good");
        } else if (gapPercentage < 52) {
            setd2color("bg-yellow-700");
            setd2("Normal");
        } else if (gapPercentage >= 50) {
            setd2color("bg-red-700");
            setd2("Risk");
        }
        else {
            setd2color("bg-blue-700");
            setd2("Ready");
        }
    };
    const handleCalculation = () => {
        if (need < Solution) {
            setData({
                labels: ["Gap", "Solution"],
                datasets: [
                    {
                        data: [100, 0],
                        backgroundColor: ["#FF1818", "#FFFF15"],
                        hoverBackgroundColor: ["#45B649", "#FFAA42"],
                        borderWidth: 1,
                    },
                ],
            });


        } else {
            const gap = need - Solution;
            setGap(gap);

            const gapPercentage = (gap / need) * 100;
            const solutionPercentage = (Solution / need) * 100;

            setData({
                labels: ["Solution", "Gap"],
                datasets: [
                    {
                        data: [solutionPercentage, gapPercentage],
                        backgroundColor: ["#FFFF15", "#FF1818"],
                        hoverBackgroundColor: ["#45B649", "#FFAA42"],
                        borderWidth: 1,
                    },
                ],
            });
            if (gapPercentage <= 20) {
                setd1color("bg-green-700");
                setd1("Good");
            } else if (gapPercentage < 52) {
                setd1color("bg-yellow-700");
                setd1("Normal");
            } else if (gapPercentage >= 50) {
                setd1color("bg-red-700");
                setd1("Risk");
            }
            else {
                setd1color("bg-blue-700");
                setd1("Ready");
            }

        }
    };

    const handleCalculation5 = () => {
        let thegap = ygaps;
        let cal = 1;
        while (thegap != 0) {
            thegap = thegap - 1;
            cal = 1.06 * cal;
        }
        const calwith_year = sxsaving * cal;
        setstatlneed(calwith_year);
        const gap = calwith_year - sEXSISTINGSAVINGS;

        const gapPercentage = (gap / calwith_year) * 100;
        const solutionPercentage = (sEXSISTINGSAVINGS / calwith_year) * 100;

        setData5({
            labels: ["Solution", "Gap"],
            datasets: [
                {
                    data: [solutionPercentage, gapPercentage],
                    backgroundColor: ["#FFFF15", "#FF1818"],
                    hoverBackgroundColor: ["#45B649", "#FFAA42"],
                    borderWidth: 1,
                },
            ],
        });
        if (gapPercentage <= 20) {
            setd5color("bg-green-700");
            setd5("Good");
        } else if (gapPercentage < 52) {
            setd5color("bg-yellow-700");
            setd5("Normal");
        } else if (gapPercentage >= 50) {
            setd5color("bg-red-700");
            setd5("Risk");
        }
        else {
            setd5color("bg-blue-700");
            setd5("Ready");
        }


    }
    const handleCalculation4 = () => {
        let thegap = rrate;
        let cal = 1;
        while (thegap != 0) {
            thegap = thegap - 1;
            cal = 1.06 * cal;
        }
        const val_gt = cal * monsal;
        settotneedr(val_gt);
        const acreal = val_gt * 120;
        setrexsol(acreal);
        const gap = rexsol - exf;
        const gapPercentage = (gap / rexsol) * 100;
        const solutionPercentage = (exf / rexsol) * 100;

        setData4({
            labels: ["Solution", "Gap"],
            datasets: [
                {
                    data: [solutionPercentage, gapPercentage],
                    backgroundColor: ["#FFFF15", "#FF1818"],
                    hoverBackgroundColor: ["#45B649", "#FFAA42"],
                    borderWidth: 1,
                },
            ],
        });
        if (gapPercentage <= 20) {
            setd4color("bg-green-700");
            setd4("Good");
        } else if (gapPercentage < 52) {
            setd4color("bg-yellow-700");
            setd4("Normal");
        } else if (gapPercentage >= 50) {
            setd4color("bg-red-700");
            setd4("Risk");
        }
        else {
            setd4color("bg-blue-700");
            setd4("Ready");
        }

    }
    const handleCalculation3 = () => {
        let thegap = ygap;
        let cal = 1;
        while (thegap != 0) {
            thegap = thegap - 1;
            cal = 1.06 * cal;
        }
        const calwith_year = etotal * cal;
        setecneed(calwith_year);
        const gap = calwith_year - esol;

        const gapPercentage = (gap / calwith_year) * 100;
        const solutionPercentage = (esol / calwith_year) * 100;

        setData3({
            labels: ["Solution", "Gap"],
            datasets: [
                {
                    data: [solutionPercentage, gapPercentage],
                    backgroundColor: ["#FFFF15", "#FF1818"],
                    hoverBackgroundColor: ["#45B649", "#FFAA42"],
                    borderWidth: 1,
                },
            ],
        });
        if (gapPercentage <= 20) {
            setd3color("bg-green-700");
            setd3("Good");
        } else if (gapPercentage < 52) {
            setd3color("bg-yellow-700");
            setd3("Normal");
        } else if (gapPercentage >= 50) {
            setd3color("bg-red-700");
            setd3("Risk");
        }
        else {
            setd3color("bg-blue-700");
            setd3("Ready");
        }


    }

    useEffect(() => {
        handleCalculation5();
    }, [sxsaving, ygaps, stotalneed, sEXSISTINGSAVINGS]);
    useEffect(() => {
        handleCalculation4();
    }, [monsal, rrate, totneedr, rexsol, exf]);
    useEffect(() => {
        handleCalculation();
    }, [need, Solution]);

    useEffect(() => {
        handleCalculation2();
    }, [pms, prate, pes]);
    useEffect(() => {
        handleCalculation3();
    }, [ygap, acneed, esol, etotal]);
    const options = {
        plugins: {
            legend: {
                labels: {
                    color: "#FFFFFF",
                },
            },
        },
    };
    const [group1, setgroup1] = useState('visible');
    const [group2, setgroup2] = useState('hidden');
    const [group3, setgroup3] = useState('hidden');
    const [mex, setMex] = useState('');
    const [oc, setOc] = useState('');
    const [mi, setMi] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [rtn, setrtn] = useState('');
    const [rexs, setrexs] = useState('');
    const [rgap, setrgap] = useState('');
    const [Age, setAge] = useState('');
    useEffect(() => {
        const birthDate = new Date(dob);
      const today = new Date();
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      setAge(calculatedAge);
    },[dob])
    const handleback = () => {
        if (current >= 2) {
            const cc = current - 1;
            setcurrent(cc);
            setgroup1('hidden');
            setgroup2('hidden');
            setgroup3('hidden');
            if (cc == 1) {
                setgroup1('visible');
            } else if (cc == 2) {
                setgroup2('visible');
            } else if (cc == 3) {
                setgroup3('visible');
            }
        } else {
            enqueueSnackbar("This is The First Page", { variant: 'info' })
        }
        setbtntxt("Next");

    }
    const hadlenext = () => {
        if (current <= 2 && btntxt != "Submit") {
            const cc = current + 1
            setcurrent(cc);
            setgroup1('hidden');
            setgroup2('hidden');
            setgroup3('hidden');
            if (cc == 1) {
                setgroup1('visible');
            } else if (cc == 2) {
                setgroup2('visible');
            } else if (cc == 3) {
                setgroup3('visible');
                setbtntxt("Submit")
            }
        }
        if (btntxt == "Submit") {
            handleSubmit();
        }
    }
    const handleSubmit = async () => {
        const now = new Date();
        const timestamp = now.getTime();
        const uniqueId = `${timestamp}`;
        const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
        const tokenUnlock = localStorage.getItem('gts_token');
        try {
            const response = await axios.post(`${apiUrl}/analyze_need`, {
                "report_id": uniqueId,
                "u_id": email,
                "dob": dob,
                "mon_income": mi,
                "occupation": oc,
                "mon_expenses": mex,
                "h_tn": need,
                "h_exs": Solution,
                "h_gap": Gap,
                "p_tn": ptotal,
                "p_exs": pes,
                "p_gap": ptotal - pes,
                "e_tn": acneed,
                "e_exs": esol,
                "e_gap": acneed - esol,
                "r_tn": rexsol,
                "r_exs": exf,
                "r_gap": rexsol - exf,
                "s_tn": stotalneed,
                "s_exs": sEXSISTINGSAVINGS,
                "s_gap": stotalneed - sEXSISTINGSAVINGS,



            }, {
                headers: {
                    Authorization: `Bearer ${tokenUnlock}`,
                    'Content-Type': 'application/json',
                },
            });
            enqueueSnackbar("Need Analyzed Successfully", { variant: 'success' });
            setTimeout(() => {
                enqueueSnackbar("Genataring the Report", { variant: 'info' });
                setTimeout(() => {
                    enqueueSnackbar("Redirecting to Report...", { variant: 'info' });
                    setTimeout(() => {
                        window.location.href = 'https://gtsglobaltalentsolutions.com/admin-panal/need-analyze';
                    }, 2000);
                }, 2000);

            }, 2000);

        } catch (error) {
            enqueueSnackbar(error.response.data.message, { variant: 'error' });
        }
    };
    return (
        <div className={`${visibilitygts}`}>
            <nav className="p-4 md:p-10 text-white">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                    <Image
                        src={Logo}
                        alt="gts logo"
                        className="absolute h-40 w-52 left-3 top-[-14px] sm:left-1"
                    />

                    <div className=" absolute left-0 right-0 top-6 ">
                        <h1 className="text-center text-[25px] hidden lg:block font-bold text-white">Plan Your Future Today</h1>
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
            <div className={`duration-500 ease-in-out bg-white bg-opacity-20 rounded-[25px] p-5 m-10 ${group1} `}>
                <div className="rounded-[25px] mx-[5%] mt-20">


                    <h1 className="text-left text-white text-md ">Personal Details</h1>
                    <div className=" p-4  rounded-[25px] bg-opacity-10">
                    <div className="mx-3 flex flex-wrap md:flex-nowrap justify-center gap-x-4 gap-y-4">
                            <div className="relative mb-4 w-full ">
                                <h1 className="text-left text-white text-md mb-1">User Email</h1>
                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    // value={need}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                />
                            </div>
                            <div className="relative mb-4 w-full ">
                                <h1 className="text-left text-white text-md mb-1">User Age</h1>

                                <input
                                    type="number"
                                    value={Age}
                                    placeholder="User Age"
                                    className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                />
                            </div>
                        </div>
                        <div className="mx-3 flex flex-wrap md:flex-nowrap justify-center gap-x-4 gap-y-4">
                            <div className="relative mb-4 w-full ">
                                <h1 className="text-left text-white text-md mb-1">Birthday</h1>
                                <input
                                    type="date"
                                    placeholder="Date of Birth"
                                    // value={need}
                                    onChange={(e) => setDob(e.target.value)}
                                    className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                />
                            </div>
                            <div className="relative mb-4 w-full ">
                                <h1 className="text-left text-white text-md mb-1">Monthly Income</h1>

                                <input
                                    type="number"
                                    // value={Solution}
                                    onChange={(e) => setMi(e.target.value)}
                                    placeholder="Monthly Income"
                                    className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                />
                            </div>
                        </div>
                        <div className="mx-3 flex flex-wrap md:flex-nowrap justify-center gap-x-4 gap-y-4">
                            <div className="relative mb-4 w-full ">
                                <h1 className="text-left text-white text-md mb-1">Occupation</h1>

                                <input
                                    type="text"
                                    placeholder="Occupation"
                                    // value={need}
                                    onChange={(e) => setOc(e.target.value)}
                                    className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                />
                            </div>
                            <div className="relative mb-4 w-full ">
                                <h1 className="text-left text-white text-md mb-1">Monthly Expenses</h1>

                                <input
                                    type="number"
                                    // value={Solution}
                                    onChange={(e) => setMex(e.target.value)}
                                    placeholder="Monthly Expenses"
                                    className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center bg-white mt-14 mx-[5%] rounded-[35px] bg-opacity-10">
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        <div className="p-5 rounded-[25px] w-full lg:w-[60%]">
                            <h1 className="text-left text-white text-lg sm:text-xl">Health</h1>
                            <div className=" mt-5 mb-5 rounded-[25px] bg-opacity-25">

                                <div className="relative mb-4">
                                    <div className="relative mb-4">
                                    <h1 className="text-left text-white text-md mb-1">Total Need</h1>
                                        <input
                                            type="number"
                                            placeholder="Total Need"
                                            value={need}
                                            onChange={(e) => setNeed(Number(e.target.value))}
                                            className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                        />
                                    </div>
                                    <div className="relative mb-4">
                                    <h1 className="text-left text-white text-md mb-1">Existing Solution</h1>
                                        <input
                                            type="number"
                                            value={Solution}
                                            onChange={(e) => setSolution(Number(e.target.value))}
                                            placeholder="Existing Solution"
                                            className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                        />
                                    </div>
                                    <div className="relative mb-4">
                                    <h1 className="text-left text-white text-md mb-1">Total Need</h1>
                                        <input
                                            type="number"
                                            placeholder="Total Need"
                                            value={Gap}
                                            className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Doughnut Chart Section */}
                        <div className="w-full sm:w-[45%] lg:w-[30%] max-w-[250px] my-auto">
                            <div className="py-6 relative flex items-center justify-center">
                                <div className="bg-[#22DF4B] mt-8 h-[228px] -z-20 w-[228px] absolute rounded-full"></div>
                                <Doughnut data={data} options={options} />
                                <div className={`${d1color} h-40 w-40 rounded-full absolute top-[55%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]`}>
                                    <h1 className="text-white text-center leading-none mt-[74px] font-bold">{d1}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`duration-500 ease-in-out bg-white bg-opacity-20 p-5 m-10 rounded-[35px] ${group2}`}>
                <div className="flex flex-wrap justify-center bg-white mt-14 mx-[5%] rounded-[35px] bg-opacity-10">
                    <div className="flex flex-wrap justify-center gap-6 w-full  items-center">
                        <div className="p-5 rounded-[25px] w-full sm:w-[45%] lg:w-[70%]">
                            <h1 className="text-left text-white text-lg sm:text-xl">Protection</h1>
                            <div className="rounded-[25px] bg-opacity-25 flex justify-center mt-5">
                                <div className="mx-3 w-full">
                                    <div className="relative mb-4">
                                    <h1 className="text-left text-white text-md mb-1">Monthly Salary</h1>
                                        <input
                                            type="number"
                                            placeholder="Monthly Salary"
                                            onChange={(e) => {
                                                setpms(Number(e.target.value));
                                                handleCalculation2();
                                            }}
                                            className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                        />
                                    </div>
                                    <div className="relative mb-4">
                                    <h1 className="text-left text-white text-md mb-1">Total Need</h1>
                                        <input
                                            type="number"
                                            value={ptotal}
                                            placeholder="Total Need"
                                            className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                        />
                                    </div>
                                </div>
                                <div className="mx-3 w-full">
                                    <div className="relative mb-4">
                                    <h1 className="text-left text-white text-md mb-1">Interest Rate</h1>
                                        <input
                                            type="number"
                                            placeholder="Interest Rate"
                                            onChange={(e) => {
                                                setprate(Number(e.target.value));
                                                handleCalculation2();
                                            }}
                                            className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                        />
                                    </div>
                                    <div className="relative mb-4">
                                    <h1 className="text-left text-white text-md mb-1">Existing Solution</h1>
                                        <input
                                            type="number"
                                            onChange={(e) => {
                                                setpes(Number(e.target.value));
                                                handleCalculation2();
                                            }}
                                            placeholder="Existing Solution"
                                            className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* Doughnut Chart Section */}
                        <div className="w-full sm:w-[45%] lg:w-[30%] max-w-[250px] ">
                            <div className="py-6 relative flex items-center justify-center">
                            <div className="bg-[#22DF4B] mt-8 h-[228px] -z-20 w-[228px] absolute rounded-full"></div>
                                <Doughnut data={newData} options={options} />
                                <div className={`${d2color} h-40 w-40 rounded-full absolute top-[55%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]`}>
                                    <h1 className="text-white text-center leading-none mt-[74px] font-bold">{d2}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center bg-white mt-14 mx-[5%] rounded-[35px] bg-opacity-10">
                    <div className="flex items-center flex-wrap justify-center gap-6 w-full">
                        <div className="p-5 rounded-[25px] w-full sm:w-[45%] lg:w-[70%]">
                            <h1 className="text-left text-white text-lg sm:text-xl">Education</h1>
                            <div className="rounded-[25px] bg-opacity-25 flex justify-center mt-5">
                                <div className="mx-3 w-full">
                                    <div className="relative mb-4">
                                    <h1 className="text-left text-white text-md mb-1">Total Need</h1>
                                        <input
                                            type="number"
                                            placeholder="Total Need"
                                            // value={need}
                                            onChange={(e) => {
                                                setetotal(Number(e.target.value));
                                                handleCalculation3();
                                            }}
                                            className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                        />
                                    </div>
                                    <div className="relative mb-4">
                                    <h1 className="text-left text-white text-md mb-1">Existing Solution</h1>
                                        <input
                                            type="number"
                                            // value={Solution}
                                            onChange={(e) => {
                                                setesol(Number(e.target.value));
                                                handleCalculation3();
                                            }}
                                            placeholder="Existing Solution"
                                            className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                        />
                                    </div>
                                </div>
                                <div className="mx-3 w-full">
                                    <div className="relative mb-4">
                                    <h1 className="text-left text-white text-md mb-1">Year Group</h1>
                                        <input
                                            type="number"
                                            placeholder="Year Group"
                                            // value={need}
                                            onChange={(e) => {
                                                setygap(Number(e.target.value));
                                                handleCalculation3();
                                            }}
                                            className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                        />
                                    </div>
                                    <div className="relative mb-4">
                                    <h1 className="text-left text-white text-md mb-1">Actual Need</h1>
                                        <input
                                            type="number"
                                            value={acneed}
                                            // onChange={(e) => setSolution(Number(e.target.value))}
                                            placeholder="Actual Need"
                                            className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* Doughnut Chart Section */}
                        <div className="w-full sm:w-[45%] lg:w-[30%] max-w-[250px]   ">
                            <div className="py-6 relative flex items-center justify-center">
                            <div className="bg-[#22DF4B] mt-8 h-[228px] -z-20 w-[228px] absolute rounded-full"></div>
                                <Doughnut data={data3} options={options} />
                                <div className={` ${d3color} h-40 w-40 rounded-full absolute top-[55%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]`}>
                                    <h1 className="text-white text-center leading-none mt-[74px] font-bold">{d3}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={` duration-500 ease-in-out bg-white bg-opacity-20 p-5 m-10 rounded-[35px] ${group3}`}>
                <div className="flex flex-wrap justify-center bg-white mt-14 mx-[5%] rounded-[35px] bg-opacity-10">
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        <div className="rounded-[25px] p-5  w-full sm:w-[45%] lg:w-[70%]">
                            <h1 className="text-left text-white text-lg sm:text-xl pt-5 pl-12">Retirement</h1>
                            <div className=" rounded-[25px] bg-opacity-25 flex flex-wrap  p-5 m-5 justify-center">
                                {/* First Column */}
                                <div className="mx-3 w-full sm:w-1/3">
                                    <div className="relative mb-4">
                                    <h1 className="text-left text-white text-md mb-1">Monthly Salary</h1>
                                        <input
                                            type="number"
                                            placeholder="Monthly Salary"
                                            onChange={(e) => {
                                                setmonsal(Number(e.target.value));
                                                handleCalculation4();
                                            }}
                                            className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                        />
                                    </div>
                                    <div className="relative mb-4">
                                    <h1 className="text-left text-white text-md mb-1">Actual Salary</h1>
                                        <input
                                            type="number"
                                            value={totneedr}
                                            placeholder="Actual Salary"
                                            className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                        />
                                    </div>
                                </div>

                                {/* Second Column */}
                                <div className="mx-3 w-full sm:w-1/3">
                                    <div className="relative mb-4">
                                    <h1 className="text-left text-white text-md mb-1">Year Gap</h1>
                                        <input
                                            type="number"
                                            placeholder="Year Gap"
                                            onChange={(e) => {
                                                setrrate(Number(e.target.value));
                                                handleCalculation4();
                                            }}
                                            className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                        />
                                    </div>
                                    <div className="relative mb-4">
                                    <h1 className="text-left text-white text-md mb-1">Exsiting Solution</h1>
                                        <input
                                            type="number"
                                            placeholder="Exsiting Solution"
                                            className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                            onChange={(e) => {
                                                setexf(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Third Column */}
                                <div className="mx-3 w-full sm:w-1/3 md:w-[70%]">
                                    <div className="relative mb-4">
                                    <h1 className="text-left text-white text-md mb-1">Total Need</h1>
                                        <input
                                            type="text"
                                            placeholder="Total Need"
                                            value={rexsol}
                                            className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>



                        {/* Doughnut Chart Section */}
                        <div className="w-full sm:w-[45%] lg:w-[30%] max-w-[250px] my-auto">
                            <div className="py-6 relative flex justify-center items-center ">
                            <div className="bg-[#22DF4B] mt-8 h-[228px] -z-20 w-[228px] absolute rounded-full"></div>
                                <Doughnut data={data4} options={options} />
                                <div className={`${d4color} h-40 w-40 rounded-full absolute top-[55%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]`}>
                                    <h1 className="text-white text-center leading-none mt-[74px] font-bold">{d4}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center bg-white mt-14 mx-[5%] rounded-[35px] bg-opacity-10">
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        <div className="p-5 rounded-[25px] w-full sm:w-[45%] lg:w-[60%]">
                            <h1 className="text-left text-white text-lg sm:text-xl">Savings</h1>
                            <div className=" p-5 mt-5 mb-5 rounded-[25px] bg-opacity-25 flex justify-center">
                                <div className="mx-3 w-full">
                                    <div className="relative mb-4">
                                    <h1 className="text-left text-white text-md mb-1">Expected Saving</h1>
                                        <input
                                            type="number"
                                            placeholder="Expected Saving"
                                            // value={need}
                                            onChange={(e) => {
                                                setexsaving(Number(e.target.value));
                                                handleCalculation5();
                                            }}
                                            className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                        />
                                    </div>
                                    <div className="relative mb-4">
                                    <h1 className="text-left text-white text-md mb-1">Actual Savings</h1>
                                        <input
                                            type="number"
                                            value={stotalneed}
                                            placeholder="Actual Savings"
                                            className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                        />
                                    </div>
                                </div>
                                <div className="mx-3 w-full">
                                    <div className="relative mb-4">
                                    <h1 className="text-left text-white text-md mb-1">Year Gap</h1>
                                        <input
                                            type="number"
                                            placeholder="Year Gap"
                                            // value={need}
                                            onChange={(e) => {
                                                setygaps(Number(e.target.value));
                                                handleCalculation5();
                                            }}
                                            className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                        />
                                    </div>
                                    <div className="relative mb-4">
                                    <h1 className="text-left text-white text-md mb-1">Existing Savings</h1>
                                        <input
                                            type="number"
                                            // value={setecneed}
                                            onChange={(e) => {
                                                SETextestingsavings(Number(e.target.value));
                                                handleCalculation5();
                                            }}
                                            placeholder="Existing Savings"
                                            className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* Doughnut Chart Section */}
                        <div className="w-full sm:w-[45%] lg:w-[30%] max-w-[250px] my-auto">
                            <div className="py-6 relative flex justify-center items-center ">
                            <div className="bg-[#22DF4B] mt-8 h-[228px] -z-20 w-[228px] absolute rounded-full"></div>
                                <Doughnut data={data5} options={options} />
                                <div className={`${d5color} h-40 w-40 rounded-full absolute top-[55%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]`}>
                                    <h1 className="text-white text-center leading-none mt-[74px] font-bold">{d5}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between ml-[7%] p-5 mr-[7%]">
                <h2 className="bg-blue-600 text-white font-bold text-center pt-2 pb-2 pl-5 pr-5 rounded-[25px]  cursor-pointer hover:scale-110 duration-300 " onClick={handleback}>Back</h2>
                <h2 className="bg-blue-600 text-white font-bold text-center pt-2 pb-2 pl-5 pr-5 rounded-[25px]  cursor-pointer hover:scale-110 duration-300 " onClick={hadlenext}>{btntxt}</h2>
            </div>
        </div>
    );
}

