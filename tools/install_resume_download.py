#!/usr/bin/env python3
"""Add a Software Engineer resume download link to the existing Next.js portfolio.
Run from project root. Idempotent. Preserves the surrounding hero and styles.
"""
from pathlib import Path
import re
import sys

root = Path.cwd()
page = root / 'src' / 'pages' / 'index.tsx'
resume = root / 'public' / 'Raymond_Jimenez_Software_Engineer_Resume.pdf'
if not page.is_file():
    sys.exit('Could not find src/pages/index.tsx. Run this command in ~/personal_projects/portfolio_2.')
if not resume.is_file():
    sys.exit('Resume PDF missing. Unzip the update into your project before running this script.')

source = page.read_text(encoding='utf-8')
url = '/Raymond_Jimenez_Software_Engineer_Resume.pdf'
if url in source:
    print('Resume link already installed. No changes made.')
    sys.exit(0)

# Insert directly after the existing hero-description, without replacing the hero.
pattern = r'(<p\s+className="hero-description"[^>]*>.*?</p>)'
match = re.search(pattern, source, flags=re.DOTALL)
if not match:
    sys.exit('Could not find hero-description in src/pages/index.tsx; original file left unchanged.')
button = '''\n              <div className="hero-actions" style={{ marginTop: '20px' }}>
                <a
                  className="btn btn-outline"
                  href="/Raymond_Jimenez_Software_Engineer_Resume.pdf"
                  download="Raymond_Jimenez_Software_Engineer_Resume.pdf"
                  aria-label="Download Raymond Jimenez Software Engineer resume as PDF"
                >
                  Download Resume
                </a>
              </div>'''
updated = source[:match.end()] + button + source[match.end():]
backup = page.with_suffix('.tsx.resume-backup')
if not backup.exists():
    backup.write_text(source, encoding='utf-8')
page.write_text(updated, encoding='utf-8')
print('Added Download Resume button to portfolio hero.')
print('Saved original as src/pages/index.tsx.resume-backup')
print('PDF: public/Raymond_Jimenez_Software_Engineer_Resume.pdf')
