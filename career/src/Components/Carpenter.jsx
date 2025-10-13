import React from 'react';
import './Soft.css'; // Import the CSS file for styling

function Carpenter() {
  const careers = [
    {
      title: "Carpentry Apprentice",
      description: "Learn basic carpentry skills including tool usage, safety, and building techniques."
    },
    {
      title: "Journeyman Carpenter",
      description: "Gain practical experience in constructing, repairing, and maintaining structures."
    },
    {
      title: "Cabinet Maker",
      description: "Specialize in crafting custom cabinets and furniture pieces."
    },
    {
      title: "Trim Carpenter",
      description: "Focus on installing decorative moldings, trim, and finishes in homes and buildings."
    },
    {
      title: "Rough Carpenter",
      description: "Work on construction sites building frameworks and rough structures."
    },
    {
      title: "Framer",
      description: "Construct the wooden framework of buildings and structures."
    },
    {
      title: "Carpentry Contractor",
      description: "Operate your own carpentry business, manage projects, and hire carpentry crews."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Career as a Carpenter</h1>
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

export default Carpenter;
