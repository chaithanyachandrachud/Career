import React, { useState } from 'react';
import './Feedback.css'; // Import a CSS file for styling

function Feedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to an API)
    console.log({ name, email, feedback, fieldOfStudy });
    // Reset form fields after submission
    setName('');
    setEmail('');
    setFeedback('');
    setFieldOfStudy('');
  };

  return (
    <div className="feedback-container">
      <h2>We Value Your Feedback!</h2>
      <p>Your insights help us improve our services and guide students effectively.</p>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="fieldOfStudy">Intended Field of Study:</label>
          <input 
            type="text" 
            id="fieldOfStudy" 
            value={fieldOfStudy} 
            onChange={(e) => setFieldOfStudy(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea 
            id="feedback" 
            value={feedback} 
            onChange={(e) => setFeedback(e.target.value)} 
            required 
          />
        </div>

        <button type="submit" className="submit-button">Submit Feedback</button>
      </form>
    </div>
  );
}

export default Feedback;
