import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function Education() {
  const navigate = useNavigate(); // useNavigate hook for navigation

  const careers = [
    { title: 'Teacher', field: 'Primary & Secondary Education', icon: '📚', path: '/Teacher' },
    { title: 'Educational Consultant', field: 'Consulting & Training', icon: '💼', path: '/Consultant' },
    { title: 'Instructional Designer', field: 'Course Design & Development', icon: '🎨', path: '/Designer' },
    { title: 'College Professor', field: 'Higher Education', icon: '🏛️', path: '/Professor' },
    { title: 'School Counselor', field: 'Student Guidance & Counseling', icon: '🧑‍🎓', path: '/Counselors' },
  ];

  return (
    <div className="tech-container">
      <h1>Education and Learning</h1>
      <p>Explore careers in Education. Choose a path that aligns with your passion for teaching, mentoring, and helping students succeed.</p>

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

export default Education;
