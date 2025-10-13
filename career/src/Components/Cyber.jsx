import React from 'react';
import './Soft.css'; // Importing CSS for styling

function Cyber() {
  const scopes = [
    {
      title: "Bachelor’s Degree in Cybersecurity",
      description: "Pursue degrees like B.Tech in Cybersecurity or Information Security, focusing on network security, cryptography, risk management, and ethical hacking."
    },
    {
      title: "Cybersecurity Certifications",
      description: "Earn certifications like CEH (Certified Ethical Hacker), CISSP (Certified Information Systems Security Professional), or CompTIA Security+ to build your credibility."
    },
    {
      title: "Specializations in Cybersecurity",
      description: "Specialize in fields such as Penetration Testing, Cloud Security, Cyber Forensics, and Incident Response to work on advanced security solutions."
    },
    {
      title: "Network and Systems Security",
      description: "Focus on protecting networks and systems using firewalls, encryption, intrusion detection systems, and VPNs to safeguard against threats."
    },
    {
      title: "Internships and Practical Experience",
      description: "Gain hands-on experience by working as a cybersecurity intern, participating in Capture the Flag (CTF) competitions, or contributing to security research."
    },
    {
      title: "Advanced Studies in Cybersecurity",
      description: "Pursue a Master's degree or certifications like OSCP (Offensive Security Certified Professional) for advanced expertise in network security and ethical hacking."
    },
    {
      title: "Freelancing and Consulting",
      description: "Offer services as a freelance cybersecurity expert or consultant to businesses, helping them with vulnerability assessments, penetration testing, and data protection."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Cybersecurity Opportunities</h1>
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

export default Cyber;
