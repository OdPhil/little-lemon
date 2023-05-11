import React from 'react';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import {Routes, Route} from 'react-router-dom';
import AboutUs from './AboutUs';

function Main() {
  return (
    <main>
        <Routes>
            <Route path="/" element = {<Homepage />} />
            <Route path="/booking-page" element = {<BookingPage />} />
            <Route path="/about-us" element = {<AboutUs />} />
        </Routes>
    </main>
  );
}

export default Main;
