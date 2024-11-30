import React from 'react';
import './Soft.css';

function Pharmacist() {
  const scopes = [
    {
      title: "Bachelor’s Degree in Pharmacy",
      description: "Pursue a Bachelor of Pharmacy (B.Pharm) to gain foundational knowledge in pharmaceuticals, medicinal chemistry, and pharmacology."
    },
    {
      title: "Licensing and Certification",
      description: "Obtain your license by passing required exams such as the NAPLEX (North American Pharmacist Licensure Examination) or equivalent in your country."
    },
    {
      title: "Specializations in Pharmacy",
      description: "Specialize in fields like clinical pharmacy, pharmaceutical research, or industrial pharmacy through advanced degrees and certifications."
    },
    {
      title: "Pharmacist Roles in Healthcare",
      description: "Explore roles such as community pharmacist, hospital pharmacist, or consultant pharmacist, providing expertise in medication management and patient care."
    },
    {
      title: "Opportunities in Pharmaceutical Research",
      description: "Contribute to drug development and clinical trials by working in pharmaceutical companies or research institutions."
    },
    {
      title: "Regulatory Affairs and Compliance",
      description: "Work with government agencies or pharmaceutical companies to ensure compliance with regulations and standards in drug manufacturing and distribution."
    },
    {
      title: "Teaching and Academia",
      description: "Pursue a career in teaching by becoming a lecturer or professor in pharmacy colleges, contributing to the education of future pharmacists."
    },
    {
      title: "Entrepreneurship in Pharmacy",
      description: "Open your own pharmacy or start a pharmaceutical company to provide medications and healthcare solutions to the community."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Pharmacy Career</h1>
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

export default Pharmacist;
