import React from 'react';
import './Soft.css'; // Importing CSS for styling

function Cloud() {
  const scopes = [
    {
      title: "Bachelor’s Degree in Cloud Computing or Related Fields",
      description: "Pursue degrees like B.Tech/B.E in Cloud Computing, Information Technology, or Computer Science, focusing on cloud infrastructure, virtualization, and cloud security."
    },
    {
      title: "Certifications for Cloud Professionals",
      description: "Earn certifications such as AWS Certified Solutions Architect, Microsoft Azure Fundamentals, Google Cloud Certified, or CompTIA Cloud+ for career advancement."
    },
    {
      title: "Specializations in Cloud Computing",
      description: "Specialize in areas like cloud security, DevOps, cloud architecture, or multi-cloud management to align with specific career paths."
    },
    {
      title: "Internships and Practical Experience",
      description: "Gain hands-on experience by interning with cloud service providers or IT firms, working on cloud migration, deployment, or cloud-native development projects."
    },
    {
      title: "Master’s and Higher Studies in Cloud Computing",
      description: "Pursue advanced degrees such as M.Tech or MS in Cloud Computing, focusing on cloud architecture, hybrid cloud systems, or cloud security solutions."
    },
    {
      title: "Cloud Administration and DevOps Roles",
      description: "Transition into roles like cloud administrator, cloud engineer, or DevOps engineer, managing cloud infrastructure, deployment pipelines, and automating processes."
    },
    {
      title: "Cloud Consulting and Freelancing",
      description: "Start your own cloud consulting business or work as a freelance cloud architect, offering services like cloud migration, optimization, or security solutions."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Cloud Computing Opportunities</h1>
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

export default Cloud;
