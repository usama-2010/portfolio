"use client";

import Image from "next/image";
import Me from "../../public/image/me.png";
import { LinkButton } from "@/components/ui/Button";

const STATS = [
  { value: "5+", label: "Years" },
  { value: "15+", label: "Projects" },
  { value: "London", label: "Based" },
];

function Hero() {
  return (
    <section className="pb-section pt-6 md:pt-10">
      <figure className="site-grid mb-10 lg:hidden">
        <div className="-mx-5 sm:-mx-8">
          <Image
            src={Me}
            alt="Usama Ahmed — Full-stack engineer in London"
            width={1024}
            height={1536}
            priority
            placeholder="blur"
            className="h-auto w-full"
            sizes="100vw"
          />
        </div>
      </figure>

      <div className="site-grid grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="lg:pt-4">
          <div className="animate-in mb-8 inline-flex items-center gap-2 border border-line px-3 py-1.5 dark:border-line-dark">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted dark:text-ink-dark-muted">
              Tech Lead · MentorMind LTD
            </span>
          </div>

          <h1 className="animate-in delay-1 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold leading-[0.92] tracking-[-0.04em] text-ink dark:text-ink-dark">
            <span className="block">Full-stack</span>
            <span className="block text-accent">engineer</span>
          </h1>

          <p className="animate-in delay-2 mt-8 max-w-md text-base leading-[1.75] text-ink-muted dark:text-ink-dark-muted">
            Tech lead at MentorMind LTD. Founding engineer at OneCart. Previously
            senior full-stack at InvoZone — Next.js, React Native, and AWS.
          </p>

          <div className="animate-in delay-3 mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <LinkButton href="#projects" variant="primary">
              View work
            </LinkButton>
            <LinkButton href="#contact" variant="ghost">
              Get in touch →
            </LinkButton>
          </div>

          <dl className="animate-in delay-3 mt-14 grid grid-cols-3 gap-6 border-t border-line pt-8 dark:border-line-dark">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <dt className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted dark:text-ink-dark-muted">
                  {label}
                </dt>
                <dd className="mt-1 font-display text-2xl font-bold tracking-tight text-ink dark:text-ink-dark">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="animate-in delay-2 m-0 hidden lg:block lg:sticky lg:top-24">
          <Image
            src={Me}
            alt="Usama Ahmed — Full-stack engineer in London"
            width={1024}
            height={1536}
            priority
            placeholder="blur"
            className="h-auto w-full"
            sizes="(min-width: 1024px) 42vw, 0"
          />
          <figcaption className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted dark:text-ink-dark-muted">
            London, UK
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Hero;
