'use client'
import Image from "next/image";
import Logo from "../icons/logo.svg";
import Link from "next/link";
import BG from "../icons/background.svg";
import Search from "../icons/search.svg";
import red_verify from "../icons/red_verify.svg";
import green_verify from "../icons/green_verify.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
export default function Sign_up() {
    const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const [vefify_update, setVerify_update] = useState(red_verify);
    const [status, setstatus] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [enableornot, setenabledornot] = useState();
    const [showpass, setshowpass] = useState('password');
    const [isEnabled, setIsEnabled] = useState(true);
    const [thephone, setthephone] = useState(null);

    const togglePasswordVisibility = () => {
        if (showpass == 'password') {
            setshowpass('text');
        } else {
            setshowpass('password')
        }
    }
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
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
    const handle_verify = async () => {
        if (!/^\d{10}$/.test(formData.phone)) {
            enqueueSnackbar("Enter Valid Phone Number", { variant: 'info' });
        } else {
            if (formData.phone && enableornot != 'disabled:cursor-not-allowed') {
                blur_contrall();
                const response = await axios.post(`${apiUrl}/verify_phone`, {
                    for: 'send',
                    phone: formData.phone,
                });
                if (response.data.result) {
                    const code = response.data.result;
                    localStorage.setItem("gtsvch", code);
                }
                setIsEnabled(!isEnabled);
                setTimeout(() => {
                    setenabledornot('')
                }, 60000);
            } else {
                const response = " Enter Your Phone Number";
                enqueueSnackbar(response, { variant: 'info' });
            }
        }

        //add success or fail message
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        const currentValue = e.target.value;
        if (thephone != null) {
            if (thephone != currentValue) {
                setstatus(false);
                setVerify_update(red_verify);
            } else {
                setstatus(true);
                setVerify_update(green_verify);
            }
        }
        console.log(thephone, currentValue);

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isChecked) {
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
                    const token = response.data.token;
                    localStorage.setItem("gts_token", token);
                    setTimeout(() => {
                        window.location.href = './';
                    }, 2000);
                } else {
                    enqueueSnackbar("Verify Phone", { variant: 'info' });
                }
            } catch (error) {
                enqueueSnackbar("Duplicate Email or Password", { variant: 'info' });
                enqueueSnackbar("Registration Failed", { variant: 'error' });
            }
        } else {
            enqueueSnackbar("Please Accept Terms & Conditions", { variant: 'info' });
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
                setthephone(formData.phone)
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
            <div className={`fixed left-0 right-0 top-0 bottom-0 -z-50 `}>
                <Image src={BG} className=' object-cover w-full h-full opacity-15' />
            </div>
            <div className={`${hide_item} z-10 flex justify-center items-center absolute left-0 right-0 top-0 bottom-0 h-full mt-auto mb-auto`}>
                <div tabindex="-1" aria-hidden="true" className=" ">
                    <div class=" relative p-4 w-full max-w-md max-h-full">
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
                                        Didn't Get Code? <a href="#" onClick={handle_verify} className={`${setenabledornot} text-blue-700 hover:underline dark:text-blue-700`}>Resend</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`min-h-svh flex flex-col ${blurscreen} mt-20 md:mt-0`} >
                <nav className="p-4  md:p-10 text-white">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                        <div></div>
                        <Image src={Logo} alt="gts logo" className="absolute h-40 w-52 left-3 top-[-14px] sm:left-1" />
                        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        </div>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                            <h1 className="font-bold md:text-2xl lg:text-2xl sm:text-xl"><span className="span_g">G</span>lobal <span className="span_t">T</span>alent <span className="span_s">S</span>olutions</h1>
                        </div>
                    </div>
                </nav>
                <div class="flex-grow flex flex-col justify-center items-center">
                    <div className="w-11/12 max-w-[800px] bg-white bg-opacity-25 p-5 rounded-[35px]">
                        <h1 className="text-center text-[30px] font-bold text-white mb-5 mt-5">Sign Up Now</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col sm:flex-row justify-center">
                                <div className="flex justify-end w-full">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="ml-3 mr-3 p-3 rounded-[60px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white"
                                    />
                                </div>
                                <div className="flex justify-end w-full">
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="mr-3 ml-3 p-3 rounded-[60px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white"
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
                                        className="ml-3 mr-3 p-3 rounded-[60px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white"
                                    />
                                </div>
                                <div className="flex justify-end w-full">
                                    <input
                                        type="number"
                                        placeholder="Phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="ml-3 mr-3 p-3 rounded-[60px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white"
                                    />
                                    <Image src={vefify_update} unoptimized width={100} height={100} alt="Verify" onClick={() => {
                                        if (isEnabled) {
                                            handle_verify();
                                        } else {
                                            enqueueSnackbar("Already Verified", { variant: 'error' });
                                        }
                                    }} className={`absolute h-[47px] mt-4 ${!isEnabled ? 'pointer-events-none cursor-not-allowed' : 'cursor-pointer'
                                        }`} />
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center">
                                <div className="flex justify-end w-full">
                                    <input
                                        type={`${showpass}`}
                                        placeholder="Password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="ml-3 mr-3 p-3 rounded-[60px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white"
                                    />
                                </div>
                                <div className="flex justify-end w-full">
                                    <input
                                        type={`${showpass}`}
                                        placeholder="Confirm Password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="mr-3 ml-3 p-3 rounded-[60px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end mr-[5%] md:mr-[3%]">
                                <div className="flex items-right space-x-2 ">
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
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center">
                                <div className="flex justify-end w-full">
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className="mr-3 ml-3 p-3 rounded-[60px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white text-opacity-40"
                                    >
                                        <option value="" disabled selected hidden>
                                            Gender
                                        </option>
                                        <option className="text-black" value="male">Male</option>
                                        <option className="text-black" value="female">Female</option>
                                        <option className="text-black" value="other">Other</option>
                                        <option className="text-black" value="prefer_not_to_say">Prefer not to say</option>
                                    </select>
                                </div>
                                <div className="flex justify-end w-full">
                                    <input
                                        type="text"
                                        placeholder="NIC"
                                        name="nic"
                                        value={formData.nic}
                                        onChange={handleChange}
                                        className="mr-3 ml-3 p-3 rounded-[60px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white"
                                    />
                                </div>
                            </div>
                            <br />
                            <div className=" flex justify-center">
                                <input
                                    type="checkbox"
                                    id="vehicle1"
                                    className="mr-2"
                                    name="vehicle1"
                                    value="Bike"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                />
                                <p className=" text-white ">I have read and Accept<Link href="/terms_and_conditions" className=" cursor-pointer" ><span className="text-blue-500 cursor-pointer"> Terms & conditions</span></Link></p>
                            </div>
                            <br />
                            <div className="flex justify-center">
                                <h2
                                    className=" pt-2 pb-2 pl-10 pr-10 m-3 text-center text-white cursor-pointer bg-blue-700  rounded-[60px]"
                                    onClick={handleSubmit}
                                >
                                    Sign Up
                                </h2>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}