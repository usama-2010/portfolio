"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";

const CAPABILITIES = [
  {
    area: "Web",
    detail: "Next.js, React, TypeScript, SSR, edge deployment, and GraphQL APIs",
  },
  {
    area: "Mobile",
    detail: "React Native, Expo, offline-first architecture, WebRTC, and biometric auth",
  },
  {
    area: "Backend",
    detail: "Node.js, Express, PostgreSQL, MongoDB, Redis, DynamoDB, and REST/GraphQL",
  },
  {
    area: "Lead",
    detail: "Architecture, code review, team mentorship, and CI/CD delivery",
  },
];

const STACK_GROUPS = [
  {
    label: "Languages & Frameworks",
    items: ["TypeScript", "JavaScript", "React", "Next.js 15", "Node.js", "Express"],
  },
  {
    label: "Mobile",
    items: ["React Native", "Expo", "Redux", "WebRTC", "Socket.io"],
  },
  {
    label: "Data & Storage",
    items: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis", "GraphQL"],
  },
  {
    label: "AWS",
    items: [
      "EC2",
      "S3",
      "Lambda",
      "RDS",
      "DynamoDB",
      "Cognito",
      "API Gateway",
      "CloudFront",
      "SES",
      "Bedrock",
    ],
  },
  {
    label: "AI & LLMs",
    items: ["Google Gemini", "AWS Bedrock", "Gemini API", "Azure Speech", "Azure DevOps", "Azure Pipelines"],
  },
  {
    label: "DevOps & Integrations",
    items: ["Docker", "Vercel", "GitHub Actions", "Stripe", "CI/CD"],
  },
];

export function Skills() {
  return (
    <section className="section-rule site-grid" id="stack">
      <SectionHeader
        title="Capabilities"
        subtitle="Five years across startups and agencies — shipping products end to end."
      />

      <div className="grid gap-px bg-line dark:bg-line-dark md:grid-cols-2 lg:grid-cols-4">
        {CAPABILITIES.map(({ area, detail }, i) => (
          <div
            key={area}
            className="group bg-paper p-6 transition-colors duration-300 hover:bg-paper-elevated dark:bg-paper-dark dark:hover:bg-paper-elevated-dark md:p-8"
          >
            <span className="font-mono text-xs text-ink-muted/60 dark:text-ink-dark-muted/60">
              0{i + 1}
            </span>
            <p className="mt-3 font-display text-xl font-bold text-ink transition-colors group-hover:text-accent dark:text-ink-dark">
              {area}
            </p>
            <p className="mt-2 text-base leading-relaxed text-ink-muted dark:text-ink-dark-muted">
              {detail}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 space-y-8 border-t border-line pt-8 dark:border-line-dark">
        {STACK_GROUPS.map(({ label, items }) => (
          <div key={label}>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted dark:text-ink-dark-muted">
              {label}
            </p>
            <div className="flex flex-wrap gap-2">
              {items.map((tech) => (
                <span
                  key={tech}
                  className="border border-line px-3 py-1.5 font-mono text-base text-ink-muted transition-colors hover:border-accent/40 hover:text-ink dark:border-line-dark dark:text-ink-dark-muted dark:hover:text-ink-dark"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
