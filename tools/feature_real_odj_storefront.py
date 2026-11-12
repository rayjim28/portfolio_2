#!/usr/bin/env python3
"""Make ODJ Group the featured project and show the user's real storefront screenshot.

Changes only src/data/projects.ts and src/components/ProjectCard.tsx.
The project screenshot is shipped separately at public/odj-group-storefront.png.
"""
from pathlib import Path
import re

PROJECTS = Path('src/data/projects.ts')
CARD = Path('src/components/ProjectCard.tsx')
IMAGE = Path('public/odj-group-storefront.png')


def update_projects(original: str) -> str:
    anchor = 'export const projects: Project[] = ['
    begin = original.find(anchor)
    if begin < 0:
        raise ValueError('projects array was not found')
    body_start = original.find('\n', begin) + 1
    body_end = original.find('\n];', body_start)
    if body_start < 1 or body_end < 0:
        raise ValueError('unexpected project array structure')
    body = original[body_start:body_end]
    matches = list(re.finditer(r"(?m)^  \{\n    id: '([^']+)',", body))
    if not matches or matches[0].start() != 0:
        raise ValueError('unable to identify project entries')
    blocks = []
    for i, m in enumerate(matches):
        next_start = matches[i+1].start() if i + 1 < len(matches) else len(body)
        block = body[m.start():next_start]
        if not re.search(r'(?m)^  \},\s*$', block):
            raise ValueError(f'unexpected project block for {m.group(1)}')
        blocks.append((m.group(1), block))
    ids = [i for i, _ in blocks]
    if len(ids) != len(set(ids)) or 'odj-group' not in ids:
        raise ValueError('ODJ Group project is missing or duplicate projects exist')
    target_order = sorted(blocks, key=lambda pair: (0 if pair[0] == 'odj-group' else 1 if pair[0] == 'signalproof' else 2, ids.index(pair[0])))
    new_blocks = []
    for n, (key, block) in enumerate(target_order, 1):
        block = re.sub(r'(?m)^    featured: (?:true|false),\n', '', block)
        block, count = re.subn(r"(?m)^    number: '\d+',", f"    number: '{n:02d}',", block, count=1)
        if count != 1:
            raise ValueError(f'project number not found for {key}')
        if key == 'odj-group':
            block, count = re.subn(r"(?m)^    screenshot: '[^']+',", "    screenshot: '/odj-group-storefront.png',", block, count=1)
            if count != 1:
                raise ValueError('ODJ screenshot field not found')
            block, count = re.subn(r'(?m)^  \},', '    featured: true,\n  },', block, count=1)
            if count != 1:
                raise ValueError('ODJ feature flag could not be set')
        new_blocks.append(block)
    result = original[:body_start] + ''.join(new_blocks).rstrip('\n') + original[body_end:]
    result = result.replace('Only SignalProof uses the full-width card.', 'Only ODJ Group uses the full-width card.')
    return result


def update_card(original: str) -> str:
    result = original
    old_class = 'className="project-photo"'
    new_class = 'className="project-photo"\n          style={project.id === \'odj-group\' ? { objectFit: \'contain\', backgroundColor: \'#080808\' } : undefined}'
    if "style={project.id === 'odj-group' ? { objectFit:" not in result:
        if result.count(old_class) != 1:
            raise ValueError('Expected image component not found in ProjectCard.tsx')
        result = result.replace(old_class, new_class, 1)
    old_alt = "alt={project.id === 'signalproof' ? 'Screenshot of the SignalProof browser demo' : `${project.title} application preview`}"
    new_alt = "alt={project.id === 'odj-group' ? 'Screenshot of the actual ODJ Group storefront homepage' : project.id === 'signalproof' ? 'Screenshot of the SignalProof browser demo' : `${project.title} application preview`}"
    if old_alt in result:
        result = result.replace(old_alt, new_alt, 1)
    if "alt={project.id === 'odj-group'" not in result:
        raise ValueError('Could not verify image accessibility text')
    return result


def main():
    for file in (PROJECTS, CARD, IMAGE):
        if not file.is_file():
            raise SystemExit(f'ERROR: Missing {file}. Run from portfolio_2 after unzipping update.')
    old_projects = PROJECTS.read_text(encoding='utf-8')
    old_card = CARD.read_text(encoding='utf-8')
    try:
        new_projects = update_projects(old_projects)
        new_card = update_card(old_card)
    except ValueError as exc:
        raise SystemExit(f'ERROR: {exc}. No files changed.')
    for file, old, new in ((PROJECTS, old_projects, new_projects), (CARD, old_card, new_card)):
        if old == new:
            print(f'{file}: already up to date')
            continue
        backup = file.with_suffix(file.suffix + '.before-real-odj.bak')
        if not backup.exists():
            backup.write_text(old, encoding='utf-8')
        file.write_text(new, encoding='utf-8')
        print(f'Updated {file} (backup: {backup})')
    print('ODJ Group is featured first, with an authentic storefront screenshot.')
    print('SignalProof, Movie Mania, and BudgetWise are unchanged.')

if __name__ == '__main__':
    main()
