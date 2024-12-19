import Image from "next/image";
import Link from "next/link";
import Logo from "../icons/logo.svg";
import BookingImg from "./need-analyze/image.png";
import NeedAimg from "./need-analyze/image copy 2.png";
import Reportimg from "./need-analyze/image copy.png";

export default function Admin_panal() {
    return (
        <div className=" min-h-screen">
            <nav className="p-4 md:p-10 text-white">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                    <Image
                        src={Logo}
                        alt="GTS Logo"
                        className="absolute h-40 w-52 left-3 top-[-14px] sm:left-1"
                    />
                     <h1 className="text-center hidden md:visible mt-4 text-xl sm:text-2xl lg:text-3xl font-bold text-white absolute left-1/2 transform -translate-x-1/2 top-6">
                        Welcome to Admin Panel
                    </h1>
                    <span className="bg-opacity-30 rounded-3xl pt-3 pb-3 absolute right-0 md:right-10 lg:right-10 top-8 sm:pt-2 sm:pb-2 sm:right-2 sm:top-9">
                        <div >
                        <span >
                            Hi Admin
                        </span>
                        </div>
                    </span>
                </div>
            </nav>
            <div className="bg-gray-700 rounded-2xl mx-4 md:mx-10 p-6 md:p-10 mt-16 shadow-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {[BookingImg, NeedAimg, Reportimg].map((imgSrc, idx) => (
                        <div
                            key={idx}
                            className="bg-white bg-opacity-20 rounded-2xl p-4 flex flex-col items-center shadow-lg"
                        >
                            <h1 className="h-3"></h1>
                                <h1 className=" absolute mt-[-25px] ml-[160px] flex items-center justify-center bg-red-500 rounded-full w-7 h-7 p-2 text-center text-white font-bold text-sm">20</h1>
                            <div className="bg-yellow-500 rounded-full p-6 border-4 border-white">
                                <Image
                                    src={imgSrc}
                                    unoptimized
                                    alt="admin_icons"
                                    className="h-16 w-16 "
                                />
                            </div>
                            <h3 className="text-center text-white font-bold text-lg sm:text-xl mt-4">
                                Maneth
                            </h3>
                        </div>
                    ))}
                </div>
                <div className="mt-10 p-6 bg_color rounded-2xl border-4 border-white shadow-md">
                    <h2 className="text-white text-center text-lg sm:text-xl font-bold mb-4">
                        December
                    </h2>
                    <div className="grid grid-cols-5 sm:grid-cols-7 gap-4">
                        {Array.from({ length: 31 }, (_, i) => (
                            <div
                                key={i}
                                className="text-black bg-[#28d131] w-12 h-12 flex items-center justify-center text-sm sm:text-base rounded-full border-2 border-white"
                            >
                                {i + 1}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
