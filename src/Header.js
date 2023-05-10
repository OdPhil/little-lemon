import React from 'react';
import Logo from './img/logo.png'
import './Header.css';


function Header() {
    return (
      <header className='header'>
        <img className='logo' src={Logo} alt="Logo" />
      </header>
    );
  }
  
  export default Header;
  