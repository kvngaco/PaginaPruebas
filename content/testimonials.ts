import type { ServiceId } from "./services";

export interface Testimonial {
  initials: string;
  name: string;
  role: string;
  sector: string;
  quote: string;
  metric: string;
  serviceId: ServiceId;
  serviceLabel: string;
}

export const testimonials: Testimonial[] = [
  {
    initials: "MR",
    name: "María R.",
    role: "Gerente Administrativa",
    sector: "Bufete legal, San José",
    quote:
      "Llevábamos años con problemas de red que nadie resolvía. EasyTech vino, hizo un diagnóstico honesto, y en dos semanas teníamos todo estable. Lo mejor: nos explicaron en palabras que entendemos.",
    metric: "−90% caídas de red",
    serviceId: "soporte",
    serviceLabel: "Soporte Especializado",
  },
  {
    initials: "CJ",
    name: "Carlos J.",
    role: "Dueño",
    sector: "Pyme de comercio, Alajuela",
    quote:
      "Necesitábamos una tienda en línea que aceptara SINPE Móvil y tarjetas. La tuvimos lista en menos de un mes y desde el primer día empezamos a vender. El acompañamiento post-lanzamiento marcó la diferencia.",
    metric: "+180% ventas en 6 meses",
    serviceId: "web",
    serviceLabel: "Desarrollo Web",
  },
  {
    initials: "LV",
    name: "Laura V.",
    role: "Coordinadora de Operaciones",
    sector: "Distribuidora, Heredia",
    quote:
      "El chatbot de WhatsApp nos cambió la vida. Antes una persona dedicaba la mañana entera a responder consultas básicas; ahora el bot las maneja y solo escala lo importante. Recuperamos esas 4 horas diarias.",
    metric: "20 horas/semana ahorradas",
    serviceId: "automatizacion",
    serviceLabel: "Automatización",
  },
];
