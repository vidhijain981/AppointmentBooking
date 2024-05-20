// src/AppointmentBooking.js
import React, { useState } from 'react';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import Booking from './Booking';

const availableDates = ['2024-05-21', '2024-05-22', '2024-05-23'];
const availableTimeSlots = {
  '2024-05-21': ['10:00', '11:00', '14:00'],
  '2024-05-22': ['09:00', '12:00', '15:00'],
  '2024-05-23': ['10:00', '13:00', '16:00'],
};

const AppointmentBooking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(''); // Reset time when date changes
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  return (
    <div>
      <h1>Book an Appointment</h1>
      <DatePicker dates={availableDates} selectedDate={selectedDate} onDateChange={handleDateChange} />
      {selectedDate && (
        <TimePicker
          timeSlots={availableTimeSlots[selectedDate]}
          selectedTime={selectedTime}
          onTimeChange={handleTimeChange}
        />
      )}
      {selectedTime && <Booking date={selectedDate} time={selectedTime} />}
    </div>
  );
};

export default AppointmentBooking;
