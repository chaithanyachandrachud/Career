import React from 'react';
import './Soft.css'; // Importing CSS for styling

function Environ() {
  const scopes = [
    {
      title: "Bachelor’s Degree in Environmental Engineering",
      description: "Pursue degrees like B.Tech/B.E in Environmental Engineering, focusing on pollution control, waste management, sustainable design, and environmental regulations."
    },
    {
      title: "Certifications for Environmental Engineers",
      description: "Earn certifications like LEED (Leadership in Energy and Environmental Design), EIT (Engineer-in-Training), or certifications in Environmental Impact Assessment (EIA) for career advancement."
    },
    {
      title: "Specializations in Environmental Engineering",
      description: "Specialize in fields like water resources, air quality management, waste treatment, or sustainable development to align with specific career interests."
    },
    {
      title: "Internships and Practical Experience",
      description: "Gain hands-on experience by interning with environmental agencies, consultancies, or government organizations, working on environmental assessments, remediation projects, or sustainability initiatives."
    },
    {
      title: "Master’s and Higher Studies in Environmental Engineering",
      description: "Pursue advanced degrees like M.Tech, MS, or PhD in Environmental Engineering, focusing on climate change, renewable energy, or sustainable infrastructure."
    },
    {
      title: "Environmental Consultancy and Research Roles",
      description: "Transition into roles like environmental consultant, sustainability analyst, or researcher, providing expertise in eco-friendly solutions and environmental compliance."
    },
    {
      title: "Entrepreneurship and Freelancing in Environmental Engineering",
      description: "Work as an environmental consultant or start your own green consultancy, offering services like environmental audits, waste management solutions, or sustainability project management."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Environmental Engineering Opportunities</h1>
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

export default Environ;
