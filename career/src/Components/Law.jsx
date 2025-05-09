import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function Law() {
  const navigate = useNavigate(); // useNavigate hook for navigation

  const careers = [
    { title: 'Lawyer', field: 'Legal Practice & Litigation', icon: '⚖️', path: '/Lawyer' },
    { title: 'Policy Analyst', field: 'Public Policy & Law', icon: '📜', path: '/Policyanalyst' },
    { title: 'Judge', field: 'Judiciary', icon: '🧑‍⚖️', path: '/Judge' },
    { title: 'Compliance Officer', field: 'Regulatory Compliance', icon: '📋', path: '/Complianceofficer' },
    { title: 'Public Relations Specialist', field: 'Law & Public Relations', icon: '📣', path: '/Prespecialist' },
   ];
   const handleCounselingClick = () => {
    navigate('/meet'); // Navigate to the meet page
  };

  return (
    <div className="tech-container">
      <h1>Law Careers</h1>
      <p>Explore the various career paths in the field of law. From legal practice to public relations, there are many opportunities to make a difference.</p>
      <button className="counseling-button" onClick={handleCounselingClick}>
        Need More Counseling? Click Here
      </button>

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

export default Law;
