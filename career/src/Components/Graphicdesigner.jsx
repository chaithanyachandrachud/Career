import React from 'react';
import './Soft.css'; // Import the relevant CSS for styling

function GraphicDesigner() {
  const scopes = [
    {
      title: "Bachelor’s Degree in Design or Fine Arts",
      description: "Start with a bachelor's degree in graphic design, fine arts, or a related field to build a strong foundation in design principles."
    },
    {
      title: "Develop Technical Skills",
      description: "Master design software like Adobe Photoshop, Illustrator, and InDesign, which are essential tools for graphic designers."
    },
    {
      title: "Build a Portfolio",
      description: "Create a portfolio showcasing your design projects, including branding, illustrations, and digital designs, to attract clients or employers."
    },
    {
      title: "Explore Freelance Opportunities",
      description: "Gain experience by freelancing for small businesses, creating logos, marketing materials, and social media graphics."
    },
    {
      title: "Work in Advertising and Marketing",
      description: "Collaborate with marketing teams to create visually appealing advertisements, brochures, and campaign designs."
    },
    {
      title: "Specialize in a Niche",
      description: "Focus on areas like UX/UI design, branding, or motion graphics to distinguish yourself in the field."
    },
    {
      title: "Pursue Advanced Education",
      description: "Consider a master’s degree in design or related certifications to enhance your skills and open leadership opportunities."
    },
    {
      title: "Stay Updated with Design Trends",
      description: "Follow current design trends, attend workshops, and participate in online courses to stay competitive in the ever-evolving design field."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Career as a Graphic Designer</h1>
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

export default GraphicDesigner;
