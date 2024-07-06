'use client'
import Image from "next/image";
import Logo from "../icons/logo.svg";
import Link from "next/link";
import User from "../icons/user.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
export default function Edit_profile() {
    const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const token = typeof window != 'undefined' ? localStorage.getItem("gts_token") : null;

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
                    setEmail(response.data.result.Email);
                } catch (error) {
                    console.error("Error fetching profile data:", error);
                    enqueueSnackbar("Failed to fetch profile data", { variant: 'error' });
                }
            };
            get_data();
        }
    }, [token]);

    const handle_upadate = () => {
        const token_unlock = localStorage.getItem("gts_token");
        const update_data = async () => {
            try {
                const response = await axios.post(
                    `${apiUrl}/update_profile`,
                    {
                        First_Name: firstName,
                        Last_Name: lastName,
                        email:Email,
                        Phone: phone,
                        NIC: NIC,
                    },
                    {
                        headers: {
                            'Authorization': `Bearer ${token_unlock}`
                        }
                    }
                );
                enqueueSnackbar(response.data.message, { variant: 'success' })
            } catch (error) {
                enqueueSnackbar("User Data Update Failed", { variant: 'error' });
            }
        };
        update_data();
    }
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
                <div className=" text-black bg-white bg-opacity-30 rounded-[35px] ml-[10%] mr-[10%] specical_profile">
                    <h1 className="text-white text-center text-[20px] mt-5 mb-5 font-bold"><span className="font-bold span_g">G</span> <span className="font-bold span_t">T</span> <span className="font-bold span_s">S</span> User Profile</h1>
                    <div class="ml-[5%] mr-[5%]">
                        <div class="flex justify-center mt-8 mb-8">
                            <h2 className="text-white">First Name</h2>
                            <input type="text" class="ml-2 border-b border-gray-400 outline-none rounded-[10px] p-1" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                        </div>
                        <div class="flex justify-center mt-8 mb-8">
                            <h2 className="text-white">Last Name</h2>
                            <input type="text" class="ml-2 border-b border-gray-400 outline-none rounded-[10px] p-1" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                        </div>
                        <div class="flex justify-center mt-8 mb-8">
                            <h2 className="text-white">Email</h2>
                            <input type="email" class="ml-2 border-b border-gray-400 outline-none rounded-[10px] p-1" onChange={(e) => setEmail(e.target.value)} value={Email} />
                        </div>
                        <div class="flex justify-center mt-8 mb-8">
                            <h2 className="text-white">Mobile Number</h2>
                            <input type="tel" class="ml-2 border-b border-gray-400 outline-none rounded-[10px] p-1" onChange={(e) => setPhone(e.target.value)} value={phone} />
                        </div>
                        <div class="flex justify-center mt-8 mb-8">
                            <h2 className="text-white">NIC Number</h2>
                            <input type="text" class="ml-2 border-b border-gray-400 outline-none rounded-[10px] p-1" onChange={(e) => setNIC(e.target.value)} value={NIC} />
                        </div>
                    </div>
                    <div className=" flex justify-center ">
                        <Link href={'/profile'} className=" font-bold text-white bg-blue-700 p-2 pl-5 pr-5 rounded-[15px] ml-auto mt-5 mb-5  mr-auto">Back</Link>
                        <h1 className=" cursor-pointer font-bold text-white bg-blue-700 p-2 pl-5 pr-5 rounded-[15px] ml-auto mt-5 mb-5  mr-auto" onClick={handle_upadate}>Update</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}