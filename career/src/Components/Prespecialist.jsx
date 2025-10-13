import React from 'react';
import './Soft.css';

function Prespecialist() {
  const courses = [
    {
      title: "Bachelor's Degree in Public Relations",
      description: "Build foundational knowledge in communication strategies, media relations, and branding."
    },
    {
      title: "Certification in Digital Marketing",
      description: "Learn the art of online branding, social media management, and content marketing."
    },
    {
      title: "Master's Degree in Communication or PR",
      description: "Specialize in strategic communication, corporate branding, and reputation management."
    },
    {
      title: "Crisis Communication Training",
      description: "Master skills to handle public relations during challenging and critical situations."
    },
    {
      title: "Event Management and Coordination",
      description: "Learn to plan and manage promotional events to boost public engagement."
    },
    {
      title: "Media and Journalism Training",
      description: "Understand how media works and how to craft compelling press releases and stories."
    },
    {
      title: "Social Media Analytics and Insights",
      description: "Dive into metrics and analytics to improve online visibility and audience engagement."
    },
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Career as a Public Relations Specialist</h1>
      <p className="soft-description">
        
      </p>
      <div className="scopes-list">
        {courses.map((course, index) => (
          <div key={index} className="scope-card">
            <h2 className="scope-title">{course.title}</h2>
            <p className="scope-description">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prespecialist;
