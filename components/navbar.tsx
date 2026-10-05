"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE_NAME, WHATSAPP_URL } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);

    // Run once so a refresh mid-page does not flash the transparent state.
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-sand/95 shadow-[0_1px_0_0_rgba(42,36,32,0.08)] backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-6 sm:px-10">
        <Link
          href="/"
          className={`font-serif text-xl tracking-tight transition-colors duration-300 ${
            solid ? "text-ink" : "text-white"
          }`}
        >
          {SITE_NAME}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  solid
                    ? "text-ink-soft hover:text-terracotta"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
              solid
                ? "border-terracotta/30 text-terracotta hover:bg-terracotta hover:text-white"
                : "border-white/60 text-white hover:bg-white hover:text-ink"
            }`}
          >
            <span className="size-2 rounded-full bg-whatsapp" aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className={`-mr-2 p-2 transition-colors duration-300 md:hidden ${
            solid ? "text-ink" : "text-white"
          }`}
        >
          <span className="sr-only">Toggle navigation</span>
          <span aria-hidden="true" className="relative block size-5">
            <span
              className={`absolute inset-x-0 top-0.5 h-0.5 rounded-full bg-current transition-transform duration-300 ease-out ${
                menuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-current transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute inset-x-0 bottom-0.5 h-0.5 rounded-full bg-current transition-transform duration-300 ease-out ${
                menuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="border-t border-ink/10 bg-sand px-6 pb-6 pt-2 md:hidden sm:px-10"
      >
        <ul className="flex flex-col">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-ink/5 py-3.5 text-base font-medium text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-terracotta/30 px-5 py-2.5 text-sm font-semibold text-terracotta"
        >
          <span className="size-2 rounded-full bg-whatsapp" aria-hidden="true" />
          Chat on WhatsApp
        </a>
      </div>
    </header>
  );
}
