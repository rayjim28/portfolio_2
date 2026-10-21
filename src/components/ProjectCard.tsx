import Image from 'next/image';
import { FiArrowUpRight, FiExternalLink, FiGithub, FiCheck } from 'react-icons/fi';
import type { Project } from '../data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card ${project.featured ? 'project-card-featured' : ''}`}>
      <div className="project-visual">
        <div className="browser-shell">
          <div className="browser-top"><span/><span/><span/><div className="browser-address">{project.id.replaceAll('-', ' ')} / preview</div></div>
          <div className="browser-image"><Image src={project.screenshot} alt={`${project.title} application screenshot`} fill sizes={project.featured ? '(max-width: 900px) 100vw, 58vw' : '(max-width: 700px) 100vw, 45vw'} style={{ objectFit: 'cover', objectPosition: 'top' }} /></div>
        </div>
      </div>
      <div className="project-content">
        <div className="project-topline"><span>{project.number} / {project.category}</span><FiArrowUpRight aria-hidden="true" /></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="project-highlights" aria-label="Project features">
          {project.highlights.map(highlight => <li key={highlight}><FiCheck size={13} />{highlight}</li>)}
        </ul>
        <div className="project-tech">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div>
        <div className="project-actions">
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live site <FiExternalLink size={15} /></a>}
          {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">Source code <FiGithub size={15} /></a>}
          {!project.liveUrl && !project.repoUrl && <span className="project-unlinked">Demo &amp; source links to be added</span>}
        </div>
      </div>
    </article>
  );
}
