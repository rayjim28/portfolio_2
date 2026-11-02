#!/usr/bin/env python3
"""Apply narrow-screen portfolio refinements without changing desktop styling.

Run from ~/personal_projects/portfolio_2 with:
    python3 tools/apply_mobile_polish.py
This script changes only src/styles/globals.css and creates a one-time backup.
"""
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
TARGET = ROOT / 'src' / 'styles' / 'globals.css'
BEGIN = '/* MOBILE PORTFOLIO POLISH v1 — START */'
END = '/* MOBILE PORTFOLIO POLISH v1 — END */'

CSS = r'''/* MOBILE PORTFOLIO POLISH v1 — START */
/* Applies only at 900px and narrower. Desktop layout and portrait fade stay untouched. */
@media (max-width: 900px) {
  .site-header { height: 72px; }
  .nav-inner { width: calc(100% - 44px); grid-template-columns: minmax(0, 1fr) auto; gap: 12px; }
  .nav-actions { gap: 10px; }
  .theme-toggle, .nav-menu-btn { width: 44px; height: 44px; }
  .primary-nav {
    top: 72px;
    left: 22px;
    right: 22px;
    width: auto;
    z-index: 100;
    max-height: calc(100vh - 96px);
    max-height: calc(100dvh - 96px);
    overflow-y: auto;
    overscroll-behavior: contain;
    padding: 8px;
    background: #0b1a2b;
    border: 1px solid #2a4c70;
    border-radius: 14px;
    box-shadow: 0 18px 45px rgba(0,0,0,.45);
  }
  .primary-nav.is-open { background: #0b1a2b; }
  .primary-nav a { min-height: 46px; padding: 12px 15px; font-size: 14px; border-radius: 8px; }
  .primary-nav a:hover, .primary-nav a:focus-visible { background: #143252; }
  .hero h1, .hero-role { white-space: normal; }
  .hero h1 { overflow-wrap: normal; }
  .hero-photo { top: 82px; height: calc(100% - 82px); }
  .project-featured { min-height: 0; }
  .project-detail { min-width: 0; }
  .project-detail h3, .project-detail p, .about-text, .contact-box { overflow-wrap: anywhere; }
  .footer-inner { gap: 14px; }
}

@media (max-width: 700px) {
  .container, .hero-inner { width: calc(100% - 36px); max-width: 540px; }
  .site-header { height: 70px; }
  .nav-inner { width: calc(100% - 36px); }
  .brand-monogram { font-size: 19px; }
  .primary-nav { top: 70px; left: 18px; right: 18px; }

  /* Keep the face clearly below the floating navigation, then place copy below it. */
  .hero { margin-top: 0; padding-top: 0; display: block; height: auto; min-height: 0; }
  .hero-photo {
    top: 79px;
    left: 0;
    right: 0;
    bottom: auto;
    width: 100%;
    height: clamp(238px, 72vw, 340px);
    -webkit-mask-image: none;
    mask-image: none;
  }
  .hero-photo-image { object-fit: cover; object-position: 68% 12%; transform: none; }
  .hero-photo::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom,
      #06111d 0%, rgba(6,17,29,.06) 13%,
      rgba(6,17,29,0) 56%, rgba(6,17,29,.5) 80%, #06111d 100%);
  }
  .hero-shade { background: linear-gradient(to bottom, transparent 17%, rgba(6,17,29,.08) 46%, #06111d 86%); }
  .hero-inner {
    padding-top: calc(79px + clamp(238px, 72vw, 340px) - 6px);
    padding-bottom: 44px;
  }
  .hero-copy { width: 100%; max-width: 540px; }
  .hero-intro { font-size: 10px; margin-bottom: 12px; }
  .hero h1 { font-size: clamp(35px, 9vw, 52px); line-height: 1.13; letter-spacing: -.055em; }
  .hero-role { font-size: clamp(14px, 3.7vw, 17px); line-height: 1.5; margin-bottom: 14px; }
  .hero-description { font-size: 14px; line-height: 1.75; max-width: 50ch; }

  /* Remove floating social buttons on phones — the same links remain in the footer. */
  .social-rail { display: none; }
  .section { padding: 58px 0; }
  .section-top { gap: 14px; }
  .section-intro { font-size: 13.5px; }
  .projects-grid { grid-template-columns: minmax(0, 1fr); gap: 16px; }
  .project-featured { display: flex; flex-direction: column; padding: 12px; }
  .project-featured .project-media { width: 100%; min-height: 0; aspect-ratio: 16 / 10; }
  .project-media { min-height: 0; aspect-ratio: 16 / 10; }
  .project-featured .project-detail { padding: 18px 9px 10px; }
  .project-detail { padding: 20px; }
  .project-detail h3, .project-featured h3 { font-size: clamp(22px, 6vw, 29px); }
  .project-buttons { gap: 8px; }
  .project-buttons .btn { min-height: 44px; }
  .skills-grid, .about-layout, .experience-grid { grid-template-columns: minmax(0, 1fr); }
  .skill-card, .experience-card { padding: 22px; }
  .education-item { flex-wrap: wrap; align-items: flex-start; gap: 12px; padding: 20px; }
  .edu-main { flex: 1 1 calc(100% - 58px); }
  .edu-right { flex: 1 1 100%; margin-left: 53px; flex-direction: row; align-items: baseline; justify-content: flex-start; flex-wrap: wrap; gap: 6px 12px; }
  .edu-right small { white-space: normal; }
  .contact-box { padding: 32px 22px; }
  .contact-actions .btn { min-height: 46px; }
  .footer-inner { align-items: flex-start; }
  .footer-links { gap: 8px; }
  .footer-links a { min-width: 44px; min-height: 44px; }
}

@media (max-width: 420px) {
  .hero h1 { font-size: clamp(33px, 9vw, 39px); }
  .section-top { flex-direction: column; align-items: flex-start; }
  .text-action { max-width: 100%; }
  .project-buttons { flex-direction: column; align-items: stretch; }
  .project-buttons .btn { width: 100%; }
  .contact-actions { flex-direction: column; align-items: stretch; }
  .contact-actions .btn { width: 100%; }
  .education-item { padding: 16px; }
  .edu-main h3 { font-size: 15px; }
  .edu-right { margin-left: 53px; }
}
/* MOBILE PORTFOLIO POLISH v1 — END */
'''


