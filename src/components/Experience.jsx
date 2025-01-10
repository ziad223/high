import React from 'react';
import img from '../../assets/experince.png';

const Experience = () => {

    

    return (
        <div className='relative'>
            <div className='flex flex-col lg:flex-row gap-20 lg:gap-0 justify-around items-center  pt-10 '>
                <div>
                    <div className='lg:text-[100px]  hidden lg:flex flex-col p-10 uppercase font-bold leading-[100px] border-b border-b-black'>
                        <h2 >Experience</h2>
                        <h2 >of</h2>
                        <h2 >real</h2>
                        <h2 >recipes</h2>
                        <h2 >taste</h2>
                    </div>
                    <div  className='uppercase  text-left text-[40px] font-bold lg:hidden border-b border-b-black p-5'>
                        <h2>Experience of</h2>
                        <h2>real recipes</h2>
                        <h2>taste</h2>
                    </div>
                    <div>
                        <div className="flex flex-col md:flex-row lg:gap-20 items-center">
                            <div className="flex flex-col">
                                <h2 className='text-[70px] font-bold text-[#EB0029] '>98K</h2>
                                <h3 className='text-gray-400 text-[px] font-semibold'>Daily Orders</h3>
                            </div>
                            <div className="flex flex-col">
                                <h2 className='text-[70px] font-bold text-[#EB0029] '>5+</h2>
                                <h3 className='text-gray-400 text-[px] font-semibold'>Menu & Dish</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={img} alt="img" data-aos="fade-left" />
                </div>

            </div>
            <div className="absolute lg:w-[300px] w-full bg-[#EB0029] bottom-0  right-0 lg:h-full h-[150px] -z-20 lg:top-0 ">

            </div>
        </div>

    );
}

export default Experience;
