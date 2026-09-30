import type { Project } from './types';
import { badukAssets, defenderAssets, anscombesAssets, compiledAssets } from './projectAssets';

export const projects: Project[] = [
  {
    slug: 'beginner-go-ai-game',
    title: 'Companion Baduk',
    shortDescription:
      'Desktop Go application built around beginner-friendly AI opponents and interactive learning tools. Includes a custom explainable Go engine using heuristic evaluation, Monte Carlo search, difficulty scaling, and human-readable move explanations.',
    longDescription: [
      'Companion Baduk is a full-featured desktop game and instructional platform engineered to introduce new players to Go (Baduk / Weiqi). Designed to run smoothly on Windows PCs (including lightweight devices like the Surface Pro 8), the application bridges the steep learning curve of Go by pairing players with modern, adaptive AI sparring partners and a comprehensive interactive curriculum.',
      'Unlike conventional black-box neural network engines that output opaque win-rate percentages, Companion Baduk uses an explainable AI architecture combining heuristic pattern evaluation, Monte Carlo rollout search, dynamic difficulty calibration, and human-readable natural-language move explanations. Players progress through structured scenario tutorials, solve curated Tsumego life-and-death puzzles, track rank progression from 40 kyu to 9 dan with belt color visualizations, and earn in-game currency without microtransactions to unlock historic pro game replays and custom board themes.'
    ],
    highlights: [
      'Explainable AI engine with heuristic evaluation, Monte Carlo search, and human-readable move reasoning',
      'Adaptive AI sparring partners calibrated across skill levels from complete beginner (40 kyu) to master (9 dan)',
      'Four core game variations: Normal even-game play, Chinese Opening, Handicap stones, and Korean Sunjang Baduk',
      'Curated Tsumego puzzle library with tactical hints, move explanations, and immediate board state feedback',
      'Zero-microtransaction progression system with unlockable board themes, stone skins, and historic pro match replays',
      'Accessible responsive desktop UI with keyboard zoom controls and detailed player analytics'
    ],
    description:
      'Desktop Go application built around beginner-friendly AI opponents and interactive learning tools. Includes a custom explainable Go engine using heuristic evaluation, Monte Carlo search, difficulty scaling, and human-readable move explanations.',
    projectUrl: '',
    downloadUrl: 'https://store.steampowered.com/app/4698830/Companion_Baduk/',
    thumbnail: badukAssets.gameplay1,
    gallery: badukAssets.gallery,
    caseStudy: {
      overview:
        'Companion Baduk is a standalone desktop application and instructional platform designed to make learning the ancient game of Go (Baduk) intuitive, rewarding, and transparent. It combines an accessible Electron interface built with HTML5 Canvas, CSS3, and Vanilla JavaScript with a dedicated Python AI engine capable of evaluating board positions and explaining tactical ideas in plain English.',
      problem:
        'Go is notoriously difficult for novices: the state space exceeds the number of atoms in the universe, and modern superhuman neural networks (KataGo, Leela Zero) act as inscrutable black boxes that provide win percentages without actionable instruction. Beginners need opponents that scale naturally, make human-like mistakes, and explain why a move succeeds or fails.',
      solution:
        'Engineered an explainable Go engine that couples state-space heuristic evaluation with Monte Carlo search. The engine analyzes liberty counts, eye shapes, ladder sequences, and influence gradients, mapping tactical board states to human-readable explanations. Packaged within a desktop app featuring tutorials, Tsumego puzzles, and belt-based progression.',
      architectureDiagram: `┌────────────────────────────────────────────────────────┐
│          Electron / Vanilla HTML5 & Canvas UI          │
│     (Interactive Goban, Tsumego Puzzles, Tutorials)    │
└──────────────────────────┬─────────────────────────────┘
                           │ IPC / Child Process
┌──────────────────────────▼─────────────────────────────┐
│                    Node.js Layer                       │
│    (Process Orchestration, Session State, File I/O)    │
└──────────────────────────┬─────────────────────────────┘
                           │ Standard I/O / JSON Streams
┌──────────────────────────▼─────────────────────────────┐
│                  Python AI Engine                      │
│    (Heuristic Evaluator, Monte Carlo Search, Move Expl)│
└──────────────────────────┬─────────────────────────────┘
                           │
┌──────────────────────────▼─────────────────────────────┐
│               Game Logic / Search / Data               │
│      (Liberty Counting, Territory Scoring, SGF Tree)   │
└──────────────────────────┬─────────────────────────────┘
                           │ Local Persistence
┌──────────────────────────▼─────────────────────────────┐
│               SQLite / Supporting Data                 │
│      (Player Belt Ranks, Puzzles, Game Archives)       │
└────────────────────────────────────────────────────────┘`,
      architectureDescription:
        'The application separates concerns cleanly: the presentation layer in Electron uses HTML5 Canvas, CSS3, and Vanilla JavaScript to handle high-DPI board rendering, move animations, and audio. The Node.js desktop layer orchestrates engine child processes, manages user session files, and relays commands over structured JSON streams to the Python AI core. The Python engine executes heuristic evaluation, Monte Carlo search rollouts, and rule adjudication, persisting player stats and unlockables in an embedded SQLite database.',
      keyDecisions: [
        {
          title: 'Explainable Heuristics over Pure Neural Networks',
          description:
            'Rather than deploying heavy, uninterpretable deep neural weights, the AI engine uses modular heuristics (liberty pressure, stone connection, eye formation, corner dominance) that directly translate into clear tactical explanations for learners.'
        },
        {
          title: 'Local Child Process Architecture',
          description:
            'Communicating with the Python AI subprocess over standard I/O with JSON streaming enabled fast response times, zero cloud API costs, and full offline functionality on low-power devices like the Microsoft Surface Pro 8.'
        },
        {
          title: 'Belt-Based Gamified Progression',
          description:
            'Implemented a structured belt system from 40 kyu white belt to 9 dan black belt with zero microtransactions, creating a clear sense of mastery through sparring matches, tutorial completion, and Tsumego mastery.'
        }
      ],
      challenges: [
        {
          title: 'Real-time Natural Language Move Translation',
          description:
            'Converting complex geometric shapes, cutting points, and ladder conditions into concise, helpful sentences required creating a rule-based tactical vocabulary engine that prioritizes the most urgent board feature.'
        },
        {
          title: 'Performance on Lightweight Hardware',
          description:
            'Optimized the Monte Carlo search depth and bitboard-style liberty calculations to guarantee sub-second move generation on integrated laptop processors without draining battery.'
        }
      ],
      results: [
        'Successfully completed as a senior capstone project connecting theoretical game search with production software',
        'Custom explainable AI engine delivering real-time, human-readable move feedback and tactical coaching',
        'Incorporated 4 game modes, comprehensive Tsumego puzzle suite, and multi-resolution zoom controls'
      ]
    },
    section: 'featured',
    tags: ['Python', 'Electron', 'Node.js', 'SQLite', 'Applied AI', 'Algorithms', 'Desktop App']
  },
  {
    slug: 'goguesser',
    title: 'GoGuesser',
    shortDescription:
      'Shipped real-time multiplayer Go game guessing platform with live community vote broadcasting (100ms), automated 30-second SGF puzzle rotation, and AI vs. pro move evaluation.',
    longDescription: [
      'GoGuesser is a full-stack real-time web application built with Node.js, Express, and Tailwind CSS that tests players\' tactical intuition and positional judgment in Go. Players evaluate high-level match scenarios and compete by guessing the next move played, comparing their choices against both top artificial intelligence engines and professional master players.',
      'The platform automatically rotates through Smart Game Format (SGF) files every 30 seconds, presenting three candidate moves: Move A (top AI engine recommendation), Move B (human professional play), and Move C (a common mistake or suboptimal line). Community votes are aggregated and broadcast to clients every 100 milliseconds for fluid live updates, accompanied by a rate-limited real-time chat room displaying each user\'s Go rank. The interactive board is rendered using WGo.js, and the application includes session integration allowing it to be launched directly from companion desktop Go software.'
    ],
    highlights: [
      'Full-stack real-time application deployed on Render with Node.js, Express.js, and Tailwind CSS',
      'High-frequency (100ms) community vote synchronization across candidate moves',
      'Three-way move analysis contrasting top AI evaluations, professional human moves, and tactical blunders',
      'Automated 30-second SGF puzzle rotation parsing match trees into interactive WGo.js boards',
      'Integrated rate-limited chat system displaying player rank metadata and session authentication'
    ],
    description:
      'Shipped real-time multiplayer Go game guessing platform with live community vote broadcasting (100ms), automated 30-second SGF puzzle rotation, and AI vs. pro move evaluation.',
    projectUrl: 'https://goguesser.onrender.com/',
    demoUrl: 'https://goguesser.onrender.com/',
    githubUrl: 'https://github.com/axyl-casc/GoGuesser',
    caseStudy: {
      overview:
        'GoGuesser is a deployed, full-stack real-time web game that challenges Go players worldwide to predict the next move in real tournament positions, comparing their intuition against superhuman AI engines and human professionals.',
      problem:
        'Traditional Go study is solitary and passive. Players review game records without active prediction pressure or community interaction, making it hard to develop sharp positional judgment.',
      solution:
        'Built a fast-paced multiplayer platform where players vote in real time on 3 candidate moves under a 30-second countdown timer, seeing live consensus shifts and chatting with fellow players categorized by ranking.',
      keyDecisions: [
        {
          title: 'High-Frequency 100ms State Broadcasts',
          description:
            'Aggregated incoming client vote deltas on the server and broadcast updates in 100ms batches to deliver responsive UI animations without overwhelming socket throughput.'
        },
        {
          title: 'WGo.js Vector Board Integration',
          description:
            'Leveraged WGo.js for lightweight, sharp vector stone rendering with customized CSS theme integration to match the modern dark/light site aesthetic.'
        }
      ],
      results: [
        'Shipped and deployed to Render with live continuous rotation',
        'Built-in rate limiting, session-based authentication, and SGF tree parsing'
      ]
    },
    section: 'featured',
    tags: ['Node.js', 'Express.js', 'Tailwind CSS', 'WGo.js', 'Real-time Web', 'Full-Stack']
  },
  {
    slug: 'anscombes-quartet-research',
    title: "Anscombe's Quartet Research",
    shortDescription:
      "Exploratory data analysis project demonstrating the critical importance of dataset visualization before calculating statistical models. Replicates Anscombe's Quartet using NumPy vectorized matrix solves, SymPy symbolic math, and Matplotlib.",
    longDescription: [
      "Created an exploratory data analysis program in Python designed to demonstrate the critical importance of visualizing datasets prior to calculating statistical models. Anscombe's Quartet comprises four synthetic datasets that share virtually identical descriptive statistics—including mean, sample variance, linear correlation coefficient, and ordinary least-squares regression lines—yet reveal completely distinct structures when plotted.",
      "The project implements core statistical calculations using NumPy vector operations (including dot product variance formulas and least-squares matrix solves), as well as symbolic equation manipulation with SymPy and regex coefficient extraction. It demonstrates how outliers, non-linear curves, and high-leverage points can deceive purely numerical models. This research and data analysis was presented at Mount Royal University Research Days and the Alberta Mathematics Dialogue (AMD / PIMS event)."
    ],
    highlights: [
      'Vectorized calculation of mean, variance, and standard deviation using NumPy dot products',
      'Linear algebra matrix solver using np.linalg.solve to compute regression lines',
      'Symbolic mathematics and regex-based quadratic solver handling real and complex roots',
      'Presented at Mount Royal University Research Days and the Alberta Mathematics Dialogue (AMD / PIMS)',
      'Interactive Matplotlib data plots highlighting why visual inspection is essential in statistical workflows'
    ],
    description:
      "Created an exploratory data analysis program in Python demonstrating the critical importance of visual data analysis, presented at MRU Research Days and the Alberta Mathematics Dialogue.",
    projectUrl: 'https://github.com/axyl-casc/Anscombes_Research?tab=readme-ov-file#anscombes-quartet-research-project',
    githubUrl: 'https://github.com/axyl-casc/Anscombes_Research',
    pdfUrl: anscombesAssets.presentationPdf,
    caseStudy: {
      overview:
        "An applied mathematics and data science research project exploring numerical fragility in statistical regression. The project replicates and extends Anscombe's Quartet to prove that summary statistics can obscure radical structural differences.",
      problem:
        'Standard automated data pipelines frequently rely on summary metrics (mean, variance, R² values) to evaluate model quality. However, identical statistical summaries can conceal catastrophic non-linearities, clustering, and leverage outliers.',
      solution:
        'Developed a mathematical computation suite in Python utilizing NumPy matrix algebra, SymPy symbolic solvers, and Matplotlib visualization to compute identical descriptive profiles across radically diverging distributions, paired with visual diagnostic reports.',
      keyDecisions: [
        {
          title: 'NumPy Vectorized Matrix Solvers',
          description:
            'Implemented least-squares regression lines using np.linalg.solve rather than black-box libraries, ensuring numerical transparency and precision.'
        },
        {
          title: 'Conference Presentation & Dissemination',
          description:
            'Presented methodology and findings at both Mount Royal University Research Days and the Alberta Mathematics Dialogue (Pacific Institute for the Mathematical Sciences event).'
        }
      ],
      results: [
        'Presented at MRU Research Days and Alberta Mathematics Dialogue / PIMS',
        'Authored complete academic slide deck and open-source verification scripts'
      ]
    },
    section: 'featured',
    tags: ['Python', 'NumPy', 'SymPy', 'Matplotlib', 'Linear Algebra', 'Research']
  },
  {
    slug: 'defender-remake-atari-st',
    title: 'Defender Remake on Atari ST',
    shortDescription:
      'Recreation of the arcade classic Defender for Motorola 68000-based Atari ST hardware. Implements a 70 Hz Vertical Blank (VBL) interrupt service routine for tear-free double-buffered raster graphics, Yamaha YM2149 PSG sound synthesis, and custom IKBD interrupt handling.',
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
    description:
      'Recreated a classic arcade game using C and assembly, leveraging efficient memory management, hardware interrupts, and custom audio drivers on limited 16-bit hardware.',
    projectUrl: 'https://github.com/axyl-casc/DefenderRemake/tree/main?tab=readme-ov-file#atari-st-game---defender',
    githubUrl: 'https://github.com/axyl-casc/DefenderRemake/tree/main?tab=readme-ov-file#atari-st-game---defender',
    videoUrl: defenderAssets.videoUrl,
    thumbnail: defenderAssets.gameplay,
    gallery: defenderAssets.gallery,
    caseStudy: {
      overview:
        'A bare-metal retro recreation of the arcade classic Defender written in C and Motorola 68000 assembly for the Atari ST, targeting 70 Hz cycle-synchronized raster graphics and direct chip-level sound synthesis.',
      problem:
        'The Atari ST features an 8 MHz Motorola 68000 processor with no hardware sprite scaling or hardware scrolling registers. Rendering multiple concurrent high-speed alien entities, player projectiles, animated terrain, and radar displays without frame drops or screen tearing requires strict microsecond cycle budgeting.',
      solution:
        'Engineered a double-buffered graphics pipeline locked to the 70 Hz Vertical Blank (VBL) interrupt. Replaced OS polling with custom interrupt service routines (ISRs) for asynchronous keyboard and mouse handling (IKBD) and direct register writes to the Yamaha YM2149 PSG sound generator.',
      architectureDiagram: `┌────────────────────────────────────────────────────────┐
│             Motorola 68000 CPU (8 MHz)                 │
│         Game Loop / Physics / Alien State Machine      │
└──────────────┬───────────────────────────┬─────────────┘
               │                           │
  70 Hz Sync   │                           │ Vector Jump
┌──────────────▼─────────────┐   ┌─────────▼─────────────┐
│    VBL Interrupt (ISR)     │   │   IKBD Interrupt (ISR)│
│  Page Flip & Raster Render │   │  Async Scan Codes / Mse│
└──────────────┬─────────────┘   └───────────────────────┘
               │
┌──────────────▼─────────────────────────────────────────┐
│        Hardware Double Buffer (320x200 4-Plane)        │
│   Fast word-aligned bitplane blitting & dirty redraws  │
└──────────────────────────────┬─────────────────────────┘
                               │ Direct Register Writes
┌──────────────────────────────▼─────────────────────────┐
│        Yamaha YM2149 Programmable Sound Generator      │
│     Channel A/B/C square wave & noise pulse synthesis  │
└────────────────────────────────────────────────────────┘`,
      architectureDescription:
        'The architecture bypasses standard operating system overhead. The main game loop updates physics state, collision detection matrices, and alien state machines. Every 1/70th of a second, the hardware triggers the Vertical Blank interrupt, safely swapping frame buffer base addresses to eliminate tearing. Asynchronous inputs are decoded directly via the 6850 ACIA chip servicing IKBD interrupts.',
      keyDecisions: [
        {
          title: 'Cycle-Accurate 70 FPS VBL Synchronization',
          description:
            'Locked the frame presentation to the Atari ST monochrome/color monitor refresh cycle, eliminating tearing and ensuring constant gameplay speed regardless of entity count.'
        },
        {
          title: 'Direct Hardware Register Sound Synthesis',
          description:
            'Programmed the Yamaha YM2149 sound chip directly through 14 hardware registers to synthesize explosions, laser pulses, and engine hums with zero memory allocation.'
        },
        {
          title: 'Word-Aligned Bitplane Blitting & Dirty Clearing',
          description:
            'Used optimized 16-bit word blits and cleared only previously rendered sprite coordinates rather than wiping the full 32KB buffer each frame.'
        }
      ],
      challenges: [
        {
          title: 'CPU Budget Overruns with Multiple Active Aliens',
          description:
            'When 10+ alien landers, mutants, and projectiles were active, naive bounding-box checks caused frame drops. Solved by implementing spatial grid partitioning and dirty rect tracking.'
        },
        {
          title: 'Asynchronous IKBD Packet Desynchronization',
          description:
            'The Atari keyboard sends variable-length mouse and keyboard packets. Handled through an interrupt state machine that decodes raw packet headers without blocking the CPU.'
        }
      ],
      results: [
        'Solid 70 FPS double-buffered arcade gameplay running on authentic hardware / Steem emulator',
        'Complete sound effects suite generated on the Yamaha YM2149 chip',
        'Demonstrated mastery of low-level systems programming, ISRs, and hardware constraints'
      ]
    },
    section: 'featured',
    tags: ['C / C++', '68000 Assembly', 'Systems Programming', 'Hardware ISRs', 'Concurrency']
  },
  {
    slug: 'infinite-mind-games-wiki-docs',
    title: 'Infinite Mind Games – Wiki Docs',
    shortDescription:
      'An interactive documentation site built with Quartz 4, TypeScript, and React, featuring guides, learning modules, and development notes for Infinite Mind Games projects.',
    longDescription: [
      'Developed an interactive digital garden and internal documentation platform for Infinite Mind Pictures using Quartz 4, TypeScript, and React. Built to streamline cross-functional collaboration, the wiki provides structured onboarding guides, game design documents, educational modules, and engineering roadmaps for developers, educators, and community partners.',
      'As a Web Development Intern at Infinite Mind Pictures, I helped lead development with an emphasis on accessibility and neurodivergent-friendly UI/UX design. The platform incorporates automated image optimization via Python (Pillow) scripts, interactive backlinks and local graph visualizations, fast full-text client-side search, and seamless continuous deployment to GitHub Pages.'
    ],
    highlights: [
      'Centralized knowledge base built on Quartz 4 with markdown notes, wiki-links, and interactive graph views',
      'Automated image compression pipeline using Python and Pillow integrated into build scripts',
      'Neurodivergent-friendly, high-contrast accessible layouts designed for clear information hierarchy',
      'Curriculum documentation supporting game design assets and community coding resources'
    ],
    description:
      'An interactive documentation site built with Quartz, featuring guides, learning modules, and development notes for Infinite Mind Games projects.',
    projectUrl: 'https://infinite-mind-pictures-inc.github.io/Infinite-Mind-Wiki/',
    demoUrl: 'https://infinite-mind-pictures-inc.github.io/Infinite-Mind-Wiki/',
    section: 'other',
    tags: ['Quartz 4', 'React', 'TypeScript', 'Documentation', 'Accessibility', 'UI/UX', 'Python']
  },
  {
    slug: 'fancy-pants-outfitters-react-demo',
    title: 'Fancy Pants Outfitters (React Demo)',
    shortDescription:
      'A polished React storefront demo featuring curated fashion collections, interactive cart management, and Plotly sales analytics.',
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
    description:
      'A polished React storefront demo featuring curated fashion for trendsetters, workweek looks, and night-out fits.',
    projectUrl: 'https://acare3.github.io/4513_2_website/',
    demoUrl: 'https://acare3.github.io/4513_2_website/',
    section: 'other',
    tags: ['React', 'Frontend', 'TypeScript', 'Tailwind CSS', 'Plotly.js', 'E-commerce']
  },
  {
    slug: 'linux-shell-development',
    title: 'Linux Shell Development',
    shortDescription:
      'A custom Linux command-line shell built in C featuring process management, I/O redirection, piping, and signal handling.',
    longDescription: [
      'Built as a comprehensive systems programming project for COMP 3659 (Operating Systems), this project implements a custom POSIX-compliant Linux shell in C. The shell provides an interactive command-line interface that mirrors core functionality of shells like Bash, managing process hierarchies and system resources through low-level Linux system calls.',
      'The implementation parses complex command strings into abstract execution trees, supporting tokenized arguments, path resolution, and execution via fork() and execvp(). The shell implements multi-stage inter-process communication pipelines (cmd1 | cmd2 | cmd3) using Linux pipes and file descriptor duplication (dup2()), handles input/output redirection (<, >, >>), tracks background jobs running with &, and manages OS signals like SIGINT (Ctrl+C) and SIGTSTP to protect parent shell stability.'
    ],
    highlights: [
      'Process lifecycle management implementing fork(), execvp(), waitpid(), and background job tracking',
      'Inter-process communication (IPC) supporting multi-command pipelining via pipe() and dup2()',
      'Robust I/O redirection for standard input, output, and append modes (<, >, >>)',
      'Asynchronous signal handling for SIGINT, SIGTSTP, and SIGCHLD to prevent zombie processes',
      'Built-in shell command implementations including cd, history, help, and exit'
    ],
    description:
      'Built a custom shell in C, handling concurrent commands and inter-process communication for a streamlined command-line experience.',
    projectUrl: 'https://github.com/axyl-casc/linux-shell?tab=readme-ov-file#linux-shell',
    githubUrl: 'https://github.com/axyl-casc/linux-shell',
    section: 'other',
    tags: ['C / C++', 'Systems Programming', 'Linux', 'Concurrency', 'IPC']
  },
  {
    slug: 'cpu-scheduler',
    title: 'CPU Scheduler (Scheduler Designer)',
    shortDescription:
      'An interactive OS CPU scheduling visualizer featuring dynamic CPU state diagrams, Gantt charts, and statistical performance comparisons.',
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
    demoUrl: 'https://axyl-casc.github.io/Scheduler-Designer/',
    section: 'other',
    tags: ['Algorithms', 'Visualization', 'JavaScript', 'Operating Systems', 'Tailwind CSS']
  },
  {
    slug: 'assembly-board-game',
    title: 'Compiled (Android Strategy Game)',
    shortDescription:
      'A tactical strategy board game for Android where players manipulate CPU registers in a shared cyclic loop, evaluate status flags, and pursue secret objectives. Engineered with React Native and TypeScript.',
    longDescription: [
      'Compiled is an original strategy board game and native mobile application engineered for Android using React Native and TypeScript. The game translates fundamental low-level computer architecture—including 4-bit registers, cyclic instruction queues, status flags, and arithmetic overflow—into an accessible, highly competitive tabletop experience.',
      'Players stage instruction cards into a shared circular program loop (configured with 8, 12, or 16 memory slots) and step a shared 4-bit CPU through execution. The machine features four shared registers (R0 through R3) and four hardware status flags (Z: Zero, N: Negative, C: Carry, and V: Overflow). Because all players manipulate the exact same machine state, every staged instruction has immediate consequences: a command placed to advance your own agenda might inadvertently hand an opponent their victory condition or trigger arithmetic wraparound that derails the table.',
      'The application provides two core gameplay modes: singleplayer against calibrated CPU rivals (1 to 3 opponents with adjustable difficulty) and same-device pass-and-play multiplayer for 2 to 4 local players. A comprehensive 20-lesson interactive tutorial curriculum introduces players to number bases, two\'s complement, register moves, branching, and overflow traps. Built with a privacy-first architecture, Compiled features 100% offline local gameplay with zero ads, analytics trackers, or cloud accounts.'
    ],
    highlights: [
      'Native Android strategy game built with React Native and TypeScript, featuring high-DPI rendering and tactile haptic feedback',
      'Shared cyclic memory architecture (8, 12, or 16 slots) driving a deterministic virtual 4-bit CPU model',
      'Four shared general-purpose registers (R0–R3) and 4 status flags (Z: Zero, N: Negative, C: Carry, V: Overflow)',
      '31 executable instruction cards across 3 unlockable tiers: Basic (9), Intermediate (19), and Advanced (31)',
      'Dual play modes: Adaptive singleplayer against 1–3 CPU AI rivals and same-device Pass-and-Play local multiplayer (2–4 players)',
      'Interactive 20-lesson instructional curriculum teaching binary math, two\'s complement arithmetic, branch jumps, and sabotage',
      'Private objective engine requiring dual simultaneous condition checks at turn completion to secure victory',
      'Privacy-first engineering: 100% local device state persistence with zero ads, analytics SDKs, or cloud accounts'
    ],
    description:
      'A tactical strategy board game for Android where players manipulate CPU registers in a shared cyclic loop, evaluate status flags, and pursue secret objectives. Engineered with React Native and TypeScript.',
    projectUrl: 'https://axyl-casc.github.io/CompiledWebsite/',
    demoUrl: 'https://axyl-casc.github.io/CompiledWebsite/',
    demoLabel: 'Project Website ↗',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.compiled.game',
    thumbnail: compiledAssets.playTab2,
    gallery: compiledAssets.gallery,
    caseStudy: {
      overview:
        'Compiled is a mobile strategy game developed for Android that reimagines low-level assembly programming as a competitive tabletop board game. Players share a single cyclic memory buffer and four 4-bit registers, staging cards to trigger arithmetic, bitwise shifts, and conditional jumps while racing to fulfill secret objectives.',
      problem:
        'Most educational programming games either present dry syntactic quizzes or overwhelm players with complex sandbox environments that feel like work. The challenge was to isolate the genuine thrill of systems programming—the joy of clever bitwise tricks, the surprise of arithmetic overflow, and the puzzle of instruction ordering—and package it into a fast-paced, accessible mobile game that non-programmers and computer scientists alike can enjoy.',
      solution:
        'Designed a shared-state game loop where the "board" is an 8, 12, or 16-slot circular instruction queue and the "game pieces" are four 4-bit registers (R0–R3) with status flags (Z, N, C, V). Players take turns staging an instruction card into an open slot or overwriting existing code, then run the CPU. Because registers and memory are shared, every turn introduces emergent sabotage, tactical misdirection, and tense arithmetic calculations.',
      architectureDiagram: `┌────────────────────────────────────────────────────────┐
│               React Native Mobile UI                   │
│   (Program Board, Command Deck, Carousel, Dialogs)     │
└──────────────────────────┬─────────────────────────────┘
                           │ State Dispatch / Actions
┌──────────────────────────▼─────────────────────────────┐
│             Game Turn & Match Orchestrator             │
│    (Stage -> Review -> Advance -> Execute -> Check)    │
└──────────────────────────┬─────────────────────────────┘
                           │ Instruction Stream
┌──────────────────────────▼─────────────────────────────┐
│               Virtual 4-Bit CPU Engine                 │
│  ┌───────────────────┐  ┌─────────────┐  ┌───────────┐ │
│  │ ALU (Add/Sub/Bit) │  │ Registers   │  │ Flags     │ │
│  │ Signed & Unsigned │  │ (R0, R1,    │  │ (Z, N,    │ │
│  │ 2's Complement    │  │  R2, R3)    │  │  C, V)    │ │
│  └───────────────────┘  └─────────────┘  └───────────┘ │
│  ┌───────────────────────────────────────────────────┐ │
│  │ Cyclic Memory Loop (8 / 12 / 16 Slots, 5 BRA Max) │ │
│  └───────────────────────────────────────────────────┘ │
└──────────────────────────┬─────────────────────────────┘
                           │ State Queries & Evaluation
┌──────────────────────────▼─────────────────────────────┐
│          Heuristic CPU Rival & AI Engine               │
│  (Goal Evaluation, Sabotage Heuristics, Difficulty)    │
└──────────────────────────┬─────────────────────────────┘
                           │ Local Device Storage
┌──────────────────────────▼─────────────────────────────┐
│         AsyncStorage / Local Game State                │
│    (Curriculum Progress, Unlocked Tiers, Settings)     │
└────────────────────────────────────────────────────────┘`,
      architectureDescription:
        'The application uses a unidirectional data flow architecture optimized for 60 FPS mobile rendering. The Virtual CPU Engine implements strict 4-bit two\'s complement arithmetic and flag updates (Zero, Negative, Carry, Overflow), isolating core computer science logic from presentation. The Game Turn Orchestrator manages the 5-phase turn sequence (Stage, Review, Advance, Execute, Check), while the AI engine evaluates candidate card placements by simulating forward register outcomes against secret objective probability matrices.',
      keyDecisions: [
        {
          title: 'Shared-Register Zero-Sum Architecture',
          description:
            'Rather than giving each player an isolated board, all players manipulate the identical 4-bit register bank (R0–R3). This creates high-stakes tactical friction where any optimization for player A directly impacts player B\'s board state.'
        },
        {
          title: 'Cyclic Memory Loop with 5-Instruction Branch Bounds',
          description:
            'To prevent infinite execution loops while preserving the tactical power of branching (BRA -3 to +3), the execution engine limits consecutive branch chains to 5 instructions before advancing the Program Counter.'
        },
        {
          title: 'Strict 4-Bit Limits & Two\'s Complement Overflow',
          description:
            'Restricting values to 4 bits (-8 to +7 signed, 0 to 15 unsigned) makes mental math instant while producing frequent, dramatic arithmetic overflows that turn innocuous moves into game-changing surprises.'
        },
        {
          title: 'Zero-Telemetry, 100% Offline Architecture',
          description:
            'In strict adherence to digital minimalism and user privacy, the app contains zero ads, third-party analytics SDKs, or cloud accounts. All match states and tutorial progress are persisted strictly on-device.'
        }
      ],
      challenges: [
        {
          title: 'Accurate Flag Modeling (Carry vs. Overflow)',
          description:
            'Designing a clear distinction between unsigned carry (C) and signed two\'s complement overflow (V) required rigorous test suites to ensure that instructions like ADD #1 vs ADDU #1 set flags identically to real hardware architectures.'
        },
        {
          title: 'Balancing Heuristic AI Rivals under Imperfect Information',
          description:
            'Because players keep their victory objectives secret, CPU rivals evaluate moves using probabilistic heuristics—balancing progress toward their own objectives against disruptive sabotage of suspicious opponent moves.'
        },
        {
          title: 'Mobile-Optimized Cyclic Program Board UX',
          description:
            'Visualizing a cyclic memory track, 4 registers with binary/hex representations, and card hands on compact mobile displays required a responsive layout with smooth sliding transitions.'
        }
      ],
      results: [
        'Successfully launched into closed testing on Google Play (com.compiled.game) for Android',
        'Engineered full 31-instruction card suite spanning Basic, Intermediate, and Advanced tiers',
        'Built interactive 20-lesson curriculum and full same-device pass-and-play multiplayer',
        'Official companion project website live at axyl-casc.github.io/CompiledWebsite'
      ]
    },
    section: 'other',
    tags: ['Android', 'React Native', 'TypeScript', 'Assembly', 'Mobile App', 'Game Development', 'Education']
  },
  {
    slug: 'airplane-package-scheduler',
    title: 'Airplane Package Scheduler (TEMOO Cargo)',
    shortDescription:
      'TEMOO Cargo: A logistics route optimization simulator implemented in JavaScript and Haskell solving multi-constraint cargo scheduling.',
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
    githubUrl: 'https://github.com/axyl-casc/AirplaneGraphProject',
    section: 'other',
    tags: ['JavaScript', 'Haskell', 'Graph Algorithms', 'Optimization', 'Node.js']
  },
  {
    slug: 'daily-training-game',
    title: 'Daily Training Game',
    shortDescription:
      'A gamified daily habit tracker and training planner featuring rotating 7-day schedules, streak tracking, and a 3-day perspective.',
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
    demoUrl: 'https://axyl-casc.github.io/TrainingGame/',
    section: 'other',
    tags: ['Productivity', 'Habit Tracking', 'JavaScript', 'Tailwind CSS', 'Web App']
  },
  {
    slug: 'dice-simulator',
    title: 'Dice Simulator',
    shortDescription:
      'An interactive probability distribution calculator and dice simulation suite powered by Plotly.js.',
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
    demoUrl: 'https://axyl-casc.github.io/Dice-Simulator/',
    section: 'other',
    tags: ['Probability', 'Simulation', 'Visualization', 'Plotly.js', 'JavaScript']
  },
  {
    slug: 'axyl-casc-portfolio-website',
    title: 'axyl-casc.github.io (Portfolio Website)',
    shortDescription:
      'The open-source repository for this personal developer portfolio built with React 18, TypeScript, Tailwind CSS, and DaisyUI.',
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
    githubUrl: 'https://github.com/axyl-casc/portfolio_code',
    section: 'other',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Portfolio']
  },
  {
    slug: 'go-library',
    title: 'Go Library',
    shortDescription:
      'An offline-first desktop bookshelf for Go literature and game records built with React, Node.js, Express, and SQLite.',
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
    githubUrl: 'https://github.com/axyl-casc/GoLibrary',
    section: 'other',
    tags: ['Node.js', 'React', 'SQLite', 'Offline-first', 'Desktop App', 'Express.js']
  }
];
