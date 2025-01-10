import React from 'react';
import { FaStar } from 'react-icons/fa6';
import test1 from '../../assets/test-1.jpg';
import test2 from '../../assets/test-2.jpg';
import test3 from '../../assets/test-3.jpg';
import test4 from '../../assets/test-4.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Testimonails = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoPlaySpeed: 3000,
        slidesToScroll: 1,
        customPaging: (i) => (
            <div
                className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 mt-5 ${i === 0 ? 'border-gray-400' : 'border-gray-400'}`}
            >
                <div
                    className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-gray-400' : 'bg-gray-400'}`}
                />
            </div>
        ),
        appendDots: (dots) => (
            <ul style={{ display: 'flex', justifyContent: 'center' }}>{dots}</ul>
        ),
    };





  return (
      <div id='Testimonials' className='bg-[#1d2024] py-[60px] max-w-[100%] overflow-x-hidden'>
     <Slider {...settings}>
              <div className='mx-auto lg:w-[60%] text-center'>
                  <div className='flex justify-center gap-2'>
                      <FaStar className='text-yellow-500 text-lg' />
                      <FaStar className='text-yellow-500 text-lg' />
                      <FaStar className='text-yellow-500 text-lg' />
                      <FaStar className='text-yellow-500 text-lg' />
                      <FaStar className='text-yellow-500 text-lg' />
                  </div>
                  <h2 className='mt-5 mb-10 text-gray-100  font-semibold text-4xl'>The Pizza is so good</h2>
                  <p className='lg:text-[35px] text-gray-300 lg:w-[60%] w-[90%] mx-auto'>

                      "Thanks to your web agency team for their professional work. The website they created for my business exceeded my expectations, and my clients have given positive feedback about its design and user-friendliness."
                  </p>
                  <div className='mt-10 flex justify-center gap-5'>
                      <img
                          src={test1}
                          alt="test1"
                          className="border-8 lg:w-[200px] lg:h-[200px]  w-[160px] h-[160px]"
                          style={{ transform: 'rotate(10deg)' }}
                      />

                      <img
                          src={test2}
                          alt="test2"
                          className="border-8 lg:w-[200px] lg:h-[200px]  w-[160px] h-[160px] mt-14 -ml-14"
                          style={{ transform: 'rotate(-10deg)' }}
                      />
                  </div>
              </div>
              <div className='mx-auto lg:w-[60%] text-center'>
                  <div className='flex justify-center gap-2'>
                      <FaStar className='text-yellow-500 text-lg' />
                      <FaStar className='text-yellow-500 text-lg' />
                      <FaStar className='text-yellow-500 text-lg' />
                      <FaStar className='text-yellow-500 text-lg' />
                      <FaStar className='text-yellow-500 text-lg' />
                  </div>
                  <h2 className='mt-5 mb-10 text-gray-100  font-semibold text-4xl'>The Pizza is so good</h2>
                  <p className='lg:text-[35px] text-gray-300 lg:w-[60%] w-[90%] mx-auto'>

                      "Thanks to your web agency team for their professional work. The website they created for my business exceeded my expectations, and my clients have given positive feedback about its design and user-friendliness."
                  </p>
                  <div className='mt-10 flex justify-center gap-5'>
                      <img
                          src={test3}
                          alt="test3"
                          className="border-8 lg:w-[200px] lg:h-[200px]  w-[160px] h-[160px] "
                          style={{ transform: 'rotate(10deg)' }}
                      />

                      <img
                          src={test4}
                          alt="test4"
                          className="border-8 lg:w-[200px] lg:h-[200px] w-[160px] h-[160px] mt-14 -ml-14"
                          style={{ transform: 'rotate(-10deg)' }}
                      />
                  </div>
              </div>
     </Slider>
    </div>
  );
}

export default Testimonails;
