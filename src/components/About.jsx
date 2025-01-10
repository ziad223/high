import React from 'react';
import img1 from '../../assets/about-1.png';
import img2 from '../../assets/about-2.jpg';
import img3 from '../../assets/about-3.png';
import { FaPhoneAlt } from 'react-icons/fa';

const About = () => {
    const scroll = localStorage.getItem('scroll');
    console.log(scroll);
    
    return (
        <div className="flex overflow-x-hidden w-full justify-center flex-col lg:flex-row  lg:w-[85%] my-20 mx-auto">
            {/* العنصر الأول */}
            <div className="lg:w-1/3 ] flex flex-col  w-[90%] mx-auto bg-[#faf1df] p-5  justify-center items-center">
                <img src={img1} alt="img1" />
                <div className="flex flex-col upp  justify-center text-center mt-5">
                    <h2 className='font-bold text-4xl'>Welcome To</h2>
                    <h2 className='font-bold text-4xl'>Lebanese Grill</h2>
                    <h2 className='font-bold text-4xl'>Restaurant</h2>
                    <p className='mt-7 text-gray-500 font-normal text-lg mb-3'>The first restaurant proprietor is</p>
                    <p className='text-gray-500 font-normal text-lg mb-3'>believed to have been one A.</p>
                    <p className='text-gray-500 font-normal text-lg mb-3'>Boulanger, a soup vendor, who</p>
                    <p className='text-gray-500 font-normal text-lg mb-3'>opened his business in London in</p>
                    <p className='text-gray-500 font-normal text-lg mb-3'>1765. The sign above his door</p>
                    <p className='text-gray-500 font-normal text-lg mb-3'>advertised restoratives, or</p>
                    <p className='text-gray-500 font-normal text-lg mb-3'>restaurants, referring to the soups</p>
                    <p className='text-gray-500 font-normal text-lg mb-3'>and broths available within.</p>
                </div>
                <div>
                    <div className="flex flex-col lg:flex-row mt-5">
                        <div className="lg:w-[100px] lg:h-[100px] h-20 p-10 lg:p-0 w-[200px] bg-[#db0026] flex justify-center items-center">
                            <FaPhoneAlt className='text-2xl text-white'/>
                        </div>
                        <div className='bg-white flex flex-col h-20 p-10 lg:p-0 w-[200px] lg:pl-7 justify-center gap-2 lg:w-[200px] lg:h-[100px]'>
                         <h2 className='font-bold text-gray-600 text-lg'>HOTLINE 24/7</h2>
                         <h2 className='font-bold text-black text-lg'>+473337890</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* العنصر الثاني */}
            <div className="lg:w-1/3 w-[90%]  mx-auto">
                <img src={img2} alt="img2" className='lg:h-[800px]' />
            </div>
            {/* العنصر الثالث */}
            <div
                className="lg:w-1/3 py-5 lg:py-0 w-[90%] flex-col  bg-[#db0026] mx-auto flex justify-center items-center bg-cover bg-center"
                style={{ backgroundImage: `url(${img3})` }}
            >
                    <div className='mb-10'>
                    <h2 className='text-[36px] font-bold text-white'>Opening Hours</h2>
                    </div>

                    <div className="flex justify-around w-full text-[18px] font-semibold text-white uppercase">
                        <h2 className=''>Saturday</h2>
                        <h3>11.00 pm - 02.00 am</h3>
                    </div>
                  
                <div className="flex justify-around w-full text-[18px] font-semibold text-white uppercase mt-7">
                    <h2 className=''>Sunday</h2>
                    <h3>11.00 pm - 02.00 am</h3>
                </div>
                <div className="flex justify-around w-full text-[18px] font-semibold text-white uppercase mt-7">
                    <h2 className=''>Monday </h2>
                    <h3>11.00 pm - 02.00 am</h3>
                </div>
                <div className="flex justify-around w-full text-[18px] font-semibold text-white uppercase mt-7">
                    <h2 className=''>Tuesday  </h2>
                    <h3>11.00 pm - 02.00 am</h3>
                </div>
                <div className="flex justify-around w-full text-[18px] font-semibold text-white uppercase mt-7">
                    <h2 className=''>Wednesday   </h2>
                    <h3>11.00 pm - 02.00 am</h3>
                </div>
                <div className="flex justify-around w-full text-[18px] font-semibold text-white uppercase mt-7">
                    <h2 className=''>Thursday    </h2>
                    <h3>11.00 pm - 02.00 am</h3>
                </div>
                <div className="flex justify-around w-full text-[18px] font-semibold text-white uppercase mt-7">
                    <h2 className=''>Friday     </h2>
                    <h3>11.00 pm - 02.00 am</h3>
                </div>
               
            </div>
        </div>
    );
};

export default About;
