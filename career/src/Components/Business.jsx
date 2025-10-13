import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function Business() {
  const navigate = useNavigate(); // useNavigate hook for navigation

  const careers = [
    { title: 'Business Analyst', field: 'Business & Finance', icon: '📊', path: '/BusinessAnalyst' },
    { title: 'Product Manager', field: 'Product Management', icon: '📦', path: '/ProductManager' },
    { title: 'Financial Analyst', field: 'Finance', icon: '💼', path: '/FinancialAnalyst' },
    { title: 'Management Consultant', field: 'Consulting', icon: '🧑‍💼', path: '/ManagementConsultant' },
    { title: 'Accountant', field: 'Accounting', icon: '🧾', path: '/Accountant' },
  ];

  const handleCounselingClick = () => {
    navigate('/meet'); // Navigate to the meet page
  };


  return (
    <div className="tech-container">
      <h1>Business and Finance</h1>
      <p>Explore exciting careers in Business and Finance. These fields drive organizational success and economic growth.</p>
      <button className="counseling-button" onClick={handleCounselingClick}>
        Need More Counseling? Click Here
      </button>

      <div className="careers-container">
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

export default Business;
