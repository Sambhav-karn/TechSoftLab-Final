import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './common/Header.jsx';
import Footer from './common/Footer.jsx';

export default function RootLayout() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // Scrolling down and past 50px threshold
      setIsHeaderVisible(false);
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up
      setIsHeaderVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // Dependency on lastScrollY to update scroll position

  return (
    <div>
      <div 
        className={`sticky top-0 z-10 transition-transform duration-300 ease-in-out ${
          isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}