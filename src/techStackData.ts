export type TechCategory = 'frontend' | 'backend' | 'database' | 'server';

export interface TechProjectRef {
  name: string;
  slug?: string;
  url?: string;
  role?: string;
}

export interface TechItem {
  id: string;
  name: string;
  category: TechCategory;
  badge: string;
  rating: number; // 1 to 5 stars
  proficiencyLabel: 'Confident' | 'Advanced' | 'Proficient' | 'Working Knowledge';
  description: string;
  highlights: string[];
  projects: TechProjectRef[];
  tags: string[];
  featured?: boolean;
}

export interface CategoryInfo {
  id: TechCategory;
  name: string;
  shortDesc: string;
  iconSvg: string;
  colorClass: string;
  accentBorder: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    shortDesc: 'User interfaces, single-page web applications, accessible design systems, and interactive graphics.',
    iconSvg: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    colorClass: 'text-sky-500 bg-sky-500/10 border-sky-500/30',
    accentBorder: 'hover:border-sky-500/50'
  },
  {
    id: 'backend',
    name: 'Backend & Systems',
    shortDesc: 'Server runtimes, application frameworks, systems programming, algorithms, and applied logic.',
    iconSvg: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    colorClass: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/30',
    accentBorder: 'hover:border-indigo-500/50'
  },
  {
    id: 'database',
    name: 'Database & Storage',
    shortDesc: 'Relational databases, SQL queries, schemas, cloud data layers, and offline client persistence.',
    iconSvg: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
    colorClass: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30',
    accentBorder: 'hover:border-emerald-500/50'
  },
  {
    id: 'server',
    name: 'Server & DevOps',
    shortDesc: 'Web server daemons, cloud hosting platforms, CI/CD automation, and POSIX Linux environments.',
    iconSvg: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
    colorClass: 'text-amber-500 bg-amber-500/10 border-amber-500/30',
    accentBorder: 'hover:border-amber-500/50'
  }
];

export const techItems: TechItem[] = [
  // ================= FRONTEND =================
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    badge: 'Component Library',
    rating: 5,
    proficiencyLabel: 'Confident',
    description: 'Declarative component-driven UI library for single-page applications, custom state management, and modern hooks.',
    highlights: [
      'React 18 concurrent rendering, hooks, and modular component architectures',
      'Integration with TypeScript, Vite HMR, and Tailwind/DaisyUI styling systems',
      'Dynamic single-page application routing and interactive dashboard design'
    ],
    projects: [
      { name: 'Fancy Pants Outfitters', slug: 'fancy-pants-outfitters-react-demo', url: 'https://acare3.github.io/4513_2_website/' },
      { name: 'Go Library', slug: 'go-library', url: 'https://github.com/axyl-casc/GoLibrary' },
      { name: 'Infinite Mind Games Wiki', slug: 'infinite-mind-games-wiki-docs', url: 'https://infinite-mind-pictures-inc.github.io/Infinite-Mind-Wiki/' },
      { name: 'Portfolio Website', slug: 'axyl-casc-portfolio-website', url: 'https://github.com/axyl-casc/portfolio_code' }
    ],
    tags: ['React', 'TypeScript', 'Web Development', 'Frontend', 'UI/UX'],
    featured: true
  },
  {
    id: 'angular',
    name: 'Angular',
    category: 'frontend',
    badge: 'Enterprise Framework',
    rating: 3,
    proficiencyLabel: 'Working Knowledge',
    description: 'Comprehensive enterprise framework featuring strict TypeScript architecture, component encapsulation, dependency injection, and two-way data binding.',
    highlights: [
      'Robust component, service, and routing modular architectures',
      'Strict TypeScript enforcement, lifecycle management, and RxJS reactive streams',
      'Two-way data binding and form validation for complex application workflows'
    ],
    projects: [],
    tags: ['Frontend', 'TypeScript', 'Web Development'],
    featured: true
  },
  {
    id: 'vanilla-web',
    name: 'Vanilla HTML5 / CSS3 / JavaScript',
    category: 'frontend',
    badge: 'Web Core Standards',
    rating: 5,
    proficiencyLabel: 'Confident',
    description: 'Native web foundations leveraging semantic HTML5, modern CSS (Flexbox, Grid, container queries, custom properties), and modular ES6+ JavaScript.',
    highlights: [
      'Zero-dependency DOM manipulation, custom event dispatching, and animation loops',
      'Semantic structure, accessible landmarks, and WCAG-compliant keyboard navigation',
      'Modern responsive layouts without relying on heavyweight bundle dependencies'
    ],
    projects: [
      { name: 'Assembly Board Game (Compiled)', slug: 'assembly-board-game', url: 'https://axyl-casc.github.io/CompiledWebsite/' },
      { name: 'Companion Baduk (Beginner GO AI Game)', slug: 'beginner-go-ai-game', url: '/projects/beginner-go-ai-game' },
      { name: 'CPU Scheduler (Scheduler Designer)', slug: 'cpu-scheduler', url: 'https://axyl-casc.github.io/Scheduler-Designer/' },
      { name: 'Daily Training Game', slug: 'daily-training-game', url: 'https://axyl-casc.github.io/TrainingGame/' },
      { name: 'Dice Simulator', slug: 'dice-simulator', url: 'https://axyl-casc.github.io/Dice-Simulator/' }
    ],
    tags: ['JavaScript', 'Web App', 'Algorithms', 'Visualization', 'Education'],
    featured: true
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    badge: 'Typed Language',
    rating: 5,
    proficiencyLabel: 'Confident',
    description: 'Static type checking layer across frontend and full-stack projects, preventing runtime regressions and enhancing DX with robust interfaces.',
    highlights: [
      'Strict type safety for state structures, component props, and API payloads',
      'TSX template typing, generics, and algebraic data representations',
      'Seamless compilation and bundle tree-shaking with modern Vite setups'
    ],
    projects: [
      { name: 'Fancy Pants Outfitters', slug: 'fancy-pants-outfitters-react-demo', url: 'https://acare3.github.io/4513_2_website/' },
      { name: 'Infinite Mind Games Wiki', slug: 'infinite-mind-games-wiki-docs', url: 'https://infinite-mind-pictures-inc.github.io/Infinite-Mind-Wiki/' },
      { name: 'Portfolio Website', slug: 'axyl-casc-portfolio-website', url: 'https://github.com/axyl-casc/portfolio_code' }
    ],
    tags: ['TypeScript', 'React', 'Web Development'],
    featured: false
  },
  {
    id: 'tailwind-daisyui',
    name: 'Tailwind CSS & DaisyUI',
    category: 'frontend',
    badge: 'Utility CSS & UI Components',
    rating: 5,
    proficiencyLabel: 'Confident',
    description: 'Utility-first styling workflow combined with DaisyUI semantic components, delivering accessible themes, sleek glassmorphism, and responsive layouts.',
    highlights: [
      'Configured custom themes with seamless runtime light/dark switching',
      'High-performance CSS bundle generation using PostCSS purge algorithms',
      'Micro-animations, responsive containers, and glassmorphism design tokens'
    ],
    projects: [
      { name: 'Portfolio Website', slug: 'axyl-casc-portfolio-website', url: 'https://github.com/axyl-casc/portfolio_code' },
      { name: 'Fancy Pants Outfitters', slug: 'fancy-pants-outfitters-react-demo', url: 'https://acare3.github.io/4513_2_website/' },
      { name: 'GoGuesser', slug: 'goguesser', url: 'https://goguesser.onrender.com/' }
    ],
    tags: ['Tailwind CSS', 'UI/UX', 'Frontend'],
    featured: false
  },
  {
    id: 'electron',
    name: 'Electron',
    category: 'frontend',
    badge: 'Desktop Web App Runtime',
    rating: 3,
    proficiencyLabel: 'Working Knowledge',
    description: 'Cross-platform desktop application environment uniting HTML5/CSS/JavaScript frontends with local operating system APIs and native windowing.',
    highlights: [
      'Main vs. Renderer process architecture with secure IPC communication',
      'Native filesystem access, local file watchers, and offline execution capabilities',
      'Custom window controls, keyboard shortcuts, and standalone packaging'
    ],
    projects: [
      { name: 'Beginner GO AI Game (Companion Baduk)', slug: 'beginner-go-ai-game', url: '/projects/beginner-go-ai-game' },
      { name: 'Go Library', slug: 'go-library', url: 'https://github.com/axyl-casc/GoLibrary' }
    ],
    tags: ['Electron', 'Node.js', 'Game Development', 'Offline-first'],
    featured: false
  },
  {
    id: 'quartz',
    name: 'Quartz 4',
    category: 'frontend',
    badge: 'Digital Garden & Static Site',
    rating: 4,
    proficiencyLabel: 'Advanced',
    description: 'Modern Markdown-to-HTML digital garden publishing framework written in TypeScript, featuring interactive graph views and client-side full-text search.',
    highlights: [
      'Custom TSX component engineering, breadcrumbs, and tag exploration widgets',
      'Automated bidirectional link resolution and interactive force-directed graph rendering',
      'Fast build pipelines transforming extensive Markdown repositories into static sites'
    ],
    projects: [
      { name: 'Infinite Mind Games Wiki Docs', slug: 'infinite-mind-games-wiki-docs', url: 'https://infinite-mind-pictures-inc.github.io/Infinite-Mind-Wiki/' }
    ],
    tags: ['Web Development', 'TypeScript', 'Productivity', 'Documentation'],
    featured: false
  },
  {
    id: 'data-viz-boards',
    name: 'Data Viz & Board Interfaces (Canvas / WGo.js)',
    category: 'frontend',
    badge: 'Interactive Canvas & Graphics',
    rating: 4,
    proficiencyLabel: 'Advanced',
    description: 'Custom interactive graphics for Go/Baduk game boards, schedule visualizers, and data representations using HTML5 Canvas and WGo.js.',
    highlights: [
      'Engineered interactive 19x19, 13x13, and 9x9 Go boards with coordinate overlays and move markers',
      'Custom Gantt chart scheduler canvas rendering real-time process execution timelines',
      'Efficient redraw cycles with responsive touch and mouse event listeners'
    ],
    projects: [
      { name: 'GoGuesser', slug: 'goguesser', url: 'https://goguesser.onrender.com/' },
      { name: 'Companion Baduk', slug: 'beginner-go-ai-game', url: '/projects/beginner-go-ai-game' },
      { name: 'CPU Scheduler (Scheduler Designer)', slug: 'cpu-scheduler', url: 'https://axyl-casc.github.io/Scheduler-Designer/' }
    ],
    tags: ['Visualization', 'Game Development', 'Algorithms'],
    featured: false
  },

  // ================= BACKEND =================
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    badge: 'Asynchronous JavaScript Runtime',
    rating: 4,
    proficiencyLabel: 'Advanced',
    description: 'Event-driven server-side runtime executing non-blocking JavaScript for APIs, real-time event distribution, and command-line developer tooling.',
    highlights: [
      'Non-blocking I/O event loop model handling concurrent HTTP client requests',
      'Modular package management and build automation workflows via npm and Vite',
      'Real-time WebSocket and HTTP server architectures powering interactive multiplayer web apps'
    ],
    projects: [
      { name: 'GoGuesser', slug: 'goguesser', url: 'https://goguesser.onrender.com/' },
      { name: 'Companion Baduk', slug: 'beginner-go-ai-game', url: '/projects/beginner-go-ai-game' },
      { name: 'Go Library', slug: 'go-library', url: 'https://github.com/axyl-casc/GoLibrary' },
      { name: 'Portfolio Build System', slug: 'axyl-casc-portfolio-website', url: 'https://github.com/axyl-casc/portfolio_code' }
    ],
    tags: ['Node.js', 'Express.js', 'Backend', 'Web App'],
    featured: true
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'backend',
    badge: 'RESTful Server Framework',
    rating: 4,
    proficiencyLabel: 'Advanced',
    description: 'Minimalist web application framework for Node.js powering REST APIs, route handling, custom middleware, and static asset streaming.',
    highlights: [
      'RESTful routing architectures for game state polling, scoring, and user submission verification',
      'CORS security middleware, request body parsing, and standardized error responses',
      'Static file hosting paired with dynamic API controllers in unified backend servers'
    ],
    projects: [
      { name: 'GoGuesser', slug: 'goguesser', url: 'https://goguesser.onrender.com/' },
      { name: 'Go Library', slug: 'go-library', url: 'https://github.com/axyl-casc/GoLibrary' }
    ],
    tags: ['Express.js', 'Node.js', 'Backend', 'Web App'],
    featured: true
  },
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    badge: 'Multi-paradigm Systems & Science',
    rating: 5,
    proficiencyLabel: 'Confident',
    description: 'Versatile programming language utilized across algorithmic research, game AI rule engines, scientific data modeling, and web backend scripting.',
    highlights: [
      'Engineered comprehensive Go/Baduk game logic engines with SGF parsing, liberties, and rule resolution',
      'Scientific computing with NumPy, SymPy, and Matplotlib for mathematical data analysis',
      'Clean object-oriented and functional code with strong standard library utilization'
    ],
    projects: [
      { name: 'Go AI Game Logic (Companion Baduk)', slug: 'beginner-go-ai-game', url: '/projects/beginner-go-ai-game' },
      { name: 'Go Library SGF Parser', slug: 'go-library', url: 'https://github.com/axyl-casc/GoLibrary' },
      { name: 'CPU Scheduling Algorithms', slug: 'cpu-scheduler', url: 'https://axyl-casc.github.io/Scheduler-Designer/' }
    ],
    tags: ['Python', 'Algorithms', 'AI', 'Game Development', 'Data Science'],
    featured: true
  },
  {
    id: 'flask',
    name: 'Flask',
    category: 'backend',
    badge: 'WSGI Microframework',
    rating: 4,
    proficiencyLabel: 'Advanced',
    description: 'Lightweight and extensible Python microframework ideal for rapid REST microservice creation, custom route blueprints, and data API endpoints.',
    highlights: [
      'Configured RESTful JSON endpoints interfacing Python analytical algorithms with web clients',
      'Custom blueprint routing, request argument validation, and serialized response payloads',
      'Lightweight server footprints easily packaged for containerized deployment'
    ],
    projects: [
      { name: 'Go Library Backend Services', slug: 'go-library', url: 'https://github.com/axyl-casc/GoLibrary' }
    ],
    tags: ['Python', 'Backend', 'Web Development'],
    featured: true
  },
  {
    id: 'django',
    name: 'Django',
    category: 'backend',
    badge: 'Python Web Framework',
    rating: 3,
    proficiencyLabel: 'Working Knowledge',
    description: 'High-level Python web framework with an "included batteries" architecture, MTV patterns, ORM data modeling, and built-in administration tooling.',
    highlights: [
      'Model-Template-View (MTV) application architecture and URL dispatcher routing',
      'Django ORM for object-relational database mapping and schema migrations',
      'Configuring views, form handling, and built-in admin interface'
    ],
    projects: [],
    tags: ['Python', 'Backend', 'Web Development'],
    featured: false
  },
  {
    id: 'java',
    name: 'Java',
    category: 'backend',
    badge: 'Object-Oriented Enterprise Language',
    rating: 5,
    proficiencyLabel: 'Confident',
    description: 'Object-oriented programming language emphasizing maintainable design patterns, type safety, JVM concurrency, and robust software engineering.',
    highlights: [
      'Deep mastery of SOLID design principles, inheritance hierarchies, and design patterns',
      'Complex algorithmic data structures, recursion, graph traversals, and unit testing with JUnit',
      'Multi-threaded concurrent programming and rigorous exception handling'
    ],
    projects: [
      { name: 'Educational Software & Coursework', slug: 'cpu-scheduler' }
    ],
    tags: ['Java', 'Software Engineering', 'Algorithms', 'OOP'],
    featured: true
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'backend',
    badge: 'Server-Side Web Scripting',
    rating: 3,
    proficiencyLabel: 'Working Knowledge',
    description: 'Server-side scripting language for dynamic web page generation, HTTP request processing, form handling, and MySQL database interaction.',
    highlights: [
      'Server-side form validation, session tracking, and user authentication routines',
      'Prepared statements via PDO for secure, injection-safe relational database interactions',
      'Dynamic HTML template composition and server-side model-view-controller architectures'
    ],
    projects: [],
    tags: ['PHP', 'Backend', 'SQL', 'Web Development'],
    featured: true
  },
  {
    id: 'c-cpp',
    name: 'C & C++',
    category: 'backend',
    badge: 'Systems & High-Performance Language',
    rating: 5,
    proficiencyLabel: 'Confident',
    description: 'High-performance low-level programming languages delivering manual memory control, hardware interfacing, game engines, and POSIX OS operations.',
    highlights: [
      'Manual memory allocation, pointer manipulation, and cache-conscious data structures',
      'Built a complete Defender Arcade game remake featuring particle physics, sprite rendering, and collision detection',
      'System-level POSIX programming with process forks, execve, pipe redirection, and custom signal traps'
    ],
    projects: [
      { name: 'Defender Arcade Remake', slug: 'defender-remake', url: 'https://github.com/axyl-casc/Defender' },
      { name: 'Linux Custom Shell', slug: 'linux-shell-development', url: 'https://github.com/axyl-casc/linux-shell?tab=readme-ov-file#linux-shell' }
    ],
    tags: ['C/C++', 'Game Development', 'Systems Programming', 'Concurrency'],
    featured: false
  },
  {
    id: 'csharp-dotnet',
    name: 'C# / .NET',
    category: 'backend',
    badge: 'Application Framework & Language',
    rating: 4,
    proficiencyLabel: 'Advanced',
    description: 'Modern strongly-typed language and runtime powering desktop applications, backend business services, and game engine logic.',
    highlights: [
      'Object-oriented system modeling with LINQ data queries and asynchronous Task pipelines',
      'Windows application development with responsive user interfaces and event handling',
      'Robust static typing, generics, and native Windows OS integration'
    ],
    projects: [],
    tags: ['Software Development', 'OOP'],
    featured: false
  },
  {
    id: 'haskell',
    name: 'Haskell',
    category: 'backend',
    badge: 'Purely Functional Language',
    rating: 3,
    proficiencyLabel: 'Working Knowledge',
    description: 'Purely functional programming language with strong static typing, immutable data structures, lazy evaluation, and algebraic types.',
    highlights: [
      'Pure mathematical function transformations free of unintended state side-effects',
      'Pattern matching on recursive algebraic data types and custom monad pipelines',
      'Rigorous algorithmic correctness and theoretical computer science applications'
    ],
    projects: [],
    tags: ['Algorithms', 'Software Development'],
    featured: false
  },
  {
    id: 'assembly',
    name: 'Assembly',
    category: 'backend',
    badge: 'Low-Level Machine Architecture',
    rating: 3,
    proficiencyLabel: 'Working Knowledge',
    description: 'Machine-level instruction architectures providing intimate understanding of CPU registers, stack frames, calling conventions, and micro-optimizations.',
    highlights: [
      'Direct register allocation, stack frame manipulation, and conditional branching',
      'Compiled and simulated game logic running in web-based assembly emulators',
      'Deep comprehension of memory layouts, cache alignments, and compiler instruction lowering'
    ],
    projects: [
      { name: 'Compiled (Android Strategy Game)', slug: 'assembly-board-game', url: 'https://axyl-casc.github.io/CompiledWebsite/' }
    ],
    tags: ['Assembly', 'Systems Programming', 'Game Development'],
    featured: false
  },
  {
    id: 'bash-shell',
    name: 'Bash & Shell Scripting',
    category: 'backend',
    badge: 'Command-line Automation & OS',
    rating: 4,
    proficiencyLabel: 'Advanced',
    description: 'Linux shell scripting and pipeline automation for build environments, batch file transformations, process inspection, and dev environments.',
    highlights: [
      'Constructed complex shell pipelines with stdin/stdout streaming, grep, sed, and awk',
      'Automated repository maintenance, static asset generation, and build scripts',
      'Engineered a complete Linux shell from scratch handling job control, aliases, and redirects'
    ],
    projects: [
      { name: 'Linux Shell Development', slug: 'linux-shell-development', url: 'https://github.com/axyl-casc/linux-shell?tab=readme-ov-file#linux-shell' }
    ],
    tags: ['Systems Programming', 'Linux', 'Automation'],
    featured: false
  },

  // ================= DATABASE =================
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'database',
    badge: 'Relational Database Engine',
    rating: 4,
    proficiencyLabel: 'Advanced',
    description: 'World-renowned relational database management system supporting structured schemas, normalized tables, ACID transactions, and indexes.',
    highlights: [
      'Schema design with primary/foreign keys, cascade operations, and strict constraints',
      'Complex query authoring using multi-table INNER/LEFT JOINs, GROUP BY aggregations, and subqueries',
      'Index optimization for high-throughput reads and transactional data integrity'
    ],
    projects: [],
    tags: ['MySQL', 'SQL', 'Database', 'Backend & Databases'],
    featured: true
  },
  {
    id: 'sqlite',
    name: 'SQLite',
    category: 'database',
    badge: 'Embedded Serverless SQL',
    rating: 4,
    proficiencyLabel: 'Advanced',
    description: 'Self-contained, serverless, zero-configuration SQL database engine embedded directly into applications for instant local data persistence.',
    highlights: [
      'Zero-latency embedded SQL operations without external database server daemon setup',
      'File-based atomic transaction logging ensuring resilience against crashes and corruption',
      'Ideal local store for desktop tools, game save profiles, and offline analytical datasets'
    ],
    projects: [
      { name: 'Go Library Local Archive', slug: 'go-library', url: 'https://github.com/axyl-casc/GoLibrary' },
      { name: 'Companion Baduk', slug: 'beginner-go-ai-game', url: '/projects/beginner-go-ai-game' }
    ],
    tags: ['Database', 'SQL', 'Offline-first'],
    featured: true
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'database',
    badge: 'Cloud Postgres BaaS',
    rating: 3,
    proficiencyLabel: 'Working Knowledge',
    description: 'Modern open-source Backend-as-a-Service delivering managed PostgreSQL, real-time database subscriptions, Row-Level Security, and Auth.',
    highlights: [
      'PostgreSQL relational schema configuration with typed auto-generated client bindings',
      'Row-Level Security (RLS) policies enforcing fine-grained user data access rules',
      'Real-time database triggers and instant RESTful / GraphQL API generation'
    ],
    projects: [],
    tags: ['Database', 'Postgres', 'Backend & Databases', 'Cloud'],
    featured: true
  },
  {
    id: 'mariadb',
    name: 'MariaDB',
    category: 'database',
    badge: 'High-Performance Open SQL',
    rating: 3,
    proficiencyLabel: 'Working Knowledge',
    description: 'Community-developed, high-performance open-source fork of MySQL delivering advanced storage engines, window functions, and enhanced query execution.',
    highlights: [
      'Advanced SQL queries featuring window functions, CTEs (Common Table Expressions), and stored procedures',
      'High-concurrency read/write transaction isolation and schema optimization',
      'Seamless drop-in compatibility with MySQL tooling and administrative workflows'
    ],
    projects: [],
    tags: ['SQL', 'Database', 'Backend & Databases'],
    featured: false
  },
  {
    id: 'oracle-sql',
    name: 'Oracle SQL',
    category: 'database',
    badge: 'Enterprise Relational Database',
    rating: 3,
    proficiencyLabel: 'Working Knowledge',
    description: 'Enterprise relational database platform emphasizing rigorous relational integrity, PL/SQL stored procedures, and complex data modeling.',
    highlights: [
      'Rigorous schema modeling, entity-relationship diagrams (ERDs), and normalization to 3NF',
      'Analytical SQL queries, hierarchical queries (CONNECT BY), and aggregate reporting',
      'Transaction control management, table locking strategies, and data auditing'
    ],
    projects: [],
    tags: ['SQL', 'Database', 'Software Development'],
    featured: false
  },
  {
    id: 'ms-access',
    name: 'Microsoft Access',
    category: 'database',
    badge: 'Desktop Relational System',
    rating: 3,
    proficiencyLabel: 'Working Knowledge',
    description: 'Integrated relational database management system combining the Jet Database Engine with visual table design, relationships, and queries.',
    highlights: [
      'Relational database design, table relationships with referential integrity enforcement',
      'Visual query builder and SQL query construction for localized organizational reporting',
      'Rapid prototype database modeling and business application workflows'
    ],
    projects: [],
    tags: ['SQL', 'Backend & Databases'],
    featured: false
  },
  {
    id: 'browser-storage',
    name: 'Browser LocalStorage & Offline Cache',
    category: 'database',
    badge: 'Client Persistence',
    rating: 4,
    proficiencyLabel: 'Advanced',
    description: 'Client-side web storage mechanisms (localStorage, sessionStorage) enabling instant state recall without mandatory server roundtrips.',
    highlights: [
      'Theme preferences persistence across visits on portfolio and demo apps',
      'Shopping cart persistence in Fancy Pants Outfitters without server requirements',
      'Streak counter, 7-day schedule, and completion state storage in Daily Training Game'
    ],
    projects: [
      { name: 'Daily Training Game (Streaks & Tasks)', slug: 'daily-training-game', url: 'https://axyl-casc.github.io/TrainingGame/' },
      { name: 'Fancy Pants Outfitters (Cart State)', slug: 'fancy-pants-outfitters-react-demo', url: 'https://acare3.github.io/4513_2_website/' },
      { name: 'Portfolio Website (Theme Storage)', slug: 'axyl-casc-portfolio-website', url: 'https://github.com/axyl-casc/portfolio_code' }
    ],
    tags: ['Web App', 'Productivity', 'Offline-first'],
    featured: false
  },

  // ================= SERVER & DEVOPS =================
  {
    id: 'apache',
    name: 'Apache HTTP Server',
    category: 'server',
    badge: 'Web Server',
    rating: 3,
    proficiencyLabel: 'Working Knowledge',
    description: 'Practical experience setting up and configuring Apache to host and serve basic websites and web applications.',
    highlights: [
      'Basic web server installation, configuration, and service management',
      'Configuring document roots and serving static and dynamic web pages',
      'Basic directory permissions and site configuration files'
    ],
    projects: [],
    tags: ['Server', 'Web Development'],
    featured: false
  },
  {
    id: 'render',
    name: 'Render (onrender.com)',
    category: 'server',
    badge: 'Cloud Hosting Platform',
    rating: 4,
    proficiencyLabel: 'Advanced',
    description: 'Fully managed cloud application platform for deploying full-stack web applications, real-time Node.js servers, and continuous web services.',
    highlights: [
      'Deploys GoGuesser live web application with high-frequency community polling',
      'Automated Git push-to-deploy workflows with environment variable management',
      'SSL/TLS certificate automation and zero-downtime deployment pipelines'
    ],
    projects: [
      { name: 'GoGuesser (Production Web Service)', slug: 'goguesser', url: 'https://goguesser.onrender.com/' }
    ],
    tags: ['Server', 'Cloud', 'Node.js', 'Web App'],
    featured: true
  },
  {
    id: 'github-pages',
    name: 'GitHub Pages & Actions CI/CD',
    category: 'server',
    badge: 'Static Edge Hosting & CI/CD',
    rating: 5,
    proficiencyLabel: 'Confident',
    description: 'Global static site edge distribution powered by automated GitHub Actions CI/CD build matrices, cache optimizations, and CDN deployment.',
    highlights: [
      'Continuous deployment of portfolio, games, and documentation directly from Git repositories',
      'GitHub Actions workflows executing automated build scripts, linters, and asset publishing',
      'Custom domain configuration with automatic HTTPS provisioning and DNS routing'
    ],
    projects: [
      { name: 'Portfolio Website', slug: 'axyl-casc-portfolio-website', url: 'https://github.com/axyl-casc/portfolio_code' },
      { name: 'Fancy Pants Outfitters Demo', slug: 'fancy-pants-outfitters-react-demo', url: 'https://acare3.github.io/4513_2_website/' },
      { name: 'Infinite Mind Games Wiki', slug: 'infinite-mind-games-wiki-docs', url: 'https://infinite-mind-pictures-inc.github.io/Infinite-Mind-Wiki/' },
      { name: 'Compiled (Android Strategy Game)', slug: 'assembly-board-game', url: 'https://axyl-casc.github.io/CompiledWebsite/' },
      { name: 'CPU Scheduler', slug: 'cpu-scheduler', url: 'https://axyl-casc.github.io/Scheduler-Designer/' },
      { name: 'Daily Training Game', slug: 'daily-training-game', url: 'https://axyl-casc.github.io/TrainingGame/' },
      { name: 'Dice Simulator', slug: 'dice-simulator', url: 'https://axyl-casc.github.io/Dice-Simulator/' }
    ],
    tags: ['Web Development', 'CI/CD', 'GitHub'],
    featured: false
  },
  {
    id: 'itch-io',
    name: 'Itch.io (Desktop Distribution)',
    category: 'server',
    badge: 'Desktop Game Distribution',
    rating: 4,
    proficiencyLabel: 'Advanced',
    description: 'Independent distribution portal utilized for releasing and distributing standalone desktop Electron application packages.',
    highlights: [
      'Packaging and releasing Companion Baduk (Beginner GO AI Game) as a standalone desktop Electron app',
      'Desktop installer distribution, release versioning, and build asset hosting',
      'Game page custom styling, release changelogs, and player community engagement'
    ],
    projects: [
      { name: 'Beginner GO AI Game (Companion Baduk)', slug: 'beginner-go-ai-game', url: '/projects/beginner-go-ai-game' }
    ],
    tags: ['Game Development', 'Distribution', 'Electron'],
    featured: false
  },
  {
    id: 'vite',
    name: 'Vite Dev Server & Toolchain',
    category: 'server',
    badge: 'Modern Frontend Toolchain',
    rating: 5,
    proficiencyLabel: 'Confident',
    description: 'Lightning-fast native ES module dev server, Hot Module Replacement (HMR), and Rollup-based production bundling.',
    highlights: [
      'Sub-millisecond dev server startup and instantaneous module replacement',
      'PostCSS and Tailwind processing pipelines with automated asset optimization',
      'Strict TypeScript type-checking (`tsc -b`) and multi-page path bundling'
    ],
    projects: [
      { name: 'Portfolio Website', slug: 'axyl-casc-portfolio-website', url: 'https://github.com/axyl-casc/portfolio_code' },
      { name: 'Fancy Pants Outfitters', slug: 'fancy-pants-outfitters-react-demo', url: 'https://acare3.github.io/4513_2_website/' },
      { name: 'Go Library', slug: 'go-library', url: 'https://github.com/axyl-casc/GoLibrary' }
    ],
    tags: ['React', 'TypeScript', 'Web Development'],
    featured: false
  },
  {
    id: 'linux-posix',
    name: 'Linux / POSIX Environments',
    category: 'server',
    badge: 'OS & Execution Environment',
    rating: 4,
    proficiencyLabel: 'Advanced',
    description: 'Linux operating system kernel APIs, multi-process management, IPC message passing, signals, and server runtime environments.',
    highlights: [
      'Custom process hierarchy orchestration via fork(), execvp(), and waitpid()',
      'Inter-process communication (IPC) via anonymous pipes and dup2 file descriptor redirection',
      'POSIX signal handling protecting server and shell reliability from unexpected aborts'
    ],
    projects: [
      { name: 'Linux Shell Development', slug: 'linux-shell-development', url: 'https://github.com/axyl-casc/linux-shell?tab=readme-ov-file#linux-shell' }
    ],
    tags: ['Systems Programming', 'Concurrency', 'C/C++'],
    featured: false
  },
  {
    id: 'rest-websocket-apis',
    name: 'REST & WebSocket Protocol APIs',
    category: 'server',
    badge: 'Network Protocols & Realtime',
    rating: 4,
    proficiencyLabel: 'Advanced',
    description: 'Client-server communication architectures implementing RESTful JSON APIs and high-frequency real-time event distribution.',
    highlights: [
      'Engineered 100ms community voting synchronization broadcast in GoGuesser',
      'Structured JSON payload schemas, HTTP status codes, and CORS handling',
      'Decoupled frontend/backend architectures facilitating independent scaling'
    ],
    projects: [
      { name: 'GoGuesser (Real-time Broadcasts)', slug: 'goguesser', url: 'https://goguesser.onrender.com/' },
      { name: 'Go Library (REST Endpoints)', slug: 'go-library', url: 'https://github.com/axyl-casc/GoLibrary' },
      { name: 'Companion Baduk', slug: 'beginner-go-ai-game', url: '/projects/beginner-go-ai-game' }
    ],
    tags: ['Node.js', 'Express.js', 'Web App'],
    featured: false
  }
];

export interface ProjectStackProfile {
  projectName: string;
  projectSlug?: string;
  liveUrl?: string;
  repoUrl?: string;
  role: string;
  summary: string;
  frontend: string[];
  backend: string[];
  database: string[];
  server: string[];
}

export const PROJECT_STACK_PROFILES: ProjectStackProfile[] = [
  {
    projectName: 'GoGuesser (Full-Stack Go/Baduk Learning App)',
    projectSlug: 'goguesser',
    liveUrl: 'https://goguesser.onrender.com/',
    role: 'Full-Stack Developer & Real-time Architect',
    summary: 'An interactive web application helping Go players test their board analysis skills against pro-level positions with real-time community scoring and synchronization.',
    frontend: ['React', 'TypeScript', 'Tailwind CSS & DaisyUI', 'Data Viz & Board Interfaces (Canvas / WGo.js)'],
    backend: ['Node.js', 'Express.js'],
    database: ['Browser LocalStorage & Offline Cache'],
    server: ['Render (onrender.com)', 'REST & WebSocket Protocol APIs', 'Vite Dev Server & Toolchain']
  },
  {
    projectName: 'Go Library (Smart Go/Baduk Library & SGF Parser)',
    projectSlug: 'go-library',
    repoUrl: 'https://github.com/axyl-casc/GoLibrary',
    role: 'Full-Stack & Systems Developer',
    summary: 'A desktop and web-compatible SGF library manager for sorting, reviewing, and analyzing game records with local SQLite caching.',
    frontend: ['React', 'TypeScript', 'Electron', 'Data Viz & Board Interfaces (Canvas / WGo.js)'],
    backend: ['Python', 'Flask', 'Node.js', 'Express.js'],
    database: ['SQLite'],
    server: ['Vite Dev Server & Toolchain', 'REST & WebSocket Protocol APIs']
  },
  {
    projectName: 'Companion Baduk (Beginner GO AI Game)',
    projectSlug: 'beginner-go-ai-game',
    liveUrl: '/projects/beginner-go-ai-game',
    role: 'AI Logic Developer & UI Integrator',
    summary: 'Educational Go game tailored for newcomers, featuring transparent heuristic AI opponents, step-by-step rule explanations, packaged as a standalone desktop Electron app.',
    frontend: ['Data Viz & Board Interfaces (Canvas / WGo.js)', 'Vanilla HTML5 / CSS3 / JavaScript', 'Electron'],
    backend: ['Node.js', 'Python', 'C & C++'],
    database: ['SQLite', 'Browser LocalStorage & Offline Cache'],
    server: ['Desktop Application Packaging', 'REST & WebSocket Protocol APIs']
  },
  {
    projectName: 'Fancy Pants Outfitters (E-Commerce Web Demo)',
    projectSlug: 'fancy-pants-outfitters-react-demo',
    liveUrl: 'https://acare3.github.io/4513_2_website/',
    role: 'Frontend Architect',
    summary: 'A sleek e-commerce shopping experience with dynamic product filtering, cart drawer, checkout validation, and responsive mobile design.',
    frontend: ['React', 'TypeScript', 'Tailwind CSS & DaisyUI'],
    backend: ['Node.js'],
    database: ['Browser LocalStorage & Offline Cache'],
    server: ['GitHub Pages & Actions CI/CD', 'Vite Dev Server & Toolchain']
  },
  {
    projectName: 'Defender Arcade Remake (Arcade Game in C++)',
    projectSlug: 'defender-remake',
    repoUrl: 'https://github.com/axyl-casc/Defender',
    role: 'Engine & Gameplay Programmer',
    summary: 'An authentic arcade remake built in C++ featuring side-scrolling terrain radar, particle explosions, lander AI kidnapping logic, and low-level memory management.',
    frontend: [],
    backend: ['C & C++'],
    database: [],
    server: ['Linux / POSIX Environments']
  },
  {
    projectName: 'Infinite Mind Games Wiki (Quartz 4 Docs)',
    projectSlug: 'infinite-mind-games-wiki-docs',
    liveUrl: 'https://infinite-mind-pictures-inc.github.io/Infinite-Mind-Wiki/',
    role: 'Documentation Architect & Tooling Developer',
    summary: 'Comprehensive internal knowledge base and game design repository featuring graph-based node navigation, fast search, and TSX component overrides.',
    frontend: ['Quartz 4', 'React', 'TypeScript'],
    backend: [],
    database: [],
    server: ['GitHub Pages & Actions CI/CD']
  },
  {
    projectName: 'Linux Shell & Systems Interpreter',
    projectSlug: 'linux-shell-development',
    repoUrl: 'https://github.com/axyl-casc/linux-shell?tab=readme-ov-file#linux-shell',
    role: 'Systems Programmer',
    summary: 'A fully functional POSIX shell written in C supporting piped commands, file redirection, background job execution, and custom signal management.',
    frontend: [],
    backend: ['C & C++', 'Bash & Shell Scripting'],
    database: [],
    server: ['Linux / POSIX Environments']
  },
  {
    projectName: 'CPU Scheduler (Scheduler Designer)',
    projectSlug: 'cpu-scheduler',
    liveUrl: 'https://axyl-casc.github.io/Scheduler-Designer/',
    role: 'Algorithm & Frontend Developer',
    summary: 'Interactive operating system simulation tool visualizing FCFS, SJF, Priority, and Round-Robin CPU scheduling policies with dynamic Gantt charts.',
    frontend: ['Vanilla HTML5 / CSS3 / JavaScript', 'Data Viz & Board Interfaces (Canvas / WGo.js)'],
    backend: ['Python', 'Java'],
    database: [],
    server: ['GitHub Pages & Actions CI/CD']
  },
  {
    projectName: 'Compiled (Android Strategy Game)',
    projectSlug: 'assembly-board-game',
    liveUrl: 'https://axyl-casc.github.io/CompiledWebsite/',
    role: 'Android & Game Logic Developer',
    summary: 'A tactical board game for Android where players manipulate 4-bit CPU registers in a shared cyclic memory loop and pursue hidden victory conditions.',
    frontend: ['React Native / TypeScript'],
    backend: ['Virtual 4-Bit CPU Engine'],
    database: ['AsyncStorage (Local Persistence)'],
    server: ['Google Play (Closed Testing) & GitHub Pages']
  }
];
