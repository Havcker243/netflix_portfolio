import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { ProfileBanner as ProfileBannerType } from '../types';

const bannerData: ProfileBannerType = {
  backgroundImage: {
    url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
  },
  headline: 'Oludolapo Adegbesan',
  resumeLink: {
    url: '/Adegbesan_Oludolapo_Resume__2_.pdf',
  },
  linkedinLink: 'https://www.linkedin.com/in/oludolapo-adegbesan-3168a7218/',
  profileSummary:
    "Backend-focused CS student at Fisk University (GPA 3.58) with experience at Google, Ashoka, HP's Future of Work Academy, and Propel2Excel. I build AI-powered tools, distributed systems, and developer experiences that keep accessibility and impact at the center.",
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
