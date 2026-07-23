"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/call-support", label: "Call Support" },
  { href: "/insurance-verification", label: "Verification" },
  { href: "/rcm-billing", label: "RCM & Billing" },
  { href: "/admin-support", label: "Admin" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      {/* Top contact bar */}
      <div className="hidden bg-oxford text-xs text-white/70 lg:block">
        <div className="top-contact-bar mx-auto max-w-7xl px-6 py-2">

          {/* Email — left side */}
          <a
            href="https://hiredbillingsupport.com/contact"
            className="top-contact-link justify-self-start font-bold"
            aria-label="Email HBS Dental"
          >
            <svg
              className="top-contact-icon"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>

            <span>hello@hiredbillingsupport.com</span>
          </a>

          {/* Center text */}
          <span className="justify-self-center uppercase tracking-widest text-white/40">
            {/* HIPAA Compliant · BAA on Every Engagement */}
          </span>

          {/* Phone — right side */}
          <a
            href="tel:+13213211740"
            className="top-contact-link phone-link justify-self-end"
            aria-label="Call HBS Dental at +1 321 321 1740"
          >
            <svg
              className="phone-ring-icon"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92Z" />
            </svg>

            <span>+1 321 321-1740</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[68px]">
        <Link href="/" className="flex flex-shrink-0 items-center gap-2">
          <span className="font-display text-2xl font-extrabold text-oxford lg:text-[28px]">
            HBS<span className="text-royal">.</span>
          </span>

          <span className="hidden text-sm font-medium text-silver sm:block">
            Dental
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded px-3.5 py-2 text-[13px] font-semibold uppercase tracking-wide transition-colors ${
                pathname === link.href
                  ? "bg-royal/5 text-royal"
                  : "text-oxford/60 hover:text-royal"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://hiredbillingsupport.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient hidden !px-5 !py-2.5 !text-xs sm:inline-flex"
          >
            Book Appointment

            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="p-2 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {open && (
        <nav className="space-y-1 border-t border-light-gray bg-white px-4 py-3 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block rounded px-4 py-3 text-sm font-semibold uppercase tracking-wide ${
                pathname === link.href
                  ? "bg-royal/5 text-royal"
                  : "text-oxford/60"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="https://hiredbillingsupport.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient mt-3 w-full justify-center !text-xs"
          >
            Book Appointment
          </a>
        </nav>
      )}
    </header>
  );
}