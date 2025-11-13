export default function Contact() {
  return (
    <div className="max-w-xl space-y-6">
      <header>
        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-ardia-accent mb-2">
          Contact
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-3">
          Talk to the Ardia Health team.
        </h1>
        <p className="text-sm md:text-base text-slate-300">
          Whether you are a clinic, hospital, device company, payer or
          potential partner, we would love to hear from you. Share a bit
          about what you&apos;re exploring and we&apos;ll follow up with
          next steps.
        </p>
      </header>

      <form
        className="card space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submission can be wired to your backend or a service like Formspree / Vercel Functions.");
        }}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-200">
              Name
            </label>
            <input
              type="text"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-ardia-accent"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-200">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-ardia-accent"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-200">
            Organization
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-ardia-accent"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-200">
            How can we help?
          </label>
          <textarea
            rows={4}
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-ardia-accent"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-ardia-blue px-4 py-2 text-sm font-medium text-white shadow-lg shadow-ardia-blue/40 hover:bg-blue-500 transition"
        >
          Submit
        </button>

        <p className="text-[11px] text-slate-400">
          This form currently shows a demo alert on submit. In production you
          can wire it to an email service, CRM, or Vercel Serverless Function.
        </p>
      </form>
    </div>
  );
}
