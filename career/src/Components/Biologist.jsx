import React from 'react';
import './Soft.css'

function Biologist() {
  const courses = [
    {
      title: "Bachelor's Degree in Biology",
      description: "Start with a degree in biology, covering subjects like cell biology, genetics, evolution, ecology, and physiology. This is the foundation for a career as a biologist."
    },
    {
      title: "Master's in Ecology or Zoology",
      description: "A master's degree in specialized fields such as ecology or zoology helps deepen your knowledge of ecosystems, animal behavior, and environmental conservation."
    },
    {
      title: "PhD in Biological Sciences",
      description: "Pursuing a PhD allows you to specialize in areas such as molecular biology, genetics, or conservation biology. You'll conduct independent research and contribute to the field."
    },
    {
      title: "Laboratory Techniques and Analysis",
      description: "Learning advanced laboratory skills and techniques, such as microscopy, DNA analysis, and chromatography, is essential for biologists working in research or clinical labs."
    },
    {
      title: "Field Research and Conservation",
      description: "Courses in fieldwork focus on hands-on experience in collecting biological data from natural habitats and understanding conservation techniques."
    },
    {
      title: "Biostatistics and Data Analysis",
      description: "Biologists need to analyze large datasets, and courses in biostatistics help you understand how to interpret biological data and apply statistical methods in research."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Biologist Career Path</h1>
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

export default Biologist;
