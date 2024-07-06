'use client'
import Image from "next/image";
import Logo from "../icons/logo.svg";
import Link from "next/link";
import email_icon from "./email.svg";
import password_icon from "./password.svg"
import { useState } from "react";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
export default function Sign_in() {
    const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${apiUrl}/forgot-password`, {
                email,
                password,
            });
            const token = response.data.token;
            localStorage.setItem("gts_token", token);
            enqueueSnackbar(response?.data?.message, { variant: 'success' })
            window.location.href = './';
        } catch (error) {
            enqueueSnackbar(error?.response?.data?.message, { variant: 'error' })
        }
    };
    return (
        <div>
            <div className="flex flex-col">
                <nav className="p-4  md:p-10 text-white">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                        <div></div>
                        <Image src={Logo} alt="gts logo" className="absolute h-40 w-52 left-3 top-[-14px] sm:left-1" />
                        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown"></div>
                        </div>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                            <ul className="flex flex-col font-medium p-4 md:p-0 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                                <li>
                                    <Link href="./" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <span className="bg-white bg-opacity-30 rounded-3xl pt-3 pb-3 absolute right-10 md:right-10 lg:right-10 top-10 sm:pt-2 sm:pb-2 sm:right-2 sm:top-9">
                            <Link href="/sign-up">
                                <span className="bg-[#3E68FD] p-3 rounded-3xl ml-1 mt-1 mb-1 mr-2 pr-5 sm:p-2 sm:pl-3 sm:mr-1 text-white">Sign Up</span>
                            </Link>
                        </span>
                    </div>
                </nav>
                <div class="flex-grow flex flex-col justify-center items-center mt-28 lg:mt-0 md:mt-0">
                    <div className="w-[80%] md:w-[50%] lg:w-[30%] h-[80vh] flex items-center justify-center ">
                        <div className="w-full bg-white bg-opacity-20 p-5 rounded-lg">
                            <h1 className="text-center text-3xl font-bold text-white mb-10 mt-10">Reset Password</h1>
                            <form onSubmit={handleSubmit} className="w-full">
                                <div className="relative mb-4">
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="p-2 rounded-lg w-full bg-[#d9d9d920] text-white"
                                    />
                                    <Image
                                        src={email_icon}
                                        alt="Email icon"
                                        className="absolute right-2 top-2 h-6 w-6"
                                    />
                                </div>
                                <div className="relative mb-4">
                                    <input
                                        type="password"
                                        placeholder="New Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="p-2 rounded-lg w-full bg-[#d9d9d920] text-white"
                                    />
                                    <Image
                                        src={password_icon}
                                        alt="Password icon"
                                        className="absolute right-2 top-2 h-6 w-6"
                                    />
                                </div>
                                <Link href='/forgot-password' className="cursor-pointer text-white text-sm text-right">Forgot Password?</Link>
                                <Link href="./sign-up">
                                    <h1 className="cursor-pointer text-center mt-4 mb-2 text-white">Don't Have an Account? <span className="font-bold">Sign Up</span></h1>
                                </Link>
                                <button type="submit" className="w-full bg-blue-600 font-bold text-white text-lg py-2 rounded-lg cursor-pointer mt-4 mb-3">
                                    Sign In
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className=" text-white text-center mb-5 mt-5 ">©2024 <span className=" font-bold text-blue-700">Jepsoft</span>. All Rights Reserved.</h1>
        </div>
    )
}