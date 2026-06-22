"use client";

export function Contact() {
  return (
    <section id="contact" className="mt-section">
      <div className="bg-ink text-paper dark:bg-[#111111] dark:text-ink-dark">
        <div className="site-grid py-section">
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <span className="mb-6 block h-px w-12 bg-accent" aria-hidden="true" />
              <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                Let&apos;s build something together.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-paper/60 dark:text-ink-dark-muted">
                Open to senior engineering roles and contract work — London or
                remote.
              </p>
            </div>

            <div className="flex flex-col justify-end gap-8">
              <a
                href="mailto:ahmed.ua368@gmail.com"
                className="group font-display text-[clamp(1.25rem,3vw,2rem)] font-bold leading-tight tracking-[-0.02em] transition-colors hover:text-accent-muted"
              >
                ahmed.ua368@gmail.com
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <div className="grid grid-cols-2 gap-6 border-t border-paper/10 pt-8 font-mono text-sm dark:border-line-dark">
                <div>
                  <p className="text-xs uppercase tracking-widest text-paper/40 dark:text-ink-dark-muted">
                    Phone
                  </p>
                  <a
                    href="tel:+447438481171"
                    className="mt-1 block transition-colors hover:text-accent-muted"
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
                <div className="col-span-2">
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
