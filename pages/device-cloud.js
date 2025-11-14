import { Section } from "../components/Section";

export default function DeviceCloud() {
  return (
    <div className="space-y-12">
      <section className="max-w-3xl">
        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-ardia-accent mb-2">
          For Medical Device OEMs
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-3">
          Ardia Device Intelligence Cloud
        </h1>
        <p className="text-sm md:text-base text-slate-300">
          Ardia Device Intelligence Cloud is an AI analytics and safety layer built for device manufacturers. It helps transform hardware into continuously learning, continuously improving platforms.
        </p>
      </section>

      <Section
        eyebrow="Key Capabilities"
        title="Intelligence baked into every device lifecycle"
      >
        <div className="grid gap-5 md:grid-cols-2">

          <div className="card">
            <h3 className="text-sm font-semibold text-slate-50 mb-1">
              Performance Analytics
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              Aggregates anonymized device telemetry to understand how products behave in the real world, not just in the lab.
            </p>
          </div>

          <div className="card">
            <h3 className="text-sm font-semibold text-slate-50 mb-1">
              Predictive Maintenance & Reliability
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              Identifies early indicators of component failure, battery degradation or calibration drift to guide proactive service.
            </p>
          </div>

          <div className="card">
            <h3 className="text-sm font-semibold text-slate-50 mb-1">
              Patient Safety Monitoring
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              Surfaces usage patterns and measurement anomalies associated with patient risk, supporting post-market surveillance.
            </p>
          </div>

          <div className="card">
            <h3 className="text-sm font-semibold text-slate-50 mb-1">
              OEM APIs & SDKs
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              Provides a secure, well-documented interface for device firms to integrate Ardia intelligence with minimal engineering lift.
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
              <span>Faster feedback loops between device deployment and product improvement.</span>
            </li>

            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ardia-accent" />
              <span>New AI-powered features that differentiate your devices in a competitive market.</span>
            </li>

            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ardia-accent" />
              <span>Stronger safety, compliance and post-market surveillance posture.</span>
            </li>

            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ardia-accent" />
              <span>Recurring revenue opportunities built on analytics, not just hardware.</span>
            </li>

          </ul>
        </div>
      </Section>

      <Section
        eyebrow="Get Started"
        title="Build the AI layer for your device portfolio."
      >
        <div className="card text-sm text-slate-300">
          <p className="mb-4">
            Whether you build wearables, at-home diagnostics, clinical monitors or implantables, Ardia can help you define an intelligence roadmap that aligns with your regulatory, commercial and technical realities.
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
