import React from 'react';
import './Soft.css'; // Import relevant CSS for styling

function VideoProducer() {
  const scopes = [
    {
      title: "Bachelor’s Degree in Film or Media Studies",
      description: "Start your career with a degree in film production, media studies, or a related field to gain foundational knowledge about video production."
    },
    {
      title: "Develop Technical Skills",
      description: "Master video editing software like Adobe Premiere Pro, Final Cut Pro, or DaVinci Resolve to enhance your production capabilities."
    },
    {
      title: "Build a Demo Reel",
      description: "Create a demo reel showcasing your best video projects, including commercials, short films, or promotional videos, to attract clients or employers."
    },
    {
      title: "Gain Experience on Set",
      description: "Work as an assistant on film sets or in production studios to gain hands-on experience and learn from industry professionals."
    },
    {
      title: "Work in Advertising and Media",
      description: "Collaborate with advertising agencies or media production companies to create promotional videos, documentaries, and branded content."
    },
    {
      title: "Freelance Opportunities",
      description: "Offer your services as a freelance video producer for events, corporate videos, or social media campaigns to expand your portfolio."
    },
    {
      title: "Pursue Advanced Education",
      description: "Consider advanced certifications in cinematography, post-production, or directing to refine your skills and broaden career opportunities."
    },
    {
      title: "Stay Updated with Industry Trends",
      description: "Keep up with the latest video production techniques, tools, and trends by attending workshops, online courses, and networking events."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Career as a Video Producer</h1>
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

export default VideoProducer;
