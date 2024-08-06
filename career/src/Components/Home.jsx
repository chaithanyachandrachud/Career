import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    class: '',
    stream: '',
    identity: '',
    career: '',
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-step">
            <h2>Which class are you in? 🎓</h2>
            <div className="options">
              {['10th', '11th', '12th',].map((option) => (
                <button
                  key={option}
                  name="class"
                  value={option}
                  onClick={handleChange}
                  className={formData.class === option ? 'selected' : ''}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="form-step">
            <h2>Which stream are you in?</h2>
            <div className="options">
              {['Comp with Maths', 'PCM', 'PCB', 'Comp without Math', 'Arts with Math', 'Arts without Math', 'PCMB'].map((option) => (
                <button
                  key={option}
                  name="stream"
                  value={option}
                  onClick={handleChange}
                  className={formData.stream === option ? 'selected' : ''}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="form-step">
            <h2>Tell us who you are</h2>
            <div className="options">
              {['Student', 'Parent'].map((option) => (
                <button
                  key={option}
                  name="identity"
                  value={option}
                  onClick={handleChange}
                  className={formData.identity === option ? 'selected' : ''}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="form-step">
            <h2>Which career do you choose?</h2>
            <div className="options">
              {['Technology and Engineering', 'Healthcare and Medicine', 'Business and Finance', 'Arts and Media', 'Education and Training', 'Science and Research', 'Law and Public Policy', 'Skilled Trades and Services'].map((option) => (
                <button
                  key={option}
                  name="career"
                  value={option}
                  onClick={handleChange}
                  className={formData.career === option ? 'selected' : ''}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="home-container">
      <header className="welcome-section">
        <h1>Welcome to Career Pathways</h1>
        <p>Discover your path forward with insights and resources tailored for you.</p>
      </header>

      <div className="form-container">
        <div className="progress-indicator">
          <span>{step}/4</span>
        </div>
        {renderFormStep()}
        <div className="form-navigation">
          {step > 1 && (
            <button className="nav-button" onClick={handlePrev}>
              Previous
            </button>
          )}
          {step < 4 && (
            <button
              className="nav-button"
              onClick={handleNext}
              disabled={!formData[step === 1 ? 'class' : step === 2 ? 'stream' : 'identity']}
            >
              Next
            </button>
          )}
          {step === 4 && (
            <button
              className="nav-button"
              onClick={() => alert('Form submitted!')}
              disabled={!formData.career}
            >
              Save & Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
