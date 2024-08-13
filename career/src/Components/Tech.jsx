import React from 'react';
import './Tech.css'; // Ensure you have this CSS file for styling

function Tech() {
  const careers = [
    { title: 'Software Development', field: 'Technology & Engineering', icon: '💻' },
    { title: 'Data Science & AI', field: 'Data Science & AI', icon: '📊' },
    { title: 'Cybersecurity', field: 'Cybersecurity', icon: '🔒' },
    { title: 'Electrical Engineering', field: 'Electrical Engineering', icon: '⚡' },
    { title: 'Mechanical Engineering', field: 'Mechanical Engineering', icon: '🔧' },
    { title: 'Civil Engineering', field: 'Civil Engineering', icon: '🏗️' },
    { title: 'Robotics', field: 'Robotics', icon: '🤖' },
    { title: 'Network Engineering', field: 'Network Engineering', icon: '🌐' },
    { title: 'Cloud Computing', field: 'Cloud Computing', icon: '☁️' },
    { title: 'Bioengineering', field: 'Bioengineering', icon: '🧬' },
    { title: 'Telecommunications', field: 'Telecommunications', icon: '📡' },
    { title: 'Environmental Engineering', field: 'Environmental Engineering', icon: '🌱' },
  ];

  return (
    <div className="tech-container">
      <h1>Technology and Engineering</h1>
      <p>Explore the exciting opportunities available in the field of Technology and Engineering. Choose a specialization that suits your interests and talents.</p>

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

export default Tech;