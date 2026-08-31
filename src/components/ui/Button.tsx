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
    "inline-flex items-center gap-2 text-sm font-medium tracking-wide transition-all duration-300 ease-premium sm:text-base";
  const variants = {
    primary:
      "rounded-full bg-ink px-5 py-2.5 text-paper hover:bg-accent sm:px-6 sm:py-3 dark:bg-ink-dark dark:text-paper-dark dark:hover:bg-accent",
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
