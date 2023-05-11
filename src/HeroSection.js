import React from 'react';
import './HeroSection.css';
import Button from './Button'; // import the Button component

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1 className="hero-heading">Welcome to our Restaurant</h1>
        <h2 className="hero-subheading">Experience the best flavors in town</h2>
        <p className="hero-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <Button text="Reserve a Date" />
      </div>
      <div className="hero-image">
        <img src="https://via.placeholder.com/400x400" alt="Restaurant" />
      </div>
    </div>
  );
}

export default HeroSection;
