import React from 'react';
import BookingForm from './BookingForm';
import './BookingPage.css';


function BookingPage() {
  return (
      <div className='booking-form'>
        <h2>Please make your Reservations here.</h2>
        <br />
        <BookingForm />
      </div>
  );
}

export default BookingPage;
