"use client";

export function SiteFooter() {
  return (
    <footer className="site-grid border-t border-line py-8 sm:py-10 dark:border-line-dark">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-6">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted sm:text-sm dark:text-ink-dark-muted">
          © {new Date().getFullYear()} Usama Ahmed · London
        </p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-muted transition-colors hover:border-accent hover:text-accent dark:border-line-dark dark:text-ink-dark-muted sm:text-sm"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}

export default SiteFooter;
