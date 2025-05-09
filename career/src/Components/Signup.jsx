import React from 'react';
import { Link } from 'react-router-dom'; // Import Link here
import './Signup.css'; // Ensure this file exists and is correctly linked
import sign from "../assets/sign.jpg";

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-form-container">
          <div className="signup-form">
            <h1>Sign Up</h1>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" required />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" required />
              </div>
              <Link to="/Login">
                <button type="button" className="signup-button">Sign Up</button>
              </Link>
            </form>
            <p className="login-link">
              Already have an account? <Link to="/Login">Log in</Link>
            </p>
          </div>
        </div>
        <div className="image-container">
          <img src={sign} alt="Background" />
        </div>
      </div>
    </div>
  );
}

export default Signup;
