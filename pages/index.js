// pages/index.js

import SEO from "../components/SEO";
import { Section } from "../components/Section";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SEO
        title="AI that heals healthcare"
        description="Ardia Health builds AI-powered clinical automation, diagnostics, RPM intelligence and quantum-ready healthcare platforms."
      />

      <div className="space-y-16">
        {/* HERO */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-ardia-blue/40 bg-slate-950/70 px-3 py-1 text-[11px] text-slate-300 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-ardia-accent animate-pulse" />
              Live: ardiahealthlabs.com
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-50 mb-4">
              AI that <span className="text-ardia-accent">heals healthcare</span>.
            </h1>
            <p className="text-sm md:text-base text-slate-300 mb-6">
              Ardia Health is building the intelligence layer for modern care –
              automating clinical workflows, accelerating diagnostics, predicting
              disease, and powering connected medical devices. AI today,
              quantum-accelerated medicine tomorrow.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/clinical-ai"
                className="inline-flex items-center justify-center rounded-xl bg-ardia-blue px-4 py-2 text-sm font-medium text-white shadow-lg shadow-ardia-blue/40 hover:bg-blue-500 transition"
              >
                Explore Clinical AI
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-100 hover:border-ardia-accent hover:text-ardia-accent transition"
              >
                Talk to us
              </Link>
            </div>
          </div>

          <div className="card">
            <p className="text-xs font-semibold text-slate-300 mb-2 uppercase tracking-[0.22em]">
              Platform Snapshot
            </p>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ardia-accent" />
                <span>
                  <strong>Clinical Automation:</strong> AI scribe, auto-charting,
                  coding &amp; prior auth.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ardia-accent" />
                <span>
                  <strong>Smart Diagnostics:</strong> Assistive AI across radiology,
                  cardiology, dermatology &amp; more.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ardia-accent" />
                <span>
                  <strong>RPM &amp; Precision Health:</strong> Predictive insights
                  from wearables, devices &amp; EMR data.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ardia-accent" />
                <span>
                  <strong>Quantum Roadmap:</strong> Drug simulation, genomics &
                  complex optimization in phase two and three.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* PRODUCT SUITE */}
        <Section
          eyebrow="Product Suite"
          title="One platform. Five intelligence engines."
          kicker="Modular by design, more powerful together."
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/clinical-ai",
                title: "Ardia Clinical AI",
                desc: "Automate documentation, coding and prior auth so clinicians can focus on patients.",
                tag: "Automation Suite"
              },
              {
                href: "/diagnostics",
                title: "Ardia Smart Diagnostics",
                desc: "Multimodal AI interpretation across imaging, cardiology, dermatology and more.",
                tag: "Diagnostics"
              },
              {
                href: "/rpm",
                title: "Ardia RPM Intelligence",
                desc: "Real-time monitoring and prediction from wearables and connected medical devices.",
                tag: "Remote Monitoring"
              },
              {
                href: "/precision-health",
                title: "Ardia Precision Health",
                desc: "Predictive analytics and personalized plans for chronic disease and preventive care.",
                tag: "Predictive Care"
              },
              {
                href: "/device-cloud",
                title: "Ardia Device Intelligence Cloud",
                desc: "OEM-grade analytics, predictive maintenance and safety intelligence for devices.",
                tag: "For Device Makers"
              }
            ].map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="card group hover:border-ardia-accent/60 hover:-translate-y-1 transition"
              >
                <div className="text-[11px] uppercase tracking-[0.22em] text-ardia-accent mb-2">
                  {p.tag}
                </div>
                <h3 className="text-base font-semibold text-slate-50 mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-300 mb-3">{p.desc}</p>
                <span className="text-xs text-ardia-accent">Learn more →</span>
              </Link>
            ))}
          </div>
        </Section>

        {/* VISION / PHASES */}
        <Section
          eyebrow="Vision"
          title="AI now. Quantum-ready by design."
          kicker="Ardia Health is building toward a quantum-enabled healthcare OS – starting with real-world AI impact for providers and patients today."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {/* Phase 1 */}
            <div className="card relative overflow-hidden">
              <div className="absolute -top-6 -right-6 h-16 w-16 rounded-full bg-ardia-blue/20 border border-ardia-blue/50" />
              <div className="flex items-center gap-2 mb-2">
                <div className="h-6 w-6 rounded-full bg-ardia-blue flex items-center justify-center text-[11px] font-semibold text-white">
                  1
                </div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Phase 1 · AI in Production
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-300">
                Clinical automation, smart diagnostics and RPM intelligence
                deployed with pilot clinics and hospitals — solving burnout,
                slow workflows and reactive care.
              </p>
            </div>

            {/* Phase 2 */}
            <div className="card relative overflow-hidden">
              <div className="absolute -top-6 -right-4 h-16 w-16 rounded-full bg-ardia-accent/10 border border-ardia-accent/50" />
              <div className="flex items-center gap-2 mb-2">
                <div className="h-6 w-6 rounded-full bg-ardia-accent flex items-center justify-center text-[11px] font-semibold text-slate-950">
                  2
                </div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Phase 2 · Platform Scale
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-300">
                Expansion into precision health programs, enterprise health
                systems and device OEM intelligence — creating a unified data +
                AI layer across providers, devices and payers.
              </p>
            </div>

            {/* Phase 3 */}
            <div className="card relative overflow-hidden">
              <div className="absolute -top-7 -right-5 h-20 w-20 rounded-full bg-purple-500/15 border border-purple-400/60" />
              <div className="flex items-center gap-2 mb-2">
                <div className="h-6 w-6 rounded-full bg-purple-500 flex items-center justify-center text-[11px] font-semibold text-white">
                  3
                </div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Phase 3 · Quantum Acceleration
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-300">
                Quantum-accelerated simulations for drug discovery, genomics and
                complex optimization across health networks — built on the
                clinical and device data foundation from Phases 1 and 2.
              </p>
            </div>
          </div>

          <div className="mt-6 text-xs md:text-sm text-slate-300">
            Want the deeper technical story?{" "}
            <Link
              href="/architecture"
              className="text-ardia-accent underline underline-offset-4 hover:no-underline"
            >
              Explore the Ardia platform architecture →
            </Link>
          </div>
        </Section>
      </div>
    </>
  );
}
