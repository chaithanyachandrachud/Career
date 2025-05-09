import React from 'react';
import './Soft.css'; // Import the CSS file for styling

function Plumber() {
  const careers = [
    {
      title: "Plumbing Apprentice",
      description: "Learn the basics of plumbing systems, tools, and safety practices."
    },
    {
      title: "Journeyman Plumber",
      description: "Gain hands-on experience in residential and commercial plumbing installations and repairs."
    },
    {
      title: "Master Plumber",
      description: "Specialize in complex plumbing systems, code compliance, and supervise other plumbers."
    },
    {
      title: "Plumbing Contractor",
      description: "Operate your own plumbing business, manage projects, and hire plumbing crews."
    },
    {
      title: "Industrial Plumber",
      description: "Work in industrial settings maintaining and installing plumbing systems in factories and plants."
    },
    {
      title: "Residential Plumber",
      description: "Install and maintain plumbing systems in homes, including faucets, pipes, and appliances."
    },
    {
      title: "Service Plumber",
      description: "Respond to emergency plumbing calls and perform repairs on the spot."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Career as a Plumber</h1>
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

export default Plumber;
