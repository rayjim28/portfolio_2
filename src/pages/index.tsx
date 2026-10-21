import Head from 'next/head';
import Image from 'next/image';
import { FiArrowDown, FiArrowRight, FiArrowUpRight, FiCheck, FiCode, FiMail, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import ParticleField from '../components/ParticleField';
import ProjectCard from '../components/ProjectCard';
import SocialRail, { socialLinks } from '../components/SocialRail';
import ThemeToggle from '../components/ThemeToggle';
import { projects } from '../data/projects';

const skills = {
  'Programming languages': ['JavaScript', 'Python', 'Java', 'SQL', 'TypeScript'],
  'Frameworks & libraries': ['React', 'Next.js', 'Node.js', 'Express', 'Django', 'Tailwind CSS'],
  'Databases & APIs': ['PostgreSQL', 'MongoDB', 'REST APIs'],
  'Tools & platforms': ['Git', 'GitHub', 'AWS', 'Vercel'],
};

const experience = [
  {
    role: 'Store Worker',
    company: 'DeCA Commissary',
    period: '2021–2023',
    detail: 'Supported inventory and day-to-day operations while resolving customer, stock, and workflow issues in a fast-paced environment.',
  },
  {
    role: 'Team Lead',
    company: 'OSL Retail Services',
    period: '2020–2021',
    detail: 'Led and trained a six-person telecommunications team, explained technical products to customers, and supported operations and team performance.',
  },
  {
    role: 'Sales Lead',
    company: 'b8ta',
    period: '2018–2019',
    detail: 'Helped customers evaluate consumer technology, recommended products based on their needs, and resolved service questions.',
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="site-shell">
      <Head>
        <title>Raymond Jimenez — Software Engineer</title>
        <meta name="description" content="Explore software engineering projects by Raymond Jimenez, with experience in application development, databases, APIs, and telecommunications leadership." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f8f9fd" />
      </Head>

      <header className="site-header">
        <div className="header-inner container">
          <a className="wordmark" href="#home" aria-label="Raymond Jimenez, back to top">
            <span className="mark">rj<span>.</span></span>
            <span className="brand-copy">Raymond Jimenez<small>SOFTWARE ENGINEER</small></span>
          </a>
          <nav aria-label="Primary navigation" className={`main-nav ${menuOpen ? 'main-nav-open' : ''}`}>
            {[
              { text: 'Home', href: '#home' },
              { text: 'Projects', href: '#projects' },
              { text: 'About', href: '#about' },
              { text: 'Experience', href: '#experience' },
              { text: 'Skills', href: '#skills' },
            ].map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.text}</a>)}
            <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <FiArrowUpRight size={15} /></a>
          </nav>
          <div className="header-actions"><ThemeToggle /><button type="button" className="mobile-menu-toggle" aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}</button></div>
        </div>
      </header>

      <SocialRail />
      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <ParticleField />
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> RAYMOND JIMENEZ · SOFTWARE ENGINEER <span className="eyebrow-line" /></div>
              <h1 id="hero-title">Engineering for<br /><span className="accent-underline">real-world needs.</span></h1>
              <p className="hero-lead">I develop applications and work with APIs and databases, bringing a background in telecommunications, leadership, and practical problem-solving to software engineering.</p>
              <div className="hero-buttons"><a className="button button-primary" href="#projects">Explore my work <FiArrowUpRight size={18}/></a><a className="button button-secondary" href="#about">More about me <FiArrowRight size={18}/></a></div>
              <div className="hero-footnote"><span className="footnote-line" /> Software engineering <span className="small-dot">·</span> Telecommunications experience</div>
            </div>
            <div className="hero-art" aria-label="Decorative developer workspace">
              <div className="hero-orbit hero-orbit-one"/><div className="hero-orbit hero-orbit-two"/>
              <div className="floating-label floating-label-top"><span className="mini-star">✳</span> Built with purpose</div>
              <div className="code-window">
                <div className="window-bar"><div className="traffic-lights"><i/><i/><i/></div><span>systems.ts</span><FiCode size={17}/></div>
                <div className="code-lines">
                  <p><span className="code-muted">01</span> <span className="code-purple">const</span> engineer = {'{'}</p>
                  <p><span className="code-muted">02</span> &nbsp; name: <span className="code-green">&apos;Raymond&apos;</span>,</p>
                  <p><span className="code-muted">03</span> &nbsp; role: <span className="code-green">&apos;Software Engineer&apos;</span>,</p>
                  <p><span className="code-muted">04</span> &nbsp; focus: [</p>
                  <p><span className="code-muted">05</span> &nbsp; &nbsp; <span className="code-green">&apos;Applications&apos;</span>, <span className="code-green">&apos;APIs&apos;</span>,</p>
                  <p><span className="code-muted">06</span> &nbsp; &nbsp; <span className="code-green">&apos;Data&apos;</span>, <span className="code-green">&apos;Systems&apos;</span></p>
                  <p><span className="code-muted">07</span> &nbsp; ],</p>
                  <p><span className="code-muted">08</span> &nbsp; approach: <span className="code-green">&apos;Solve + improve&apos;</span></p>
                  <p><span className="code-muted">09</span> {'}'};</p>
                </div>
                <div className="code-status"><span><span className="status-dot"/> All systems ready</span><span>TSX / NEXT.JS</span></div>
              </div>
              <div className="floating-label floating-label-bottom"><span className="floating-check"><FiCheck size={14} /></span><div>Engineering mindset<small>From challenge to solution</small></div></div>
            </div>
          </div>
          <div className="container hero-bottom"><a href="#projects" className="scroll-prompt">SCROLL TO EXPLORE <FiArrowDown size={16}/></a><span>01 / 05 — PORTFOLIO</span></div>
        </section>

        <section className="projects-section section-pad" id="projects" aria-labelledby="projects-heading">
          <div className="container">
            <div className="section-heading projects-heading"><div><span className="section-kicker"><span className="section-index">01.</span> SELECTED WORK</span><h2 id="projects-heading">Selected <em>projects.</em></h2></div><p>Selected applications that demonstrate backend logic, authentication, API integration, data management, and practical engineering decisions.</p></div>
            <div className="projects-grid">{projects.map(project => <ProjectCard key={project.id} project={project} />)}</div>
            <div className="more-work"><span>Additional technical work and experiments</span><a href="https://github.com/rayjim28" target="_blank" rel="noopener noreferrer">More on GitHub <FiArrowUpRight size={16}/></a></div>
          </div>
        </section>

        <section className="about-section section-pad" id="about" aria-labelledby="about-heading">
          <div className="container about-grid">
            <div className="about-image-side">
              <div className="portrait-backdrop">
                <div className="portrait-image"><Image src="/my-image.png" alt="Portrait of Raymond Jimenez" fill sizes="(max-width: 650px) 200px, 260px" style={{ objectFit: 'cover', objectPosition: 'center top' }}/></div>
                <div className="portrait-mark">RJ<span>.</span></div>
              </div>
              <div className="portrait-caption"><span className="caption-sparkle">✳</span> Engineering grounded in experience.</div>
            </div>
            <div className="about-copy">
              <span className="section-kicker"><span className="section-index">02.</span> ABOUT ME</span>
              <h2 id="about-heading">A practical approach<br/>to <em>software engineering.</em></h2>
              <p>I&apos;m Raymond, a Computer Science student with hands-on experience developing applications using JavaScript, Python, and SQL, alongside Java programming through university coursework. My projects include authentication, API integrations, database-backed features, and responsive interfaces.</p>
              <p>Before focusing on software engineering, I worked in telecommunications and technology-focused customer service and leadership roles. Those experiences shaped how I communicate, investigate problems, and consider the people who rely on technology.</p>
              <div className="education-stack" aria-label="Education and training">
                <div><span className="edu-marker"/><div><strong>B.S. in Computer Science</strong><small>University of Maryland Global Campus · Expected 2027</small></div></div>
                <div><span className="edu-marker"/><div><strong>Software Engineering Immersive</strong><small>General Assembly · 420-hour program · 2023</small></div></div>
                <div><span className="edu-marker"/><div><strong>Associate of Arts, General Studies</strong><small>Completed</small></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="experience-section section-pad" id="experience" aria-labelledby="experience-heading">
          <div className="container">
            <div className="section-heading experience-heading">
              <div><span className="section-kicker"><span className="section-index">03.</span> PROFESSIONAL BACKGROUND</span><h2 id="experience-heading">Experience beyond<br/><em>the code.</em></h2></div>
              <p>Years in telecommunications, customer-facing technology, and operations give me a practical perspective on collaboration, communication, and solving problems.</p>
            </div>
            <div className="experience-grid">
              {experience.map(item => (
                <article className="experience-card" key={item.company}>
                  <div className="experience-meta"><span>{item.period}</span><span className="experience-meta-dot" /></div>
                  <h3>{item.role}</h3>
                  <strong>{item.company}</strong>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skills-section section-pad" id="skills" aria-labelledby="skills-heading">
          <div className="container">
            <div className="section-heading skills-heading">
              <div><span className="section-kicker"><span className="section-index">04.</span> TECHNICAL SKILLS</span><h2 id="skills-heading">Tools &amp; <em>technologies.</em></h2></div>
              <p>Languages, frameworks, databases, and development tools used across my coursework, technical training, and projects.</p>
            </div>
            <div className="skills-grid">
              {Object.entries(skills).map(([group, items], i) => (
                <div key={group} className="skill-group"><div className="skill-head"><span>0{i + 1}</span><h3>{group}</h3></div><div className="skill-list">{items.map(skill => <span key={skill}>{skill}</span>)}</div></div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact" aria-labelledby="contact-heading"><div className="container"><div className="contact-panel"><div className="contact-orb" aria-hidden="true"/><span className="contact-kicker">05. / LET&apos;S CONNECT</span><h2 id="contact-heading">Looking to collaborate?<br/><em>Let&apos;s connect.</em></h2><p>I&apos;m interested in software engineering opportunities, thoughtful technical collaborations, and conversations about building useful, dependable technology.</p><a className="button contact-button" href="mailto:rjim1612@gmail.com">Say hello <FiMail size={19}/></a><div className="contact-decoration" aria-hidden="true">✳</div></div></div></section>
      </main>
      <footer className="site-footer"><div className="container footer-inner"><div><strong>Raymond Jimenez<span>.</span></strong><small>Designed &amp; built with care.</small></div><div className="footer-socials">{socialLinks.map(({ label, href, Icon }) => <a key={label} href={href} aria-label={label} target={href.startsWith('mailto:') ? undefined : '_blank'} rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}><Icon size={17}/></a>)}</div><p>© {new Date().getFullYear()} Raymond Jimenez</p></div></footer>
    </div>
  );
}
