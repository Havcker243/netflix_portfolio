import React from 'react';
import './Recommendations.css';
import chrisProfilePic from '../images/chris.jpg';

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">
          <img src={chrisProfilePic} alt="Seyi Adebayo" className="profile-pic" />
          <div>
            <h3>Seyi Adebayo</h3>
            <p>Engineering Manager, Google</p>
            <p className="date">September 12, 2025</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>"Oludolapo showed up to the Google Privacy org with the curiosity and rigor of a seasoned engineer. Within weeks she delivered a Gemini-powered Chrome extension that reads and summarizes dense privacy policies entirely on-device."</p>
          <p>"She paired that shipping mindset with real discipline: 30+ Jasmine tests, a bespoke evaluation harness for LLM prompts, and proactive reviews to keep our responses trustworthy. Every sprint, she connected the dots between user trust and technical detail."</p>
          <p>"Beyond code, Oludolapo invests in people. She mentored other interns on debugging Chrome APIs, volunteers with Brilliant Black Minds, and shares career resources with our HBCU partner programs. Her impact is multiplicative."</p>
          <p>"If you need someone who can architect AI-assisted experiences and amplify every room she enters, bring Oludolapo onto your team."</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;