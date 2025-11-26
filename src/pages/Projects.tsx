import React from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaAngular, FaGithub, FaGitlab, FaGoogle, FaJava, FaJenkins, FaMicrosoft, FaPython, FaVuejs } from 'react-icons/fa';
import { SiRubyonrails, SiPostgresql, SiMongodb, SiMaterialdesign, SiHtml5, SiCss3, SiJquery, SiAwsamplify, SiFirebase, SiTerraform, SiArgo } from 'react-icons/si';
import { Project } from '../types';
import { GrDeploy, GrKubernetes } from "react-icons/gr";

const techIcons: { [key: string]: JSX.Element } = {
  "ReactJS": <FaReact />,
  "NodeJS": <FaNodeJs />,
  "AWS": <FaAws />,
  "PostgreSQL": <SiPostgresql />,
  "MongoDB": <SiMongodb />,
  "Ruby On Rails": <SiRubyonrails />,
  "Material UI": <SiMaterialdesign />,
  "HTML5": <SiHtml5 />,
  "CSS3": <SiCss3 />,
  "jQuery": <SiJquery />,
  "AWS-ECS": <SiAwsamplify />,
  'Cognito': <FaAws />,
  'Lambda': <FaAws />,
  'ECS': <FaAws />,
  'Jenkins': <FaJenkins />,
  'Docker': <FaDocker />,
  'GraphQL': <FaDatabase />,
  'CI/CD': <FaGitlab />,
  'GitLab': <FaGitlab />,
  'GitHub': <FaGithub />,
  'Heroku': <GrDeploy />,
  'Netlify': <GrDeploy />,
  'Firebase': <SiFirebase />,
  'GCP': <FaGoogle />,
  'Azure': <FaMicrosoft />,
  'Kubernetes': <GrKubernetes />,
  'Terraform': <SiTerraform />,
  'ArgoCD': <SiArgo />,
  'Java': <FaJava />,
  'Spring Boot': <FaJava />,
  'Python': <FaPython />,
  'Node.js': <FaNodeJs />,
  'Express.js': <FaNodeJs />,
  'Hibernate': <FaJava />,
  'Maven': <FaJava />,
  'Gradle': <FaJava />,
  'JUnit': <FaJava />,
  'Mockito': <FaJava />,
  'Jest': <FaReact />,
  'React': <FaReact />,
  'Angular': <FaAngular />,
  'Vue.js': <FaVuejs />,
  'Next.js': <FaReact />,
  'Gatsby': <FaReact />,
  'Nuxt.js': <FaVuejs />,
  'Redux': <FaReact />,
  'Vuex': <FaVuejs />,
  'Tailwind CSS': <SiCss3 />,
  'Bootstrap': <SiCss3 />,
  'JQuery': <SiJquery />,
};


const projectData: Project[] = [
  {
    title: 'Studyme',
    description:
      'Building an AI study co-pilot that ingests PDFs/DOCX/PPTX, generates summaries, explanations, and flashcards, and links to targeted web research results.',
    techUsed: 'Flask.py, OpenAI, MongoDB, AWS, Redis',
    image: { url: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80' },
  },
  {
    title: 'Real-Time Object & Emotion Detection',
    description:
      'YOLOv3 + TensorFlow pipeline for multi-object detection, Haar cascades for face tracking, and CNN-based emotion classifier optimized with custom NMS and Euclidean distance heuristics.',
    techUsed: 'Python, OpenCV, TensorFlow, YOLOv3',
    image: { url: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80' },
  },
  {
    title: 'PathFinderGPT',
    description:
      'Career-roadmap web app powered by custom Flask endpoints + OpenAI API; React/Tailwind front end orchestrates prompts and displays next-best-step recommendations.',
    techUsed: 'React.js, Flask.py, OpenAI API, Tailwind CSS',
    image: { url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80' },
  },
  {
    title: 'Text Frequency Analyzer',
    description:
      'C/C++ CLI tooling for rapid word-frequency and sentiment analysis with GoogleTest coverage and export options (CSV/JSON/TXT) for downstream insights.',
    techUsed: 'C/C++, GoogleTest, Algorithms, Sentiment',
    image: { url: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1200&q=80' },
  },
];

const githubShowcaseUrl = 'https://github.com/Havcker243?tab=repositories';

const Projects: React.FC = () => {
  const projects = projectData;

  return (
    <div className="projects-container">
      <div className="projects-cta">
        <div>
          <h2>Live Builds & Experiments</h2>
          <p>More shipping logs, hackathon artifacts, and AI experiments live on my GitHub.</p>
        </div>
        <a href={githubShowcaseUrl} target="_blank" rel="noopener noreferrer" className="github-link">
          <FaGithub /> Explore GitHub
        </a>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <img src={project.image.url} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || '[tool]'} {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
