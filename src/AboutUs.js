import React from 'react';
import './AboutUs.css';
import image1 from './img/Mario-and-Adrian-A.jpg';
import image2 from './img/Mario-and-Adrian-b.jpg';

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us-left">
        <h2 className="heading">About Us</h2>
        <h3 className="subheading">Our Story</h3>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non
          vestibulum lacus. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Suspendisse sollicitudin sapien
          augue, vel laoreet nibh porttitor id. Sed ut augue eleifend, semper
          neque eu, sollicitudin odio. Morbi euismod sapien quis felis suscipit,
          vel feugiat mauris viverra. Nunc eget faucibus arcu. Suspendisse
          vehicula gravida lorem, ut dictum nisl rutrum at. Donec vestibulum
          mauris vitae massa efficitur, eget elementum lacus lacinia. Aliquam
          maximus lobortis enim ac sollicitudin.
        </p>
      </div>
      <div className="about-us-right">
        <div className="image-container">
          <img className="image1" src={image1} alt="1" />
          <img className="image2" src={image2} alt="2" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
