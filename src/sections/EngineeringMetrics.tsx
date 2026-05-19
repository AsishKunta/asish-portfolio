type MetricItem = {
  title: string;
  value: string;
  note: string;
};

function EngineeringMetrics() {
  const metrics: MetricItem[] = [
    {
      title: "Automated Testing",
      value: "117+ automated tests passed",
      note: "Continuous validation for regression control and feature confidence.",
    },
    {
      title: "Scheduling Engine",
      value: "FCFS & SCAN implemented",
      note: "Queue policies designed for fairness, throughput, and starvation avoidance.",
    },
    {
      title: "Simulation Architecture",
      value: "Real-time system modeling",
      note: "Event-driven simulation for load balancing and operational visibility.",
    },
    {
      title: "API Systems",
      value: "RESTful services designed",
      note: "Stable contracts with validation, auth, and reliability patterns.",
    },
    {
      title: "Deployment Workflow",
      value: "CI/CD pipeline delivery",
      note: "Automated build, test, and release workflows for production readiness.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Engineering Metrics
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Systems indicators for production-ready design
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Clear engineering signals that reflect backend systems, scheduling logic, simulation architecture, and deployable workflows.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric) => (
          <article
            key={metric.title}
            className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 transition hover:-translate-y-0.5 hover:border-cyan-400"
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
