import React from 'react';
import './Soft.css'; // Import the CSS file for styling

function Electrician() {
  const careers = [
    {
      title: "Apprentice Electrician",
      description: "Learn the basics of electrical wiring, safety practices, and system installation."
    },
    {
      title: "Journeyman Electrician",
      description: "Acquire advanced skills in electrical systems, troubleshooting, and installation."
    },
    {
      title: "Master Electrician",
      description: "Specialize in electrical codes, supervision of other electricians, and complex installations."
    },
    {
      title: "Electrical Contractor",
      description: "Run your own business providing electrical services, managing projects, and overseeing crews."
    },
    {
      title: "Industrial Electrician",
      description: "Work in industrial settings maintaining and repairing heavy machinery and equipment."
    },
    {
      title: "Residential Electrician",
      description: "Install, maintain, and repair electrical systems in residential buildings."
    },
    {
      title: "Automation Electrician",
      description: "Specialize in automation systems, such as control panels, robotics, and sensor integration."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Career as an Electrician</h1>
      <div className="scopes-list">
        {careers.map((career, index) => (
          <div key={index} className="scope-card">
            <h2 className="scope-title">{career.title}</h2>
            <p className="scope-description">{career.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Electrician;
