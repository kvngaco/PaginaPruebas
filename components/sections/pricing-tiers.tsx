"use client";

import { motion } from "motion/react";
import { Check, Mail, MessageCircle, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { quoteCategories } from "@/content/pricing";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function PricingTiers() {
  return (
    <section id="planes" className="section-y bg-muted/30 border-y border-border">
      <div className="container-page">
        <SectionHeading
          eyebrow="Cotizá tu solución"
          title="Elegí el ritmo que tu empresa necesita."
          subtitle="Cuatro formas de trabajar con EasyTech. Cada propuesta se adapta a tu caso. Cotización sin costo, respuesta en menos de 1 hora hábil."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4 items-stretch">
          {quoteCategories.map((cat, i) => {
            const Icon = cat.icon;
            const mailto = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(cat.emailSubject)}`;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={cn(cat.highlighted && "xl:-translate-y-3")}
              >
                <Card
                  className={cn(
                    "h-full shadow-card flex flex-col relative",
                    cat.highlighted && "border-2 border-accent shadow-card-hover",
                  )}
                >
                  {cat.badge ? (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground gap-1 px-3 py-1">
                      <Star className="size-3 fill-current" />
                      {cat.badge}
                    </Badge>
                  ) : null}

                  <CardContent className="flex-1 flex flex-col gap-5 p-6">
                    <span
                      className={cn(
                        "grid place-items-center size-12 rounded-xl text-white",
                        cat.highlighted ? "gradient-brand" : "bg-primary",
                      )}
                    >
                      <Icon className="size-6" />
                    </span>

                    <div>
                      <h3 className="text-xl font-heading font-bold">{cat.name}</h3>
                      <p className="mt-1.5 text-sm text-primary font-medium">
                        {cat.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground text-pretty">
                      {cat.description}
                    </p>

                    <ul className="space-y-2 flex-1">
                      {cat.features.map((feature) => (
                        <li key={feature} className="flex gap-2 text-sm">
                          <Check className="size-4 mt-0.5 text-success shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-2">
                      <Button
                        asChild
                        size="lg"
                        className={cn(
                          "w-full",
                          cat.highlighted && "gradient-brand text-white hover:opacity-90",
                        )}
                      >
                        <a
                          href={buildWhatsAppLink(cat.whatsappContext)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="size-4" />
                          Cotizar por WhatsApp
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="ghost" className="w-full">
                        <a href={mailto}>
                          <Mail className="size-4" />
                          Cotizar por correo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          ¿Tu caso combina varias áreas? Diseñamos una propuesta integral.{" "}
          <a href="#contacto" className="text-primary font-medium hover:underline">
            Conversemos →
          </a>
        </p>
      </div>
    </section>
  );
}
