import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function Arts() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const careers = [
    { title: 'Graphic Designer', field: 'Design & Arts', icon: '🎨', path: '/Graphicdesigner' },
    { title: 'Video Producer', field: 'Media Production', icon: '🎥', path: '/Videoproducer' },
    { title: 'Social Media Manager', field: 'Marketing & Media', icon: '📱', path: '/Socialmediamanager' },
    { title: 'Content Creator', field: 'Digital Media', icon: '✍️', path: '/Contentcreator' },
    { title: 'Art Director', field: 'Creative Direction', icon: '🖌️', path: '/Artdirector' },
  ];

  return (
    <div className="tech-container">
      <h1>Arts and Media</h1>
      <p>Discover the exciting careers in Arts and Media, where creativity meets innovation. These roles are perfect for those with a passion for visual storytelling, content creation, and design.</p>

      <div className="careers-container">
        {careers.map((career) => (
          <div 
            key={career.title} 
            className="career-card" 
            onClick={() => navigate(career.path)} // Navigate to the specified path on click
            style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
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

export default Arts;
