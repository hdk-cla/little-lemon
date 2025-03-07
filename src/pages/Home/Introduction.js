import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Introduction.css";
import restauranfood from 'images/restauranfood.jpg';

function Introduction() {
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate('/booking');
  };

  return (
    <introduction className="introduction">
      <div className="introduction-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button
          className="reserve-btn"
          onClick={handleReserveClick}
          aria-label="Reserve a table"
        >
          Reserve a Table
        </button>
      </div>
      <div className="introduction-image">
        <img src={restauranfood} alt="restauranfood" />
      </div>
    </introduction>
  );
}

export default Introduction;