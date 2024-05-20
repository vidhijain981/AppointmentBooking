// src/Booking.js
import React from 'react';

const Booking = ({ date, time }) => {
  const handleBooking = () => {
    // Implement booking logic here, e.g., sending data to the server
    alert(`Appointment booked for ${date} at ${time}`);
  };

  return (
    <div>
      <h2>Booking Details</h2>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <button onClick={handleBooking}>Confirm Booking</button>
    </div>
  );
};

export default Booking;
