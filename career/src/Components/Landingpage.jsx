import React from 'react';
import careerVideo from "../assets/career.mp4"

function LandingPage() {
  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>Career Path</h1>
        <ul style={styles.navLinks}>
          <li><a href="#about" style={styles.navLink}>About</a></li>
          <li><a href="#features" style={styles.navLink}>Features</a></li>
          <li><a href="#contact" style={styles.navLink}>Contact</a></li>
        </ul>
      </nav>
      <header style={styles.hero}>
        <video style={styles.heroVideo} autoPlay loop muted>
          <source src={careerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </header>
      <section id="about" style={styles.section}>
        <div style={styles.contentWrapper}>
          <h3 style={styles.sectionTitle}>About Us</h3>
          <p style={styles.sectionContent}>
            At Career Path, we provide comprehensive guidance to help students choose the right career paths after 10th and +2. Our expert advice and tools are designed to assist you in making informed decisions for a successful future.
          </p>
          <img src="https://via.placeholder.com/400x250" alt="Career guidance" style={styles.image} />
        </div>
      </section>
      <section id="features" style={styles.section}>
        <div style={styles.contentWrapper}>
          <h3 style={styles.sectionTitle}>Our Features</h3>
          <ul style={styles.featuresList}>
            <li style={styles.featureItem}>Personalized Career Assessment Tests</li>
            <li style={styles.featureItem}>One-on-One Expert Guidance</li>
            <li style={styles.featureItem}>Extensive Career Resources</li>
            <li style={styles.featureItem}>Workshops and Webinars</li>
            <li style={styles.featureItem}>Interactive Learning Tools</li>
          </ul>
          <img src="https://via.placeholder.com/400x250" alt="Features" style={styles.image} />
        </div>
      </section>
      
      <footer id="contact" style={styles.footer}>
        <h3 style={styles.footerTitle}>Contact Us</h3>
        <p style={styles.footerContent}>Email: info@careerpath.com | Phone: 123-456-7890</p>
        <div style={styles.socialMedia}>
          <a href="#" style={styles.socialIcon}>Facebook</a>
          <a href="#" style={styles.socialIcon}>Twitter</a>
          <a href="#" style={styles.socialIcon}>LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
const styles = {
    container: {
      fontFamily: "'Arial', sans-serif",
      color: '#333',
      lineHeight: '1.6',
      padding: '0',
      margin: '0',
      overflowX: 'hidden',
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#4CAF50',
      padding: '1rem',
      position: 'fixed',
      width: '100%',
      top: '0',
      zIndex: '1000',
    },
    logo: {
      fontSize: '1.8rem',
      color: '#fff',
      fontWeight: 'bold',
    },
    navLinks: {
      listStyle: 'none',
      display: 'flex',
      gap: '1rem',
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '1.1rem',
      transition: 'color 0.3s',
    },
    hero: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh',
      position: 'relative',
      overflow: 'hidden',
      color: '#fff',
      textAlign: 'center',
      padding: '0 1rem',
      marginTop: '64px',
      width: '100%', // Ensure hero section spans full width
    },
    heroVideo: {
      position: 'absolute',
      top: '60px',
      left: '250px',
      width: '60%', // Ensure video spans full width
      height: '90%', // Ensure video spans full height
      objectFit: 'cover',
      zIndex: '-1',
    },
    heroContent: {
      position: 'relative',
      zIndex: '1',
      width: '100%', // Ensure hero content spans full width
      maxWidth: '1200px', // Optional: Limit the maximum width for better layout
    },
    heroTitle: {
      fontSize: '3.5rem',
      margin: '0',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    },
    heroSubtitle: {
      fontSize: '1.7rem',
      margin: '1rem 0',
    },
    heroButton: {
      padding: '0.8rem 1.6rem',
      fontSize: '1.1rem',
      color: '#fff',
      backgroundColor: '#ff5722',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      marginTop: '1rem', // Ensure space above the button
    },
    section: {
      padding: '3rem 1rem',
      backgroundColor: '#f9f9f9',
      display: 'flex',
      justifyContent: 'center',
    },
    contentWrapper: {
      maxWidth: '800px',
      textAlign: 'center',
    },
    sectionTitle: {
      fontSize: '2.5rem',
      marginBottom: '1rem',
      color: '#4CAF50',
    },
    sectionContent: {
      fontSize: '1.2rem',
      marginBottom: '1rem',
    },
    image: {
      width: '100%',
      maxWidth: '400px',
      height: 'auto',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      margin: '1rem 0',
    },
    featuresList: {
      listStyle: 'none',
      padding: '0',
      marginBottom: '1rem',
    },
    featureItem: {
      fontSize: '1.3rem',
      margin: '0.5rem 0',
    },
    testimonials: {
      padding: '3rem 1rem',
      backgroundColor: '#fff',
      textAlign: 'center',
    },
    testimonialCard: {
      maxWidth: '600px',
      margin: '1rem auto',
      backgroundColor: '#f4f4f4',
      padding: '1.5rem',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    testimonialContent: {
      fontSize: '1.1rem',
      fontStyle: 'italic',
    },
    testimonialAuthor: {
      fontSize: '1rem',
      fontWeight: 'bold',
      marginTop: '0.5rem',
    },
    footer: {
      backgroundColor: '#4CAF50',
      padding: '1.5rem',
      textAlign: 'center',
      color: '#fff',
    },
    footerTitle: {
      fontSize: '1.8rem',
      margin: '0.5rem 0',
    },
    footerContent: {
      fontSize: '1.1rem',
      marginBottom: '1rem',
    },
    socialMedia: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
    },
    socialIcon: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '1.2rem',
      transition: 'color 0.3s',
    },
  };
  
  export default LandingPage;
  
  