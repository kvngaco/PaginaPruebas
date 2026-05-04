# EasyTech Services S.A. — Sitio Corporativo

Sitio web persuasivo de **EasyTech Services S.A.** (San José, Costa Rica), construido con Next.js 16 (App Router), Tailwind v4, shadcn/ui y TypeScript estricto. Pensado para conversión: cada sección aplica principios de Cialdini, AIDA y reducción de fricción para llevar al visitante a contactar por WhatsApp.

## 🧱 Stack

- **Framework:** Next.js 16.2 (App Router, Turbopack)
- **UI:** Tailwind CSS v4 + shadcn/ui (preset Radix-Nova)
- **Animación:** motion/react (con `useReducedMotion`)
- **Tipografía:** Plus Jakarta Sans (headings) + Inter (body) vía `next/font`
- **Iconos:** lucide-react
- **Forms:** validación manual + sonner para toasts
- **Chatbot:** árbol de decisiones client-side (sin API), fallback a WhatsApp con contexto

## 🚀 Scripts

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # build estático SSG
npm run type-check   # tsc --noEmit
npm run lint         # eslint
```

## 📁 Estructura

```
app/
├── layout.tsx           # Root layout, fonts, JSON-LD LocalBusiness
├── page.tsx             # Home single-page (10 secciones)
├── globals.css          # Tokens shadcn (oklch) + utilidades brand
├── sitemap.ts
└── robots.ts

components/
├── layout/              # SiteHeader, SiteFooter, WhatsAppFab
├── sections/            # Hero, TrustBar, Services, Process, Testimonials, Guarantee, Pricing, Faq, FinalCta, ContactForm
├── chatbot/             # ChatbotWidget + decision-tree.ts + ChatbotLoader (dynamic)
├── shared/              # SectionHeading, AnimatedCounter, WhatsAppButton
└── ui/                  # Primitivas shadcn

content/                 # Datos tipados (services, pricing, faq, testimonials, process)
lib/
├── site-config.ts       # Datos de contacto y stats centralizados
├── whatsapp.ts          # buildWhatsAppLink() con sanitización
└── utils.ts             # cn() helper
docs/PLAN_MAESTRO.md     # Plan original A→K (54KB) — fuente de verdad para copy y arquitectura
```

## 💬 Chatbot

100% client-side. Cuando no sabe responder o el usuario pide humano, abre `wa.me/50661386223?text=<contexto>` con el contexto de la conversación pre-rellenado.

Editar el árbol en `components/chatbot/decision-tree.ts`.

## 🎨 Personalización rápida

- **Datos de contacto / cupos del mes:** `lib/site-config.ts`
- **Servicios:** `content/services.ts`
- **Precios:** `content/pricing.ts`
- **FAQ:** `content/faq.ts`
- **Testimonios:** `content/testimonials.ts`
- **Paleta y tokens:** `app/globals.css`

## 🚢 Deploy

1. Push a GitHub
2. Importar repo en [vercel.com/new](https://vercel.com/new)
3. Vercel detecta Next.js automáticamente — sin config extra
4. Setear dominio custom

## 📞 Contacto

- **WhatsApp:** +506 6138-6223
- **Email:** info@easytechservices.cr
- **Ubicación:** San José, Costa Rica

---

© 2026 EasyTech Services S.A.
