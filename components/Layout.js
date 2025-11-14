// components/Layout.js
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const solutionsItems = [
  { href: "/clinical-ai", label: "Clinical AI" },
  { href: "/diagnostics", label: "Diagnostics" },
  { href: "/rpm", label: "RPM Intelligence" },
  { href: "/precision-health", label: "Precision Health" },
  { href: "/device-cloud", label: "Device Cloud" },
  { href: "/architecture", label: "Architecture" },
];

export default function Layout({ children }) {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close Solutions Hub dropdown when clicking anywhere outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSolutionsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen flex flex-col ardia-gradient">
      {/* HEADER */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          {/* Brand block */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-11 w-11 md:h-12 md:w-12 rounded-2xl overflow-hidden shadow-lg shadow-ardia-blue/40 bg-slate-900">
              <Image
                src="/ardia-logo.png"
                alt="Ardia Health logo"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base md:text-lg font-semibold tracking-[0.18em] text-slate-50 uppercase">
                ARDIA <span className="text-ardia-accent">HEALTH</span>
              </span>
              <span className="text-[11px] md:text-xs text-ardia-accent">
                Human-centered care, amplified by AI &amp; quantum intelligence
              </span>
            </div>
          </Link>

          {/* NAVIGATION (visible on mobile + desktop) */}
          <nav className="flex flex-wrap justify-start md:justify-end items-center gap-x-3 gap-y-1 text-[11px] sm:text-xs md:text-sm">
            <Link
              href="/"
              className="text-slate-200 hover:text-white px-2 py-1 rounded-lg hover:bg-slate-800/60 transition whitespace-nowrap"
            >
              Home
            </Link>

            {/* Solutions Hub dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)} // desktop hover
            >
              <button
                type="button"
                onClick={() => setSolutionsOpen((prev) => !prev)} // mobile / desktop click
                className="inline-flex items-center gap-1 text-slate-200 hover:text-white px-3 py-1 rounded-lg hover:bg-slate-800/60 transition whitespace-nowrap"
              >
                <span>Solutions Hub</span>
                <span className="text-[10px] mt-[1px]">▾</span>
              </button>

              {solutionsOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-800 bg-slate-950/95 shadow-xl shadow-black/40 backdrop-blur z-20">
                  <ul className="py-2 text-xs">
                    {solutionsItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-slate-200 hover:bg-slate-800/80 hover:text-white whitespace-nowrap"
                          onClick={() => setSolutionsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Link
              href="/investors"
              className="text-slate-200 hover:text-white px-2 py-1 rounded-lg hover:bg-slate-800/60 transition whitespace-nowrap"
            >
              Investors
            </Link>

            <Link
              href="/security"
              className="text-slate-200 hover:text-white px-2 py-1 rounded-lg hover:bg-slate-800/60 transition whitespace-nowrap"
            >
              HIPAA &amp; Security
            </Link>

            <Link
              href="/about"
              className="text-slate-200 hover:text-white px-2 py-1 rounded-lg hover:bg-slate-800/60 transition whitespace-nowrap"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-slate-200 hover:text-white px-2 py-1 rounded-lg hover:bg-slate-800/60 transition whitespace-nowrap"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-10">{children}</div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 bg-slate-950/80">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Ardia Health. All rights reserved.</p>
          <p>AI today. Quantum tomorrow.</p>
        </div>
      </footer>
    </div>
  );
}
