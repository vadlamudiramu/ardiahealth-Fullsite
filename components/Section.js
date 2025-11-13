export function Section({ eyebrow, title, kicker, children }) {
  return (
    <section className="mb-14">
      <div className="max-w-3xl mb-6">
        {eyebrow && (
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-ardia-accent mb-2">
            {eyebrow}
          </div>
        )}
        {title && (
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-50 mb-2">
            {title}
          </h2>
        )}
        {kicker && (
          <p className="text-sm md:text-base text-slate-300">
            {kicker}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
