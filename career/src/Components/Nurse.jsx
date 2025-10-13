import React from 'react';
import './Soft.css'; 
 
function Nurse() {
  const scopes = [
    {
      title: "Bachelor’s Degree in Nursing",
      description: "Pursue a Bachelor of Science in Nursing (BSN) to become a registered nurse (RN). This degree provides foundational knowledge in patient care, anatomy, and medical ethics."
    },
    {
      title: "Specializations in Nursing",
      description: "Specialize in areas like pediatric nursing, oncology nursing, critical care nursing, or neonatal nursing by pursuing certifications or advanced degrees in specific fields."
    },
    {
      title: "Licensing and Certification",
      description: "Pass the NCLEX-RN (National Council Licensure Examination) to become a licensed registered nurse. Additional certifications like ACLS or BLS are beneficial for career advancement."
    },
    {
      title: "Advanced Practice Nursing",
      description: "Further your education to become an advanced practice nurse (APN), nurse practitioner (NP), or clinical nurse specialist (CNS), allowing for greater autonomy in patient care."
    },
    {
      title: "Nursing Leadership and Administration",
      description: "Transition into roles such as nurse manager, nursing director, or chief nursing officer (CNO) by pursuing advanced degrees like an MSN (Master of Science in Nursing) or healthcare management."
    },
    {
      title: "Continuing Education and Certifications",
      description: "Stay updated with the latest advancements in healthcare by attending nursing conferences, obtaining specialized certifications, and pursuing continuing education programs."
    },
    {
      title: "Opportunities in Research and Teaching",
      description: "Contribute to healthcare by engaging in nursing research or becoming a nurse educator, teaching the next generation of nurses in academic institutions or clinical settings."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Nursing Career</h1>
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

export default Nurse;
