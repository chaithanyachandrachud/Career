import React from 'react';
import './Soft.css'; // Importing CSS for styling

function Network() {
  const scopes = [
    {
      title: "Bachelor’s Degree in Network Engineering",
      description: "Pursue degrees like B.Tech/B.E in Computer Networks, Information Technology, or related fields, focusing on network design, network security, and telecommunications."
    },
    {
      title: "Certifications for Network Engineers",
      description: "Earn certifications like CCNA (Cisco Certified Network Associate), CCNP (Cisco Certified Network Professional), CompTIA Network+, or CWNA (Certified Wireless Network Administrator) for career advancement."
    },
    {
      title: "Specializations in Network Engineering",
      description: "Specialize in areas like cloud networking, network security, wireless networks, or software-defined networking (SDN) to enhance specific skill sets."
    },
    {
      title: "Internships and Practical Experience",
      description: "Gain hands-on experience by interning with network service providers or IT companies, working on real-world projects related to network infrastructure or cybersecurity."
    },
    {
      title: "Master’s and Higher Studies in Network Engineering",
      description: "Pursue advanced degrees such as M.Tech or an MS in Network Engineering, focusing on advanced network architectures, cybersecurity, or cloud networking."
    },
    {
      title: "Network Administration and Management",
      description: "Transition into roles like network administrator, network analyst, or systems engineer, managing large-scale network infrastructures and ensuring secure communication."
    },
    {
      title: "Consultancy and Freelancing in Network Engineering",
      description: "Work as a freelance network consultant or start your own consultancy, providing network design, security assessments, or cloud migration solutions."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Network Engineering Opportunities</h1>
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

export default Network;
