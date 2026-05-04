"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Quote } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { services } from "@/content/services";

export function ServicesGrid() {
  return (
    <section id="servicios" className="section-y relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Lo que hacemos"
          title="Soluciones que no detienen tu empresa."
          subtitle="Tres líneas de servicio bajo un mismo equipo. Automatizamos lo repetitivo, construimos lo digital y aseguramos lo crítico."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Card className="h-full shadow-card hover:shadow-card-hover transition-shadow border-border">
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-4">
                      <span className="grid place-items-center size-12 rounded-xl gradient-brand text-white shrink-0">
                        <Icon className="size-6" />
                      </span>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-heading font-semibold">
                          {service.title}
                        </h3>
                        <p className="text-primary font-medium mt-0.5">
                          {service.benefit}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <p className="text-muted-foreground text-pretty">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2.5 text-sm">
                          <Check className="size-4 mt-0.5 text-success shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <figure className="rounded-xl bg-muted/50 border border-border p-4">
                      <Quote className="size-4 text-primary mb-1.5" />
                      <blockquote className="text-sm italic text-foreground/85">
                        “{service.testimonial.quote}”
                      </blockquote>
                      <figcaption className="mt-1.5 text-xs text-muted-foreground">
                        {service.testimonial.author}
                      </figcaption>
                    </figure>
                    <WhatsAppButton
                      label="Conversar por WhatsApp"
                      variant="outline"
                      size="sm"
                      context={service.whatsappContext}
                      className="w-full sm:w-auto"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
