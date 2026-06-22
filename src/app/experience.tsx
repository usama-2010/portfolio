"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";

const EXPERIENCES = [
  {
    role: "Tech Lead",
    company: "MentorMind LTD",
    period: "2025 — Now",
    note: "Platform architecture, multi-tenant RBAC, Gemini and AWS Bedrock LLM pipelines, IELTS modules, and 19-language delivery on Next.js 15 and AWS.",
    current: true,
  },
  {
    role: "Founding Engineer",
    company: "OneCart",
    period: "2025 — 2026",
    note: "Technical direction, React Native app, Next.js seller dashboard, and real-time bidding backend (MERN, Stripe, WebSockets).",
    // current: true,
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
            className={`grid gap-4 border-t border-line py-8 transition-colors md:grid-cols-[220px_120px_1fr] md:gap-10 md:py-9 dark:border-line-dark ${
              current ? "border-l-2 border-l-accent pl-4 md:pl-6" : ""
            }`}
          >
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-lg font-bold text-ink dark:text-ink-dark">
                  {role}
                </h3>
                {current && (
                  <span className="font-mono text-xs uppercase tracking-widest text-accent">
                    Now
                  </span>
                )}
              </div>
              <p className="mt-1 text-base text-accent">{company}</p>
            </div>
            <p className="font-mono text-base uppercase tracking-wider text-ink-muted dark:text-ink-dark-muted">
              {period}
            </p>
            <p className="text-base leading-[1.75] text-ink-muted dark:text-ink-dark-muted">
              {note}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
