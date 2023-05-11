import React from 'react';
import './Footer.css';
import Logo from './img/logo.png'
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <a href="#">Home</a>
        <a href="#">Reservations</a>
        <a href="#">Menu</a>
        <a href="#">About Us</a>
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
