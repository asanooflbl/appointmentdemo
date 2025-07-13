import React, { useEffect, useState } from 'react'
import './CalendarPage.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import AppointmentForm from '../Components/Appointment/AppointmentForm';

function CalendarPage() {
      const [date, setDate] = useState(new Date());
      const [appointments, setAppointments] = useState({});

       const formattedDate = date.toDateString();

       useEffect(() => {
         const stored = localStorage.getItem('appointments');
         if (stored) {
            setAppointments(JSON.parse(stored));
        }
       }, []);
       
       useEffect(() => {
            localStorage.setItem('appointments', JSON.stringify(appointments));
       }, [appointments]);

        const handleAddAppointment = (newAppt) => {
           const updated = { ...appointments,[formattedDate]: [...(appointments[formattedDate] || []), newAppt]
    };
    setAppointments(updated);
  };

  return (
    <div className='calendar-main'>
         <h2>Appointments Calendar</h2>

         <Calendar onChange={setDate} value={date} />

      <div className="selected-date">
         <h3>{formattedDate}</h3>
           <AppointmentForm onAdd={handleAddAppointment} />
            
            <ul>
          {(appointments[formattedDate] || []).map((appt, idx) => (
            <li key={idx}>
              {appt.time} - {appt.name}
            </li>
          ))}
        </ul>
     
      </div>
    </div>
  )
}

export default CalendarPage