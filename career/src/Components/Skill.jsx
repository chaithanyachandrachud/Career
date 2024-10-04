import React from 'react';

function Skill() {
  const careers = [
    { title: 'Electrician', field: 'Electrical Work', icon: '💡' },
    { title: 'Plumber', field: 'Plumbing', icon: '🚰' },
    { title: 'Carpenter', field: 'Woodworking & Construction', icon: '🪚' },
    { title: 'HVAC Technician', field: 'Heating, Ventilation, and Air Conditioning', icon: '❄️' },
    { title: 'Construction Manager', field: 'Construction & Project Management', icon: '🏗️' },
  ];

  return (
    <div className="tech-container">
      <h1>Skilled Trades Careers</h1>
      <p>Explore the rewarding opportunities available in skilled trades. Choose a path that aligns with your skills and interests.</p>

      <div className="careers-container"> 
        {careers.map((career) => (
          <div key={career.title} className="career-card">
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
