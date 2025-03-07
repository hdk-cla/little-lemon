import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import './BookingPage.css';

function BookingPage({ availableTimes, updateTimes, submitForm }) {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    submitForm(formData, navigate);
  };

  return (
    <div className="booking-page">
      <div className="booking-container">
        <h1>Reserve a Table</h1>
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={updateTimes}
          submitForm={handleSubmit}
        />
      </div>
    </div>
  );
}

export default BookingPage;