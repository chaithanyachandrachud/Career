import React from 'react';
import './Soft.css'; // Importing CSS for styling

function Civil() {
  const scopes = [
    {
      title: "Bachelor’s Degree in Civil Engineering",
      description: "Pursue degrees like B.Tech/B.E in Civil Engineering, focusing on structural design, construction technology, geotechnical engineering, and environmental engineering."
    },
    {
      title: "Specializations in Civil Engineering",
      description: "Specialize in fields like Structural Engineering, Transportation Engineering, Water Resources, Environmental Engineering, or Urban Planning for targeted career paths."
    },
    {
      title: "Certifications and Professional Licensing",
      description: "Earn certifications such as PE (Professional Engineer), PMP (Project Management Professional), or LEED (Leadership in Energy and Environmental Design) for career advancement."
    },
    {
      title: "Internships and Site Experience",
      description: "Gain practical experience by interning with construction companies, working on infrastructure projects like bridges, highways, or urban development."
    },
    {
      title: "Master’s and Higher Studies in Civil Engineering",
      description: "Pursue advanced degrees such as M.Tech or a PhD to specialize in areas like Structural Engineering, Geotechnical Engineering, or Construction Management."
    },
    {
      title: "Project Management and Consultancy",
      description: "Transition into roles like project manager or civil engineering consultant, overseeing infrastructure projects, cost estimation, or environmental assessments."
    },
    {
      title: "Freelancing and Entrepreneurship",
      description: "Start your own civil engineering consultancy, work as a freelance structural designer, or launch a construction-related startup to deliver innovative infrastructure solutions."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Civil Engineering Opportunities</h1>
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

export default Civil;
