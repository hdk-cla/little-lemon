import React from 'react';
import "./About.css";
import chefImage1 from 'images/restaurant.jpg';
import chefImage2 from 'images/Mario-and-Adrian-A.jpg';

function About() {
  return (
    <section id="about" className="about">
    <div className="about-content">
    <div className="about-text">
    <h2>Little Lemon</h2>
    <h3>Chicago</h3>
    <p>
    Little Lemon is a family-owned Mediterranean restaurant in Chicago, founded by Italian brothers Mario and Adrian. Chef Mario crafts our seasonal menu of 12 to 15 dishes, inspired by Italian, Greek, and Turkish traditions, using family recipes and his experience as a chef in Italy.
    </p>
    <p>
    Adrian, who leads our marketing, has expanded the menu beyond classic Italian cuisine to showcase the diverse flavors of the Mediterranean.
    </p>
    <p>
    With a cozy, rustic atmosphere and affordable prices, Little Lemon offers a warm and inviting space to enjoy authentic, home-cooked flavors.
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