import React from 'react';
import './Soft.css'; // Importing CSS for styling

function Robotics() {
  const scopes = [
    {
      title: "Bachelor’s Degree in Robotics Engineering",
      description: "Pursue degrees like B.Tech/B.E in Robotics Engineering, focusing on robotics design, control systems, artificial intelligence, and automation."
    },
    {
      title: "Specializations in Robotics",
      description: "Specialize in fields like AI Robotics, Industrial Automation, Medical Robotics, or Autonomous Systems for focused career paths."
    },
    {
      title: "Certifications and Technical Skills",
      description: "Earn certifications in fields like AI, machine learning, ROS (Robot Operating System), or programming languages like Python and C++ for career growth."
    },
    {
      title: "Internships and Research Projects",
      description: "Gain hands-on experience by interning with robotics firms, or engaging in research projects on robotics, automation, or AI systems."
    },
    {
      title: "Master’s and Higher Studies in Robotics",
      description: "Pursue advanced degrees like M.Tech, MS, or PhD in Robotics, focusing on specialized areas like autonomous systems, AI, or bio-robotics."
    },
    {
      title: "Robotics Development and Consultancy",
      description: "Work as a robotics developer, or transition into consultancy, designing innovative robotic solutions or managing automation projects."
    },
    {
      title: "Entrepreneurship and Startups in Robotics",
      description: "Launch your own robotics startup or freelancing business, creating robots or automation solutions for industries like healthcare, manufacturing, or defense."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Robotics Engineering Opportunities</h1>
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

export default Robotics;
