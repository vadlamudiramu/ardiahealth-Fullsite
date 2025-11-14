// pages/about.js
import SEO from "../components/SEO";
import { Section } from "../components/Section";

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="The story and mission behind Ardia Health."
      />

      <div className="space-y-16">
        <section className="max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-ardia-accent mb-2">
            About
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-3">
            Human-centered care, amplified by AI and quantum intelligence.
          </h1>
          <p className="text-sm md:text-base text-slate-300">
            Ardia Health was founded to build the intelligence layer that
            healthcare has been missing – one that respects clinicians&apos;
            time, protects patient trust and prepares systems for the next wave
            of computing.
          </p>
        </section>

        <Section
          eyebrow="Mission"
          title="Empower every care team with intelligent, predictive and seamless tools."
        >
          <p className="text-sm md:text-base text-slate-300">
            We focus on delivering practical AI that removes friction today:
            documentation burden, reactive workflows and disconnected data. Over
            time, we want to unlock entirely new categories of precision
            medicine and simulation by preparing organizations for quantum-ready
            infrastructure.
          </p>
        </Section>
      </div>
    </>
  );
}
