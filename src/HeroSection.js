import React from 'react';
import './HeroSection.css';
import HeroPic from './img/restauranfood.jpg'
import Button from './Button'; // import the Button component

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1 className="hero-heading">Little Lemon</h1>
        <h2 className="hero-subheading">Chicago</h2>
        <p className="hero-paragraph">
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <Button text="Reserve a Table" />
      </div>
      <div className="hero-image">
        <img src={HeroPic} alt="Restaurant" />
      </div>
    </div>
  );
}

export default HeroSection;
