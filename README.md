# Raymond Jimenez — Software Engineering Portfolio

A light-first, responsive Next.js portfolio with optional persistent dark mode, understated particles, and a professional engineering focus. This is the resume-aligned revision of the redesign.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Before deployment run `npm run build`.

## Changes in this revision

- Replaced **Software Developer** with **Software Engineer** throughout the title, navigation, hero, and About section.
- Repositioned the messaging around applications, APIs, databases, reliability, and practical problem-solving rather than website design alone.
- Removed Video Gift completely; Movie Mania, Budget Manager, and Student Gradebook remain.
- Organized verified skills from the newer resume and the existing portfolio code into four technical categories.
- Added a concise professional background section using the **newer** resume employment dates and roles, supplemented by the old resume's telecommunications context.
- Updated email links to the current PDF resume's `rjim1612@gmail.com` instead of the original website's `rayjim1986@gmail.com` (confirm preferred public email before publishing).
- Preserved the light/dark themes, limited particles, project screenshots, and GitHub/LinkedIn/email social rail.

## Before publishing

1. **Confirm the contact email**. The old portfolio had a different email than the newer resume.
2. **Replace `public/my-image.png`** with a higher-resolution current photo, keeping the same filename. The old 172x248 image is preserved until you supply a suitable new one.
3. **Confirm links** to live demos. These were carried forward from the previous portfolio source, not newly verified.
4. **Review employment details**: The old resume said OSL Retail Services 2020–Present; the newer resume says 2020–2021. The newer resume is used here. The site includes DeCA (2021–2023) and b8ta (2018–2019) as shown in the newer resume.
5. The newer PDF resume still uses the title *Software Developer*. Update that PDF before adding a public download link to maintain a consistent identity.
6. Review the Student Gradebook project stack/details and add source-code URLs for individual projects when available. No invented links or technologies have been added.
7. The project still uses the older Next.js 13 dependency set from the original source. A tested dependency upgrade should be a separate step.

## Source organization

- `src/pages/index.tsx`: content and page sections
- `src/data/projects.ts`: project descriptions, screenshots, and demo links
- `src/styles/globals.css`: styling and responsive rules
- `src/components/SocialRail.tsx`: external social and contact links
- `src/components/ParticleField.tsx`: low-cost hero animation
