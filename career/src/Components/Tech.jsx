import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tech.css';

function Tech() {
  
  const navigate = useNavigate(); // useNavigate hook for navigation
  

  const careers = [
    { title: 'Software Development', field: 'Technology & Engineering', icon: '💻', path: '/Soft' },
    { title: 'Data Science & AI', field: 'Data Science & AI', icon: '📊', path: '/Data' },
    { title: 'Cybersecurity', field: 'Cybersecurity', icon: '🔒', path: '/Cyber' },
    { title: 'Electrical Engineering', field: 'Electrical Engineering', icon: '⚡', path: '/Electrical' },
    { title: 'Mechanical Engineering', field: 'Mechanical Engineering', icon: '🔧', path: '/Mech' },
    { title: 'Civil Engineering', field: 'Civil Engineering', icon: '🏗️', path: '/Civil' },
    { title: 'Robotics', field: 'Robotics', icon: '🤖', path: '/Robo' },
    { title: 'Network Engineering', field: 'Network Engineering', icon: '🌐', path: '/Network' },
    { title: 'Cloud Computing', field: 'Cloud Computing', icon: '☁️', path: '/Cloud' },
    { title: 'Bioengineering', field: 'Bioengineering', icon: '🧬', path: '/Bio' },
    { title: 'Telecommunications', field: 'Telecommunications', icon: '📡', path: '/Tele' },
    { title: 'Environmental Engineering', field: 'Environmental Engineering', icon: '🌱', path: '/Environ' },
  ];

  const handleCounselingClick = () => {
    navigate('/meet'); // Navigate to the meet page
  };

  return (
    <div className="tech-container">
      <h1>Technology and Engineering</h1>
      <p>Explore the exciting opportunities available in the field of Technology and Engineering. Choose a specialization that suits your interests and talents.</p>
      <button className="counseling-button" onClick={handleCounselingClick}>
        Need More Counseling? Click Here
      </button>

      <div className="careers-container">
        {careers.map((career) => (
          <div 
            key={career.title} 
            className="career-card" 
            onClick={() => navigate(career.path)} // Navigate to the corresponding career page
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

export default Tech;
