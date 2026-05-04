"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section id="casos" className="section-y relative overflow-hidden bg-accent/[0.03]">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_85%_20%,color-mix(in_oklch,var(--accent)_10%,transparent),transparent_60%)]"
      />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Lo que dicen nuestros clientes"
          title="Resultados reales, en español, sin maquillaje."
          subtitle="No vendemos humo. Estos son ejemplos representativos de cómo trabajamos con clientes en Costa Rica."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="h-full shadow-card flex flex-col">
                <CardContent className="flex-1 flex flex-col gap-4 p-6">
                  <Quote className="size-6 text-primary" />
                  <blockquote className="text-foreground/90 text-pretty flex-1">
                    “{t.quote}”
                  </blockquote>
                  <div className="rounded-lg bg-primary/5 border border-primary/10 px-3 py-2 text-sm font-semibold text-primary inline-flex w-fit">
                    {t.metric}
                  </div>
                  <div className="flex items-center gap-3 pt-3 border-t border-border">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-semibold">
                        {t.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-muted-foreground text-xs">
                        {t.role} · {t.sector}
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {t.serviceLabel}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground/80 max-w-2xl mx-auto">
          Testimonios representativos. Nombres genéricos por confidencialidad de clientes.
        </p>
      </div>
    </section>
  );
}
