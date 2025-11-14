// pages/investors.js
import SEO from "../components/SEO";
import { Section } from "../components/Section";
import Link from "next/link";

export default function Investors() {
  return (
    <>
      <SEO
        title="Investors"
        description="Learn how Ardia Health is building an AI-first, quantum-ready healthcare platform and how to join the investor waitlist."
      />

      <div className="space-y-16">
        {/* HERO */}
        <section className="max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-ardia-accent mb-2">
            Investors
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-3">
            Back the intelligence layer for AI &amp; quantum-native healthcare.
          </h1>
          <p className="text-sm md:text-base text-slate-300 mb-4">
            Ardia Health is building a secure intelligence core that sits above
            EMRs, imaging, devices and labs – delivering clinical automation,
            smart diagnostics, RPM intelligence and precision health today, with
            a clear path to quantum-accelerated workloads tomorrow.
          </p>
          <p className="text-sm md:text-base text-slate-300">
            We are selectively opening conversations with long-term partners who
            share our conviction that AI and quantum will reshape how health
            systems, payers and device makers operate.
          </p>
        </section>

        {/* WHY NOW */}
        <Section
          eyebrow="Why now"
          title="Healthcare is at an inflection point."
        >
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card">
              <h3 className="text-sm font-semibold text-slate-50 mb-2">
                System strain
              </h3>
              <p className="text-xs md:text-sm text-slate-300">
                Burnout, staffing shortages and chronic disease create enormous
                pressure on providers and payers. Intelligence has to be built
                into the workflow, not bolted on.
              </p>
            </div>
            <div className="card">
              <h3 className="text-sm font-semibold text-slate-50 mb-2">
                Data fragmentation
              </h3>
              <p className="text-xs md:text-sm text-slate-300">
                EMR, PACS, devices, labs and claims all live in silos. A secure
                intelligence layer that can reason across these streams is still
                missing in most organizations.
              </p>
            </div>
            <div className="card">
              <h3 className="text-sm font-semibold text-slate-50 mb-2">
                Quantum horizon
              </h3>
              <p className="text-xs md:text-sm text-slate-300">
                As quantum computing matures, organizations with
                AI-ready, well-structured data will be able to tap into new
                classes of simulation and optimization. Ardia is designed for
                that future from day one.
              </p>
            </div>
          </div>
        </Section>

        {/* EXECUTION ROADMAP TIMELINE */}
        <Section
          eyebrow="Execution"
          title="24-month roadmap for product, clinical and commercial proof."
        >
          <RoadmapTimeline />
        </Section>

        {/* INVESTOR WAITLIST CTA */}
        <Section
          eyebrow="Get involved"
          title="Join the Ardia Health investor waitlist."
        >
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-center">
            <div className="space-y-3 text-sm text-slate-300">
              <p>
                We&apos;re looking for partners who bring more than capital:
                distribution into health systems, regulatory experience, device
                ecosystems or payer relationships.
              </p>
              <p>
                If you&apos;re a healthcare-focused fund, strategic investor or
                operator-angel interested in Ardia Health, join the confidential
                investor waitlist and we&apos;ll prioritize you for deep-dive
                sessions as we hit key milestones.
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs md:text-sm">
                <li>Product and clinical impact as first-class milestones.</li>
                <li>
                  Focus on sustainable, long-term infrastructure rather than
                  hype cycles.
                </li>
                <li>
                  Clear visibility into how AI and quantum fit into health
                  system operations.
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-sm font-semibold text-slate-50 mb-2">
                How to join the waitlist
              </h3>
              <ol className="list-decimal list-inside text-xs md:text-sm text-slate-300 space-y-1 mb-4">
                <li>
                  Visit our{" "}
                  <Link
                    href="/contact?type=investor"
                    className="text-ardia-accent underline underline-offset-4 hover:no-underline"
                  >
                    contact page
                  </Link>{" "}
                  and select &quot;Investor&quot; as your topic.
                </li>
                <li>
                  Or email{" "}
                  <span className="font-mono text-slate-100">
                    founders@ardiahealthlabs.com
                  </span>{" "}
                  with the subject line{" "}
                  <span className="italic">&quot;Investor Waitlist&quot;</span>.
                </li>
                <li>
                  Share your thesis, stage focus and how you can help us win in
                  this space.
                </li>
              </ol>
              <Link
                href="/contact?type=investor"
                className="inline-flex items-center justify-center rounded-xl bg-ardia-blue px-4 py-2 text-sm font-medium text-white shadow-lg shadow-ardia-blue/40 hover:bg-blue-500 transition w-full text-center"
              >
                Join the investor waitlist
              </Link>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}

function RoadmapTimeline() {
  const phases = [
    {
      label: "Phase 1",
      timeframe: "0–9 months",
      title: "MVP & design partner pilots",
      points: [
        "Clinical AI and RPM MVP live with design partner clinics.",
        "Initial diagnostics assist pilots with imaging or ECG partners.",
        "Security, HIPAA and audit foundations in place."
      ]
    },
    {
      label: "Phase 2",
      timeframe: "9–18 months",
      title: "Hospital systems & product depth",
      points: [
        "Expand into hospital systems and larger group practices.",
        "Launch Precision Health and Device Intelligence Cloud modules.",
        "Publish early outcomes: time saved, throughput and quality metrics."
      ]
    },
    {
      label: "Phase 3",
      timeframe: "18–24 months",
      title: "Scale & quantum optionality",
      points: [
        "Multi-site deployments with recurring platform usage.",
        "Payer-facing analytics and risk products live.",
        "Quantum simulation proof-of-concepts with de-identified data."
      ]
    }
  ];

  return (
    <div className="relative">
      <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-slate-700/50 -translate-x-1/2 pointer-events-none" />
      <div className="grid gap-6 md:grid-cols-3">
        {phases.map((phase, idx) => (
          <div key={phase.label} className="relative">
            <div className="card h-full flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <div className="inline-flex items-center gap-2">
                  <span className="h-7 w-7 rounded-full bg-ardia-blue flex items-center justify-center text-[11px] font-semibold text-white">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-[0.18em]">
                    {phase.label}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400">
                  {phase.timeframe}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-slate-50 mb-2">
                {phase.title}
              </h3>
              <ul className="text-xs md:text-sm text-slate-300 space-y-1 flex-1">
                {phase.points.map((pt) => (
                  <li key={pt} className="list-disc list-inside">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
