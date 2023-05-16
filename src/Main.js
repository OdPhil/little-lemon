import React, { useReducer, useEffect } from 'react';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import {Routes, Route} from 'react-router-dom';
import AboutUs from './AboutUs';
import BookingForm from './BookingForm';
import Specials from './Specials';

function Main() {
  const [availableTimes, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'FETCH_SUCCESS':
          return action.payload;
        default:
          throw new Error(`Unhandled action type: ${action.type}`);
      }
    },
    []
  );

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/available-times?date=${today}`);
        const data = await response.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const updateTimes = async (selectedDate) => {
    try {
      const response = await fetch(`/api/available-times?date=${selectedDate}`);
      const data = await response.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
        <Routes>
            <Route path="/" element = {<Homepage />} />
            <Route path="/booking-page" element = {<BookingPage />} />
            <Route path="/about-us" element = {<AboutUs />} />
            <Route
              path="/booking-form"
              element={<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />}
            />
            <Route path="/specials" element = {<Specials />} />
        </Routes>
    </main>
  );
}

export default Main;
