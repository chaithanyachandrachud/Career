import React from 'react';
import './Soft.css'; // Importing CSS for consistent styling

function Professor() {
  const scopes = [
    {
      title: "Pursue Advanced Degrees",
      description: "Earn a Master’s or Ph.D. in your field of expertise to qualify for teaching positions at universities and colleges."
    },
    {
      title: "Specialize in Your Academic Discipline",
      description: "Develop deep expertise in a specific field of study to establish authority and teach effectively."
    },
    {
      title: "Engage in Research and Publications",
      description: "Contribute to academia by conducting research and publishing papers in recognized journals."
    },
    {
      title: "Participate in Academic Conferences",
      description: "Present your research and network with peers to stay updated with the latest advancements in your field."
    },
    {
      title: "Design and Deliver Curriculum",
      description: "Create engaging and effective course materials to enhance student learning experiences."
    },
    {
      title: "Guide and Mentor Students",
      description: "Provide mentorship to students for academic growth, career guidance, and research projects."
    },
    {
      title: "Aim for Tenure-Track Positions",
      description: "Work towards securing a tenure-track role by excelling in teaching, research, and service to your institution."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Career as a Professor</h1>
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

export default Professor;
