import { Section } from "@/components/Section";

export default function RPM() {
  return (
    <div className="space-y-12">
      <section className="max-w-3xl">
        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-ardia-accent mb-2">
          Remote Patient Monitoring
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-3">
          Ardia RPM Intelligence
        </h1>
        <p className="text-sm md:text-base text-slate-300">
          Ardia RPM Intelligence turns data from wearables and medical devices into a continuous stream of clinically meaningful insights. It enables care teams to move from reactive check-ins to proactive outreach.
        </p>
      </section>

      <Section
        eyebrow="Key Capabilities"
        title="From raw streams to real-time insight"
      >
        <div className="grid gap-5 md:grid-cols-2">

          <div className="card">
            <h3 className="text-sm font-semibold text-slate-50 mb-1">
              Device & Wearable Ingestion
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              Connects to consumer wearables and clinical-grade devices through secure APIs, normalizing data across vendors.
            </p>
          </div>

          <div className="card">
            <h3 className="text-sm font-semibold text-slate-50 mb-1">
              Real-Time Alerting
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              Surfaces anomalous vital trends such as tachycardia, hypoglycemia, severe hypertension or hypoxia, with tunable thresholds.
            </p>
          </div>

          <div className="card">
            <h3 className="text-sm font-semibold text-slate-50 mb-1">
              Predictive Risk Models
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              Identifies patterns that often precede emergency events, enabling outreach hours or days earlier than usual care.
            </p>
          </div>

          <div className="card">
            <h3 className="text-sm font-semibold text-slate-50 mb-1">
              Care Team Dashboards
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              Gives clinicians and care managers a prioritized view of which patients need attention now – and why.
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
              <span>Fewer avoidable ED visits and hospitalizations.</span>
            </li>

            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ardia-accent" />
              <span>Higher enrollment and engagement in RPM programs.</span>
            </li>

            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ardia-accent" />
              <span>Stronger documentation of clinical interventions linked to device data.</span>
            </li>

            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ardia-accent" />
              <span>More scalable chronic disease management with the same staff.</span>
            </li>

          </ul>
        </div>
      </Section>

      <Section
        eyebrow="Get Started"
        title="Turn monitoring into meaningful action."
      >
        <div className="card text-sm text-slate-300">
          <p className="mb-4">
            If you already run RPM programs or are planning to launch them, Ardia can plug into your existing device stack and care pathways. We partner with you to design alert logic and escalation rules that match your reality, not a generic template.
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
