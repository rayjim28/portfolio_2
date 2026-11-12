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
  downloadUrl?: string;
  featured?: boolean;
};

// Display order matches the order here. Only ODJ Group uses the full-width card.
export const projects: Project[] = [
  {
    id: 'odj-group',
    number: '01',
    title: 'ODJ Group LLC',
    category: 'Client e-commerce storefront',
    description:
      'Developed a responsive e-commerce storefront for ODJ Group LLC with product discovery, search, a shopping bag, and admin workflows for managing products and pricing. The public website is available for browsing while online ordering is being prepared.',
    highlights: [
      'Real client project with a deployed public storefront',
      'Product management for images, prices, and visibility',
      'Catalog search and cart workflows; online ordering coming soon',
    ],
    tech: ['Python', 'FastAPI', 'Jinja', 'JavaScript', 'SQLite', 'Render'],
    screenshot: '/odj-group-storefront.png',
    liveUrl: 'https://odjgroupllc.com/',
    featured: true,
  },
  {
    id: 'signalproof',
    number: '02',
    title: 'SignalProof',
    category: 'Network monitoring and diagnostics',
    description:
      'Built a Python network-monitoring application that records connectivity issues, tracks latency and incident history, and generates evidence reports. The interactive browser demo uses sample readings; the macOS application performs real measurements.',
    highlights: [
      'Connection monitoring, latency analysis, and incident history',
      'Manual performance tests and downloadable evidence reports',
      'Packaged macOS application with a public beta release',
    ],
    tech: ['Python', 'SQLite', 'JavaScript', 'HTML', 'CSS', 'PyInstaller'],
    screenshot: '/signalproof-dashboard.png',
    liveUrl: 'https://rayjim28.github.io/signalproof/',
    repoUrl: 'https://github.com/rayjim28/signalproof',
    downloadUrl: 'https://github.com/rayjim28/signalproof/releases/tag/v0.1.0-beta.2',
  },
  {
    id: 'movie-mania',
    number: '03',
    title: 'Movie Mania',
    category: 'Full-stack software engineering',
    description:
      'Movie Mania lets people search for films, create an account, and manage a rental list. I built the React frontend, connected it to an Express API and MongoDB, and deployed both services on Render.',
    highlights: ['Secure signup and login', 'OMDb-powered movie search and details', 'MongoDB rental lists', 'Separate API and frontend deployment'],
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'OMDb API', 'Render'],
    screenshot: '/movie-mania-live.jpg',
    liveUrl: 'https://movie-mania-e7tz.onrender.com/',
    repoUrl: 'https://github.com/rayjim28/movie-mania',
  },
  {
    id: 'budget-manager',
    number: '04',
    title: 'BudgetWise',
    category: 'Full-stack financial application',
    description:
      'Built and modernized a Python and Django budgeting application with PostgreSQL, secure user accounts, income and expense tracking, interactive dashboards, and financial reports.',
    highlights: [
      'Django authentication and user-specific records',
      'Budget, income, and expense management',
      'Spending analytics, reports, and CSV export',
    ],
    tech: ['Python', 'Django', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript', 'Render'],
    screenshot: '/budgetwise-dashboard.png',
    liveUrl: 'https://budget-manager-qdrj.onrender.com/',
    repoUrl: 'https://github.com/rayjim28/budget-manager',
  },
];
