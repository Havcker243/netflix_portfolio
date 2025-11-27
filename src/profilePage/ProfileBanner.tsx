import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { ProfileBanner as ProfileBannerType } from '../types';

const bannerData: ProfileBannerType = {
  backgroundImage: {
    url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
  },
  headline: 'Full Stack AI & Cloud Software Engineer',
  resumeLink: {
    url: '/Adegbesan_Oludolapo_Resume__2_.pdf',
  },
  linkedinLink: 'https://www.linkedin.com/in/oludolapo-adegbesan-3168a7218/',
  profileSummary:
    'Experienced software engineer focused on distributed systems, AI copilots, and cloud-native services. I build LLM-powered Chrome extensions, LangChain automation, and React experiences backed by Python, TypeScript, Flask, Node.js, MongoDB, Redis, and AWS. From Gemini-driven privacy tooling at Google to GPT copilots for HP FOWA, I ship scalable APIs, craft amazing developer experiences, and center inclusive design in every release.',
};

interface ProfileBannerProps {
  backgroundImageUrl?: string;
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({ backgroundImageUrl }) => {
  const heroBackground = backgroundImageUrl ?? bannerData.backgroundImage.url;
  const handlePlayClick = () => {
    window.open(bannerData.resumeLink.url, '_blank');
  };

  const handleLinkedinClick = () => {
    window.open(bannerData.linkedinLink, '_blank');
  };

  return (
    <div
      className="profile-banner"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.9) 100%), url(${heroBackground})`,
      }}
    >
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">
          {bannerData.headline}
        </h1>
        <p className="banner-description">{bannerData.profileSummary}</p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
