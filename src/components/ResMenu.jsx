import React from 'react';
import FoodMenu from './FoodMenu';

const ResMenu = () => {
    return (
        <div id='menus' className="">
                <div className="text-center">
                <h1 className="text-4xl font-bold text-[#db0026]">Discover Our Delicious Menu!</h1>
                    <p className="text-lg text-gray-600 mt-2">Fresh, tasty, and made with love!</p>
        </div>

          
            <div className='mt-10'>
                <FoodMenu />
            </div>
            </div>
    );
};

export default ResMenu;
