import React from 'react';
import './Soft.css'; // Import relevant CSS for styling

function Contentcreator() {
  const scopes = [
    {
      title: "Develop Strong Writing and Storytelling Skills",
      description: "Enhance your ability to craft compelling narratives that resonate with your target audience, whether it's blogs, social media posts, or videos."
    },
    {
      title: "Learn Multimedia Tools",
      description: "Master tools like Adobe Photoshop, Premiere Pro, Canva, or Figma to create eye-catching visuals and edit engaging videos."
    },
    {
      title: "Understand SEO and Analytics",
      description: "Learn search engine optimization (SEO) techniques to make your content discoverable and use analytics tools to measure its impact."
    },
    {
      title: "Build a Personal Brand",
      description: "Create and maintain a consistent online presence on platforms like Instagram, YouTube, or TikTok to showcase your content and attract opportunities."
    },
    {
      title: "Collaborate with Brands",
      description: "Work with companies to create sponsored content that aligns with their marketing goals while staying authentic to your audience."
    },
    {
      title: "Freelance or Join Content Teams",
      description: "Offer freelance content creation services or join a content marketing team in organizations looking for creative storytellers."
    },
    {
      title: "Focus on Niche Expertise",
      description: "Choose a niche like travel, tech, food, or fitness to develop expertise and become a trusted voice in that area."
    },
    {
      title: "Stay Updated with Trends",
      description: "Keep track of the latest digital and content trends to create innovative and relatable material for your audience."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Career as a Content Creator</h1>
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

export default Contentcreator;
