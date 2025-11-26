import React from 'react';
import './Awards.css';

interface Award {
  title: string;
  org: string;
  year: string;
  description: string;
}

const awards: Award[] = [
  {
    title: 'Career Prep Fellow',
    org: 'Management Leadership for Tomorrow',
    year: '2025 cohort',
    description: 'Selected for MLT's flagship fellowship to build executive presence, career strategy, and leadership alongside a national cohort of Black and Latinx technologists.',
  },
  {
    title: 'Brilliant Black Minds Ambassador',
    org: 'Karat',
    year: '2024 - present',
    description: 'Lead mock interviews and mentor engineers through technical readiness workshops so more HBCU students thrive in big tech interviews.',
  },
  {
    title: 'Engineering Fellow',
    org: 'Code2040',
    year: '2024 - present',
    description: 'Partner with industry mentors, deliver inclusive projects like PathFinderGPT, and give back through community teach-ins.',
  },
  {
    title: 'ColorStack Fellow',
    org: 'ColorStack',
    year: '2022 - present',
    description: 'Long-term community for Black and Latinx computer science majors; host peer-led study halls and recruiting workshops.',
  },
  {
    title: 'Amazon MSI Engagement Program',
    org: 'Amazon',
    year: '2024',
    description: 'Immersive experience with Amazon engineers focused on product thinking, interview prep, and pathways into SDE roles.',
  },
  {
    title: '2nd Place - Future of Work Academy',
    org: 'HP',
    year: '2024',
    description: 'Engineering lead for a GPT assistant that connected 80+ HBCU students to housing and jobs; finished 2nd among 15 finalist teams.',
  },
  {
    title: '2nd Place - CivicHacks',
    org: 'Major League Hacking',
    year: '2023',
    description: 'Built Community Reach, a civic-tech platform using HTML/CSS/JS that elevated neighborhood resources and earned "Best Civic Hack."',
  },
  {
    title: 'NSBE / BVCC / Amazon Campus Prep',
    org: 'Leadership & Service',
    year: 'Ongoing',
    description: 'Serve as a Student Leader for the BVCC SWE track, engage with NSBE Nashville, and completed Amazon's Campus Prep Series to mentor peers.',
  },
];

const Awards: React.FC = () => {
  return (
    <div className="awards-container">
      <div className="awards-header">
        <h2>Fellowships & Awards</h2>
        <p>Programs and communities that shape how I lead, build inclusive products, and give back to the next wave of engineers.</p>
      </div>
      <div className="awards-grid">
        {awards.map((award, index) => (
          <div key={index} className="award-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="award-meta">
              <span className="award-year">{award.year}</span>
              <span className="award-org">{award.org}</span>
            </div>
            <h3 className="award-title">{award.title}</h3>
            <p className="award-description">{award.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
