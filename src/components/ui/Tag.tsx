interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-block rounded-full border border-border px-2.5 py-0.5 text-xs text-ink-muted dark:border-border-dark dark:text-ink-dark-muted ${className}`}
    >
      {children}
    </span>
  );
}
