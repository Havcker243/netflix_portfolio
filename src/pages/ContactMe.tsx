import React from 'react';
import './ContactMe.css';
import profilePic from '../images/sumanth.jpeg';
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from 'react-icons/fa';
import { ContactMe as IContactMe } from '../types';

const contactInfo: IContactMe = {
  profilePicture: { url: profilePic },
  name: 'Oludolapo Adegbesan',
  title: 'Backend Engineer · CS @ Fisk University',
  summary: 'Prev @ Google, Ashoka, Propel2Excel · Building AI copilots, developer tooling, and equitable communities.',
  companyUniversity: 'Fisk University · B.S. Computer Science · Dec 2026',
  linkedinLink: 'https://www.linkedin.com/in/oludolapo-adegbesan-3168a7218/',
  email: 'dolapoadegbesan301@gmail.com',
  phoneNumber: '+1 (509) 919-5430',
};

const ContactMe: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={profilePic} alt="Oludolapo Adegbesan" className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{contactInfo.name}</h3>
          <p className="badge-title">{contactInfo.title}</p>
          <p className="badge-description">
            {contactInfo.summary}
          </p>
          <p className="badge-company">{contactInfo.companyUniversity}</p>
          <a
            href={contactInfo.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>
      <div className="contact-header">
        <p>I'm always up for a chat or a coffee! Feel free to reach out.</p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${contactInfo.email}`} className="contact-link">
            {contactInfo.email}
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href={`tel:${contactInfo.phoneNumber}`} className="contact-link">
            {contactInfo.phoneNumber}
          </a>
        </div>
        <div className="contact-fun">
          <p>Or catch up over a coffee ☕</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
