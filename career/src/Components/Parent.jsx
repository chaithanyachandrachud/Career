import React, { useState } from 'react';
import "./Parent.css"

function Parent() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    communicationMethod: '',
    relationship: '',
    consent: false,
    childName: '',
    childAge: '',
    childGender: '',
    childGrade: '',
    schoolName: '',
    subjectsInterest: '',
    extracurricularActivities: '',
    currentGrades: '',
    careerInterests: '',
    parentAspirations: '',
    strengths: '',
    preferredStream: '',
    higherEducation: '',
    studyLocation: '',
    specialNeeds: '',
    counselingReason: '',
    counselingMode: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="parent-form-container">
      <h1>Parent’s Information</h1>
      <form onSubmit={handleSubmit}>
        <h2>1. Parent’s Details</h2>
        <label>
          Name:
          <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Preferred Method of Communication:
          <select name="communicationMethod" value={formData.communicationMethod} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="text">Text</option>
          </select>
        </label>
        <label>
          Relationship to the Child:
          <select name="relationship" value={formData.relationship} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="parent">Parent</option>
            <option value="guardian">Guardian</option>
          </select>
        </label>
        <label>
          Consent for Data Collection:
          <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} />
          I consent to data collection for counseling purposes
        </label>

        <h2>2. Child’s Information</h2>
        <label>
          Full Name:
          <input type="text" name="childName" value={formData.childName} onChange={handleChange} required />
        </label>
        <label>
          Age:
          <input type="number" name="childAge" value={formData.childAge} onChange={handleChange} required />
        </label>
        <label>
          Gender:
          <select name="childGender" value={formData.childGender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Grade/Year of Study:
          <input type="text" name="childGrade" value={formData.childGrade} onChange={handleChange} required />
        </label>
        <label>
          School/Institution Name:
          <input type="text" name="schoolName" value={formData.schoolName} onChange={handleChange} />
        </label>

        <h2>3. Academic Information</h2>
        <label>
          Subjects of Interest:
          <input type="text" name="subjectsInterest" value={formData.subjectsInterest} onChange={handleChange} required />
        </label>
        <label>
          Extracurricular Activities:
          <input type="text" name="extracurricularActivities" value={formData.extracurricularActivities} onChange={handleChange} />
        </label>
        <label>
          Current Grades/Performance:
          <input type="text" name="currentGrades" value={formData.currentGrades} onChange={handleChange} />
        </label>

        <h2>4. Career Interests and Preferences</h2>
        <label>
          Child’s Career Interests:
          <input type="text" name="careerInterests" value={formData.careerInterests} onChange={handleChange} required />
        </label>
        <label>
          Parent’s Career Aspirations for the Child:
          <input type="text" name="parentAspirations" value={formData.parentAspirations} onChange={handleChange} required />
        </label>
        <label>
          Skills/Strengths:
          <input type="text" name="strengths" value={formData.strengths} onChange={handleChange} />
        </label>

        <h2>5. Preferred Study Pathways</h2>
        <label>
          Preferred Stream:
          <input type="text" name="preferredStream" value={formData.preferredStream} onChange={handleChange} required />
        </label>
        <label>
          Preferred Higher Education:
          <input type="text" name="higherEducation" value={formData.higherEducation} onChange={handleChange} />
        </label>
        <label>
          Preferred Location for Study:
          <input type="text" name="studyLocation" value={formData.studyLocation} onChange={handleChange} />
        </label>

        <h2>6. Special Needs/Considerations</h2>
        <label>
          Learning Challenges or Disabilities:
          <input type="text" name="specialNeeds" value={formData.specialNeeds} onChange={handleChange} />
        </label>

        <h2>7. Counseling Needs</h2>
        <label>
          Reason for Seeking Counseling:
          <select name="counselingReason" value={formData.counselingReason} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="choosing-stream">Help in choosing a stream after 10th</option>
            <option value="selecting-career">Help in selecting a career after +2</option>
            <option value="higher-studies">Guidance on higher studies</option>
            <option value="general-career">General career guidance</option>
          </select>
        </label>
        <label>
          Preferred Mode of Counseling:
          <select name="counselingMode" value={formData.counselingMode} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="online">Online session</option>
            <option value="in-person">In-person</option>
            <option value="phone">Phone</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Parent;
