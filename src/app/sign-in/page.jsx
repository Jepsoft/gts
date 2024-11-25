'use client'
import Image from "next/image";
import Logo from "../icons/logo.svg";
import Link from "next/link";
import email_icon from "./email.svg";
import password_icon from "./password.svg";
import google from "./google.svg";
import { useState } from "react";
import BG from "../icons/background.svg";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
export default function Sign_in() {
    const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState('password');

    const togglePasswordVisibility = () => {
        if(showPassword=='password'){
            setShowPassword('text');
        }else{
            setShowPassword('password')
        }
    };
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
            window.location.href = './';
        } catch (error) {
            enqueueSnackbar("invalid username or password", { variant: 'error' })
        }
    };
    return (
        <div>
            <div className={`fixed left-0 right-0 top-0 bottom-0 -z-50 `}>
                <Image src={BG} className=' object-cover w-full h-full opacity-15' />
            </div>
            <div className=" min-h-svh flex flex-col">
                <nav className="p-4  md:p-10 text-white">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                        <div></div>
                        <Link href='./'>
                            <Image src={Logo} alt="gts logo" className="absolute h-40 w-52 left-3 top-[-14px] sm:left-1" />
                        </Link>
                        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown"></div>
                        </div>
                        <div className=" absolute left-0 right-0 top-10 flex justify-center">
                            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                                <h1 className="font-bold md:text-2xl lg:text-2xl sm:text-xl"><span className="span_g">G</span>lobal <span className="span_t">T</span>alent <span className="span_s">S</span>olutions</h1>
                            </div>
                        </div>

                    </div>
                </nav>
                <br />
                <div className="flex-grow flex flex-col justify-center items-center mt-28 lg:mt-0 ">
                    <div className="w-[80%] md:w-[50%] lg:w-[30%] flex items-center justify-center ">
                        <div className="w-full bg-white bg-opacity-25 p-5 rounded-[35px] mb-10">
                            <h1 className="text-center text-3xl font-bold text-white mb-10 mt-10">Sign In Now</h1>
                            <form onSubmit={handleSubmit} className="w-full">
                                <div className="ml-3 mr-3">
                                    <div className="relative mb-4">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                        />
                                        <Image
                                            src={email_icon}
                                            alt="Email icon"
                                            className="absolute right-4 top-3 h-6 w-6"
                                        />
                                    </div>
                                    <br />
                                    <div className="relative mb-4">
                                        <input
                                            type={`${showPassword}`}
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"
                                        />
                                        <Image
                                            src={password_icon}
                                            alt="Password icon"
                                            className="absolute right-4 top-3 h-6 w-6"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between ml-[2%]">
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                id="show-password"
                                                onClick={togglePasswordVisibility}
                                                className="cursor-pointer"
                                            />
                                            <label
                                                htmlFor="show-password"
                                                className="cursor-pointer text-white text-sm">
                                                Show Password
                                            </label>
                                        </div>
                                        <div>
                                            <Link
                                                href="/forgot-password"
                                                className="cursor-pointer text-white text-sm">
                                                Forgot Password?
                                            </Link>
                                        </div>
                                    </div>
                                    <h1 className="text-center text-white font-bold mt-6">OR</h1>
                                    <div className="flex justify-center">
                                        <div className="cursor-pointer flex justify-center bg-white bg-opacity-30 rounded-[60px] p-1 mt-4 mb-4">
                                            <Image src={google} className="ml-2 mt-2  h-6" alt="Google icon" />
                                            <h1 className="text-white ml-3 mr-3 mt-2 mb-2">Continue With Google</h1>
                                        </div>
                                    </div>
                                    <Link href="./sign-up">
                                        <h1 className="cursor-pointer text-center mt-4 mb-2 text-white">Don't Have an Account? <span className="font-bold">Sign Up</span></h1>
                                    </Link>
                                    <button type="submit" className="w-full bg-blue-600 font-bold text-white text-lg py-2 rounded-[60px] cursor-pointer mt-4 mb-3">
                                        Sign In
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}