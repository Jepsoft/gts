'use client'
import Image from "next/image";
import Logo from "../icons/logo.svg";
import Link from "next/link";
import User from "../icons/user.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
export default function Profile() {
    const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const token = typeof window !== 'undefined' ? localStorage.getItem("gts_token") : null;
    
    const check_login = () => {
        const user_login_done = token ? "visible" : "hidden";
        const user_not_login = token ? "hidden" : "visible";
        return { user_login_done, user_not_login };
    }
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [NIC, setNIC] = useState("");
    const [Email, setEmail] = useState("");
    const [Gender, setGender] = useState("");
    const { user_login_done, user_not_login } = check_login();
    
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
                    setGender(response.data.result.Gender);
                    setEmail(response.data.result.Email);
                } catch (error) {
                    console.error("Error fetching profile data:", error);
                    enqueueSnackbar("Failed to fetch profile data", { variant: 'error' });
                }
            };
            get_data();
        }
    }, [token]);

    const handle_logout = () => {
        const isloged_In = localStorage.getItem("gts_token");
        if (isloged_In) {
            enqueueSnackbar("User Logout...", { variant: 'success' });
            localStorage.removeItem('gts_token');
            window.location.href = '/';
        } else {
            enqueueSnackbar("Redirecting to Login", { variant: 'success' });
            setTimeout(() => {
                window.location.href = '/sign-in';
            }, 100);
        }
    };
    return (
        <div>
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
                                <h1 className="font-bold md:text-2xl lg:text-2xl sm:text-xl"><span className="span_g">G</span>lobal <span className="span_t">T</span>alent <span className="span_s">S</span>olutions</h1>
                            </ul>
                        </div>
                        <div className={`absolute right-10 text-white top-8 text-center special-signup_in_button ${user_not_login}`}>
                            <div className=' bg-white bg-opacity-30 flex justify-center  rounded-[20px]'>
                                <Link href='/sign-in'>
                                    <div className='pr-2 pl-3 p-2'>
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
                <div className=" text-white bg-white bg-opacity-30 rounded-[35px] ml-[10%] mr-[10%] specical_profile">
                    <h1 className="text-white text-center text-[20px] mt-5 mb-5 font-bold"><span className="font-bold span_g">G</span> <span className="font-bold span_t">T</span> <span className="font-bold span_s">S</span> User Profile</h1>
                    <div class=" ml-[5%] mr-[5%]">
                        <div className=" flex justify-center mt-8 mb-8">
                            <h2>User Name </h2><h1 className=" font-bold ml-2 mr-2">-</h1><h1>{firstName} {lastName}</h1>
                        </div>
                        <div className=" flex justify-center mt-8 mb-8">
                            <h2>Email </h2><h1 className=" font-bold ml-2 mr-2">-</h1><h1>{Email}</h1>
                        </div>
                        <div className=" flex justify-center mt-8 mb-8">
                            <h2>Mobile Number </h2><h1 className=" font-bold ml-2 mr-2">-</h1><h1>{phone}</h1>
                        </div>
                        <div className=" flex justify-center mt-8 mb-8">
                            <h2>Gender </h2><h1 className=" font-bold ml-2 mr-2">-</h1><h1>{Gender}</h1>
                        </div>
                        <div className=" flex justify-center mt-8 mb-8">
                            <h2>NIC Number </h2><h1 className=" font-bold ml-2 mr-2">-</h1><h1>{Gender}</h1>
                        </div>
                    </div>
                    <div className=" flex justify-center ">
                        <h1 className=" font-bold text-white bg-blue-700 p-2 pl-5 pr-5 rounded-[15px] ml-auto mt-5 mb-5  mr-auto">Edit Profile</h1>
                        <h1 className=" cursor-pointer font-bold text-white bg-blue-700 p-2 pl-5 pr-5 rounded-[15px] ml-auto mt-5 mb-5  mr-auto" onClick={handle_logout}>Logout</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}