"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Bot, LifeBuoy, MonitorSmartphone, Network, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

const techNodes = [
  { icon: LifeBuoy, label: "Soporte", color: "from-primary to-primary/70" },
  { icon: Bot, label: "Automatización", color: "from-secondary to-primary" },
  { icon: MonitorSmartphone, label: "Web & Apps", color: "from-accent to-secondary" },
  { icon: Network, label: "Redes", color: "from-primary to-secondary" },
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
        className="absolute inset-0 -z-10 bg-grid-dots opacity-40 mask-fade-edges"
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
            Servicios de TI en toda América
          </Badge>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance">
            Hacemos fácil la{" "}
            <span className="text-gradient-brand">tecnología</span> de tu empresa.
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl text-pretty">
            Soporte técnico, automatización, desarrollo web y aplicaciones,
            redes y nube — todo bajo un mismo equipo. Conectamos sistemas,
            simplificamos procesos y mantenemos tu operación corriendo.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="text-base">
              <Link href="#contacto">Hablemos de tu proyecto</Link>
            </Button>
            <WhatsAppButton
              size="lg"
              label="Escribir por WhatsApp"
              context="Hola, vi su sitio. Me gustaría conversar sobre un proyecto."
            />
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Sin compromiso. Te respondemos en menos de 1 hora hábil.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground border-t border-border pt-6 max-w-xl">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-success" /> +500 clientes atendidos
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
          <HeroFlow reduceMotion={reduceMotion ?? false} />
        </div>
      </div>
    </section>
  );
}

function HeroFlow({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="relative mx-auto max-w-sm sm:max-w-md">
      <div
        aria-hidden
        className="absolute inset-0 rounded-3xl gradient-brand opacity-15 blur-3xl"
      />

      <div className="relative rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-5 shadow-card">
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-success animate-pulse" />
            Workflow EasyTech
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
            <Zap className="size-3" />
            En vivo
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {techNodes.map((node, i) => (
            <motion.div
              key={node.label}
              initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -3 }}
              className="group relative rounded-xl border border-border bg-background p-3 flex items-center gap-3 hover:border-primary/40 transition-colors"
            >
              <span
                className={`grid place-items-center size-9 rounded-lg bg-gradient-to-br ${node.color} text-white shrink-0`}
              >
                <node.icon className="size-4" />
              </span>
              <p className="text-sm font-semibold">{node.label}</p>
              <span className="absolute top-2 right-2 size-1.5 rounded-full bg-success/70 group-hover:bg-success transition-colors" />
            </motion.div>
          ))}
        </div>

        <FlowConnections reduceMotion={reduceMotion} />

        <div className="mt-4 flex items-center justify-between text-[11px] text-muted-foreground border-t border-border pt-3">
          <span>4 servicios · 1 equipo</span>
          <span className="font-mono">{"<200ms"}</span>
        </div>
      </div>
    </div>
  );
}

function FlowConnections({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 40"
      className="mt-3 w-full h-10 text-primary/40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M20 20 Q60 5 100 20 T180 20" strokeDasharray="3 4" />
      {!reduceMotion && (
        <motion.circle
          r="3"
          fill="currentColor"
          stroke="none"
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: "100%" }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            offsetPath: "path('M20 20 Q60 5 100 20 T180 20')",
            offsetRotate: "auto",
          }}
        />
      )}
    </svg>
  );
}
