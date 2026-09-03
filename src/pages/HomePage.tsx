import type { CSSProperties } from "react";
import { CardGrid } from "../components/CardGrid";
import { Section } from "../components/Section";
import { experienceItems } from "../experience";
import { educationItems } from "../education";
import { featuredHobbies } from "../hobbiesCards";
import { featuredProjects } from "../projectsCards";
import { getTagHue } from "../utils/tagColors";
import { tagPath } from "../utils/tags";

export function HomePage() {
  return (
    <main id="main-content" className="site-main space-y-12" tabIndex={-1}>
      <Section
        id="about-me"
        title="About Me"
        description="Background, focus areas, and interests in software and applied AI."
      >
        <div className="space-y-4 text-base text-base-content/85 leading-relaxed">
          <p>
            I’m a Computer Science graduate from Mount Royal University with a
            Mathematics cognate focused on linear algebra, network science,
            and analytical problem-solving. I’m interested in building clear,
            well-engineered software that connects theoretical ideas with
            practical applications.
          </p>

          <p>
            My work spans applied AI, legacy game development, web platforms,
            database-backed applications, and research-driven visualization.
            For my final project, I built a Go AI designed to explain the
            reasoning behind its moves, reflecting my interest in transparent
            and understandable systems.
          </p>

          <p>
            Through presentations at MRU Research Days and the Alberta
            Mathematics Dialogue, I’ve developed experience communicating
            technical ideas clearly to both technical and non-technical
            audiences.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "Software Development",
              "Applied AI",
              "Game Development",
              "Technical Communication",
            ].map((tag) => (
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
      </Section>

      <Section
        id="technical-skills"
        title="Technical Skills"
        description="Core technologies, engineering strengths, and practical development experience."
      >
        <div className="space-y-6">
          <p className="text-base text-base-content/85 leading-relaxed max-w-4xl">
            I have experience with C++, C, Java, Python, SQL, JavaScript,
            and React, with a focus on building efficient, practical, and
            maintainable software across web applications, backend systems,
            databases, applied AI, game development, and research-driven
            visualization.
          </p>

          <div className="divider my-2" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="inner-card flex flex-col justify-start">
              <h3 className="text-base font-bold text-base-content mb-1.5">
                Programming Languages
              </h3>
              <p className="text-sm text-base-content/80 leading-relaxed">
                C++, C, C#, Java, Python, SQL, JavaScript, TypeScript,
                Haskell, Visual Basic, PHP, R, Prolog, HTML, CSS, Bash, and
                GDScript.
              </p>
            </div>

            <div className="inner-card flex flex-col justify-start">
              <h3 className="text-base font-bold text-base-content mb-1.5">Software Development</h3>
              <p className="text-sm text-base-content/80 leading-relaxed">
                Algorithm design, system-level programming, data-driven
                application development, backend logic, software engineering
                principles, object-orientated programming, and maintainable
                application architecture.
              </p>
            </div>

            <div className="inner-card flex flex-col justify-start">
              <h3 className="text-base font-bold text-base-content mb-1.5">
                Web &amp; Application Development
              </h3>
              <p className="text-sm text-base-content/80 leading-relaxed">
                React, Tailwind CSS, TSX component editing, Quartz 4,
                Node.js, Express.js, Flask, Electron, .NET Framework,
                desktop web apps, advanced web development, interactive UI
                components, and internal wiki development.
              </p>
            </div>

            <div className="inner-card flex flex-col justify-start">
              <h3 className="text-base font-bold text-base-content mb-1.5">
                Backend &amp; Databases
              </h3>
              <p className="text-sm text-base-content/80 leading-relaxed">
                MySQL, MariaDB, Microsoft Access, Oracle SQL, database
                modelling, SQL querying, stored procedures, data integrity
                management, backend game logic, SQL integration, API
                integration, REST, JSON, XML, SFTP, and database-backed
                application development.
              </p>
            </div>

            <div className="inner-card flex flex-col justify-start">
              <h3 className="text-base font-bold text-base-content mb-1.5">Systems Programming</h3>
              <p className="text-sm text-base-content/80 leading-relaxed">
                C programming, assembly language, Linux shell development,
                process management, inter-process communication, concurrent
                command execution, memory optimization, and operating
                systems concepts.
              </p>
            </div>

            <div className="inner-card flex flex-col justify-start">
              <h3 className="text-base font-bold text-base-content mb-1.5">
                AI, Algorithms &amp; Computer Science
              </h3>
              <p className="text-sm text-base-content/80 leading-relaxed">
                Applied AI, game AI, explainable AI systems, algorithm
                design, algorithms and complexity, programming paradigms,
                computability theory, and human-computer interaction.
              </p>
            </div>

            <div className="inner-card flex flex-col justify-start">
              <h3 className="text-base font-bold text-base-content mb-1.5">
                Data, Scientific Computing &amp; Mathematical Modelling
              </h3>
              <p className="text-sm text-base-content/80 leading-relaxed">
                Matplotlib, StatCrunch, NumPy, SymPy, statistical data
                analysis, research visualization, linear algebra, abstract
                algebra, discrete mathematics, calculus, mathematical
                statistics, symbolic logic, network science, and
                mathematical modelling for data-driven application
                development.
              </p>
            </div>

            <div className="inner-card flex flex-col justify-start">
              <h3 className="text-base font-bold text-base-content mb-1.5">AI Code</h3>
              <p className="text-sm text-base-content/80 leading-relaxed">
                Daily AI-assisted development workflows using OpenAI Codex,
                Anthropic Claude, Google Gemini and Antigravity, Cursor,
                GitHub Copilot, OpenClaw, Ollama, and Hugging Face.
                Experience spans cloud and local LLM workflows, agentic
                development, codebase exploration, planning, implementation,
                debugging, refactoring, rapid prototyping, prompt
                engineering, cross-model validation, automated testing, code
                review, and iterative software delivery.
              </p>
            </div>

            <div className="inner-card flex flex-col justify-start">
              <h3 className="text-base font-bold text-base-content mb-1.5">
                UI / UX &amp; Accessibility
              </h3>
              <p className="text-sm text-base-content/80 leading-relaxed">
                Human-computer interaction, accessibility-focused UI/UX,
                neurodivergent-friendly interface design, layout
                improvement, clear interface design, and technical
                communication.
              </p>
            </div>

            <div className="inner-card flex flex-col justify-start">
              <h3 className="text-base font-bold text-base-content mb-1.5">
                Tools &amp; Platforms
              </h3>
              <p className="text-sm text-base-content/80 leading-relaxed">
                Docker, Git, PyCharm, Eclipse, Android Studio, Panda3D,
                Linux, Debian, PowerShell, Batch, LaTeX, Microsoft Office,
                Microsoft Excel, Visual Studio Code, Visual Studio, .NET
                Framework, Adobe Photoshop (and other Adobe tools), OBS
                Studio, Algodoo, and Windows.
              </p>
            </div>

            <div className="inner-card flex flex-col justify-start">
              <h3 className="text-base font-bold text-base-content mb-1.5">
                DevOps &amp; Workflow
              </h3>
              <p className="text-sm text-base-content/80 leading-relaxed">
                Git-based collaboration, branch-based workflows, code review
                practices, version control hygiene, SDLC execution, agile,
                unit tests, and iterative delivery across personal and team
                projects.
              </p>
            </div>

            <div className="inner-card flex flex-col justify-start">
              <h3 className="text-base font-bold text-base-content mb-1.5">
                Teaching &amp; Mentoring
              </h3>
              <p className="text-sm text-base-content/80 leading-relaxed">
                Python, SQL, and Java instruction, curriculum development,
                hands-on coding activities, debugging support, and
                beginner-friendly technical explanation.
              </p>
            </div>
          </div>

          <div className="divider my-4 font-semibold text-sm text-base-content/70">Core Technologies</div>

          <div className="flex flex-wrap justify-center gap-2">
            {[
              "C/C++",
              "Python",
              "React",
              "Node.js",
              "Express.js",
              "Electron",
              "Tailwind CSS",
              "SQL",
              "JavaScript",
              "Java",
            ].map((tag) => (
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
      </Section>

      <Section
        id="projects"
        title="Projects"
        description="Featured work across AI, web development, systems programming, and visualization."
      >
        <div className="space-y-6">
          <p className="text-base text-base-content/85 leading-relaxed">
            A selection of projects spanning Go AI tools, interactive learning
            platforms, web documentation, systems programming, data
            visualization, and legacy game development.
          </p>

          <CardGrid items={featuredProjects} grid />
        </div>
      </Section>

      <Section
        id="experience"
        title="Work Experience"
        description="Professional and teaching experience with a focus on communication and delivery."
      >
        <div className="space-y-6">
          <p className="text-base text-base-content/85 leading-relaxed">
            Experience across web development, teaching, technical support,
            and hands-on problem-solving, with a focus on clear communication
            and practical software work.
          </p>

          <div className="grid gap-6">
            {experienceItems.map((item) => (
              <div key={item.title} className="inner-card space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-lg font-bold text-base-content">{item.title}</h3>
                  <span className="text-xs font-semibold text-primary">{item.meta}</span>
                </div>
                <div className="space-y-2 text-sm text-base-content/85 leading-relaxed">
                  {item.details.map((detail) => (
                    <p key={detail}>• {detail}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2">
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
        </div>
      </Section>

      <Section
        id="education"
        title="Education"
        description="Academic background, training, and foundational learning experiences."
      >
        <div className="space-y-6">
          <p className="text-base text-base-content/85 leading-relaxed">
            Education and training experiences that shaped my technical
            foundation, communication skills, and long-term interest in
            software development.
          </p>

          <div className="grid gap-6">
            {educationItems.map((item) => (
              <div key={item.title} className="inner-card space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-lg font-bold text-base-content">{item.title}</h3>
                  <span className="text-xs font-semibold text-primary">{item.meta}</span>
                </div>
                <div className="space-y-2 text-sm text-base-content/85 leading-relaxed">
                  {item.details.map((detail) => (
                    <p key={detail}>• {detail}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2">
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
        </div>
      </Section>

      <Section
        id="hobbies"
        title="Hobbies"
        description="Interests outside software that emphasize strategy, focus, and steady growth."
      >
        <div className="space-y-6">
          <p className="text-base text-base-content/85 leading-relaxed">
            Outside of software development, I enjoy hobbies that combine
            strategy, focus, observation, and steady improvement.
          </p>

          <CardGrid items={featuredHobbies} grid />
        </div>
      </Section>
    </main>
  );
}

