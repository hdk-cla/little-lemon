// import React from 'react';
// import logo from '../img/Logo.svg';

// function Header() {
//   return (
//     <header className="main-header">
//       <div className="header-container">
//         <div className="header-logo-container">
//           <img src={logo} alt="Little Lemon Logo" className="header-logo" />
//         </div>
//         <nav className="main-navigation">
//           <ul>
//             <li><a href="#home">Home</a></li>
//             <li><a href="#about">About</a></li>
//             <li><a href="#menu">Menu</a></li>
//             <li><a href="#reservations">Reservations</a></li>
//             <li><a href="#order-online">Order Online</a></li>
//             <li><a href="#login" className="login-link">Login</a></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;

import React from 'react';
import "./Header.css";
import { Link, useLocation } from 'react-router-dom';
import logo from 'images/Logo.svg';

function Header() {
  const location = useLocation();

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.href = '/#about';
    } else {
      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo-container">
          <Link to="/">
            <img src={logo} alt="Little Lemon Logo" className="header-logo" />
          </Link>
        </div>
        <nav className="header-navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#about" onClick={handleAboutClick}>About</a></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;