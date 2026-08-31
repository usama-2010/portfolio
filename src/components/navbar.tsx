"use client";

import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ThemeToggle } from "@/components/theme-toggle";

const LINKS = [
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Stack", href: "#stack" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-line/80 bg-paper/90 backdrop-blur-xl dark:border-line-dark/80 dark:bg-paper-dark/90"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="site-grid flex min-h-[3.75rem] items-center justify-between gap-3 py-3 sm:min-h-[4.25rem] sm:gap-4 sm:py-4 md:min-h-[5rem] md:py-5">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            closeMenu();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex min-w-0 shrink-0 items-baseline gap-2 sm:gap-2.5"
        >
          <span className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl dark:text-ink-dark">
            UA
          </span>
          <span className="hidden truncate text-base font-medium text-ink-muted transition-colors group-hover:text-accent sm:inline dark:text-ink-dark-muted">
            Usama Ahmed
          </span>
        </a>

        <nav
          className="hidden items-center gap-6 lg:flex xl:gap-10"
          aria-label="Primary"
        >
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

        <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:gap-4">
          <ThemeToggle />

          <a
            href="mailto:ahmed.ua368@gmail.com"
            className="hidden items-center gap-2 rounded-full border border-line px-4 py-2.5 text-base font-medium text-ink transition-all hover:border-accent hover:text-accent sm:inline-flex md:px-5 dark:border-line-dark dark:text-ink-dark"
          >
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            Hire me
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent lg:hidden dark:border-line-dark dark:text-ink-dark"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-line transition-[max-height,opacity] duration-300 ease-premium lg:hidden dark:border-line-dark ${
          menuOpen
            ? "max-h-[min(32rem,calc(100dvh-4rem))] opacity-100"
            : "max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav
          className="site-grid flex flex-col gap-1 py-4 sm:py-5"
          aria-label="Mobile primary"
        >
          {LINKS.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              onClick={closeMenu}
              className="border-b border-line/60 py-3.5 font-display text-2xl font-bold tracking-tight text-ink transition-colors hover:text-accent dark:border-line-dark/60 dark:text-ink-dark"
            >
              {name}
            </a>
          ))}

          <a
            href="mailto:ahmed.ua368@gmail.com"
            onClick={closeMenu}
            className="mt-3 inline-flex items-center gap-2 rounded-full border border-line px-4 py-3 font-medium text-ink transition-colors hover:border-accent hover:text-accent dark:border-line-dark dark:text-ink-dark"
          >
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            Hire me
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
