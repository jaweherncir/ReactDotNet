import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

function InterviewCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [interviewDates, setInterviewDates] = useState([]);

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

  const handleAddInterviewDate = () => {
    if (selectedDate && !interviewDates.includes(selectedDate)) {
      setInterviewDates([...interviewDates, selectedDate]);
      setSelectedDate(null);
    }
  };

  return (
    <div className="calendar-wrapper">
      <div className="calendar-container">
        <h1>Calendrier d'entretiens</h1>
        <div className="calendar">
          <div className="calendar-left">
            <Calendar
              value={selectedDate}
              onChange={handleSelectDate}
            />
            <button onClick={handleAddInterviewDate}>Ajouter</button>
          </div>
          <div className="calendar-right">
            <h2>Dates disponibles :</h2>
            <ul>
              {interviewDates.map((date, index) => (
                <li key={index}>{date.toLocaleDateString()}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterviewCalendar;
