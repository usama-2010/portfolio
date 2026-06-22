"use client";

import Image, { StaticImageData } from "next/image";
import Connect from "../../public/projects/connect.png";
import Stanbik from "../../public/projects/stanbik.png";
import Clicknbuy from "../../public/projects/clicknbuy.png";
import Plantea from "../../public/projects/Plantea-Project.png";
import ReelBrain from "../../public/projects/ReelBrain.png";
import HCP from "../../public/projects/HCP.png";
import MentorMind from "../../public/projects/mentormind.png";
import OneCart from "../../public/projects/onecart.png";
import { useState } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Project = {
  img: StaticImageData;
  title: string;
  type: string;
  summary: string;
  highlights?: string[];
  techStack: string[];
  liveUrl?: string;
  youtubeId?: string;
  span: "large" | "wide" | "normal";
  current?: boolean;
  role?: string;
};

type WorkMetric = { value: string; label: string };
type WorkDomain = { label: string; items: string[] };

type CurrentWorkProject = Omit<Project, "span"> & {
  metrics?: WorkMetric[];
  domains?: WorkDomain[];
};

const CURRENT_WORK: CurrentWorkProject[] = [
  {
    img: MentorMind,
    title: "MentorMind LTD",
    role: "Tech Lead",
    type: "EdTech · GCSE · A-Level · IELTS",
    summary:
      "Tech lead on the platform — multi-tenant RBAC, Gemini and AWS Bedrock LLM pipelines for marking and tutoring, IELTS modules, and 19-language delivery on Next.js 15, AWS, and Azure Speech.",
    metrics: [
      { value: "GCSE · A-Level · IELTS", label: "Exam programmes" },
      { value: "Gemini · Bedrock", label: "LLM stack" },
      { value: "19+", label: "Languages" },
      { value: "Multi-tenant", label: "Architecture" },
    ],
    domains: [
      {
        label: "AI & Assessment",
        items: [
          "Gemini and AWS Bedrock — marking, feedback, and exam generation with pedagogical guardrails",
          "Speaking mocks with pronunciation analysis; OCR for handwritten work",
          "Educator grading assistant with pre-scored submissions",
        ],
      },
      {
        label: "Languages & IELTS",
        items: [
          "Gemini tutor in 19+ languages — text and conversational responses",
          "Full IELTS suite: reading, writing, listening, speaking",
          "Azure Speech for voice practice and mock interviews",
        ],
      },
      {
        label: "Platform",
        items: [
          "Adaptive study plans across major UK exam boards",
          "Topic practice, weakness targeting, wellbeing check-ins",
          "Teacher dashboards, safeguarding, CI/CD on AWS",
        ],
      },
    ],
    techStack: [
      "Next.js 15",
      "TypeScript",
      "PostgreSQL",
      "AWS S3",
      "AWS Lambda",
      "AWS RDS",
      "AWS Cognito",
      "AWS Bedrock",
      "CloudFront",
      "Google Gemini",
      "Gemini API",
      "Azure Speech",
    ],
    liveUrl: "https://mentormind.co.uk",
    current: true,
  },
  {
    img: OneCart,
    title: "OneCart",
    role: "Founding Engineer",
    type: "Live commerce · UK",
    summary:
      "Founding engineer — set architecture and built the React Native app, Next.js seller dashboard, and real-time bidding backend.",
    metrics: [
      { value: "Live commerce", label: "Model" },
      { value: "Real-time", label: "Bidding" },
      { value: "iOS & Android", label: "Mobile" },
      { value: "Production", label: "Status" },
    ],
    domains: [
      {
        label: "Live commerce",
        items: [
          "Live feed marketplace with in-stream chat and product demos",
          "OneSeller onboarding from £1; drops during live events",
          "Secure in-stream checkout without breaking the broadcast",
        ],
      },
      {
        label: "Real-time systems",
        items: [
          "Low-latency auction logic over WebSockets and Redis",
          "Order pipeline with Stripe payments and tracking",
          "Concurrent stream and bid event orchestration",
        ],
      },
      {
        label: "What I built",
        items: [
          "React Native consumer app — live feed, bidding, checkout",
          "Next.js seller dashboard with AI sales forecasting",
          "MERN APIs — auth, payments, stream management",
        ],
      },
    ],
    techStack: [
      "React Native",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Redis",
      "Stripe",
    ],
    liveUrl: "https://onecart.uk.com",
    current: true,
  },
];

