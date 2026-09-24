import type { LucideIcon } from "lucide-react";
import { Bot, Clock, Globe, Languages, ShieldCheck, Sparkles } from "lucide-react";

export type Lang = "en" | "es";

export interface PortfolioItem {
  name: string;
  /** Verified live URL. `null` = no public demo yet → shown as "on request". */
  url: string | null;
  tag: string;
  blurb: string;
}

export interface LandingDict {
  lang: Lang;
  /** path to the OTHER language version, for the toggle */
  altHref: string;
  altLabel: string;

  hero: {
    badge: string;
    titleLead: string;
    titleHighlight: string;
    titleTail: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    whatsappContext: string;
    microcopy: string;
    chips: string[];
  };

  trustBar: { icon: LucideIcon; label: string }[];

  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { icon: LucideIcon; title: string; benefit: string; bullets: string[] }[];
  };

  portfolio: {
    eyebrow: string;
    title: string;
    subtitle: string;
    liveLabel: string;
    privateLabel: string;
    visitLabel: string;
    items: PortfolioItem[];
  };

  why: {
    eyebrow: string;
    title: string;
    subtitle: string;
    points: { icon: LucideIcon; title: string; body: string }[];
  };

  process: {
    eyebrow: string;
    title: string;
    steps: { title: string; body: string }[];
  };

  finalCta: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    whatsappContext: string;
    note: string;
  };

  footerTagline: string;
}

/**
 * Portfolio URLs:
 * - securevault + sorteos are confirmed live (from the sales plan).
 * - The rest are `null` until Kevin confirms a public URL — DO NOT invent links.
 *   Fill the `url` field once verified and they auto-render as "Live demo".
 */

