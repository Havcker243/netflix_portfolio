import React, { useEffect, useMemo, useState } from 'react';
import './AskMeAnything.css';
import { fallbackTimeline } from './WorkExperienceFallback';
import { getTimeline } from '../queries/getTimeline';
import { getSkills } from '../queries/getSkills';
import { getProjects } from '../queries/getProjects';
import { getContactMe } from '../queries/getContactMe';
import { ContactMe, Project, Skill, TimelineItem } from '../types';

type ChatMessage = {
  role: 'assistant' | 'user';
  content: string;
};

const heroSummary = `Oludolapo Adegbesan is a Full Stack AI & Cloud Software Engineer building Netflix-style experiences, LLM copilots, Chrome extensions, and Supabase-backed data tools. She has interned with Google Privacy Sandbox, Ashoka, Propell2Excel, and HP Future of Work; fellowships include Code2040, Brilliant Black Minds, BVCC, and MLT.`;

const githubUrl = 'https://github.com/Havcker243';
const resumeUrl = '/Adegbesan_Oludolapo_Resume__2_.pdf';

const AskMeAnything: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content:
        "Hi, I'm Oludolapo's AI assistant. Ask me anything about her experience, projects, or skills and I'll answer using the info on this site.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setThinking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [timelineData, setTimelineData] = useState<TimelineItem[]>(fallbackTimeline);
  const [skillsData, setSkillsData] = useState<Skill[]>([]);
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [contactInfo, setContactInfo] = useState<ContactMe | null>(null);

  useEffect(() => {
    let ignore = false;
    async function loadContent() {
      try {
        const [remoteTimeline, remoteSkills, remoteProjects, remoteContact] = await Promise.all([
          getTimeline(),
          getSkills(),
          getProjects(),
          getContactMe(),
        ]);

        if (!ignore) {
          if (remoteTimeline.length) setTimelineData(remoteTimeline);
          if (remoteSkills.length) setSkillsData(remoteSkills);
          if (remoteProjects.length) setProjectsData(remoteProjects);
          if (remoteContact) setContactInfo(remoteContact);
        }
      } catch (loadError) {
        console.error('Unable to load live content for AMA context', loadError);
      }
    }

    loadContent();
    return () => {
      ignore = true;
    };
  }, []);

  const siteContext = useMemo(() => {
    const timeline = timelineData
      .map(item => `${item.timelineType.toUpperCase()}: ${item.title} at ${item.name}. Focus: ${item.techStack}. Highlights: ${item.summaryPoints.join(' ')}`)
      .join('\n\n');

    const skills = skillsData
      .map(skill => `${skill.category} → ${skill.name}: ${skill.description}`)
      .join('\n');

    const projects = projectsData
      .map(project => `${project.title}: ${project.description} (Tech: ${project.techUsed})`)
      .join('\n');

    const links = [
      `GitHub: ${githubUrl}`,
      contactInfo?.linkedinLink ? `LinkedIn: ${contactInfo.linkedinLink}` : 'LinkedIn: https://www.linkedin.com/in/oludolapo-adegbesan-3168a7218/',
      `Resume: ${resumeUrl}`,
      contactInfo?.email ? `Email: ${contactInfo.email}` : 'Email: dolapoadegbesan301@gmail.com',
    ]
      .filter(Boolean)
      .join('\n');

    return `${heroSummary}\n\nImportant Links:\n${links}\n\nTimeline:\n${timeline}\n\nSkills:\n${skills}\n\nProjects:\n${projects}`;
  }, [timelineData, skillsData, projectsData, contactInfo]);

  const apiKey = process.env.REACT_APP_GEMINI_API_KEY;

  const askGemini = async (question: string) => {
    if (!apiKey) {
      throw new Error('Missing Gemini API key. Set REACT_APP_GEMINI_API_KEY in your env.');
    }

    const prompt = `You are a helpful career assistant representing Oludolapo Adegbesan. Answer using the following context:\n${siteContext}\n\nQuestion: ${question}`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const info = await response.text();
      throw new Error(info);
    }

    const data = await response.json();
    const output = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return output ?? 'Sorry, I could not find an answer.';
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    const question = input.trim();
    if (!question) return;

    setMessages(prev => [...prev, { role: 'user', content: question }]);
    setInput('');
    setThinking(true);

    try {
      const reply = await askGemini(question);
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch (err: any) {
      setError('Unable to reach the AI assistant. Please try again in a moment.');
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: "I'm having trouble connecting to Gemini right now. Try again soon.",
        },
      ]);
    } finally {
      setThinking(false);
    }
  };

  return (
    <div className="ama-shell">
      <section className="ama-hero">
        <p className="eyebrow">AI Career Concierge</p>
        <h1>Ask Me Anything</h1>
        <p>
          Curious about my internships, Supabase build, or leadership work? Drop a question and this Gemini-powered bot will
          answer using the content on this site.
        </p>
      </section>

      <section className="ama-chat-panel">
        <aside className="ama-links">
          <h3>Quick Links</h3>
          <div className="link-grid">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={contactInfo?.linkedinLink ?? 'https://www.linkedin.com/in/oludolapo-adegbesan-3168a7218/'} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
            <a href={`mailto:${contactInfo?.email ?? 'dolapoadegbesan301@gmail.com'}`}>Email</a>
          </div>
        </aside>
        <div className="ama-messages">
          {messages.map((message, index) => (
            <div key={index} className={`ama-message ${message.role}`}>
              <div className="badge">{message.role === 'assistant' ? 'OA Bot' : 'You'}</div>
              <p>{message.content}</p>
            </div>
          ))}
          {isThinking && (
            <div className="ama-message assistant">
              <div className="badge">OA Bot</div>
              <p>Thinking...</p>
            </div>
          )}
        </div>

        <form className="ama-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ask about internships, skills, fellowships..."
            value={input}
            onChange={event => setInput(event.target.value)}
            disabled={isThinking}
          />
          <button type="submit" disabled={isThinking}>
            Send
          </button>
        </form>
        {error && <p className="ama-error">{error}</p>}
      </section>
    </div>
  );
};

export default AskMeAnything;
