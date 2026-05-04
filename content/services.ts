import type { LucideIcon } from "lucide-react";
import { Bot, Code2, LifeBuoy, Network } from "lucide-react";

export type ServiceId = "soporte" | "infraestructura" | "web" | "automatizacion";

export interface Service {
  id: ServiceId;
  icon: LucideIcon;
  title: string;
  benefit: string;
  description: string;
  bullets: string[];
  testimonial: { quote: string; author: string };
  whatsappContext: string;
}

export const services: Service[] = [
  {
    id: "soporte",
    icon: LifeBuoy,
    title: "Soporte Técnico",
    benefit: "Tu equipo funcionando, siempre.",
    description:
      "Atención presencial en Gran Área Metropolitana y soporte remoto a todo el país. Diagnóstico, reparación, mantenimiento preventivo y respuesta a emergencias.",
    bullets: [
      "Reparación de PCs, laptops e impresoras",
      "Mantenimiento preventivo mensual",
      "Recuperación de datos y limpieza de virus",
    ],
    testimonial: {
      quote: "En 2 horas tenían todo funcionando.",
      author: "Oficina contable, San José",
    },
    whatsappContext:
      "Hola, vengo de su sitio. Necesito soporte técnico, ¿pueden contarme más?",
  },
  {
    id: "infraestructura",
    icon: Network,
    title: "Infraestructura y Redes",
    benefit: "Tu oficina conectada, sin caídas.",
    description:
      "Diseñamos, instalamos y mantenemos la red que tu empresa necesita. Cableado estructurado, servidores, respaldos automáticos y seguridad perimetral.",
    bullets: [
      "Cableado estructurado certificado",
      "Servidores y NAS con respaldo automático",
      "Configuración de firewalls y VPN",
    ],
    testimonial: {
      quote: "Pasamos de caídas semanales a cero en un mes.",
      author: "Clínica privada, Heredia",
    },
    whatsappContext:
      "Hola, vengo de su sitio. Tengo consulta sobre infraestructura y redes.",
  },
  {
    id: "web",
    icon: Code2,
    title: "Desarrollo Web",
    benefit: "Una web que vende, no que solo se ve bonita.",
    description:
      "Sitios corporativos, e-commerce y landing pages enfocados en convertir visitantes en clientes. Tecnología moderna, optimizada para Google y mobile.",
    bullets: [
      "Sitios corporativos optimizados para SEO",
      "Tiendas en línea con SINPE Móvil, BAC y BCR",
      "Landings de campaña listas en 7 días",
    ],
    testimonial: {
      quote: "Triplicamos consultas en 3 meses.",
      author: "Pyme de servicios legales, San José",
    },
    whatsappContext:
      "Hola, vengo de su sitio. Tengo consulta sobre desarrollo web.",
  },
  {
    id: "automatizacion",
    icon: Bot,
    title: "Automatización y Soluciones Digitales",
    benefit: "Menos tareas repetitivas, más tiempo para tu negocio.",
    description:
      "Chatbots para WhatsApp, integraciones entre sistemas y automatizaciones que ahorran horas cada semana. Te liberamos de lo manual.",
    bullets: [
      "Chatbots de WhatsApp con respuestas inteligentes",
      "Integración entre tu CRM, contabilidad y tienda",
      "Automatización de reportes y facturación electrónica",
    ],
    testimonial: {
      quote: "Ahorramos 20 horas semanales en facturación.",
      author: "Distribuidora, Alajuela",
    },
    whatsappContext:
      "Hola, vengo de su sitio. Tengo consulta sobre automatización.",
  },
];
