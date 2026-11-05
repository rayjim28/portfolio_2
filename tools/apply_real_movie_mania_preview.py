#!/usr/bin/env python3
"""Point the Movie Mania portfolio card at the authentic screenshot bundled here.
Does not change featured project order, any other project, or the live app.
"""
from pathlib import Path
import re
import shutil
import sys

root=Path(__file__).resolve().parents[1]
project_file=root/'src/data/projects.ts'
image_file=root/'public/movie-mania-live.jpg'
if not project_file.is_file() or not image_file.is_file():
    sys.exit('Expected src/data/projects.ts and public/movie-mania-live.jpg in the portfolio_2 folder.')
text=project_file.read_text(encoding='utf-8')
pattern=re.compile(r'(?P<prefix>\bid\s*:\s*[\'\"]movie-mania[\'\"][\s\S]*?\bscreenshot\s*:\s*[\'\"])(?P<path>[^\'\"]+)(?P<suffix>[\'\"])')
updated,count=pattern.subn(lambda match:match.group('prefix')+'/movie-mania-live.jpg'+match.group('suffix'),text,count=1)
if count!=1:
    sys.exit('Cannot locate Movie Mania entry; no changes made. Open src/data/projects.ts and check the image field.')
if updated==text:
    print('Already uses the real Movie Mania screenshot. Nothing else to change.')
else:
    backup=project_file.with_name('projects.ts.before-movie-mania-preview.bak')
    if not backup.exists():
        shutil.copy2(project_file,backup)
    project_file.write_text(updated,encoding='utf-8')
    print('Updated Movie Mania screenshot -> /movie-mania-live.jpg')
    print('Untracked backup:', backup)
print('Source image:', image_file)
print('Next: npm run dev, then open http://localhost:3000/#projects')
