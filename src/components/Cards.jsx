import React from 'react';
import card1 from '../../assets/card-1.png';
import card2 from '../../assets/card-2.png';
import card3 from '../../assets/card-3.png';
import card4 from '../../assets/card-4.png';

const Cards = () => {
    return (
        <div className='my-20 flex justify-center mx-auto gap-5 flex-col lg:flex-row lg:w-[80%]'>
            <div className="w-[90%] mx-auto lg:w-1/4 bg-gray-200 flex flex-col justify-center items-center p-5 rounded-xl">
                <img src={card1} alt="card1" />
                <h2 className='font-bold mt-10 text-2xl'>Best Quality Food</h2>
                <p className='mt-4 leading-[2] text-gray-600 font-normal lg:w-[80%] text-[18px] mx-auto'>
                    Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.
                </p>
            </div>

            <div className="w-[90%] mx-auto lg:w-1/4 bg-gray-200 flex flex-col justify-center items-center p-5 rounded-xl">
                <p className='mt-4 leading-[2] text-gray-600 font-normal lg:w-[80%] text-[18px] mx-auto'>
                    Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.
                </p>
                <h2 className='font-bold mt-5 text-2xl'>Home delivery</h2>
                <img src={card2} alt="card2" className='mt-10' />
            </div>

            <div className="w-[90%] mx-auto  lg:w-1/4 bg-gray-200 flex flex-col justify-center items-center p-5 rounded-xl">
                <img src={card3} alt="card3" />
                <h2 className='font-bold mt-10 text-2xl'>Real Taste</h2>
                <p className='mt-4 leading-[2] text-gray-600 font-normal lg:w-[80%] text-[18px] mx-auto'>
                    Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.
                </p>
            </div>

            <div className="w-[90%] mx-auto  lg:w-1/4 bg-gray-200 flex flex-col justify-center items-center p-5 rounded-xl">
                <p className='mt-4 leading-[2] text-gray-600 font-normal lg:w-[80%] text-[18px] mx-auto'>
                    Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.
                </p>
                <h2 className='font-bold mt-5 text-2xl'>Traditional food</h2>
                <img src={card4} alt="card4" className='mt-10' />
            </div>
        </div>
    );
};

export default Cards;
