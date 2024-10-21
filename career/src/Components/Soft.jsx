import React from 'react';
import './Soft.css'; // Importing CSS for styling

const Soft= () => {
  const scopes = [
    {
      title: "Bachelor’s Degree in Computer Science/IT",
      description: "Pursue comprehensive programs like B.Tech/B.E or B.Sc in Computer Science, focusing on software engineering, programming, algorithms, and databases."
    },
    {
      title: "Diploma Programs",
      description: "Opt for short-term diplomas in Computer Science, IT, Web Development, or Mobile App Development for quicker entry into the field."
    },
    {
      title: "Certifications and Bootcamps",
      description: "Join coding bootcamps or get online certifications in programming languages, web development, AI, machine learning, and cybersecurity."
    },
    {
      title: "Specializations in Software Development",
      description: "Explore fields like Web Development, Mobile App Development, Game Development, Data Science, AI, Cloud Computing, and Cybersecurity."
    },
    {
      title: "Internships and Projects",
      description: "Gain practical experience through internships, working on real-world projects, or contributing to open-source software."
    },
    {
      title: "Higher Studies and Specialization",
      description: "Further specialize by pursuing a Master’s degree in Computer Science or an MBA in IT for management roles."
    },
    {
      title: "Freelancing and Startup Opportunities",
      description: "Start freelancing on platforms like Upwork or create your own tech startup and build innovative software products."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Software Development Opportunities</h1>
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
};

export default Soft;
