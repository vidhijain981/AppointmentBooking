// src/TimePicker.js
import React from 'react';

const TimePicker = ({ timeSlots, selectedTime, onTimeChange }) => {
  return (
    <div>
      <label htmlFor="time">Select Time:</label>
      <select id="time" value={selectedTime} onChange={(e) => onTimeChange(e.target.value)}>
        <option value="" disabled>Select a time</option>
        {timeSlots.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>
    </div>
  );
};

export default TimePicker;
