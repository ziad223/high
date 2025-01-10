import React from 'react';
import logo from '../../assets/logo-2.png';
import { CiLocationOn } from 'react-icons/ci';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='lg:w-[90%] mx-auto p-10 bg-[#1d2024] rounded-t-xl'>
            <div className="flex flex-col lg:flex-row justify-between w-full gap-14">
                {/* Introduction Section */}
                <div className="lg:w-1/4 w-full mb-8 lg:mb-0">
                    <img src={logo} className='lg:w-[180px]' alt="logo" />
                    <p className=' text-gray-300 text-lg'>
                        Welcome to Lebanese Grill – where authentic Lebanese flavors come to life!

                    </p>
                    <div className='mt-5 mb-4 text-lg text-white flex flex-col capitalize gap-3 justify-between'>
                        <h2>Opening Times: 7 Days a Week</h2>
                    </div>
                    <hr />
                    <div className='mt-4 text-lg text-white flex justify-between capitalize'>
                        <h2>11:00 PM Till 02:00 AM</h2>
                    </div>
                </div>

                {/* Explore Section */}
                {/* <div className="lg:w-1/4 w-full mb-8 lg:mb-0">
                    <h2 className='font-bold text-2xl text-white'>Explore</h2>
                    <ul className='mt-5 flex flex-col gap-4'>
                        <li><a href="#" className='text-xl text-gray-300'>Company Profile</a></li>
                        <li><a href="#" className='text-xl text-gray-300'>About</a></li>
                        <li><a href="#" className='text-xl text-gray-300'>Help Center</a></li>
                        <li><a href="#" className='text-xl text-gray-300'>Career</a></li>
                        <li><a href="#" className='text-xl text-gray-300'>Features</a></li>
                        <li><a href="#" className='text-xl text-gray-300'>Contact</a></li>
                    </ul>
                </div> */}

                {/* Contact Info Section */}
                <div className="lg:w-1/4 w-full mb-8 lg:mb-0">
                    <h2 className='font-bold text-2xl text-white'>Contact Info</h2>
                    <div className='flex mt-8 text-gray-200 gap-2'>
                        <div className='flex justify-center mx-auto'>
                            <CiLocationOn className='text-white text-2xl w-7 h-7 rounded-full' />
                        </div>
                        <p className='text-lg text-gray-200'>
                            37 Station Road Harlesden, London NW10 4UP
                        </p>
                    </div>
                    <div className='flex mt-7 text-gray-200 gap-2'>
                        <div className='flex justify-center'>
                            <FaPhoneAlt className='text-white text-2xl w-7 h-7 rounded-full' />
                        </div>
                        <p className='text-lg text-gray-200'>
                            02034412280
                        </p>
                    </div>
                    <div className='flex mt-7 text-gray-200 gap-3'>
                        <FaEnvelope className='text-white text-2xl w-7 h-7 rounded-full' />
                        <p className='text-lg text-gray-200'>
                            cosine@lebanesegrill.com
                        </p>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="lg:w-1/4 w-full">
                    <h2 className='font-bold text-2xl text-white'>Newsletter</h2>
                    <p className='mt-5 text-gray-300 leading-[1.8] text-xl'>
                        Join our subscribers list to get the latest news and special offers.
                    </p>
                    <div className="mt-10">
                        <div className='flex justify-between items-center'>
                            <input
                                type="text"
                                placeholder='Your Email'
                                className='outline-none border-none p-3 bg-transparent border-b-2 border text-gray-200'
                            />
                            <FaArrowRight className='text-white cursor-pointer text-lg' />
                        </div>
                        <hr />
                        <div className='mt-3 flex items-center gap-3'>
                            <input type="checkbox" className='text-xl' />
                            <span className='text-gray-200 text-lg'>I agree to the Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
