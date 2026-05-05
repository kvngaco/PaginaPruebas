"use client";

import { motion, useReducedMotion } from "motion/react";
import { Check, Quote, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { AnimatedBlobs } from "@/components/shared/animated-blobs";
import { services, type Service } from "@/content/services";
import { cn } from "@/lib/utils";

export function ServicesGrid() {
  return (
    <section id="servicios" className="section-y relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />
      <AnimatedBlobs variant="primary" intensity="subtle" />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Lo que hacemos"
          title="Soluciones que no detienen tu empresa."
          subtitle="Tres líneas de servicio bajo un mismo equipo. Automatizamos lo repetitivo, construimos lo digital y aseguramos lo crítico."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const reduceMotion = useReducedMotion() ?? false;
  const Icon = service.icon;
  const isFirst = index === 0;

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className="h-full group"
    >
      <Card
        className={cn(
          "relative h-full overflow-hidden border-border shadow-card flex flex-col transition-all duration-300",
          "hover:shadow-card-hover hover:border-primary/40",
          isFirst && "border-primary/30 ring-1 ring-primary/10",
        )}
      >
        {/* Animated top border line (CSS, GPU-composited) */}
        <div className="absolute inset-x-0 top-0 h-px overflow-hidden">
          <div
            className="h-full w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent animate-scanline"
            style={{ animationDelay: `${index * 0.7}s` }}
          />
        </div>

        {/* Glow on hover */}
        <div
          aria-hidden
          className="absolute -inset-px rounded-[inherit] bg-gradient-to-br from-primary/0 via-secondary/0 to-accent/0 opacity-0 group-hover:from-primary/10 group-hover:via-secondary/10 group-hover:to-accent/10 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
        />

        {isFirst ? (
          <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-1 text-[11px] font-semibold text-[oklch(0.45_0.15_60)] dark:text-accent">
            <Sparkles className="size-3" />
            Más solicitado
          </span>
        ) : null}

        <CardHeader className="pb-2">
          <motion.span
            whileHover={reduceMotion ? undefined : { rotate: -6, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
            className="grid place-items-center size-14 rounded-2xl gradient-brand text-white shadow-lg shadow-primary/20"
          >
            <Icon className="size-7" />
          </motion.span>
          <h3 className="mt-5 text-xl sm:text-2xl font-heading font-semibold">
            {service.title}
          </h3>
          <p className="mt-1 text-primary font-medium text-sm">{service.benefit}</p>
        </CardHeader>

        <CardContent className="space-y-4 flex-1 flex flex-col">
          <p className="text-muted-foreground text-pretty text-sm leading-relaxed">
            {service.description}
          </p>

          <ul className="space-y-2 flex-1">
            {service.bullets.map((bullet, bi) => (
              <motion.li
                key={bullet}
                initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, delay: 0.1 + bi * 0.04 }}
                className="flex gap-2 text-sm"
              >
                <Check className="size-4 mt-0.5 text-success shrink-0" />
                <span>{bullet}</span>
              </motion.li>
            ))}
          </ul>

          {/* Mini flow indicator */}
          <FlowDots />

          <figure className="rounded-xl bg-muted/50 border border-border p-3.5">
            <Quote className="size-4 text-primary mb-1.5" />
            <blockquote className="text-xs italic text-foreground/85 leading-relaxed">
              “{service.testimonial.quote}”
            </blockquote>
            <figcaption className="mt-1.5 text-[11px] text-muted-foreground">
              {service.testimonial.author}
            </figcaption>
          </figure>

          <WhatsAppButton
            label="Conversar por WhatsApp"
            variant="outline"
            size="sm"
            context={service.whatsappContext}
            className="w-full"
          />
        </CardContent>
      </Card>
    </motion.div>
  );
}

function FlowDots() {
  return (
    <div className="flex items-center justify-between gap-2 px-1 py-1">
      <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">
        Activo
      </span>
      <div className="flex items-center gap-1.5">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="size-1.5 rounded-full bg-success animate-pulse-soft"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
}
