import type { LucideIcon } from "lucide-react";
import { Bot, MonitorSmartphone, ShieldCheck } from "lucide-react";

export type ServiceId = "automatizacion" | "web" | "soporte";

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
    id: "automatizacion",
    icon: Bot,
    title: "Automatización y Soluciones Digitales",
    benefit: "Procesos modernos. Tiempo recuperado.",
    description:
      "Conectamos sistemas y dejamos que la tecnología trabaje por vos. Automatización por voz, asistentes virtuales por WhatsApp, facturación electrónica end-to-end y procesamiento avanzado de grandes volúmenes de datos. Operaciones que antes tomaban horas, ahora corren solas.",
    bullets: [
      "Automatización por voz: llamadas que agendan, informan y transfieren solas",
      "Asistentes virtuales y chatbots inteligentes para WhatsApp y web",
      "Procesamiento masivo de datos (Excel, bases de datos, APIs) con dashboards en vivo",
      "Integraciones entre CRM, contabilidad, e-commerce, nube y herramientas internas",
      "Workflows visuales tipo n8n / Make / Zapier desplegados a medida",
    ],
    testimonial: {
      quote: "Recuperamos más de 20 horas semanales de trabajo manual.",
      author: "Distribuidora regional, Centroamérica",
    },
    whatsappContext:
      "Hola, vengo de su sitio. Quiero conversar sobre automatización y soluciones digitales.",
  },
  {
    id: "web",
    icon: MonitorSmartphone,
    title: "Desarrollo Web y Aplicaciones",
    benefit: "Producto digital que escala con tu negocio.",
    description:
      "Sitios corporativos, e-commerce, portales internos y aplicaciones web/móviles a medida. Performance, SEO, conversión y experiencia de usuario en cada decisión de diseño.",
    bullets: [
      "Sitios corporativos y landings de alta conversión",
      "Tiendas en línea con pasarelas locales e internacionales",
      "Aplicaciones web y móviles a medida (PWA, iOS, Android)",
      "Portales internos, intranets y dashboards de gestión",
    ],
    testimonial: {
      quote: "Triplicamos consultas en 3 meses. La nueva web vende sola.",
      author: "Pyme de servicios profesionales",
    },
    whatsappContext:
      "Hola, vengo de su sitio. Tengo consulta sobre desarrollo web o aplicaciones.",
  },
  {
    id: "soporte",
    icon: ShieldCheck,
    title: "Soporte Técnico Especializado",
    benefit: "Tu infraestructura, asegurada.",
    description:
      "Soporte de nivel medio-alto orientado a infraestructura crítica: redes empresariales, servidores, ciberseguridad y análisis técnico. Cubrimos remoto a toda América y presencial en GAM Costa Rica.",
    bullets: [
      "Redes empresariales: diseño, instalación y monitoreo",
      "Servidores físicos, NAS y nube híbrida con respaldos automáticos",
      "Ciberseguridad: firewalls, VPN, limpieza de amenazas avanzada",
      "Análisis técnico, auditorías y recuperación de datos",
    ],
    testimonial: {
      quote: "Pasamos de caídas semanales a operación estable en menos de un mes.",
      author: "Clínica privada, Costa Rica",
    },
    whatsappContext:
      "Hola, vengo de su sitio. Necesito soporte técnico especializado (redes, servidores o seguridad).",
  },
];
