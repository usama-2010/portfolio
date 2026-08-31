"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import type { Theme } from "@/lib/theme";

const OPTIONS: { value: Theme; label: string }[] = [
  { value: "light", label: "Light mode" },
  { value: "auto", label: "System theme" },
  { value: "dark", label: "Dark mode" },
];

const spring = { type: "spring" as const, stiffness: 520, damping: 38, mass: 0.85 };

function useCanHover() {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return canHover;
}

function SunIcon({ active }: { active: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem]"
      aria-hidden="true"
    >
      <motion.g
        animate={active && !reduceMotion ? { rotate: 360 } : { rotate: 0 }}
        transition={
          active && !reduceMotion
            ? { duration: 12, repeat: Infinity, ease: "linear" }
            : { duration: 0.3 }
        }
        style={{ originX: "12px", originY: "12px" }}
      >
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <line
            key={deg}
            x1="12"
            y1="3"
            x2="12"
            y2="5.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            transform={`rotate(${deg} 12 12)`}
            opacity={active ? 1 : 0.55}
          />
        ))}
      </motion.g>
      <motion.circle
        cx="12"
        cy="12"
        r="4.25"
        fill="currentColor"
        animate={active ? { scale: [1, 1.08, 1] } : { scale: 1 }}
        transition={
          active && !reduceMotion
            ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.2 }
        }
      />
    </svg>
  );
}

function AutoIcon({ active }: { active: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem]"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="5"
        width="16"
        height="11"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity={active ? 1 : 0.55}
      />
      <path
        d="M8 19h8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity={active ? 1 : 0.55}
      />
      <motion.circle
        cx="12"
        cy="10.5"
        r="3.25"
        stroke="currentColor"
        strokeWidth="1.5"
        animate={active && !reduceMotion ? { rotate: 360 } : { rotate: 0 }}
        transition={
          active && !reduceMotion
            ? { duration: 10, repeat: Infinity, ease: "linear" }
            : { duration: 0.2 }
        }
        style={{ originX: "12px", originY: "10.5px" }}
        strokeDasharray="4 2.5"
      />
      <circle cx="12" cy="10.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

function MoonIcon({ active }: { active: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem]"
      aria-hidden="true"
    >
      <motion.path
        d="M14.5 4.5a6.5 6.5 0 1 0 5 11.5A5.5 5.5 0 1 1 14.5 4.5Z"
        fill="currentColor"
        animate={
          active && !reduceMotion
            ? { rotate: [-8, 8, -8], scale: [1, 1.04, 1] }
            : { rotate: 0, scale: 1 }
        }
        transition={
          active && !reduceMotion
            ? { duration: 4, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.2 }
        }
        style={{ originX: "12px", originY: "12px" }}
        opacity={active ? 1 : 0.55}
      />
      {active && (
        <>
          <motion.circle
            cx="17"
            cy="8"
            r="0.55"
            fill="currentColor"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="15.5"
            cy="11.5"
            r="0.35"
            fill="currentColor"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
          />
        </>
      )}
    </svg>
  );
}

function ThemeIcon({ theme, active }: { theme: Theme; active: boolean }) {
  if (theme === "light") return <SunIcon active={active} />;
  if (theme === "auto") return <AutoIcon active={active} />;
  return <MoonIcon active={active} />;
}

function ToggleButton({
  value,
  label,
  active,
  buttonSize,
  onSelect,
}: {
  value: Theme;
  label: string;
  active: boolean;
  buttonSize: number;
  onSelect: (value: Theme) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      aria-label={label}
      aria-pressed={active}
      title={label}
      style={{ width: buttonSize, height: buttonSize }}
      className="theme-toggle-btn relative z-10 flex shrink-0 items-center justify-center rounded-full"
    >
      {active && (
        <motion.span
          layoutId="theme-toggle-pill"
          className="theme-toggle-pill absolute inset-0 rounded-full"
          transition={{ type: "spring", stiffness: 520, damping: 38, mass: 0.85 }}
        />
      )}

      <span
        className={`relative z-10 flex items-center justify-center ${
          active
            ? "text-paper dark:text-ink"
            : "text-ink-muted dark:text-ink-dark-muted"
        }`}
      >
        <ThemeIcon theme={value} active={active} />
      </span>

      <span className="sr-only">{label}</span>
    </button>
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const reduceMotion = useReducedMotion();
  const canHover = useCanHover();
  const containerRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [buttonSize, setButtonSize] = useState(36);

  const activeIndex = Math.max(
    0,
    OPTIONS.findIndex((option) => option.value === theme),
  );

  useEffect(() => {
    const update = () => setButtonSize(window.innerWidth >= 640 ? 40 : 36);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (!expanded || canHover) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setExpanded(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [expanded, canHover]);

  const collapse = useCallback(() => setExpanded(false), []);
  const expand = useCallback(() => setExpanded(true), []);

  const collapsedWidth = buttonSize + 8;
  const expandedWidth = buttonSize * 3 + 8;

  const handleThemeSelect = (value: Theme) => {
    setTheme(value);
    if (!canHover) collapse();
  };

  return (
    <motion.div
      ref={containerRef}
      role="group"
      aria-label="Color theme"
      aria-expanded={expanded}
      onMouseEnter={() => canHover && expand()}
      onMouseLeave={() => canHover && collapse()}
      onFocusCapture={expand}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          collapse();
        }
      }}
      onClickCapture={(event) => {
        if (!canHover && !expanded) {
          event.preventDefault();
          event.stopPropagation();
          expand();
        }
      }}
      animate={{
        width: expanded ? expandedWidth : collapsedWidth,
      }}
      transition={reduceMotion ? { duration: 0 } : spring}
      className="theme-toggle relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-line bg-paper-elevated/80 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-sm dark:border-line-dark dark:bg-paper-elevated-dark/80 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
    >
      <motion.span
        aria-hidden="true"
        className="theme-toggle-glow pointer-events-none absolute inset-0 rounded-full"
        animate={{
          opacity: expanded
            ? activeIndex === 2
              ? 0.85
              : activeIndex === 0
                ? 0.45
                : 0.65
            : 0.35,
        }}
        transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.16, 1, 0.3, 1] }}
      />

      <AnimatePresence mode="wait" initial={false}>
        {expanded ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.15 }}
            className="relative flex items-center"
          >
            {OPTIONS.map(({ value, label }) => (
              <ToggleButton
                key={value}
                value={value}
                label={label}
                active={theme === value}
                buttonSize={buttonSize}
                onSelect={handleThemeSelect}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key={`collapsed-${theme}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.18 }}
            className="relative flex items-center justify-center"
          >
            <ToggleButton
              value={theme}
              label={OPTIONS.find((option) => option.value === theme)?.label ?? "Theme"}
              active
              buttonSize={buttonSize}
              onSelect={handleThemeSelect}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
