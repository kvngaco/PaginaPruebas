import type { LucideIcon } from "lucide-react";
import { Bot, LifeBuoy, MonitorSmartphone, Network } from "lucide-react";

export type ServiceId = "soporte" | "automatizacion" | "web" | "infraestructura";

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
    benefit: "Tu operación funcionando, siempre.",
    description:
      "Soporte presencial y remoto en toda América. Diagnóstico, reparación, mantenimiento preventivo y respuesta a emergencias para personas, profesionales y empresas.",
    bullets: [
      "Reparación de equipos, periféricos e impresoras",
      "Mantenimiento preventivo programado",
      "Recuperación de datos y limpieza de amenazas",
    ],
    testimonial: {
      quote: "En 2 horas tenían todo funcionando.",
      author: "Oficina contable, San José",
    },
    whatsappContext:
      "Hola, vengo de su sitio. Necesito soporte técnico, ¿pueden contarme más?",
  },
  {
    id: "automatizacion",
    icon: Bot,
    title: "Automatización y Soluciones Digitales",
    benefit: "Procesos modernos. Tiempo recuperado.",
    description:
      "Conectamos sistemas, automatizamos flujos y dejamos que la tecnología trabaje por vos. Chatbots inteligentes, integraciones entre plataformas, facturación electrónica automática y orquestación de procesos de punta a punta — con las herramientas más modernas del mercado.",
    bullets: [
      "Chatbots inteligentes y asistentes virtuales para WhatsApp y web",
      "Integraciones entre CRM, contabilidad, e-commerce y nube",
      "Automatización de reportes, facturación electrónica y notificaciones",
      "Workflows visuales tipo n8n / Make / Zapier desplegados a medida",
    ],
    testimonial: {
      quote: "Ahorramos 20 horas semanales en tareas repetitivas.",
      author: "Distribuidora, Alajuela",
    },
    whatsappContext:
      "Hola, vengo de su sitio. Quiero conversar sobre automatización y soluciones digitales.",
  },
  {
    id: "web",
    icon: MonitorSmartphone,
    title: "Desarrollo Web y Aplicaciones",
    benefit: "Producto digital que vende y escala.",
    description:
      "Sitios corporativos, e-commerce, landings, portales internos y aplicaciones web/móviles. Tecnología moderna, optimizada para conversión, SEO y experiencia de usuario.",
    bullets: [
      "Sitios corporativos y landings de alta conversión",
      "Tiendas en línea con pasarelas locales (SINPE, BAC, BCR, internacionales)",
      "Aplicaciones web y móviles a medida (PWA, iOS, Android)",
      "Portales internos, intranets y dashboards de gestión",
    ],
    testimonial: {
      quote: "Triplicamos consultas en 3 meses.",
      author: "Pyme de servicios legales, San José",
    },
    whatsappContext:
      "Hola, vengo de su sitio. Tengo consulta sobre desarrollo web o aplicaciones.",
  },
  {
    id: "infraestructura",
    icon: Network,
    title: "Infraestructura y Redes",
    benefit: "Conectividad sin caídas.",
    description:
      "Diseñamos, instalamos y mantenemos la red que tu empresa necesita: cableado certificado, servidores, nube, respaldos automáticos y seguridad perimetral.",
    bullets: [
      "Cableado estructurado certificado",
      "Servidores físicos, NAS y nube híbrida con respaldo automático",
      "Configuración de firewalls, VPN y seguridad de red",
    ],
    testimonial: {
      quote: "Pasamos de caídas semanales a cero en un mes.",
      author: "Clínica privada, Heredia",
    },
    whatsappContext:
      "Hola, vengo de su sitio. Tengo consulta sobre infraestructura y redes.",
  },
];
