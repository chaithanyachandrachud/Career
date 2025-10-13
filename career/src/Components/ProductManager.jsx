import React from 'react';
import './Soft.css'; // Reuse the same CSS file

function ProductManager() {
  const scopes = [
    {
      title: "Bachelor’s Degree in Business, Engineering, or Related Field",
      description: "Begin your journey with a degree in business administration, computer science, engineering, or a related field to understand product development fundamentals."
    },
    {
      title: "Understanding User Needs",
      description: "Learn how to identify customer pain points, gather requirements, and conduct market research to create user-centric products."
    },
    {
      title: "Gaining Industry Experience",
      description: "Work in roles like Product Analyst, Marketing Associate, or UX Designer to gain exposure to product lifecycle and team collaboration."
    },
    {
      title: "Project Management Skills",
      description: "Develop skills in project management tools like Jira, Trello, or Asana to manage product timelines and team coordination efficiently."
    },
    {
      title: "Agile and Scrum Methodologies",
      description: "Get certified in Agile practices or as a Scrum Master to enhance your understanding of iterative product development."
    },
    {
      title: "Entry-Level Product Manager Roles",
      description: "Start as an Associate Product Manager to learn how to prioritize features, work with cross-functional teams, and deliver successful products."
    },
    {
      title: "Specializations in Product Management",
      description: "Focus on niches like SaaS products, mobile applications, or e-commerce platforms to align with your interests and market demand."
    },
    {
      title: "Leadership and Career Advancement",
      description: "Advance to roles like Senior Product Manager, Director of Product, or VP of Product by showcasing your ability to lead teams and deliver impactful results."
    },
    {
      title: "Continuing Education and Networking",
      description: "Stay updated by attending product management workshops, earning certifications like Pragmatic Institute’s Product Management Certification, and networking with industry leaders."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Product Manager Career</h1>
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

export default ProductManager;
