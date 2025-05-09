import React from 'react';
import './Soft.css'; // Reuse the same CSS file

function BusinessAnalyst() {
  const scopes = [
    {
      title: "Bachelor’s Degree in Business or Related Field",
      description: "Begin your journey with a bachelor's degree in business administration, finance, economics, or a related field to build a strong foundation."
    },
    {
      title: "Analytical and Technical Skills",
      description: "Develop skills in data analysis, statistical tools, and software like Excel, SQL, and Tableau to analyze and interpret business data effectively."
    },
    {
      title: "Entry-Level Business Analyst Roles",
      description: "Gain experience by working in entry-level roles like Junior Business Analyst or Operations Analyst to understand organizational needs."
    },
    {
      title: "Advanced Certifications",
      description: "Pursue certifications like CBAP (Certified Business Analysis Professional) or PMI-PBA (Professional in Business Analysis) to stand out in the field."
    },
    {
      title: "Specialization Opportunities",
      description: "Specialize in domains like IT Business Analysis, Financial Analysis, or Data Analysis for focused career growth."
    },
    {
      title: "Opportunities in Consulting",
      description: "Work as a consultant helping organizations improve processes, reduce costs, and achieve strategic goals through data-driven insights."
    },
    {
      title: "Entrepreneurship and Freelance Analysis",
      description: "Offer independent business analysis services or start a consultancy to assist multiple clients in achieving their business objectives."
    },
    {
      title: "Continuing Education and Leadership Roles",
      description: "Enhance your career by pursuing an MBA or advanced certifications and transitioning into leadership roles like Business Strategist or Project Manager."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Business Analyst Career</h1>
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

export default BusinessAnalyst;
