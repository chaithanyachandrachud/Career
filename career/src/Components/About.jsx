import React from 'react';
import './About.css';
import path from "../assets/path.jpg"

function About() {
  return (
    <div className="about-container">
    <div className="hero-section">
      <h1>About Career Pathways</h1>
      <p>Your Gateway to a Brighter Future</p>
    </div>

      <section className="intro-section">
        <h2>Welcome to Career Pathways</h2>
        <p>
          At Career Pathways, we are dedicated to helping students navigate the complexities of career planning. Our platform provides personalized guidance and resources to assist students in making informed decisions about their educational and professional futures. We believe that every student deserves access to the tools and support needed to achieve their dreams.
        </p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower students by providing them with accurate information, expert advice, and interactive tools to explore various career paths. We strive to create a supportive environment where students can discover their passions, understand their strengths, and make decisions that lead to fulfilling careers.
        </p>
      </section>

      <section className="vision-section">
        <h2>Our Vision</h2>
        <p>
          We envision a world where every student has access to the knowledge and resources needed to make informed career choices. Our goal is to bridge the gap between education and employment by offering a platform that connects students with career opportunities and professional growth.
        </p>
      </section>

      <section className="values-section">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Integrity:</strong> We are committed to providing honest and reliable information.</li>
          <li><strong>Innovation:</strong> We continuously seek new ways to enhance our platform and services.</li>
          <li><strong>Empathy:</strong> We understand and respect the unique needs and aspirations of each student.</li>
          <li><strong>Excellence:</strong> We strive for the highest standards in everything we do.</li>
        </ul>
      </section>

     

      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>
          Have questions or need further assistance? Feel free to reach out to us through our contact page or follow us on our social media channels. We're here to help you every step of the way.
        </p>
        <a href="/Contact" className="contact-link">Contact Us</a>
      </section>
    </div>
  );
}

export default About;
