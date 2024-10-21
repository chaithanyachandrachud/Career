import React from 'react';
import './Soft.css'; // Importing CSS for styling

function BioEngineering() {
  const scopes = [
    {
      title: "Bachelor’s Degree in Bioengineering or Biomedical Engineering",
      description: "Pursue degrees like B.Tech/B.E in Bioengineering or Biomedical Engineering, focusing on areas such as biomechanics, biomaterials, and medical device development."
    },
    {
      title: "Specializations in Bioengineering",
      description: "Specialize in fields like tissue engineering, neural engineering, bioinformatics, or prosthetics to align with specific career interests."
    },
    {
      title: "Certifications and Technical Skills",
      description: "Earn certifications in areas like medical device regulations, data analysis tools, or software like MATLAB and AutoCAD for career enhancement."
    },
    {
      title: "Internships and Research Experience",
      description: "Gain hands-on experience by interning with medical device companies, research labs, or hospitals, focusing on cutting-edge bioengineering solutions."
    },
    {
      title: "Master’s and Higher Studies in Bioengineering",
      description: "Pursue advanced degrees like M.Tech, MS, or PhD in Bioengineering, focusing on advanced research in biomechanics, tissue regeneration, or bio-robotics."
    },
    {
      title: "Research and Development Roles",
      description: "Transition into R&D roles, working on innovative projects like developing new medical devices, biocompatible materials, or biological models."
    },
    {
      title: "Consulting and Freelancing in Bioengineering",
      description: "Work as a bioengineering consultant or freelancer, offering expertise in biomedical equipment design, regulatory compliance, or medical innovation."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Bioengineering Opportunities</h1>
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

export default BioEngineering;
