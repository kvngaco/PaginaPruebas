"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { siteConfig } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section className="section-y relative overflow-hidden">
      <div className="absolute inset-0 gradient-brand -z-10" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_50%_120%,rgba(255,255,255,0.18),transparent_60%)]"
      />

      <div className="container-page text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-balance max-w-3xl mx-auto"
        >
          ¿Listo para que tu tecnología deje de ser un dolor de cabeza?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-5 text-base sm:text-lg text-white/85 max-w-2xl mx-auto text-pretty"
        >
          Atendemos un máximo de {siteConfig.scarcity.monthlySlots} nuevos
          clientes por mes para garantizar la calidad. En {siteConfig.scarcity.currentMonth} nos
          quedan <strong className="text-white">{siteConfig.scarcity.remainingSlots} cupos</strong>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-base"
          >
            <Link href="#contacto">Solicitar consultoría</Link>
          </Button>
          <WhatsAppButton
            size="lg"
            label="Escribir por WhatsApp"
            variant="outline"
            className="border-white/40 text-white bg-transparent hover:bg-white/10"
            context="Hola, quiero aprovechar uno de los cupos de este mes."
          />
        </motion.div>

        <p className="mt-5 text-sm text-white/75">
          Te respondemos en menos de 1 hora hábil. Sin compromiso.
        </p>
      </div>
    </section>
  );
}
