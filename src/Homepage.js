import React from 'react';
import HeroSection from './HeroSection';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import AboutUs from './AboutUs';


function Homepage() {
  return (
    <>
        <HeroSection />
        <Specials />
        <CustomersSay />
        <AboutUs />
    </>
  );
}

export default Homepage;
