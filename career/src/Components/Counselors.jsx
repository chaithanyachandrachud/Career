import React from 'react';
import './Soft.css'; // Importing CSS for styling

function Counselors() {
  const scopes = [
    {
      title: "Child Psychology",
      description: "Understand developmental stages, behavioral patterns, and emotional needs of children."
    },
    {
      title: "Career Guidance and Counseling",
      description: "Learn techniques to help students explore career options and assess their aptitude."
    },
    {
      title: "Conflict Resolution and Mediation",
      description: "Develop strategies to manage disputes and promote harmony in schools."
    },
    {
      title: "Emotional Intelligence Training",
      description: "Build empathy and teach students to manage stress and emotions effectively."
    },
    {
      title: "Mental Health Awareness",
      description: "Recognize signs of mental health issues and learn basic intervention techniques."
    },
    {
      title: "Counseling for Special Needs Students",
      description: "Provide tailored support for students with disabilities and understand IEPs."
    },
    {
      title: "Crisis Intervention Strategies",
      description: "Handle emergencies like bullying or school violence with immediate support."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Counseling Opportunities</h1>
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

export default Counselors;
