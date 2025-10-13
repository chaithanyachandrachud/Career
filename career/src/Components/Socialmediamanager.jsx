import React from 'react';
import './Soft.css'; // Import relevant CSS for styling

function SocialMediaManager() {
  const scopes = [
    {
      title: "Bachelor’s Degree in Marketing or Communications",
      description: "Start with a degree in marketing, communications, or a related field to build a strong foundation in digital strategies and audience engagement."
    },
    {
      title: "Master Social Media Platforms",
      description: "Gain expertise in platforms like Facebook, Instagram, Twitter, LinkedIn, and TikTok to understand their unique algorithms and audiences."
    },
    {
      title: "Learn Content Creation and Strategy",
      description: "Develop skills in creating engaging content, including graphics, videos, and written posts, that align with brand identity."
    },
    {
      title: "Analytics and Reporting",
      description: "Understand social media analytics tools like Google Analytics or Hootsuite to measure campaign performance and adjust strategies."
    },
    {
      title: "Work in Marketing Agencies",
      description: "Collaborate with marketing agencies to gain experience in managing diverse client portfolios and executing campaigns."
    },
    {
      title: "Freelance and Build Your Portfolio",
      description: "Offer freelance social media management services to businesses and showcase your successful campaigns in a professional portfolio."
    },
    {
      title: "Certifications in Social Media Marketing",
      description: "Pursue certifications such as HubSpot Social Media, Facebook Blueprint, or Google Digital Marketing to enhance your credentials."
    },
    {
      title: "Stay Updated with Trends",
      description: "Keep up with the latest social media trends, emerging platforms, and digital marketing tools to stay competitive in the field."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Career as a Social Media Manager</h1>
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

export default SocialMediaManager;
