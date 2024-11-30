import React from 'react';
import './Soft.css';

function Artdirector() {
  const scopes = [
    {
      title: "Bachelor’s Degree in Design or Fine Arts",
      description: "Begin your journey with a bachelor’s degree in graphic design, fine arts, or a related field to build foundational skills."
    },
    {
      title: "Master the Fundamentals of Design",
      description: "Develop expertise in color theory, typography, and layout design to create visually compelling projects."
    },
    {
      title: "Gain Professional Experience",
      description: "Work as a graphic designer, illustrator, or in other creative roles to gain hands-on experience in the industry."
    },
    {
      title: "Build a Strong Portfolio",
      description: "Create a portfolio showcasing diverse and innovative design projects to impress potential employers and clients."
    },
    {
      title: "Step into Leadership Roles",
      description: "Develop project management and team leadership skills to take on senior positions overseeing creative teams."
    },
    {
      title: "Freelance or Independent Consulting",
      description: "Work independently as a freelance art director or consultant, offering creative direction to clients and agencies."
    },
    {
      title: "Stay Updated with Industry Trends",
      description: "Keep up with the latest design tools and industry trends to ensure your work remains relevant and cutting-edge."
    },
    {
      title: "Collaborate with Cross-Functional Teams",
      description: "Work closely with writers, marketers, and developers to ensure a cohesive vision across all creative projects."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Art Director Career</h1>
      <div className="scopes-list">
        {scopes.map((scope, index) => (
          <div key={index} className="scope-card">
            <h2 className="scope-title">{scope.title}</h2>
            <p className="scope-description">{scope.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Artdirector;
