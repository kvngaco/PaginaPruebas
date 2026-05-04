"use client";

import { useState } from "react";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface FormState {
  name: string;
  contact: string;
  message: string;
}

const initial: FormState = { name: "", contact: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const name = form.name.trim();
    const contact = form.contact.trim();
    const message = form.message.trim();

    if (name.length < 2 || name.length > 80) {
      toast.error("Escribe tu nombre (entre 2 y 80 caracteres).");
      return;
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRe = /^[+\d][\d\s\-()]{6,19}$/;
    if (!emailRe.test(contact) && !phoneRe.test(contact)) {
      toast.error("Pon un email válido o un número de teléfono.");
      return;
    }
    if (message.length < 10 || message.length > 1000) {
      toast.error("Cuéntanos un poco más (entre 10 y 1000 caracteres).");
      return;
    }

    setSubmitting(true);
    const context = `Hola, soy ${name}. ${message} (Contacto: ${contact})`;
    const link = buildWhatsAppLink(context);
    window.open(link, "_blank", "noopener,noreferrer");
    toast.success("¡Listo! Te llevamos a WhatsApp para conversar al instante.");
    setForm(initial);
    setSubmitting(false);
  }

  return (
    <section id="contacto" className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contacto"
          title="Conversemos. Sin formalidades."
          subtitle="Cuéntanos brevemente qué necesitas. Te respondemos en menos de 1 hora hábil con próximos pasos claros."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-5 max-w-5xl mx-auto">
          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-card space-y-5"
          >
            <div className="space-y-1.5">
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="¿Cómo te llamas?"
                required
                autoComplete="name"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="contact">WhatsApp o email</Label>
              <Input
                id="contact"
                value={form.contact}
                onChange={(e) => update("contact", e.target.value)}
                placeholder="Para contactarte de vuelta"
                required
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="message">¿En qué te ayudamos?</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Cuéntanos brevemente tu situación o necesidad."
                rows={5}
                required
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={submitting}
            >
              <Send className="size-4" />
              Enviar y recibir respuesta
            </Button>
            <p className="text-xs text-muted-foreground">
              Al enviar abrimos WhatsApp con tu mensaje precargado. No
              compartimos tus datos con terceros.
            </p>
          </form>

          <aside className="lg:col-span-2 space-y-4">
            <a
              href={buildWhatsAppLink(
                "Hola, vengo del formulario de contacto. Quiero conversar.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <span className="grid place-items-center size-11 rounded-xl bg-whatsapp text-white">
                <MessageCircle className="size-5" />
              </span>
              <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                WhatsApp directo
              </p>
              <p className="mt-1 text-lg font-heading font-bold">
                {siteConfig.contact.whatsappDisplay}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Respuesta en menos de 1 hora hábil
              </p>
            </a>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="block rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <span className="grid place-items-center size-11 rounded-xl bg-primary text-primary-foreground">
                <Mail className="size-5" />
              </span>
              <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Email
              </p>
              <p className="mt-1 text-base font-heading font-semibold break-all">
                {siteConfig.contact.email}
              </p>
            </a>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <span className="grid place-items-center size-11 rounded-xl bg-secondary text-secondary-foreground">
                <MapPin className="size-5" />
              </span>
              <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Ubicación · Horario
              </p>
              <p className="mt-1 text-base font-heading font-semibold">
                {siteConfig.contact.location}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {siteConfig.contact.schedule.weekday}
                <br />
                {siteConfig.contact.schedule.saturday}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
