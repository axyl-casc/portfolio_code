import { useState, type CSSProperties } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../projects";
import { experienceItems } from "../experience";
import { educationItems } from "../education";
import { getTagHue } from "../utils/tagColors";
import { tagPath } from "../utils/tags";
import resumeUrl from "../assets/Axyl - Resume.pdf?url";

const profilePictures = Object.values(
  import.meta.glob("../assets/images/pfp/*.{jpg,jpeg,JPG,JPEG,png,PNG}", {
    eager: true,
    import: "default",
    query: "?url"
  })
) as string[];

export function HomePage() {
  const [profilePicture] = useState(() => {
    if (profilePictures.length === 0) return "";
    const randomIndex = Math.floor(Math.random() * profilePictures.length);
    return profilePictures[randomIndex];
  });
  const [isProfileLoaded, setIsProfileLoaded] = useState(false);

  // Filter 4 featured projects
  const featuredProjects = projects.filter((p) => p.section === "featured");
  const flagshipProject = featuredProjects.find((p) => p.slug === "beginner-go-ai-game");
  const otherFeatured = featuredProjects.filter((p) => p.slug !== "beginner-go-ai-game");

  // Filter education: Mount Royal University only
  const mruEducation = educationItems.filter((item) =>
    item.title.toLowerCase().includes("bachelor") || item.meta.toLowerCase().includes("mount royal")
  );

  // Filter experience: professional & technical roles only
  const professionalExperience = experienceItems.filter(
    (item) => !item.title.toLowerCase().includes("referee")
  );

  return (
    <main id="main-content" className="site-main space-y-16 py-4" tabIndex={-1}>
      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden rounded-3xl border border-base-content/10 bg-base-100/90 p-8 sm:p-12 shadow-xl backdrop-blur-xl">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          <div className="space-y-6 max-w-2xl">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Software Developer · Calgary, Alberta
            </div>

            {/* Main heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-base-content">
                Axyl Carefoot-Schulz
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-primary">
                Software Developer
              </p>
            </div>

            {/* Grounded pitch */}
            <p className="text-base sm:text-lg text-base-content/85 leading-relaxed">
              I build full-stack applications, developer tools, interactive software, and applied AI systems.
              Computer Science graduate from Mount Royal University with a Mathematics cognate.
            </p>

            {/* Quick Core Tech Strip */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-bold uppercase tracking-wider text-base-content/60">
                Core Stack
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "TypeScript",
                  "JavaScript",
                  "React",
                  "Tailwind CSS",
                  "Node.js",
                  "Express.js",
                  "Python",
                  "C / C++",
                  "SQL",
                  "Linux"
                ].map((tech) => (
                  <a
                    key={tech}
                    href={tagPath(tech)}
                    className="tag-badge"
                    style={{ "--tag-hue": getTagHue(tech) } as CSSProperties}
                  >
                    {tech}
                  </a>
                ))}
              </div>
            </div>

            {/* Strong CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                className="btn btn-primary rounded-full px-6 shadow-md hover:shadow-lg transition-all"
              >
                View Projects ↓
              </a>
              <a
                href="https://github.com/axyl-casc"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline rounded-full px-6 font-medium hover:bg-base-200"
              >
                GitHub ↗
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost rounded-full px-6 font-semibold text-primary hover:bg-primary/10 border border-primary/30"
              >
                Résumé (PDF) ↗
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          {profilePicture && (
            <div className="flex justify-center lg:justify-end shrink-0">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary to-accent opacity-40 blur-lg transition duration-500 group-hover:opacity-75" />
                <img
                  src={profilePicture}
                  alt="Axyl Carefoot-Schulz"
                  className={`relative h-40 w-40 sm:h-48 sm:w-48 rounded-full object-cover border-4 border-base-100 shadow-2xl transition-all duration-500 ${
                    isProfileLoaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-95"
                  }`}
                  loading="lazy"
                  decoding="async"
                  onLoad={() => setIsProfileLoaded(true)}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─── FEATURED PROJECTS (CENTERPIECE) ─── */}
      <section id="projects" className="space-y-8 scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-base-content/10 pb-4">
          <div>
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-1">
              Shipped &amp; Engineered
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-base-content">
              Featured Projects
            </h2>
            <p className="mt-1 text-base text-base-content/75 max-w-2xl leading-relaxed">
              Flagship software across applied AI, real-time web applications, mathematical computing, and low-level systems.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/other_projects"
              className="btn btn-outline btn-sm rounded-full font-medium"
            >
              All Projects (14+) →
            </a>
          </div>
        </div>

        {/* Flagship Highlight (Companion Baduk) */}
        {flagshipProject && (
          <div className="mb-8">
            <ProjectCard project={flagshipProject} isFlagship />
          </div>
        )}

        {/* Other 3 Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherFeatured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* Explore More Callout */}
        <div className="p-6 rounded-2xl bg-base-200/60 border border-base-content/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-base text-base-content">Want to explore all 14+ software projects?</h3>
            <p className="text-sm text-base-content/75 mt-0.5">
              Includes CPU scheduling visualizers, custom Unix shells, offline bookshelf tools, and optimization simulators.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a href="/other_projects" className="btn btn-primary btn-sm rounded-full w-full sm:w-auto text-center justify-center">
              Explore All Projects →
            </a>
            <a href="/tech-stack" className="btn btn-outline btn-sm rounded-full w-full sm:w-auto text-center justify-center">
              Interactive Tech Stacks ↗
            </a>
          </div>
        </div>
      </section>

      {/* ─── CURRENTLY BUILDING ─── */}
      <section data-reveal className="space-y-6">
        <div className="border-b border-base-content/10 pb-3">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-accent mb-1">
            Active Development
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-base-content">
            Currently Building
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="content-card p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-base-content">Compiled</h3>
                <span className="badge badge-accent badge-sm font-semibold text-slate-950 whitespace-nowrap py-2.5 px-3 h-auto leading-tight shrink-0">In Progress</span>
              </div>
              <p className="text-sm text-base-content/85 leading-relaxed">
                A programming-inspired strategy board game where players move through executable commands, manipulate shared CPU registers, and evaluate condition flags while pursuing hidden objectives. Work-in-progress Android application built with React Native.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["TypeScript", "React Native", "Android", "Assembly Mechanics", "Game Design"].map((t) => (
                  <span key={t} className="tag-badge" style={{ "--tag-hue": getTagHue(t) } as CSSProperties}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-3 border-t border-base-content/10 flex flex-wrap items-center gap-3">
              <a
                href="https://axyl-casc.github.io/CompiledWebsite/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm rounded-full"
              >
                Project Website ↗
              </a>
              <a
                href="https://axyl-casc.github.io/AsmBoardgame"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-sm rounded-full"
              >
                Play Web Prototype ↗
              </a>
            </div>
          </div>

          <div className="content-card p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-base-content">Companion Baduk Engine v2</h3>
                <span className="badge badge-primary badge-sm font-semibold whitespace-nowrap py-2.5 px-3 h-auto leading-tight shrink-0">Engine Tuning</span>
              </div>
              <p className="text-sm text-base-content/85 leading-relaxed">
                Refining move explanation heuristics, optimizing Monte Carlo tree depth on integrated CPUs, and packaging a cross-platform desktop installer with automated CI/CD releases.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Python", "Electron", "Monte Carlo Search", "Explainable AI", "Desktop Packaging"].map((t) => (
                  <span key={t} className="tag-badge" style={{ "--tag-hue": getTagHue(t) } as CSSProperties}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-3 border-t border-base-content/10 flex items-center gap-3">
              <a
                href="/projects/beginner-go-ai-game"
                className="btn btn-outline btn-sm rounded-full"
              >
                Read More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── APPLIED AI & INTELLIGENT SYSTEMS ─── */}
      <section id="applied-ai" data-reveal className="space-y-6 scroll-mt-24">
        <div className="border-b border-base-content/10 pb-3">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-1">
            Applied AI &amp; Intelligence
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-base-content">
            Applied AI Systems
          </h2>
          <p className="mt-1 text-base text-base-content/75 max-w-3xl leading-relaxed">
            I focus on building transparent, explainable AI software and algorithmic systems rather than treating AI as an opaque black box.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <div className="content-card p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                🔍
              </div>
              <h3 className="text-lg font-bold text-base-content">Explainable AI (XAI)</h3>
              <p className="text-sm text-base-content/85 leading-relaxed">
                Designed a custom Go AI engine that translates complex board topology, cutting points, and liberty counts into human-readable instructional sentences. Avoids opaque neural network outputs in favor of actionable feedback.
              </p>
            </div>
            <div className="text-xs text-primary font-semibold pt-3 border-t border-base-content/10">
              Showcase: Companion Baduk
            </div>
          </div>

          <div className="content-card p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center font-bold text-lg">
                🌲
              </div>
              <h3 className="text-lg font-bold text-base-content">Search &amp; Heuristic Evaluation</h3>
              <p className="text-sm text-base-content/85 leading-relaxed">
                Experience implementing Monte Carlo tree search, heuristic state-space pruning, combinatorial constraint solvers, and linear algebra regression models (NumPy / SymPy) across games and data science.
              </p>
            </div>
            <div className="text-xs text-secondary font-semibold pt-3 border-t border-base-content/10">
              Showcase: Monte Carlo Rollouts &amp; Anscombe
            </div>
          </div>

          <div className="content-card p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center font-bold text-lg">
                ⚡
              </div>
              <h3 className="text-lg font-bold text-base-content">LLM APIs &amp; Developer Tooling</h3>
              <p className="text-sm text-base-content/85 leading-relaxed">
                Building workflows with Claude, OpenAI, and Gemini APIs, structured schema outputs, and prompt architectures. Daily power-user leveraging modern AI assistants (Gemini, Antigravity, Claude, Codex) for accelerated code delivery and automated testing.
              </p>
            </div>
            <div className="text-xs text-accent font-semibold pt-3 border-t border-base-content/10">
              Showcase: Agentic Workflows &amp; Tool Integration
            </div>
          </div>
        </div>
      </section>

      {/* ─── TECHNICAL SKILLS (STREAMLINED HIERARCHY) ─── */}
      <section id="skills" data-reveal className="space-y-6 scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-base-content/10 pb-3">
          <div>
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-1">
              Proficiencies &amp; Tooling
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-base-content">
              Technical Skills
            </h2>
            <p className="mt-1 text-base text-base-content/75 max-w-2xl leading-relaxed">
              Structured into core production strengths, supporting application frameworks, and additional language experience.
            </p>
          </div>
          <a
            href="/tech-stack"
            className="btn btn-outline btn-primary btn-sm rounded-full self-start sm:self-auto shrink-0"
          >
            Interactive Tech Stacks (Ratings) →
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Core Technologies */}
          <div className="content-card p-6 space-y-3 border-primary/30">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-primary">Core Technologies</h3>
              <span className="badge badge-primary badge-xs">Daily Stack</span>
            </div>
            <p className="text-xs text-base-content/75">
              The languages and platforms I build with most frequently and fluently:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["TypeScript", "JavaScript", "Python", "C / C++", "SQL", "React", "Node.js"].map((t) => (
                <a
                  key={t}
                  href={tagPath(t)}
                  className="tag-badge"
                  style={{ "--tag-hue": getTagHue(t) } as CSSProperties}
                >
                  {t}
                </a>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="content-card p-6 space-y-3">
            <h3 className="text-base font-bold text-base-content">Frontend Development</h3>
            <p className="text-xs text-base-content/75">
              Accessible user interfaces, single-page architectures, and responsive styling:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["React 18", "Tailwind CSS", "HTML5 / CSS3", "TSX", "DaisyUI", "Plotly.js", "WGo.js"].map((t) => (
                <a
                  key={t}
                  href={tagPath(t)}
                  className="tag-badge"
                  style={{ "--tag-hue": getTagHue(t) } as CSSProperties}
                >
                  {t}
                </a>
              ))}
            </div>
          </div>

          {/* Backend & APIs */}
          <div className="content-card p-6 space-y-3">
            <h3 className="text-base font-bold text-base-content">Backend &amp; Runtimes</h3>
            <p className="text-xs text-base-content/75">
              Application servers, API design, IPC, and real-time synchronization:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Node.js", "Express.js", "Flask", "REST APIs", "IPC", "WebSockets", "Async I/O"].map((t) => (
                <a
                  key={t}
                  href={tagPath(t)}
                  className="tag-badge"
                  style={{ "--tag-hue": getTagHue(t) } as CSSProperties}
                >
                  {t}
                </a>
              ))}
            </div>
          </div>

          {/* Data & Storage */}
          <div className="content-card p-6 space-y-3">
            <h3 className="text-base font-bold text-base-content">Data &amp; Storage</h3>
            <p className="text-xs text-base-content/75">
              Relational schemas, query optimization, local storage, and mathematical data:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["SQLite", "MySQL", "Supabase", "NumPy", "SymPy", "Matplotlib", "Relational Modeling"].map((t) => (
                <a
                  key={t}
                  href={tagPath(t)}
                  className="tag-badge"
                  style={{ "--tag-hue": getTagHue(t) } as CSSProperties}
                >
                  {t}
                </a>
              ))}
            </div>
          </div>

          {/* Tools & Infrastructure */}
          <div className="content-card p-6 space-y-3">
            <h3 className="text-base font-bold text-base-content">Tools &amp; DevOps</h3>
            <p className="text-xs text-base-content/75">
              Build workflows, CI/CD automation, version hygiene, and environments:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Git", "GitHub Actions", "Linux / POSIX", "CI/CD", "Vite", "VS Code", "Shell Scripting"].map((t) => (
                <a
                  key={t}
                  href={tagPath(t)}
                  className="tag-badge"
                  style={{ "--tag-hue": getTagHue(t) } as CSSProperties}
                >
                  {t}
                </a>
              ))}
            </div>
          </div>

          {/* Additional Experience */}
          <div className="content-card p-6 space-y-3">
            <h3 className="text-base font-bold text-base-content">Additional Languages &amp; Systems</h3>
            <p className="text-xs text-base-content/75">
              Academic and domain-specific languages and low-level architectures:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Java", "C#", "68000 Assembly", "Haskell", "PHP", "R", "Prolog", "Visual Basic"].map((t) => (
                <a
                  key={t}
                  href={tagPath(t)}
                  className="tag-badge"
                  style={{ "--tag-hue": getTagHue(t) } as CSSProperties}
                >
                  {t}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WORK EXPERIENCE (CONDENSED 3-5 BULLETS) ─── */}
      <section id="experience" data-reveal className="space-y-6 scroll-mt-24">
        <div className="border-b border-base-content/10 pb-3">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-1">
            Career Background
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-base-content">
            Work Experience
          </h2>
          <p className="mt-1 text-base text-base-content/75 max-w-2xl leading-relaxed">
            Professional engineering, technical education, and systems troubleshooting experience.
          </p>
        </div>

        <div className="space-y-6">
          {professionalExperience.map((item) => (
            <div key={item.title} className="content-card p-6 sm:p-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-xl font-bold text-base-content">{item.title}</h3>
                <span className="text-xs font-semibold text-primary">{item.meta}</span>
              </div>

              <ul className="space-y-2.5 text-sm text-base-content/85 leading-relaxed">
                {item.title.includes("Infinite Mind") ? (
                  <>
                    <li>• Built and maintained an internal documentation and knowledge platform using Quartz 4, React, TypeScript, and Markdown to streamline cross-functional onboarding and developer collaboration.</li>
                    <li>• Developed an accessibility-focused resource portal supporting neurodivergent users and partners with high-contrast, clear information hierarchy and inclusive UI patterns.</li>
                    <li>• Designed and delivered interactive Java programming curriculum for children using Robocode, teaching object-oriented fundamentals and logic through game-based exercises.</li>
                    <li>• Engineered automated Python (Pillow) image optimization scripts integrated into build pipelines and managed continuous deployment workflows to GitHub Pages.</li>
                    <li>• Collaborated closely with technical developers, educators, and leadership to rapidly incorporate feedback and improve usability.</li>
                  </>
                ) : item.title.includes("Tutor") ? (
                  <>
                    <li>• Taught core programming fundamentals and computational thinking in Python, SQL, and Java to students from beginner to intermediate levels.</li>
                    <li>• Designed personalized coding exercises, debugging challenges, and structured lesson plans emphasizing practical software engineering habits.</li>
                    <li>• Guided students through hands-on project implementations, logical reasoning, and algorithm troubleshooting to build technical confidence and independence.</li>
                    <li>• Translated abstract computer science topics into clear, interactive, and approachable demonstrations.</li>
                  </>
                ) : (
                  item.details.slice(0, 3).map((detail) => (
                    <li key={detail}>• {detail}</li>
                  ))
                )}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-base-content/10">
                {item.tags.map((tag) => (
                  <a
                    key={tag}
                    href={tagPath(tag)}
                    className="tag-badge"
                    style={{ "--tag-hue": getTagHue(tag) } as CSSProperties}
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── EDUCATION ─── */}
      <section id="education" data-reveal className="space-y-6 scroll-mt-24">
        <div className="border-b border-base-content/10 pb-3">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-1">
            Academics &amp; Research
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-base-content">
            Education
          </h2>
        </div>

        <div className="space-y-6">
          {mruEducation.map((item) => (
            <div key={item.title} className="content-card p-6 sm:p-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-xl font-bold text-base-content">{item.title}</h3>
                <span className="text-xs font-semibold text-primary">{item.meta}</span>
              </div>

              <div className="space-y-2.5 text-sm text-base-content/85 leading-relaxed">
                <p>
                  • <strong>Degree &amp; Cognate:</strong> Bachelor of Science in Computer Science with a Mathematics cognate focused on linear algebra, statistics, graph theory, and network science.
                </p>
                <p>
                  • <strong>Senior Capstone:</strong> Designed and developed Companion Baduk, an explainable Go AI desktop application coupling heuristic evaluation with Monte Carlo search.
                </p>
                <p>
                  • <strong>Research &amp; Presentations:</strong> Presented exploratory mathematical data analysis and regression replication at Mount Royal University Research Days and the Alberta Mathematics Dialogue (AMD / PIMS).
                </p>
                <p>
                  • <strong>Coursework Highlights:</strong> Operating Systems, Data Structures &amp; Algorithms, Software Engineering, Database Management Systems, Computability Theory, Computer Networks, and Artificial Intelligence.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-base-content/10">
                {item.tags.map((tag) => (
                  <a
                    key={tag}
                    href={tagPath(tag)}
                    className="tag-badge"
                    style={{ "--tag-hue": getTagHue(tag) } as CSSProperties}
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ABOUT ME & PERSONALITY ─── */}
      <section id="about" data-reveal className="space-y-6 scroll-mt-24">
        <div className="border-b border-base-content/10 pb-3">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-1">
            Personal Background
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-base-content">
            About Me
          </h2>
        </div>

        <div className="content-card p-6 sm:p-8 space-y-4 text-base text-base-content/85 leading-relaxed">
          <p>
            I&apos;m a Computer Science graduate from Mount Royal University who enjoys building software that combines practical engineering with interesting technical problems. My work ranges from React and Node.js applications to systems programming and applied AI.
          </p>

          <p>
            Recently, I&apos;ve focused on building and shipping interactive software, including an explainable Go AI, web applications, and developer tools. I enjoy working across the stack, whether that means designing responsive interfaces, tuning search algorithms, or debugging low-level hardware interactions.
          </p>

          <div className="pt-3 border-t border-base-content/10">
            <p className="text-sm font-medium text-base-content/80">
              <span className="font-bold text-base-content">Outside of code:</span> Baduk, bouldering, bird photography, hockey.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
