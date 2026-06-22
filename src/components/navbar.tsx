"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Stack", href: "#stack" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/80 bg-paper/90 backdrop-blur-xl dark:border-line-dark/80 dark:bg-paper-dark/90"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="site-grid flex min-h-[4.25rem] items-center justify-between gap-4 py-4 md:min-h-[5rem] md:py-5">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex shrink-0 items-baseline gap-2.5"
        >
          <span className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl dark:text-ink-dark">
            UA
          </span>
          <span className="hidden text-base font-medium text-ink-muted transition-colors group-hover:text-accent md:inline dark:text-ink-dark-muted">
            Usama Ahmed
          </span>
        </a>

        <nav className="flex items-center gap-5 sm:gap-8 md:gap-10">
          {LINKS.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="text-base font-medium tracking-wide text-ink-muted transition-colors hover:text-ink dark:text-ink-dark-muted dark:hover:text-ink-dark"
            >
              {name}
            </a>
          ))}
        </nav>

        <a
          href="mailto:ahmed.ua368@gmail.com"
          className="inline-flex shrink-0 items-center gap-2 border border-line px-4 py-2.5 text-base font-medium text-ink transition-all hover:border-accent hover:text-accent sm:px-5 dark:border-line-dark dark:text-ink-dark"
        >
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          <span className="hidden sm:inline">Hire me</span>
          <span className="sm:hidden">Email</span>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
