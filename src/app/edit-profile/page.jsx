'use client'
import Image from "next/image";
import Logo from "../icons/logo.svg";
import Link from "next/link";
import User from "../icons/user.svg";
import BG from "../icons/background.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import red_verify from "../icons/red_verify.svg";
import green_verify from "../icons/green_verify.svg";
import { enqueueSnackbar } from "notistack";
export default function Edit_profile() {
    const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const [token, setToken] = useState();
    const [thephone, setthephone] = useState(null);
    const [user_login_done, set_login_done] = useState('visible');
    const [status, setstatus] = useState(green_verify);
    const [user_not_login, set_not_login_done] = useState('blur');
    const [phone, setPhone] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [enableornot, setenabledornot] = useState();
    const [blurscreen, setBlurscreen] = useState('');
    const [hide_item, sethideitem] = useState('hidden');
    const [code, setCode] = useState('');
    const [stvf, setstatus_vf] = useState(false);
    const update_password = async () => {
        if (Password == ConfirmPassword) {
            if (Password.length < 8) {
                enqueueSnackbar("Password must be at least 8 characters", { variant: 'error' });
            } else {
                try {
                    const tokenUnlock = localStorage.getItem('gts_token');
                    const response = await axios.post(`${apiUrl}/update_password`, {
                        password: Password,
                    }, {
                        headers: {
                            'Authorization': `Bearer ${tokenUnlock}`
                        }
                    });
                    if (response.data.result = "success") {
                        enqueueSnackbar("Password Update Successfully", { variant: 'success' });
                        setTimeout(() => {
                            window.location.href = '/profile';
                        }, 2000);
                    }
                } catch (error) {
                    enqueueSnackbar("Password Update Failed", { variant: 'error' });
                }
            }
        } else {
            enqueueSnackbar("Password not matched", { variant: 'error' });
        }
    }
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setToken(localStorage.getItem('gts_token'));
            set_login_done(token ? "visible" : "hidden");
            set_not_login_done(token ? "hidden" : "visible");
        } else {
            setToken(null);
        }
    }, [token]);
    const handle_verify = async () => {
        if (phone != thephone && /^[0-9]*0[0-9]*$/.test(phone) && phone.length === 10) {
            const response = await axios.post(`${apiUrl}/verify_phone`, {
                for: 'send',
                phone: phone,
            });
            if (response.data.result) {
                const code = response.data.result;
                localStorage.setItem("gtsvch", code);
            }
            blur_contrall();
            setenabledornot('disabled:cursor-not-allowed')
            setTimeout(() => {
                setenabledornot('')
            }, 60000);
        } else {
            const response = "Same or Invalid Number";
            enqueueSnackbar(response, { variant: 'info' });
        }
        //add success or fail message
    }
    const blur_contrall = () => {
        sethideitem('visible');
        if (blurscreen == "blur") {
            setBlurscreen("");
        } else {
            setBlurscreen("blur");
        }
    }
    const phone_proccess = (e) => {
        const value = e.target.value;
        setPhone(value);
        if (value != thephone) {
            setstatus(red_verify);
        } else {
            setstatus(green_verify);
        }
    };
    useEffect(() => {
        if (!localStorage.getItem('gts_token')) {
            enqueueSnackbar("Please Login", { variant: 'error' });
            setTimeout(() => {
                window.location.href = '/sign-in';
            }, 2000);
        } else {
            try {
                if (typeof window !== 'undefined') {
                    setPhone(localStorage.getItem("phone"));
                    setthephone(localStorage.getItem("phone"));
                    setNIC(localStorage.getItem("NIC"));
                    setEmail(localStorage.getItem("Email"));
                    setGender(localStorage.getItem("Gender"));
                    set_login_done("visible");
                    set_not_login_done("hidden");
                }
            } catch (error) {
            }
        }
    }, [token]);
    const verify_code = async (event) => {
        event.preventDefault();
        try {
            const gtscode = localStorage.getItem("gtsvch");
            const response = await axios.post(`${apiUrl}/verify`, {
                for: 'check',
                code: code,
                gtscode: gtscode
            });
            if (response.data.status == 'Verified') {
                setstatus(green_verify);
                enqueueSnackbar("Verification Success", { variant: 'success' });
                setBlurscreen("");
                sethideitem("hidden");
                setstatus_vf(true);
                setVerify_update(green_verify);
                localStorage.removeItem('gtsvch');
            } else {
                enqueueSnackbar("Verification Failed", { variant: 'error' });
            }
        } catch (error) {
            console.error('Verification failed:', error);
        }
    };
    const handle_upadate = () => {
        const token_unlock = localStorage.getItem("gts_token");
        console.log(thephone, phone);
        if (stvf == true || thephone == phone ) {
            if(thephone == phone && /^[0-9]*0[0-9]*$/.test(phone) && phone.length === 10){
                enqueueSnackbar("Same or Invalid Number", { variant: 'info' });
            }else{
            const update_data = async () => {
                try {
                    const response = await axios.post(
                        `${apiUrl}/update_profile`,
                        {
                            Phone: phone,
                        },
                        {
                            headers: {
                                'Authorization': `Bearer ${token_unlock}`
                            }
                        }
                    );
                    localStorage.setItem("phone", phone);
                    enqueueSnackbar("Update Success", { variant: 'success' });
                    setTimeout(() => {
                        window.location.href = './';
                    }, 2000);
                } catch (error) {
                    enqueueSnackbar("phone Update Failed", { variant: 'error' });
                }
            };
        
            update_data();
        }
        } else {
            enqueueSnackbar("Please Verify Your Phone", { variant: 'error' });
        }
    


    }
    const delete_account = async () => {
        const token_unlock = localStorage.getItem("gts_token");
        try {
            const response = await axios.post(
                `${apiUrl}/delete_account`,
                {},
                {
                    headers: {
                        'Authorization': `Bearer ${token_unlock}`
                    }
                }
            );
            if (response.data.result = "success") {
                enqueueSnackbar("Account Deleting...", { variant: 'success' });
                localStorage.removeItem('gts_token');
                localStorage.removeItem('phone');
                localStorage.removeItem('firstName');
                localStorage.removeItem('lastName');
                localStorage.removeItem('NIC');
                localStorage.removeItem('Email');
                localStorage.removeItem('Gender');
                setTimeout(() => {
                    enqueueSnackbar("Account Deleted", { variant: 'success' });
                    setTimeout(() => {
                        window.location.href = '../';
                    }, 2000);
                }, 2000);
            }
        } catch (error) {
            enqueueSnackbar("Account Delete Failed", { variant: 'error' });
        }
    }

    return (
        <div>
            <div className={`${hide_item} z-10 flex justify-center items-center absolute left-0 right-0 top-0 bottom-0 h-full mt-auto mb-auto`}>
                <div tabindex="-1" aria-hidden="true" className=" ">
                    <div class="relative p-4 w-full max-w-md max-h-full">
                        <div class="relative bg-white bg-opacity-30 bg-blur rounded-lg shadow ">
                            <h3 class="text-xl text-white dark:text-white text-center pt-5 ">
                                Verify Your Phone
                            </h3>
                            <div class="p-4 md:p-5">
                                <form class="space-y-4" action="#">
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Verification Code</label>
                                        <input
                                            type="text"
                                            name="code"
                                            id="code"
                                            value={code}
                                            onChange={(e) => setCode(e.target.value)}
                                            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            placeholder="Verification Code"
                                            required
                                        />
                                    </div>
                                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={verify_code}>Verify</button>
                                    <div class="text-sm font-medium text-white text-center">
                                        Didn't Get Code? <a href="#" onClick={handle_verify} className={`${setenabledornot} text-blue-700 hover:underline dark:text-blue-700`}>Resend</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${blurscreen}`}>
                <div className={`fixed left-0 right-0 top-0 bottom-0 -z-50 `}>
                    <Image src={BG} className=' object-cover w-full h-full opacity-15' />
                </div>
                <div className="min-h-[100vh] flex flex-col">
                    <nav className="p-4  md:p-10 text-white">
                        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto h-full">
                            <div></div>
                            <Link href='../' className=" z-40">
                                <Image src={Logo} data-aos="fade-up" alt="gts logo" className=" cursor-pointer special_logo absolute h-40 w-52 left-3 top-[-14px] sm:left-1" />
                            </Link>
                            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown"></div>
                            </div>
                            <div className=" absolute left-0 right-0 md:block hidden top-[17px]" id="navbar-user">
                            <ul className="flex  justify-center p-4 mt-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
                                <h1 className="font-bold md:text-2xl lg:text-2xl sm:text-xl"><span className="span_g">G</span>lobal <span className="span_t">T</span>alent <span className="span_s">S</span>olutions</h1>
                                </ul>
                            </div>
                            <div className={`absolute right-10 text-white top-8 text-center special-signup_in_button ${user_not_login}`}>
                                <div className=' bg-white bg-opacity-30 flex justify-center  rounded-[20px]'>
                                    <Link href='/sign-in'>
                                        <div className='pr-2 pl-3 p-2 '>
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
                    <div className="flex items-center justify-center h-full p-4 md:p-0 md:mt-[60px]">
                        <div className="text-black bg-white bg-opacity-30 min-w-[90%] md:min-w-[700px]  md:max-w-[600px] rounded-[35px] mx-auto specical_profile">
                            <div className="px-4 md:px-6 p-5">
                                <div className=" bg-black bg-opacity-30 p-4 rounded-3xl mb-5">
                                    <h2 className="text-white text-left w-full md:w-auto mb-2 md:mb-0">Update Phone</h2>
                                    <div className="flex flex-col md:flex-row justify-between items-center mt-3 mb-3">

                                        <h2 className="text-white text-left w-full md:w-auto mb-2 md:mb-0">Mobile</h2>
                                        <div className="flex justify-end w-full">
                                            <Image
                                                src={status}
                                                unoptimized
                                                width={50}
                                                height={50}
                                                className="h-[55px] w-[50px] absolute -mt-[12px] cursor-pointer"
                                                onClick={handle_verify}
                                            />
                                            <input
                                                type="tel"
                                                className="bg-white bg-opacity-10 text-white ml-2 border-b border-gray-400 outline-none rounded-[20px] h-8 p-1 w-full md:w-10/12"
                                                onChange={phone_proccess}
                                                value={phone}
                                            />
                                        </div>
                                    </div>
                                    <div className=" cursor-pointer flex justify-between items-center mt-2 mb-2" onClick={() => handle_upadate()}>
                                        <h2 className="text-white w-full bg-blue-600 p-1.5 rounded-[15px] text-center">Update Phone</h2>
                                    </div>
                                </div>
                                <div className=" bg-black bg-opacity-30 p-4 rounded-3xl">
                                    <h2 className="text-white text-left w-full md:w-auto mb-2 md:mb-0">Change Password</h2>
                                    <div className="flex flex-col md:flex-row justify-between items-center mt-3 mb-3">
                                        <h2 className="text-white w-full md:w-1/4 text-left mb-2 md:mb-0">Password</h2>
                                        <input
                                            type="password"
                                            className="bg-white bg-opacity-10 text-white ml-2 border-b border-gray-400 outline-none rounded-[20px] p-1 w-full md:w-3/4"
                                            onChange={(e) => setPassword(e.target.value)}
                                            value={Password}
                                        />
                                    </div>
                                    <div className="flex flex-col md:flex-row justify-between items-center mt-3 mb-3">
                                        <h2 className="text-white w-full md:w-1/4 text-left mb-2 md:mb-0">Confirm</h2>
                                        <input
                                            type="password"
                                            className="bg-white bg-opacity-10 text-white ml-2 border-b border-gray-400 outline-none rounded-[20px] p-1 w-full md:w-3/4"
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            value={ConfirmPassword}
                                        />
                                    </div>
                                    <div className="cursor-pointer flex justify-between items-center mt-2 mb-2" onClick={() => update_password()}>
                                        <h2 className="text-white w-full bg-blue-600 p-1.5 rounded-[15px] text-center">Update Password</h2>
                                    </div>
                                </div>
                                <div className=" cursor-pointer flex justify-between items-center mt-2 mb-2" onClick={() => delete_account()}>
                                    <h2 className="text-white w-full bg-red-700 p-1.5 rounded-[15px] text-center">Delete Account</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link href="https://jepsoft.com" className="mt-5 flex justify-center">
                <h1 className=" text-white text-center mb-5 ">©2024 <span className="">Jepsoft</span>. All Rights Reserved.</h1>
            </Link>
                </div>
            </div>
        </div>
    )
}