import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base sm:text-lg text-muted-foreground text-pretty">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
