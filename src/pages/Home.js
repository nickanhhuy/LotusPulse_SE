import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">Lotus Pulse</div>
            <h1>Empowering Heart Health Through Intelligent Risk Assessment</h1>
            <p>Advanced AI-powered platform for early detection and prevention of heart disease. 
               Monitor, assess, and manage cardiovascular health with precision and care.</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => navigate('/patient/dashboard')}>
                Get Started
              </button>
              <button className="btn-secondary" onClick={() => navigate('/clinical/dashboard')}>
                For Healthcare Providers
              </button>
            </div>
          </div>
          <div className="hero-image">
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="feature-card" onClick={() => navigate('/patient/dashboard')}>
          <div className="feature-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <h3>Patient Portal</h3>
          <p>Access your personalized risk assessment, track your heart health journey, and receive actionable insights.</p>
        </div>

        <div className="feature-card" onClick={() => navigate('/clinical/dashboard')}>
          <div className="feature-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
              <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
            </svg>
          </div>
          <h3>Clinical Dashboard</h3>
          <p>Review patient assessments, manage clinical notes, and make informed treatment decisions.</p>
        </div>

        <div className="feature-card" onClick={() => navigate('/records/manage')}>
          <div className="feature-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
            </svg>
          </div>
          <h3>Records & Reporting</h3>
          <p>Efficiently manage patient records and generate comprehensive health reports.</p>
        </div>

        <div className="feature-card" onClick={() => navigate('/population/dashboard')}>
          <div className="feature-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
            </svg>
          </div>
          <h3>Population Monitoring</h3>
          <p>Monitor aggregated health trends and gain insights into community cardiovascular wellness.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
