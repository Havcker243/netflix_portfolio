import React from 'react';
import './ContactMe.css';
import profilePic from '../images/profile-light-formal.png';
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from 'react-icons/fa';
import { ContactMe as IContactMe } from '../types';

const contactInfo: IContactMe = {
  profilePicture: { url: profilePic },
  name: 'Oludolapo Adegbesan',
  title: 'Backend Engineer / CS @ Fisk University',
  summary:
    'Previously built AI copilots at Google, Ashoka, and Propel2Excel. I love crafting developer tools that support equitable communities.',
  companyUniversity: 'Fisk University / B.S. Computer Science / Dec 2026',
  linkedinLink: 'https://www.linkedin.com/in/oludolapo-adegbesan-3168a7218/',
  email: 'dolapoadegbesan301@gmail.com',
  phoneNumber: '+1 (509) 919-5430',
};

const ContactMe: React.FC = () => {
  return (
    <div className="contact-container">
      <section className="contact-hero">
        <p className="hero-eyebrow">Hire Me</p>
        <h1>Let&rsquo;s build products people keep talking about.</h1>
        <p className="hero-copy">
          I blend backend engineering, AI copilots, and community-first storytelling. If you need someone who can ship
          quickly, document rigorously, and keep teams energized, I&rsquo;m ready.
        </p>
        <div className="hero-buttons">
          <a href={`mailto:${contactInfo.email}`} className="hero-button primary">
            Email Me
          </a>
          <a
            href={contactInfo.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button secondary"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </section>

      <section className="contact-grid">
        <div className="linkedin-badge-custom">
          <img src={contactInfo.profilePicture.url} alt="Oludolapo Adegbesan" className="badge-avatar" />
          <div className="badge-content">
            <h3 className="badge-name">{contactInfo.name}</h3>
            <p className="badge-title">{contactInfo.title}</p>
            <p className="badge-description">{contactInfo.summary}</p>
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
            <p>Prefer IRL? Let&rsquo;s grab a coffee &#9749;</p>
            <FaCoffee className="coffee-icon" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
