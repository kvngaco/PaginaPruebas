import type { LucideIcon } from "lucide-react";
import { Bot, Handshake, MonitorSmartphone, Sparkles } from "lucide-react";

export interface QuoteCategory {
  id: "acompanamiento" | "aliado" | "web" | "automatizacion";
  icon: LucideIcon;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  whatsappContext: string;
  emailSubject: string;
  highlighted?: boolean;
  badge?: string;
}

export const quoteCategories: QuoteCategory[] = [
  {
    id: "acompanamiento",
    icon: Handshake,
    name: "Acompañamiento",
    tagline: "Tu equipo de TI a un mensaje de distancia.",
    description:
      "Soporte técnico continuo, mantenimiento preventivo y atención prioritaria para que tu operación nunca se detenga.",
    features: [
      "Soporte ilimitado por WhatsApp y remoto",
      "Visita presencial mensual incluida",
      "Mantenimiento preventivo programado",
      "Respaldo automático configurado",
    ],
    whatsappContext:
      "Hola, quiero cotizar el plan de Acompañamiento de TI para mi empresa.",
    emailSubject: "Cotización · Plan de Acompañamiento",
  },
  {
    id: "aliado",
    icon: Sparkles,
    name: "Aliado Tecnológico",
    tagline: "Tu socio estratégico de tecnología.",
    description:
      "Gestión integral de TI: infraestructura, automatización, desarrollo y consultoría con SLA y un punto de contacto dedicado.",
    features: [
      "Gestión completa de infraestructura, redes y nube",
      "SLA con tiempos de respuesta garantizados",
      "Desarrollo y automatización a medida",
      "Punto de contacto dedicado y reportes ejecutivos",
    ],
    whatsappContext:
      "Hola, queremos conversar sobre el plan Aliado Tecnológico para mi empresa.",
    emailSubject: "Cotización · Aliado Tecnológico",
    highlighted: true,
    badge: "Más completo",
  },
  {
    id: "web",
    icon: MonitorSmartphone,
    name: "Desarrollo Web y Apps",
    tagline: "Producto digital pensado para vender.",
    description:
      "Sitios corporativos, tiendas en línea, landings, portales y aplicaciones móviles a medida. Diseño moderno, performance y conversión.",
    features: [
      "Sitios corporativos y landings",
      "E-commerce con pasarelas locales e internacionales",
      "Apps móviles (iOS, Android, PWA)",
      "Portales internos y dashboards",
    ],
    whatsappContext:
      "Hola, quiero cotizar un proyecto de desarrollo web o aplicación.",
    emailSubject: "Cotización · Desarrollo Web / App",
  },
  {
    id: "automatizacion",
    icon: Bot,
    name: "Automatizaciones",
    tagline: "Que la tecnología trabaje por vos.",
    description:
      "Chatbots inteligentes, integraciones entre sistemas, facturación electrónica automática y orquestación de flujos completos con plataformas modernas.",
    features: [
      "Chatbots y asistentes virtuales (WhatsApp, web)",
      "Integraciones entre CRM, contabilidad, e-commerce",
      "Workflows visuales (n8n / Make / Zapier)",
      "Facturación electrónica y reportes automáticos",
    ],
    whatsappContext:
      "Hola, quiero cotizar una automatización o solución digital.",
    emailSubject: "Cotización · Automatización",
  },
];
