import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDownIcon, MenuIcon, XIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const menuRef = useRef(null);

  const dropdownItems = [
    { label: "Clinical AI", href: "/clinical-ai" },
    { label: "Diagnostics", href: "/diagnostics" },
    { label: "RPM Intelligence", href: "/rpm" },
    { label: "Precision Health", href: "/precision-health" },
    { label: "Device Cloud", href: "/device-cloud" }
  ];

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setSolutionsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <header className="fixed top-0 left-0 w-full z-50 bg-[#051937]/90 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-3 md:px-8">

          <Link href="/">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Ardia Health" className="w-10 h-10 md:w-12 md:h-12" />
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-lg md:text-xl">
                  ARDIA <span className="text-[#47e0c1]">HEALTH</span>
                </span>
                <span className="hidden md:block text-xs text-[#47e0c1]">
                  Human-centered care, amplified by AI & quantum intelligence
                </span>
              </div>
            </div>
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            {menuOpen ? (
              <XIcon className="w-7 h-7" />
            ) : (
              <MenuIcon className="w-7 h-7" />
            )}
          </button>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/90">
            <Link href="/">Home</Link>

            <div className="relative group" ref={menuRef}>
              <button className="flex items-center gap-1">
                Solutions Hub
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              <div className="absolute hidden group-hover:block top-6 right-0 bg-[#0a1d3a] p-4 rounded-xl border border-white/10 shadow-xl">
                <div className="flex flex-col gap-2 text-sm">
                  {dropdownItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/investors">Investors</Link>
            <Link href="/security">HIPAA & Security</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        <div
          className={`md:hidden fixed top-0 right-0 h-full w-72 bg-[#061a35] z-50 transform transition-transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col p-6 text-white text-lg gap-6">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <div>
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex items-center justify-between w-full"
              >
                <span>Solutions Hub</span>
                <ChevronDownIcon
                  className={`w-5 h-5 transition ${
                    solutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {solutionsOpen && (
                <div className="ml-4 mt-3 flex flex-col gap-3 text-base text-white/80">
                  {dropdownItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setMenuOpen(false);
                        setSolutionsOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/investors" onClick={() => setMenuOpen(false)}>
              Investors
            </Link>
            <Link href="/security" onClick={() => setMenuOpen(false)}>
              HIPAA & Security
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
