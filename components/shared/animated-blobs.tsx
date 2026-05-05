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
  const colors = variants[variant];
  const opacityClass = intensity === "strong" ? "opacity-90" : "opacity-60";

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden -z-10",
        opacityClass,
        className,
      )}
    >
      <div
        className={cn(
          "absolute -top-20 -left-20 h-80 w-80 rounded-full blur-3xl animate-blob-a",
          colors[0],
        )}
      />
      <div
        className={cn(
          "absolute top-1/2 right-[-10%] h-96 w-96 rounded-full blur-3xl animate-blob-b",
          colors[1],
        )}
      />
      <div
        className={cn(
          "absolute bottom-[-10%] left-1/3 h-72 w-72 rounded-full blur-3xl animate-blob-c",
          colors[2],
        )}
      />
    </div>
  );
}
