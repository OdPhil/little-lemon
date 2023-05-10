import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="/reservations" className="nav-link">Reservations</a>
        </li>
        <li className="nav-item">
          <a href="/menu" className="nav-link">Menu</a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">About Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
