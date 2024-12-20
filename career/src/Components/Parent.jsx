import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import "./Parent.css";

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

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/parentForm', formData);
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Error submitting form. Please try again later.');
    }
  };

  return (
    <div className="parent-form-container">
      <h1>Parent’s Information</h1>
      <form onSubmit={handleSubmit}>
        {/* Parent Details */}
        <label>
          Parent Name:
          <input
            type="text"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            placeholder="Enter parent name"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </label>

        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
        </label>

        <label>
          Preferred Communication Method:
          <select
            name="communicationMethod"
            value={formData.communicationMethod}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="inPerson">In Person</option>
          </select>
        </label>

        <label>
          Relationship with Child:
          <input
            type="text"
            name="relationship"
            value={formData.relationship}
            onChange={handleChange}
            placeholder="E.g., Mother, Father, Guardian"
          />
        </label>

        <label>
          Consent for Counseling:
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
          />
        </label>

        {/* Child Details */}
        <h2>Child’s Information</h2>

        <label>
          Child Name:
          <input
            type="text"
            name="childName"
            value={formData.childName}
            onChange={handleChange}
            placeholder="Enter child's name"
          />
        </label>

        <label>
          Age:
          <input
            type="number"
            name="childAge"
            value={formData.childAge}
            onChange={handleChange}
            placeholder="Enter child's age"
          />
        </label>

        <label>
          Gender:
          <select
            name="childGender"
            value={formData.childGender}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          Grade/Class:
          <input
            type="text"
            name="childGrade"
            value={formData.childGrade}
            onChange={handleChange}
            placeholder="Enter grade/class"
          />
        </label>

        <label>
          School Name:
          <input
            type="text"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleChange}
            placeholder="Enter school name"
          />
        </label>

        {/* Interests and Aspirations */}
        <h2>Interests and Aspirations</h2>

        <label>
          Subjects of Interest:
          <input
            type="text"
            name="subjectsInterest"
            value={formData.subjectsInterest}
            onChange={handleChange}
            placeholder="E.g., Science, Math, Arts"
          />
        </label>

        <label>
          Extracurricular Activities:
          <input
            type="text"
            name="extracurricularActivities"
            value={formData.extracurricularActivities}
            onChange={handleChange}
            placeholder="E.g., Sports, Music"
          />
        </label>

        <label>
          Current Grades/Performance:
          <textarea
            name="currentGrades"
            value={formData.currentGrades}
            onChange={handleChange}
            placeholder="Enter current grades or performance details"
          />
        </label>

        <label>
          Career Interests:
          <input
            type="text"
            name="careerInterests"
            value={formData.careerInterests}
            onChange={handleChange}
            placeholder="E.g., Doctor, Engineer"
          />
        </label>

        <label>
          Parent’s Aspirations for Child:
          <textarea
            name="parentAspirations"
            value={formData.parentAspirations}
            onChange={handleChange}
            placeholder="Describe your aspirations for your child"
          />
        </label>

        <label>
          Child’s Strengths:
          <textarea
            name="strengths"
            value={formData.strengths}
            onChange={handleChange}
            placeholder="E.g., Leadership, Creativity"
          />
        </label>

        <label>
          Preferred Stream:
          <input
            type="text"
            name="preferredStream"
            value={formData.preferredStream}
            onChange={handleChange}
            placeholder="E.g., Science, Commerce, Arts"
          />
        </label>

        <label>
          Plans for Higher Education:
          <input
            type="text"
            name="higherEducation"
            value={formData.higherEducation}
            onChange={handleChange}
            placeholder="E.g., Engineering, Medicine"
          />
        </label>

        <label>
          Preferred Study Location:
          <input
            type="text"
            name="studyLocation"
            value={formData.studyLocation}
            onChange={handleChange}
            placeholder="Enter location preference"
          />
        </label>

        <label>
          Special Needs or Accommodations:
          <textarea
            name="specialNeeds"
            value={formData.specialNeeds}
            onChange={handleChange}
            placeholder="Describe any special needs or accommodations"
          />
        </label>

        <label>
          Reason for Counseling:
          <textarea
            name="counselingReason"
            value={formData.counselingReason}
            onChange={handleChange}
            placeholder="Why are you seeking counseling?"
          />
        </label>

        <label>
          Preferred Mode of Counseling:
          <select
            name="counselingMode"
            value={formData.counselingMode}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="online">Online</option>
            <option value="inPerson">In Person</option>
          </select>
        </label>

        <Link to="/Home">
          <button type="submit">Submit</button>
        </Link>      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Parent;
