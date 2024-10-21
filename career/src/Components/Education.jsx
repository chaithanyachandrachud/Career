import React from 'react';

function Education() {
  const careers = [
    { title: 'Teacher', field: 'Primary & Secondary Education', icon: '📚' },
    { title: 'Educational Consultant', field: 'Consulting & Training', icon: '💼' },
    { title: 'Instructional Designer', field: 'Course Design & Development', icon: '🎨' },
    { title: 'College Professor', field: 'Higher Education', icon: '🏛️' },
    { title: 'School Counselor', field: 'Student Guidance & Counseling', icon: '🧑‍🎓' },
  ];

  return (
    <div className="tech-container"> 
      <h1>Education and Learning</h1>
      <p>Discover the impactful careers in Education. Choose a path that aligns with your passion for teaching, mentoring, and helping students achieve success.</p>

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

export default Education;
