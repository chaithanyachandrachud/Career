import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '', // subject
    message: '',
    contactMethod: 'email',
    educationLevel: '',
    location: '',
    consent: false,
    file: null,
    preferredContactTime: '', 
    socialMediaLinks: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for contacting us!');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input type="text" id="name" name="name" style={styles.input} value={formData.name} onChange={handleChange} placeholder="Full Name" required />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Email Address</label>
          <input type="email" id="email" name="email" style={styles.input} value={formData.email} onChange={handleChange} placeholder="Your Email" required />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="phone" style={styles.label}>Phone Number (Optional)</label>
          <input type="tel" id="phone" name="phone" style={styles.input} value={formData.phone} onChange={handleChange} placeholder="Your Phone Number" />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="subject" style={styles.label}>Subject/Inquiry Type</label>
          <select id="subject" name="subject" style={styles.select} value={formData.subject} onChange={handleChange} required>
            <option value="">Select Subject</option>
            <option value="general">General Inquiry</option>
            <option value="career">Career Counseling</option>
            <option value="technical">Technical Support</option>
          </select>
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="message" style={styles.label}>Message/Description</label>
          <textarea id="message" name="message" style={styles.textarea} value={formData.message} onChange={handleChange} placeholder="Your Message" required />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Preferred Mode of Contact</label>
          <label style={styles.radioLabel}>
            <input type="radio" name="contactMethod" value="email" checked={formData.contactMethod === 'email'} onChange={handleChange} />
            Email
          </label>
          <label style={styles.radioLabel}>
            <input type="radio" name="contactMethod" value="phone" checked={formData.contactMethod === 'phone'} onChange={handleChange} />
            Phone
          </label>
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="educationLevel" style={styles.label}>Education Level</label>
          <input type="text" id="educationLevel" name="educationLevel" style={styles.input} value={formData.educationLevel} onChange={handleChange} placeholder="Current Education Level" />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="location" style={styles.label}>Location</label>
          <input type="text" id="location" name="location" style={styles.input} value={formData.location} onChange={handleChange} placeholder="City or Region" />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="file" style={styles.label}>Attachment (Optional)</label>
          <input type="file" id="file" name="file" style={styles.fileInput} onChange={handleChange} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.checkboxLabel}>
            <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} />
            I agree to the collection of my data and the privacy policy.
          </label>
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="preferredContactTime" style={styles.label}>Preferred Time to Contact (Optional)</label>
          <input type="text" id="preferredContactTime" name="preferredContactTime" style={styles.input} value={formData.preferredContactTime} onChange={handleChange} placeholder="e.g., Morning, Afternoon" />
        </div>
       
        <button type="submit" style={styles.button}>Send Message</button>

      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    fontFamily: 'Arial, sans-serif',
    transition: 'box-shadow 0.3s ease',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
    fontSize: '24px',
    transition: 'color 0.3s ease',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: '#444',
    fontSize: '16px',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s ease',
  },
  select: {
    width: '100%',
    padding: '12px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s ease',
  },
  textarea: {
    width: '100%',
    height: '120px',
    padding: '12px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px',
    boxSizing: 'border-box',
    resize: 'vertical',
    transition: 'border-color 0.3s ease',
  },
  fileInput: {
    width: '100%',
    padding: '12px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s ease',
  },
  radioLabel: {
    marginRight: '20px',
    display: 'inline-block',
    fontSize: '16px',
    color: '#555',
  },
  checkboxLabel: {
    display: 'block',
    fontSize: '14px',
    color: '#555',
  },
  button: {
    padding: '14px 22px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
    transform: 'scale(1.02)',
  },
};

// document.querySelector('button').addEventListener('mouseover', () => {
//   document.querySelector('button').style.backgroundColor = styles.buttonHover.backgroundColor;
//   document.querySelector('button').style.transform = styles.buttonHover.transform;
// });

// document.querySelector('button').addEventListener('mouseout', () => {
//   document.querySelector('button').style.backgroundColor = styles.button.backgroundColor;
//   document.querySelector('button').style.transform = 'none';
// });

export default Contact;
