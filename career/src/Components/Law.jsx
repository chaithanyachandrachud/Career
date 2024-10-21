import React from 'react';

function Law() {
  const careers = [
    { title: 'Lawyer', field: 'Legal Practice & Litigation', icon: '⚖️' },
    { title: 'Policy Analyst', field: 'Public Policy & Law', icon: '📜' },
    { title: 'Judge', field: 'Judiciary', icon: '🧑‍⚖️' },
    { title: 'Compliance Officer', field: 'Regulatory Compliance', icon: '📋' },
    { title: 'Public Relations Specialist', field: 'Law & Public Relations', icon: '📣' },
  ];

  return (
    <div className="tech-container"> {/* Reusing the same class name "tech-container" */}
      <h1>Law Careers</h1>
      <p>Explore the various career paths in the field of law. From legal practice to public relations, there are many opportunities to make a difference.</p>

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

export default Law;
