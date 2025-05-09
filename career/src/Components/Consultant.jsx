import React from 'react';
import './Soft.css'; // Importing CSS for consistent styling

function Consultant() {
  const scopes = [
    {
      title: "Degrees in Education or Counseling",
      description: "Pursue degrees like B.Ed, M.Ed, or a Master’s in Educational Psychology or Counseling to build a strong foundation in education systems and student needs."
    },
    {
      title: "Certifications in Educational Consulting",
      description: "Earn certifications like Certified Educational Planner (CEP) or Training in Career Counseling to enhance your credibility."
    },
    {
      title: "Experience in Teaching or Administration",
      description: "Gain experience as a teacher, counselor, or school administrator to understand educational systems, policies, and student challenges."
    },
    {
      title: "Specializations for Consulting",
      description: "Specialize in areas like college admissions, special education, curriculum development, or international education to target specific client needs."
    },
    {
      title: "Building a Network in Education",
      description: "Join educational organizations, attend conferences, and build relationships with schools, colleges, and universities to expand your network."
    },
    {
      title: "Starting an Educational Consultancy",
      description: "Establish your own consultancy or join established firms to provide guidance to students, parents, and institutions."
    },
    {
      title: "Online Educational Consulting",
      description: "Leverage online platforms to provide virtual consulting services, helping students and schools across the globe."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Career as an Educational Consultant</h1>
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

export default Consultant;
