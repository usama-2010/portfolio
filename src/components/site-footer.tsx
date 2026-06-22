"use client";

export function SiteFooter() {
  return (
    <footer className="site-grid border-t border-line py-10 dark:border-line-dark">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="font-mono text-sm uppercase tracking-[0.15em] text-ink-muted dark:text-ink-dark-muted">
          © {new Date().getFullYear()} Usama Ahmed · London
        </p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-sm uppercase tracking-[0.15em] text-ink-muted transition-colors hover:text-accent dark:text-ink-dark-muted"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}

export default SiteFooter;
