import React from 'react';
import './Specials.css';
import Button from './Button';
import Card from './Card'; // import the Card component
import GreekSalad from './img/greek-salad.jpg';
import Bruschetta from './img/bruschetta.jpg';
import LemonDessert from './img/lemon-dessert.jpg';

function Specials() {
  return (
    <div className="specials">
      <div className="specials-heading">
        <h2>Specials</h2>
        <Button text="Online Menu" />
      </div>
      <div className="specials-cards">
        <Card
          imageUrl={GreekSalad}
          title="Greek Salad"
          price="$12.99"
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
          linkText="Order for Delivery"
        />
        <Card
          imageUrl={Bruschetta}
          title="Bruschetta"
          price="$5.99"
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
          linkText="Order for Delivery"
        />
        <Card
          imageUrl={LemonDessert}
          title="Lemon Dessert"
          price="$5.00"
          description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          linkText="Order for Delivery"
        />
      </div>
    </div>
  );
}

export default Specials;
