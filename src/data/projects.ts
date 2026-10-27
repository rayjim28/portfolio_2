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

// Projects appear on the site in this order.
export const projects: Project[] = [
  {
    id: 'movie-mania',
    number: '01',
    title: 'Movie Mania',
    category: 'Full-stack software engineering',
    description:
      'Movie Mania lets people search for films, create an account, and manage a rental list. I built the React frontend, connected it to an Express API and MongoDB, and deployed both services on Render.',
    highlights: ['Secure signup and login', 'OMDb-powered movie search and details', 'MongoDB rental lists', 'Separate API and frontend deployment'],
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'OMDb API', 'Render'],
    screenshot: '/movie-mania-reference.png',
    liveUrl: 'https://movie-mania-e7tz.onrender.com/',
    repoUrl: 'https://github.com/rayjim28/movie-mania',
    featured: true,
  },
  {
    id: 'budget-manager',
    number: '02',
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
  {
    id: 'signalproof',
    number: '03',
    title: 'SignalProof',
    category: 'Network monitoring and diagnostics',
    description:
      'Built a Python network-monitoring application that records connectivity issues, tracks latency and incident history, and generates evidence reports. The public demo uses sample data; the local agent performs real measurements.',
    highlights: [
      'Connection monitoring and incident history',
      'Manual speed, ping, jitter, and packet-loss checks',
      'Exportable diagnostic reports and interactive demo',
    ],
    tech: ['Python', 'SQLite', 'JavaScript', 'HTML', 'CSS'],
    screenshot: '/signalproof-dashboard.png',
    liveUrl: 'https://rayjim28.github.io/signalproof/',
    repoUrl: 'https://github.com/rayjim28/signalproof',
  },
];
