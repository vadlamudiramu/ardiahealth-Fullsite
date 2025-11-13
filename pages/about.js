import { Section } from "@/components/Section";

export default function About() {
  return (
    <div className="space-y-12">
      <section className="max-w-3xl">
        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-ardia-accent mb-2">
          About Ardia Health
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-3">
          AI that heals healthcare. Quantum in sight.
        </h1>
        <p className="text-sm md:text-base text-slate-300">
          Ardia Health was founded with a simple belief: the people who care
          for patients should spend their energy on medicine, not on manual
          clicks, copy-paste, or fighting with fragmented systems. We are
          building an intelligence layer that quietly unifies workflows,
          diagnostics, and device data so care teams can do their best work.
        </p>
      </section>

      <Section
        eyebrow="Mission"
        title="Empower every patient and provider with intelligent, predictive and seamless care."
      >
        <div className="card text-sm text-slate-300 space-y-3">
          <p>
            We focus on delivering practical AI that removes friction today –
            clinical automation, smart diagnostics, remote monitoring and
            precision health – while designing our platform for a quantum
            future in which complex biologic and operational questions can be
            simulated at scale.
          </p>
          <p>
            Our north star is simple: better outcomes, less burnout, and a
            healthcare system that feels coordinated rather than chaotic.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Founder"
        title="Led by engineering and obsessed with care delivery."
      >
        <div className="card text-sm text-slate-300 space-y-3">
          <p>
            Ardia Health is led by founder Ram Vadlamudi, who brings years of
            experience in automation, large-scale testing platforms, and
            applied AI systems. Having seen the power of intelligent tooling
            in other complex industries, he is now focused on bringing that
            same leverage to healthcare – where the stakes are human lives.
          </p>
          <p>
            We are assembling a cross-functional team across clinical
            medicine, AI/ML, security and regulatory to ensure the platform
            is safe, compliant and truly useful to frontline teams.
          </p>
        </div>
      </Section>
    </div>
  );
}
