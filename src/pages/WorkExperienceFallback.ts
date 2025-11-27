import { TimelineItem } from '../types';

export const fallbackTimeline: TimelineItem[] = [
  {
    timelineType: 'work',
    name: 'Google - New York, NY',
    title: 'Associate Software Developer Intern',
    techStack: 'TypeScript | Gemini LLM | Chrome Extensions | Jasmine | Privacy',
    summaryPoints: [
      'Built a Gemini-powered Chrome extension that analyzes and summarizes privacy policies in real time without compromising on-device safety.',
      'Authored 30+ Jasmine tests and a custom evaluation pipeline comparing 5+ LLM prompts across 30 production policies to reduce hallucinations before launch.',
    ],
    dateRange: 'May 2025 - Aug 2025',
    sortOrder: 1,
  },
  {
    timelineType: 'work',
    name: 'Propel2Excel - Remote',
    title: 'Software Engineer',
    techStack: 'JavaScript | Python | SQL | MySQL | REST APIs',
    summaryPoints: [
      'Implemented the hiring board job API and surfaced 200 curated roles, growing student applications by 20%.',
      'Designed the MySQL persistence layer powering the new experience and automated ingestion routines that improved data access by 10%.',
    ],
    dateRange: 'Jun 2024 - Sep 2024',
    sortOrder: 2,
  },
  {
    timelineType: 'work',
    name: 'HP Future of Work Academy - Remote',
    title: 'Engineering Lead - 2nd Place Team',
    techStack: 'Custom GPT | API Integrations | Product Discovery',
    summaryPoints: [
      'Led development of a GPT assistant integrated with 5 APIs (jobs, housing, resume insights) that helps HBCU students plan relocations.',
      'Coordinated a 5-person engineering squad to test the tool with 80 students and secure 2nd place out of 15 teams.',
    ],
    dateRange: 'Aug 2024 - Sep 2024',
    sortOrder: 3,
  },
  {
    timelineType: 'work',
    name: 'Ashoka - Remote',
    title: 'Software Engineer Intern',
    techStack: 'Python | LangChain | REST APIs | UI Engineering',
    summaryPoints: [
      "Built an AI-powered summary tool that compiles details from fellows' websites and LinkedIn profiles, reducing internal research time by 20%.",
      'Delivered verification workflows with approval/reject controls and API endpoints so staff could curate accurate program data (10% faster review cycles).',
    ],
    dateRange: 'May 2024 - Aug 2024',
    sortOrder: 4,
  },
  {
    timelineType: 'education',
    name: 'Fisk University - Nashville, TN',
    title: 'B.S. Computer Science - GPA 3.58',
    techStack: 'Windows App Dev | Data Structures | Networks | Data Management',
    summaryPoints: [
      'Coursework: Windows Application Development, Data Structures and Algorithms, Internet Application Development, Networks, Database Management, Digital Logic Design.',
      'Leadership: Brilliant Black Minds Ambassador, Code2040 Fellow, Propel2Excel Fellow, MLT Career Prep, NSBE, ColorStack.',
    ],
    dateRange: 'Jan 2023 - Dec 2026 (expected)',
    sortOrder: 90,
  },
  {
    timelineType: 'education',
    name: 'Whitworth University - Spokane, WA',
    title: 'B.S. Computer Science (transfer)',
    techStack: 'Student Leadership | Community Outreach',
    summaryPoints: [
      'Served as Black Student Union Treasurer and Computer Science TA; increased org fundraising 20% and mentored 10+ students in Python and C++.',
    ],
    dateRange: 'Sep 2021 - May 2024',
    sortOrder: 95,
  },
];
