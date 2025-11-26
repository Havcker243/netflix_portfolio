import React, { useEffect, useMemo, useState } from 'react';
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


const spotlightProjects: Project[] = [
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

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  homepage?: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  topics?: string[];
  fork: boolean;
  archived: boolean;
}

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/Havcker243/repos?per_page=100&sort=updated', {
          headers: {
            Accept: 'application/vnd.github+json',
          },
        });
        if (!response.ok) {
          throw new Error('GitHub API rate limit reached. Please try again in a few minutes.');
        }
        const data: GitHubRepo[] = await response.json();
        const filtered = data
          .filter(repo => !repo.fork && !repo.archived)
          .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());
        setRepos(filtered);
      } catch (err: any) {
        setError(err.message || 'Unable to load repositories right now.');
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  const repoSamples = useMemo(() => repos.slice(0, 9), [repos]);

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
      <section className="project-section">
        <h3>Spotlight Builds</h3>
        <div className="projects-grid">
          {spotlightProjects.map((project, index) => (
            <div
              key={project.title}
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
      </section>

      <section className="project-section">
        <h3>Latest from GitHub</h3>
        {loading && <p className="projects-status">Loading GitHub repositories...</p>}
        {error && <p className="projects-status error">{error}</p>}
        <div className="repo-grid">
          {repoSamples.map(repo => (
            <div key={repo.id} className="repo-card">
              <div className="repo-card-header">
                <h4>{repo.name}</h4>
                {repo.language && <span className="language-pill">{repo.language}</span>}
              </div>
              <p className="repo-description">{repo.description || 'No description provided yet.'}</p>
              {repo.topics && repo.topics.length > 0 && (
                <div className="repo-topics">
                  {repo.topics.slice(0, 4).map(topic => (
                    <span key={topic}>{topic}</span>
                  ))}
                </div>
              )}
              <div className="repo-meta">
                <span>★ {repo.stargazers_count}</span>
                <span>Forks {repo.forks_count}</span>
                <span>Updated {new Date(repo.pushed_at).toLocaleDateString()}</span>
              </div>
              <div className="repo-links">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  View Repo
                </a>
                {repo.homepage && (
                  <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
