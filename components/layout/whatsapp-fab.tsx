"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppFab() {
  return (
    <a
      href={buildWhatsAppLink("Hola, vengo de su sitio web. Quisiera información.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 left-5 z-40 grid place-items-center size-14 rounded-full bg-whatsapp text-white shadow-lg shadow-black/20 hover:scale-105 active:scale-95 transition-transform focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
    >
      <MessageCircle className="size-6" />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
