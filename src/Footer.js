import React from 'react';
import './Footer.css';
import Logo from './img/logo.png'
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import {Routes, Route, Link} from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
      <Link to="/" className="footer-links">Home</Link>
      <Link to="/booking-page" className="footer-links">Reservations</Link>
        <a href="#">Menu</a>
      <Link to="/about-us" className="footer-links">About Us</Link>
      </div>
      <div className="social-media">
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaTiktok />
        </a>
      </div>
      <div className="copyright">
        <div className="logo">
          <img src={Logo} alt="Little Lemon" />
        </div>
        <div className="copy">
          <p>© 2023 Little Lemon. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
