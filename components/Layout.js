import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/clinical-ai", label: "Clinical AI" },
  { href: "/diagnostics", label: "Diagnostics" },
  { href: "/rpm", label: "RPM Intelligence" },
  { href: "/precision-health", label: "Precision Health" },
  { href: "/device-cloud", label: "Device Cloud" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col ardia-gradient">
      <header className="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-ardia-blue to-ardia-accent flex items-center justify-center text-white font-black text-xl shadow-lg shadow-ardia-blue/50">
              AI
            </div>
            <div className="leading-tight">
              <div className="font-semibold tracking-wide text-sm text-slate-200 uppercase">
                Ardia <span className="text-ardia-accent">Health</span>
              </div>
              <div className="text-[11px] text-slate-400">
                AI that heals healthcare
              </div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-white px-2 py-1 rounded-lg hover:bg-slate-800/60 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-10">
          {children}
        </div>
      </main>
      <footer className="border-t border-slate-800/80 bg-slate-950/80">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Ardia Health. All rights reserved.</p>
          <p>AI today. Quantum tomorrow.</p>
        </div>
      </footer>
    </div>
  );
}
