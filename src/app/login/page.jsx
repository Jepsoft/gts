import Image from "next/image";
import Logo from "../icons/logo.svg";
import Link from "next/link";
import Search from "../icons/search.svg";
import red_verify from "../icons/red_verify.svg";
import green_verify from "../icons/green_verify.svg";
export default function login() {
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
                            <Link href="/login">
                                <span className="bg-[#3E68FD] p-3 rounded-3xl ml-1 mt-1 mb-1 mr-2 pr-5 sm:p-2 sm:pl-3 sm:mr-1 text-white">Login</span>
                            </Link>
                        </span>
                    </div>
                </nav>
                <div className="flex-grow flex flex-col justify-center items-center">
                    <div className=" w-5/12 bg-white bg-opacity-20 p-5 rounded-[25px]">
                    <h1 className=" text-center text-[30px] font-bold text-white">Sign Up Now</h1>
                        <div className="flex justify-center">
                            <input type="text" placeholder="First Name" className="ml-3 mr-3 p-2  rounded-[18px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white" />
                            <input type="text" placeholder="Last Name" className="mr-3 ml-3 p-2 rounded-[18px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white" />
                        </div>
                        <div className="flex justify-center">
                            <div className="flex justify-end w-full">
                            <input type="text" placeholder="Email" className="ml-3 mr-3 p-2  rounded-[18px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white" />
                            <Image src={red_verify} alt="Verify" className=" cursor-pointer absolute h-10 mt-4 -ml-20" />
                            </div>
                            <div className="flex justify-end w-full">
                            <input type="text" placeholder="Phone" className="ml-3 mr-3 p-2  rounded-[18px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white" />
                            <Image src={green_verify} alt="Verify" className=" cursor-pointer absolute h-10 mt-4 -ml-20" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <input type="text" placeholder="Password" className="ml-3 mr-3 p-2  rounded-[18px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white" />
                            <input type="text" placeholder="confirm Password" className="mr-3 ml-3 p-2 rounded-[18px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white" />
                        </div>
                        <div className="flex justify-center">
                            <input type="text" placeholder="Gender" className="ml-3 mr-3 p-2  rounded-[18px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white" />
                            <input type="text" placeholder="NIC" className="mr-3 ml-3 p-2 rounded-[18px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white" />
                        </div>
                        <h2 className="m-3 text-center text-white cursor-pointer bg-white bg-opacity-30 p-2 rounded-[15px]">Login</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}