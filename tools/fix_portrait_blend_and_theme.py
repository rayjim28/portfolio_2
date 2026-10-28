#!/usr/bin/env python3
"""Make the existing Next.js portfolio portrait blend into its hero; show icons for current theme.

Requires the original portfolio src/components/ThemeToggle.tsx and src/styles/globals.css.
Makes one-time backups and leaves other pages/components untouched.
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CSS = ROOT / 'src' / 'styles' / 'globals.css'
TOGGLE = ROOT / 'src' / 'components' / 'ThemeToggle.tsx'
START = '/* PORTRAIT EDGE BLEND + CURRENT THEME ICON (v2) */'
END = '/* END PORTRAIT EDGE BLEND (v2) */'
STYLES = '''/* PORTRAIT EDGE BLEND + CURRENT THEME ICON (v2) */
/* Keep the header transparent and the portrait below the navigation. */
.site-header {
  background: transparent;
  border: 0;
  box-shadow: none;
}
/* Fade the photographic rectangle into the dark hero, especially on the left. */
.hero-photo {
  -webkit-mask-image: linear-gradient(to right,
    transparent 0%,
    rgba(0,0,0,.16) 10%,
    rgba(0,0,0,.72) 29%,
    #000 51%);
  mask-image: linear-gradient(to right,
    transparent 0%,
    rgba(0,0,0,.16) 10%,
    rgba(0,0,0,.72) 29%,
    #000 51%);
}
/* Soften the horizontal edge under the floating navigation without
   blurring the face or replacing the original portrait. */
.hero-photo::after {
  content: '';
  position: absolute;
  z-index: 1;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(to bottom,
    rgba(6,17,29,.96) 0%,
    rgba(6,17,29,.35) 7%,
    transparent 16%);
}
/* A smoother transition across the left-hand text and into the photo. */
.hero-shade {
  background: linear-gradient(90deg,
    #06111d 0%,
    #06111d 22%,
    rgba(6,17,29,.96) 32%,
    rgba(6,17,29,.67) 42%,
    rgba(6,17,29,.21) 53%,
    transparent 70%);
}
/* Keep the existing vertical fade on narrow screens: the mobile portrait
   uses a full-width crop rather than a side-by-side composition. */
@media (max-width: 700px) {
  .hero-photo { -webkit-mask-image: none; mask-image: none; }
  .hero-photo::after { background: none; }
  .hero-shade {
    background: linear-gradient(0deg,
      #06111d 0%, #06111d 16%,
      rgba(6,17,29,.94) 39%, rgba(6,17,29,.08) 82%);
  }
}
/* END PORTRAIT EDGE BLEND (v2) */
'''


def backup(path: Path, suffix: str) -> None:
    out = path.with_name(path.name + suffix)
    if not out.exists():
        out.write_text(path.read_text(encoding='utf-8'), encoding='utf-8')
        print('Backup:', out.relative_to(ROOT))


def main() -> None:
    if not CSS.is_file() or not TOGGLE.is_file():
        raise SystemExit('Could not find the portfolio source files. Place this ZIP at the root of portfolio_2.')
    css = CSS.read_text(encoding='utf-8')
    toggle = TOGGLE.read_text(encoding='utf-8')
    if not all(t in css for t in ('.hero-photo', '.hero-shade', '.site-header')):
        raise SystemExit('The portfolio hero CSS does not match the expected project. Nothing changed.')
    if 'FiMoon' not in toggle or 'FiSun' not in toggle or 'resolvedTheme' not in toggle:
        raise SystemExit('Theme toggle component is different from expected. Nothing changed.')
    old_icon = '{dark ? <FiSun size={18} aria-hidden="true" /> : <FiMoon size={18} aria-hidden="true" />}'
    new_icon = '{dark ? <FiMoon size={18} aria-hidden="true" /> : <FiSun size={18} aria-hidden="true" />}'
    if old_icon in toggle:
        toggle2 = toggle.replace(old_icon, new_icon)
    elif new_icon in toggle:
        toggle2 = toggle
    else:
        raise SystemExit('Could not identify the theme icon mapping. Nothing changed.')
    # The tooltip reports the active theme, while aria-label describes the button action.
    toggle2 = toggle2.replace("title={dark ? 'Light mode' : 'Dark mode'}", "title={dark ? 'Dark mode — switch to light' : 'Light mode — switch to dark'}")
    if START in css:
        if END not in css:
            raise SystemExit('Found partial portrait blend block. Nothing changed.')
        before, remainder = css.split(START, 1)
        _, after = remainder.split(END, 1)
        css2 = before.rstrip() + '\n\n' + STYLES + after.lstrip('\n')
    else:
        css2 = css.rstrip() + '\n\n' + STYLES
    if css2 != css:
        backup(CSS, '.pre-soft-blend.bak')
        CSS.write_text(css2, encoding='utf-8')
        print('Updated:', CSS.relative_to(ROOT))
    else:
        print('Portrait blend already installed.')
    if toggle2 != toggle:
        backup(TOGGLE, '.pre-icon-change.bak')
        TOGGLE.write_text(toggle2, encoding='utf-8')
        print('Updated:', TOGGLE.relative_to(ROOT))
    else:
        print('Theme icons already corrected.')
    print('Done. Run npm run dev to preview before committing.')


if __name__ == '__main__':
    main()
