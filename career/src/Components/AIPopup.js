// AIPopup.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AIPopup.css';

function AIPopup({ show, onClose }) {
  const navigate = useNavigate();

  if (!show) return null;

  const handleAIButtonClick = () => {
    navigate('/ai-tool'); // Replace with the actual path to your AI tool
  };

  return (
    <div className="ai-popup-overlay">
      <div className="ai-popup">
        <h3>Need more assistance?</h3>
        <p>Get instant help using AI!</p>
        <button className="ai-button" onClick={handleAIButtonClick}>
          Use AI
        </button>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default AIPopup;
