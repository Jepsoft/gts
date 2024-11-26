'use client'
import { useEffect, useState } from 'react';
import Image from "next/image";
import Location from "../icons/location.svg"
import Contact from "../icons/contact.svg"
import BG from "../icons/background.svg";
import loader from "../loader.gif";
import Logo from "../icons/logo.svg";
import RET from "../icons/ret.svg"
import SAV from "../icons/sav.svg"
import GRO from "../icons/gro.svg"
import Helth from "../icons/helth.svg"
import Pro from "../icons/pro.svg"
import INS01 from "../icons/image.png"
import Link from 'next/link';
import User from "../icons/user.svg";

import { enqueueSnackbar } from 'notistack';
import axios from 'axios';

export default function Home() {
  var token;
  const [user_login_done, set_login_done] = useState('visible');
  const [user_not_login, set_not_login_done] = useState('blur');
  const [loaderStatus, setLoaderStatus] = useState('visible');
  const [background, setBackgroundStatus] = useState('blur');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('gts_token');
      set_login_done(token ? "visible" : "hidden");
      set_not_login_done(token ? "hidden" : "visible");
    } else {
      token = null;
    }
  }, []);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [boxcolor, setboxcolor] = useState('');
  const [signincolor, setsignincolor] = useState('');
  const [signuploer, setsignupcolor] = useState('');
  useEffect(() => {
    setsignincolor("bg-white");
    setboxcolor("bg-white text-blue-600");
    setsignupcolor("bg-blue-600 text-white");
  }, []);
  const hadleanimate = () => {
    setsignincolor("bg-blue-600");
    setboxcolor("bg-blue-600");
    setsignupcolor("bg-white text-blue-600");
  };
  const hadleleave = () => {
    setsignincolor("bg-white");
    setboxcolor("bg-white text-blue-600");
    setsignupcolor("bg-blue-600 text-white");
  };

  const hadleanimatep = () => {
    setsignincolor("bg-blue-600 ");
    setboxcolor("bg-white text-blue-600");
    setsignupcolor("bg-blue-600");
  }
  useEffect(() => {
    const handlePageLoad = () => {
      setPageLoaded(true);
      setBackgroundStatus('visible');
      setLoaderStatus('hidden');
    };

    if (document.readyState === 'complete') {
      // If the page is already loaded, run the handler immediately
      handlePageLoad();
    } else {
      // Otherwise, wait for the load event
      window.addEventListener('load', handlePageLoad);
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);
  return (
    <>
      <div className={`all`} >
        <div className={` flex-grow flex flex-col justify-center  items-center h-svh fixed left-0 right-0  top-0 bottom-0 z-20 ${loaderStatus}`}>
          <Image unoptimized src={loader} alt='loader' className='w-20 z-50' />
        </div>
        <div className={`${background}`}>
          <div>
            <div className="flex flex-col">
              <nav data-aos='fade-top' className="p-4  md:p-10 text-white">
                <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                  <div></div>
                  <Link href='cursor-pointer absolute h-40 w-52 left-[-40px] md:left-3  top-[-14px]'>
                    <Image src={Logo} data-aos="fade-up" alt="gts logo" className=" cursor-pointer md:left-3 left-[-35px] sm:ml-[30px]   md:ml-auto top-[-18px] sm:top-[-25px] absolute h-28 w-40 mt-[15px] ml-[12px] sm:w-40 sm:h-40  md:w-52   " />
                  </Link>
                  <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown"></div>
                  </div>
                  <div className=" absolute left-0 right-0 md:block hidden mt-5" id="navbar-user">
                    <ul className="flex  justify-center p-4 mt-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
                      <ul className="flex  justify-center p-4 mt-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
                        <h1 className="font-bold md:text-2xl lg:text-2xl sm:text-xl"><span className="span_g">G</span>lobal <span className="span_t">T</span>alent <span className="span_s">S</span>olutions</h1>
                      </ul>
                    </ul>
                  </div>
                  <div className={`absolute right-10 text-white top-7 sm:top-7 text-center special-signup_in_button ${user_not_login} `}>
                    <div className={`${boxcolor} flex justify-center rounded-[20px]`}>
                      <Link href='/sign-in' onMouseEnter={hadleanimate} onMouseLeave={hadleleave}>
                        <div className='pr-1 pl-2  p-1.5 transition-all rounded-[20px] font-semibold text-[12px] sm:text-[16px]  hover:-pr-5 duration-500 ease-in-out transform  hover:scale-100 hover:shadow-lg'>
                          Signin
                        </div>
                      </Link>
                      <Link href='/sign-up' onMouseEnter={hadleanimatep} onMouseLeave={hadleleave} >
                        <div className={`pl-3 pr-2 p-1.5 ${signuploer} hover:text-white font-semibold text-[12px] sm:text-[16px] rounded-[20px] transition-all duration-500 ease-in-out transform hover:scale-100 hover:shadow-lg`}>
                          Signup
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className={`absolute right-10 text-white top-8 text-center special-signup_in_button ${user_login_done}`}>
                    <Link href='/profile'>
                      <Image alt="img" src={User} className=' bg-white h-[40px] w-[40px] rounded-full p-1.5' />
                    </Link>
                  </div>
                </div>
              </nav>
              <br />
              <div className=' flex justify-center bottom-[20%] absolute left-0 right-0'>
                <div className=' w-[90%]'>
                  <h1 className='  text-[68px] w-[90%] font-bold text-left  ml-14  text-[#FFC107]'>Get your best insurance coverage</h1>
                  <h1 className='text-[48px] w-[90%] font-bold text-left  ml-14  text-[#FFFF]'>With Counseling Industry Experts</h1>
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='bg-black w-[90%] rounded-[40px] z-[-2]'>
                  <Image unoptimized src='https://download.shutterstock.com/gatekeeper/W3siZCI6ICJzaHV0dGVyc3RvY2stdXBsb2FkcyIsICJrIjogInBlbmRpbmdfcGhvdG8vMzY1ODc3MDU1Ny9tZWRpdW0uanBnIiwgImUiOiAxNzMyNjI5NjY3LCAibSI6IDB9LCAiZE5KVmpQdi9EazF3MTZCUzRGeHpaZjJvMG1NIl0=/3658770557_medium.jpg' alt="img" width={10} height={10} className='bg-black opacity-70  bg-opacity-25 w-full h-[80vh] object-cover rounded-[40px]  mx-auto' />
                </div>
              </div>
              <div className='flex justify-between items-center mx-auto w-[85%] mt-[-50px]'>
                <Image src={Helth} alt="img" className=' rounded-full w-[130px]   cursor-pointer' />
                <Image src={Pro} alt="img" className=' rounded-full w-[130px]   cursor-pointer' />
                <Image src={SAV} alt="img" className=' rounded-full w-[130px]   cursor-pointer' />
                <Image src={GRO} alt="img" className=' rounded-full w-[130px]  cursor-pointer' />
                <Image src={RET} alt="img" className=' rounded-full w-[130px]   cursor-pointer' />
              </div>
            </div>
          </div>
          <br /><br />
          <h1 className='text-[35px] text-center font-semibold text-white'>Overview</h1>
          <br /><br />
          <p className=' text-justify text-[12pz] text-white ml-[5%] mr-[5%]'>Your Trusted Partner in Insurance and Financial Security Secure Your Future with Expert Guidance
            At Global Talents Solution,we understand the unique insurance needs of every individual. Whether
            it’s savings protection, hospital benefits, or retirement planning, we’re here to guide you every
            step of the way. Our expert advisors are available anytime to help you make informed decisions
            tailored to your needs.</p>
          <br />
          <footer className="bg-black bg-opacity-50  text-white">
            <div className="container mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
              <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                  <Link href="https://jepsoft.com/" className="relative">
                    <Image src={Logo} className="w-40 mb-[-50px]  md:mt-[-40px] md:mb-[-100px] ml-[-20px]" alt="Logo" />
                  </Link>
                  <div className="ml-2 mt-4 md:mt-16">
                    <div className="flex items-center mb-4">
                      <Image src={Location} alt="location" className="p-1" />
                      <p className=" text-[13px] max-w-[150px] ml-5">No 126, 3/23-B 3RD Floor, YMBA building, Colombo 01</p>
                    </div>
                    <div className="flex items-center">
                      <Image src={Contact} alt="contact" className="p-1" />
                      <p className=" text-[13px] max-w-[150px] ml-5">info@gtsglobaltalentsolutions.com</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 mt-6 md:mt-0">
                  <div>
                    <h2 className="mb-6 text-sm font-semibold">Contact</h2>
                    <ul className=" font-medium">
                      <li className="mb-4">
                        <a href="tel:+947641839118" className="hover:underline">+94 76 183 9118</a>
                      </li>
                      <li>
                        <a href="tel:+947743381537" className="hover:underline">+94 743 381 537</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="mb-6 text-sm font-semibold">Follow us</h2>
                    <ul className=" font-medium">
                      <li className="mb-4">
                        <Link href="https://web.facebook.com/profile.php?id=61558793650349" className="hover:underline">Facebook</Link>
                      </li>
                      <li>
                        <Link href="https://www.instagram.com/jepsoft?igsh=MTd1dHplcHcweTJleA==" className="hover:underline">Instagram</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="mb-6 text-sm font-semibold">Legal</h2>
                    <ul className=" font-medium">
                      <li className="mb-4">
                        <Link href="#" className="hover:underline">Privacy Policy</Link>
                      </li>
                      <li >
                        <Link href="#" className="hover:underline">Terms & Conditions</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="sm:flex sm:items-center sm:justify-between mt-5 md:ml-2 ">
                <Link href="https://gtsglobaltalentsolutions.com/" className="text-sm sm:text-center no-underline">
                  <h1 className=" text-white text-center mb-5 md:ml-auto ml-[-40px]">©2024 <span className="">Global Talent Solutions</span>. All Rights Reserved.</h1>
                </Link>
                <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
                  <Link href="https://web.facebook.com/profile.php?id=61558793650349" className=" no-underline text-white">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                      <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                    </svg>
                    <span className="sr-only">Facebook page</span>
                  </Link>
                  <Link href="https://www.instagram.com/jepsoft?igsh=MTd1dHplcHcweTJleA==" className=" no-underline text-white">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" />
                    </svg>
                    <span className="sr-only">Instagram page</span>
                  </Link>
                  <Link href="https://wa.link/6rkzec" className=" text-white no-underline">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clipRule="evenodd" />
                      <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
                    </svg>
                    <span className="sr-only">WhatsApp page</span>
                  </Link>
                  <Link href="https://www.linkedin.com/company/jepsoft/about/" className="text-white no-underline">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
                      <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                    </svg>
                    <span className="sr-only">LinkedIn page</span>
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}