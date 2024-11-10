import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function Health() {
  const navigate = useNavigate(); // useNavigate hook for navigation

  const careers = [
    { title: 'Physician', field: 'Medicine & Healthcare', icon: '🩺', path: '/Physician' },
    { title: 'Nurse', field: 'Nursing', icon: '👩‍⚕️', path: '/Nurse' },
    { title: 'Pharmacist', field: 'Pharmacy', icon: '💊', path: '/Pharmacist' },
    { title: 'Healthcare Administrator', field: 'Healthcare Management', icon: '🏥', path: '/Admin' },
    { title: 'Physical Therapist', field: 'Rehabilitation', icon: '🧑‍🦼', path: '/Therapist' },
  ];

  return (
    <div className="tech-container"> {/* Using the same class name "tech-container" */}
      <h1>Healthcare and Medicine</h1>
      <p>Explore the rewarding careers available in Healthcare and Medicine. Choose a path that aligns with your passion for patient care and healthcare management.</p>

      <div className="careers-container"> {/* Using the same class name "careers-container" */}
        {careers.map((career) => (
          <div 
            key={career.title} 
            className="career-card" 
            onClick={() => navigate(career.path)} // Add navigation on click
          >
            <div className="career-icon">{career.icon}</div>
            <div className="career-info">
              <h3>{career.title}</h3>
              <p>{career.field}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Health;
