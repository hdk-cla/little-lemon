import React, { useState } from 'react';
import "./BookingForm.css";

function BookingForm({ availableTimes, updateTimes, submitForm }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '1',
    occasion: 'noocation',
    specialRequests: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'date') {
      updateTimes(value);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
    }

    if (!formData.time) {
      newErrors.time = 'time is required';
    }

    if (!formData.guests) {
      newErrors.guests = 'number of guests is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      submitForm(formData);

      setFormData({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: '1',
        occasion: 'nooccation',
        specialRequests: ''
      });
      setErrors({});
    }
  };

  return (
    <form className="booking-form"
    onSubmit={handleSubmit}>
    <div className="form-group">
    <label htmlFor="name">Name <span className="required">*</span></label>
    <input
    type="text"
    id="name"
    name="name"
    value={formData.name}
    onChange={handleChange}
    required
    className={errors.name ? 'error' : ''}
    />
    {errors.name && <span className="error-message">{errors.name}</span>}
    </div>

    <div className="form-group">
    <label htmlFor="email">Email <span className="required">*</span></label>
    <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    required
    />
    </div>

    <div className="form-group">
    <label htmlFor="date">Date <span className="required">*</span></label>
    <input
    type="date"
    id="date"
    name="date"
    value={formData.date}
    onChange={handleChange}
    required
    min={new Date().toISOString().split('T')[0]}
    className={errors.date ? 'error' : ''}
    />
    </div>

    <div className="form-group">
    <label htmlFor="time">Time <span className="required">*</span></label>
    <select
    id="time"
    name="time"
    value={formData.time}
    onChange={handleChange}
    required
    >
    <option value="">Select a time</option>
    {availableTimes.map(time => (
      <option key={time} value={time}>{time}</option>
    ))}
    </select>
    </div>

    <div className="form-group">
    <label htmlFor="guests">Number of Guests <span className="required">*</span></label>
    <select
    id="guests"
    name="guests"
    value={formData.guests}
    onChange={handleChange}
    required
    >
    {[...Array(10)].map((_, i) => (
      <option key={i + 1} value={i + 1}>{i + 1}</option>
    ))}
    </select>
    </div>

    <div className="form-group">
    <label htmlFor="occasion">Occasion</label>
    <select
    id="occasion"
    name="occasion"
    value={formData.occasion}
    onChange={handleChange}
    >
    <option value="nooccation">No Occation</option>
    <option value="birthday">Birthday</option>
    <option value="anniversary">Anniversary</option>
    <option value="business">Business Meeting</option>
    <option value="other">Other</option>
    </select>
    </div>

    <div className="form-group">
    <label htmlFor="specialRequests">Special Requests</label>
    <textarea
    id="specialRequests"
    name="specialRequests"
    value={formData.specialRequests}
    onChange={handleChange}
    rows="4"
    placeholder="Please let us know if you have any special requests or dietary requirements"
    />
    </div>

    <button
    type="submit"
    className="submit-button"
    >
    Make Your Reservation
    </button>
    </form>
  );
}

export default BookingForm;