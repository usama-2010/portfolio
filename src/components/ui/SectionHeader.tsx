interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "right";
}

export function SectionHeader({
  title,
  subtitle,
  className = "",
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${align === "right" ? "md:text-right md:ml-auto" : ""} ${className}`}
    >
      <span
        className={`mb-5 block h-px w-12 bg-accent ${align === "right" ? "md:ml-auto" : ""}`}
        aria-hidden="true"
      />
      <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1.02] tracking-[-0.04em] text-ink dark:text-ink-dark">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl text-base leading-[1.75] text-ink-muted dark:text-ink-dark-muted ${align === "right" ? "md:ml-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