def main():
    if not TARGET.is_file():
        sys.exit('Could not find src/styles/globals.css. Run from your portfolio_2 project.')
    original = TARGET.read_text(encoding='utf-8')
    expected = ('.site-header', '.primary-nav', '.hero-photo', '.hero-inner', '.projects-grid', '.social-rail')
    missing = [item for item in expected if item not in original]
    if missing:
        sys.exit('Unexpected portfolio stylesheet; no changes made. Missing: ' + ', '.join(missing))
    if BEGIN in original:
        if END not in original:
            sys.exit('Incomplete mobile update found; no changes made.')
        before, remainder = original.split(BEGIN, 1)
        _, after = remainder.split(END, 1)
        updated = before.rstrip() + '\n\n' + CSS + after.lstrip('\n')
    else:
        updated = original.rstrip() + '\n\n' + CSS
    if updated == original:
        print('Mobile layout already updated — no changes needed.')
        return
    backup = TARGET.with_name('globals.css.before-mobile-polish.bak')
    if not backup.exists():
        backup.write_text(original, encoding='utf-8')
        print('Backup created:', backup.relative_to(ROOT))
    TARGET.write_text(updated, encoding='utf-8')
    print('Updated:', TARGET.relative_to(ROOT))
    print('Desktop styles unchanged. Preview at 375px, 768px, and desktop widths.')

if __name__ == '__main__':
    main()
