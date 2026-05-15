type MetricItem = {
  title: string;
  value: string;
  note: string;
};

function EngineeringMetrics() {
  const metrics: MetricItem[] = [
    {
      title: "Scheduling Strategies",
      value: "FCFS · SCAN · Priority",
      note: "Designing scheduler policies for balanced latency and throughput.",
    },
    {
      title: "Event-Driven Architecture",
      value: "Real-time dispatch loops",
      note: "Modeling asynchronous events and state transitions reliably.",
    },
    {
      title: "REST API Experience",
      value: "Versioned services",
      note: "Building stable HTTP contracts with observability and retries.",
    },
    {
      title: "Testing & CI/CD",
      value: "Automated coverage",
      note: "Validating systems with regression tests and pipeline gating.",
    },
    {
      title: "Simulation Systems",
      value: "Traffic modeling",
      note: "Capturing realistic load profiles for production decision-making.",
    },
    {
      title: "Backend Engineering",
      value: "Scalable architecture",
      note: "Focusing on reliability, maintainability, and deployability.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Engineering Insights
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Systems metrics for backend-focused work
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Metrics that speak to architecture, scheduling, simulation, and the engineering practices that support production systems.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric) => (
          <article
            key={metric.title}
            className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              {metric.title}
            </p>
            <p className="mt-4 text-2xl font-semibold text-white">
              {metric.value}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {metric.note}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default EngineeringMetrics;
