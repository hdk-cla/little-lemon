import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './Reservations.css';

function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: null,  // dateをnullで初期化
    time: '',
    guests: '1',
    occasion: 'birthday',
    specialRequests: ''
  });

  // 利用可能な最小日付を設定（今日から）
  const minDate = new Date();
  // 利用可能な最大日付を設定（3ヶ月先まで）
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date: date
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    // ここに予約処理のロジックを追加
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const timeSlots = [];
  for (let hour = 11; hour <= 21; hour++) {
    for (let minute of ['00', '30']) {
      timeSlots.push(`${hour.toString().padStart(2, '0')}:${minute}`);
    }
  }

  return (
    <div className="reservations">
      <div className="reservations-container">
        <h1>Reserve a Table</h1>
        <form onSubmit={handleSubmit} className="reservation-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <DatePicker
              selected={formData.date}
              onChange={handleDateChange}
              dateFormat="MMMM d, yyyy"
              minDate={minDate}
              maxDate={maxDate}
              placeholderText="Select a date"
              required
              className="date-picker"
              id="date"
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Time</label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option value="">Select a time</option>
              {timeSlots.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>

          <div className="form-group">
            <label htmlFor="guests">Number of Guests</label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              required
            >
             {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
              <option value="more">More than 10 people</option>
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

          <button type="submit" className="submit-button">Make Reservation</button>
        </form>
      </div>
    </div>
  );
}

export default Reservations;