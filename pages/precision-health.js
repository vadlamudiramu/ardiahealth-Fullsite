import { Section } from "@/components/Section";

export default function PrecisionHealth() {
  return (
    <div className="space-y-12">
      <section className="max-w-3xl">
        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-ardia-accent mb-2">
          Predictive & Personalized Care
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-3">
          Ardia Precision Health
        </h1>
        <p className="text-sm md:text-base text-slate-300">
          Ardia Precision Health uses longitudinal EMR data, labs, lifestyle data and device signals to create individualized risk profiles and health plans for every patient.
        </p>
      </section>

      <Section
        eyebrow="Key Capabilities"
        title="From population averages to individual trajectories"
      >
        <div className="grid gap-5 md:grid-cols-2">

          <div className="card">
            <h3 className="text-sm font-semibold text-slate-50 mb-1">
              Chronic Disease Risk Scoring
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              Predicts the likelihood of conditions like heart disease, diabetes, kidney disease or stroke over varying time horizons.
            </p>
          </div>

          <div className="card">
            <h3 className="text-sm font-semibold text-slate-50 mb-1">
              Personalized Health Plans
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              Generates tailored recommendations around activity, nutrition, sleep and preventative screenings aligned with guidelines.
            </p>
          </div>

          <div className="card">
            <h3 className="text-sm font-semibold text-slate-50 mb-1">
              Lab Trend Intelligence
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              Looks beyond single lab values to understand trajectories over months or years and flag concerning shifts.
            </p>
          </div>

          <div className="card">
            <h3 className="text-sm font-semibold text-slate-50 mb-1">
              Future Genomics & Quantum
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              Our roadmap includes genomics-aware models accelerated by quantum techniques for complex pharmacogenomic insights.
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
              <span>Earlier detection of patient risk before obvious symptoms.</span>
            </li>

            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ardia-accent" />
              <span>More targeted preventative outreach and education.</span>
            </li>

            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ardia-accent" />
              <span>Higher patient engagement with personalized insights rather than generic advice.</span>
            </li>

            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ardia-accent" />
              <span>A data foundation for future precision and genomic medicine programs.</span>
            </li>

          </ul>
        </div>
      </Section>

      <Section
        eyebrow="Get Started"
        title="Scale precision care beyond a single clinic."
      >
        <div className="card text-sm text-slate-300">
          <p className="mb-4">
            Ardia Precision Health can start as a focused program for a limited set of conditions and cohorts, then expand as your data maturity and care models grow. We help you prioritize where predictive insight will matter most first.
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
