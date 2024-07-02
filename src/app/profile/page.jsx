'use client'
import Image from "next/image";
import Logo from "../icons/logo.svg";
import Link from "next/link";
import User from "../icons/user.svg";
import { useEffect } from "react";
export default function Profile() {
    const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const check_login = () => {
        const token = localStorage.getItem("gts_token");
        const user_login_done = token ? "visible" : "hidden";
        const user_not_login = token ? "hidden" : "visible";
        return { user_login_done, user_not_login };
    }
    const { user_login_done, user_not_login } = check_login();
    useEffect(() => {
        check_login();
    }, []);
    return (
        <div>
            <div className="min-h-[100vh] flex flex-col">
                <nav className="p-4  md:p-10">
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
                                <h2>User Name </h2><h1 className=" font-bold ml-2 mr-2">-</h1><h1> Kavindu Ravishan</h1>
                            </div>
                            <div className=" flex justify-center mt-8 mb-8">
                                <h2>Email </h2><h1 className=" font-bold ml-2 mr-2">-</h1><h1> Kavindu Ravishan</h1>
                            </div>
                            <div className=" flex justify-center mt-8 mb-8">
                                <h2>Mobile Number </h2><h1 className=" font-bold ml-2 mr-2">-</h1><h1> Kavindu Ravishan</h1>
                            </div>
                            <div className=" flex justify-center mt-8 mb-8">
                                <h2>Password </h2><h1 className=" font-bold ml-2 mr-2">-</h1><h1> Kavindu Ravishan</h1>
                            </div>
                            <div className=" flex justify-center mt-8 mb-8">
                                <h2>Gender </h2><h1 className=" font-bold ml-2 mr-2">-</h1><h1> Kavindu Ravishan</h1>
                            </div>
                            <div className=" flex justify-center mt-8 mb-8">
                                <h2>NIC Number </h2><h1 className=" font-bold ml-2 mr-2">-</h1><h1> Kavindu Ravishan</h1>
                            </div>
                        </div>
                        <div className=" flex justify-center ">
                            <h1 className=" font-bold text-white bg-blue-700 p-2 pl-5 pr-5 rounded-[15px] ml-auto mt-5 mb-5  mr-auto">Edit Profile</h1>
                            <h1 className=" font-bold text-white bg-blue-700 p-2 pl-5 pr-5 rounded-[15px] ml-auto mt-5 mb-5  mr-auto">Logout</h1>
                        </div>
                </div>
            </div>
        </div>
    )
}