import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div id='home' className="relative h-screen w-full  overflow-x-hidden">
            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src='https://www.youtube.com/watch?v=xPPLbEFbCAo'
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