const PROJECTS: Project[] = [
  {
    img: Connect,
    title: "Connect",
    type: "Mobile · Messaging",
    summary: "Real-time chat with AI moderation and WebRTC video.",
    techStack: ["React Native", "Socket.io", "WebRTC", "AWS Lambda", "API Gateway", "S3", "Cognito"],
    span: "large",
  },
  {
    img: Plantea,
    title: "Plantea",
    type: "Web · E-commerce",
    summary: "Next.js storefront with Stripe checkout.",
    techStack: ["Next.js", "Stripe", "AWS S3", "CloudFront", "Vercel"],
    liveUrl: "https://plantea-next.vercel.app",
    span: "wide",
  },
  {
    img: HCP,
    title: "Global Health Network",
    type: "Web · Healthcare",
    summary: "HIPAA-aware platform with GraphQL and Redis caching.",
    techStack: ["Next.js", "GraphQL", "Redis", "AWS RDS", "Lambda", "S3"],
    liveUrl: "https://healthcare-network-graph-ebon.vercel.app",
    span: "normal",
  },
  {
    img: ReelBrain,
    title: "Reel Brain",
    type: "Mobile · Social",
    summary: "Offline-first social feed with biometric auth.",
    techStack: ["React Native", "Expo", "Redux", "Offline-first", "Biometric auth"],
    youtubeId: "1C_Dw5bY68k",
    span: "normal",
  },
  {
    img: Clicknbuy,
    title: "Click N Buy",
    type: "Mobile · Commerce",
    summary: "Real-time inventory and secure payments.",
    techStack: ["React Native", "Expo", "AWS S3", "Lambda", "Stripe", "DynamoDB"],
    youtubeId: "t0t1doAM76Y",
    span: "normal",
  },
  {
    img: Stanbik,
    title: "StanBik",
    type: "Mobile · Fintech",
    summary: "Encrypted banking transactions and analytics.",
    techStack: ["React Native", "Expo", "AWS KMS", "Lambda", "RDS"],
    youtubeId: "33Tg3NLE0dw",
    span: "normal",
  },
];

function spanClass(span: Project["span"]) {
  if (span === "large") return "md:col-span-2 md:row-span-2";
  if (span === "wide") return "md:col-span-2";
  return "";
}

function isValidYoutubeId(id?: string) {
  return id && id.length > 5 && !id.includes("YOUR");
}

