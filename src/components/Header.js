import React from 'react';
import logo from './img/Logo.svg';

function Header() {
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="header-logo-container">
          <img src={logo} alt="Little Lemon Logo" className="header-logo" />
        </div>
        <nav className="main-navigation">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order-online">Order Online</a></li>
            <li><a href="#login" className="login-link">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;