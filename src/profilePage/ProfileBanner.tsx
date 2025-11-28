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
    "From building privacy tools at Google to creating GPT agents that help HBCU students find housing and jobs, I design software that makes complex things simple. I work across the stack (React, Python, TypeScript, cloud platforms) crafting AI powered products that scale cleanly and feel effortless to use. Code2040, MLT, and BVCC taught me that engineering isn't just about shipping code; it's about understanding who you build for and opening doors with every release.",
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
