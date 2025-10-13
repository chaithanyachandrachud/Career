import React, { useState } from 'react';
import axios from 'axios';
import './Feedback.css'; // Import a CSS file for styling

function Feedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedbackData = {
      name,
      email,
      feedback,
      fieldOfStudy
    };

    try {
      const response = await axios.post('http://localhost:3000/api/feedback', feedbackData); // Updated URL
      console.log(response.data); // Log server response
      alert('Feedback submitted successfully!');
      // Reset form fields after submission
      setName('');
      setEmail('');
      setFeedback('');
      setFieldOfStudy('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('An error occurred while submitting your feedback. Please try again later.');
    }
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
