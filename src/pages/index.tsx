import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { FiArrowRight, FiArrowUpRight, FiCheckCircle, FiExternalLink, FiMail, FiMenu, FiX } from 'react-icons/fi';
import ProjectCard from '../components/ProjectCard';
import SocialRail, { socialLinks } from '../components/SocialRail';
import ThemeToggle from '../components/ThemeToggle';
import { projects } from '../data/projects';

// These links match the sections on the page.
const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

// Keep the skill groups together so they are easy to update.
const skills = [
  { label: 'Programming languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'] },
  { label: 'Frameworks & development', items: ['React', 'Next.js', 'Node.js', 'Express', 'Django', 'Vite', 'HTML & CSS'] },
  { label: 'Databases & services', items: ['MongoDB', 'PostgreSQL', 'REST APIs', 'Authentication', 'API Integration'] },
  { label: 'Tools & deployment', items: ['Git', 'GitHub', 'VS Code', 'AWS', 'Vercel', 'Render'] },
];

// Work history appears from most recent to oldest.
const experience = [
  { title: 'Store Worker', place: 'DeCA Commissary', years: '2021–2023', detail: 'Managed inventory and operational workflows, resolved customer issues, and supported reliable day-to-day service in a high-volume environment.' },
  { title: 'Team Lead', place: 'OSL Retail Services', years: '2020–2021', detail: 'Led and trained a six-person telecommunications team, supported technical product education, and coordinated team performance and customer support.' },
  { title: 'Sales Lead', place: 'b8ta', years: '2018–2019', detail: 'Helped customers understand emerging consumer technologies and resolved product questions through clear, practical communication.' },
];

// Education and training appear in this order.
const education = [
  { degree: 'Software Engineering Immersive', institution: 'General Assembly', info: '420 hours · 2023', badge: 'COMPLETED' },
  { degree: 'Associate of Arts in General Studies', institution: 'Associate degree', info: 'Completed', badge: 'COMPLETED' },
  { degree: 'B.S. in Computer Science', institution: 'University of Maryland Global Campus', info: 'Expected 2027', badge: 'IN PROGRESS' },
];

