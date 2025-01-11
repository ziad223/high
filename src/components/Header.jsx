import React from 'react';
import Navbar from './Navbar';
import hero from '../../hero.mp4'
const Header = () => {
    return (
        <div id='home' className="relative h-screen w-full  overflow-x-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={hero}
                autoPlay
                loop
                muted
                playsInline
            ></video>




            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

            {/* Navbar */}
            <div className="relative z-10">
                <Navbar />
            </div>


           
        </div>
    );
};

export default Header;
