import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function Science() {
  const navigate = useNavigate(); // useNavigate hook for navigation

  const careers = [
    { title: 'Research Scientist', field: 'Scientific Research & Development', icon: '🔬', path: '/ResearchScientist' },
    { title: 'Biologist', field: 'Biological Sciences', icon: '🧬', path: '/Biologist' },
    { title: 'Environmental Scientist', field: 'Environmental Science', icon: '🌿', path: '/EnvironmentalScientist' },
    { title: 'Chemist', field: 'Chemistry', icon: '⚗️', path: '/Chemist' },
    { title: 'Epidemiologist', field: 'Public Health & Epidemiology', icon: '🦠', path: '/Epidemiologist' },
  ];
  const handleCounselingClick = () => {
    navigate('/meet'); // Navigate to the meet page
  };

  return (
    <div className="tech-container">
      <h1>Science Careers</h1>
      <p>
        Explore the diverse and exciting opportunities available in Science. Choose a specialization
        that aligns with your passion for discovery and innovation.
      </p>

      <button className="counseling-button" onClick={handleCounselingClick}>
        Need More Counseling? Click Here
      </button>

      <div className="careers-container">
        {careers.map((career) => (
          <div
            key={career.title}
            className="career-card"
            onClick={() => navigate(career.path)} // Navigate to respective paths
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

export default Science;