export const dictionaries: Record<Lang, LandingDict> = {
  en: {
    lang: "en",
    altHref: "/us/es",
    altLabel: "ES",

    hero: {
      badge: "Nearshore software & AI · US business hours",
      titleLead: "We build ",
      titleHighlight: "AI automation & web",
      titleTail: " for US businesses — without the offshore headaches.",
      subtitle:
        "A bilingual nearshore studio in the US Central time zone. Senior-quality software, AI that actually saves you hours, and a team you can talk to in plain English — or Spanish.",
      ctaPrimary: "Book a free intro call",
      ctaSecondary: "Message on WhatsApp",
      whatsappContext:
        "Hi, I saw your US landing page. I'd like to talk about a web or automation project.",
      microcopy: "No commitment. We reply within 1 business hour.",
      chips: ["Same US time zone", "Bilingual EN/ES", "Live portfolio", "USD invoicing"],
    },

    trustBar: [
      { icon: Clock, label: "US Central time zone" },
      { icon: Languages, label: "Bilingual EN / ES" },
      { icon: ShieldCheck, label: "Senior-quality code" },
      { icon: Sparkles, label: "AI-first automation" },
    ],

    services: {
      eyebrow: "What we do",
      title: "Two things we do better than most",
      subtitle:
        "We lead with AI automation and web. Everything starts with a free diagnosis of where your time and money are leaking.",
      items: [
        {
          icon: Bot,
          title: "AI Automation",
          benefit: "Put the busywork on autopilot.",
          bullets: [
            "AI chatbots trained on your business (web + WhatsApp), with human fallback",
            "“Goodbye spreadsheet” — turn a critical Excel into a real web app with roles",
            "Custom integrations between your CRM, store, accounting and tools",
            "Automated reports, scraping and data pipelines",
          ],
        },
        {
          icon: Globe,
          title: "Web & E-commerce",
          benefit: "A site that sells while you sleep.",
          bullets: [
            "High-conversion landing pages and corporate sites (Next.js, fast, SEO-ready)",
            "Online stores with US + Latin American payment gateways",
            "Admin panels and internal portals",
            "We already handle Stripe, MercadoPago and Tilopay payments",
          ],
        },
      ],
    },

    portfolio: {
      eyebrow: "Proof, not promises",
      title: "Software we actually shipped",
      subtitle:
        "Most freelancers show mockups. We show live products you can click through right now.",
      liveLabel: "Live demo",
      privateLabel: "Private demo — on request",
      visitLabel: "Open demo",
      items: [
        {
          name: "tpzpe.com — Urban Cadastre, Lote 5",
          url: "https://tpzpe.com",
          tag: "Public platform · Live domain",
          blurb:
            "Official platform for an urban cadastral survey in Lima, Peru (Telespazio LATAM): residents of three districts book their survey appointment online. Shipped on its own domain.",
        },
        {
          name: "SecureVault Business",
          url: "https://securevault-business.vercel.app",
          tag: "Security · Crypto",
          blurb:
            "Zero-knowledge password manager with real RSA-OAEP + AES-GCM encryption. Proof we handle serious security.",
        },
        {
          name: "AstroTech Store",
          url: null,
          tag: "E-commerce · CR + AR",
          blurb:
            "Tech store with Tilopay + MercadoPago + a Claude AI chatbot. We already run payments for two countries.",
        },
        {
          name: "Taller FM",
          url: null,
          tag: "B2B App · Roles",
          blurb:
            "Replaced an Excel “car control” sheet with a real web app: roles, importer, row-level security.",
        },
        {
          name: "Cotizador / Quote Builder",
          url: null,
          tag: "Automation · Docs",
          blurb:
            "Generates branded proposal documents from structured data. Document automation in action.",
        },
      ],
    },

    why: {
      eyebrow: "Why nearshore",
      title: "Why US companies pick us over offshore",
      subtitle:
        "You get the price advantage of LATAM with none of the usual offshore friction.",
      points: [
        {
          icon: Clock,
          title: "Your working hours",
          body: "Costa Rica = US Central time. We're online when you are — real-time, not next-day replies.",
        },
        {
          icon: Languages,
          title: "Fluent English & Spanish",
          body: "Real meetings in either language. Perfect if your team — or your customers — speak Spanish.",
        },
        {
          icon: ShieldCheck,
          title: "A company, not a gig",
          body: "You contract with EasyTech Services, with US & CR banking and USD invoicing. Contracts, SOWs, the works.",
        },
      ],
    },

    process: {
      eyebrow: "How it works",
      title: "From first call to launch in 4 steps",
      steps: [
        { title: "Free diagnosis", body: "A short call. We find where you're losing time or sales." },
        { title: "Fixed-scope proposal", body: "Clear deliverables, price and timeline. 40–50% to start." },
        { title: "We build", body: "You see progress live. Same time zone, constant communication." },
        { title: "Launch & support", body: "We ship, hand off the code, and offer a monthly care plan." },
      ],
    },

    finalCta: {
      title: "Let's find what's worth automating in your business",
      subtitle:
        "Free 20-minute diagnosis. No pitch deck, no commitment — just a clear next step.",
      ctaPrimary: "Book my free call",
      ctaSecondary: "Message on WhatsApp",
      whatsappContext:
        "Hi, I'd like to book the free diagnosis call about my business.",
      note: "Serving the US & Latin America · Replies within 1 business hour",
    },

    footerTagline: "Nearshore software & AI automation for the US and Latin America.",
  },

  es: {
    lang: "es",
    altHref: "/us",
    altLabel: "EN",

    hero: {
      badge: "Software y automatización con IA · Horario de EE.UU.",
      titleLead: "Hacemos ",
      titleHighlight: "webs y automatización con IA",
      titleTail: " para negocios en Estados Unidos — y hablamos tu idioma.",
      subtitle:
        "Un estudio nearshore bilingüe en el mismo huso horario que EE.UU. Software de calidad, IA que de verdad te ahorra horas, y un equipo con el que hablás en español (o en inglés).",
      ctaPrimary: "Agendá una llamada gratis",
      ctaSecondary: "Escribir por WhatsApp",
      whatsappContext:
        "Hola, vi su landing para Estados Unidos. Quiero conversar sobre un proyecto web o de automatización.",
      microcopy: "Sin compromiso. Te respondemos en menos de 1 hora hábil.",
      chips: ["Mismo huso que EE.UU.", "Bilingüe ES/EN", "Portafolio en vivo", "Cobro en USD"],
    },

    trustBar: [
      { icon: Clock, label: "Huso horario de EE.UU." },
      { icon: Languages, label: "Bilingüe ES / EN" },
      { icon: ShieldCheck, label: "Código de calidad" },
      { icon: Sparkles, label: "Automatización con IA" },
    ],

    services: {
      eyebrow: "Qué hacemos",
      title: "Dos cosas que hacemos mejor que la mayoría",
      subtitle:
        "Lideramos con automatización con IA y desarrollo web. Todo empieza con un diagnóstico gratis de dónde se te va el tiempo y el dinero.",
      items: [
        {
          icon: Bot,
          title: "Automatización con IA",
          benefit: "Poné el trabajo repetitivo en piloto automático.",
          bullets: [
            "Chatbots con IA entrenados en tu negocio (web + WhatsApp), con apoyo humano",
            "“Adiós Excel” — convertimos una hoja crítica en una app web real con roles",
            "Integraciones a medida entre tu CRM, tienda, contabilidad y herramientas",
            "Reportes automáticos, scraping y procesamiento de datos",
          ],
        },
        {
          icon: Globe,
          title: "Web y E-commerce",
          benefit: "Un sitio que vende mientras dormís.",
          bullets: [
            "Landings de alta conversión y sitios corporativos (Next.js, rápidos, con SEO)",
            "Tiendas en línea con pasarelas de EE.UU. y Latinoamérica",
            "Paneles de administración y portales internos",
            "Ya manejamos pagos con Stripe, MercadoPago y Tilopay",
          ],
        },
      ],
    },

    portfolio: {
      eyebrow: "Pruebas, no promesas",
      title: "Software que de verdad lanzamos",
      subtitle:
        "La mayoría muestra maquetas. Nosotros te mostramos productos en vivo que podés probar ahora mismo.",
      liveLabel: "Demo en vivo",
      privateLabel: "Demo privada — a pedido",
      visitLabel: "Abrir demo",
      items: [
        {
          name: "tpzpe.com — Catastro Urbano, Lote 5",
          url: "https://tpzpe.com",
          tag: "Plataforma pública · Dominio propio",
          blurb:
            "Plataforma oficial de un levantamiento catastral urbano en Lima, Perú (Telespazio LATAM): los vecinos de tres distritos agendan su cita en línea. Publicada con su propio dominio.",
        },
        {
          name: "SecureVault Business",
          url: "https://securevault-business.vercel.app",
          tag: "Seguridad · Cripto",
          blurb:
            "Gestor de contraseñas zero-knowledge con cifrado real RSA-OAEP + AES-GCM. Prueba de que manejamos seguridad seria.",
        },
        {
          name: "AstroTech Store",
          url: null,
          tag: "E-commerce · CR + AR",
          blurb:
            "Tienda tech con Tilopay + MercadoPago + chatbot con IA (Claude). Ya manejamos pagos de dos países.",
        },
        {
          name: "Taller FM",
          url: null,
          tag: "App B2B · Roles",
          blurb:
            "Reemplazamos un Excel de “control de carros” por una app web real: roles, importador y seguridad por fila.",
        },
        {
          name: "Cotizador",
          url: null,
          tag: "Automatización · Docs",
          blurb:
            "Genera documentos de propuesta con tu marca a partir de datos estructurados. Automatización de documentos en acción.",
        },
      ],
    },

    why: {
      eyebrow: "Por qué nearshore",
      title: "Por qué las empresas de EE.UU. nos eligen",
      subtitle:
        "Tenés la ventaja de precio de Latinoamérica sin la fricción típica del offshore.",
      points: [
        {
          icon: Clock,
          title: "Tu mismo horario",
          body: "Costa Rica = US Central. Estamos en línea cuando vos lo estás — respuestas en el momento, no al día siguiente.",
        },
        {
          icon: Languages,
          title: "Inglés y español fluidos",
          body: "Reuniones reales en cualquier idioma. Ideal si tu equipo — o tus clientes — hablan español.",
        },
        {
          icon: ShieldCheck,
          title: "Una empresa, no un freelance",
          body: "Contratás con EasyTech Services, con cuentas en EE.UU. y CR y facturación en USD. Contratos, SOW y todo en regla.",
        },
      ],
    },

    process: {
      eyebrow: "Cómo trabajamos",
      title: "De la primera llamada al lanzamiento en 4 pasos",
      steps: [
        { title: "Diagnóstico gratis", body: "Una llamada corta. Encontramos dónde perdés tiempo o ventas." },
        { title: "Propuesta con alcance fijo", body: "Entregables, precio y plazo claros. 40–50% para arrancar." },
        { title: "Construimos", body: "Ves el avance en vivo. Mismo huso horario, comunicación constante." },
        { title: "Lanzamiento y soporte", body: "Entregamos, te pasamos el código y ofrecemos un plan mensual de mantenimiento." },
      ],
    },

    finalCta: {
      title: "Encontremos qué vale la pena automatizar en tu negocio",
      subtitle:
        "Diagnóstico gratis de 20 minutos. Sin presentación de ventas, sin compromiso — solo un próximo paso claro.",
      ctaPrimary: "Agendar mi llamada gratis",
      ctaSecondary: "Escribir por WhatsApp",
      whatsappContext:
        "Hola, quiero agendar la llamada de diagnóstico gratis para mi negocio.",
      note: "Atendemos EE.UU. y Latinoamérica · Respondemos en menos de 1 hora hábil",
    },

    footerTagline: "Software nearshore y automatización con IA para EE.UU. y Latinoamérica.",
  },
};
