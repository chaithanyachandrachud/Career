import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    class: '',
    stream: '',
    identity: '',
    career: '',
  });
  const [showAssistant, setShowAssistant] = useState(false); // State for AI Assistant visibility
  const navigate = useNavigate();

  const handleNext = () => {
    if (step === 3 && formData.identity === 'Parent') {
      navigate('/Parent');
    } else if (step === 4) {
      navigateToCareerPage();
    } else {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigateToCareerPage = () => {
    const { career } = formData;
    const careerRoutes = {
      'Technology and Engineering': '/Tech',
      'Healthcare and Medicine': '/Health',
      'Business and Finance': '/Business',
      'Arts and Media': '/Arts',
      'Education and Training': '/Education',
      'Science and Research': '/Science',
      'Law and Public Policy': '/Law',
      'Skilled Trades and Services': '/Skill',
    };

    if (careerRoutes[career]) {
      navigate(careerRoutes[career]);
    }
  };

  const renderFormStep = () => {
    const steps = {
      1: (
        <div className="form-step">
          <h2>Which class are you in? 🎓</h2>
          <div className="options">
            {['12th'].map((option) => (
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
      ),
      2: (
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
      ),
      3: (
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
      ),
      4: (
        <div className="form-step">
          <h2>Which career do you choose?</h2>
          <div className="options">
            {['Technology and Engineering', 'Healthcare and Medicine', 'Business and Finance', 'Arts and Media', 'Education and Training', 'Science and Research', 'Law and Public Policy', ].map((option) => (
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
      ),
    };

    return steps[step] || null;
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
          <button
            className="nav-button"
            onClick={handleNext}
            disabled={
              !formData[step === 1 ? 'class' : step === 2 ? 'stream' : step === 3 ? 'identity' : 'career']
            }
          >
            {step < 4 ? 'Next' : 'Submit'}
          </button>
        </div>
      </div>

      {/* AI Assistant Button */}
      <div className="ai-assistant">
  <button
    onClick={() => window.open('https://chat.openai.com/', '_blank')}
    className="ai-button"
  >
    Need More Assistance? Ask AI 🤖
  </button>
</div>



      {/* AI Assistant Pop-up */}
      {showAssistant && (
        <div className="ai-popup">
          <div className="ai-popup-content">
            <h2>AI Assistant</h2>
            <p>How can I help you today?</p>
            <button onClick={() => setShowAssistant(false)} className="close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
