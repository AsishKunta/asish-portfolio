function FeaturedElevateAI() {
  const terminalLines = [
    '[01:00:12] scheduler: loading traffic profile "weekday-rush"',
    '[01:00:12] elevator-1: positioned @ floor 1, idle',
    '[01:00:13] request: floor 12 → destination 2 (peak inbound)',
    '[01:00:13] dispatcher: assign elevator-3 (nearest, moving down)',
    '[01:00:13] elevator-3: route [12 → 5 → 2], estimated 18s',
    '[01:00:14] queue: 8 active requests, 2 deferred',
    '[01:00:15] scheduler: balancing load, avoiding starvation',
    '[01:00:16] event: peak-load adjustment triggered',
    '[01:00:18] elevator-2: reroute via floor 8 for service window',
    '[01:00:20] metrics: avg-wait=22.4s, throughput=57 req/min',
    '[01:00:22] debug: fairness score = 0.94, congestion = 0.18',
    '[01:00:24] dispatcher: apply SCAN+priority override',
    '[01:00:27] report: service stability 99.8%, backlog 3 requests',
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Featured System Simulation
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          ElevateAI: Real-Time Scheduler Preview
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          A terminal-style simulation preview illustrating event-driven elevator scheduling, load balancing, and system stability metrics in a backend-focused, minimal presentation.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                Scheduler Metrics
              </p>

              <p className="mt-3 text-2xl font-bold text-white">
                Dynamic load balancing · Fairness · Throughput
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
              Systems Simulation
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { label: "Elevators", value: "4" },
              { label: "Events / sec", value: "18.3" },
              { label: "Avg Wait", value: "21s" },
              { label: "Peak Load", value: "110%" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-lg">
          <div className="mb-4 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-300">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
              terminal
            </span>
          </div>

          <div className="min-h-[320px] overflow-hidden rounded-2xl bg-slate-950 px-4 py-5 text-sm leading-6 text-slate-200">
            <pre className="font-mono text-[0.92rem]">
{terminalLines.join('\n')}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedElevateAI;