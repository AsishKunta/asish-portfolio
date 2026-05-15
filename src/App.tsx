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

          <a href="#skills" className="transition-colors duration-200 hover:text-cyan-300">
            Skills
          </a>

          <a href="#contact" className="transition-colors duration-200 hover:text-cyan-300">
            Contact
          </a>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Software Engineering Portfolio
        </p>

        <h2 className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl">
          Software engineer focused on systems, simulation, and scalable application development.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
          I build engineering-focused projects centered around system design, simulation architecture, backend services, scheduling algorithms, and production-ready software development.
        </p>

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
        id="skills"
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Core Focus Areas
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Backend APIs & Services",
            "Scheduling Algorithms",
            "Event-Driven Systems",
            "System Simulation",
            "Database Architecture",
            "Testing Infrastructure",
            "CI/CD Pipelines",
            "REST API Design",
            "Production Deployment",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 text-slate-300"
            >
              {item}
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
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 text-slate-300"
            >
              {item}
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