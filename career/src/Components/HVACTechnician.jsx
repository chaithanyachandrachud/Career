import React from 'react';
import "./Soft.css";

function HVACTechnician() {
  const careers = [
    {
      title: "HVAC Installer",
      description: "Install, maintain, and repair heating, ventilation, and air conditioning systems."
    },
    {
      title: "HVAC Technician",
      description: "Service and repair HVAC systems, ensuring they operate efficiently."
    },
    {
      title: "HVAC Engineer",
      description: "Design, develop, and implement HVAC systems in residential and commercial buildings."
    },
    {
      title: "HVAC Sales Representative",
      description: "Sell HVAC products and services, including new systems and upgrades."
    },
    {
      title: "HVAC Manager",
      description: "Supervise a team of technicians, ensuring compliance with safety regulations and overseeing operations."
    },
    {
      title: "Energy Auditor",
      description: "Assess buildings for energy efficiency, recommending improvements to HVAC systems."
    },
    {
      title: "Facilities Manager",
      description: "Oversee HVAC systems across multiple facilities, managing maintenance and repairs."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Career as an HVAC Technician</h1>
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

export default HVACTechnician;
