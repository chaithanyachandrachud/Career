import React from 'react';
import './Soft.css'; // Importing CSS for styling

function Mech() {
  const scopes = [
    {
      title: "Bachelor’s Degree in Mechanical Engineering",
      description: "Pursue degrees like B.Tech/B.E in Mechanical Engineering, focusing on thermodynamics, mechanics, materials science, and machine design."
    },
    {
      title: "Specializations in Mechanical Engineering",
      description: "Specialize in fields like Automotive Engineering, Aerospace Engineering, Robotics, HVAC Systems, or Manufacturing to tailor your career path."
    },
    {
      title: "Certifications and Professional Licensing",
      description: "Earn certifications such as Six Sigma, CAD, or PE (Professional Engineer) to gain expertise in mechanical design, quality control, or project management."
    },
    {
      title: "Internships and Hands-on Training",
      description: "Gain practical experience through internships in industries such as automotive, aerospace, or heavy machinery, working on real-world mechanical systems."
    },
    {
      title: "Master’s and Research in Mechanical Engineering",
      description: "Pursue advanced degrees such as M.Tech or PhD to specialize in areas like Fluid Dynamics, Renewable Energy, or Computational Mechanics."
    },
    {
      title: "Consultancy and Project Management",
      description: "Transition into consultancy or project management roles, overseeing mechanical projects, product design, or system efficiency improvements."
    },
    {
      title: "Freelancing and Entrepreneurship",
      description: "Start your own engineering consultancy firm, work as a freelance product designer, or launch a startup focused on innovative mechanical solutions."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Mechanical Engineering Opportunities</h1>
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

export default Mech;
