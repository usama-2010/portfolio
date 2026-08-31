export function LiveDot({ className = "h-2 w-2" }: { className?: string }) {
  return (
    <span
      className={`relative inline-flex shrink-0 ${className}`}
      aria-hidden="true"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
      <span className="relative inline-flex h-full w-full animate-live-pulse rounded-full bg-accent" />
    </span>
  );
}
