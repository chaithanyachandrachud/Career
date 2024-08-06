import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="welcome-section">
        <h1>Welcome to Career Pathways</h1>
        <p>Discover your path forward with insights and resources tailored for you.</p>
      </header>

      <section className="career-pathways">
        <h2>Explore Career Pathways</h2>
        <p>Find the right educational path based on your interests and strengths.</p>
        {/* Add components or links for different pathways */}
      </section>

      <section className="assessments">
        <h2>Interest & Aptitude Assessments</h2>
        {/* Include links to assessment tools */}
      </section>

      <section className="resources">
        <h2>Educational Resources</h2>
        {/* Provide detailed course information and guides */}
      </section>

      <section className="stories">
        <h2>Success Stories</h2>
        {/* Showcase testimonials and stories */}
      </section>

      <section className="events">
        <h2>Workshops & Webinars</h2>
        {/* List upcoming events and registration links */}
      </section>

      <footer className="support">
        <h2>Community & Support</h2>
        <p>Join forums, find a mentor, or contact us for help.</p>
      </footer>
    </div>
  );
}

export default Home;
