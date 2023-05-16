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
          In the bustling city of Chicago, there is a charming restaurant called Little Lemon, owned by Mario and Adrian. It exudes warmth, hospitality, and offers delicious food that enchants the taste buds. Mario, with his culinary prowess, crafts delectable flavors that dance on the palate, while Adrian ensures that every guest feels like a cherished friend with his warm smile and genuine care. Little Lemon is a culinary haven that celebrates the art of food and creates a welcoming atmosphere for all who visit.
<br />
Mario and Adrian pour their hearts and souls into Little Lemon, sourcing fresh ingredients from local farmers and artisans to create dishes that are a celebration of quality and flavor. The restaurant has become a culinary gem, attracting both locals and tourists with its enticing aromas and vibrant atmosphere. Little Lemon is not just a place to eat but a place where cherished memories are made, where celebrations are elevated, and where people find solace in the simple joy of a good meal shared with loved ones. Mario and Adrian's passion, talent, and genuine care have created a magical dining experience that continues to bring smiles and joy to all who visit Little Lemon.
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
