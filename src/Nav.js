import React from 'react';
import './Nav.css';
import {Routes, Route, Link} from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          {/* <a href={"/"} className="nav-link">Home</a> */}
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          {/* <a href="/BookingPage" className="nav-link">Reservations</a> */}
          <Link to="/booking-page" className="nav-link">Reservations</Link>
        </li>
        <li className="nav-item">
          <a href="/Specials" className="nav-link">Menu</a>
        </li>
        <li className="nav-item">
          {/* <a href="/about" className="nav-link">About Us</a> */}
          <Link to="/about-us" className="nav-link">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
