import React from 'react';
import './ContactMe.css';
import profilePic from '../images/profile-light-formal.png';
import { FaCoffee, FaEnvelope, FaFileAlt, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { ContactMe as IContactMe } from '../types';

const resumeUrl = '/Adegbesan_Oludolapo_Resume%20(20).pdf';
const githubUrl = 'https://github.com/Havcker243';

const contactInfo: IContactMe = {
  profilePicture: { url: profilePic },
  name: 'Oludolapo Adegbesan',
  title: 'Full Stack AI & Cloud Software Engineer',
  summary:
    'Incoming Google Software Engineer Intern for Summer 2026 and full-stack AI/cloud engineer building products across React, Next.js, TypeScript, Python, FastAPI, Supabase, AWS, Vercel, and Render. I have shipped Gemini-powered privacy tooling at Google, payment identity infrastructure with APLITE, academic planning with FiskGrad, and recursive multi-agent orchestration with RAF.',
  companyUniversity: 'Fisk University - B.S. Computer Science - Dec 2026 - GPA 3.62',
  linkedinLink: 'https://www.linkedin.com/in/oludolapo-adegbesan-3168a7218/',
  email: 'omadegbesan27@my.fisk.edu',
  phoneNumber: '+1 (509) 919-5430',
};

const ContactMe: React.FC = () => {
  return (
    <div className="contact-container">
      <section className="contact-hero">
        <p className="hero-eyebrow">Now Booking New Work</p>
        <h1>Full Stack AI & Cloud Software Engineer</h1>
        <p className="hero-copy">{contactInfo.summary}</p>
        <div className="hero-buttons">
          <a
            href={contactInfo.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button primary"
          >
            <FaLinkedin /> Connect on LinkedIn
          </a>
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="hero-button secondary">
            <FaFileAlt /> Resume
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
            <FaLinkedin className="contact-icon" />
            <a
              href={contactInfo.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Message me on LinkedIn
            </a>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href={`mailto:${contactInfo.email}`} className="contact-link">
              {contactInfo.email}
            </a>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <a href={`tel:${contactInfo.phoneNumber.replace(/[^+\d]/g, '')}`} className="contact-link">
              {contactInfo.phoneNumber}
            </a>
          </div>
          <div className="contact-item">
            <FaGithub className="contact-icon" />
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="contact-link">
              GitHub Projects
            </a>
          </div>
          <div className="contact-item">
            <FaFileAlt className="contact-icon" />
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="contact-link">
              Download Resume
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
