import Head from "next/head";

function ScenarioCard({ icon, title, bullets, accent }) {
  return (
    <div
      className={`relative rounded-2xl border bg-slate-950/95 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.7)] ${accent} transition-transform transition-shadow duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_70px_rgba(0,0,0,0.95)]`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/90 border border-slate-700 text-[14px]">
          {icon}
        </span>
        <h3 className="text-sm md:text-[15px] font-semibold text-slate-50">
          {title}
        </h3>
      </div>
      <ul className="mt-1 space-y-1.5 text-[11px] text-slate-300 leading-relaxed list-disc list-inside">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ClinicalAIPage() {
  return (
    <>
      <Head>
        <title>Clinical AI | Ardia Health</title>
        <meta
          name="description"
          content="Ardia Clinical AI turns real conversations and clinical reasoning into documentation, coding, and prior auth—without double work for clinicians."
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pb-20">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <p className="text-teal-300 tracking-[0.3em] text-[11px] font-semibold">
            CLINICAL AI
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">
            Clinical documentation and prior auth{" "}
            <span className="text-teal-300">without double work.</span>
          </h1>
          <p className="mt-5 max-w-3xl text-[15px] md:text-[17px] text-slate-300 leading-relaxed">
            Ardia Clinical AI listens to the real visit, structures the medical story,
            and drafts documentation, coding context, and prior authorization
            narratives. Clinicians don’t repeat themselves — they review, edit, and
            sign. Underneath, Ardia runs healthcare-tuned foundation models and
            clinical agents purpose-built for care.
          </p>

          {/* tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Ambient documentation",
              "Prior auth automation",
              "Surgery & OB/GYN",
              "Chronic & RPM",
            ].map((label) => (
              <span
                key={label}
                className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1 text-[11px] text-slate-100"
              >
                <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-teal-400" />
                {label}
              </span>
            ))}
          </div>
        </section>

        {/* ================================= */}
        {/* VISIT WORKFLOW – BLUE OUTER LAYER */}
        {/* ================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="group relative overflow-hidden rounded-[32px] border border-sky-700/70 bg-gradient-to-br from-slate-950 via-sky-950/60 to-slate-950 shadow-[0_24px_80px_rgba(0,0,0,0.9)] backdrop-blur-xl px-4 sm:px-6 lg:px-10 py-8 sm:py-10">
            {/* animated glow */}
            <div className="pointer-events-none absolute -inset-px rounded-[32px] bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.4),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.15),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
              <div>
                <p className="text-cyan-300 tracking-[0.3em] text-[11px] font-semibold">
                  VISIT WORKFLOW
                </p>
                <h2 className="mt-2 text-2xl md:text-3xl lg:text-[2rem] font-semibold max-w-xl text-sky-50">
                  From conversation to signed note and prior auth.
                </h2>
              </div>
              <p className="max-w-xl text-xs md:text-sm text-slate-100/80">
                Ardia fits around the visit, not the other way around. The clinician
                talks and thinks as usual; Ardia captures the story, builds the note,
                and prepares downstream artifacts like prior auth justifications
                automatically.
              </p>
            </div>

            <div className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  step: "1",
                  gradient: "from-teal-400 to-cyan-400",
                  title: "Ambient capture or quick summary",
                  body: "During or just after the visit, Ardia listens securely or takes a short voice summary. No extra scripting — just the natural clinical story.",
                },
                {
                  step: "2",
                  gradient: "from-sky-400 to-blue-500",
                  title: "Structured note draft",
                  body: "HPI, ROS, exam, assessment and plan are organized into a draft note mapped to the EMR structure, with suggested codes where appropriate.",
                },
                {
                  step: "3",
                  gradient: "from-violet-400 to-fuchsia-400",
                  title: "Prior auth & letters from the same story",
                  body: "Using the same structured data, Ardia drafts prior authorization narratives and clinical letters — no retyping into separate portals.",
                },
                {
                  step: "4",
                  gradient: "from-amber-400 to-orange-400",
                  title: "Clinician review, edit, sign",
                  body: "The clinician reviews the drafts in their existing workflow, edits where needed, and signs. The work happens once; Ardia handles the rest.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="relative overflow-hidden rounded-2xl border border-slate-900 bg-slate-950/95 shadow-[0_18px_45px_rgba(0,0,0,0.7)] transition-transform transition-shadow duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_70px_rgba(0,0,0,0.95)]"
                >
                  <div
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${item.gradient}`}
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-950/90 text-[11px] font-semibold text-slate-50">
                      {item.step}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.16em] text-slate-950/90 font-medium">
                      Step {item.step}
                    </span>
                  </div>
                  <div className="px-4 pb-4 pt-3">
                    <h3 className="text-xs font-semibold text-slate-50 mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================== */}
        {/* SCENARIOS – GREEN OUTER LAYER      */}
        {/* ================================== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="group relative overflow-hidden rounded-[32px] border border-emerald-700/70 bg-gradient-to-br from-slate-950 via-emerald-950/60 to-slate-950 shadow-[0_24px_80px_rgba(0,0,0,0.9)] backdrop-blur-xl px-4 sm:px-6 lg:px-10 py-8 sm:py-10">
            <div className="pointer-events-none absolute -inset-px rounded-[32px] bg-[radial-gradient(circle_at_0%_50%,rgba(74,222,128,0.32),transparent_55%),radial-gradient(circle_at_100%_50%,rgba(34,197,94,0.15),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
              <div>
                <p className="text-emerald-300 tracking-[0.3em] text-[11px] font-semibold">
                  SCENARIOS
                </p>
                <h2 className="mt-2 text-2xl md:text-3xl lg:text-[2rem] font-semibold max-w-xl text-emerald-50">
                  Designed for real-world complexity, not just simple visits.
                </h2>
              </div>
              <p className="max-w-xl text-xs md:text-sm text-emerald-50/80">
                Planned surgeries, emergency transfers, OB/GYN care, readmissions and
                chronic programs all produce documentation and coordination work. Ardia
                follows the journey across episodes, not just one encounter.
              </p>
            </div>

            <div className="relative grid gap-5 md:grid-cols-2">
              <ScenarioCard
                icon="🏥"
                accent="border-emerald-500/60"
                title="Planned surgery"
                bullets={[
                  "Pre-op clearance notes, risk scores and consent summaries drafted from clinical conversations and checklists.",
                  "Post-op visit notes, orders and instructions summarized and aligned with pathways.",
                  "Prior auth and utilization review supported by structured clinical justifications.",
                ]}
              />
              <ScenarioCard
                icon="⚡"
                accent="border-orange-400/70"
                title="Emergency & urgent surgery"
                bullets={[
                  "Rapid triage and encounter summaries built from structured ED conversations and orders.",
                  "Automatic transfer notes, handoff summaries and discharge documentation.",
                  "Coding and billing context surfaced from the same AI understanding—no rework after the fact.",
                ]}
              />
              <ScenarioCard
                icon="👶"
                accent="border-pink-400/70"
                title="OB/GYN and maternity journeys"
                bullets={[
                  "Prenatal visit notes drafted from counseling, risk factors and exam findings.",
                  "Labor and delivery events summarized into clear clinical narratives and discharge documents.",
                  "Postpartum follow-up, RPM data and red-flag symptoms woven into a continuous record.",
                ]}
              />
              <ScenarioCard
                icon="📈"
                accent="border-sky-400/70"
                title="Chronic care & remote monitoring"
                bullets={[
                  "Visit notes enriched with recent device data, labs and trends described in clinical language.",
                  "Suggested outreach tasks and schedules for high-risk or rising-risk patients.",
                  "Consistent narratives for programs like HF, CKD and diabetes to support quality and value-based care.",
                ]}
              />
            </div>
          </div>
        </section>

        {/* ================================== */}
        {/* PLATFORM – PURPLE/INDIGO OUTER LAYER */}
        {/* ================================== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="group relative overflow-hidden rounded-[32px] border border-indigo-700/70 bg-gradient-to-br from-slate-950 via-indigo-950/60 to-slate-950 shadow-[0_24px_80px_rgba(0,0,0,0.9)] backdrop-blur-xl px-4 sm:px-6 lg:px-10 py-8 sm:py-10">
            <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-gradient-to-r from-fuchsia-400/0 via-fuchsia-400/25 to-fuchsia-400/0 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
              <div className="max-w-xl">
                <p className="text-indigo-300 tracking-[0.3em] text-[11px] font-semibold">
                  PLATFORM
                </p>
                <h2 className="mt-2 text-2xl md:text-3xl lg:text-[2rem] font-semibold text-indigo-50">
                  Foundation models and clinical agents, purpose-built for care.
                </h2>
              </div>
              <p className="max-w-xl text-xs md:text-sm text-indigo-50/80">
                Under the surface, Ardia runs healthcare-tuned foundation models and a
                set of AI agents that specialize in documentation, prior auth,
                diagnostics support, coordination and population insights. Clinical
                teams see a simple experience; the complexity stays in the platform.
              </p>
            </div>

            <div className="relative grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Ardia foundation LLMs",
                  body: "Models trained and tuned on de-identified clinical patterns, documentation structures and guideline-aligned reasoning, designed to work safely within your governance.",
                },
                {
                  title: "Clinical AI agents",
                  body: "Dedicated agents for documentation, prior auth, diagnostic context, care coordination and population analytics—each with clear boundaries and auditability.",
                },
                {
                  title: "Quantum-ready intelligence",
                  body: "The same data, models and agents are designed to plug into future quantum workloads for simulation and optimization, once the hardware and regulations are ready.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-slate-700/80 bg-slate-950/95 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.7)] transition-transform transition-shadow duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_70px_rgba(0,0,0,0.95)]"
                >
                  <h3 className="text-sm md:text-base font-semibold text-slate-50 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[11px] md:text-[12px] text-slate-300 leading-relaxed">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
