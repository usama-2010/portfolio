"use client";

export function Contact() {
  return (
    <section id="contact" className="mt-section">
      <div className="bg-ink text-paper dark:bg-[#111111] dark:text-ink-dark">
        <div className="site-grid py-12 sm:py-section">
          <div className="grid gap-10 sm:gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
            <div className="min-w-0">
              <span className="mb-5 block h-px w-12 bg-accent sm:mb-6" aria-hidden="true" />
              <h2 className="font-display text-[clamp(1.75rem,7vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                Let&apos;s build something together.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/60 sm:mt-5 sm:text-base dark:text-ink-dark-muted">
                Open to senior engineering roles and contract work — London or
                remote.
              </p>
            </div>

            <div className="flex min-w-0 flex-col justify-end gap-6 sm:gap-8">
              <a
                href="mailto:ahmed.ua368@gmail.com"
                className="group break-all font-display text-[clamp(1.125rem,4.5vw,2rem)] font-bold leading-tight tracking-[-0.02em] transition-colors hover:text-accent-muted sm:break-normal"
              >
                ahmed.ua368@gmail.com
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <div className="grid grid-cols-1 gap-5 border-t border-paper/10 pt-6 font-mono text-sm sm:grid-cols-2 sm:gap-6 sm:pt-8 dark:border-line-dark">
                <div>
                  <p className="text-xs uppercase tracking-widest text-paper/40 dark:text-ink-dark-muted">
                    Phone
                  </p>
                  <a
                    href="tel:+447438481171"
                    className="mt-1 block break-all transition-colors hover:text-accent-muted sm:break-normal"
                  >
                    +44 7438 481171
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-paper/40 dark:text-ink-dark-muted">
                    Location
                  </p>
                  <p className="mt-1">London, UK</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-xs uppercase tracking-widest text-paper/40 dark:text-ink-dark-muted">
                    Connect
                  </p>
                  <p className="mt-1">
                    <a
                      href="https://github.com/ahm3d19"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-accent-muted"
                    >
                      GitHub
                    </a>
                    {" · "}
                    <a
                      href="https://www.linkedin.com/in/usama-ahmed-989303264/"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-accent-muted"
                    >
                      LinkedIn
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
