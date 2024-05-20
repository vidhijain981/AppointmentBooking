// src/DatePicker.js
import React from 'react';

const DatePicker = ({ dates, selectedDate, onDateChange }) => {
  return (
    <div>
      <label htmlFor="date">Select Date:</label>
      <select id="date" value={selectedDate} onChange={(e) => onDateChange(e.target.value)}>
        <option value="" disabled>Select a date</option>
        {dates.map((date) => (
          <option key={date} value={date}>{date}</option>
        ))}
      </select>
    </div>
  );
};

export default DatePicker;
