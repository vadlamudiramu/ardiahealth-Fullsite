// pages/contact.js
import SEO from "../components/SEO";
import { Section } from "../components/Section";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Contact() {
  const router = useRouter();
  const typeFromQuery = router.query.type || "";
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Thanks — your message has been recorded.");

    // If you have an API route, you can wire it here later.
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(... ) })
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with the Ardia Health team."
      />

      <div className="space-y-12 max-w-3xl">
        <section>
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-ardia-accent mb-2">
            Contact
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-3">
            Let&apos;s talk.
          </h1>
          <p className="text-sm md:text-base text-slate-300">
            Whether you&apos;re a provider, device maker, partner or investor,
            we&apos;d love to hear from you. Share a bit about what you&apos;re
            working on and we&apos;ll follow up.
          </p>
        </section>

        <Section eyebrow="Message" title="Send us a note.">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none focus:border-ardia-accent"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none focus:border-ardia-accent"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1">
                I&apos;m reaching out as a
              </label>
              <select
                name="role"
                defaultValue={typeFromQuery === "investor" ? "Investor" : ""}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none focus:border-ardia-accent"
              >
                <option value="">Select one</option>
                <option value="Provider">Provider / health system</option>
                <option value="Device">Device / OEM</option>
                <option value="Payer">Payer / plan</option>
                <option value="Investor">Investor</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1">
                How can we help?
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none focus:border-ardia-accent"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-ardia-blue px-4 py-2 text-sm font-medium text-white shadow-lg shadow-ardia-blue/40 hover:bg-blue-500 transition"
            >
              Submit
            </button>

            {status && (
              <p className="text-xs text-ardia-accent mt-2">{status}</p>
            )}
          </form>
        </Section>
      </div>
    </>
  );
}
