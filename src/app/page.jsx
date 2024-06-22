import Image from "next/image";
import Logo from "./icons/logo.svg";
import User from "./icons/user.svg";
import Search from "./icons/search.svg";
import Link from "next/link";
import Import from "./icons/import.svg";
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
export default function Home() {
  return (
    <>
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
                <span className="bg-[#3E68FD] p-3 rounded-3xl ml-1 mt-1 mb-1 mr-2 pr-5 sm:p-2 sm:pl-3 sm:mr-1 text-white">Login</span>
              </Link>
            </span>
          </div>
        </nav>
        <div className="flex-grow flex flex-col justify-center items-center">
          <div className="text-center text-white">
            <h1 className="font-bold md:text-4xl lg:text-3xl sm:text-2xl">Make Work Easier And Life Better With</h1>
            <h1 className="font-bold md:text-3xl lg:text-2xl sm:text-xl"><span className="span_g">G</span>lobal <span className="span_t">T</span>alent <span className="span_s">S</span>olutions</h1>
          </div>
          <div className="flex justify-center mt-4 w-full">
            <input type="search" placeholder="Search Here..." className="w-1/2 max-w-lg p-2.5 pl-5 text-white bg-[#D9D9D9] bg-opacity-30 rounded-3xl" />
            <Image src={Search} alt="search icon" className="w-7 p-1 h-8 mt-1 -ml-10 cursor-pointer" />
          </div>
        </div>
        <div id="default-carousel" className="relative mt-5 mb-5" data-carousel="slide">
          <div className="relative h-48 ml-12 mr-12 overflow-hidden rounded-lg md:h-96 bg-white bg-opacity-30">
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
          </div>
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
          </div>
          <button type="button" className="absolute ml-12 top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1L1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" className="absolute mr-12 top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
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
      <div className="bg-white bg-opacity-30 ml-[20%] mr-[20%] rounded-xl p-5">
        <h1 className="text-3xl font-bold text-center text-white">Top Management</h1>
        <br />
        <div className="flex flex-wrap justify-center">
          <Link href="/vehicle" className="bg-white bg-opacity-30 w-24 text-center rounded-xl m-2 sm:m-10 h-35 p-3">
            <div className="flex items-center justify-center">
              <div className="rounded-full bg-white bg-opacity-50 w-20 h-20 p-5 mb-2">
              </div>
            </div>
            <span className="h-svh text-white">Vehicle</span>
          </Link>
          <Link href="/vehicle" className="bg-white bg-opacity-30 w-24 text-center rounded-xl m-2 sm:m-10 h-35 p-3">
            <div className="flex items-center justify-center">
              <div className="rounded-full bg-white bg-opacity-50 w-20 h-20 p-5 mb-2">
              </div>
            </div>
            <span className="h-svh text-white">Vehicle</span>
          </Link>
          <Link href="/vehicle" className="bg-white bg-opacity-30 w-24 text-center rounded-xl m-2 sm:m-10 h-35 p-3">
            <div className="flex items-center justify-center">
              <div className="rounded-full bg-white bg-opacity-50 w-20 h-20 p-5 mb-2">
              </div>
            </div>
            <span className="h-svh text-white">Vehicle</span>
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
        <div className="ml-[10%] mr-[10%] flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className=" bg-white bg-opacity-10 p-2 rounded-3xl ">
              <h1 className=" text-center text-white font-bold mt-3 text-[30px]">Get In Touch</h1>
              <p className="text-white text-center">We are here for you! How can we help?</p>
              <div className=" ml-8 mt-8 mr-8">
                <input type="text" placeholder="Enter Your Name" className=" p-2 rounded-[18px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white" /><br />
                <input type="text" placeholder="Enter Your Email Address" className="text-white p-2 rounded-[18px] mt-4 mb-4 w-full bg-[#d9d9d920] " /><br />
                <input type="text" placeholder="Let Us Know How We Can Help You" className=" text-white p-2 rounded-[18px] mt-4 mb-4 w-full bg-[#d9d9d920] " />
              </div>
              <div className="flex justify-center">
                <div className="bg-blue-500 rounded-[15px] text-center p-2">
                  <h1 className=" text-bold text-white font-bold">Submit</h1>
                </div>
              </div>
            </div>
            <div className=" p-4 h-fit">
              <p className="mt-4  text-lg text-gray-500 lg:mx-auto">
                Welcome to Jepsoft , where innovation meets efficiency. As a leading software company, we specialize in crafting tailored solutions to
                meet your unique needs. Whether you're seeking cutting-edge technology, seamless integration, or expert support, our team is here                                                                           to empower your success.
              </p>
              <br />
              <p className="mt-4 max-w-3xl  text-lg text-gray-500 lg:mx-auto">
                Contact us today to explore how our software solutions can elevate your business to new heights.
                Let's embark on a journey of digital transformation together.
              </p>
              <br /><br /><br />
              <ul className="flex justify-center mt-5 space-x-5 ">
                <li>
                  <a href="https://web.facebook.com/profile.php?id=61558793650349" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/jepsoft?igsh=MTd1dHplcHcweTJleA==" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://wa.link/6rkzec" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd" />
                      <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/jepsoft/about/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                      <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br /><br/>
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
