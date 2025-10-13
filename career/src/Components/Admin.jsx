import React from 'react';
import './Soft.css';

function Admin() {
  const scopes = [
    {
      title: "Bachelor’s Degree in Healthcare Administration",
      description: "Start with a degree in healthcare administration, public health, or a related field to gain foundational knowledge in healthcare management and policy."
    },
    {
      title: "Specializations in Healthcare Management",
      description: "Focus on areas such as hospital management, health informatics, or public health policy through certifications or advanced degrees."
    },
    {
      title: "Master’s Degree in Healthcare Administration",
      description: "Pursue a Master of Healthcare Administration (MHA) or MBA with a healthcare focus to advance into leadership roles."
    },
    {
      title: "Licensing and Certification",
      description: "Earn certifications like the Certified Healthcare Administrator (CHA) or Certified Medical Manager (CMM) to demonstrate expertise and enhance career prospects."
    },
    {
      title: "Roles in Healthcare Administration",
      description: "Explore positions like hospital administrator, clinic manager, or healthcare operations director, managing teams and improving patient care services."
    },
    {
      title: "Opportunities in Health Policy and Advocacy",
      description: "Work with government agencies or non-profits to shape healthcare policies, improve public health, and advocate for patient rights."
    },
    {
      title: "Healthcare IT and Informatics",
      description: "Contribute to the growing field of health informatics by managing electronic health records (EHR) systems and improving healthcare technologies."
    },
    {
      title: "Teaching and Leadership Development",
      description: "Teach future healthcare professionals in academic settings or lead professional development programs for healthcare staff."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Healthcare Administration Career</h1>
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

export default Admin;
