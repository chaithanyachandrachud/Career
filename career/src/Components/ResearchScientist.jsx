import React from 'react';
import './Soft.css'; // Importing CSS for consistent styling

function ResearchScientist() {
  const courses = [
    {
      title: "Bachelor's Degree in Biological Sciences",
      description: "Start your journey with a degree in biological sciences, focusing on topics like biology, chemistry, physics, and mathematics. A strong foundation is necessary for research-based careers."
    },
    {
      title: "Master's in Research Methodology",
      description: "This course dives deeper into research methodologies, statistical analysis, and experimental design. It's essential for conducting high-quality research in various scientific fields."
    },
    {
      title: "PhD in Research Science",
      description: "A PhD allows you to specialize in a particular area of research. Whether it's biotechnology, genetics, or environmental science, the PhD provides the knowledge and skills required for independent research."
    },
    {
      title: "Lab and Field Research Techniques",
      description: "Courses that focus on hands-on laboratory skills and field research techniques are essential for anyone pursuing a career as a research scientist."
    },
    {
      title: "Scientific Writing and Publishing",
      description: "Learn how to effectively communicate research findings through scientific papers and articles. Publishing your research in peer-reviewed journals is a key part of a research scientist's career."
    },
    {
      title: "Advanced Data Analysis for Scientists",
      description: "Data analysis is at the core of most scientific research. Learn advanced techniques for analyzing experimental data, using tools like R, Python, and MATLAB."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Research Scientist Career Path</h1>
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

export default ResearchScientist;
