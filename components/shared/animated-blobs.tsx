"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedBlobsProps {
  variant?: "primary" | "secondary" | "accent" | "mixed";
  intensity?: "subtle" | "strong";
  className?: string;
}

const variants = {
  primary: ["bg-primary/30", "bg-primary/20", "bg-secondary/15"],
  secondary: ["bg-secondary/25", "bg-primary/20", "bg-secondary/15"],
  accent: ["bg-accent/25", "bg-primary/15", "bg-secondary/10"],
  mixed: ["bg-primary/25", "bg-secondary/20", "bg-accent/20"],
} as const;

export function AnimatedBlobs({
  variant = "mixed",
  intensity = "subtle",
  className,
}: AnimatedBlobsProps) {
  const reduceMotion = useReducedMotion();
  const colors = variants[variant];
  const opacity = intensity === "strong" ? 0.9 : 0.6;

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden -z-10", className)}
    >
      <motion.div
        className={cn(
          "absolute -top-20 -left-20 h-80 w-80 rounded-full blur-3xl",
          colors[0],
        )}
        initial={{ opacity }}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 60, -20, 0],
                y: [0, 40, -30, 0],
                scale: [1, 1.15, 0.95, 1],
              }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={cn(
          "absolute top-1/2 right-[-10%] h-96 w-96 rounded-full blur-3xl",
          colors[1],
        )}
        initial={{ opacity }}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -50, 30, 0],
                y: [0, -40, 20, 0],
                scale: [1, 0.9, 1.1, 1],
              }
        }
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      <motion.div
        className={cn(
          "absolute bottom-[-10%] left-1/3 h-72 w-72 rounded-full blur-3xl",
          colors[2],
        )}
        initial={{ opacity }}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 30, -40, 0],
                y: [0, -30, 30, 0],
                scale: [1, 1.05, 0.92, 1],
              }
        }
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 8 }}
      />
    </div>
  );
}
