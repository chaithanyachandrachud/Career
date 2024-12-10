import React from 'react';
import './Soft.css'; 

function Policyanalyst() {
  const courses = [
    {
      title: "Bachelor's Degree in Political Science",
      description: "Gain foundational knowledge in political systems, governance, and public policies."
    },
    {
      title: "Master's in Public Administration (MPA)",
      description: "Specialize in public administration, organizational theory, and decision-making processes."
    },
    {
      title: "Master's in Public Policy (MPP)",
      description: "Learn policy design, economic analysis, and impact evaluation techniques."
    },
    {
      title: "Certificate in Data Analytics for Policy",
      description: "Develop data-driven decision-making skills for policy analysis and evaluation."
    },
    {
      title: "PhD in Policy Studies",
      description: "Pursue advanced research in policy development, governance, and societal impacts."
    },
    {
      title: "Economics for Public Policy",
      description: "Understand economic principles and their application in crafting effective policies."
    },
    {
      title: "International Relations and Policy Studies",
      description: "Explore the intersection of global politics and policy-making in an interconnected world."
    },
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Career as a Policy Analyst</h1>
      <p className="soft-description">
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

export default Policyanalyst;
