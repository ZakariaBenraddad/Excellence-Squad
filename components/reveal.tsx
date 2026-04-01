"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  as?: ElementType;
  delayMs?: number;
  className?: string;
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "zoom";
  distancePx?: number;
  durationMs?: number;
};

export function Reveal({
  as: Component = "div",
  delayMs = 0,
  className,
  children,
  direction = "up",
  distancePx = 24,
  durationMs = 700,
}: RevealProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timeout = window.setTimeout(() => setIsVisible(true), delayMs);
          observer.unobserve(entry.target);
          return () => window.clearTimeout(timeout);
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delayMs]);

  const initialTransform = (() => {
    const d = `${distancePx}px`;
    switch (direction) {
      case "down":
        return `translateY(-${d})`;
      case "left":
        return `translateX(${d})`;
      case "right":
        return `translateX(-${d})`;
      case "zoom":
        return "scale(0.96)";
      case "up":
      default:
        return `translateY(${d})`;
    }
  })();

  const style: CSSProperties = {
    transitionDuration: `${durationMs}ms`,
  };

  return (
    <Component
      ref={containerRef}
      className={cn(
        "will-change-transform will-change-opacity transform-gpu transition-all ease-out",
        "opacity-0",
        !isVisible && initialTransform,
        isVisible && "opacity-100 transform-none",
        className
      )}
      style={style}
    >
      {children}
    </Component>
  );
}
