export interface PricingTier {
  id: "puntual" | "acompanamiento" | "aliado";
  name: string;
  tagline: string;
  price: string;
  priceUnit: string;
  features: string[];
  cta: string;
  whatsappContext: string;
  highlighted?: boolean;
  badge?: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "puntual",
    name: "Puntual",
    tagline: "Para quienes tienen un problema específico.",
    price: "Desde ₡25.000",
    priceUnit: "por intervención",
    features: [
      "Diagnóstico gratuito",
      "1 servicio puntual (reparación, configuración o instalación)",
      "Garantía de 30 días sobre el trabajo realizado",
      "Soporte por WhatsApp durante el servicio",
    ],
    cta: "Solicitar cotización",
    whatsappContext:
      "Hola, me interesa el plan Puntual. ¿Pueden cotizarme un servicio específico?",
  },
  {
    id: "acompanamiento",
    name: "Acompañamiento",
    tagline: "Para pymes que quieren tranquilidad mensual.",
    price: "Desde ₡85.000",
    priceUnit: "por mes · cancelas cuando quieras",
    features: [
      "Todo lo del plan Puntual",
      "Soporte ilimitado por WhatsApp y remoto",
      "1 visita presencial al mes incluida",
      "Mantenimiento preventivo mensual",
      "Respaldo automático configurado",
      "Reporte mensual de salud de tu infraestructura",
    ],
    cta: "Empezar este mes",
    whatsappContext:
      "Hola, quiero contratar el plan Acompañamiento. ¿Cómo arrancamos?",
    highlighted: true,
    badge: "Más popular",
  },
  {
    id: "aliado",
    name: "Aliado Tecnológico",
    tagline: "Para empresas e instituciones que necesitan TI completa.",
    price: "Cotización personalizada",
    priceUnit: "según alcance",
    features: [
      "Todo lo del plan Acompañamiento",
      "SLA con tiempo de respuesta de 4 horas hábiles",
      "Visitas presenciales ilimitadas",
      "Gestión completa de infraestructura, redes y servidores",
      "Desarrollo y automatización a medida",
      "Punto de contacto dedicado",
    ],
    cta: "Agendar reunión",
    whatsappContext:
      "Hola, queremos conversar sobre el plan Aliado Tecnológico para mi empresa.",
  },
];
