import { ReactNode } from "react";

interface SurfaceCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function SurfaceCard({
  children,
  className = "",
  onClick,
}: SurfaceCardProps) {
  const Component = onClick ? "button" : "div";

  return (
    <Component
      onClick={onClick}
      className={`rounded-card border border-border bg-white p-6 text-left transition-colors duration-200 dark:border-border-dark dark:bg-[#141414] ${
        onClick
          ? "cursor-pointer hover:border-accent/40 dark:hover:border-accent/40"
          : ""
      } ${className}`}
    >
      {children}
    </Component>
  );
}
