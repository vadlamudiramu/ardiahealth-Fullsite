// components/Layout.js
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const dropdownItems = [
  { href: "/clinical-ai", label: "Clinical AI" },
  { href: "/diagnostics", label: "Diagnostics" },
  { href: "/rpm", label: "RPM Intelligence" },
  { href: "/precision-health", label: "Precision Health" },
  { href: "/device-cloud", label: "Device Cloud" },
  { href: "/architecture", label: "Architecture" },
  { href: "/investors", label: "Investors" },
  { href: "/security", label: "HIPAA & Security" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking anywhere outside Solutions Hub area
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col ardia-gradient">
      {/* ================= HEADER ================= */}
      <header className="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-6">
          {/* BRAND */}
          <Link href="/" className="flex items-center gap-4">
            <div className="relative h-12 w-12 md:h-14 md:w-14 rounded-2xl overflow-hidden shadow-lg shadow-ardia-blue/40 bg-slate-900">
              <Image
                src="/ardia-logo.png"
                alt="Ardia Health logo"
                fill
                sizes="56px"
                className="object-contain"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-base md:text-lg font-semibold tracking-[0.18em] text-slate-50 uppercase">
                ARDIA <span className="text-ardia-accent">HEALTH</span>
              </span>
              <span className="text-[11px] md:text-xs text-ardia-accent whitespace-nowrap">
                Human-centered care, amplified by AI &amp; quantum intelligence
              </span>
            </div>
          </Link>

          {/* ================= NAVIGATION ================= */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {/* HOME */}
            <Link
              href="/"
              className="text-slate-200 hover:text-white px-2 py-1 rounded-lg hover:bg-slate-800/60 transition whitespace-nowrap"
            >
              Home
            </Link>

            {/* SOLUTIONS HUB DROPDOWN */}
            <div
              ref={menuRef}
              className="relative"
              onMouseEnter={() => setMenuOpen(true)} // hover opens
            >
              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)} // click toggles
                className="inline-flex items-center gap-1 text-slate-200 hover:text-white px-3 py-1 rounded-lg hover:bg-slate-800/60 transition whitespace-nowrap"
              >
                <span>Solutions Hub</span>
                <span className="text-xs mt-[2px]">▾</span>
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-800 bg-slate-950/95 shadow-xl shadow-black/40 backdrop-blur z-20">
                  <ul className="py-2 text-xs">
                    {dropdownItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-slate-200 hover:bg-slate-800/80 hover:text-white whitespace-nowrap"
                          onClick={() => setMenuOpen(false)} // selecting closes
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-10">{children}</div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-800/80 bg-slate-950/80">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Ardia Health. All rights reserved.</p>
          <p>AI today. Quantum tomorrow.</p>
        </div>
      </footer>
    </div>
  );
}
