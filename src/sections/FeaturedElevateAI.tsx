function FeaturedElevateAI() {
  const terminalLines = [
    '[12:04:21] Request added → Floor 3 UP',
    '[12:04:22] Elevator 1 assigned',
    '[12:04:24] Dispatcher: nearest-car selection complete',
    '[12:04:25] Pickup complete',
    '[12:04:27] Queue depth: 6 active, 2 deferred',
    '[12:04:28] Scheduler: applying SCAN dispatch optimization',
    '[12:04:29] Elevator 3 rerouted via floor 7',
    '[12:04:31] Request serviced',
    '[12:04:33] Metrics: avg-wait=18.7s, throughput=62 req/min',
    '[12:04:35] Fairness score=0.92, starvation risk=low',
    '[12:04:37] System state: stable, load 83%',
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
          Terminal-style logs that show elevator dispatch, queue decisions, and real-time scheduling behavior in a systems-oriented engineering format.
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
                Load balancing · dispatch accuracy · production stability
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
              { label: "Avg Wait", value: "18.7s" },
              { label: "System Load", value: "83%" },
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