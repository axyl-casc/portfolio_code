import type { Project } from './types';

export const projects: Project[] = [
  {
    slug: 'anscombes-quartet-research',
    title: "Anscombe's Quartet Research",
    shortDescription: "Created a program to replicate Anscombe's Quartet, emphasizing the importance of visual data analysis.",
    longDescription: [
      "Created an exploratory data analysis program in Python designed to demonstrate the critical importance of visualizing datasets prior to calculating statistical models. Anscombe's Quartet comprises four synthetic datasets that share virtually identical descriptive statistics—including mean, sample variance, linear correlation coefficient, and ordinary least-squares regression lines—yet reveal completely distinct structures when plotted.",
      "The project implements core statistical calculations using NumPy vector operations (including dot product variance formulas and least-squares matrix solves), as well as symbolic equation manipulation with SymPy and regex coefficient extraction. It demonstrates how outliers, non-linear curves, and high-leverage points can deceive purely numerical models."
    ],
    highlights: [
      "Vectorized calculation of mean, variance, and standard deviation using NumPy dot products",
      "Linear algebra matrix solver using np.linalg.solve to compute regression lines",
      "Symbolic mathematics and regex-based quadratic solver handling real and complex roots",
      "Interactive data plots highlighting why visual inspection is essential in statistical workflows"
    ],
    description: "Created a program to replicate Anscombe's Quartet, emphasizing the importance of visual data analysis.",
    projectUrl: 'https://github.com/axyl-casc/Anscombes_Research?tab=readme-ov-file#anscombes-quartet-research-project',
    section: 'featured',
    tags: ['Data Analysis', 'Research', 'Python', 'Software Development']
  },
  {
    slug: 'infinite-mind-games-wiki-docs',
    title: 'Infinite Mind Games – Wiki Docs',
    shortDescription: 'An interactive documentation site built with Quartz, featuring guides, learning modules, and development notes for Infinite Mind Games projects.',
    longDescription: [
      'Developed an interactive digital garden and internal documentation platform for Infinite Mind Pictures using Quartz 4, TypeScript, and React. Built to streamline cross-functional collaboration, the wiki provides structured onboarding guides, game design documents, educational modules, and engineering roadmaps for developers, educators, and community partners.',
      'As a Web Development Intern at Infinite Mind Pictures, I helped lead development with an emphasis on accessibility and neurodivergent-friendly UI/UX design. The platform incorporates automated image optimization via Python (Pillow) scripts, interactive backlinks and local graph visualizations, fast full-text client-side search, and seamless continuous deployment to GitHub Pages.'
    ],
    highlights: [
      'Centralized knowledge base built on Quartz 4 with markdown notes, wiki-links ([[note]]), and interactive graph views',
      'Automated image compression pipeline using Python and Pillow integrated into build scripts',
      'Neurodivergent-friendly, high-contrast accessible layouts designed for clear information hierarchy',
      'Curriculum documentation supporting game design assets and community coding resources'
    ],
    description: 'An interactive documentation site built with Quartz, featuring guides, learning modules, and development notes for Infinite Mind Games projects.',
    projectUrl: 'https://infinite-mind-pictures-inc.github.io/Infinite-Mind-Wiki/',
    section: 'featured',
    tags: ['Quartz 4', 'Documentation', 'Web Development', 'React', 'TypeScript', 'JavaScript', 'Java', 'Markdown', 'Accessibility', 'UI/UX', 'Software Development', 'Technical Communication']
  },
  {
    slug: 'beginner-go-ai-game',
    title: 'Beginner GO AI Game (Companion Baduk)',
    shortDescription: 'Companion Baduk: A beginner-friendly Go game AI and instructional platform with sparring partners, puzzles, and interactive lessons.',
    longDescription: [
      'Companion Baduk is a full-featured desktop game and interactive learning platform engineered to introduce new players to Go (Baduk / Weiqi). Designed to run smoothly on Windows PCs (including lightweight devices like the Surface Pro 8), the application bridges the steep learning curve of Go by pairing players with modern, adaptive AI sparring partners and a comprehensive curriculum.',
      'The application includes four core play modes: Normal even-game play, classic Chinese opening setups, dynamic handicap stone configurations, and historical Korean Sunjang Baduk layouts. It also features a surprise Challenge Mode that tests tactical adaptability on unconventional boards. Players progress through structured scenario tutorials, solve curated Tsumego life-and-death puzzles, track rank progression from 40 kyu to 9 dan with belt color visualizations, and earn in-game currency without any microtransactions to unlock historic pro game replays and custom board themes.'
    ],
    highlights: [
      'Adaptive AI sparring partners calibrated across skill levels, from complete beginner up through 9-dan master rankings',
      'Multiple game variations: Normal, Chinese Opening, Handicap, Sunjang Baduk, and surprise Challenge Mode',
      'Curated Tsumego puzzle library with tactical hints, move explanations, and immediate board state feedback',
      'Zero-microtransaction progression system with unlockable board themes, stone skins, and historic pro match replays',
      'Accessible responsive desktop UI with keyboard zoom controls (Ctrl+Shift++ / Ctrl+-) and detailed player win-rate analytics'
    ],
    description: 'Companion Baduk: A beginner-friendly Go game AI and instructional platform with sparring partners, puzzles, and interactive lessons.',
    projectUrl: 'https://zxnashx.itch.io/beginner-go-game',
    section: 'featured',
    tags: ['Baduk / Go', 'Game Development', 'Education', 'Python', 'JavaScript', 'Node.js', 'Electron', 'SQL', 'Tailwind CSS', 'Applied AI', 'Go AI', 'Algorithms', 'UI/UX', 'Software Development']
  },
  {
    slug: 'fancy-pants-outfitters-react-demo',
    title: 'Fancy Pants Outfitters (React Demo)',
    shortDescription: 'A polished React storefront demo featuring curated fashion collections, interactive cart management, and Plotly sales analytics.',
    longDescription: [
      'Fancy Pants Outfitters is a responsive single-page e-commerce storefront and analytics dashboard engineered with React 18, TypeScript, Vite, Tailwind CSS, and DaisyUI. The application simulates a high-end fashion retailer offering curated men\'s and women\'s apparel collections, trending styles, and accessories.',
      'Beyond product browsing, the application features an authentication simulation using pre-seeded accounts to demo user roles without requiring a backend server. It maintains a persistent shopping cart with interactive quantity adjustments, price calculations, and item removals. It also includes an executive sales dashboard powered by Plotly.js (react-plotly.js) visualizations that breaks down top-performing products, category revenue trends, and gender mix metrics.'
    ],
    highlights: [
      'Modern component-driven storefront built with React 18, TypeScript, Vite, Tailwind CSS, and DaisyUI',
      'Interactive shopping cart with item quantity controls, pricing totals, and local session persistence',
      'Executive sales dashboard with interactive Plotly.js charts for category distributions and product revenue analytics',
      'Simulated multi-role user authentication with seeded JSON account data',
      'Fully responsive layout with product detail modals, catalog pagination, and accessible UI controls'
    ],
    description: 'A polished React storefront demo featuring curated fashion for trendsetters, workweek looks, and night-out fits. Highlights include in-stock essentials, modern silhouettes, and standout accessories for individuals, partners, and the whole crew.',
    projectUrl: 'https://acare3.github.io/4513_2_website/',
    section: 'featured',
    tags: ['React', 'Frontend', 'E-commerce', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Web Development', 'UI/UX', 'Software Development']
  },
  {
    slug: 'defender-remake-atari-st',
    title: 'Defender Remake on Atari ST',
    shortDescription: 'A recreation of the arcade classic Defender for the retro Atari ST using C and 68000 assembly, featuring 70 FPS double-buffered animation.',
    longDescription: [
      'Engineered for the Motorola 68000-based Atari ST personal computer as part of the COMP 2659 course project, this project recreates the iconic arcade side-scrolling shooter Defender. Operating under the stringent CPU and memory constraints of retro 16-bit hardware, the game delivers fast-paced space combat where players pilot a ship defending humanoids from waves of alien landers, mutants, and bombers.',
      'The technical architecture features a custom game loop driven by a 70 Hz Vertical Blank (VBL) Interrupt Service Routine (ISR) synchronized directly to the monitor\'s raster beam for tear-free double buffering. Game audio is synthesized directly using the Atari ST\'s Yamaha YM2149 Programmable Sound Generator (PSG) chip, while a custom Intelligent Keyboard (IKBD) ISR decodes concurrent keyboard inputs for flight and laser fire alongside mouse packets for the splash screen and menu system.'
    ],
    highlights: [
      'Low-level systems programming in C and Motorola 68000 assembly on the Atari ST architecture',
      'Double-buffered raster graphics running at 70 FPS locked to the hardware Vertical Blank (VBL) interrupt',
      'Hardware sound synthesis leveraging the onboard Yamaha YM2149 PSG sound generator for music and sound effects',
      'Custom IKBD Interrupt Service Routine handling asynchronous keyboard scans and mouse packet parsing',
      'Object pooling, collision detection matrices, and wave-based alien AI behavioral state machines'
    ],
    description: 'Recreated a classic arcade game using C and assembly, leveraging efficient memory management on limited hardware.',
    projectUrl: 'https://github.com/axyl-casc/DefenderRemake/tree/main?tab=readme-ov-file#atari-st-game---defender',
    section: 'featured',
    tags: ['C/C++', 'Assembly', 'Game Development', 'Software Development']
  },
  {
    slug: 'linux-shell-development',
    title: 'Linux Shell Development',
    shortDescription: 'A custom Unix command-line shell built in C featuring process management, I/O redirection, piping, and signal handling.',
    longDescription: [
      'Built as a comprehensive systems programming project for COMP 3659 (Operating Systems), this project implements a custom POSIX-compliant Unix shell in C. The shell provides an interactive command-line interface that mirrors core functionality of shells like Bash, managing process hierarchies and system resources through low-level Linux system calls.',
      'The implementation parses complex command strings into abstract execution trees, supporting tokenized arguments, path resolution, and execution via fork() and execvp(). The shell implements multi-stage inter-process communication pipelines (cmd1 | cmd2 | cmd3) using Unix pipes and file descriptor duplication (dup2()), handles input/output redirection (<, >, >>), tracks background jobs running with &, and manages OS signals like SIGINT (Ctrl+C) and SIGTSTP to protect parent shell stability.'
    ],
    highlights: [
      'Process lifecycle management implementing fork(), execvp(), waitpid(), and background job tracking',
      'Inter-process communication (IPC) supporting multi-command pipelining via pipe() and file descriptor duplication (dup2())',
      'Robust I/O redirection for standard input, output, and append modes (<, >, >>)',
      'Asynchronous signal handling for SIGINT, SIGTSTP, and SIGCHLD to prevent zombie processes',
      'Built-in shell command implementations including cd, history, help, and exit'
    ],
    description: 'Built a custom shell in C, handling concurrent commands and inter-process communication for a streamlined command-line experience.',
    projectUrl: 'https://github.com/axyl-casc/linux-shell?tab=readme-ov-file#linux-shell',
    section: 'featured',
    tags: ['C/C++', 'Systems Programming', 'Concurrency', 'Software Development']
  },
  {
    slug: 'cpu-scheduler',
    title: 'CPU Scheduler (Scheduler Designer)',
    shortDescription: 'An interactive OS CPU scheduling visualizer featuring dynamic CPU state diagrams, Gantt charts, and statistical performance comparisons.',
    longDescription: [
      'Developed as a capstone project for COMP 3659 (Operating Systems) by Axyl and Kevin, Scheduler Designer is an interactive educational web application that simulates and visualizes how operating system CPU scheduling algorithms allocate processing time across competing tasks.',
      'Users can configure custom process workloads—specifying arrival times, burst durations, priority levels, and I/O interruption intervals—and simulate their execution across algorithms including First-Come First-Served (FCFS), Shortest Job First (SJF), Shortest Remaining Time First (SRTF), Priority Scheduling, and Round Robin (RR) with adjustable time slices. The tool generates dynamic Gantt charts, real-time CPU state transition diagrams (Ready, Running, Waiting), and box-plot distributions illustrating turnaround times, waiting times, and CPU utilization metrics.'
    ],
    highlights: [
      'Interactive simulation of 5 major CPU scheduling algorithms: FCFS, SJF, SRTF, Priority, and Round Robin',
      'Interactive Gantt chart timeline tracking process execution slices and I/O interrupt preemptions',
      'Real-time state machine diagrams illustrating transitions between Ready, Running, and Waiting queues',
      'Comprehensive metric calculation: turnaround time, waiting time, response time, and CPU utilization',
      'Custom workload designer with exportable configurations and comparative benchmarking plots'
    ],
    description: 'Run different CPU scheduling algorithms interactively and view the results afterwards.',
    projectUrl: 'https://axyl-casc.github.io/Scheduler-Designer/',
    section: 'other',
    tags: ['Algorithms', 'Visualization', 'Education', 'JavaScript', 'Tailwind CSS', 'Web App', 'Software Development']
  },
  {
    slug: 'assembly-board-game',
    title: 'Assembly Board Game (Compiled)',
    shortDescription: 'Compiled: A prototype educational board game simulating a 20-slot CPU memory space where concurrent processes compete for secret objectives.',
    longDescription: [
      'Compiled is a prototype digital board game designed to make low-level computer architecture and assembly language concepts fun, accessible, and strategic. Built with vanilla JavaScript, HTML5, and CSS3, the game places players in the role of competing concurrent processes executing instructions on a shared 20-slot computer memory program space.',
      'Players hold hands of assembly instruction cards representing real CPU opcodes—such as MOV, ADD, SUB, JMP, CMP, and NOP—which they strategically inject into program slots. As the simulated CPU steps through memory, it modifies public hardware registers (AX, BX, CX, DX) and evaluates status flags. Each player secretly works toward confidential mission objectives (such as driving register values to specific targets, causing arithmetic overflows, or forcing halt conditions) while sabotaging opposing processes.'
    ],
    highlights: [
      'Interactive 20-slot program memory board with real-time CPU step execution and jump tracking',
      'Live hardware register panel displaying AX, BX, CX, and DX alongside zero/carry/overflow condition flags',
      'Authentic assembly instruction mechanics (MOV, ADD, SUB, JMP, CMP, NOP)',
      'Concealed objective system balancing competitive deduction with low-level computing mechanics',
      'Integrated interactive player manual and quick-start tutorial dialog'
    ],
    description: 'A fun prototype board game for learning assembly.',
    projectUrl: 'https://axyl-casc.github.io/AsmBoardgame',
    section: 'other',
    tags: ['Assembly', 'Game Development', 'Education', 'Web App', 'Software Development']
  },
  {
    slug: 'airplane-package-scheduler',
    title: 'Airplane Package Scheduler (TEMOO Cargo)',
    shortDescription: 'TEMOO Cargo: A logistics route optimization simulator implemented in JavaScript and Haskell solving multi-constraint cargo scheduling.',
    longDescription: [
      'TEMOO Cargo is an expedited air cargo logistics simulator developed to evaluate and compare imperative (JavaScript/Node.js) and functional (Haskell) programming paradigms when solving complex graph routing problems. The system models a commercial shipping network headquartered at a central hub airport with scheduled deliveries across Canadian destination nodes.',
      'The routing engine processes JSON distance matrices and flight constraints, accounting for airplane weight limits, cruise speed, fuel boundaries, package deadlines (strict 24-hour delivery windows), and mandatory round-trip return journeys. It employs shortest-path algorithms (Dijkstra and Floyd–Warshall) to navigate multi-hop trajectories, alongside backtracking and branch-and-cut optimization algorithms to discover schedules that minimize total flight distance and fuel consumption while guaranteeing zero late packages.'
    ],
    highlights: [
      'Dual implementation in JavaScript (Node.js) and pure functional Haskell for comparative paradigm analysis',
      'Graph-based airport network model using 2D distance matrices and multi-hop weighted paths',
      'Multi-constraint optimization: aircraft payload capacity, flight speed/range, and strict 24-hour package delivery deadlines',
      'Branch-and-cut / backtracking route permutation engine exploring global schedule efficiencies',
      'Comprehensive validation verifying zero payload overages and deadline adherence'
    ],
    description: 'Effectively calculates possible routes for airplanes to deliver packages with a version made in Javascript and Haskell.',
    projectUrl: 'https://github.com/axyl-casc/AirplaneGraphProject?tab=readme-ov-file#readme',
    section: 'other',
    tags: ['JavaScript', 'Haskell', 'Graph Algorithms', 'Software Development']
  },
  {
    slug: 'daily-training-game',
    title: 'Daily Training Game',
    shortDescription: 'A gamified daily habit tracker and training planner featuring rotating 7-day schedules, streak tracking, and a 3-day perspective.',
    longDescription: [
      'Daily Training Game is a personal productivity web application engineered to facilitate consistent daily habits, focused language acquisition, and technical skill development. Built with modular modern JavaScript and CSS, the application organizes goals into a rolling 3-day workflow: reviewing Yesterday\'s accomplishments, executing Today\'s active tasks, and previewing Tomorrow\'s schedule.',
      'The core system features dynamic 7-day schedule rotation with support for randomized objective pools, ensuring daily routines remain challenging without becoming monotonous. All progress, active daily streaks, and completion states are persisted locally in localStorage. The application also features a real-time countdown timer to midnight resets and interactive task check-offs that provide immediate positive feedback.'
    ],
    highlights: [
      'Rolling 3-day view showing Yesterday\'s completed log, Today\'s active priorities, and Tomorrow\'s preview',
      'Modular 7-day schedule configuration with support for randomized task pools to prevent training plateaus',
      'Persistent streak counter and progress tracking stored in browser localStorage',
      'Live countdown clock calculating time remaining until the next daily training cycle',
      'Clean, responsive distraction-free interface optimized for daily morning and evening reviews'
    ],
    description: 'A daily to-do list app I use for language learning and tracking whatever currently interests me.',
    projectUrl: 'https://axyl-casc.github.io/TrainingGame/',
    section: 'other',
    tags: ['Productivity', 'Habit Tracking', 'Web App', 'JavaScript', 'Tailwind CSS', 'Software Development']
  },
  {
    slug: 'goguesser',
    title: 'GoGuesser',
    shortDescription: 'A real-time multiplayer Go game guessing platform with live chat, community voting broadcasts, and SGF puzzle rotation.',
    longDescription: [
      'GoGuesser is a full-stack real-time web application built with Node.js, Express, and Tailwind CSS that tests players\' tactical intuition and positional judgment in the game of Go. Players evaluate high-level match scenarios and compete by guessing the next move played, comparing their choices against both top artificial intelligence engines and professional master players.',
      'The platform automatically rotates through Smart Game Format (SGF) files every 30 seconds, presenting three candidate moves: Move A (top AI engine recommendation), Move B (human professional play), and Move C (a common mistake or suboptimal line). Community votes are aggregated and broadcast to clients every 100 milliseconds for fluid live updates, accompanied by a rate-limited real-time chat room displaying each user\'s Go rank. The interactive board is rendered using WGo.js, and the application includes session integration allowing it to be launched directly from companion desktop Go software.'
    ],
    highlights: [
      'Full-stack real-time application built with Node.js, Express.js, and Tailwind CSS',
      'High-frequency (100ms) community vote synchronization across candidate moves',
      'Three-way move analysis contrasting top AI evaluations, professional human moves, and tactical blunders',
      'Automated 30-second SGF puzzle rotation parsing match trees into interactive WGo.js boards',
      'Integrated rate-limited chat system displaying player rank metadata and session authentication'
    ],
    description: 'Guess the next best move in a Go game.',
    projectUrl: 'https://goguesser.onrender.com/',
    section: 'other',
    tags: ['Baduk / Go', 'Puzzle', 'Web App', 'Node.js', 'Express.js', 'Tailwind CSS', 'Game Development', 'Software Development']
  },
  {
    slug: 'dice-simulator',
    title: 'Dice Simulator',
    shortDescription: 'An interactive probability distribution calculator and dice simulation suite powered by Plotly.js.',
    longDescription: [
      'Dice Simulator is a mathematical analysis and visualization web application designed to compute and display exact probability distributions for arbitrary combinations of polyhedral dice. Built with vanilla JavaScript, modern CSS, and Plotly.js, the tool caters to tabletop game designers, statistical analysts, and gamers seeking precise mathematical insights into dice pool mechanics.',
      'Users can build custom dice bags using standard polyhedral dice (d4, d6, d8, d10, d12, d20, d100) as well as custom-sided dice with specific face values and static modifiers. The simulation engine calculates exact combinatorial frequencies, probability density functions, and cumulative distribution curves. Interactive Plotly charts visualize outcome spreads, expected values, standard deviations, and percentile thresholds alongside structured frequency tables.'
    ],
    highlights: [
      'Custom dice pool builder supporting standard polyhedrals, arbitrary face counts, and flat roll modifiers',
      'Exact combinatorial mathematics calculating probability mass functions and cumulative likelihoods',
      'Interactive Plotly.js visualization rendering distribution curves, variance bands, and outcome histograms',
      'Comprehensive statistical summary tables displaying mean, median, standard deviation, and min/max rolls',
      'Responsive dark-mode UI with fast client-side calculations and zero external server dependencies'
    ],
    description: 'Generate probability distribution tables from custom sets of dice.',
    projectUrl: 'https://axyl-casc.github.io/Dice-Simulator/',
    section: 'other',
    tags: ['Probability', 'Simulation', 'Visualization', 'Software Development']
  },

  {
    slug: 'axyl-casc-portfolio-website',
    title: 'axyl-casc.github.io (Portfolio Website)',
    shortDescription: 'The open-source repository for this personal developer portfolio built with React 18, TypeScript, Tailwind CSS, and DaisyUI.',
    longDescription: [
      'This repository contains the complete source code for my personal developer portfolio website. Built using React 18, TypeScript, Vite, Tailwind CSS, and DaisyUI, the site showcases my software engineering projects, technical skill proficiencies, academic background, and personal hobbies in a modern, responsive single-page application.',
      'Key architectural features include custom animated SVG background waves, an accessible keyboard navigation system with skip links, a persistent light/dark theme toggle backed by localStorage, and an interconnected tagging system. The tag engine dynamically computes harmonic HSV color hues for each technology tag, enabling visitors to filter and explore related projects, work experiences, academic coursework, and hobbies across the entire site with ease.'
    ],
    highlights: [
      'Modern React 18 and TypeScript architecture bundled with Vite for fast HMR and optimized production builds',
      'Custom utility-first styling with Tailwind CSS and DaisyUI themed components',
      'Dynamic HSV tag color generation and bidirectional cross-referenced tag filtering pages',
      'Multi-layer animated background waves with smooth performance across all viewports',
      'Accessible design with ARIA landmark regions, focus styling, and keyboard shortcut support'
    ],
    description: 'The source repository for this portfolio website, built with React, TypeScript, and Tailwind CSS.',
    projectUrl: 'https://github.com/axyl-casc/portfolio_code',
    section: 'other',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Portfolio', 'Web Development', 'Software Development']
  },
  {
    slug: 'go-library',
    title: 'Go Library',
    shortDescription: 'An offline-first desktop bookshelf for Go literature and game records built with React, Node.js, Express, and SQLite.',
    longDescription: [
      'Go Library is a full-featured, offline-first digital bookshelf application engineered to organize, index, and study Baduk/Go literature and game records. Built with a React + Vite frontend and a Node.js + Express backend with an embedded SQLite database, the application allows enthusiasts to manage their personal collection of Go books, magazines, and match records.',
      'The backend automatically monitors the local filesystem using chokidar, indexing PDF, SGF, and HTML documents and generating cover thumbnails asynchronously using pdfjs-dist and node-canvas. The rich frontend shelf includes live search, category filtering, reading progress tracking, and custom bookmarks with notes. It features specialized viewers, including a multi-page PDF reader, an SGF game tree board powered by Besogo with autoplay and node favoriting, and multi-user profile isolation for shared family computers.'
    ],
    highlights: [
      'Full-stack offline architecture with React + Vite frontend, Express backend, and SQLite data persistence',
      'Automated filesystem indexing with chokidar and background thumbnail rendering (pdfjs-dist + node-canvas)',
      'Integrated multi-format viewers: interactive SGF game tree board (Besogo), PDF reader with bookmarks, and sanitized HTML viewer',
      'Per-document reading position tracking, user favorites, and recent history caching',
      'Isolated multi-user profile switching without external authentication requirements'
    ],
    description: 'Offline-first bookshelf for Go materials, with search, bookmarks, and resume tracking across PDF/SGF/HTML files.',
    projectUrl: 'https://github.com/axyl-casc/GoLibrary',
    section: 'other',
    tags: ['Offline-first', 'Search', 'Baduk / Go', 'Node.js', 'Electron', 'JavaScript', 'Software Development']
  }
];
