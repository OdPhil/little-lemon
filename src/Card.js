import React from 'react';
import './Card.css';

function Card({ imageUrl, title, price, description, linkText }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p className="price">{price}</p>
      <p className="description">{description}</p>
      <a href="#" className="link">{linkText}</a>
    </div>
  );
}

export default Card;
