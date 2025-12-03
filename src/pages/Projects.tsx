import React, { useEffect, useMemo, useState } from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaAngular, FaGithub, FaGitlab, FaGoogle, FaJava, FaJenkins, FaMicrosoft, FaPython, FaVuejs } from 'react-icons/fa';
import { SiRubyonrails, SiPostgresql, SiMongodb, SiMaterialdesign, SiHtml5, SiCss3, SiJquery, SiAwsamplify, SiFirebase, SiTerraform, SiArgo, SiCplusplus, SiFlask, SiLeaflet, SiGooglemaps, SiSupabase, SiOpenai, SiTailwindcss, SiTypescript, SiFastapi, SiTensorflow, SiOpencv, SiCsharp, SiDotnet } from 'react-icons/si';
import { GrDeploy, GrKubernetes } from "react-icons/gr";

const githubUsername = 'Havcker243';
const githubToken = process.env.REACT_APP_GITHUB_TOKEN;
const githubApiHeaders: HeadersInit = githubToken
  ? {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${githubToken}`,
    }
  : {
      Accept: 'application/vnd.github+json',
    };
const githubRawHeaders: HeadersInit = githubToken
  ? {
      Accept: 'text/plain',
      Authorization: `Bearer ${githubToken}`,
    }
  : { Accept: 'text/plain' };

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
  "TypeScript": <SiTypescript />,
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
  'Tailwind CSS': <SiTailwindcss />,
  'Bootstrap': <SiCss3 />,
  'JQuery': <SiJquery />,
  'C/C++': <SiCplusplus />,
  'Leaflet': <SiLeaflet />,
  'Google Maps': <SiGooglemaps />,
  'Flask.py': <SiFlask />,
  'Supabase': <SiSupabase />,
  'OpenAI': <SiOpenai />,
  'FastAPI': <SiFastapi />,
  'TensorFlow': <SiTensorflow />,
  'OpenCV': <SiOpencv />,
  'C#': <SiCsharp />,
  '.NET': <SiDotnet />,
};

interface SpotlightProjectConfig {
  title: string;
  repoSlug: string;
  summary: string;
  techUsed: string[];
  githubUrl: string;
  image: {
    url: string;
    alt?: string;
  };
  liveUrl?: string;
}

interface SpotlightProject extends SpotlightProjectConfig {
  description: string;
  updatedAt?: string | null;
  stars?: number | null;
  topics?: string[];
}

const curatedProjects: SpotlightProjectConfig[] = [
  {
    title: 'Bluealpha',
    repoSlug: 'Bluealpha',
    summary:
      'Data and ML observability cockpit that ingests warehouse metrics, annotates anomalies, and packages playbooks for Ops so incidents shrink to minutes instead of hours.',
    techUsed: ['Python', 'FastAPI', 'PostgreSQL'],
    githubUrl: 'https://github.com/Havcker243/Bluealpha',
    image: {
      url: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1200&q=80',
      alt: 'Analytics dashboard concept art',
    },
  },
  {
    title: 'Concilio Compass Connect',
    repoSlug: 'concilio-compass-connect',
    summary:
      "Scheduling + case management hub for Concilio's Compass program -- staff log sessions, track volunteers, and broadcast resource drops to families through a single React dashboard.",
    techUsed: ['React', 'TypeScript', 'Supabase'],
    githubUrl: 'https://github.com/Havcker243/concilio-compass-connect',
    image: {
      url: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
      alt: 'Community collaboration placeholder',
    },
  },
  {
    title: 'SafePass',
    repoSlug: 'safepass-2',
    summary:
      'Emergency-first "digital vault" with a panic button, GPS broadcasting, Leaflet community alerts, and a secure document locker built in React + Capacitor for Android/iOS.',
    techUsed: ['TypeScript', 'React', 'Tailwind CSS', 'Leaflet'],
    githubUrl: 'https://github.com/Havcker243/safepass-2',
    image: {
      url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Emergency response concept art',
    },
  },
  {
    title: 'CleanSkys',
    repoSlug: 'cleanskys',
    summary:
      'AI-assisted weather and pollution radar that overlays storm severity, AQI breakpoints, and contextual tips on a Netflix-like dashboard for local governments.',
    techUsed: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Havcker243/cleanskys',
    image: {
      url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      alt: 'Weather visualization placeholder',
    },
  },
  {
    title: 'Mafia Manager',
    repoSlug: 'Mafia-Game-',
    summary:
      'C#/.NET desktop recreation of Mafia with animated windows, soundtrack cues, narrator voiceovers, and role-management UX tuned for parties.',
    techUsed: ['C#', '.NET'],
    githubUrl: 'https://github.com/Havcker243/Mafia-Game-',
    image: {
      url: 'https://raw.githubusercontent.com/Havcker243/Mafia-Game-/main/image/README/1707081041665.png',
      alt: 'Mafia Manager main window',
    },
  },
  {
    title: 'Studyme',
    repoSlug: 'Studyme-',
    summary:
      'AI co-pilot that ingests PDFs, atomizes them into flashcards/insights, and pairs the lesson plan with web research suggestions for each module.',
    techUsed: ['React', 'TypeScript', 'Supabase', 'OpenAI'],
    githubUrl: 'https://github.com/Havcker243/Studyme-',
    image: {
      url: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
      alt: 'Studyme concept placeholder',
    },
  },
  {
    title: 'Object & Emotion Detection',
    repoSlug: 'Object-and-emotion_Detection',
    summary:
      'YOLOv3-based multi-object tracker that layers Haar cascades and a CNN sentiment head to color-code faces by emotion in real time.',
    techUsed: ['Python', 'TensorFlow', 'OpenCV', 'YOLOv3'],
    githubUrl: 'https://github.com/Havcker243/Object-and-emotion_Detection',
    image: {
      url: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80',
      alt: 'Neural network concept art',
    },
  },
  {
    title: 'Netflix-Inspired Portfolio',
    repoSlug: 'netflix_portfolio',
    summary:
      'A cinematic single-page experience inspired by Netflix where visitors pick a persona tile and explore projects, recommendations, AMA responses, and more backed by Supabase + Gemini.',
    techUsed: ['React', 'TypeScript', 'Supabase', 'OpenAI'],
    githubUrl: 'https://github.com/Havcker243/netflix_portfolio',
    liveUrl: 'https://oludolapo.vercel.app/',
    image: {
      url: 'https://raw.githubusercontent.com/Havcker243/netflix_portfolio/main/image.png',
      alt: 'Netflix inspired portfolio splash page',
    },
  },
  {
    title: 'Dallas Zip Insight Map',
    repoSlug: 'dallas-zip-insight-map',
    summary:
      'An interactive Leaflet/Vite dashboard that shades Dallas-area ZIP codes, surfaces assistance needs, and pairs each selection with demographic callouts pulled from a shared data model.',
    techUsed: ['React', 'TypeScript', 'Leaflet', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Havcker243/dallas-zip-insight-map',
    liveUrl: 'https://dallas-zip-insight-map.vercel.app',
    image: {
      url: 'https://raw.githubusercontent.com/Havcker243/dallas-zip-insight-map/main/public/readme/12.png',
      alt: 'Dallas Zip Insight Map choropleth screenshot',
    },
  },
  {
    title: 'PathfinderGPT',
    repoSlug: 'PathfinderGPT-3.5',
    summary:
      'Career roadmap assistant with a React front end and Flask API that uses OpenAI prompts to generate job matches plus personalized academic plans for undecided college students.',
    techUsed: ['React', 'Flask.py', 'OpenAI', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Havcker243/PathfinderGPT-3.5',
    image: {
      url: 'https://raw.githubusercontent.com/Havcker243/PathfinderGPT-3.5/main/image/README/1723320830367.png',
      alt: 'PathfinderGPT dashboard layout',
    },
  },
  {
    title: 'Community Reach',
    repoSlug: 'Community-Reach-',
    summary:
      'A community bulletin that lets neighbors host events, search by mood or location, and read curated highlights powered by Flask routes, AWS-hosted data, and planned Google Maps integrations.',
    techUsed: ['Flask.py', 'Python', 'AWS', 'PostgreSQL'],
    githubUrl: 'https://github.com/Havcker243/Community-Reach-',
    liveUrl: 'https://havcker243.github.io/Community-Reach-/',
    image: {
      url: 'https://raw.githubusercontent.com/Havcker243/Community-Reach-/main/image/README/1704745104591.png',
      alt: 'Community Reach landing and host form preview',
    },
  },
  {
    title: 'Text Frequency Analyzer',
    repoSlug: 'Textbased-predictor',
    summary:
      'A C++ CLI that ingests large text files, ranks top words, runs a dictionary-driven sentiment pass, and exports CSV/JSON/TXT reports for downstream analytics.',
    techUsed: ['C/C++', 'GoogleTest', 'Sentiment'],
    githubUrl: 'https://github.com/Havcker243/Textbased-predictor',
    image: {
      url: 'https://raw.githubusercontent.com/Havcker243/Textbased-predictor/main/image/1718101862362.png',
      alt: 'Text Frequency Analyzer CLI screenshot',
    },
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
  default_branch?: string;
}

const formatUpdatedDate = (value?: string | null) => {
  if (!value) return null;
  return new Date(value).toLocaleDateString();
};

interface ReadmeDetails {
  summary?: string;
  image?: {
    url: string;
    alt?: string;
  };
}

const extractSummaryFromMarkdown = (markdown: string): string | null => {
  const sanitized = markdown
    .replace(/```[\s\S]*?```/g, '')
    .replace(/~~~[\s\S]*?~~~/g, '');
  const blocks = sanitized.split(/\n\s*\n/).map(block => block.trim()).filter(Boolean);
  for (const block of blocks) {
    if (!block) continue;
    if (block.startsWith('#') || block.startsWith('![') || block.startsWith('<') || block.startsWith('|')) {
      continue;
    }
    return block.replace(/\r?\n/g, ' ');
  }
  return null;
};

const extractFirstImageFromMarkdown = (markdown: string, basePath: string) => {
  const imageRegex = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/m;
  const match = imageRegex.exec(markdown);
  if (!match) return null;
  const [, altText, rawUrl] = match;
  const normalizedUrl = rawUrl.startsWith('http')
    ? rawUrl
    : `${basePath}${rawUrl.replace(/^\.?\//, '')}`;
  return {
    url: normalizedUrl,
    alt: altText || undefined,
  };
};

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [projectReadmes, setProjectReadmes] = useState<Record<string, ReadmeDetails>>({});

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/Havcker243/repos?per_page=100&sort=updated', {
          headers: githubApiHeaders,
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

  const repoLookup = useMemo(() => {
    return repos.reduce<Record<string, GitHubRepo>>((acc, repo) => {
      acc[repo.name.toLowerCase()] = repo;
      return acc;
    }, {});
  }, [repos]);

  useEffect(() => {
    if (!repos.length) return;
    let cancelled = false;
    async function hydrateReadmes() {
      const results = await Promise.all(
        curatedProjects.map(async project => {
          const repoMatch = repoLookup[project.repoSlug.toLowerCase()];
          if (!repoMatch) return null;
          const branch = repoMatch.default_branch || 'main';
          try {
            const response = await fetch(
              `https://raw.githubusercontent.com/${githubUsername}/${project.repoSlug}/${branch}/README.md`,
              { headers: githubRawHeaders }
            );
            if (!response.ok) return null;
            const markdown = await response.text();
            const summary = extractSummaryFromMarkdown(markdown) || undefined;
            const image = extractFirstImageFromMarkdown(
              markdown,
              `https://raw.githubusercontent.com/${githubUsername}/${project.repoSlug}/${branch}/`
            ) || undefined;
            return {
              slug: project.repoSlug.toLowerCase(),
              details: { summary, image },
            };
          } catch {
            return null;
          }
        })
      );
      if (cancelled) return;
      const nextDetails: Record<string, ReadmeDetails> = {};
      results.forEach(entry => {
        if (!entry) return;
        nextDetails[entry.slug] = entry.details;
      });
      setProjectReadmes(nextDetails);
    }
    hydrateReadmes();
    return () => {
      cancelled = true;
    };
  }, [repos, repoLookup]);

  const curatedRepoNames = useMemo(() => {
    return new Set(curatedProjects.map(project => project.repoSlug.toLowerCase()));
  }, []);

  const spotlightProjects = useMemo<SpotlightProject[]>(() => {
    return curatedProjects.map(project => {
      const slug = project.repoSlug.toLowerCase();
      const repoMatch = repoLookup[slug];
      const readmeDetails = projectReadmes[slug];
      return {
        ...project,
        description: readmeDetails?.summary || repoMatch?.description || project.summary,
        updatedAt: repoMatch?.pushed_at ?? null,
        stars: repoMatch?.stargazers_count ?? null,
        topics: repoMatch?.topics ?? [],
        liveUrl: repoMatch?.homepage || project.liveUrl || undefined,
        githubUrl: repoMatch?.html_url ?? project.githubUrl,
        image: readmeDetails?.image ?? project.image,
      };
    });
  }, [projectReadmes, repoLookup]);

  const repoSamples = useMemo(() => {
    return repos.filter(repo => !curatedRepoNames.has(repo.name.toLowerCase())).slice(0, 9);
  }, [repos, curatedRepoNames]);

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
            <article
              key={project.title}
              className="project-card"
              style={{ '--delay': `${index * 0.07}s` } as React.CSSProperties}
            >
              <div className="project-card-media">
                <img src={project.image.url} alt={project.image.alt || project.title} className="project-image" />
                {project.updatedAt && (
                  <span className="project-chip">Updated {formatUpdatedDate(project.updatedAt)}</span>
                )}
              </div>
              <div className="project-details">
                <div className="project-card-header">
                  <h3>{project.title}</h3>
                  {typeof project.stars === 'number' && (
                    <span className="project-meta">★ {project.stars}</span>
                  )}
                </div>
                <p>{project.description}</p>
                <div className="tech-used">
                  {project.techUsed.map((tech, i) => (
                    <span key={`${project.title}-${tech}-${i}`} className="tech-badge">
                      {techIcons[tech] || '[tool]'} {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="ghost">
                      Live Site
                    </a>
                  )}
                </div>
              </div>
            </article>
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



