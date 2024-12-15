'use client'
import { useEffect, useState } from 'react';
import Image from "next/image";
import Right_Arrow from "../icons/right-arrow-svgrepo-com.svg";
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
import Edu from "../icons/edu.svg"
import Link from 'next/link';
import User from "../icons/user.svg";
import R1 from "../reviews/r1.svg";
import Aravindha from "../director/arvinda.svg";
import { enqueueSnackbar } from 'notistack';
import axios from 'axios';
import { IMAGES_MANIFEST } from 'next/dist/shared/lib/constants';

export default function Home() {
  var token;
  const [user_login_done, set_login_done] = useState('visible');
  const [user_not_login, set_not_login_done] = useState('blur');
  const [loaderStatus, setLoaderStatus] = useState('visible');
  const [background, setBackgroundStatus] = useState('blur');
  const [imganimaton1, setimageanimation1] = useState('');

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
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { title: 'Health', description: 'Health insurance provides financial protection against  medical expenses,ensuring access to quality healthcare without the burden of high costs. It covers a range of services, including doctor visits, hospital stays, medications, and preventive care. By sharing the riskof healthcare expenses among a poolof insured individuals, health insurance offers peace of mind and promoteswell-being, making it an essential component of a secure and healthy life.' },
    { title: 'Protection', description: 'Protection gives you peace of mind by keeping you andyour belongings saf from unexpectedrisks  It covers damages, losses,and liabilities, helping you recover from unexpected events. With tailored solutions it reduces financial stressand ensures stability,  allowing you to focus on what matters most.Protection is key to a secure and confident future.' },
    { title: 'Topic 3', description: 'This is the description for Topic 3.' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % items.length;
        console.log('Active Index:', newIndex); // Log the active index
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]); // Only depend on items.length

  const load_data = () => {

  }
  const showNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    load_data();

  };

  const showPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    load_data();

  };
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
              <div className="flex justify-center bottom-[50%] md:top-[40%] top-[200px] sm:top-[300px] lg:top-[400px]  absolute left-0 right-0">
                <div className="w-[95%] md:w-[90%]">
                  <h1 className="text-[25px] sm:text-[37px]  md:text-[43px] lg:text-[53px] w-full font-bold text-center  text-[#FFC107]">
                    Get your best insurance coverage
                  </h1>
                  <h1 className="text-[20px] sm:text-[33px]  md:text-[40px] lg:text-[45px] w-full font-bold text-center  text-white">
                    With Counseling Industry Experts
                  </h1>
                </div>
              </div>
              <br />
              <div className="flex justify-center">
                <div className="bg-black w-[95%] md:w-[90%] rounded-[20px]  md:rounded-[40px] z-[-2]">
                  <Image
                    unoptimized
                    src="https://images.pexels.com/photos/1128317/pexels-photo-1128317.jpeg"
                    alt="img"
                    width={10}
                    height={10}
                    className="bg-black opacity-70 bg-opacity-25 w-full md:h-[60vh] lg:h-[80vh] object-cover rounded-[20px] md:rounded-[40px] mx-auto "
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 lg:flex lg:justify-between items-center mx-auto w-[95%] md:w-[85%] mt-[-20px] md:mt-[-50px]">
                <Image
                  src={Helth}
                  alt="Health"
                  className="rounded-full w-[80px] md:w-[130px] cursor-pointer mx-auto"
                />
                <Image
                  src={Pro}
                  alt="Professional"
                  className="rounded-full w-[80px] md:w-[130px] cursor-pointer mx-auto"
                />
                <Image
                  src={SAV}
                  alt="Savings"
                  className="rounded-full w-[80px] md:w-[130px] cursor-pointer mx-auto"
                />
                <Image
                  src={GRO}
                  alt="Growth"
                  className="rounded-full w-[80px] md:w-[130px] cursor-pointer mx-auto"
                />
                <Image
                  src={Edu}
                  alt="Education"
                  className="rounded-full w-[80px] md:w-[130px] cursor-pointer mx-auto"
                />
                <Image
                  src={RET}
                  alt="Retirement"
                  className="rounded-full w-[80px] md:w-[130px] cursor-pointer mx-auto"
                />
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
          <div className="ml-[5%] mr-[5%] mt-[5%] mb-[5%] ">
            <div className='flex justify-between '>
              <div className=" items-center space-y-4 w-[30%] hidden xl:block">
                <img
                  src="https://images.pexels.com/photos/1390403/pexels-photo-1390403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className={`w-56 h-56 object-cover  shadow-sm shadow-black rounded-full self-start border-[#FBAC1A] border-[3px] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-[#000] ${activeIndex === 0 ? 'duration-300 animate-popup shadow-lg shadow-[#000]' : ''}`}
                />
                <img
                  src="https://images.pexels.com/photos/29565581/pexels-photo-29565581/free-photo-of-beachside-yoga-session-in-morocco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="w-20 h-20 invisible object-cover rounded-full shadow-sm mr-[-50px] shadow-black border-[#FBAC1A]  border-[3px] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-[#000]"
                />
                <img
                  src="https://images.pexels.com/photos/29565581/pexels-photo-29565581/free-photo-of-beachside-yoga-session-in-morocco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className={`w-56 h-56 object-cover rounded-full shadow-sm mr-[-50px] shadow-black border-[#FBAC1A] self-start  border-[3px] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-[#000] ${activeIndex === 2 ? 'duration-300 animate-popup scale-110 shadow-lg shadow-[#000]' : ''}`}
                />
              </div>
              <div className=" items-center space-y-4 w-[40%] hidden  xl:block ">
                <img
                  src="https://images.pexels.coms/1390403/pexels-photo-1390403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="w-40 h-40 object-cover  invisible shadow-sm shadow-black rounded-full self-start border-[#FBAC1A] border-[3px] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-[#000]"
                />
                <img
                  src="https://images.pexels.com/photos/29565581/pexels-photo-29565581/free-photo-of-beachside-yoga-session-in-morocco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className={`w-56 h-56 object-cover rounded-full shadow-sm mr-[-50px] shadow-black border-[#FBAC1A]  border-[3px] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-[#000] ${activeIndex === 1 ? 'duration-300 animate-popup scale-110 shadow-lg shadow-[#000]' : ''}`}
                />
                <img
                  src="https://images.pexels.com/photos81/pexels-photo-29565581/free-photo-of-beachside-yoga-session-in-morocco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="w-20 h-20 object-cover invisible rounded-full shadow-sm mr-[-50px] shadow-black border-[#FBAC1A] self-start  border-[3px] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-[#000]"
                />
              </div>

              <div className="relative bg-white bg-opacity-25 w-full h-full  pt-10 pb-10 rounded-[30px] md:rounded-[60px] flex justify-center items-center overflow-hidden shadow-md shadow-[#FBAC1A]">
                {/* Carousel Items */}
                <div className="relative w-full h-[400px] rounded-lg">
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${activeIndex === index ? 'opacity-100 scale-110 duration-1000 ' : 'opacity-0 scale-75 duration-1000 ease-in-out'}`}

                    >
                      <div className="flex flex-col items-center justify-center h-full text-center">
                        <h2 className={`text-3xl font-bold text-white mb-5 animate-popup`}>{item.title}</h2>
                        <p className=" w-[70%] text-white ">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Previous Button */}
                <button
                  type="button"
                  className="absolute hidden sm:block top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  onClick={showPrev}
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-[#FBAC1A]">
                    <svg
                      className="w-4 h-4 text-[#FBAC1A] rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                    <span className="sr-only">Previous</span>
                  </span>
                </button>

                {/* Next Button */}
                <button
                  type="button"
                  className="absolute top-0  hidden sm:block  end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  onClick={showNext}
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-[#FBAC1A]">
                    <svg
                      className="w-4 h-4 text-[#FBAC1A]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="sr-only">Next</span>
                  </span>
                </button>

                <style jsx>{`
        .scale-75 {
          transform: scale(0.75);
        }

        .scale-100 {
          transform: scale(1);
        }
      `}</style>
              </div>

            </div>
          </div>
          <div className=' ml-[5%] mr-[5%] mt-10'>
            <h1 className='text-center text-3xl font-bold text-white'>Plan Your Future Today</h1>
            <div className='bg-white opacity-25 rounded-[30px] md:rounded-[60px] p-5 min-h-[330px] mt-[50px]'></div>
          </div>
          <div className=' ml-[5%] mr-[5%] mt-10 mb-20'>
            <h1 className='text-center text-3xl font-bold text-white mb-10 mt-10'>What Our Client's Say</h1>
            <div className="flex flex-wrap justify-center lg:justify-between ">
              {/* Card 1 */}
              <div className="bg-white bg-opacity-25 shadow-md transition-transform duration-300 ease-in-out md:hover:scale-110 hover:shadow-lg hover:shadow-[#000] shadow-[#FBAC1A] rounded-[30px] p-5 max-h-[410px] w-[90%] sm:w-[48%] lg:w-[30%] mx-auto mt-5">
                <div>
                  <p className="text-center text-white text-sm">
                    This counseling service was outstanding! The team was professional, understanding, and attentive to my
                    concerns. They provided personalized advice that exceeded my expectations. I felt supported and valued
                    throughout the process. Their dedication and expertise truly stood out. I highly recommend their services to
                    anyone seeking reliable and caring guidance!
                  </p>
                  <Image src={R1} width={160} alt="reviews" className="mt-5 mx-auto" />
                  <div className="flex justify-center mt-5">
                    <Image
                      src={Aravindha}
                      width={50}
                      height={50}
                      alt="reviews"
                      className="w-14 h-14 mr-5 rounded-full object-cover"
                    />
                    <div className="mt-1">
                      <h1 className="text-white font-bold">Aravindha Koralage</h1>
                      <h1 className="text-[#FBAC1A] text-sm">Entrepreneur</h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white bg-opacity-25 shadow-md transition-transform duration-300 ease-in-out md:hover:scale-110 hover:shadow-lg hover:shadow-[#000] shadow-[#FBAC1A] rounded-[30px] p-5 max-h-[410px] w-[90%] sm:w-[48%] lg:w-[30%] mx-auto mt-5">
                <div>
                  <p className="text-center text-white text-sm">
                    This counseling service was outstanding! The team was professional, understanding, and attentive to my
                    concerns. They provided personalized advice that exceeded my expectations. I felt supported and valued
                    throughout the process. Their dedication and expertise truly stood out. I highly recommend their services to
                    anyone seeking reliable and caring guidance!
                  </p>
                  <Image src={R1} width={160} alt="reviews" className="mt-5 mx-auto" />
                  <div className="flex justify-center mt-5">
                    <Image
                      src={Aravindha}
                      width={50}
                      height={50}
                      alt="reviews"
                      className="w-14 h-14 mr-5 rounded-full object-cover"
                    />
                    <div className="mt-1">
                      <h1 className="text-white font-bold">Aravindha Koralage</h1>
                      <h1 className="text-[#FBAC1A] text-sm">Entrepreneur</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className='pt-3 pb-3'></div>

              {/* Card 3 */}
              <div className="bg-white bg-opacity-25 shadow-md transition-transform duration-300 ease-in-out md:hover:scale-110 hover:shadow-lg hover:shadow-[#000] shadow-[#FBAC1A] rounded-[30px] p-5 max-h-[410px] w-[90%] sm:w-[48%] lg:w-[30%] mx-auto mt-5">
                <div>
                  <p className="text-center text-white text-sm">
                    This counseling service was outstanding! The team was professional, understanding, and attentive to my
                    concerns. They provided personalized advice that exceeded my expectations. I felt supported and valued
                    throughout the process. Their dedication and expertise truly stood out. I highly recommend their services to
                    anyone seeking reliable and caring guidance!
                  </p>
                  <Image src={R1} width={160} alt="reviews" className="mt-5 mx-auto" />
                  <div className="flex justify-center mt-5">
                    <Image
                      src={Aravindha}
                      width={50}
                      height={50}
                      alt="reviews"
                      className="w-14 h-14 mr-5 rounded-full object-cover"
                    />
                    <div className="mt-1">
                      <h1 className="text-white font-bold">Aravindha Koralage</h1>
                      <h1 className="text-[#FBAC1A] text-sm">Entrepreneur</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='pt-3 pb-3'></div>

          </div>
          <div className="ml-[5%] mr-[5%] mt-10">
            <h1 className="text-center text-3xl font-bold text-white">Counseling</h1>
            <div className="flex flex-wrap md:flex-row justify-between items-center mt-5 gap-5">
              {/* Left Section */}
              <div className="rounded-[60px] p-5 mt-[50px] w-full md:max-w-[50%]">
                <h1 className="text-white w-full text-xl md:text-2xl  font-bold text-center md:text-left">
                  Choose Your Best Insurance Coverage Counseling With Industry Expert
                </h1>
                <br />
                <br />
                <p className="text-white text-sm md:text-base md:max-w-[90%] text-center md:text-left">
                  Choosing the right insurance can be overwhelming, but I am here to help. I offer personalized guidance to ensure
                  you make confident, informed decisions. Whether it's health, protection, savings, education, group insurance, or
                  retirement, I am committed to finding the best solutions for you. Let's secure your future together.
                </p>
                <br />
                <br />
                <h1 className="text-white  w-full md:w-[50%] text-center text-sm md:text-[15px] bg-[#FBAC1A] p-2 rounded-[20px] font-bold transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-[#000]">
                  Book A Free Session
                </h1>
              </div>

              {/* Right Section */}
              <div className="w-full md:max-w-[35%] flex justify-center items-center">
                <div className="bg-white rounded-[30px] w-full bg-opacity-40 pb-10 shadow-md shadow-[#FBAC1A]">
                  <div className="bg-white rounded-[30px] w-full h-36"></div>
                  <div className="flex justify-center mt-[-55px]">
                    <Image
                      src={Aravindha}
                      unoptimized
                      alt="Mr. Aravinda Koralage"
                      className="bg-white bg-opacity-35 rounded-full object-cover w-36 h-36 border-[#FBAC1A] border-[5px]"
                    />
                  </div>
                  <h1 className="w-full text-center text-white text-2xl md:text-3xl font-bold mt-3">
                    Mr. Aravinda Koralage
                  </h1>
                  <div className="mx-[5%] mt-5">
                    <p className="text-center text-white">Managing Director At Global Talent Solutions</p>
                    <p className="text-center text-white">Branch Manager At HNB Insurance Galle</p>
                  </div>
                  <div className="flex justify-between mx-[3%] mt-5">
                    <div className="text-center w-[33.33%]">
                      <h1 className="mt-[5%] text-3xl font-bold text-white">15 +</h1>
                      <p className="text-white text-[15px] mt-2">Experience</p>
                    </div>
                    <div className="text-center w-[33.33%]">
                      <h1 className="mt-[5%] text-3xl font-bold text-white">8 +</h1>
                      <p className="text-white text-[15px] mt-2">MDRT Winner (2014-2023)</p>
                    </div>
                    <div className="text-center w-[33.33%]">
                      <h1 className="mt-[5%] text-3xl font-bold text-white">4 +</h1>
                      <p className="text-white text-[15px] mt-2">Super Gold Winner (2013-2020)</p>
                    </div>
                  </div>
                  <div className="flex justify-center mt-10">
                    <h1 className="bg-white rounded-[35px] pt-2 pb-2 pl-4 pr-4">View Profile ➜</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br /><br />
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