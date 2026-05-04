export const siteConfig = {
  name: "EasyTech Services",
  legalName: "EasyTech Services S.A.",
  tagline: "Hacemos fácil la tecnología.",
  description:
    "Servicios de TI en Costa Rica: soporte técnico, infraestructura, desarrollo web y automatización para personas, profesionales y pymes. Diagnóstico gratuito.",
  url: "https://easytechservices.net",
  ogImage: "/og/cover.png",

  contact: {
    whatsappNumber: "50661386223",
    whatsappDisplay: "+506 6138-6223",
    email: "info@easytechservices.cr",
    location: "San José, Costa Rica",
    schedule: {
      weekday: "Lun–Vie 8am–6pm",
      saturday: "Sáb 9am–1pm",
    },
  },

  social: {
    facebook: "https://www.facebook.com/easytechservicescr",
    linkedin: "https://www.linkedin.com/company/easytechservices",
    instagram: "https://www.instagram.com/easytechservicescr",
  },

  scarcity: {
    monthlySlots: 8,
    remainingSlots: 3,
    currentMonth: "mayo",
  },

  stats: {
    clients: 500,
    yearsInMarket: 8,
    onTimeDelivery: 99,
    firstContactResolution: 98,
  },

  nav: [
    { label: "Servicios", href: "#servicios" },
    { label: "Cómo trabajamos", href: "#proceso" },
    { label: "Casos", href: "#casos" },
    { label: "Planes", href: "#planes" },
    { label: "Preguntas", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
