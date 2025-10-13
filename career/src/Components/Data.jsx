import React from 'react';
import './Soft.css'; // Importing CSS for styling

const Data = () => {
  const scopes = [
    {
      title: "Bachelor’s Degree in Data Science/AI",
      description: "Pursue degrees such as B.Tech/B.E in Data Science or Artificial Intelligence to build a strong foundation in machine learning, statistics, and big data analytics."
    },
    {
      title: "Certifications and Online Courses",
      description: "Enroll in online certifications for Python, R, machine learning, deep learning, data visualization, and AI techniques through platforms like Coursera, edX, and Udemy."
    },
    {
      title: "Specializations in AI & Machine Learning",
      description: "Specialize in areas like Natural Language Processing (NLP), Computer Vision, Predictive Modeling, and Reinforcement Learning to work on cutting-edge AI solutions."
    },
    {
      title: "Data Engineering and Big Data",
      description: "Focus on managing large-scale data processing systems, using tools like Hadoop, Spark, and cloud platforms such as AWS and Google Cloud for data pipelines."
    },
    {
      title: "Internships and Real-World Projects",
      description: "Gain hands-on experience by working on real-world AI and data science projects through internships, Kaggle competitions, or contributing to open-source projects."
    },
    {
      title: "Advanced Studies in AI and Data Science",
      description: "Pursue a Master’s degree or PhD in Data Science, Artificial Intelligence, or Machine Learning to specialize in research and cutting-edge innovations."
    },
    {
      title: "Freelancing and Consultancy",
      description: "Start freelancing in data science and AI-related fields or offer consultancy services in predictive analytics, AI implementation, or business intelligence."
    }
  ];

  return (
    <div className="soft-container">
      <h1 className="soft-title">Explore Your Data Science and AI Opportunities</h1>
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
};

export default Data;
