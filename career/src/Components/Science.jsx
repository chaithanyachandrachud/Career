import React from 'react';

function Science() {
  const careers = [
    { title: 'Research Scientist', field: 'Scientific Research & Development', icon: '🔬' },
    { title: 'Biologist', field: 'Biological Sciences', icon: '🧬' },
    { title: 'Environmental Scientist', field: 'Environmental Science', icon: '🌿' },
    { title: 'Chemist', field: 'Chemistry', icon: '⚗️' },
    { title: 'Epidemiologist', field: 'Public Health & Epidemiology', icon: '🦠' },
  ];

  return (
    <div className="tech-container"> {/* Reusing the same class name "tech-container" */}
      <h1>Science Careers</h1>
      <p>Explore the diverse and exciting opportunities available in Science. Choose a specialization that aligns with your passion for discovery and innovation.</p>

      <div className="careers-container"> {/* Reusing the same class name "careers-container" */}
        {careers.map((career) => (
          <div key={career.title} className="career-card"> {/* Reusing "career-card" */}
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
