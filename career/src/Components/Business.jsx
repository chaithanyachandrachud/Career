import React from 'react';

function Business() {
  const careers = [
    { title: 'Business Analyst', field: 'Business & Finance', icon: '📊' },
    { title: 'Product Manager', field: 'Product Management', icon: '📦' },
    { title: 'Financial Analyst', field: 'Finance', icon: '💼' },
    { title: 'Management Consultant', field: 'Consulting', icon: '🧑‍💼' },
    { title: 'Accountant', field: 'Accounting', icon: '🧾' },
  ];

  return (
    <div className="tech-container"> {/* Using the same class name "tech-container" */}
      <h1>Business and Finance</h1>
      <p>Discover the exciting careers in Business and Finance. These roles are critical in shaping the success of organizations and industries.</p>

      <div className="careers-container"> {/* Using the same class name "careers-container" */}
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

export default Business;
