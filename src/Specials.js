import React from 'react';
import './Specials.css';
import Button from './Button';
import Card from './Card'; // import the Card component

function Specials() {
  return (
    <div className="specials">
      <div className="specials-heading">
        <h2>Specials</h2>
        <Button text="Online Menu" />
      </div>
      <div className="specials-cards">
        <Card
          imageUrl="https://via.placeholder.com/400x300"
          title="Special Dish 1"
          price="$10"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
          linkText="Order for Delivery"
        />
        <Card
          imageUrl="https://via.placeholder.com/400x300"
          title="Special Dish 2"
          price="$15"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
          linkText="Order for Delivery"
        />
        <Card
          imageUrl="https://via.placeholder.com/400x300"
          title="Special Dish 3"
          price="$12"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
          linkText="Order for Delivery"
        />
      </div>
    </div>
  );
}

export default Specials;
