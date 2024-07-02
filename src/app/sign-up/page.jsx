'use client'
import Image from "next/image";
import Logo from "../icons/logo.svg";
import Link from "next/link";
import Search from "../icons/search.svg";
import red_verify from "../icons/red_verify.svg";
import green_verify from "../icons/green_verify.svg";
import { useState } from "react";
import axios from "axios";
export default function Sign_up() {
    const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        gender: '',
        nic: '',
    });
    const handle_verify = async (e) => {
        if (formData.phone) {
            const response = await axios.post(`${apiUrl}/verify_phone`, {
                phone: formData.phone,
            });
        }else{
            const response=" Enter Your Phone Number";
        }
        //add success or fail message
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form data before sending
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post(`${apiUrl}/signup`, {
                First_Name: formData.firstName,
                Last_Name: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                password: formData.password,
                password_confirmation: formData.confirmPassword,
                Gender: formData.gender,
                NIC_Number: formData.nic,
            });

            console.log('Success:', response.data);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
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
                            <Link href="/sign-in">
                                <span className="bg-[#3E68FD] p-3 rounded-3xl ml-1 mt-1 mb-1 mr-2 pr-5 sm:p-2 sm:pl-3 sm:mr-1 text-white">Sign In</span>
                            </Link>
                        </span>
                    </div>
                </nav>
                <div className="flex-grow flex flex-col justify-center items-center mt-28">
                    <div className="w-11/12 max-w-[800px] bg-white bg-opacity-20 p-5 rounded-[25px]">
                        <h1 className="text-center text-[30px] font-bold text-white">Sign Up Now</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col sm:flex-row justify-center">
                                <div className="flex justify-end w-full">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="ml-3 mr-3 p-2 rounded-[18px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white"
                                    />
                                </div>
                                <div className="flex justify-end w-full">
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="mr-3 ml-3 p-2 rounded-[18px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center">
                                <div className="flex justify-end w-full">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="ml-3 mr-3 p-2 rounded-[18px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white"
                                    />
                                </div>
                                <div className="flex justify-end w-full">
                                    <input
                                        type="number"
                                        placeholder="Phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="ml-3 mr-3 p-2 rounded-[18px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white"
                                    />
                                    <Image src={green_verify} alt="Verify" onClick={handle_verify} className="cursor-pointer absolute h-10 mt-4" />
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center">
                                <div className="flex justify-end w-full">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="ml-3 mr-3 p-2 rounded-[18px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white"
                                    />
                                </div>
                                <div className="flex justify-end w-full">
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="mr-3 ml-3 p-2 rounded-[18px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center">
                                <div className="flex justify-end w-full">
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className="ml-3 mr-3 p-2 rounded-[18px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white"
                                    >
                                        <option value="" disabled selected hidden>
                                            Gender
                                        </option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                        <option value="prefer_not_to_say">Prefer not to say</option>
                                    </select>
                                </div>
                                <div className="flex justify-end w-full">
                                    <input
                                        type="text"
                                        placeholder="NIC"
                                        name="nic"
                                        value={formData.nic}
                                        onChange={handleChange}
                                        className="mr-3 ml-3 p-2 rounded-[18px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white"
                                    />
                                </div>
                            </div>
                            <h2
                                className="m-3 text-center text-white cursor-pointer bg-white bg-opacity-30 p-2 rounded-[15px]"
                                onClick={handleSubmit}
                            >
                                Sign Up
                            </h2>
                        </form>
                    </div>
                </div>
            </div>
            <h1 className=" text-white text-center mb-5 ">©2024 <span className=" font-bold text-blue-700">Jepsoft</span>. All Rights Reserved.</h1>
        </div>
    )
}