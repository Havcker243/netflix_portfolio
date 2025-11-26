import React from 'react';
import './WorkPermit.css';
import { WorkPermit as IWorkPermit } from '../types';

const workPermitData: IWorkPermit = {
  visaStatus: 'F-1 Student Visa (CPT/OPT Eligible)',
  expiryDate: new Date('2026-12-31'),
  summary:
    'I am a Nigerian citizen studying Computer Science at Fisk University (B.S., Dec 2026) and authorized to work in the United States through CPT for internships and OPT upon graduation.',
  additionalInfo:
    'Open to relocation for roles that let me build inclusive AI-powered products. Happy to provide documentation for employers who have not sponsored F-1 students before.',
};

const WorkPermit: React.FC = () => {
  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">Work Authorization</h2>
        <p className="work-permit-summary">{workPermitData.summary}</p>
        <p className="work-permit-summary">
          I'm currently on a <strong>{workPermitData.visaStatus}</strong>, which enables me to work in the U.S. while pursuing my degree. My current employment authorization is valid until{' '}
          <strong>{new Date(workPermitData.expiryDate).toLocaleDateString()}</strong>, giving me time to build long-term experience with a mission-driven team.
        </p>
        <p className="additional-info">{workPermitData.additionalInfo}</p>
      </div>
    </div>
  );
};

export default WorkPermit;
