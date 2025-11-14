// pages/architecture.js
import SEO from "../components/SEO";
import { Section } from "../components/Section";
import Image from "next/image";

export default function Architecture() {
  return (
    <>
      <SEO
        title="Platform Architecture"
        description="How Ardia Health's AI and quantum-ready platform connects providers, devices, data and models."
      />

      <div className="space-y-12">
        {/* HERO COPY */}
        <section className="max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-ardia-accent mb-2">
            Architecture
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-3">
            AI-first, quantum-ready healthcare architecture.
          </h1>
          <p className="text-sm md:text-base text-slate-300">
            Ardia Health sits between data sources and front-line care teams,
            transforming raw signals into clinical-grade insight using
            healthcare-tuned AI today and quantum acceleration tomorrow.
          </p>
        </section>

        {/* VISUAL + EXPLANATION */}
        <Section
          eyebrow="High-level flow"
          title="From data to intelligence to action."
        >
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.4fr)] items-center">
            {/* LEFT: TEXT SUMMARY */}
            <div>
              <p className="text-xs font-semibold text-slate-300 mb-3 uppercase tracking-[0.18em]">
                Three-part care intelligence flow
              </p>

              <ol className="space-y-4 text-sm text-slate-200">
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-ardia-blue text-[11px] font-semibold text-white">
                    1
                  </span>
                  <div>
                    <div className="font-semibold mb-1">
                      Data sources connect in.
                    </div>
                    <p className="text-slate-300 text-xs md:text-sm">
                      EHR / EMR, imaging systems, labs, claims, wearables and
                      patient apps stream data into Ardia through secure
                      connectors.
                    </p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-ardia-accent text-[11px] font-semibold text-slate-950">
                    2
                  </span>
                  <div>
                    <div className="font-semibold mb-1">
                      The Ardia Intelligence Core transforms it.
                    </div>
                    <p className="text-slate-300 text-xs md:text-sm">
                      Your logo at the center: ingestion, normalization,
                      encryption and healthcare-tuned AI engines (LLMs, vision
                      models, signal AI) convert raw signals into risk scores,
                      predictions and recommendations.
                    </p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-[11px] font-semibold text-white">
                    3
                  </span>
                  <div>
                    <div className="font-semibold mb-1">
                      Care experiences &amp; quantum deliver impact.
                    </div>
                    <p className="text-slate-300 text-xs md:text-sm">
                      Clinical AI, diagnostics copilots, RPM dashboards,
                      precision health programs and device cloud analytics
                      surface intelligence to clinicians today – while quantum
                      workloads plug into the same core for future acceleration.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* RIGHT: DIAGRAM */}
            <div className="relative">
              <div className="rounded-3xl border border-slate-800 bg-slate-950/80 shadow-xl shadow-black/40 p-3 md:p-4">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/ardia-architecture.png"
                    alt="Ardia Health architecture flow diagram"
                    fill
                    sizes="(min-width: 1024px) 540px, 100vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <p className="mt-3 text-[11px] text-slate-400 text-center">
                A visual view of how Ardia connects data sources, the
                intelligence core and care experiences.
              </p>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
