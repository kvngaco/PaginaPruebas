"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Bot, Code2, LifeBuoy, Network, ShieldCheck, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

const techCards = [
  { icon: LifeBuoy, label: "Soporte" },
  { icon: Network, label: "Redes" },
  { icon: Code2, label: "Web" },
  { icon: Bot, label: "Automatización" },
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-border"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_60%_at_50%_0%,color-mix(in_oklch,var(--primary)_10%,transparent),transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 size-[480px] rounded-full bg-secondary/15 blur-3xl -z-10"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 size-[420px] rounded-full bg-primary/15 blur-3xl -z-10"
      />

      <div className="container-page py-20 md:py-28 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <Badge variant="secondary" className="rounded-full px-3 py-1 gap-1.5">
            <Sparkles className="size-3.5" />
            Servicios de TI en Costa Rica
          </Badge>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance">
            Hacemos fácil la{" "}
            <span className="text-gradient-brand">tecnología</span> de tu empresa.
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl text-pretty">
            Soporte técnico, redes, desarrollo web y automatización para
            personas, profesionales y pymes en todo Costa Rica. Hablamos claro,
            resolvemos rápido.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="text-base">
              <Link href="#contacto">Diagnóstico gratuito</Link>
            </Button>
            <WhatsAppButton
              size="lg"
              label="Escribir por WhatsApp"
              context="Hola, vi su sitio y me interesa el diagnóstico gratuito."
            />
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Sin compromiso. Te respondemos en menos de 1 hora hábil.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground border-t border-border pt-6 max-w-xl">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-success" /> +500 clientes en CR
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-success" /> 8 años en el mercado
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-success" /> Garantía por escrito
            </span>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md aspect-square">
            <div
              aria-hidden
              className="absolute inset-0 rounded-3xl gradient-brand opacity-20 blur-2xl"
            />
            <div className="relative grid grid-cols-2 gap-4 h-full">
              {techCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  className="rounded-2xl bg-card border border-border shadow-card p-6 flex flex-col items-start gap-3 hover:shadow-card-hover transition-shadow"
                >
                  <span className="grid place-items-center size-12 rounded-xl gradient-brand text-white">
                    <card.icon className="size-6" />
                  </span>
                  <p className="font-heading font-semibold">{card.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
