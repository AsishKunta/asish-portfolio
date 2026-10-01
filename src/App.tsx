import { useState } from "react";

const projects = [
  {
    title: "Campus Lost & Found",
    label: "Flagship full-stack project",
    summary: "A production-oriented platform for reporting and recovering campus property.",
    stack: ["Node.js", "Express", "PostgreSQL", "REST APIs", "Vercel", "Render"],
    points: [
      "Lost/found reports with image support, search, filtering, and sorting.",
      "Student and admin dashboards, claims, messaging, notifications, and private admin notes.",
      "Explainable candidate matching using category, name, location, description, and date signals.",
      "Server-side sessions, HTTP-only cookies, bcrypt hashing, role-based authorization, ownership checks, and restricted CORS.",
    ],
  },
  {
    title: "ElevateAI",
    label: "Systems & algorithms project",
    summary: "A Python simulator for exploring elevator scheduling behavior under realistic traffic and queue conditions.",
    stack: ["Python", "Simulation", "FCFS", "SCAN", "Pytest", "System Design"],
    points: [
      "Implemented FCFS and SCAN scheduling strategies.",
      "Designed a modular scheduler engine and multi-elevator traffic handling.",
      "Explored fairness, congestion handling, wait-time behavior, and event-driven simulation.",
      "Added automated tests for scheduler behavior.",
    ],
  },
];

const coursework: Array<[string, string[]]> = [
  ["Core CS", ["Data Structures", "Algorithms", "Software Engineering", "Programming Languages"]],
  ["Systems", ["Systems Programming", "Computer Networks", "Computer Organization", "Foundations of Cybersecurity"]],
  ["AI / ML", ["Machine Learning", "Artificial Intelligence", "Applied AI", "Natural Language Processing", "Software Development for AI"]],
];

function App() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("asishkunta@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main className="min-h-screen bg-[#08111f] text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      <nav className="sticky top-0 z-20 border-b border-white/10 bg-[#08111f]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#" className="text-sm font-bold tracking-tight text-white">ASISH<span className="text-cyan-300">.DEV</span></a>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#projects" className="hover:text-cyan-300">Projects</a>
            <a href="#research" className="hover:text-cyan-300">Research</a>
            <a href="#coursework" className="hover:text-cyan-300">Coursework</a>
            <a href="#contact" className="hover:text-cyan-300">Contact</a>
          </div>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="rounded-md border border-cyan-300/50 px-3 py-1.5 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-300 hover:text-slate-950">Resume</a>
        </div>
      </nav>

      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 hero-grid" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Software Engineer · Backend & AI Systems</p>
          <h1 className="max-w-4xl text-5xl font-bold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">Building reliable software from systems thinking to shipped products.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">I’m Asish Sri Sai Kunta, a Computer Science student at the University of North Texas focused on backend engineering, system design, and practical AI research.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200">View projects</a>
            <a href="https://github.com/AsishKunta" target="_blank" rel="noopener noreferrer" className="rounded-md border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-200">GitHub</a>
            <a href="https://www.linkedin.com/in/asish-sri-sai-kunta-649864258/" target="_blank" rel="noopener noreferrer" className="rounded-md border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-200">LinkedIn</a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-sm text-slate-400">
            <span>B.S. Computer Science · University of North Texas</span><span>Expected graduation: December 2027</span>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-px border-x border-t border-white/10 bg-white/10 sm:grid-cols-3">
        {[["Backend engineering", "APIs, authentication, databases"], ["Systems foundations", "Algorithms, networks, programming languages"], ["Applied AI research", "Resource-efficient LLM exploration"]].map(([title, detail]) => (
          <div key={title} className="bg-[#0b1627] p-6 sm:p-7"><p className="font-semibold text-white">{title}</p><p className="mt-2 text-sm leading-6 text-slate-400">{detail}</p></div>
        ))}
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Selected work</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-white">Projects built around real workflows.</h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">A focused set of software work. Claims are limited to implemented functionality.</p>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.title} className={"rounded-2xl border p-7 transition hover:-translate-y-1 hover:border-cyan-300/50 " + (index === 0 ? "border-cyan-300/30 bg-gradient-to-br from-cyan-400/10 to-[#0d1a2d]" : "border-white/10 bg-[#0b1627]")}>
              <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">{project.label}</p><h3 className="mt-3 text-2xl font-bold text-white">{project.title}</h3></div><span className="text-2xl text-cyan-300/70">0{index + 1}</span></div>
              <p className="mt-5 leading-7 text-slate-400">{project.summary}</p>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">{project.points.map((point) => <li key={point} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />{point}</li>)}</ul>
              <div className="mt-7 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs text-slate-300">{item}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="research" className="border-y border-white/10 bg-[#0b1627]">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div><p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Undergraduate research</p><h2 className="mt-4 text-4xl font-bold tracking-tight text-white">Resource-efficient large language models.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">I am investigating how LLMs can use less compute, memory, and energy while retaining useful performance. The work emphasizes careful experimentation and measured evaluation rather than unsupported performance claims.</p></div>
          <div className="grid gap-4"><div className="rounded-xl border border-white/10 bg-[#08111f] p-6"><p className="font-semibold text-white">Current technical work</p><p className="mt-3 leading-7 text-slate-400">Supervised learning, regression, gradient descent, loss functions, Python experiments, model evaluation, and reproducible technical documentation.</p></div><div className="rounded-xl border border-white/10 bg-[#08111f] p-6"><p className="font-semibold text-white">Evaluation lens</p><p className="mt-3 leading-7 text-slate-400">MSE, MAE, RMSE, and R²; including linear regression implemented from first principles as part of ongoing learning.</p></div></div>
        </div>
      </section>

      <section id="coursework" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Relevant coursework</p><h2 className="mt-4 text-4xl font-bold tracking-tight text-white">Technical depth, organized by domain.</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">{coursework.map(([label, items]) => <div key={label} className="rounded-xl border border-white/10 bg-[#0b1627] p-6"><h3 className="font-bold text-white">{label}</h3><div className="mt-5 flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-md bg-slate-800 px-3 py-2 text-sm text-slate-300">{item}</span>)}</div></div>)}</div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-[#0b1627]"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Contact</p><h2 className="mt-4 text-3xl font-bold text-white">Let’s connect.</h2><a href="mailto:asishkunta@gmail.com" className="mt-4 block text-lg text-slate-300 hover:text-cyan-200">asishkunta@gmail.com</a></div><div className="flex flex-wrap gap-3"><button type="button" onClick={copyEmail} className="rounded-md border border-white/20 px-4 py-2.5 text-sm font-semibold text-white hover:border-cyan-300 hover:text-cyan-200">{copied ? "Email copied" : "Copy email"}</button><a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="rounded-md bg-cyan-300 px-4 py-2.5 text-sm font-bold text-slate-950 hover:bg-cyan-200">Open resume</a></div></div></section>
      <footer className="bg-[#08111f] py-7"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-5 text-sm text-slate-500 sm:flex-row sm:px-8"><span>© 2026 Asish Sri Sai Kunta</span><span>React · TypeScript · Vite · Tailwind CSS</span></div></footer>
    </main>
  );
}

export default App;
