import React from 'react';

function Health() {
  const careers = [
    { title: 'Physician', field: 'Medicine & Healthcare', icon: '🩺' },
    { title: 'Nurse', field: 'Nursing', icon: '👩‍⚕️' },
    { title: 'Pharmacist', field: 'Pharmacy', icon: '💊' },
    { title: 'Healthcare Administrator', field: 'Healthcare Management', icon: '🏥' },
    { title: 'Physical Therapist', field: 'Rehabilitation', icon: '🧑‍🦼' },
  ];

  return (
    <div className="tech-container"> {/* Using the same class name "tech-container" */}
      <h1>Healthcare and Medicine</h1>
      <p>Explore the rewarding careers available in Healthcare and Medicine. Choose a path that aligns with your passion for patient care and healthcare management.</p>

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

export default Health;
