import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ConfirmedBooking.css';

function ConfirmedBooking() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="confirmation-page">
      <div className="confirmation-container">
        <h1>Booking Confirmed!</h1>
        <p>Thank you for your reservation at Little Lemon.</p>
        <p>We look forward to serving you!</p>
        <button
          className="back-to-home-button"
          onClick={handleBackToHome}
          aria-label="Back to home"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default ConfirmedBooking;