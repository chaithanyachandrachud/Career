import React from 'react';
import './Soft.css'; // Importing CSS for styling

function Telecommunication() {
  const scopes = [
    {
      title: "Bachelor’s Degree in Telecommunication Engineering",
      description: "Pursue degrees like B.Tech/B.E in Telecommunication Engineering or Electronics & Communication, focusing on networking, wireless communication, and signal processing."
    },
    {
      title: "Certifications for Telecommunication Professionals",
      description: "Earn certifications like CCNA (Cisco Certified Network Associate), 5G Technology, or Certified Telecommunications Network Specialist (CTNS) for career advancement."
    },
    {
      title: "Specializations in Telecommunication",
      description: "Specialize in fields like fiber optics, satellite communication, mobile networks (5G/6G), or network security for specific career paths."
    },
    {
      title: "Internships and Practical Experience",
      description: "Gain hands-on experience by interning with telecom companies or ISPs, working on network installations, wireless systems, or signal processing."
    },
    {
      title: "Master’s and Higher Studies in Telecommunication",
      description: "Pursue advanced degrees such as M.Tech or MS in Telecommunication Engineering, focusing on advanced wireless technologies, IoT, or next-gen communication systems."
    },
    {
      title: "Network Engineering and Telecom Roles",
      description: "Transition into roles like network engineer, telecom analyst, or RF engineer, designing and managing communication networks for enterprises."
    },
    {
      title: "Consultancy and Freelancing in Telecommunication",
      description: "Work as a telecom consultant or freelancer, offering services in network planning, telecom infrastructure development, or telecom project management."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Telecommunication Engineering Opportunities</h1>
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

export default Telecommunication;
