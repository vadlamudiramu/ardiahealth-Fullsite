import { Section } from "../components/Section";

export default function ClinicalAI() {
  return (
    <div className="space-y-12">
      <section className="max-w-3xl">
        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-ardia-accent mb-2">
          Clinical Automation Suite
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-3">
          Ardia Clinical AI
        </h1>
        <p className="text-sm md:text-base text-slate-300">
          Ardia Clinical AI removes the administrative weight from clinicians’ shoulders. From real-time AI scribing to ICD-10 and CPT coding assistance, it turns every patient encounter into clean, structured, EMR-ready documentation – without extra clicks.
        </p>
      </section>

      <Section
        eyebrow="Key Capabilities"
        title="Automate the work between you and your patient"
      >
        <div className="grid gap-5 md:grid-cols-2">

          <div className="card">
            <h3 className="text-sm font-semibold text-slate-50 mb-1">
              AI Scribe
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              Transforms conversations into accurate, structured medical notes using clinical-grade language models tuned for healthcare.
            </p>
          </div>

          <div className="card">
            <h3 className="text-sm font-semibold text-slate-50 mb-1">
              Auto-Charting
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              Automatically organizes history, exam, assessment and plan into SOAP-style sections that drop into your EHR.
            </p>
          </div>

          <div className="card">
            <h3 className="text-sm font-semibold text-slate-50 mb-1">
              ICD-10 & CPT Suggestions
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              Recommends likely codes based on documentation to reduce under-coding, over-coding, and claim denials.
            </p>
          </div>

          <div className="card">
            <h3 className="text-sm font-semibold text-slate-50 mb-1">
              Prior Authorization Automation
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              Extracts payor requirements, populates forms, and attaches supporting documentation to accelerate approvals.
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
              <span>Recover 2–3 hours per clinician per day from documentation.</span>
            </li>

            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ardia-accent" />
              <span>Reduce claim errors and denials linked to incomplete notes or incorrect codes.</span>
            </li>

            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ardia-accent" />
              <span>Increase patient face-time while preserving rich, structured clinical data.</span>
            </li>

            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ardia-accent" />
              <span>Lower provider burnout and improve staff retention.</span>
            </li>

          </ul>
        </div>
      </Section>

      <Section
        eyebrow="Get Started"
        title="Ready to unburden your clinicians?"
      >
        <div className="card text-sm text-slate-300">
          <p className="mb-4">
            Whether you are a single-site clinic or a multi-hospital system, Ardia Clinical AI can be deployed in phases, starting with a small pilot group and expanding as results are proven. Let’s design an automation rollout that matches your workflows and EHR environment.
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
