'use client'
import Image from "next/image";
import Logo from "../icons/logo.svg";
import Link from "next/link";
import User from "../icons/user.svg";
import BG from "../icons/background.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import red_verify from "../icons/red_verify.svg";
import green_verify from "../icons/green_verify.svg";
import { enqueueSnackbar } from "notistack";
export default function Edit_profile() {
    const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
    var token;
    var thephone = null;
    thephone = localStorage.getItem("phone");
    const [user_login_done, set_login_done] = useState('visible');
    const [status, setstatus] = useState(green_verify);

    const [user_not_login, set_not_login_done] = useState('blur');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            token = localStorage.getItem('gts_token');
            set_login_done(token ? "visible" : "hidden");
            set_not_login_done(token ? "hidden" : "visible");
        } else {
            token = null;
        }
    }, [token]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [NIC, setNIC] = useState("");
    const [Email, setEmail] = useState("");
    const handle_verify = async () => {
        if (phone != thephone && /^[0-9]*0[0-9]*$/.test(phone) && phone.length === 10) {
            const response = await axios.post(`${apiUrl}/verify_phone`, {
                for: 'send',
                phone: phone,
            });
            if (response.data.result) {
                const code = response.data.result;
                localStorage.setItem("gtsvch", code);
            }
            blur_contrall();
        } else {
            const response = "Same or Invalid Number";
            enqueueSnackbar(response, { variant: 'info' });
        }
        //add success or fail message
    }
    const [blurscreen, setBlurscreen] = useState('');
    const [hide_item, sethideitem] = useState('hidden');
    const blur_contrall = () => {
        sethideitem('visible');
        if (blurscreen == "blur") {
            setBlurscreen("");
        } else {
            setBlurscreen("blur");
        }
    }
    const phone_proccess = (e) => {
        const value = e.target.value;
        setPhone(value);
        if (value != thephone) {
            setstatus(red_verify);
        } else {
            setstatus(green_verify);
        }
    };
    useEffect(() => {
        if (!token) {
            enqueueSnackbar("Please Login", { variant: 'error' });
            setTimeout(() => {
                window.location.href = '/sign-in';
            }, 2000);
        } else {
            const get_data = async () => {
                try {
                    const token_unlock = localStorage.getItem("gts_token");

                    const response = await axios.post(
                        `${apiUrl}/profile`,
                        null,
                        {
                            headers: {
                                'Authorization': `Bearer ${token_unlock}`
                            }
                        }
                    );
                    setFirstName(response.data.result.First_Name);
                    setLastName(response.data.result.Last_Name);
                    setPhone(response.data.result.Phone);
                    setNIC(response.data.result.NIC);
                    setEmail(response.data.result.Email);
                    setstatus(response.data.result.Status);
                    if (response.data.result.Status == 1) {
                        setstatus(green_verify);
                    } else {
                        setstatus(red_verify);
                    }
                    localStorage.setItem("phone", response.data.result.Phone);

                } catch (error) {
                    console.error("Error fetching profile data:", error);
                    enqueueSnackbar("Failed to fetch profile data", { variant: 'error' });
                }

            };
            get_data();
        }
    }, [token]);
    const [code, setCode] = useState('');
    const [stvf, setstatus_vf] = useState(false);
    const verify_code = async (event) => {
        event.preventDefault();
        try {
            const gtscode = localStorage.getItem("gtsvch");
            const response = await axios.post(`${apiUrl}/verify`, {
                for: 'check',
                code: code,
                gtscode: gtscode
            });
            if (response.data.status == 'Verified') {
                enqueueSnackbar("Verification Success", { variant: 'success' });
                setBlurscreen("");
                sethideitem("hidden");
                setstatus_vf(true)
                setVerify_update(green_verify);
                localStorage.removeItem('gtsvch');
            } else {
                enqueueSnackbar("Verification Failed", { variant: 'error' });
            }
        } catch (error) {
            console.error('Verification failed:', error);
        }
    };
    const handle_upadate = () => {
        const token_unlock = localStorage.getItem("gts_token");
            if (stvf == true || thephone == phone) {
                const update_data = async () => {
                    try {
                        const response = await axios.post(
                            `${apiUrl}/update_profile`,
                            {
                                First_Name: firstName,
                                Last_Name: lastName,
                                email: Email,
                                Phone: phone,
                                NIC_Number: NIC,
                            },
                            {
                                headers: {
                                    'Authorization': `Bearer ${token_unlock}`
                                }
                            }
                        );
                        enqueueSnackbar(response.data.message, { variant: 'success' });
                        setTimeout(() => {
                            window.location.href = '/profile';
                        }, 2000);
                    } catch (error) {
                        enqueueSnackbar("User Data Update Failed", { variant: 'error' });
                    }
                };

                update_data();
            } else {
                enqueueSnackbar("Please Verify Your Phone", { variant: 'error' });
            }
        
    }
    return (
        <div>
            <div className={`${hide_item} z-10 flex justify-center items-center absolute left-0 right-0 top-0 bottom-0 h-full mt-auto mb-auto`}>
                <div tabindex="-1" aria-hidden="true" className=" ">
                    <div class="relative p-4 w-full max-w-md max-h-full">
                        <div class="relative bg-white bg-opacity-30 bg-blur rounded-lg shadow ">
                            <h3 class="text-xl text-white dark:text-white text-center pt-5 ">
                                Verify Your Phone
                            </h3>
                            <div class="p-4 md:p-5">
                                <form class="space-y-4" action="#">
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Verification Code</label>
                                        <input
                                            type="text"
                                            name="code"
                                            id="code"
                                            value={code}
                                            onChange={(e) => setCode(e.target.value)}
                                            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            placeholder="Verification Code"
                                            required
                                        />
                                    </div>
                                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={verify_code}>Verify</button>
                                    <div class="text-sm font-medium text-white text-center">
                                        Didn't Get Code? <a href="#" class="text-blue-700 hover:underline dark:text-blue-700">Resend</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${blurscreen}`}>
                <div className={`fixed left-0 right-0 top-0 bottom-0 -z-50 `}>
                    <Image src={BG} className=' object-cover w-full h-full opacity-15' />
                </div>
                <div className="min-h-[100vh] flex flex-col">
                    <nav className="p-4  md:p-10 text-white">
                        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto h-full">
                            <div></div>
                            <Image src={Logo} alt="gts logo" className="special_logo absolute h-40 w-52 left-3 top-[-14px] sm:left-1" />
                            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown"></div>
                            </div>
                            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                                <ul className="flex flex-col font-medium p-4 md:p-0 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white">
                                    <h1 className="text-white text-center text-[20px] mt-5 mb-5 font-bold"><span className="font-bold span_g">G</span> <span className="font-bold span_t">T</span> <span className="font-bold span_s">S</span> User Profile</h1>
                                </ul>
                            </div>
                            <div className={`absolute right-10 text-white top-8 text-center special-signup_in_button ${user_not_login}`}>
                                <div className=' bg-white bg-opacity-30 flex justify-center  rounded-[20px]'>
                                    <Link href='/sign-in'>
                                        <div className='pr-2 pl-3 p-2 '>
                                            Signin
                                        </div>
                                    </Link>
                                    <Link href='/sign-up'>
                                        <div className='pl-3 pr-3 p-2 bg-blue-600 rounded-[20px] '>
                                            Signup
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className={`absolute right-10 text-white top-8 text-center special-signup_in_button ${user_login_done}`}>
                                <Link href='/profile'>
                                    <Image src={User} className=' bg-white h-[40px] w-[40px] rounded-full p-1.5' />
                                </Link>
                            </div>
                        </div>
                    </nav>
                    <div className="flex items-center justify-center">
                        <div className=" text-black bg-white bg-opacity-30 min-w-[400px] max-w-[600px] rounded-[35px] ml-[10%] mr-[10%] specical_profile">
                            <div className="ml-[5%] mr-[5%]">
                                <div className="flex justify-between items-center mt-8 mb-8">
                                    <h2 className="text-white w-1/4 text-left">First Name</h2>
                                    <input type="text" className="bg-white bg-opacity-10 text-white ml-2 border-b border-gray-400 outline-none rounded-[20px] p-1 w-3/4" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                                </div>
                                <div className="flex justify-between items-center mt-8 mb-8">
                                    <h2 className="text-white w-1/4 text-left">Last Name</h2>
                                    <input type="text" className="bg-white bg-opacity-10 text-white ml-2 border-b border-gray-400 outline-none rounded-[20px] p-1 w-3/4" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                                </div>
                                <div className="flex justify-between items-center mt-8 mb-8">
                                    <h2 className="text-white w-1/4 text-left">Email</h2>
                                    <input type="email" className="bg-white bg-opacity-10 text-white ml-2 border-b border-gray-400 outline-none rounded-[20px] p-1 w-3/4" onChange={(e) => setEmail(e.target.value)} value={Email} />
                                </div>
                                <div className="flex justify-between items-center mt-8 mb-8">
                                    <h2 className="text-white w-1/4 text-left">Mobile Number</h2>
                                    <div className="flex justify-end w-full ">
                                        <Image src={status} unoptimized width={50} height={50} className="h-[55px] w-[50px]  absolute -mt-[12px]" onClick={handle_verify} />
                                        <input type="tel" className="bg-white bg-opacity-10 text-white ml-2 border-b border-gray-400 outline-none rounded-[20px] p-1 w-11/12" onChange={phone_proccess} value={phone} />
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-8 mb-8">
                                    <h2 className="text-white w-1/4 text-left">NIC Number</h2>
                                    <input type="text" className="bg-white bg-opacity-10 text-white ml-2 border-b border-gray-400 outline-none rounded-[20px] p-1 w-3/4" onChange={(e) => setNIC(e.target.value)} value={NIC} />
                                </div>
                            </div>

                            <div className=" flex justify-center ">
                                <Link href={'/profile'} className=" font-bold text-white bg-blue-700 p-2 pl-5 pr-5 rounded-[20px] ml-auto mt-5 mb-5  mr-auto">Back</Link>
                                <h1 className=" cursor-pointer font-bold text-white bg-blue-700 p-2 pl-5 pr-5 rounded-[20px] ml-auto mt-5 mb-5  mr-auto" onClick={handle_upadate}>Update</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}