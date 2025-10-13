import React from 'react';
import './Soft.css'; // Importing CSS for styling

function Electrical() {
  const scopes = [
    {
      title: "Bachelor’s Degree in Electrical Engineering",
      description: "Pursue degrees like B.Tech/B.E in Electrical Engineering, covering topics like circuits, power systems, electromagnetics, and control systems."
    },
    {
      title: "Specializations in Electrical Engineering",
      description: "Specialize in fields like Power Systems, Telecommunications, Renewable Energy, Control Systems, or Electronics for focused career paths."
    },
    {
      title: "Certifications and Professional Licensing",
      description: "Gain certifications such as PE (Professional Engineer) or IEEE certifications to advance in your career and build credibility in the industry."
    },
    {
      title: "Internships and Practical Training",
      description: "Get hands-on experience by interning with electrical companies, working on real-world projects involving power distribution, circuit design, or renewable energy."
    },
    {
      title: "Master’s and Higher Studies in Electrical Engineering",
      description: "Pursue a Master’s degree or PhD in specialized areas like Electrical Power Engineering, Control Engineering, or Microelectronics for research and academic roles."
    },
    {
      title: "Project Management and Consultancy",
      description: "Move into project management or consultancy roles, overseeing electrical installations, designing power grids, or providing expert advice to businesses."
    },
    {
      title: "Freelancing and Entrepreneurship",
      description: "Start your own electrical services firm, work as a freelance consultant, or build products related to electrical systems and renewable energy solutions."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Electrical Engineering Opportunities</h1>
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

export default Electrical;
