"use client";

import { motion } from "motion/react";
import { Check, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { pricingTiers } from "@/content/pricing";
import { cn } from "@/lib/utils";

export function PricingTiers() {
  return (
    <section id="planes" className="section-y bg-muted/30 border-y border-border">
      <div className="container-page">
        <SectionHeading
          eyebrow="Planes y paquetes"
          title="Elige el ritmo que tu empresa necesita."
          subtitle="Tres formas de trabajar con nosotros. ¿No estás seguro? El diagnóstico gratuito te ayuda a decidir."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3 items-stretch">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={cn(
                tier.highlighted && "lg:-translate-y-3",
              )}
            >
              <Card
                className={cn(
                  "h-full shadow-card flex flex-col relative",
                  tier.highlighted &&
                    "border-2 border-accent shadow-card-hover",
                )}
              >
                {tier.badge ? (
                  <Badge
                    className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground gap-1 px-3 py-1"
                  >
                    <Star className="size-3 fill-current" />
                    {tier.badge}
                  </Badge>
                ) : null}

                <CardContent className="flex-1 flex flex-col gap-5 p-6 lg:p-8">
                  <div>
                    <h3 className="text-xl font-heading font-bold">{tier.name}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {tier.tagline}
                    </p>
                  </div>

                  <div>
                    <p className={cn(
                      "text-3xl font-bold",
                      tier.highlighted && "text-gradient-brand",
                    )}>
                      {tier.price}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {tier.priceUnit}
                    </p>
                  </div>

                  <ul className="space-y-2.5 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-2.5 text-sm">
                        <Check className="size-4 mt-0.5 text-success shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <WhatsAppButton
                    label={tier.cta}
                    size="lg"
                    variant={tier.highlighted ? "default" : "outline"}
                    context={tier.whatsappContext}
                    className={cn(
                      "w-full",
                      tier.highlighted && "bg-primary text-primary-foreground hover:bg-primary/90",
                    )}
                    showIcon={false}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          ¿Tu caso no encaja? Diseñamos un paquete a medida.{" "}
          <a href="#contacto" className="text-primary font-medium hover:underline">
            Conversemos →
          </a>
        </p>
      </div>
    </section>
  );
}