function CurrentWorkCard({ project }: { project: CurrentWorkProject }) {
  return (
    <article className="relative overflow-hidden border border-line bg-paper-elevated dark:border-line-dark dark:bg-paper-elevated-dark">
      <div className="relative">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="group relative block aspect-[16/9] overflow-hidden border-b border-line dark:border-line-dark md:aspect-[21/9]"
        >
          <Image
            src={project.img}
            alt={`${project.title} website preview`}
            fill
            className="object-cover object-top transition-transform duration-700 ease-premium group-hover:scale-[1.01]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 md:p-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">
                Live product
              </p>
              <p className="mt-1 font-mono text-base text-white/80">
                {project.liveUrl?.replace(/^https?:\/\//, "")}
              </p>
            </div>
            <span className="hidden border border-white/20 bg-black/30 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-white/70 backdrop-blur-sm sm:inline">
              Production
            </span>
          </div>
        </a>

        <div className="p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-line pb-6 dark:border-line-dark">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
              Now
            </span>
            <span className="hidden h-3 w-px bg-line dark:bg-line-dark sm:block" aria-hidden="true" />
            {project.role && (
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted dark:text-ink-dark-muted">
                {project.role}
              </span>
            )}
            <span className="hidden h-3 w-px bg-line dark:bg-line-dark sm:block" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted dark:text-ink-dark-muted">
              {project.type}
            </span>
          </div>

          <h3 className="mt-8 font-display text-[clamp(1.75rem,4vw,2.25rem)] font-bold tracking-tight text-ink dark:text-ink-dark">
            {project.title}
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-[1.85] text-ink-muted dark:text-ink-dark-muted">
            {project.summary}
          </p>

          {project.metrics && project.metrics.length > 0 && (
            <dl className="mt-8 grid grid-cols-2 gap-px border border-line bg-line dark:border-line-dark dark:bg-line-dark sm:grid-cols-4">
              {project.metrics.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-paper-elevated px-4 py-4 dark:bg-paper-elevated-dark md:px-5 md:py-5"
                >
                  <dt className="font-mono text-xs uppercase tracking-[0.16em] text-ink-muted dark:text-ink-dark-muted">
                    {label}
                  </dt>
                  <dd className="mt-1.5 font-display text-lg font-bold tracking-tight text-ink dark:text-ink-dark md:text-xl">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          {project.domains && project.domains.length > 0 && (
            <div className="mt-10">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink-muted dark:text-ink-dark-muted">
                Platform scope
              </p>
              <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {project.domains.map(({ label, items }) => (
                  <div
                    key={label}
                    className="border-t border-line pt-5 dark:border-line-dark"
                  >
                    <h4 className="font-display text-base font-bold text-ink dark:text-ink-dark">
                      {label}
                    </h4>
                    <ul className="mt-4 space-y-3">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="text-base leading-[1.7] text-ink-muted dark:text-ink-dark-muted"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between dark:border-line-dark">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="border border-line px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-ink-muted dark:border-line-dark dark:text-ink-dark-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-1.5 border border-line px-4 py-2.5 font-mono text-sm uppercase tracking-wider text-ink transition-colors hover:border-accent hover:text-accent dark:border-line-dark dark:text-ink-dark"
              >
                View live platform
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectTile({
  project,
  index,
  onVideoClick,
}: {
  project: Project;
  index: number;
  onVideoClick: (p: Project) => void;
}) {
  const hasVideo = isValidYoutubeId(project.youtubeId);
  const link = project.liveUrl;

  return (
    <article
      className={`group relative min-h-[300px] overflow-hidden bg-ink dark:bg-[#141414] ${spanClass(project.span)}`}
    >
      <Image
        src={project.img}
        alt={project.title}
        fill
        className="object-cover opacity-75 transition-all duration-700 ease-premium group-hover:scale-[1.04] group-hover:opacity-50"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

      <span className="absolute right-6 top-6 font-mono text-sm text-white/30 transition-colors group-hover:text-white/60">
        {String(index + 1).padStart(2, "0")}
      </span>

      {project.current && (
        <span className="absolute left-6 top-6 inline-flex items-center gap-1.5 border border-white/20 bg-black/40 px-2 py-1 backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-white/90">
            In progress
          </span>
        </span>
      )}

      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/50">
          {project.type}
        </p>
        <h3 className="mt-2 font-display text-2xl font-bold text-white md:text-[1.75rem]">
          {project.title}
        </h3>
        <p className="mt-2 max-w-sm text-base leading-relaxed text-white/60 opacity-0 transition-all duration-500 group-hover:opacity-100">
          {project.summary}
        </p>
        <div className="mt-5 flex flex-wrap gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="border border-white/20 px-2 py-0.5 font-mono text-xs text-white/70"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-5">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-sm uppercase tracking-wider text-white transition-colors hover:text-accent-muted"
            >
              Visit
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
          )}
          {hasVideo && (
            <button
              type="button"
              onClick={() => onVideoClick(project)}
              className="font-mono text-sm uppercase tracking-wider text-white/60 transition-colors hover:text-white"
            >
              Demo
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="section-rule site-grid" id="projects">
      <SectionHeader
        title="Work"
        subtitle="Current production engagements, then selected earlier projects."
      />

      <div className="mb-12 space-y-4 md:mb-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted dark:text-ink-dark-muted">
          Now
        </p>
        <div className="grid gap-8 md:grid-cols-1 md:gap-12">
          {CURRENT_WORK.map((project) => (
            <CurrentWorkCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted dark:text-ink-dark-muted md:mb-8">
        Earlier work
      </p>

      <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:auto-rows-[minmax(260px,auto)]">
        {PROJECTS.map((project, index) => (
          <ProjectTile
            key={project.title}
            project={project}
            index={index}
            onVideoClick={setSelectedProject}
          />
        ))}
      </div>

      {selectedProject && isValidYoutubeId(selectedProject.youtubeId) && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} demo`}
        >
          <div
            className="w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="font-display text-lg font-bold text-white">
                {selectedProject.title}
              </p>
              <button
                type="button"
                className="font-mono text-sm uppercase tracking-widest text-white/50 transition-colors hover:text-white"
                onClick={() => setSelectedProject(null)}
              >
                Close ✕
              </button>
            </div>
            <div className="overflow-hidden border border-white/10">
              <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/${selectedProject.youtubeId}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={selectedProject.title}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
