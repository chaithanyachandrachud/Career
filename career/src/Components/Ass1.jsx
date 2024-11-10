import React, { useState } from 'react';
import './Tech.css';

function Ass1() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="ass1-container">
      <h1>Choose Your Path to Success</h1>
      <p className="motivational-text">
        Your journey in software engineering starts here. Take the first step towards mastering new skills. Your potential is limitless. Let's start the assessment and see how far you can go!
      </p>

      <div className="instruction-box">
        <h2>How this assessment works:</h2>
        <ul>
          <li>MCQs will test your knowledge on core concepts.</li>
          <li>Coding skills will assess your problem-solving abilities and coding expertise.</li>
          <li>Feedback helps us understand your learning experience and how we can improve it for you.</li>
        </ul>
      </div>

      <div className="options-container">
        <div 
          className="option-box"
          onClick={() => handleOptionClick("MCQ")}
        >
          <h3>MCQ</h3>
          <p>Test your knowledge with multiple choice questions. It's time to challenge your understanding of software engineering!</p>
        </div>

        <div 
          className="option-box"
          onClick={() => handleOptionClick("Coding Skills")}
        >
          <h3>Coding Skills</h3>
          <p>Show off your coding skills! Work on real-world problems and demonstrate your technical abilities.</p>
        </div>

        <div 
          className="option-box"
          onClick={() => handleOptionClick("Feedback")}
        >
          <h3>Feedback</h3>
          <p>Your feedback matters! Help us improve your learning experience and let us know how we can assist you better.</p>
        </div>
      </div>

      {selectedOption && (
        <div className="selected-option-container">
          <h2>You selected: {selectedOption}</h2>
          <p>Great choice! Proceed with the {selectedOption.toLowerCase()} section to begin your assessment.</p>
        </div>
      )}

      <div className="footer">
        <p>Stay motivated and keep pushing forward. You're just one step away from achieving greatness!</p>
      </div>
    </div>
  );
}

export default Ass1;
