import React, { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import logo from '../../assets/logo-2.png';
import logo2 from '../../assets/logo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    // Effect to detect scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
                localStorage.setItem('scroll', scrolling);
            } else {
                setScrolling(false);
                localStorage.setItem('scroll', scrolling);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolling]);

    // Function to handle smooth scroll
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth',
        });
    };

    return (
        <div className="w-full overflow-x-hidden">
            <div
                className={`px-4 md:px-16 lg:px-44 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 ${scrolling
                        ? 'bg-white fixed py-5 w-full top-0 left-0 shadow-lg transition-all ease-in-out duration-300 z-50'
                        : 'pt-10 '
                    }`}
            >
                {/* Left Links */}
                <ul className="hidden md:flex flex-row justify-center items-center gap-10">
                    <li>
                        <button
                            onClick={() => scrollToSection('home')}
                            className={`${scrolling ? 'text-black' : 'text-white '
                                } hover:text-[#db0026] duration-300 transition font-bold text-xl`}
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('Testimonials')}
                            className={`${scrolling ? 'text-black' : 'text-white '
                                } hover:text-[#db0026] duration-300 transition font-bold text-xl`}
                        >
                            Testimonials
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('menus')}
                            className={`${scrolling ? 'text-black' : 'text-white '
                                } hover:text-[#db0026] duration-300 transition font-bold text-xl`}
                        >
                            Menus
                        </button>
                    </li>
                </ul>

                {/* Logo */}
                <div>
                    {scrolling ? 
                        <img
                            src={logo2}
                    alt="logo"
                    className="w-[150px] lg:w-[170px] hidden lg:block"
                    /> : 
                    <img
                        src={logo}
                        alt="logo"
                        className="w-[150px] lg:w-[220px] hidden lg:block"
                    />
                   }
                   
                   
                </div>

                {/* Right Links */}
                <ul className="hidden md:flex flex-row justify-center items-center gap-5">
                    <li>
                        <button
                            onClick={() => scrollToSection('home')}
                            className={`${scrolling ? 'text-black' : 'text-white '
                                } hover:text-[#db0026] duration-300 transition font-bold text-xl`}
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('Testimonials')}
                            className={`${scrolling ? 'text-black' : 'text-white '
                                } hover:text-[#db0026] duration-300 transition font-bold text-xl`}
                        >
                            Testimonials
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('menus')}
                            className={`${scrolling ? 'text-black' : 'text-white '
                                } hover:text-[#db0026] duration-300 transition font-bold text-xl`}
                        >
                            Menus
                        </button>
                    </li>
                </ul>

                {/* Menu Icon for small screens */}
                <div className="md:hidden flex justify-between items-center w-full">
                    <img src={logo} alt="logo" className="w-[100px]" />
                    <FiMenu
                        className="text-black text-3xl cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                </div>

                {/* Dropdown Menu for small screens */}
                {menuOpen && (
                    <ul className="flex flex-col items-center w-full left-0 gap-5 z-20 bg-white p-4 rounded-md absolute top-[160px] right-4 md:hidden">
                        <li>
                            <button
                                onClick={() => scrollToSection('home')}
                                className="text-black font-bold text-xl hover:text-[#db0026] duration-300 transition"
                            >
                                Home
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('Testimonials')}
                                className="text-black font-bold text-xl hover:text-[#db0026] duration-300 transition"
                            >
                                Testimonials
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('menus')}
                                className="text-black font-bold text-xl hover:text-[#db0026] duration-300 transition"
                            >
                                Menus
                            </button>
                        </li>
                    </ul>
                )}
            </div>
            <hr className="mt-7 bg-gray-500 h-[1px] border-none" />
            <div className="">
                <div className="text-center text-white lg:-mt-2 mt-5 mb-10" data-aos="fade-up">
                    <h4 className="lg:text-[50px] text-3xl font-bold">THE GREAT</h4>
                    <h1 className="lg:text-[150px] text-6xl font-bold uppercase" >Restaurant</h1>
                </div>
                <div className="relative mx-auto -z-1 flex flex-col   items-center justify-center w-72 h-48 border-l-2 border-r-2 border-b-2 border-gray-100" data-aos="fade-up">
                    {/* الخطوط الممتدة من اليمين واليسار */}
                    <div className="absolute left-0 right-0 top-0 flex justify-between items-center -translate-y-1/2">
                        {/* الخط الأيسر */}
                        <div className="w-24 h-[2px] bg-gray-100"></div>
                        {/* النص "Since" */}
                        <div className="text-xl text-white px-4">Since</div>
                        {/* الخط الأيمن */}
                        <div className="w-24 h-[2px] bg-gray-100"></div>
                    </div>
                    {/* محتوى داخل المربع */}
                    <div className="text-[80px] font-bold text-gray-100" >1856</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
