import React from 'react';
import './Soft.css'; // Importing the same CSS for styling

function Teacher() {
  const scopes = [
    {
      title: "Bachelor’s Degree in Education",
      description: "Pursue degrees like B.Ed, focusing on foundational teaching methods, classroom management, and educational psychology."
    },
    {
      title: "Certifications for Teachers",
      description: "Earn certifications like TET (Teacher Eligibility Test), TESOL (Teaching English to Speakers of Other Languages), or specific subject-based certifications."
    },
    {
      title: "Specializations in Teaching",
      description: "Specialize in areas such as Special Education, Early Childhood Education, or STEM (Science, Technology, Engineering, and Mathematics) education."
    },
    {
      title: "Internships and Practical Experience",
      description: "Gain practical teaching experience through internships or student-teaching programs in schools, both in-person and online."
    },
    {
      title: "Master’s and Higher Studies in Education",
      description: "Pursue advanced degrees like M.Ed (Master of Education) or PhD in Education, focusing on advanced pedagogy, curriculum development, or educational leadership."
    },
    {
      title: "Teaching Roles and Career Advancement",
      description: "Start as a classroom teacher, and later advance into roles like curriculum coordinator, educational consultant, or principal."
    },
    {
      title: "Freelance Tutoring and Online Education",
      description: "Teach as a freelance tutor or work in online education platforms, providing personalized learning experiences to students globally."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Teaching Career Opportunities</h1>
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

export default Teacher;
