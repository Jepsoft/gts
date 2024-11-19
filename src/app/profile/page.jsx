'use client';

import Image from "next/image";
import BG from "../icons/background.svg";
import Logo from "../icons/logo.svg";
import Link from "next/link";
import User from "../icons/user.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

export default function Profile() {
    const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const [user_login_done, set_login_done] = useState('visible');
    const [user_not_login, set_not_login_done] = useState('blur');
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [NIC, setNIC] = useState("");
    const [Email, setEmail] = useState("");
    const [Gender, setGender] = useState("");
    const [pageLoaded, setPageLoaded] = useState(false);
    const [loaderStatus, setLoaderStatus] = useState('visible');
    const [background, setBackgroundStatus] = useState('blur');
    useEffect(() => {
        try {
            if (typeof window !== 'undefined') {
                setFirstName(localStorage.getItem("firstName"));
                setLastName(localStorage.getItem("lastName"));
                setPhone(localStorage.getItem("phone"));
                setNIC(localStorage.getItem("NIC"));
                setEmail(localStorage.getItem("Email"));
                setGender(localStorage.getItem("Gender"));
                set_login_done("visible");
                set_not_login_done("hidden");
            }
        } catch (error) {
        }
    }, []);
    const handle_logout = () => {
        const isloged_In = localStorage.getItem("gts_token");
        if (isloged_In) {
            enqueueSnackbar("User Logout...", { variant: 'success' });
            localStorage.removeItem('gts_token');
            localStorage.removeItem('phone');
            localStorage.removeItem('firstName');
            localStorage.removeItem('lastName');
            localStorage.removeItem('NIC');
            localStorage.removeItem('Email');
            localStorage.removeItem('Gender');
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
            <div className={`fixed left-0 right-0 top-0 bottom-0 -z-50 `}>
                <Image src={BG} alt="bg" className=' object-cover w-full h-full opacity-15' />
            </div>
            <div className="min-h-[100vh] flex flex-col">
                <nav className="p-4  md:p-10 text-white">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto h-full">
                        <div></div>
                        <Link href='./' className=" z-40">
                            <Image src={Logo} data-aos="fade-up" alt="gts logo" className=" cursor-pointer special_logo absolute h-40 w-52 left-3 top-[-14px] sm:left-1" />
                        </Link>
                        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown"></div>
                        </div>
                        <div className=" absolute left-0 right-0 md:block hidden top-[17px]" id="navbar-user">
                            <ul className="flex  justify-center p-4 mt-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
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
                                <Image src={User} alt="user" className=' bg-white h-[40px] w-[40px] rounded-full p-1.5' />
                            </Link>
                        </div>
                    </div>
                </nav>
                <div className="absolute md:top-20 top-0  left-0 right-0 bottom-0 flex items-center justify-center ">
                    <div className=" flex justify-center items-center  ">
                        <div className=" text-white bg-white bg-opacity-30  max-w-[700px] min-w-[300px] lg:min-w-[700px] md:min-w-[500px]  rounded-[35px]  ml-[10%] mr-[10%] specical_profile">
                            <div className="ml-[5%] mr-[5%] md:ml-[15%] md:mr-[15%] md:mt-[10%] md:mb-[10%]">
                                <div className="flex justify-center mt-8 mb-8">
                                    <h2 className="text-left w-1/2">User Name</h2>
                                    <h1 className="font-bold ml-2 mr-2">-</h1>
                                    <h1 className="text-right w-1/2">{firstName} {lastName}</h1>
                                </div>
                                <div className="flex justify-center mt-8 mb-8">
                                    <h2 className="text-left w-1/2">Email</h2>
                                    <h1 className="font-bold ml-2 mr-2">-</h1>
                                    <h1 className="text-right w-1/2 ">{Email}</h1>
                                </div>
                                <div className="flex justify-center mt-8 mb-8">
                                    <h2 className="text-left w-1/2">Mobile Number</h2>
                                    <h1 className="font-bold ml-2 mr-2">-</h1>
                                    <h1 className="text-right w-1/2">{phone}</h1>
                                </div>
                                <div className="flex justify-center mt-8 mb-8">
                                    <h2 className="text-left w-1/2">Gender</h2>
                                    <h1 className="font-bold ml-2 mr-2">-</h1>
                                    <h1 className="text-right w-1/2">{Gender}</h1>
                                </div>
                                <div className="flex justify-center mt-8 mb-8">
                                    <h2 className="text-left w-1/2">NIC Number</h2>
                                    <h1 className="font-bold ml-2 mr-2">-</h1>
                                    <h1 className="text-right w-1/2">{NIC}</h1>
                                </div>
                            </div>
                            <div className=" flex justify-center ">
                                <Link href={'/edit-profile'} className=" text-white bg-blue-700 p-2 pl-5 pr-5 rounded-[60px] ml-auto mt-2 mb-5  mr-auto">Edit Profile</Link>
                                <h1 className=" cursor-pointer text-white bg-blue-700 p-2 pl-5 pr-5 rounded-[60px] ml-auto mt-2 mb-5  mr-auto" onClick={handle_logout}>Logout</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}