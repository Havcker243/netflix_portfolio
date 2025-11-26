import React from 'react';
import './Skills.css';

import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJava, FaPython } from 'react-icons/fa';
import { SiRubyonrails, SiTypescript, SiPostgresql, SiMysql, SiKubernetes, SiGooglecloud, SiSpringboot, SiPhp, SiNetlify, SiHeroku, SiHtml5, SiCss3, SiRabbitmq, SiImessage } from 'react-icons/si';
import { Skill } from '../types';

const iconMap: { [key: string]: JSX.Element } = {
  SiRubyonrails: <SiRubyonrails />,
  FaNodeJs: <FaNodeJs />,
  SiSpringboot: <SiSpringboot />,
  FaJava: <FaJava />,
  SiPhp: <SiPhp />,
  FaReact: <FaReact />,
  SiTypescript: <SiTypescript />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiKubernetes: <SiKubernetes />,
  SiGooglecloud: <SiGooglecloud />,
  SiHeroku: <SiHeroku />,
  SiNetlify: <SiNetlify />,
  SiRabbitmq: <SiRabbitmq />,
  SiImessage: <SiImessage />,
  FaPython: <FaPython />,
};

const skillsData: Skill[] = [
  {
    name: 'TypeScript + React',
    category: 'Frontend Engineering',
    description: 'Ship accessible UI systems, streaming dashboards, and Netflix-style experiences that feel fast on any screen.',
    icon: 'FaReact',
  },
  {
    name: 'Node.js APIs',
    category: 'Backend Engineering',
    description: 'Design REST/GraphQL services, build career-tools like PathFinderGPT, and wire up reliable auth + data pipelines.',
    icon: 'FaNodeJs',
  },
  {
    name: 'Python + LangChain',
    category: 'AI/ML & Automation',
    description: 'Prototype GPT assistants, summarization tools, and ML-driven workflows (Studyme, Ashoka AI summary system).',
    icon: 'FaPython',
  },
  {
    name: 'C/C++ & Systems Thinking',
    category: 'Core Languages',
    description: 'Grounded in algorithms and memory models from coursework and teaching assistantships.',
    icon: 'FaJava',
  },
  {
    name: 'Databases',
    category: 'Data Layer',
    description: 'Model relational + NoSQL data in MySQL, PostgreSQL, and MongoDB; ship migrations + analytics-ready schemas.',
    icon: 'SiPostgresql',
  },
  {
    name: 'Cloud & DevOps',
    category: 'Infrastructure',
    description: 'Deploy on AWS (Lambda, ECS, Amplify), manage Docker images, automate CI/CD, and experiment with Terraform/Kubernetes.',
    icon: 'FaAws',
  },
  {
    name: 'Distributed Caching',
    category: 'Systems',
    description: 'Design Redis-powered caching layers and API gateways that keep latency predictable for AI + data-heavy apps.',
    icon: 'FaDocker',
  },
  {
    name: 'Community & Leadership',
    category: 'Human Skills',
    description: 'Ambassador + fellow at Brilliant Black Minds, Code2040, ColorStack, MLT, and NSBE; mentor first-gen engineers.',
    icon: 'FaGitAlt',
  },
];

const Skills: React.FC = () => {

  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});


  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter: any, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
