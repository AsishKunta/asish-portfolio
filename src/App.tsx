import { useState } from "react";
import FeaturedElevateAI from "./sections/FeaturedElevateAI.tsx";
import EngineeringMetrics from "./sections/EngineeringMetrics.tsx";
import { ProjectCard } from "./components/ProjectCard.tsx";
import projects from "./data/projects.ts";

function App() {
  const [copied, setCopied] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <nav className="sticky top-0 z-10 mx-auto flex max-w-6xl items-center justify-between border-b border-slate-800/50 bg-slate-950/80 px-6 py-6 backdrop-blur-sm">
        <h1 className="text-lg font-semibold tracking-tight">
          Asish Sri Sai Kunta
        </h1>

        <div className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#projects" className="transition-colors duration-200 hover:text-cyan-300">
            Projects
          </a>

          <a href="#focus" className="transition-colors duration-200 hover:text-cyan-300">
            Focus
          </a>

          <a href="#contact" className="transition-colors duration-200 hover:text-cyan-300">
            Contact
          </a>
        </div>
      </nav>

      <section className="relative overflow-hidden mx-auto max-w-6xl px-6 py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="hero-grid absolute inset-0" />
          <div className="hero-glow absolute inset-0" />
        </div>

        <div className="relative z-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">
            Systems Engineering • Backend • Architecture
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white leading-tight md:text-5xl">
            Engineering scalable systems, scheduling architectures, and production-grade software.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            I build engineering-focused projects centered around system design, simulation architecture, backend services, scheduling algorithms, and production-ready software development.
          </p>

          <div className="mt-6 flex flex-col gap-2 text-sm text-slate-400 md:flex-row md:items-center md:gap-4">
            <span className="inline-flex items-center gap-2 text-slate-400">
              <svg viewBox="0 0 28 20" className="h-4 w-auto opacity-80 text-slate-400" aria-hidden="true">
                <rect x="0" y="0" width="28" height="20" rx="4" fill="currentColor" opacity="0.12" />
                <text x="50%" y="58%" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="currentColor">UNT</text>
              </svg>
              <span>B.S. Computer Science — University of North Texas</span>
            </span>
            <span className="hidden h-4 w-px bg-slate-700 md:inline-block" />
            <span>Aug 2023 – May 2027</span>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://github.com/AsishKunta"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-100 transition-colors duration-200 hover:bg-cyan-400 hover:text-slate-950"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/asish-sri-sai-kunta-649864258/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-100 transition-colors duration-200 hover:bg-cyan-400 hover:text-slate-950"
          >
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-100 transition-colors duration-200 hover:bg-cyan-400 hover:text-slate-950"
          >
            Resume
          </a>
        </div>
      </div>
      </section>

      <FeaturedElevateAI />
      <EngineeringMetrics />

      <section
        id="projects"
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Featured Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Engineering-focused work
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              tech={project.tech}
              highlights={project.highlights}
              github={project.github}
            />
          ))}
        </div>
      </section>

      <section
        id="focus"
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Technical Focus Areas
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Backend Systems", details: "Python · FastAPI · Node.js" },
            { title: "Scheduling & Simulation", details: "FCFS · SCAN · Queue Management" },
            { title: "API Engineering", details: "REST APIs · Validation · Authentication" },
            { title: "Databases", details: "PostgreSQL · SQL" },
            { title: "Testing & Tooling", details: "Pytest · Git · Deployment Workflows" },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <p className="text-sm font-semibold text-white">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="coursework"
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Relevant Coursework
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Algorithms",
            "Software Engineering",
            "Computer Networks",
            "Systems Programming",
            "Applied AI",
            "Intro to AI",
            "Natural Language Processing",
            "Software Development for AI",
            "Data Structures",
            "Foundations of Computing",
            "Logic Design",
            "Cybersecurity",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 text-slate-300"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Technical Challenges Solved
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Systems problems addressed with engineering rigor
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Preventing starvation in scheduling queues",
            "Direction-aware dispatch optimization",
            "Scalable REST API validation workflows",
            "Concurrent request handling simulation",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <p className="text-sm leading-6 text-slate-300">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Get In Touch
        </p>

        <p className="mt-4 text-lg text-slate-300">
          Let’s build technology that improves the world, one system at a time.
        </p>

        <div className="mt-8">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:asishkunta@gmail.com"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
            >
              asishkunta@gmail.com
            </a>

            <button
              type="button"
              onClick={async () => {
                await navigator.clipboard.writeText("asishkunta@gmail.com");
                setCopied(true);
                window.setTimeout(() => setCopied(false), 2000);
              }}
              className="rounded-md bg-slate-800 px-3 py-1.5 text-sm font-semibold text-slate-100 transition-colors duration-200 hover:bg-cyan-400 hover:text-slate-950"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://github.com/AsishKunta"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-100 transition-colors duration-200 hover:bg-cyan-400 hover:text-slate-950"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/asish-sri-sai-kunta-649864258/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-100 transition-colors duration-200 hover:bg-cyan-400 hover:text-slate-950"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-100 transition-colors duration-200 hover:bg-cyan-400 hover:text-slate-950"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      <footer
        className="border-t border-slate-800 py-10"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 text-sm text-slate-400 md:flex-row">
          <p>
            Built with React, TypeScript, Vite, and Tailwind CSS.
          </p>

          <p>
            Focused on software engineering, systems, and backend
            architecture.
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;