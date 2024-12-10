import React from 'react';
import './Soft.css'; 

function ComplianceOfficer() {
  const courses = [
    {
      title: "Bachelor's Degree in Business Administration or Law",
      description: "Gain foundational knowledge in business ethics, corporate law, and organizational behavior."
    },
    {
      title: "Certified Compliance & Ethics Professional (CCEP)",
      description: "Achieve certification to demonstrate expertise in compliance, ethics, and regulatory practices."
    },
    {
      title: "Master's Degree in Business Law or Corporate Governance",
      description: "Specialize in corporate law, governance, and regulatory frameworks to advance your career."
    },
    {
      title: "Risk Management Certification",
      description: "Learn how to identify, assess, and mitigate risks in compliance and corporate governance."
    },
    {
      title: "Anti-Money Laundering (AML) Certification",
      description: "Focus on financial compliance, fraud detection, and regulatory reporting requirements."
    },
    {
      title: "Data Privacy and Protection Training",
      description: "Develop expertise in managing data privacy regulations like GDPR, HIPAA, and CCPA."
    },
    {
      title: "ISO 31000 Risk Management Certification",
      description: "Understand international standards for effective risk and compliance management."
    },
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Career as a Compliance Officer</h1>
      <p className="soft-description">
        Compliance Officers ensure organizations adhere to legal regulations and internal policies. They play a key role in risk management and ethical operations. Here are some courses to help you get started.
      </p>
      <div className="scopes-list">
        {courses.map((course, index) => (
          <div key={index} className="scope-card">
            <h2 className="scope-title">{course.title}</h2>
            <p className="scope-description">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComplianceOfficer;
