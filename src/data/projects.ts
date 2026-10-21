/** Edit these entries when you add a project, screenshot, or verified repository link. */
export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  tech: string[];
  screenshot: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 'movie-mania',
    number: '01',
    title: 'Movie Mania',
    category: 'API & database integration',
    description:
      'A movie discovery application connecting a React interface to a Node.js and Express API, MongoDB, third-party movie data, and token-based authentication.',
    highlights: ['Third-party movie API', 'Token-based authentication', 'Full-stack architecture'],
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    screenshot: '/screenshot-of-movie-mania.png',
    liveUrl: 'https://movie-mania-e7tz.onrender.com/',
    featured: true,
  },
  {
    id: 'budget-manager',
    number: '02',
    title: 'Budget Manager',
    category: 'Backend & data management',
    description:
      'A Django-powered budgeting app with secure sign-in, PostgreSQL storage, and personalized budget tracking for each user.',
    highlights: ['User-specific budgets', 'Authentication', 'Database-backed views'],
    tech: ['Python', 'Django', 'PostgreSQL', 'Bootstrap'],
    screenshot: '/screenshot-of-budget.png',
    liveUrl: 'https://budget-manager-qdrj.onrender.com/',
  },
  {
    id: 'gradebook',
    number: '03',
    title: 'Student Gradebook',
    category: 'Web application',
    description:
      'A student gradebook project focused on organizing grade information and providing a straightforward interface for reviewing and managing records.',
    highlights: ['Organized student records', 'Data-oriented interface'],
    tech: ['Web development', 'UI'],
    screenshot: '/screenshot-of-gradebook.png',
    liveUrl: 'https://student-gradebook.onrender.com/',
  },
];
