import React from 'react';

function Arts() {
  const careers = [
    { title: 'Graphic Designer', field: 'Design & Arts', icon: '🎨' },
    { title: 'Video Producer', field: 'Media Production', icon: '🎥' },
    { title: 'Social Media Manager', field: 'Marketing & Media', icon: '📱' },
    { title: 'Content Creator', field: 'Digital Media', icon: '✍️' },
    { title: 'Art Director', field: 'Creative Direction', icon: '🖌️' },
  ];

  return (
    <div className="tech-container"> {/* Reusing the same class name "tech-container" */}
      <h1>Arts and Media</h1>
      <p>Discover the exciting careers in Arts and Media, where creativity meets innovation. These roles are perfect for those with a passion for visual storytelling, content creation, and design.</p>

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

export default Arts;
