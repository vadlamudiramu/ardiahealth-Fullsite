import { Section } from "../components/Section";

export default function Diagnostics() {
  return (
    <div className="space-y-12">
      <section className="max-w-3xl">
        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-ardia-accent mb-2">
          Smart Diagnostics
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-3">
          Ardia Smart Diagnostics
        </h1>
        <p className="text-sm md:text-base text-slate-300">
          Ardia Smart Diagnostics is an assistive layer for radiologists, cardiologists, ophthalmologists, dermatologists, and pathologists. It does not replace clinical judgment – it accelerates it, surfaces subtle findings, and standardizes reporting quality.
        </p>
      </section>

      <Section
        eyebrow="Key Capabilities"
        title="Multimodal AI across specialties"
      >
        <div className="grid gap-5 md:grid-cols-2">

          <div className="card">
            <h3 className="text-sm font-semibold text-slate-50 mb-1">
              Imaging Support
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              Computer vision models help flag nodules, fractures, hemorrhages and other anomalies across X-ray, CT, MRI and ultrasound.
            </p>
          </div>

          <div className="card">
            <h3 className="text-sm font-semibold text-slate-50 mb-1">
              Cardiology AI
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              Analyzes ECG and echo data to detect arrhythmias, structural abnormalities, and early risk signals in longitudinal patient data.
            </p>
          </div>

          <div className="card">
            <h3 className="text-sm font-semibold text-slate-50 mb-1">
              Dermatology & Ophthalmology
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              Assists with risk scoring for suspicious lesions and retinal changes, supporting faster referrals and follow-up planning.
            </p>
          </div>

          <div className="card">
            <h3 className="text-sm font-semibold text-slate-50 mb-1">
              Structured Diagnostic Summaries
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              Transforms raw findings into structured, shareable summaries that plug into reports, referrals and care plans.
            </p>
          </div>

        </div>
      </Section>

      <Section
        eyebrow="Outcomes"
        title="What this unlocks"
      >
        <div className="card">
          <ul className="space-y-2 text-sm text-slate-300">

            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ardia-accent" />
              <span>Shorter turnaround times for high-volume diagnostic queues.</span>
            </li>

            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ardia-accent" />
              <span>Improved sensitivity for subtle and early findings.</span>
            </li>

            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ardia-accent" />
              <span>Greater consistency of diagnostic quality across teams and sites.</span>
            </li>

            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ardia-accent" />
              <span>Better collaboration between specialists and primary care.</span>
            </li>

          </ul>
        </div>
      </Section>

      <Section
        eyebrow="Get Started"
        title="Co-pilot, not autopilot, for diagnostics."
      >
        <div className="card text-sm text-slate-300">
          <p className="mb-4">
            Ardia Smart Diagnostics is designed as an assistive tool that sits beside your clinicians – not above them. We work with your radiology, cardiology and specialty leads to define safe workflows, QA processes, and clinical guardrails.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-ardia-blue px-4 py-2 text-sm font-medium text-white shadow-lg shadow-ardia-blue/40 hover:bg-blue-500 transition"
          >
            Contact the Ardia team
          </a>
        </div>
      </Section>
    </div>
  );
}
