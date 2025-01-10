import React from 'react';
import img1 from '../../assets/food-menu-left-icon.png';
import img2 from '../../assets/food-menu-right-icon.png';
import menu1 from '../../assets/menu-1.png';
import menu2 from '../../assets/menu-2.png';
import menu3 from '../../assets/menu-3.png';
import menu4 from '../../assets/menu-10.jpg'; // صورة جديدة للبطاقة

const FoodMenu = () => {
  return (
    <div className="mt-20 bg-[#151515] p-10 lg:px-20">
      {/* Section Header */}
      <div className="text-center flex-col mt-5 lg:mt-20 md:flex-row flex justify-center gap-5">
        <img src={img1} alt="img1" data-aos="fade-right" />
        <h2 className="font-bold text-[20px] text-white uppercase" data-aos="fade-up">
          Food Menu
        </h2>
        <img src={img2} alt="img2" data-aos="fade-left" />
      </div>

      <h2 className="text-[32px] lg:text-[55px] font-bold text-center my-10 lg:mt-0 text-white" data-aos="fade-up">
        Discover Our Menu
      </h2>

      {/* Menu Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:w-[90%] w-full mx-auto">
        <CardComponent img={menu1} title="Shawarma" items={shawarmaItems} />
        <CardComponent img={menu2} title="Kebabs" items={kebabItems} />
        <CardComponent img={menu3} title="Grilled Items" items={grilledItems} />
        <CardComponent img={menu4} title="Chips" items={chipsItems} />
      </div>
    </div>
  );
};

const CardComponent = ({ img, title, items }) => (
  <div className="bg-[#211f20] p-5 rounded-3xl flex flex-col items-center text-center">
    <div className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] p-5 border rounded-full border-gray-600 bg-transparent">
      <img src={img} alt={title} className="rounded-full w-full h-full" />
    </div>
    <h2 className="mt-10 text-[24px] md:text-[30px] font-semibold text-[#EB0029]">{title}</h2>
    {items.map((item, index) => (
      <div className="flex justify-between w-full mt-5 text-white text-lg" key={index}>
        <h3>{item.name}</h3>
        <h3>{item.price}</h3>
      </div>
    ))}
  </div>
);

const shawarmaItems = [
  { name: 'Chicken Shawarma Wrap', price: '£5.99' },
  { name: 'Lamb Shawarma Wrap', price: '£6.49' },
  { name: 'Mixed Shawarma Wrap', price: '£6.49' },
  { name: 'Chicken Shawarma box with chips', price: '£7.49' },
  { name: 'Lamb Shawarma box with chips', price: '£7.99' },
  { name: 'Mixed Shawarma box with chips', price: '£6.99' },
  { name: 'Chicken Shawarma box with spicy rice', price: '£8.49' },
  { name: 'Lamb Shawarma box with spicy rice', price: '£8.99' },
];

const kebabItems = [
  { name: 'Kofte kebab wrap (Small)', price: '£5.49' },
  { name: 'Kofte kebab wrap (Large)', price: '£6.99' },
  { name: 'Kofte kebab box with chips (Small)', price: '£6.99' },
  { name: 'Kofte kebab box with chips (Large)', price: '£8.99' },
  { name: 'Lamb Shish Wrap (Small)', price: '£5.49' },
  { name: 'Lamb Shish Wrap (Large)', price: '£7.49' },
  { name: 'Mixed Shish Wrap', price: '£8.49' },
  { name: 'Lamb Shish box with chips (Small)', price: '£6.99' },
  { name: 'Lamb Shish box with chips (Large)', price: '£9.49' },
];

const grilledItems = [
  { name: 'Grilled Wings only', price: '£4.50' },
  { name: 'Grilled Wings with chips', price: '£6.49' },
  { name: 'Half Grilled Boneless Chicken with chips', price: '£6.99' },
  { name: 'Whole Grilled Chicken with chips', price: '£11.99' },
  { name: 'Mixed Grilled only', price: '£14.00' },
  { name: 'Mixed Grilled with chips', price: '£14.99' },
  { name: 'Lamb Chops with chips', price: '£14.99' },
  { name: 'Grilled Sea Bass Fish', price: '£11.99' },
];

const chipsItems = [
  { name: 'CHIPS (Small)', price: '£1.99' },
  { name: 'CHIPS (Large)', price: '£2.49' },
  { name: 'CHIPS WRAP', price: '£4.99' },
  { name: 'VINE LEAVES', price: '£4.99' },
  { name: 'HUMUS', price: '£4.99' },
  { name: 'KEBA', price: '£4.99' },
  { name: 'TABOULA', price: '£4.99' },
];

export default FoodMenu;
