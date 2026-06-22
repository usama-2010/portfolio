import Link from "next/link";
import { ReactNode } from "react";

interface LinkButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "ghost";
  className?: string;
}

export function LinkButton({
  children,
  href,
  variant = "primary",
  className = "",
}: LinkButtonProps) {
  const base =
    "inline-flex items-center gap-2 text-base font-medium tracking-wide transition-all duration-300 ease-premium";
  const variants = {
    primary:
      "bg-ink px-6 py-3 text-paper hover:bg-accent dark:bg-ink-dark dark:text-paper-dark dark:hover:bg-accent",
    ghost:
      "link-underline text-ink hover:text-accent dark:text-ink-dark",
  };

  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const isAnchor = href.startsWith("#");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  if (isAnchor) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
