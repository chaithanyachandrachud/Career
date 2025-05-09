import React from 'react';
import './Soft.css';

function Therapist() {
  const scopes = [
    {
      title: "Bachelor’s Degree in Health Sciences",
      description: "Start your journey with a bachelor’s degree in health sciences, biology, or a related field as a prerequisite for physical therapy graduate programs."
    },
    {
      title: "Doctor of Physical Therapy (DPT)",
      description: "Complete a Doctor of Physical Therapy (DPT) program, which provides advanced knowledge in movement science, anatomy, and patient care."
    },
    {
      title: "Licensing and Certification",
      description: "Pass the National Physical Therapy Examination (NPTE) and obtain your state license to practice as a physical therapist."
    },
    {
      title: "Specializations in Physical Therapy",
      description: "Pursue certifications in areas like sports therapy, orthopedics, geriatrics, or pediatric physical therapy to focus on specific patient needs."
    },
    {
      title: "Opportunities in Rehabilitation Centers",
      description: "Work in rehabilitation facilities helping patients recover from injuries, surgeries, or chronic conditions through personalized therapy plans."
    },
    {
      title: "Private Practice and Entrepreneurship",
      description: "Start your own physical therapy clinic or offer home-based services to provide personalized care to clients."
    },
    {
      title: "Academic and Research Opportunities",
      description: "Contribute to the field through research on innovative therapy techniques or teach aspiring physical therapists in academic institutions."
    },
    {
      title: "Continuing Education and Career Advancement",
      description: "Stay updated with the latest advancements by attending workshops, earning advanced certifications, or pursuing a residency program."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Physical Therapy Career</h1>
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

export default Therapist;
