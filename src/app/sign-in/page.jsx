'use client'
import Image from "next/image";
import Logo from "../icons/logo.svg";
import Link from "next/link";
import Search from "../icons/search.svg";
import email_icon from "./email.svg";
import password_icon from "./password.svg"
import google from "./google.svg"
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
            const response = await axios.post(`${apiUrl}/login`, {
                email,
                password
            });
            const token = response.data.token;
            localStorage.setItem("gts_token", token);
            enqueueSnackbar(response?.data?.message, { variant: 'success' })
            setTimeout(() => {
                window.location.href = './';
            }, 2000);
        } catch (error) {
            enqueueSnackbar(error?.response?.data?.message, { variant: 'error' })
        }
    };
    return (
        <div>
            <div className="min-h-[100vh] flex flex-col">
                <nav className="p-4  md:p-10">
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
                <div className="flex flex-col md:flex-row mt-20 justify-center">
                    <div className="hidden md:flex md:w-1/2 h-[80vh] items-center justify-center mr-10">
                        <div className="max-w-[300px] text-center text-[20px] text-white ml-5 mr-5">
                            <h1>Welcome to Global Talent Solutions sign in page. Log in to access your <span className="font-bold span_g">G</span> <span className="font-bold span_t">T</span> <span className="font-bold span_s">S</span> account and explore our exclusive features and services. Not a member yet? <span className="font-bold">Sign Up</span> to join our company and start enjoying the benefits today.</h1>
                        </div>
                    </div>
                    <div className="md:w-1/2 h-[80vh] flex items-center justify-center md:ml-10 sm:ml-[5%] sm:mr-[5%] ml-3 mr-3">
                        <div className="w-full md:w-4/6 bg-white bg-opacity-20 p-5 rounded-lg">
                            <h1 className="text-center text-3xl font-bold text-white mb-10 mt-10">Sign In Now</h1>
                            <form onSubmit={handleSubmit} className="w-full">
                                <div className="relative mb-4">
                                    <input
                                        type="email"
                                        placeholder="Email"
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
                                        placeholder="Password"
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
                                <h1 className="cursor-pointer text-white text-sm text-right">Forgot Password?</h1>
                                <h1 className="text-center text-white font-bold mt-6">OR</h1>
                                <div className="flex justify-center">
                                    <div className="cursor-pointer flex justify-center bg-white bg-opacity-30 rounded-lg mt-4 mb-4">
                                        <Image src={google} className="ml-2 mt-2  h-6" alt="Google icon" />
                                        <h1 className="text-white ml-3 mr-3 mt-2 mb-2">Continue With Google</h1>
                                    </div>
                                </div>
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
            <h1 className=" text-white text-center mb-5 ">©2024 <span className=" font-bold text-blue-700">Jepsoft</span>. All Rights Reserved.</h1>
        </div>
    )
}