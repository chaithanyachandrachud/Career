import React, { useState } from 'react';
import axios from 'axios';
import './Meet.css';

function Meet() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { date, time, name, email, phone };

    try {
      const response = await axios.post('/schedule', formData);
      alert(response.data.message);
      // Redirect back to the main page if needed
      // navigate('/Tech'); // Uncomment if using React Router's useNavigate
    } catch (error) {
      console.error('Error scheduling the meeting:', error);
      alert('An error occurred while scheduling the meeting.');
    }
  };

  return (
    <div className="meet-container">
      <h1>Schedule a Counseling Session</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Meet;
