// pages/security.js
import SEO from "../components/SEO";
import { Section } from "../components/Section";

export default function Security() {
  return (
    <>
      <SEO
        title="HIPAA & Security"
        description="How Ardia Health thinks about privacy, security and regulatory alignment."
      />

      <div className="space-y-16">
        <section className="max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-ardia-accent mb-2">
            HIPAA &amp; Security
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-3">
            Designed for protected health information from day one.
          </h1>
          <p className="text-sm md:text-base text-slate-300">
            Ardia Health is being built with privacy, safety and regulatory
            alignment at the core of the architecture, not as a bolt-on. We aim
            to be a trustworthy intelligence layer that clinicians and patients
            can rely on.
          </p>
        </section>

        <Section eyebrow="Approach" title="Security and privacy principles.">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card">
              <h3 className="text-sm font-semibold text-slate-50 mb-2">
                PHI protection
              </h3>
              <p className="text-xs md:text-sm text-slate-300">
                Encryption in transit and at rest, strict role-based access,
                least-privilege design and comprehensive audit logging.
              </p>
            </div>
            <div className="card">
              <h3 className="text-sm font-semibold text-slate-50 mb-2">
                Data governance
              </h3>
              <p className="text-xs md:text-sm text-slate-300">
                Clear separation of environments, tenant isolation and
                fine-grained controls over which systems and teams can access
                which data.
              </p>
            </div>
            <div className="card">
              <h3 className="text-sm font-semibold text-slate-50 mb-2">
                Responsible AI
              </h3>
              <p className="text-xs md:text-sm text-slate-300">
                Human-in-the-loop workflows, transparent model behavior where
                possible and continuous monitoring for drift and safety.
              </p>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
