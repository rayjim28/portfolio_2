import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

/** Retained from the original portfolio, with more restrained styling and mobile support. */
export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/rayjim28', Icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/raymondjimenez/', Icon: FaLinkedinIn },
  { label: 'Email', href: 'mailto:rjim1612@gmail.com', Icon: FiMail },
];

export default function SocialRail() {
  return (
    <aside className="social-rail" aria-label="Social profiles">
      {socialLinks.map(({ label, href, Icon }) => (
        <a key={label} href={href} title={label} aria-label={label}
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}>
          <Icon size={18} aria-hidden="true" />
        </a>
      ))}
      <span className="social-rail-line" aria-hidden="true" />
    </aside>
  );
}
