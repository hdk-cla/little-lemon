import React from 'react';
import chefImage1 from './img/restaurant.jpg';
import chefImage2 from './img/restaurant-chef-B.jpg';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Little Lemon is a charming family-owned Mediterranean restaurant that brings the warmth of traditional recipes to the heart of Chicago.
            Founded by Mario and Adrian, our passion is to create authentic dishes that tell a story of family, culture, and culinary tradition.
          </p>
          <p>
            Our chefs carefully craft each dish using time-honored recipes passed down through generations, while adding a modern twist that makes our cuisine uniquely Little Lemon.
          </p>
        </div>
        <div className="about-images">
          <div className="about-image-container">
            <img
              src={chefImage1}
              alt="Chef Mario preparing a dish"
              className="about-image about-image-1"
            />
            <img
              src={chefImage2}
              alt="Chef Adrian cooking"
              className="about-image about-image-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;