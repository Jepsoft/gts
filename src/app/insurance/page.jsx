'use client'
import Link from "next/link";
import BG from "../icons/background.svg";
import Image from "next/image";
import User from "../icons/user.svg";
import { useEffect, useState } from "react";
import Logo from "../icons/logo.svg";
export default function insurance() {
    const [user_login_done, set_login_done] = useState('visible');
    const [user_not_login, set_not_login_done] = useState('blur');
    useEffect(() => {
        try {
            if (typeof window !== 'undefined') {
                set_login_done("visible");
                set_not_login_done("hidden");
            }
        } catch (error) {
        }
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
    };
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
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
    return (
        <div>
            <div className={`fixed left-0 right-0 top-0 bottom-0 -z-50 `}>
                <Image src={BG} className=' object-cover w-full h-full opacity-15' />
            </div>
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
                            <h1 className="font-bold md:text-2xl lg:text-2xl sm:text-xl mt-5">Build Your Perfect Insurance Coverage</h1>
                        </ul>
                    </div>
                    <div className={`absolute right-10 text-white top-8 text-center special-signup_in_button ${user_not_login}`}>
                        <div className=' bg-white bg-opacity-30 flex justify-center  rounded-[20px]'>
                            <Link href='/sign-up'>
                                <div className='pl-3 pr-3 bg-blue-600 rounded-[20px] '>
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
            <div class="flex-grow flex flex-col justify-center items-center">
                <div className="w-11/12 max-w-[800px] p-5 rounded-[30px]">
                    <br />
                    <br />
                    <h1 className="text-white font-bold ml-5">Personal Information</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col sm:flex-row justify-center">
                            <div className="flex justify-end w-full">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    name="fullname"
                                    value={formData.fullname}
                                    onChange={handleChange}
                                    className="ml-3 mr-3 pl-5 pt-2 pb-2 rounded-[30px] h-9 mt-4 mb-4 w-full md:w-full sm:w-1/2 bg-[#d9d9d920] text-white"
                                />
                            </div>
                            <div className="flex justify-end w-full">
                                <input
                                    type="date"
                                    placeholder="Date Of Birth"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    className="mr-3 ml-3 pl-5 pt-2 pb-2 pr-2 rounded-[30px] h-9 mt-4 mb-4 w-[100%] md:w-full bg-[#d9d9d920] text-white"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center">
                            <div className="flex justify-end w-full">
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    className="mr-3 ml-3 pl-5 pt-2 pb-2 pr-2 rounded-[30px] h-9 mt-4 mb-4 w-full bg-[#d9d9d920] text-white text-opacity-40"
                                >
                                    <option value="" disabled selected hidden>
                                        Marital Status
                                    </option>
                                    <option className="text-black" value="male">Single</option>
                                    <option className="text-black" value="female">Married</option>
                                    <option className="text-black" value="other">Divorced</option>
                                    <option className="text-black" value="prefer_not_to_say">Widowed</option>
                                </select>
                            </div>
                            <div className="flex justify-end w-full">
                                <input
                                    type="text"
                                    placeholder="Number of Dependents"
                                    name="nod"
                                    value={formData.nod}
                                    onChange={handleChange}
                                    className="mr-3 ml-3 pl-5 pt-2 pb-2  rounded-[30px] h-9 mt-4 mb-4 w-full bg-[#d9d9d920] text-white"
                                />
                            </div>
                        </div>
                        <br />
                        <h1 className="text-white font-bold  ml-5">Family Medical Expenses Coverage</h1>
                        <div className="flex flex-col sm:flex-row justify-center">
                            <div className=" justify-end w-full">
                                <br />
                                <label className="text-white text-opacity-60 ml-3 mb-2">Do you have existing health insurance coverage ?</label>
                                <div className="flex justify-end w-full">

                                    <select
                                        name="gender"
                                        value={formData.q1}
                                        onChange={handleChange}
                                        className="mr-3 ml-3 pl-5 pt-2 pb-2  rounded-[30px] h-9 mt-4 mb-4 w-full bg-[#d9d9d920] text-white text-opacity-40"
                                    >
                                        <option value="" disabled selected hidden>
                                            Select Here
                                        </option>
                                        <option className="text-black" value="male">Yes</option>
                                        <option className="text-black" value="female">No</option>
                                    </select>
                                </div>
                            </div>
                            <div className=" justify-end w-full">
                                <br />
                                <label className="text-white text-opacity-60 ml-3 mb-2">Any specific medical conditions in the family ?</label>
                                <div className="flex justify-end w-full">

                                    <select
                                        name="gender"
                                        value={formData.q2}
                                        onChange={handleChange}
                                        className="mr-3 ml-3 pl-5 pt-2 pb-2  rounded-[30px] h-9 mt-4 mb-4 w-full bg-[#d9d9d920] text-white text-opacity-40"
                                    >
                                        <option value="" disabled selected hidden>
                                            Select Here
                                        </option>
                                        <option className="text-black" value="male">Yes</option>
                                        <option className="text-black" value="female">No</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center">
                            <div className=" justify-end w-full">
                                <label className="text-white text-opacity-60 ml-3 mb-2">Estimated annual medical expenses ?</label>
                                <div className="flex justify-end w-full">

                                    <input
                                        name="expenses"
                                        placeholder="Type Here"
                                        value={formData.q1}
                                        onChange={handleChange}
                                        className="mr-3 ml-3 pl-5 pt-2 pb-2  rounded-[30px] h-9 mt-4 mb-4 w-full bg-[#d9d9d920] text-white text-opacity-40"
                                    />
                                </div>
                            </div>
                            <div className=" justify-end w-full">
                                <label className="text-white text-opacity-60 ml-3 mb-2">specify medical conditions here ?</label>
                                <div className="flex justify-end w-full">
                                    <input
                                        name="medical_condition"
                                        placeholder="specify Here"
                                        value={formData.q2}
                                        onChange={handleChange}
                                        className="mr-3 ml-3 pl-5 pt-2 pb-2  rounded-[30px] h-9 mt-4 mb-4 w-full bg-[#d9d9d920] text-white text-opacity-40"
                                    />
                                </div>
                            </div>
                        </div>
                        <br />
                        <h1 className="text-white font-bold  ml-5">Children’s Education Savings</h1>
                        <br />
                        <div className="flex flex-col sm:flex-row justify-center">
                            <div className=" justify-end w-full">
                                <label className="text-white text-opacity-60 ml-3 mb-2">Number of children planning for college ?</label>
                                <div className="flex justify-end w-full">

                                    <select
                                        name="gender"
                                        value={formData.q2}
                                        onChange={handleChange}
                                        className="mr-3 ml-3 pl-5 pt-2 pb-2  rounded-[30px] h-9 mt-4 mb-4 w-full bg-[#d9d9d920] text-white text-opacity-40"
                                    >
                                        <option value="" disabled selected hidden>
                                            Select Here
                                        </option>
                                        <option className="text-black" value="0">0</option>
                                        <option className="text-black" value="1">1</option>
                                        <option className="text-black" value="2">2</option>
                                        <option className="text-black" value="3">3</option>
                                        <option className="text-black" value="4">4</option>
                                        <option className="text-black" value="5">5</option>
                                        <option className="text-black" value="6">6</option>
                                        <option className="text-black" value="7">7</option>
                                        <option className="text-black" value="8">8</option>
                                        <option className="text-black" value="9">9</option>
                                    </select>
                                </div>
                            </div>
                            <div className=" justify-end w-full">
                                <label className="text-white text-opacity-60 ml-3 mb-2">Expected annual cost of education per child ?</label>
                                <div className="flex justify-end w-full">
                                    <input
                                        name="edu_cost"
                                        placeholder="Expected annual cost of education per child"
                                        value={formData.q2}
                                        onChange={handleChange}
                                        className="mr-3 ml-3 pl-5 pt-2 pb-2  rounded-[30px] h-9 mt-4 mb-4 w-full bg-[#d9d9d920] text-white text-opacity-40"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center">

                            <div className=" justify-end w-full">
                                <label className="text-white text-opacity-60 ml-3 mb-2">Current savings for education ?</label>
                                <div className="flex justify-end w-full">
                                    <input
                                        name="educationsavings"
                                        placeholder="Current savings for education"
                                        value={formData.q2}
                                        onChange={handleChange}
                                        className="mr-3 ml-3 pl-5 pt-2 pb-2  rounded-[30px] h-9 mt-4 mb-4 w-full bg-[#d9d9d920] text-white text-opacity-40"
                                    />
                                </div>
                            </div>
                            <div className=" justify-end w-full ">
                            </div>
                        </div>
                        <br />
                        <h1 className="text-white font-bold  ml-5">Retirement Planning</h1>
                        <div className="flex flex-col sm:flex-row justify-center">
                            <div className=" justify-end w-full">
                                <br />
                                <label className="text-white text-opacity-60 ml-3 mb-2">Current retirement savings ?</label>
                                <div className="flex justify-end w-full">

                                    <input
                                        name="retirement"
                                        placeholder="retirement savings"
                                        value={formData.q1}
                                        onChange={handleChange}
                                        className="mr-3 ml-3 pl-5 pt-2 pb-2 rounded-[30px] h-9 mt-4 mb-4 w-full bg-[#d9d9d920] text-white text-opacity-40"
                                    />
                                </div>
                            </div>
                            <div className=" justify-end w-full">
                                <br />
                                <label className="text-white text-opacity-60 ml-3 mb-2">Estimated monthly expenses during retirement ?</label>
                                <div className="flex justify-end w-full">

                                    <input
                                        name="mon_expences"
                                        placeholder="Estimated monthly expenses during retirement"
                                        value={formData.q2}
                                        onChange={handleChange}
                                        className="mr-3 ml-3 pl-5 pt-2 pb-2 rounded-[30px] h-9 mt-4 mb-4 w-full bg-[#d9d9d920] text-white text-opacity-40"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center">
                            <div className=" justify-end w-full">
                                <label className="text-white text-opacity-60 ml-3 mb-2">Expected retirement age ?</label>
                                <div className="flex justify-end w-full">

                                    <input
                                        name="retirement_age"
                                        placeholder="Expected retirement age"
                                        value={formData.q1}
                                        onChange={handleChange}
                                        className="mr-3 ml-3 pl-5 pt-2 pb-2 rounded-[30px] h-9 mt-4 mb-4 w-full bg-[#d9d9d920] text-white text-opacity-40"
                                    />
                                </div>
                            </div>
                            <div className=" justify-end w-full">
                            </div>
                        </div>

                        <div className="mb-5"></div>
                    </form>
                </div>
            </div>
            <Link href="https://jepsoft.com" className="mt-5 flex justify-center">
                <h1 className=" text-white text-center mb-5 ">©2024 <span className="">Jepsoft</span>. All Rights Reserved.</h1>
            </Link>
        </div>
    )
}