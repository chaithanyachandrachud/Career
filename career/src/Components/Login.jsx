import React from 'react';
import './Login.css';
import bg from "../assets/bg.avif"
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-form-container">
          <div className="login-form">
            <h1>Login</h1>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" required />
              </div>
             <Link to="/Home"><button type="submit" className="login-button">Login</button></Link> 
            </form>
            
            <p className="signup-link">
              Don't have an account? <a href="/Signup">Sign up</a>
            </p>
          </div>
        </div>
        <div className="image-container">
          <img src={bg} alt="Background" />
        </div>
      </div>
    </div>
  );
}

export default Login;
