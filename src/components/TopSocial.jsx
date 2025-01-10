import React from 'react';
import img1 from '../../assets/food-menu-left-icon.png';
import img2 from '../../assets/food-menu-right-icon.png';
import special1 from '../../assets/special-1.jpg';
import special2 from '../../assets/special-2.jpg';
import special3 from '../../assets/special-3.jpg';
import special4 from '../../assets/special-4.jpg';
import banner from '../../assets/banner.jpg';

const TopSocial = () => {


    return (
        <div
            className="px-4 md:px-16 lg:px-32 pt-44 pb-20"
            style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: 'cover',       // يغطي العنصر بالكامل مع الحفاظ على نسبة العرض إلى الارتفاع
                backgroundPosition: 'center',  // يضمن أن الصورة تتمركز جيدًا
                backgroundRepeat: 'no-repeat', // يمنع تكرار الصورة
            }}
        >

            <div className="text-center">
                <div className="flex justify-center items-center gap-5">
                    <img src={img1} alt="img1" className='hidden lg:flex' data-aos="fade-right" />
                    <h2 className="uppercase font-bold text-[#EB0029] text-xl" data-aos="fade-up">Top Special</h2>
                    <img src={img2} alt="img2" className='hidden lg:flex' data-aos="fade-left" />
                </div>
                <h1 className="lg:text-[55px] font-bold mt-2 lg:mt-0">Our Specials Menu</h1>
            </div>

            {/* كروت القائمة */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* كارد 1 */}
                <div className="flex flex-col rounded-[10px] justify-center items-center p-10 bg-white">
                    <div className="relative">
                        <img
                            src={special1}
                            alt="special1"
                            className="border-[15px] border-t-[#EB0029] border-l-[#EB0029] rounded-full"
                        />
                        <div className="absolute border-2 -right-2 bottom-5 w-20 h-20 bg-[#1d2024] rounded-full flex justify-center items-center text-white text-2xl font-bold">
                            $38
                        </div>
                    </div>
                    <h2 className="my-5 text-2xl font-semi-bold">Pizza</h2>
                    <div className="w-full">
                        <hr className="w-full border-gray-400" />
                        <h3 className="my-5 text-center uppercase font-semibold text-gray-500">
                            Mutton, Olive Oil, Salt
                        </h3>
                        <hr className="w-full font-bold border-gray-400" />
                    </div>
                    <p className="text-center mt-5 text-gray-500 text-xl">
                        Considered introduced themselves mr to discretion at. Means among saw{" "}
                        <span className="lg:block">hopes.</span>
                    </p>
                </div>

                {/* كارد 2 */}
                <div className="flex flex-col rounded-[10px] justify-center items-center p-10 bg-white">
                    <div className="relative">
                        <img
                            src={special2}
                            alt="special2"
                            className="border-[15px] border-t-[#EB0029] border-l-[#EB0029] rounded-full"
                        />
                        <div className="absolute border-2 -right-2 bottom-5 w-20 h-20 bg-[#1d2024] rounded-full flex justify-center items-center text-white text-2xl font-bold">
                            $22
                        </div>
                    </div>
                    <h2 className="my-5 text-2xl font-semi-bold">Burger</h2>
                    <div className="w-full">
                        <hr className="w-full border-gray-400" />
                        <h3 className="my-5 text-center uppercase font-semibold text-gray-500">
                            Atlantic, chips, tartare
                        </h3>
                        <hr className="w-full font-bold border-gray-400" />
                    </div>
                    <p className="text-center mt-5 text-gray-500 text-xl">
                        Considered introduced themselves mr to discretion at. Means among saw{" "}
                        <span className="lg:block">hopes.</span>
                    </p>
                </div>

                {/* كارد 3 */}
                <div className="flex flex-col rounded-[10px] justify-center items-center p-10 bg-white">
                    <div className="relative">
                        <img
                            src={special3}
                            alt="special3"
                            className="border-[15px] border-t-[#EB0029] border-l-[#EB0029] rounded-full"
                        />
                        <div className="absolute border-2 -right-2 bottom-5 w-20 h-20 bg-[#1d2024] rounded-full flex justify-center items-center text-white text-2xl font-bold">
                            $16
                        </div>
                    </div>
                    <h2 className="my-5 text-2xl font-semi-bold">Lemonade</h2>
                    <div className="w-full">
                        <hr className="w-full border-gray-400" />
                        <h3 className="my-5 text-center uppercase font-semibold text-gray-500">
                            Ricotta, goat cheese, beetroot
                        </h3>
                        <hr className="w-full font-bold border-gray-400" />
                    </div>
                    <p className="text-center mt-5 text-gray-500 text-xl">
                        Considered introduced themselves mr to discretion at. Means among saw{" "}
                        <span className="lg:block">hopes.</span>
                    </p>
                </div>

                {/* كارد 4 */}
                <div className="flex flex-col rounded-[10px] justify-center items-center p-10 bg-white">
                    <div className="relative">
                        <img
                            src={special4}
                            alt="special4"
                            className="border-[15px] border-t-[#EB0029] border-l-[#EB0029] rounded-full"
                        />
                        <div className="absolute border-2 -right-2 bottom-5 w-20 h-20 bg-[#1d2024] rounded-full flex justify-center items-center text-white text-2xl font-bold">
                            $25
                        </div>
                    </div>
                    <h2 className="my-5 text-2xl font-semi-bold">Chicken Popeyes</h2>
                    <div className="w-full">
                        <hr className="w-full border-gray-400" />
                        <h3 className="my-5 text-center uppercase font-semibold text-gray-500">
                            Ricotta, goat cheese, beetroot
                        </h3>
                        <hr className="w-full font-bold border-gray-400" />
                    </div>
                    <p className="text-center mt-5 text-gray-500 text-xl">
                        Considered introduced themselves mr to discretion at. Means among saw{" "}
                        <span className="lg:block">hopes.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TopSocial;
