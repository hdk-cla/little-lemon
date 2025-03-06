import React from 'react';
import "./Introduction.css";
import restauranfood from 'images/restauranfood.jpg';

function Introduction() {
  return (
    <introduction className="introduction">
      <div className="introduction-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipies served with a modern twist.</p>
        <button className="reserve-btn">Reserve a Table</button>
      </div>
      <div className="introduction-image">
      <img src={restauranfood} alt="restauranfood"  />
      </div>
    </introduction>
  );
}

export default Introduction;