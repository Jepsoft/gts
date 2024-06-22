import Logo from "../icons/logo.svg";
import Image from "next/image";
import Link from "next/link";
export default function login() {

  return (
    <div className=" ">
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
                  <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
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
                <span className="bg-[#3E68FD] p-3 rounded-3xl ml-1 mt-1 mb-1 mr-2 pr-5 sm:p-2 sm:pl-3 sm:mr-1 text-white">Sign in</span>
              </Link>
              <Link href="/register">
                <span className="text-white pr-3 sm:pr-2 ">Sign up</span>
              </Link>
            </span>
          </div>
        </nav>
        <div className="flex items-center justify-center mt-10">
          <div className="mt-10 w-full max-w-lg ml-[5%] mr-[5%]">
            <div className="flex flex-wrap -mx-2">
              <input type="text" placeholder="First Name" className="rounded-[12px] p-2 m-2 text-white bg-[#ffffff42] flex-1" />
              <input type="text" placeholder="Last Name" className="rounded-[12px] p-2 m-2 text-white bg-[#ffffff42] flex-1" />
            </div>
            <div className="flex flex-wrap -mx-2">
              <input type="text" placeholder="Your Email" className="rounded-[12px] p-2 m-2 text-white bg-[#ffffff42] flex-1" />
              <input type="text" placeholder="Your Mobile" className="rounded-[12px] p-2 m-2 text-white bg-[#ffffff42] flex-1" />
            </div>
            <div className="flex flex-wrap -mx-2">
              <input type="text" placeholder="Password" className="rounded-[12px] p-2 m-2 text-white bg-[#ffffff42] flex-1" />
              <input type="text" placeholder="Confirm Password" className="rounded-[12px] p-2 m-2 text-white bg-[#ffffff42] flex-1" />
            </div>
            <div className="flex flex-wrap -mx-2">
              <input type="text" placeholder="Country" className="rounded-[12px] p-2 m-2 text-white bg-[#ffffff42] flex-1" />
              <input type="text" placeholder="Drop Down" className="rounded-[12px] p-2 m-2 text-white bg-[#ffffff42] flex-1" />
            </div>
            <div className="flex flex-wrap -mx-2">
              <input type="text" placeholder="Gender" className="rounded-[12px] p-2 m-2 text-white bg-[#ffffff42] flex-1" />
              <input type="text" placeholder="NIC Number" className="rounded-[12px] p-2 m-2 text-white bg-[#ffffff42] flex-1" />
            </div>
            <div className="flex flex-wrap -mx-2">
              <input type="text" placeholder="Education Level" className="rounded-[12px] p-2 m-2 text-white bg-[#ffffff42] flex-1" />
              <input type="text" placeholder="Education Level" className="rounded-[12px] p-2 m-2 text-white bg-[#ffffff42] flex-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}