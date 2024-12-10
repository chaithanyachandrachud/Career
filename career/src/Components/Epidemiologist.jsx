import React from 'react';
import './Soft.css'; 

function Epidemiologist() {
  const courses = [
    {
      title: "Bachelor's Degree in Public Health",
      description: "Build a strong foundation in public health principles, disease prevention, and biostatistics."
    },
    {
      title: "Master of Public Health (MPH)",
      description: "Specialize in epidemiology, global health, or health policy, and gain skills in data analysis and disease control."
    },
    {
      title: "Master's in Epidemiology",
      description: "Dive deep into infectious disease tracking, outbreak management, and statistical modeling."
    },
    {
      title: "Biostatistics and Data Science",
      description: "Focus on statistical methods for analyzing health-related data and predicting disease trends."
    },
    {
      title: "Global Health Studies",
      description: "Understand health challenges across the globe and develop strategies for large-scale disease prevention."
    },
    {
      title: "PhD in Epidemiology",
      description: "Pursue advanced research in disease etiology, control strategies, and health systems improvement."
    },
    {
      title: "Field Epidemiology Training Programs",
      description: "Participate in hands-on training programs like CDC’s Epidemic Intelligence Service to gain practical experience."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Career as an Epidemiologist</h1>
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

export default Epidemiologist;
