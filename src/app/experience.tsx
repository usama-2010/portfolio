"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { LiveDot } from "@/components/ui/LiveDot";

const EXPERIENCES = [
  {
    role: "Senior Full-Stack Engineer",
    company: "MentorMind LTD",
    period: "2025 — Now",
    note: "Platform architecture, multi-tenant RBAC, Gemini and AWS Bedrock LLM pipelines, IELTS modules, and 19-language delivery on Next.js 15 and AWS.",
    current: true,
  },
  {
    role: "Full Stack Engineer",
    company: "OneCart",
    period: "2025 — Feb 2026",
    note: "Technical direction, React Native app, Next.js seller dashboard, and real-time bidding backend (MERN, Stripe, WebSockets).",
  },
  {
    role: "Senior Full Stack Engineer",
    company: "InvoZone",
    period: "2022 — 2025",
    note: "10+ React Native apps, Next.js migrations, and CI/CD on Azure. Client-facing delivery.",
  },
  {
    role: "React Native Developer",
    company: "NETSOL Technologies",
    period: "2022",
    note: "Cross-platform apps, legacy migrations, and performance work.",
  },
];

export function Experience() {
  return (
    <section className="section-rule site-grid" id="experience">
      <SectionHeader
        title="Experience"
        subtitle="Engineering roles — product delivery and technical leadership."
      />

      <div>
        {EXPERIENCES.map(({ role, company, period, note, current }) => (
          <article
            key={`${company}-${period}`}
            className={`grid gap-3 border-t border-line py-6 transition-colors sm:gap-4 sm:py-8 lg:grid-cols-[minmax(0,1.2fr)_9.5rem_minmax(0,1fr)] lg:gap-8 lg:py-9 xl:grid-cols-[220px_140px_1fr] xl:gap-10 dark:border-line-dark ${
              current ? "border-l-2 border-l-accent pl-3 sm:pl-4 lg:pl-6" : ""
            }`}
          >
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <h3 className="font-display text-base font-bold text-ink sm:text-lg dark:text-ink-dark">
                  {role}
                </h3>
                {current && (
                  <span className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-widest text-accent sm:text-xs">
                    <LiveDot />
                    Now
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-accent sm:text-base">{company}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-ink-muted lg:hidden dark:text-ink-dark-muted">
                {period}
              </p>
            </div>
            <p className="hidden font-mono text-sm uppercase tracking-wider text-ink-muted lg:block dark:text-ink-dark-muted">
              {period}
            </p>
            <p className="min-w-0 text-sm leading-[1.75] text-ink-muted sm:text-base dark:text-ink-dark-muted">
              {note}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
