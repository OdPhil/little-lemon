import React from 'react';
import './CustomersSay.css';

function CustomersSay() {
  const reviews = [
    {
      name: 'John Smith',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      rating: 4,
      review:
        'The food was amazing and the service was top-notch! Highly recommended!'
    },
    {
      name: 'Jane Doe',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      rating: 5,
      review:
        'I had the best experience at this restaurant. The food was fantastic and the staff were friendly and welcoming!'
    },
    {
      name: 'Bob Johnson',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      rating: 3,
      review:
        'The food was good, but the service was slow. Overall, it was a decent experience.'
    }
  ];

  return (
    <div className="rating-and-review">
      <h2 className="heading">Testimonials</h2>
      <div className="review-cards">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="stars">
              {Array.from({ length: review.rating }).map((_, index) => (
                <span key={index}>&#9733;</span>
              ))}
            </div>
            <div className="review-content">
              <div className="reviewer">
                <img src={review.image} alt={review.name} />
                <span>{review.name}</span>
              </div>
              <p>{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomersSay;
