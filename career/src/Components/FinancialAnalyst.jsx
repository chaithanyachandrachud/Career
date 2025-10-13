import React from 'react';
import './Soft.css'; // Reuse the same CSS file

function FinancialAnalyst() {
  const scopes = [
    {
      title: "Bachelor’s Degree in Finance, Accounting, or Economics",
      description: "Start with a bachelor’s degree in finance, accounting, economics, or a related field to gain foundational knowledge in financial principles and markets."
    },
    {
      title: "Develop Analytical and Technical Skills",
      description: "Master tools like Microsoft Excel, SQL, and financial modeling techniques to analyze and interpret financial data effectively."
    },
    {
      title: "Gaining Industry Experience",
      description: "Begin your career with entry-level roles such as Junior Analyst or Accounting Assistant to build experience in data analysis and financial reporting."
    },
    {
      title: "Earning Professional Certifications",
      description: "Pursue certifications like CFA (Chartered Financial Analyst), CPA (Certified Public Accountant), or CFP (Certified Financial Planner) to enhance your credentials."
    },
    {
      title: "Understanding Investment Strategies",
      description: "Learn about portfolio management, risk assessment, and investment strategies to support decision-making in asset management and corporate finance."
    },
    {
      title: "Entry-Level Financial Analyst Roles",
      description: "Work in roles analyzing market trends, creating financial reports, and providing recommendations to support business growth."
    },
    {
      title: "Specializations in Financial Analysis",
      description: "Focus on areas like corporate finance, equity research, risk management, or investment banking for advanced career opportunities."
    },
    {
      title: "Advancing to Leadership Roles",
      description: "Aim for senior positions such as Senior Financial Analyst, Finance Manager, or Chief Financial Officer (CFO) by demonstrating expertise and leadership skills."
    },
    {
      title: "Continuing Education and Networking",
      description: "Stay competitive by attending finance workshops, networking with industry professionals, and staying informed about market trends and regulatory changes."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Financial Analyst Career</h1>
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

export default FinancialAnalyst;
