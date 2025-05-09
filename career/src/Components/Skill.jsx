import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function Skill() {
  const navigate = useNavigate(); // useNavigate hook for navigation

  const careers = [
    { title: 'Electrician', field: 'Electrical Work', icon: '💡', path: '/Electrician' },
    { title: 'Plumber', field: 'Plumbing', icon: '🚰', path: '/Plumber' },
    { title: 'Carpenter', field: 'Woodworking & Construction', icon: '🪚', path: '/Carpenter' },
    { title: 'HVAC Technician', field: 'Heating, Ventilation, and Air Conditioning', icon: '❄️', path: '/HVACTechnician' },
    { title: 'Construction Manager', field: 'Construction & Project Management', icon: '🏗️', path: '/ConstructionManager' },
  ];

  return (
    <div className="tech-container">
      <h1>Skilled Trades Careers</h1>
      <p>Explore the rewarding opportunities available in skilled trades. Choose a path that aligns with your skills and interests.</p>

      <div className="careers-container">
        {careers.map((career) => (
          <div
            key={career.title}
            className="career-card"
            onClick={() => navigate(career.path)} // Navigate to the respective path on click
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

export default Skill;
