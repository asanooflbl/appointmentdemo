import React, { useState } from 'react'
import './AppointmentForm.css'

function AppointmentForm({ onAdd }) {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !time) return;
          onAdd({ name: name.trim(), time });
            setName('');
            setTime('');
  };

  return (
    <form className="appointment-form-main" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Patient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button type="submit">Add Appointment</button>
    </form>
  )
}

export default AppointmentForm