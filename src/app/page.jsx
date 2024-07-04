'use client'
import { useEffect, useState } from 'react';
import Image from "next/image";
import Linkedin from "./icons/linkedin.svg"
import whatsapp from "./icons/whatsapp.svg"
import facebook from "./icons/facebook.svg"
import Aravinda from "./director/arvinda.svg";
import one_of_one from "./director/one_of_one.svg";
import Logo from "./icons/logo.svg";
import User from "./icons/user.svg";
import Search from "./icons/search.svg";
import Link from "next/link";
import Import from "./icons/import.svg";
import Contact_us from "./icons/contact_us.svg";
import Export from "./icons/export.svg";
import Event from "./icons/event.svg";
import Web from "./icons/webdesign.svg";
import Air from "./icons/air.svg";
import Counselling from "./icons/counselling.svg";
import Real from "./icons/state.svg";
import Logistic from "./icons/logistic.svg";
import Find_job from "./icons/findjob.svg";
import Pot_job from "./icons/postjob.svg";
import Social from "./icons/socialm.svg";
import Tour from "./icons/tour.svg";
import Poster1 from "./posters/bannerone.png";
import Poster2 from "./posters/bannertwo.png";
import Poster3 from "./posters/bannerthree.png";
import Poster4 from "./posters/bannerfore.png";
export default function Home() {
  const token = localStorage.getItem("gts_token");
  const user_login_done = token ? "visible" : "hidden";
  const user_not_login = token ? "hidden" : "visible";
  const posters = [Poster1, Poster2, Poster3, Poster4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  // Function to go to the next slide
  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === posters.length - 1 ? 0 : prevIndex + 1));
      setIsTransitioning(false);
    }, 300); // Adjust the duration to match your CSS transition duration
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? posters.length - 1 : prevIndex - 1));
      setIsTransitioning(false);
    }, 300); // Adjust the duration to match your CSS transition duration
  };

  // Auto slide change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="flex flex-col">
      <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
        <nav className="p-4  md:p-10 text-white">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto h-full">
            <div></div>
            <Image src={Logo} alt="gts logo" className="special_logo absolute h-40 w-52 left-3 top-[-14px] sm:left-1" />
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
            <div className={`absolute right-10 text-white top-8 text-center special-signup_in_button ${user_not_login}`}>
              <div className=' bg-white bg-opacity-30 flex justify-center  rounded-[20px]'>
                <Link href='/sign-in'>
                  <div className='pr-2 pl-3 p-2'>
                    Signin
                  </div>
                </Link>
                <Link href='/sign-up'>
                  <div className='pl-3 pr-3 p-2 bg-blue-600 rounded-[20px] '>
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
        <div className=' special_mt'></div>
        <div className='promotion_box_margins'>
          <div className="flex-grow flex flex-col justify-center items-center">
            <div className="text-center text-white">
              <h1 className="font-bold md:text-2xl lg:text-2xl sm:text-2xl text-2xl">Make Work Easier And Life Better With</h1>
              <h1 className="font-bold md:text-2xl lg:text-2xl sm:text-xl"><span className="span_g">G</span>lobal <span className="span_t">T</span>alent <span className="span_s">S</span>olutions</h1>
            </div>
            <div className="flex justify-center mt-4 w-full">
              <input type="search" placeholder="Search Here..." className="w-3/4 max-w-lg p-2.5 pl-5 text-white bg-[#D9D9D9] bg-opacity-30 rounded-3xl" />
              <Image src={Search} alt="search icon" className="w-7 p-1 h-8 mt-1 -ml-10 cursor-pointer" />
            </div>
          </div>
          <div id="default-carousel" className="mt-5 mb-5 " data-carousel="slide">
            <div className="relative min-h-44 ml-12 mr-12 rounded-lg bg-opacity-30">
              {posters.map((poster, index) => (
                <div
                  key={index}
                  className={`absolute w-full max-h-[550px] lg:max-h-[550px] sm: md:max-h-[440px]   transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                  style={{ zIndex: index === currentIndex ? 10 : 1 }}>
                  <Link href='#'>
                    <Image
                      src={poster} // Assuming poster is the path to your image
                      unoptimized
                      className="absolute block w-svh max-h-[550px] lg:max-h-[550px] sm: md:max-h-[440px] object-contain cursor-pointer"
                      alt={`Slide ${index + 1}`}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <h1 className="text-3xl font-bold text-center text-white">Our Services</h1>
      <br />
      <br />
      <div className="flex flex-wrap justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <Link href="/Event-Planning" className=" md:ml-5 md:mr-5 sm:ml-2 sm:mr-2 lg:ml-10 lg-mr-10 mb-2 mt-2 bg-white bg-opacity-30 text-center rounded-xl p-4">
            <Image src={Event} alt="car" className="h-20 sm:h-24 lg:h-28 w-20 p-2 sm:w-24 lg:w-28 object-contain mx-auto" unoptimized />
            <span className="block text-white text-sm sm:text-base lg:text-lg mt-2">Event Planning</span>
          </Link>
          <Link href='/Web-Designing' className=" md:ml-5 md:mr-5 sm:ml-2 sm:mr-2 lg:ml-10 lg-mr-10 mb-2 mt-2 bg-white bg-opacity-30 text-center rounded-xl p-4">
            <Image src={Web} alt="bike" className="h-20 sm:h-24 lg:h-28 w-20 p-2 sm:w-24 lg:w-28 object-contain mx-auto" unoptimized />
            <span className="block text-white text-sm sm:text-base lg:text-lg mt-2">Web Designing</span>
          </Link>
          <Link href='/tires' className=" md:ml-5 md:mr-5 sm:ml-2 sm:mr-2 lg:ml-10 lg-mr-10 mb-2 mt-2 bg-white bg-opacity-30 text-center rounded-xl p-4">
            <Image src={Find_job} alt="tires" className="h-20 sm:h-24  p-2lg:h-28 w-20 sm:w-24 lg:w-28 object-contain mx-auto" unoptimized />
            <span className="block text-white text-sm sm:text-base lg:text-lg mt-2">Tires</span>
          </Link>
          <Link href='/parts' className=" md:ml-5 md:mr-5 sm:ml-2 sm:mr-2 lg:ml-10 lg-mr-10 mb-2 mt-2 bg-white bg-opacity-30 text-center rounded-xl p-4">
            <Image src={Pot_job} alt="parts" className="h-20 sm:h-24 p-2 lg:h-28 w-20 sm:w-24 lg:w-28 object-contain mx-auto" unoptimized />
            <span className="block text-white text-sm sm:text-base lg:text-lg mt-2">Parts</span>
          </Link>
          <Link href='/service' className=" md:ml-5 md:mr-5 sm:ml-2 sm:mr-2 lg:ml-10 lg-mr-10 mb-2 mt-2 bg-white bg-opacity-30 text-center rounded-xl p-4">
            <Image src={Import} alt="service" className="h-20 sm:h-24 p-2 lg:h-28 w-20 sm:w-24 lg:w-28 object-contain mx-auto" unoptimized />
            <span className="block text-white text-sm sm:text-base lg:text-lg mt-2" style={{ textAlign: "center" }}>Services</span>
          </Link>
          <Link href="/post-ad" className=" md:ml-5 md:mr-5 sm:ml-2 sm:mr-2 lg:ml-10 lg-mr-10 mb-2 mt-2 bg-white bg-opacity-30 text-center rounded-xl p-4">
            <Image src={Tour} alt="post ad" className="h-20 sm:h-24  p-2lg:h-28 w-20 sm:w-24 lg:w-28 object-contain mx-auto" unoptimized />
            <span className="block text-white text-sm sm:text-base lg:text-lg mt-2">Post Ad</span>
          </Link>
          <Link href="/vehicle" className=" md:ml-5 md:mr-5 sm:ml-2 sm:mr-2 lg:ml-10 lg-mr-10 mb-2 mt-2 bg-white bg-opacity-30 text-center rounded-xl p-4">
            <Image src={Logistic} alt="car" className="h-20 sm:h-24 p-2 lg:h-28 w-20 sm:w-24 lg:w-28 object-contain mx-auto" unoptimized />
            <span className="block text-white text-sm sm:text-base lg:text-lg mt-2">Vehicle</span>
          </Link>
          <Link href="/post-ad" className=" md:ml-5 md:mr-5 sm:ml-2 sm:mr-2 lg:ml-10 lg-mr-10 mb-2 mt-2 bg-white bg-opacity-30 text-center rounded-xl p-4">
            <Image src={Social} alt="post ad" className="h-20 sm:h-24 p-2 lg:h-28 w-20 sm:w-24 lg:w-28 object-contain mx-auto" unoptimized />
            <span className="block text-white text-sm sm:text-base lg:text-lg mt-2">Post Ad</span>
          </Link>
          <Link href='/bike' className=" md:ml-5 md:mr-5 sm:ml-2 sm:mr-2 lg:ml-10 lg-mr-10 mb-2 mt-2 bg-white bg-opacity-30 text-center rounded-xl p-4">
            <Image src={Air} alt="bike" className="h-20 sm:h-24 p-2 lg:h-28 w-20 sm:w-24 lg:w-28 object-contain mx-auto" unoptimized />
            <span className="block text-white text-sm sm:text-base lg:text-lg mt-2">Bikes</span>
          </Link>
          <Link href='/tires' className=" md:ml-5 md:mr-5 sm:ml-2 sm:mr-2 lg:ml-10 lg-mr-10 mb-2 mt-2 bg-white bg-opacity-30 text-center rounded-xl p-4">
            <Image src={Counselling} alt="tires" className="h-20 p-2 sm:h-24 lg:h-28 w-20 sm:w-24 lg:w-28 object-contain mx-auto" unoptimized />
            <span className="block text-white text-sm sm:text-base lg:text-lg mt-2">Tires</span>
          </Link>
          <Link href='/parts' className=" md:ml-5 md:mr-5 sm:ml-2 sm:mr-2 lg:ml-10 lg-mr-10 mb-2 mt-2 bg-white bg-opacity-30 text-center rounded-xl p-4">
            <Image src={Real} alt="parts" className="h-20 sm:h-24 p-2 lg:h-28 w-20 sm:w-24 lg:w-28 object-contain mx-auto" unoptimized />
            <span className="block text-white text-sm sm:text-base lg:text-lg mt-2">Parts</span>
          </Link>
          <Link href='/service' className=" md:ml-5 md:mr-5 sm:ml-2 sm:mr-2 lg:ml-10 lg-mr-10 mb-2 mt-2 bg-white bg-opacity-30 text-center rounded-xl p-4">
            <Image src={Export} alt="service" className="h-20 sm:h-24 p-2 lg:h-28 w-20 sm:w-24 lg:w-28 object-contain mx-auto" unoptimized />
            <span className="block text-white text-sm sm:text-base lg:text-lg mt-2" style={{ textAlign: "center" }}>Services</span>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <h1 className="text-3xl font-bold text-center text-white">About Us</h1>
      <br />
      <br />
      <h4 className="text-md ml-10 mr-10  text-center text-white">At Global talent Solutions , our mission is to simplify and enhance the lives of our clients by providing a comprehensive suite of  We are dedicated to excellence
        and innovation across logistics, travel, trade, workforce, protection, education, marketing, event management, real estate, and web solutions.
        By unifying these diverse services under one roof, we aim to deliver unmatched convenience, efficiency, and quality,
        empowering our clients to achieve their goals seamlessly and effectively.</h4>
      <br />
      <br />
      <br />
      <div className="bg-white bg-opacity-30 ml-[10%] mr-[10%] rounded-xl p-5">
        <h1 className="text-3xl font-bold text-center text-white">Top Management</h1>
        <br />
        <div className="flex flex-wrap justify-center">
          <Link href="#" className="bg-white bg-opacity-30 w-32 text-center rounded-xl m-2 sm:m-10 h-35 p-3">
            <Image src={one_of_one} className="flex items-center justify-center rounded-full mb-1" />
            <span className="h-svh text-white">Director</span>
          </Link>
          <Link href="#" className="bg-white bg-opacity-30 w-32 text-center rounded-xl m-2 sm:m-10 h-35 p-3">
            <Image src={Aravinda} className="flex items-center justify-center rounded-full mb-1" />
            <span className="h-svh text-white">Managing Director</span>
          </Link>
          <Link href="#" className="bg-white bg-opacity-30 w-32 text-center rounded-xl m-2 sm:m-10 h-35 p-3">
            <Image src={one_of_one} className="flex items-center justify-center rounded-full mb-1" />
            <span className="h-svh text-white">Director</span>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className=" min-h-svh">
        <h1 className="text-3xl font-bold text-center text-white">Contact Us</h1>
        <br />
        <br />
        <br />
        <h4 className="text-md ml-10 mr-10  text-center text-white">
          Welcome to Global Talent Solutions contact us page. Whether you have a question, need support, or simply want to provide feedback,
          we're here to help. Reach out to us through the contact form below, email, or phone. Our dedicated team is committed
          to providing
          prompt and effective assistance to ensure your experience with us is exceptional. We look forward to hearing
          from you!
        </h4>
        <br />
        <br />
        <br />
        <div className="flex justify-center  ml-[5%] mr-[5%]">
          <div className="w-full md:w-1/2">
            <div className="bg-white bg-opacity-10 p-2 rounded-3xl">
              <h1 className="text-center text-white font-bold mt-5 mb-5 text-[30px]">Get In Touch</h1>
              <p className="text-white text-center mt-5 mb-5">We are here for you! How can we help?</p>
              <div className="ml-8 mt-8 mb-5 mr-8">
                <input type="text" placeholder="Enter Your Name" className="p-2 rounded-[18px] mt-5 mb-5 w-full bg-[#d9d9d920] text-white" /><br />
                <input type="text" placeholder="Enter Your Email Address" className="text-white p-2 rounded-[18px] mt-5 mb-5 w-full bg-[#d9d9d920]" /><br />
                <input type="text" placeholder="Let Us Know How We Can Help You" className="text-white p-2 rounded-[18px] mt-5 mb-5 w-full bg-[#d9d9d920]" />
              </div>
              <div className="flex justify-center mt-5 mb-5">
                <div className="bg-blue-600 rounded-[15px] text-center mt-5 mb-5 p-2">
                  <h1 className="text-bold text-white font-bold ml-5 mr-5 cursor-pointer">Submit</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 hidden md:block w-1/2">
            <div className="flex-grow flex flex-col justify-center items-center w-full p-10">
              <Image src={Contact_us} alt='contact_us_img m-5' />
            </div>
            <div className=' flex justify-center mt-10'>
              <Image src={Linkedin} alt='linkedin' className=' cursor-pointer p-4' />
              <Image src={whatsapp} alt='whatsapp' className=' cursor-pointer p-4' />
              <Image src={facebook} alt='facebook' className=' cursor-pointer p-4' />
            </div>
            <br /><br /><br />
          </div>
        </div>

      </div>
      <br /><br />
      <div className="p-2">
        <footer className="">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <a href="https://jepsoft.com/" className="flex items-center">
                  <Image src={Logo} className=" w-40" alt="Logo" />
                </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div className=' hid'>
                  <h2 className="mb-6 text-sm font-semibold text-white">Contact</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a href="" className="hover:underline z-10">+94 77 483 5253</a>
                    </li>
                    <li>
                      <a href="" className="hover:underline">Jepsoft</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a href="https://web.facebook.com/profile.php?id=61558793650349" className="hover:underline ">Facebook</a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/jepsoft?igsh=MTd1dHplcHcweTJleA==" className="hover:underline">Instagram</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a href="#" className="hover:underline">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="sm:flex sm:items-center sm:justify-between mt-5">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://jepsoft.com/" className="hover:underline">Jepsoft</a>. All Rights Reserved.
              </span>
              <div className="flex mt-4 sm:justify-center sm:mt-0">
                <a href="https://web.facebook.com/profile.php?id=61558793650349" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                  </svg>
                  <span className="sr-only">Facebook page</span>
                </a>
                <a href="https://www.instagram.com/jepsoft?igsh=MTd1dHplcHcweTJleA==" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
                  </svg>
                  <span className="sr-only">Discord community</span>
                </a>
                <a href="https://wa.link/6rkzec" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd" />
                    <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
                  </svg>
                  <span className="sr-only">Whats App page</span>
                </a>
                <a href="https://www.linkedin.com/company/jepsoft/about/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                  </svg>
                  <span className="sr-only">Linkedin account</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
