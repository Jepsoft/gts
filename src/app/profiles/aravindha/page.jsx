import Link from "next/link";
import Image from "next/image";
import Logo from "../../icons/logo.svg";

export default function Aravindha() {
    return (
        <div className="w-full">

            {/* Background Section */}
            <div className="bg-white h-auto min-h-[180px] w-[100%] "></div>

            {/* Profile Picture */}
            <div className="flex justify-start  w-full">
                <div className="w-32 h-32 lg:w-44 lg:h-44 bg-white rounded-full border-4 border-[#FBAC1A] -mt-16 ml-10"></div>
            </div>

            {/* Combined Name, Titles, and Statistics */}
            <div className="mt-5 lg:mt-10 flex  flex-col lg:flex-row items-start  justify-between text-white mx-5 lg:space-x-10">
                {/* Name and Titles */}
                <div className="text-center asdjhsd lg:text-left lg:flex-1 flex justify-center w-full md:ml-[-80px]">
                    <div><h1 className="text-lg  sm:text-xl lg:text-3xl font-bold">Mr. Aravindha Koralage</h1><br />
                    <p className="text-sm sm:text-base">Managing Director At Global Talent Solutions</p>
                    <p className="text-sm sm:text-base">Branch Manager At HNB Insurance Galle</p></div>
                    
                </div>

                {/* Statistics */}
                <div className="mt-8 lg:mt-0 grid grid-cols-2 sm:grid-cols-3 lg:flex lg:gap-4 ">
                    {[
                        { value: "15 +", label: "Industry Experience" },
                        { value: "8 +", label: "MDRT Awards (2014-2023)" },
                        { value: "4 +", label: "Super Gold Awards (2013-2020)" },
                        { value: "2 +", label: "Naflia Certificate (2014-2016)" },
                        { value: "4 +", label: "Gold Awards (2015-2020)" },
                        { value: "2 +", label: " Naflia Certificate (2014-2016)" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <h1 className="text-white font-bold text-2xl sm:text-3xl">{stat.value}</h1>
                            <p className="text-sm md:w-[125px]">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* About Section */}
            <div className="mx-5 mt-8 ml-[5%] mr-[5%] flex justify-center">
                <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-4">About</h1>
                <p className="text-sm sm:text-base text-white">
                    Your Trusted Partner in Insurance and Financial Security. Secure Your Future with Expert Guidance.
                    At Global Talents Solution, we understand the unique insurance needs of every individual.
                    Whether it’s savings protection, hospital benefits, or retirement planning, we’re here to guide
                    you every step of the way. Our expert advisors are available anytime to help you make informed
                    decisions tailored to your needs.
                </p>
            </div>
        </div>
    );
}
