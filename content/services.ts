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
      "Procesamiento masivo de datos (Excel, bases de datos, APIs) con dashboards en vivo",
      "Automatización contable y facturación masiva: conciliación, asientos y cierres auditables",
      "Integraciones empresariales entre CRM, ERP, contabilidad, e-commerce y nube",
      "Workflows visuales tipo n8n / Make / Zapier desplegados a medida",
      "Asistentes virtuales y chatbots inteligentes para WhatsApp y web",
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
    title: "Soporte Técnico Integral",
    benefit: "Una sola puerta para toda tu operación.",
    description:
      "Resolvemos cualquier incidente informático: equipos, servidores, virtualización, firma digital, dominios, correo y redes. Atención remota inmediata, asistencia por llamada y visita presencial cuando el caso lo amerita. Diagnóstico siempre gratuito.",
    bullets: [
      "Modalidades flexibles: remoto, telefónico o presencial (GAM Costa Rica)",
      "Incidentes generales de PC, laptop, impresoras, correo y ofimática",
      "Servidores físicos y virtuales (VMware, Hyper-V, Proxmox) con respaldos",
      "Firma digital: instalación, drivers, errores BCCR/Hacienda y renovación",
      "Dominios, DNS, hosting y migraciones de correo corporativo",
      "Redes, WiFi empresarial, VPN y ciberseguridad",
    ],
    testimonial: {
      quote: "Una sola llamada y resuelven. Ya no peleo con varios proveedores.",
      author: "Despacho contable, San José",
    },
    whatsappContext:
      "Hola, vengo de su sitio. Necesito soporte técnico (incidente, servidor, firma digital, dominio u otro).",
  },
];
