"use client";

import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { processSteps } from "@/content/process";

export function ProcessSteps() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <section id="proceso" className="section-y bg-muted/30 border-y border-border">
      <div className="container-page">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Cuatro pasos. Cero sorpresas."
          subtitle="Trabajamos con un proceso claro y por escrito desde el primer día. Sabes qué pasa, cuándo pasa y cuánto cuesta."
        />

        <div className="mt-14 relative">
          <div
            aria-hidden
            className="hidden lg:block absolute top-7 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          />
          {!reduceMotion && (
            <motion.div
              aria-hidden
              className="hidden lg:block absolute top-[calc(1.75rem-3px)] size-1.5 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]"
              initial={{ left: "calc(12.5% + 1rem)" }}
              animate={{ left: ["calc(12.5% + 1rem)", "calc(87.5% - 1rem)"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative">
                    <motion.div
                      whileHover={reduceMotion ? undefined : { scale: 1.08, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                      className="grid place-items-center size-14 rounded-full bg-card border-2 border-primary/30 shadow-card"
                    >
                      <Icon className="size-6 text-primary" />
                    </motion.div>
                    <span className="absolute -top-2 -right-2 grid place-items-center size-6 rounded-full bg-accent text-accent-foreground text-xs font-bold">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-heading font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground text-pretty">
                    {step.description}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-wider font-semibold text-primary">
                    {step.duration}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <a href="#contacto">Hablemos de tu proyecto</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
