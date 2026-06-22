import { SectionHeader } from "@/components/ui/SectionHeader";

const EDUCATION = [
  {
    degree: "BSc Software Engineering",
    detail: "Software engineering fundamentals and full-stack development",
  },
  {
    degree: "MSc IBM",
    detail: "Advanced computing and enterprise systems",
  },
  {
    degree: "Certified Full-Stack Developer",
    detail: "Production web and mobile development",
  },
];

export function Resume() {
  return (
    <section className="section-rule site-grid">
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <SectionHeader
          title="Education"
          subtitle="Formal training in software engineering and full-stack development."
          className="mb-0"
        />
        <ul className="flex flex-col divide-y divide-line dark:divide-line-dark">
          {EDUCATION.map(({ degree, detail }) => (
            <li key={degree} className="py-5">
              <p className="text-base text-ink dark:text-ink-dark">{degree}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted dark:text-ink-dark-muted">
                {detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Resume;
