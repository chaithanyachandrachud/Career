import React from 'react';
import './Soft.css'; // Importing CSS for consistent styling

function Designer() {
  const scopes = [
    {
      title: "Degrees in Instructional Design or Related Fields",
      description: "Pursue degrees like B.A./B.Sc. in Education, Instructional Design, or Educational Technology to build a strong foundation in designing effective learning experiences."
    },
    {
      title: "Certifications in Instructional Design",
      description: "Earn certifications like Certified Professional in Learning and Performance (CPLP) or eLearning Design certifications to enhance your skills."
    },
    {
      title: "Proficiency in Learning Management Systems (LMS)",
      description: "Gain expertise in platforms like Moodle, Blackboard, or Canvas to create and manage online courses effectively."
    },
    {
      title: "Mastery of Authoring Tools",
      description: "Learn tools like Articulate Storyline, Adobe Captivate, or Camtasia to create engaging and interactive eLearning content."
    },
    {
      title: "Understanding of Learning Theories",
      description: "Develop knowledge of learning models such as ADDIE, Bloom's Taxonomy, or Kirkpatrick’s Model to design impactful educational programs."
    },
    {
      title: "Hands-On Experience in Content Development",
      description: "Collaborate with subject matter experts to create training materials, videos, and eLearning modules for diverse audiences."
    },
    {
      title: "Freelancing and Consulting in Instructional Design",
      description: "Offer instructional design services to organizations, schools, or online course creators as a freelancer or consultant."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Career as an Instructional Designer</h1>
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

export default Designer;
