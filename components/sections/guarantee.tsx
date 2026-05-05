"use client";

import { motion } from "motion/react";
import { FileCheck, Gift, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";

const guarantees = [
  {
    icon: Gift,
    title: "Consultoría inicial sin costo",
    description:
      "La primera conversación, evaluación o auditoría remota no tienen costo. Pagas solo si avanzas con la propuesta.",
  },
  {
    icon: FileCheck,
    title: "Precio cerrado por escrito",
    description:
      "Cotización detallada antes de empezar. No hay \"extras\" inesperados. Si surge algo, lo conversamos antes.",
  },
  {
    icon: ShieldCheck,
    title: "Garantía de 30 días",
    description:
      "Si algo falla por nuestra parte dentro del primer mes, lo resolvemos sin costo. Por escrito.",
  },
];

export function Guarantee() {
  return (
    <section className="section-y relative overflow-hidden border-y border-border bg-primary/5">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,color-mix(in_oklch,var(--primary)_14%,transparent),transparent_70%)]"
      />
      <div className="relative container-page">
        <SectionHeading
          eyebrow="Nuestro compromiso por escrito"
          title="Si no resolvemos, no cobramos."
          subtitle="Es así de simple. Ponemos por escrito qué vamos a hacer, en cuánto tiempo y por cuánto. Si no cumplimos, no nos pagas. Sin letra chica."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3 max-w-5xl mx-auto">
          {guarantees.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-2xl bg-card border border-border p-6 shadow-card"
              >
                <span className="grid place-items-center size-12 rounded-xl gradient-brand text-white">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-4 text-lg font-heading font-semibold">
                  {g.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground text-pretty">
                  {g.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
