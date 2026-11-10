import Image from 'next/image';
import { FiArrowUpRight, FiCheck, FiExternalLink, FiGithub } from 'react-icons/fi';
import type { Project } from '../data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card ${project.featured ? 'project-featured' : ''}`}>
      <div className="project-media">
        <Image
          src={project.screenshot}
          alt={project.id === 'odj-group' ? 'ODJ Group brand image used on the live website' : project.id === 'signalproof' ? 'Screenshot of the SignalProof browser demo' : `${project.title} application preview`}
          fill
          sizes={project.featured ? '(max-width: 900px) 100vw, 55vw' : '(max-width: 900px) 100vw, 45vw'}
          className="project-photo"
          style={project.id === 'odj-group' ? { objectFit: 'contain', backgroundColor: '#050505' } : undefined}
        />
      </div>
      <div className="project-detail">
        <div className="project-overline">{project.featured ? 'FEATURED PROJECT' : project.category} <FiArrowUpRight aria-hidden="true" /></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="project-checks">
          {project.highlights.map(item => <li key={item}><span className="check-icon"><FiCheck size={12}/></span>{item}</li>)}
        </ul>
        <div className="tech-tags" aria-label={`${project.title} technologies`}>{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div>
        <div className="project-buttons">
          {project.liveUrl && <a className="btn btn-primary btn-sm" href={project.liveUrl} target="_blank" rel="noopener noreferrer"><FiExternalLink />{project.id === 'signalproof' ? 'Interactive demo' : project.id === 'odj-group' ? 'Live preview' : 'Live site'}</a>}
          {project.downloadUrl && <a className="btn btn-outline btn-sm" href={project.downloadUrl} target="_blank" rel="noopener noreferrer"><FiExternalLink />macOS beta</a>}
          {project.repoUrl && <a className="btn btn-outline btn-sm" href={project.repoUrl} target="_blank" rel="noopener noreferrer"><FiGithub />Source code</a>}
        </div>
      </div>
    </article>
  );
}
