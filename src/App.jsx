import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import ResMenu from './components/ResMenu';
import TopSocial from './components/TopSocial';
import Experience from './components/Experience';
import Testimonails from './components/Testimonails';
import Cards from './components/Cards';
import Footer from './components/Footer';


const App = () => {
  const [scrolling, setScrolling] = useState(false);

  // Effect to detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='font-helvetica con' >
      <Header scrolling={scrolling} />
      <About />
      <ResMenu />
      <TopSocial />
      <Experience />
      <Testimonails />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
