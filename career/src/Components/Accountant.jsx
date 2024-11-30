import React from 'react';
import './Soft.css'; // Reuse the same CSS file for consistent styling

function Accountant() {
  const scopes = [
    {
      title: "Bachelor’s Degree in Accounting or Finance",
      description: "Start with a bachelor’s degree in accounting, finance, or a related field to gain foundational knowledge in financial reporting, auditing, and tax regulations."
    },
    {
      title: "Develop Technical and Analytical Skills",
      description: "Master essential tools like Microsoft Excel, QuickBooks, and other accounting software while improving your analytical and numerical abilities."
    },
    {
      title: "Pursue Professional Certifications",
      description: "Earn certifications like CPA (Certified Public Accountant), CMA (Certified Management Accountant), or ACCA to enhance your expertise and career prospects."
    },
    {
      title: "Gaining Work Experience",
      description: "Start with entry-level roles like Junior Accountant or Accounts Assistant to gain hands-on experience in bookkeeping, financial analysis, and compliance."
    },
    {
      title: "Specializing in Accounting Fields",
      description: "Focus on specialized areas such as forensic accounting, tax consulting, auditing, or financial planning to tailor your career to your interests."
    },
    {
      title: "Transitioning into Leadership Roles",
      description: "Climb the corporate ladder to roles like Financial Controller, Accounting Manager, or Chief Financial Officer (CFO) by showcasing strong leadership and decision-making skills."
    },
    {
      title: "Opportunities in Public and Private Sectors",
      description: "Work in diverse industries, including corporate firms, government agencies, nonprofit organizations, or public accounting firms."
    },
    {
      title: "Building a Strong Professional Network",
      description: "Join accounting associations, attend industry events, and connect with professionals to explore new opportunities and gain mentorship."
    },
    {
      title: "Stay Updated with Financial Regulations",
      description: "Keep up with changes in tax laws, financial reporting standards, and compliance requirements to maintain your expertise."
    },
    {
      title: "Exploring Entrepreneurship",
      description: "Start your own accounting firm or consultancy, helping businesses and individuals with tax planning, auditing, and financial management."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Accounting Career</h1>
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

export default Accountant;
