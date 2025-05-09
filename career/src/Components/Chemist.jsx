import React from 'react';
import './Soft.css';

function Chemist() {
  const courses = [
    {
      title: "Bachelor's Degree in Chemistry",
      description: "Learn foundational concepts in organic, inorganic, and physical chemistry with hands-on laboratory experience."
    },
    {
      title: "Master's in Analytical Chemistry",
      description: "Specialize in advanced techniques for chemical analysis, focusing on methods like spectroscopy and chromatography."
    },
    {
      title: "Biochemistry",
      description: "Explore the intersection of biology and chemistry, focusing on the chemical processes within living organisms."
    },
    {
      title: "Materials Science and Nanotechnology",
      description: "Understand the chemical properties of materials and how they can be manipulated at the molecular level for various applications."
    },
    {
      title: "Pharmaceutical Chemistry",
      description: "Dive into drug discovery, design, and development, working towards solutions for healthcare challenges."
    },
    {
      title: "Environmental Chemistry",
      description: "Study chemical processes in the environment, including pollution control and sustainable chemical practices."
    },
    {
      title: "Industrial Chemistry",
      description: "Focus on chemical production and manufacturing, covering areas such as petrochemicals, polymers, and agrochemicals."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Career as a Chemist</h1>
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

export default Chemist;