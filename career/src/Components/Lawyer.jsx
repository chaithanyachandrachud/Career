import React from 'react';
import './Soft.css'; 

function Lawyer() {
  const courses = [
    {
      title: "Bachelor’s Degree in Law (LLB)",
      description: "Gain foundational knowledge of legal principles, judicial systems, and legal writing."
    },
    {
      title: "Juris Doctor (JD)",
      description: "A professional law degree focusing on litigation, legal research, and courtroom practices."
    },
    {
      title: "Master of Laws (LLM)",
      description: "Specialize in areas like international law, intellectual property, or human rights."
    },
    {
      title: "Certification in Corporate Law",
      description: "Understand legal frameworks for businesses, mergers, acquisitions, and compliance."
    },
    {
      title: "Diploma in Criminal Law",
      description: "Learn about criminal justice, evidence law, and defense strategies."
    },
    {
      title: "Cyber Law Certification",
      description: "Focus on legal aspects of data privacy, cybersecurity, and online crime prevention."
    },
    {
      title: "Bar Exam Preparation Course",
      description: "Prepare for the bar exam to become a licensed practitioner in your region."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Career as a Lawyer</h1>
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

export default Lawyer;
