import React from 'react';
import "./Footer.css";
import footerLogo from 'images/footer-logo.png';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={footerLogo} alt="Little Lemon Logo" />
        </div>

        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order-online">Order Online</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>2314 W Fullerton Ave</li>
            <li>Chicago, IL 60647</li>
            <li>Tel: (312) 456-7890</li>
            <li>Email: info@littlelemon.com</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Social Media</h4>
          <ul className="social-links">
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://x.com"> X (formerly Twitter)</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Little Lemon Restaurant. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;