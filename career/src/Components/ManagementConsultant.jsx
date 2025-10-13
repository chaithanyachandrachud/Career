import React from 'react';
import './Soft.css'; // Reuse the same CSS file

function ManagementConsultant() {
  const scopes = [
    {
      title: "Bachelor’s Degree in Business or Related Fields",
      description: "Start with a bachelor’s degree in business, economics, finance, or related fields to build a strong foundation in organizational management and strategy."
    },
    {
      title: "Develop Analytical and Problem-Solving Skills",
      description: "Hone your ability to analyze complex business problems and propose effective solutions through case studies and real-world applications."
    },
    {
      title: "Gaining Industry Experience",
      description: "Begin your career with entry-level roles like Business Analyst or Associate Consultant to gain exposure to consulting frameworks and methodologies."
    },
    {
      title: "Pursuing Advanced Education",
      description: "Consider earning an MBA or a master’s degree in strategy or management to advance your career and qualify for senior consulting roles."
    },
    {
      title: "Earning Certifications",
      description: "Enhance your credentials with certifications like PMP (Project Management Professional) or Lean Six Sigma to demonstrate expertise in specific consulting areas."
    },
    {
      title: "Specializing in Key Industries",
      description: "Develop expertise in industries like healthcare, finance, technology, or manufacturing to become a sought-after specialist."
    },
    {
      title: "Advancing to Senior Roles",
      description: "Aim for roles like Senior Consultant, Engagement Manager, or Partner by demonstrating leadership, client management, and strategic thinking skills."
    },
    {
      title: "Building a Professional Network",
      description: "Expand your network through industry events, consulting forums, and alumni associations to open doors to new opportunities."
    },
    {
      title: "Exploring Entrepreneurship",
      description: "Leverage your experience to start your own consulting firm, helping businesses tackle challenges with innovative solutions."
    },
    {
      title: "Continuing Education and Career Growth",
      description: "Stay competitive by attending workshops, keeping up with business trends, and enhancing your skills through executive programs."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Management Consulting Career</h1>
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

export default ManagementConsultant;
