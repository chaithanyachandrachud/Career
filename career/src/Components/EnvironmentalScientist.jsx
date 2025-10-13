import React from 'react';
import "./Soft.css"

function EnvironmentalScientist() {
  const courses = [
    {
      title: "Bachelor's Degree in Environmental Science",
      description: "Build a foundation in environmental systems, climate change, sustainability, and natural resource management."
    },
    {
      title: "Master's in Environmental Engineering",
      description: "Specialize in applying engineering principles to solve environmental challenges, focusing on clean energy, pollution control, and water resource management."
    },
    {
      title: "GIS and Remote Sensing",
      description: "Learn geographic information systems (GIS) and remote sensing to analyze spatial data for environmental studies and urban planning."
    },
    {
      title: "Environmental Impact Assessment (EIA)",
      description: "Understand the techniques and methodologies for assessing the environmental impact of projects, critical for regulatory compliance."
    },
    {
      title: "Ecology and Conservation Biology",
      description: "Focus on the preservation of biodiversity and the protection of ecosystems through specialized courses in ecology and conservation."
    },
    {
      title: "Sustainability and Renewable Energy",
      description: "Explore the principles of sustainable development, renewable energy technologies, and strategies to combat climate change."
    },
    {
      title: "Environmental Policy and Law",
      description: "Study the policies and regulations related to environmental protection, natural resource management, and climate agreements."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Environmental Scientist Career Path</h1>
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

export default EnvironmentalScientist;
