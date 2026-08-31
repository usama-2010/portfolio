"use client";

import Image from "next/image";
import Me from "../../public/image/me.png";
import { LinkButton } from "@/components/ui/Button";
import { LiveDot } from "@/components/ui/LiveDot";

const STATS = [
  { value: "5+", label: "Years" },
  { value: "15+", label: "Projects" },
  { value: "London", label: "Based" },
];

function Hero() {
  return (
    <section className="pb-section pt-4 sm:pt-6 md:pt-10">
      <figure className="site-grid mb-8 sm:mb-10 lg:hidden">
        <div className="-mx-4 sm:-mx-6 md:-mx-8">
          <Image
            src={Me}
            alt="Usama Ahmed — Full-stack engineer in London"
            width={1024}
            height={1536}
            priority
            placeholder="blur"
            className="mx-auto h-auto max-h-[min(65vh,520px)] w-full object-cover object-top"
            sizes="100vw"
          />
        </div>
      </figure>

      <div className="site-grid grid items-start gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="min-w-0 lg:pt-4">
          <div className="animate-in mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-line px-3 py-1.5 dark:border-line-dark sm:mb-8">
            <LiveDot />
            <span className="font-mono text-[0.68rem] uppercase leading-snug tracking-[0.14em] text-ink-muted dark:text-ink-dark-muted sm:text-xs sm:tracking-[0.18em]">
              Senior Full-Stack Engineer · MentorMind LTD
            </span>
          </div>

          <h1 className="animate-in delay-1 font-display text-[clamp(2.25rem,11vw,5.5rem)] font-extrabold leading-[0.92] tracking-[-0.04em] text-ink dark:text-ink-dark">
            <span className="block">Full-stack</span>
            <span className="block text-accent">engineer</span>
          </h1>

          <p className="animate-in delay-2 mt-6 max-w-md text-base leading-[1.75] text-ink-muted dark:text-ink-dark-muted sm:mt-8">
            Senior Full-Stack Engineer at MentorMind LTD. Previously full stack at OneCart
            and InvoZone — Next.js, React Native, and AWS.
          </p>

          <div className="animate-in delay-3 mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mt-10 sm:gap-x-8 sm:gap-y-4">
            <LinkButton href="#projects" variant="primary">
              View work
            </LinkButton>
            <LinkButton href="#contact" variant="ghost">
              Get in touch →
            </LinkButton>
          </div>

          <dl className="animate-in delay-3 mt-10 grid grid-cols-3 gap-3 border-t border-line pt-6 dark:border-line-dark sm:mt-14 sm:gap-6 sm:pt-8">
            {STATS.map(({ value, label }) => (
              <div key={label} className="min-w-0">
                <dt className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-ink-muted dark:text-ink-dark-muted sm:text-xs sm:tracking-[0.15em]">
                  {label}
                </dt>
                <dd className="mt-1 truncate font-display text-xl font-bold tracking-tight text-ink dark:text-ink-dark sm:text-2xl">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="animate-in delay-2 m-0 hidden lg:sticky lg:top-24 lg:block lg:justify-self-end">
          <Image
            src={Me}
            alt="Usama Ahmed — Full-stack engineer in London"
            width={1024}
            height={1536}
            priority
            placeholder="blur"
            className="h-auto w-full max-h-[min(72vh,580px)] max-w-[22rem] object-cover object-top xl:max-w-[24rem]"
            sizes="(min-width: 1280px) 24rem, 22rem"
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
