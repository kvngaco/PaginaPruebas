"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { workflows, type FlowNode, type Workflow } from "@/content/workflows";
import { cn } from "@/lib/utils";

export function WorkflowShowcase() {
  const [activeId, setActiveId] = useState(workflows[0]!.id);
  const reduceMotion = useReducedMotion() ?? false;
  const active = workflows.find((w) => w.id === activeId) ?? workflows[0]!;

  return (
    <section className="section-y relative overflow-hidden border-y border-border bg-foreground/[0.02] dark:bg-background">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid-dots opacity-50 mask-fade-edges"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,color-mix(in_oklch,var(--secondary)_12%,transparent),transparent_70%)]"
      />

      <div className="container-page">
        <SectionHeading
          eyebrow="Workflows en acción"
          title="Esto es lo que automatizamos por vos."
          subtitle="Conectamos tus herramientas en flujos que trabajan solos. Tomamos un dato, lo procesamos y lo enviamos donde tenga que llegar — sin que nadie tenga que recordarlo."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {workflows.map((w) => (
            <button
              key={w.id}
              type="button"
              onClick={() => setActiveId(w.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                activeId === w.id
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border bg-card text-foreground/80 hover:border-primary/40",
              )}
            >
              {w.title}
            </button>
          ))}
        </div>

        <div className="mt-10 mx-auto max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border border-border bg-card/80 backdrop-blur-sm shadow-card p-6 sm:p-8 lg:p-10"
            >
              <p className="text-base sm:text-lg text-foreground/80 max-w-3xl">
                <span className="font-semibold text-primary">{active.tagline}</span>{" "}
                {active.description}
              </p>

              <FlowGraph workflow={active} reduceMotion={reduceMotion} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center">
          <WhatsAppButton
            label="Cotizar mi automatización"
            size="lg"
            context="Hola, vi los workflows en su sitio y quiero conversar sobre una automatización."
          />
        </div>
      </div>
    </section>
  );
}

function FlowGraph({ workflow, reduceMotion }: { workflow: Workflow; reduceMotion: boolean }) {
  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_auto_1fr] items-center">
      <div className="space-y-3">
        {workflow.nodes.map((node, i) => (
          <FlowCard key={node.id} node={node} delay={i * 0.08} reduceMotion={reduceMotion} />
        ))}
      </div>

      <div className="hidden lg:flex flex-col items-center justify-center">
        <Connector reduceMotion={reduceMotion} />
      </div>

      <div className="space-y-3">
        {workflow.outputs.map((node, i) => (
          <FlowCard
            key={node.id}
            node={node}
            delay={0.3 + i * 0.08}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>

      <div className="lg:hidden col-span-full flex items-center justify-center text-primary/60">
        <ArrowRight className="size-5 rotate-90" />
      </div>
    </div>
  );
}

const typeStyles: Record<FlowNode["type"], { ring: string; chip: string; chipText: string }> = {
  trigger: {
    ring: "border-secondary/40 bg-secondary/5",
    chip: "bg-secondary/15 text-secondary-foreground",
    chipText: "text-secondary",
  },
  process: {
    ring: "border-primary/40 bg-primary/5",
    chip: "bg-primary/15",
    chipText: "text-primary",
  },
  output: {
    ring: "border-accent/40 bg-accent/5",
    chip: "bg-accent/15",
    chipText: "text-[oklch(0.45_0.15_60)] dark:text-accent",
  },
};

function FlowCard({
  node,
  delay,
  reduceMotion,
}: {
  node: FlowNode;
  delay: number;
  reduceMotion: boolean;
}) {
  const Icon = node.icon;
  const style = typeStyles[node.type];
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, x: node.type === "output" ? 12 : -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay }}
      className={cn(
        "group relative rounded-xl border bg-card p-3.5 flex items-center gap-3 shadow-sm hover:shadow-card transition-all",
        style.ring,
      )}
    >
      <span className={cn("grid place-items-center size-10 rounded-lg shrink-0", style.chip)}>
        <Icon className={cn("size-5", style.chipText)} />
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold truncate">{node.label}</p>
        <p className="text-xs text-muted-foreground truncate">{node.sublabel}</p>
      </div>
      {!reduceMotion && (
        <span className="absolute -top-1 -right-1 grid place-items-center">
          <span className="size-2 rounded-full bg-success" />
          <span className="absolute size-2 rounded-full bg-success animate-ping opacity-75" />
        </span>
      )}
    </motion.div>
  );
}

function Connector({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 80 240"
      className="w-20 h-60 text-primary/50"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M5 40 Q 40 40 40 120 T 75 200" strokeDasharray="4 5" />
      <path d="M5 120 L 75 120" strokeDasharray="4 5" />
      <path d="M5 200 Q 40 200 40 120 T 75 40" strokeDasharray="4 5" />
      {!reduceMotion && (
        <>
          <motion.circle
            r="3"
            fill="currentColor"
            stroke="none"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
            style={{
              offsetPath: "path('M5 40 Q 40 40 40 120 T 75 200')",
              offsetRotate: "auto",
            }}
          />
          <motion.circle
            r="3"
            fill="currentColor"
            stroke="none"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.5 }}
            style={{
              offsetPath: "path('M5 120 L 75 120')",
              offsetRotate: "auto",
            }}
          />
          <motion.circle
            r="3"
            fill="currentColor"
            stroke="none"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 1 }}
            style={{
              offsetPath: "path('M5 200 Q 40 200 40 120 T 75 40')",
              offsetRotate: "auto",
            }}
          />
        </>
      )}
    </svg>
  );
}
