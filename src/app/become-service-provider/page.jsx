'use client'
import Image from "next/image";
import Logo from "../icons/logo.svg";
import Link from "next/link";
import Search from "../icons/search.svg";
import red_verify from "../icons/red_verify.svg";
import green_verify from "../icons/green_verify.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
export default function usebecome_service_provider() {
    const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const [vefify_update, setVerify_update] = useState(red_verify);
    const [status, setstatus] = useState();
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
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        console.log(category);
    };

    const categories = ['Insurance', 'Post A Job', 'Event Planning', 'Counseling'];

    const handle_verify = async () => {
        if (formData.phone) {
            const response = await axios.post(`${apiUrl}/verify_phone`, {
                for: 'send',
                phone: formData.phone,
            });
            if (response.data.result) {
                const code = response.data.result;
                localStorage.setItem("gtsvch", code);
            }
            blur_contrall();
        } else {
            const response = " Enter Your Phone Number";
            enqueueSnackbar(response, { variant: 'info' });
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
            enqueueSnackbar("Passwords do not match", { variant: 'error' });
            return;
        }

        if (formData.password.length < 8) {
            enqueueSnackbar("Password must be 8 characters", { variant: 'error' });
            return;
        }

        try {
            if (status == true) {
                const response = await axios.post(`${apiUrl}/signup`, {
                    First_Name: formData.firstName,
                    Last_Name: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    status: status,
                    password: formData.password,
                    password_confirmation: formData.confirmPassword,
                    Gender: formData.gender,
                    NIC_Number: formData.nic,
                });
                enqueueSnackbar("Registration Successfully", { variant: 'success' });
                setTimeout(() => {
                    window.location.href = './';
                }, 2000);
            } else {
                enqueueSnackbar("Verify Phone", { variant: 'info' });
            }
        } catch (error) {
            enqueueSnackbar("Registration Failed", { variant: 'error' });
        }
    };
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
    const [code, setCode] = useState('');
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
                setstatus(true)
                setVerify_update(green_verify);
                localStorage.removeItem('gtsvch');
            } else {
                enqueueSnackbar("Verification Failed", { variant: 'error' });
            }
        } catch (error) {
            console.error('Verification failed:', error);
        }
    };
    return (
        <div >
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
            <div className={`min-h-[100vh] flex flex-col ${blurscreen}`} >
                <nav className="p-4  md:p-10 text-white">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                        <div></div>
                        <Image src={Logo} alt="gts logo" className="absolute h-40 w-52 left-3 top-[-14px] sm:left-1" />
                        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown"></div>
                        </div>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                            <h1 className="text-center text-[25px]  font-bold text-white">Become A Service Provider</h1>

                        </div>
                        <span className="bg-white bg-opacity-30 rounded-3xl pt-3 pb-3 absolute right-10 md:right-10 lg:right-10 top-10 sm:pt-2 sm:pb-2 sm:right-2 sm:top-9">
                            <Link href="/sign-in">
                                <span className="bg-[#3E68FD] p-3 rounded-3xl ml-1 mt-1 mb-1 mr-2 pr-5 sm:p-2 sm:pl-3 sm:mr-1 text-white">Sign In</span>
                            </Link>
                        </span>
                    </div>
                </nav>
                <div class="flex-grow flex flex-col  justify-center items-center">
                    <div className="w-[60%]">
                <p className="text-white ml-4 text-left">Category</p>
                    </div>
                    <div className="flex flex-wrap w-[60%]  justify-center gap-14 m-5">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className={`w-36 h-20 border-gray-300 rounded-lg flex justify-center items-center cursor-pointer ${selectedCategory === category ? 'bg-blue-700' : 'bg-white bg-opacity-30'
                                    }`}
                                onClick={() => handleCategoryClick(category)}
                            >
                                <p className={`text-${selectedCategory === category ? 'white' : 'white'}`}>{category}</p>
                            </div>
                        ))}
                    </div>
                    <h1 className="text-center text-[25px]  font-bold text-white">Insurance Sales Job</h1>
                    <form onSubmit={handleSubmit} className="w-[60%]">
                        <p className="text-white ml-4">Details</p>
                        <div className="flex flex-col sm:flex-row justify-center">
                            <div className="flex justify-end w-full">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="ml-3 mr-3 p-2 rounded-[18px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white"
                                />
                            </div>
                            <div className="flex justify-end w-full">
                                <input
                                    type="text"
                                    placeholder="Address"
                                    name="Address"
                                    value={formData.Address}
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
                                <Image src={vefify_update} unoptimized width={88} height={100} alt="Verify" onClick={() => {
                                    handle_verify();
                                }} className="cursor-pointer absolute h-10 mt-4" />
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
            <h1 className=" text-white text-center mb-5 ">©2024 <span className=" font-bold text-blue-700">Jepsoft</span>. All Rights Reserved.</h1>
        </div>
    )
}