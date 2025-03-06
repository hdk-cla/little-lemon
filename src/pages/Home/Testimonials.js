import React from 'react';
import "./Testimonials.css";
import profileImage1 from 'images/profile1.jpg';
import profileImage2 from 'images/profile2.jpg';
import profileImage3 from 'images/profile3.jpg';
import profileImage4 from 'images/profile4.jpg';

function Testimonials() {
  const testimonials = [
    {
      name: "Michael Tan",
      image: profileImage1,
      rating: 5,
      review: "Amazing Mediterranean cuisine! The flavors transport me back to my travels."
    },
    {
      name: "Sarah Johnson",
      image: profileImage2,
      rating: 5,
      review: "Best Greek salad in Chicago. The ingredients are always fresh and delicious."
    },
    {
      name: "David Rodriguez",
      image: profileImage3,
      rating: 5,
      review: "Great atmosphere and incredible food. A must-visit restaurant in the city!"
    },
    {
      name: "Emma Smith",
      image: profileImage4,
      rating: 5,
      review: "Authentic recipes with a modern twist. Absolutely loved every dish!"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`star ${index < rating ? 'filled' : ''}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-rating">
              {renderStars(testimonial.rating)}
            </div>
            <div className="testimonial-profile">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <h3>{testimonial.name}</h3>
            <p>"{testimonial.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;