export default function Home() {
  // The menu is collapsed on smaller screens.
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="site-shell">
      <Head>
        <title>Raymond Jimenez | Software Engineer</title>
        <meta name="description" content="Raymond Jimenez's software engineering portfolio. Full-stack applications, APIs, databases, technical projects and professional experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#071321" />
      </Head>

      <header className="site-header">
        <div className="container nav-inner">
          <a href="#home" className="brand brand-monogram" aria-label="Back to home">RJ<span>.</span></a>
          <nav className={`primary-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
            {navigation.map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
          </nav>
          <div className="nav-actions"><ThemeToggle /><button type="button" className="nav-menu-btn" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <FiX size={21}/> : <FiMenu size={21}/>}</button></div>
        </div>
      </header>

      <SocialRail />
      <main>
        <section id="home" className="hero" aria-labelledby="hero-title">
          <div className="hero-ambient" aria-hidden="true" />
          <div className="hero-photo">
            <Image src="/raymond-portrait-clean.png" alt="Raymond Jimenez wearing a black shirt in an office setting" fill priority unoptimized sizes="(max-width: 700px) 100vw, 55vw" className="hero-photo-image" />
          </div>
          <div className="hero-shade" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="hero-intro">HELLO, I&apos;M</p>
              <h1 id="hero-title">Raymond <span>Jimenez</span></h1>
              <p className="hero-role">Software Engineer <span className="role-separator">|</span> Computer Science Student</p>
              <p className="hero-description">I build full-stack applications and work with APIs, databases, and software systems. My background in telecommunications and team leadership helps me approach technical problems with a practical point of view.</p>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section" aria-labelledby="projects-heading">
          <div className="container">
            <div className="section-top"><div><p className="section-eyebrow"><span className="blue-rule"/> FEATURED PROJECTS</p><h2 id="projects-heading">My <span>work.</span></h2></div><a className="text-action" href="https://github.com/rayjim28" target="_blank" rel="noopener noreferrer">More on GitHub <FiArrowUpRight/></a></div>
            <p className="section-intro">A selection of my software projects, including full-stack applications, authentication, and database work.</p>
            <div className="projects-grid">{projects.map(project => <ProjectCard project={project} key={project.id} />)}</div>
          </div>
        </section>

        <section id="about" className="section about-section" aria-labelledby="about-heading">
          <div className="container about-layout">
            <div className="about-heading-group"><p className="section-eyebrow"><span className="blue-rule"/> ABOUT ME</p><h2 id="about-heading">Engineering with<br/><span>purpose.</span></h2><div className="about-accent">TECHNICAL THINKING. PRACTICAL EXPERIENCE.</div></div>
            <div className="about-text"><p>I&apos;m a software engineer and Computer Science student focused on building dependable applications and understanding the systems behind them—not just the screens people see. My project work includes full-stack development, user authentication, REST APIs, and database-driven features.</p><p>Before moving further into engineering, I worked in telecommunications, technology retail, and team leadership. That experience taught me how to investigate problems, communicate clearly, and build with users&apos; needs in mind.</p><p>I&apos;m continuing to expand my knowledge in Java, Python, JavaScript, software design, and data systems while pursuing my B.S. in Computer Science.</p><a href="#education" className="about-link">Education &amp; training <FiArrowRight/></a></div>
          </div>
        </section>

        <section id="skills" className="section skills-section" aria-labelledby="skills-heading"><div className="container"><div className="section-top"><div><p className="section-eyebrow"><span className="blue-rule"/> TECHNICAL CAPABILITIES</p><h2 id="skills-heading">Tools &amp; <span>technologies.</span></h2></div></div><p className="section-intro">Languages and tools I use in projects and coursework.</p><div className="skills-grid">{skills.map((group, index) => <article className="skill-card" key={group.label}><div className="skill-card-head"><span>0{index+1}</span><h3>{group.label}</h3></div><div className="skill-pills">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></div></section>

        <section id="experience" className="section experience-section" aria-labelledby="experience-heading"><div className="container"><div className="section-top"><div><p className="section-eyebrow"><span className="blue-rule"/> PROFESSIONAL BACKGROUND</p><h2 id="experience-heading">Experience beyond <span>the code.</span></h2></div></div><p className="section-intro">My experience in telecommunications, technical sales, and operations taught me how to work with people and solve problems.</p><div className="experience-grid">{experience.map(item => <article className="experience-card" key={item.place}><div className="experience-year">{item.years}<span className="meta-dot"/></div><h3>{item.title}</h3><strong>{item.place}</strong><p>{item.detail}</p></article>)}</div></div></section>

        <section id="education" className="section education-section" aria-labelledby="education-heading"><div className="container"><div className="section-top"><div><p className="section-eyebrow"><span className="blue-rule"/> EDUCATION &amp; TRAINING</p><h2 id="education-heading">Continued <span>growth.</span></h2></div></div><div className="education-list">{education.map(item => <div className="education-item" key={item.degree}><div className="edu-icon"><FiCheckCircle/></div><div className="edu-main"><h3>{item.degree}</h3><p>{item.institution}</p></div><div className="edu-right"><span>{item.badge}</span><small>{item.info}</small></div></div>)}</div></div></section>

        <section id="contact" className="section contact-section" aria-labelledby="contact-heading"><div className="container"><div className="contact-box"><p className="section-eyebrow"><span className="blue-rule"/> LET&apos;S CONNECT</p><h2 id="contact-heading">Let&apos;s build something <span>useful.</span></h2><p>I&apos;m interested in software engineering opportunities, technical collaborations, and solving meaningful problems with technology.</p><div className="contact-actions"><a className="btn btn-primary" href="mailto:rjim1612@gmail.com">Contact me <FiMail/></a><a className="btn btn-outline" href="https://github.com/rayjim28" target="_blank" rel="noopener noreferrer">View GitHub <FiExternalLink/></a></div></div></div></section>
      </main>
      <footer className="site-footer"><div className="container footer-inner"><div><strong>Raymond <span>Jimenez</span></strong><small>Software Engineer · Built with Next.js</small></div><div className="footer-links">{socialLinks.map(({ label, href, Icon }) => <a href={href} aria-label={label} key={label} target={href.startsWith('mailto:') ? undefined : '_blank'} rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}><Icon size={18}/></a>)}</div><p>© {new Date().getFullYear()} Raymond Jimenez</p></div></footer>
    </div>
  );
}
