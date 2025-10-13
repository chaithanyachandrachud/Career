import React from 'react';
import './Soft.css'; 

function Judge() {
  const courses = [
    {
      title: "Bachelor's Degree in Law (LLB)",
      description: "Begin your legal journey with foundational courses in constitutional law, criminal law, and civil law."
    },
    {
      title: "Judicial Service Preparation",
      description: "Enroll in programs that focus on preparing for judicial service exams, including mock trials and legal drafting."
    },
    {
      title: "Master of Laws (LLM)",
      description: "Specialize in areas like constitutional law, international law, or arbitration to deepen your legal knowledge."
    },
    {
      title: "Judicial Clerkship Program",
      description: "Gain hands-on experience by working under a judge to understand courtroom procedures and case management."
    },
    {
      title: "Courses in Mediation and Arbitration",
      description: "Learn alternative dispute resolution methods to manage cases outside the traditional courtroom setting."
    },
    {
      title: "Legal Ethics and Professional Responsibility",
      description: "Focus on ethical practices and standards essential for fair and impartial judicial conduct."
    },
    {
      title: "Advanced Legal Research and Writing",
      description: "Develop expertise in drafting judgments, legal opinions, and comprehensive case studies."
    },
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Career as a Judge</h1>
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

export default Judge;
