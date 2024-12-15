import Link from "next/link";
import Image from "next/image";
import Logo from "../../icons/logo.svg";
export default function Aravindha() {
    return (
        <div className="ml-[5%] mr-[5%]">
            <nav className="p-4 md:p-10 text-white">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                    <Image
                        src={Logo}
                        alt="gts logo"
                        className="absolute h-40 w-52 left-3 top-[-14px] sm:left-1"
                    />

                    <div className=" absolute left-0 right-0 top-6 ">
                        <h1 className="text-center text-[25px] hidden lg:block font-bold text-white">Mr. Aravindha Koralage</h1>
                    </div>

                    <span className="bg-opacity-30 rounded-3xl pt-3 pb-3 absolute right-0 md:right-10 lg:right-10 top-8 sm:pt-2 sm:pb-2 sm:right-2 sm:top-9">
                        <Link href="/sign-in">
                            <span className="p-3 rounded-3xl ml-1 mt-1 mb-1 mr-2 pr-5 sm:p-2 sm:pl-3 sm:mr-1 text-white">
                                Hi Admin
                            </span>
                        </Link>
                    </span>
                </div>
            </nav>
            <div className="bg-white h-80 mt-10 w-full rounded-3xl bg-opacity-25">
            </div>
            <div className="w-44 h-44 bg-white rounded-full border-[4px] border-[#FBAC1A] mt-[-100px] ml-20"></div>
            <div className="mt-5 flex justify-between text-white ml-[3%] mr-[3%]">
                <div className="text-left">
                    <h1 className="text-[25px] mb-2 font-bold">Mr. Aravindha Koralage</h1>
                    <p className="text-sm">Managing Director At Global Talent Solutions</p>
                    <p className="text-sm">Branch Manager At HNB Insurance Galle </p>
                </div>
                <div className="text-center">
                    <h1 className="text-white font-bold text-[25px]">15 +</h1>
                    <p className="w-[100px]">Industry
                        Experience</p>
                </div>
                <div className="text-center">
                    <h1 className="text-white font-bold text-[25px]">8 +</h1>
                    <p className="w-[120px]">MDRT Awards
                        (2014-2023)</p>
                </div>
                <div className="text-center">
                    <h1 className="text-white font-bold text-[25px]">4 +</h1>
                    <p className="w-[150px]">Super Gold Awards
                        (2013-2020)</p>
                </div>
                <div className="text-center">
                    <h1 className="text-white font-bold text-[25px]">2 +</h1>
                    <p className="w-[120px]"> Naflia Certificate
                        (2014-2016)</p>
                </div>
                <div className="text-center">
                    <h1 className="text-white font-bold text-[25px]">4 +</h1>
                    <p className="w-[120px]">  Gold Awards
                        (2015-2020)</p>
                </div>
                <div className="text-center">
                    <h1 className="text-white font-bold text-[25px]">2 +</h1>
                    <p className="w-[120px]"> Naflia Certificate
                        (2014-2016)</p>
                </div>
            </div>
            <br /><br />
            <div className="ml-[3%] mt-[3%] mr-[3%]">
                <h1 className="text-white text-[25px] font-bold mb-[3%] ">About</h1>
                <p className="text-md text-white">Your Trusted Partner in Insurance and Financial Security Secure Your Future with Expert Guidance  At Global Talents Solution,we understand the unique insurance needs of every individual. Whether it’s savings protection, hospital benefits, or retirement planning, we’re here to guide you every step of the way. Our expert advisors are available anytime to help you make informed decisions   tailored to your needs.</p>
            </div>
            <br />
        </div>
    )
}