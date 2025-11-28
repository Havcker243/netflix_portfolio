import React from 'react';
import './Recommendations.css';

const letters = [
  {
    title: 'Recommendation Letter 1',
    file: 'Recommendation Letter 1.jpeg',
    summary: 'Leadership and technical depth highlighted by mentors.',
  },
  {
    title: 'Recommendation Letter 2',
    file: 'Recommendation Letter 2.jpeg',
    summary: 'Community organizing and student leadership accolades.',
  },
  {
    title: 'Recommendation Letter 3',
    file: 'Recommendation Letter 3.jpeg',
    summary: 'Recognition for AI/ML experimentation and grit.',
  },
  {
    title: 'Recommendation Letter 4',
    file: 'Recommendation Letter 4.jpeg',
    summary: 'Multi-year character reference grounded in service.',
  },
];

const Recommendations: React.FC = () => {
  const basePath = `${process.env.PUBLIC_URL}/Recommedndation%20letters`;

  return (
    <div className="recommendations-shell">
      <header className="recommendations-hero">
        <p className="eyebrow">Receipts from mentors & partners</p>
        <h1>Recommendation Letters</h1>
        <p>Downloadable scans from professors, program leads, and clients—hosted right in this portfolio.</p>
      </header>

      <div className="letters-grid">
        {letters.map(letter => (
          <article key={letter.file} className="letter-card">
            <div className="letter-frame">
              <img src={`${basePath}/${encodeURIComponent(letter.file)}`} alt={letter.title} loading="lazy" />
            </div>
            <footer className="letter-meta">
              <h3>{letter.title}</h3>
              <p>{letter.summary}</p>
              <a
                href={`${basePath}/${encodeURIComponent(letter.file)}`}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                View / Download
              </a>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
