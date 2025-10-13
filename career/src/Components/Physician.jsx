import React from 'react';
import './Soft.css'; // Assuming you'll use similar CSS for styling

function Physician() {
  const scopes = [
    {
      title: "Bachelor’s Degree in Medicine",
      description: "Pursue an MBBS (Bachelor of Medicine, Bachelor of Surgery) degree to become a licensed physician. This is the foundational step toward a career in medicine."
    },
    {
      title: "Specializations in Medicine",
      description: "After earning your MBBS, specialize in areas like cardiology, neurology, pediatrics, surgery, or internal medicine by pursuing postgraduate degrees (MD or MS)."
    },
    {
      title: "Residency and Clinical Practice",
      description: "Complete a residency program in your chosen field of specialization. Gain hands-on experience through clinical practice under the supervision of senior physicians."
    },
    {
      title: "Fellowships for Further Expertise",
      description: "Pursue fellowship programs to gain advanced training and expertise in sub-specialties like interventional cardiology, oncological surgery, or neonatology."
    },
    {
      title: "Private Practice or Hospital Employment",
      description: "Start your own private practice or work in hospitals and healthcare institutions, providing healthcare services to patients in your specialized field."
    },
    {
      title: "Continuing Medical Education",
      description: "Stay updated with the latest advancements in medicine by attending conferences, earning CME (Continuing Medical Education) credits, and taking part in medical research."
    },
    {
      title: "Consultancy and Medical Research",
      description: "Engage in medical consultancy for hospitals, government organizations, or pharmaceutical companies. Additionally, contribute to medical research and clinical trials."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Path as a Physician</h1>
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

export default Physician;
