"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/apps", label: "Apps" },
  { href: "/teachers", label: "Teachers" },
  { href: "/parents", label: "Parents" },
  { href: "/about", label: "About" },
];

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <>
      {/* Desktop navigation — hidden on mobile */}
      <nav aria-label="Main navigation" className="hidden md:block">
        <ul className="flex items-center gap-10 list-none m-0 p-0">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-white text-sm font-semibold uppercase tracking-widest hover:text-[#1a2f4a] transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hamburger button — visible on mobile only */}
      <button
        className="md:hidden flex items-center justify-center w-11 h-11 text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6 6l12 12M6 18L18 6"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {/* Mobile dropdown — drops below the header row */}
      {isOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 px-8 py-2 z-50 shadow-md"
        >
          <ul className="flex flex-col list-none m-0 p-0">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={close}
                  className="block py-4 text-[#374151] text-sm font-semibold uppercase tracking-widest hover:text-[#00aeef] transition-colors duration-200 border-b border-gray-100 last:border-0"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
