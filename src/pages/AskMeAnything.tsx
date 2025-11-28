import React, { useEffect, useMemo, useState } from 'react';
import './AskMeAnything.css';
import { fallbackTimeline } from './WorkExperienceFallback';
import { getTimeline } from '../queries/getTimeline';
import { getSkills } from '../queries/getSkills';
import { getProjects } from '../queries/getProjects';
import { getContactMe } from '../queries/getContactMe';
import { ContactMe, Project, Skill, TimelineItem } from '../types';
import { askGemini } from '../lib/askGemini';
type ChatMessage = {
  role: 'assistant' | 'user';
  content: string;
};

const heroSummary = `You are my AI assistant and your job is to answer questions about Oludolapo Adegbesan's experience, skills, and projects using only the information provided on this site. Provide clear and concise answers based on thier background as an Engineer. If you don't know the answer, say so politely.`;
const githubUrl = 'https://github.com/Havcker243';
const resumeUrl = '/Adegbesan_Oludolapo_Resume__2_.pdf';
const geminiModel = 'gemini-2.5-flash';

const initialMessage: ChatMessage = {
  role: 'assistant',
  content:
    "Hi, I'm Oludolapo's AI assistant. Ask me anything about her experience, projects, or skills and I'll answer using the info on this site.",
};

const AskMeAnything: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
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

        if (ignore) return;

        if (remoteTimeline.length) setTimelineData(remoteTimeline);
        if (remoteSkills.length) setSkillsData(remoteSkills);
        if (remoteProjects.length) setProjectsData(remoteProjects);
        if (remoteContact) setContactInfo(remoteContact);
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
    const timelineSection = timelineData
      .map(item => `${item.timelineType.toUpperCase()}: ${item.title} at ${item.name}. ${item.summaryPoints.join(' ')}`)
      .join('\n');
    const skillsSection = skillsData.map(skill => `${skill.category} - ${skill.name}: ${skill.description}`).join('\n');
    const projectSection = projectsData.map(project => `${project.title}: ${project.description}`).join('\n');
    const contactSection = [
      `GitHub: ${githubUrl}`,
      `LinkedIn: ${contactInfo?.linkedinLink ?? 'https://www.linkedin.com/in/oludolapo-adegbesan-3168a7218/'}`,
      `Resume: ${resumeUrl}`,
      `Email: ${contactInfo?.email ?? 'dolapoadegbesan301@gmail.com'}`,
    ].join('\n');

    return [
      heroSummary,
      `Important Links:\n${contactSection}`,
      timelineSection && `Timeline:\n${timelineSection}`,
      skillsSection && `Skills:\n${skillsSection}`,
      projectSection && `Projects:\n${projectSection}`,
    ]
      .filter(Boolean)
      .join('\n\n');
  }, [timelineData, skillsData, projectsData, contactInfo]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    const question = input.trim();
    if (!question) return;

    setMessages(prev => [...prev, { role: 'user', content: question }]);
    setInput('');
    setThinking(true);

    try {
      const prompt = `${siteContext}\n\nQuestion: ${question}`;
      const reply = await askGemini(prompt, geminiModel);
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      setError('Unable to reach the AI assistant right now.');
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
          Curious about my internships, Projects, or leadership work? Drop a question and AI would help you out
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
