# PLAN MAESTRO — EasyTech Services S.A.

**Stack:** Next.js 16 (App Router) + Tailwind v4 + shadcn/ui + TypeScript estricto
**Deploy:** Vercel
**Idioma del sitio:** Español de Costa Rica
**Tono:** cercano, profesional, claro, sin jerga innecesaria. "Hablamos como tu vecino que sabe de tecnología."

---

## 1. SITEMAP Y ARQUITECTURA

### 1.1 Decisión: Hybrid (single-page + páginas auxiliares)

La home será **single-page persuasiva** (todas las secciones de conversión vivien en `/`). Las páginas adicionales se reservan para SEO long-tail, contenido legal y profundización por servicio.

### 1.2 Rutas (App Router)

```
/                              → Home (single-page de conversión)
/servicios/soporte-tecnico     → Landing dedicada SEO
/servicios/infraestructura     → Landing dedicada SEO
/servicios/desarrollo-web      → Landing dedicada SEO
/servicios/automatizacion      → Landing dedicada SEO
/casos                         → Casos de éxito ampliados
/sobre-nosotros                → Historia, equipo, valores
/contacto                      → Página de contacto extendida
/blog                          → (futuro, dejar route preparada)
/blog/[slug]                   → (futuro)
/legal/privacidad              → Política de privacidad (Ley 8968 CR)
/legal/terminos                → Términos y condiciones
/gracias                       → Thank-you page post-form (para tracking)
```

### 1.3 Estructura de carpetas

```
app/
├── layout.tsx                          # RootLayout: fonts, metadata base, ThemeProvider
├── page.tsx                            # Home single-page
├── globals.css                         # Tailwind v4 + tokens shadcn
├── opengraph-image.tsx                 # OG dinámico
├── icon.tsx                            # Favicon dinámico
├── robots.ts
├── sitemap.ts
├── (marketing)/
│   ├── servicios/
│   │   ├── soporte-tecnico/page.tsx
│   │   ├── infraestructura/page.tsx
│   │   ├── desarrollo-web/page.tsx
│   │   └── automatizacion/page.tsx
│   ├── casos/page.tsx
│   ├── sobre-nosotros/page.tsx
│   └── contacto/page.tsx
├── legal/
│   ├── privacidad/page.tsx
│   └── terminos/page.tsx
└── gracias/page.tsx

components/
├── ui/                                 # shadcn primitives (button, card, accordion, etc.)
├── layout/
│   ├── site-header.tsx
│   ├── site-footer.tsx
│   ├── mobile-nav.tsx
│   └── whatsapp-fab.tsx                # Floating Action Button persistente
├── sections/
│   ├── hero.tsx
│   ├── trust-bar.tsx
│   ├── services-grid.tsx
│   ├── process-steps.tsx
│   ├── testimonials.tsx
│   ├── guarantee.tsx
│   ├── pricing-tiers.tsx
│   ├── faq.tsx
│   ├── final-cta.tsx
│   └── contact-form.tsx
├── chatbot/
│   ├── chatbot-widget.tsx              # Container + estado
│   ├── chatbot-launcher.tsx            # Botón flotante
│   ├── chatbot-window.tsx              # UI conversación
│   ├── chatbot-message.tsx
│   ├── chatbot-options.tsx             # Botones de opción
│   └── decision-tree.ts                # Árbol completo (data)
└── shared/
    ├── section-heading.tsx
    ├── service-icon.tsx
    ├── whatsapp-button.tsx             # CTA reutilizable con tracking
    └── animated-counter.tsx

lib/
├── site-config.ts                      # Datos centralizados (teléfono, email, URL, etc.)
├── whatsapp.ts                         # buildWhatsAppLink(context) helper
├── analytics.ts                        # Wrappers de tracking
├── utils.ts                            # cn() de shadcn
└── seo.ts                              # buildMetadata() helper

content/
├── services.ts                         # Tipado de servicios
├── testimonials.ts
├── faq.ts
├── pricing.ts
└── process.ts

types/
└── index.ts

public/
├── logos/
├── og/
└── icons/
```

### 1.4 Componentes shadcn requeridos

`button`, `card`, `accordion`, `badge`, `dialog`, `sheet`, `tabs`, `tooltip`, `avatar`, `separator`, `input`, `textarea`, `label`, `form`, `sonner` (toasts), `navigation-menu`, `dropdown-menu`, `scroll-area`, `skeleton`.

### 1.5 Componentes custom (no shadcn)

`WhatsAppFAB`, `ChatbotWidget`, `ServiceCard`, `ProcessStep`, `TestimonialCard`, `PricingCard`, `TrustLogo`, `AnimatedCounter`, `SectionHeading`, `Container`.

---

## 2. SISTEMA DE DISEÑO

### 2.1 Identidad visual

**Concepto:** "Tech confiable, humano, costarricense". Azul profundo (confianza tecnológica) + cian eléctrico (innovación) + acento ámbar cálido (cercanía, calor humano tico).

### 2.2 Paleta de colores (HSL — formato shadcn)

**Light mode**

| Token                  | HSL                | Uso                                    |
|------------------------|--------------------|----------------------------------------|
| `--background`         | `0 0% 100%`        | Fondo base                             |
| `--foreground`         | `222 47% 11%`      | Texto principal                        |
| `--card`               | `0 0% 100%`        | Cards                                  |
| `--card-foreground`    | `222 47% 11%`      | Texto en cards                         |
| `--popover`            | `0 0% 100%`        |                                        |
| `--popover-foreground` | `222 47% 11%`      |                                        |
| `--primary`            | `217 91% 35%`      | Azul EasyTech (CTAs, links)            |
| `--primary-foreground` | `0 0% 100%`        |                                        |
| `--secondary`          | `190 95% 45%`      | Cian eléctrico (acentos tech)          |
| `--secondary-foreground` | `222 47% 11%`    |                                        |
| `--accent`             | `28 96% 54%`       | Ámbar cálido (highlights, badges)      |
| `--accent-foreground`  | `0 0% 100%`        |                                        |
| `--muted`              | `210 40% 96%`      | Fondos suaves                          |
| `--muted-foreground`   | `215 16% 47%`      | Texto secundario                       |
| `--border`             | `214 32% 91%`      |                                        |
| `--input`              | `214 32% 91%`      |                                        |
| `--ring`               | `217 91% 35%`      | Focus ring                             |
| `--destructive`        | `0 84% 60%`        | Errores                                |
| `--destructive-foreground` | `0 0% 100%`    |                                        |
| `--success`            | `142 76% 36%`      | Validaciones, garantías                |
| `--warning`            | `38 92% 50%`       | Avisos                                 |
| `--whatsapp`           | `142 70% 49%`      | CTAs WhatsApp                          |

**Dark mode** (sí lo incluimos — empresa tech sin dark mode da señal contradictoria)

| Token                  | HSL                |
|------------------------|--------------------|
| `--background`         | `222 47% 6%`       |
| `--foreground`         | `210 40% 98%`      |
| `--card`               | `222 47% 9%`       |
| `--card-foreground`    | `210 40% 98%`      |
| `--primary`            | `217 91% 60%`      |
| `--primary-foreground` | `222 47% 11%`      |
| `--secondary`          | `190 95% 55%`      |
| `--accent`             | `28 96% 60%`       |
| `--muted`              | `217 33% 17%`      |
| `--muted-foreground`   | `215 20% 65%`      |
| `--border`             | `217 33% 20%`      |
| `--input`              | `217 33% 20%`      |
| `--ring`               | `217 91% 60%`      |

### 2.3 Tipografía

- **Heading:** `Plus Jakarta Sans` (Google Fonts) — moderna, geométrica, profesional, excelente en español.
- **Body:** `Inter` (Google Fonts) — legibilidad superior, ya optimizada por Vercel.
- **Mono:** `JetBrains Mono` (solo para código en blog futuro).

**Configurar con `next/font/google`** con `display: 'swap'` y CSS variables `--font-heading`, `--font-body`.

### 2.4 Escala tipográfica (Tailwind v4)

| Uso             | Clase desktop                      | Clase mobile          |
|-----------------|------------------------------------|-----------------------|
| Display (hero)  | `text-6xl lg:text-7xl font-bold`   | `text-4xl`            |
| H1              | `text-5xl font-bold`               | `text-3xl`            |
| H2              | `text-4xl font-bold`               | `text-2xl`            |
| H3              | `text-2xl font-semibold`           | `text-xl`             |
| H4              | `text-xl font-semibold`            | `text-lg`             |
| Body L          | `text-lg leading-relaxed`          | `text-base`           |
| Body            | `text-base leading-relaxed`        | `text-base`           |
| Small           | `text-sm`                          | `text-sm`             |
| Caption         | `text-xs uppercase tracking-wide`  | `text-xs`             |

### 2.5 Espaciado

Sistema base 4px (default Tailwind). Secciones con padding vertical `py-20 md:py-28 lg:py-32`. Container max `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.

### 2.6 Radius

`--radius: 0.75rem` (12px) — moderno, amigable. Cards `rounded-2xl`, botones `rounded-lg`, badges `rounded-full`.

### 2.7 Sombras

| Token            | Uso                            |
|------------------|--------------------------------|
| `shadow-sm`      | Inputs                         |
| `shadow-md`      | Cards en reposo                |
| `shadow-lg`      | Cards hover                    |
| `shadow-xl`      | Modales, popovers              |
| `shadow-2xl`     | Hero floating cards            |

Sombra custom para cards "premium": `shadow-[0_8px_30px_rgb(0,0,0,0.08)]`.

### 2.8 Animaciones

- `framer-motion` (o `motion`) para entradas de secciones (fade-up con stagger)
- Transiciones de color/transform con `transition-all duration-300 ease-out`
- Respetar `prefers-reduced-motion`

---

## 3. ESTRUCTURA DE SECCIONES

### 3.1 HEADER / NAV (sticky)

**Propósito:** Orientación + CTA siempre visible. Reducir fricción al contacto.

**Layout:**
- Logo (izq) | Nav (centro: Servicios ▾, Casos, Nosotros, Contacto) | CTA WhatsApp + Toggle dark (der)
- Mobile: Logo | Hamburger (sheet)
- Sticky con `backdrop-blur` + `bg-background/80` al hacer scroll

**Copy:**
- Logo alt: `"EasyTech Services - Soluciones de TI en Costa Rica"`
- Nav items: `Servicios` · `Casos` · `Nosotros` · `Contacto`
- CTA principal: `"WhatsApp"` con icono (verde `--whatsapp`)
- Tooltip CTA: `"Respuesta en menos de 1 hora"`

**Componentes shadcn:** `NavigationMenu`, `Sheet` (mobile), `Button`, `DropdownMenu` (servicios).

**Principios:** Reducción de fricción (CTA siempre visible), claridad (5 opciones máx), prueba social implícita en tooltip ("respuesta rápida").

---

### 3.2 HERO

**Propósito:** Captar atención en 5 segundos + comunicar promesa + dirigir a acción.

**Layout:** 2 columnas desktop (60/40). Izq: contenido. Der: ilustración o mockup laptop con dashboard.

**Copy:**

- **Eyebrow (badge):** `"Servicios de TI en Costa Rica"`
- **Headline (H1):**
  > **"Hacemos fácil la tecnología de tu empresa."**
- **Subheadline:**
  > "Soporte técnico, redes, desarrollo web y automatización para personas, profesionales y pymes en todo Costa Rica. Hablamos claro, resolvemos rápido."
- **CTA primario:** `"Diagnóstico gratuito"` → ancla a `#contacto` o abre dialog con form
- **CTA secundario:** `"Escribir por WhatsApp"` (icono) → wa.me con contexto "Hola, vi su sitio y quiero información"
- **Microcopy debajo de CTAs:**
  > "Sin compromiso. Te respondemos en menos de 1 hora hábil."
- **Trust strip inline:**
  > "+500 clientes atendidos · 8 años en CR · Respaldo y garantía por escrito"

**Componentes shadcn:** `Button` (2 variantes), `Badge`, `Avatar` group para clientes mini.

**Principios aplicados:**
- **Claridad:** promesa en una frase (Donald Miller / StoryBrand)
- **Reducción de fricción:** "gratuito", "sin compromiso", "1 hora"
- **Prueba social:** trust strip con números
- **Doble CTA:** alta intención (diagnóstico) + baja fricción (WhatsApp)
- **Loss aversion implícita:** "resolvemos rápido" sugiere costo de no actuar

---

### 3.3 TRUST BAR

**Propósito:** Validación social inmediata post-hero.

**Layout:** Banda horizontal con eyebrow + grid de 6 logos en escala de grises (hover color). Mobile: scroll horizontal.

**Copy:**
- **Eyebrow:** `"Confían en nosotros pymes e instituciones en todo el país"`
- **Stats row (debajo de logos):** 3 contadores animados
  - `"500+"` clientes atendidos
  - `"8 años"` operando en Costa Rica
  - `"99%"` proyectos entregados a tiempo
- **Caption fina:** `"Datos actualizados a 2026"`

**Componentes:** `AnimatedCounter` custom, `Separator`, contenedor con `grayscale hover:grayscale-0`.

**Principios:** **Cialdini — Prueba social + Autoridad**. Los números son específicos (no redondos forzados) para credibilidad.

---

### 3.4 SERVICIOS (4 cards)

**Propósito:** Mostrar el qué con foco en beneficio (no feature).

**Layout:** Grid 2x2 desktop, stack mobile. Cada card con icono, título, beneficio principal, 3 bullets, mini-testimonial inline, link "Ver más →".

**Copy de la sección:**
- **Eyebrow:** `"Lo que hacemos"`
- **H2:** `"Cuatro líneas de servicio. Una sola promesa: que la tecnología no te detenga."`
- **Subhead:** `"Desde reparar tu equipo hasta automatizar procesos completos de tu negocio. Cubrimos todo el ciclo."`

#### Card 1 — Soporte Técnico

- **Icono:** `LifeBuoy` (lucide)
- **Título:** `"Soporte Técnico"`
- **Beneficio (subtítulo):** `"Tu equipo funcionando, siempre."`
- **Descripción:** `"Atención presencial en Gran Área Metropolitana y soporte remoto a todo el país. Diagnóstico, reparación, mantenimiento preventivo y respuesta a emergencias."`
- **Bullets:**
  - `"Reparación de PCs, laptops e impresoras"`
  - `"Mantenimiento preventivo mensual"`
  - `"Recuperación de datos y limpieza de virus"`
- **Mini-testimonial:** `"En 2 horas tenían todo funcionando." — Oficina contable, San José`
- **CTA:** `"Conocer más →"`

#### Card 2 — Infraestructura y Redes

- **Icono:** `Network`
- **Título:** `"Infraestructura y Redes"`
- **Beneficio:** `"Tu oficina conectada, sin caídas."`
- **Descripción:** `"Diseñamos, instalamos y mantenemos la red que tu empresa necesita. Cableado estructurado, servidores, respaldos automáticos y seguridad perimetral."`
- **Bullets:**
  - `"Cableado estructurado certificado"`
  - `"Servidores y NAS con respaldo automático"`
  - `"Configuración de firewalls y VPN"`
- **Mini-testimonial:** `"Pasamos de caídas semanales a cero en un mes." — Clínica privada, Heredia`
- **CTA:** `"Conocer más →"`

#### Card 3 — Desarrollo Web

- **Icono:** `Code2`
- **Título:** `"Desarrollo Web"`
- **Beneficio:** `"Una web que vende, no que solo se ve bonita."`
- **Descripción:** `"Sitios corporativos, e-commerce y landing pages enfocados en convertir visitantes en clientes. Tecnología moderna, optimizada para Google y mobile."`
- **Bullets:**
  - `"Sitios corporativos optimizados para SEO"`
  - `"Tiendas en línea con pasarelas locales (BAC, BCR, SINPE)"`
  - `"Landings de campaña listas en 7 días"`
- **Mini-testimonial:** `"Triplicamos consultas en 3 meses." — Pyme de servicios legales, San José`
- **CTA:** `"Conocer más →"`

#### Card 4 — Automatización y Soluciones Digitales

- **Icono:** `Bot`
- **Título:** `"Automatización y Soluciones Digitales"`
- **Beneficio:** `"Menos tareas repetitivas, más tiempo para tu negocio."`
- **Descripción:** `"Chatbots para WhatsApp, integraciones entre sistemas y automatizaciones que ahorran horas cada semana. Te liberamos de lo manual."`
- **Bullets:**
  - `"Chatbots de WhatsApp con respuestas inteligentes"`
  - `"Integración entre tu CRM, contabilidad y tienda"`
  - `"Automatización de reportes y facturación electrónica"`
- **Mini-testimonial:** `"Ahorramos 20 horas semanales en facturación." — Distribuidora, Alajuela`
- **CTA:** `"Conocer más →"`

**Componentes shadcn:** `Card`, `CardHeader`, `CardContent`, `Badge`, `Button` variant `link`.

**Principios:**
- **Beneficio sobre feature** (Jobs-to-be-Done)
- **Cialdini — Prueba social** (testimonial por card)
- **Reducción de carga cognitiva** (4 cards, 3 bullets cada una — regla mágica del 3-4)

---

### 3.5 CÓMO TRABAJAMOS / PROCESO (4 pasos)

**Propósito:** Hacer tangible el "cómo", reducir incertidumbre, generar compromiso por anclaje del proceso.

**Layout:** Timeline horizontal desktop (4 columnas con conector), vertical mobile. Números grandes, icono, título, descripción corta.

**Copy de la sección:**
- **Eyebrow:** `"Cómo trabajamos"`
- **H2:** `"Cuatro pasos. Cero sorpresas."`
- **Subhead:** `"Trabajamos con un proceso claro y por escrito desde el primer día. Sabes qué pasa, cuándo pasa y cuánto cuesta."`

**Pasos:**

1. **Paso 1 — Diagnóstico gratuito**
   - Icono: `Search`
   - `"Conversamos por WhatsApp o videollamada. Entendemos tu situación, tus equipos y tus objetivos. Sin costo y sin compromiso."`
   - Duración estimada: `"~30 minutos"`

2. **Paso 2 — Propuesta clara**
   - Icono: `FileText`
   - `"Te enviamos una propuesta por escrito con alcance, tiempos y precio cerrado. Si hay opciones, las explicamos. Tú decides con toda la información."`
   - Duración: `"24-48 horas"`

3. **Paso 3 — Ejecución acompañada**
   - Icono: `Wrench`
   - `"Ejecutamos el trabajo con avances semanales. Tienes un punto de contacto directo y reportes claros. Nada de 'luego te aviso'."`
   - Duración: `"según proyecto"`

4. **Paso 4 — Soporte continuo**
   - Icono: `ShieldCheck`
   - `"Garantía por escrito y plan de soporte opcional. Estamos para cuando nos necesites, no solo cuando vendemos."`
   - Duración: `"mientras quieras"`

**CTA al final del proceso:**
> `"Empezar con el diagnóstico gratuito"` (botón primario)

**Componentes:** Timeline custom con `Card` shadcn por paso, `Separator` horizontal animado.

**Principios:**
- **Efecto Zeigarnik:** mostrar el proceso completo crea tensión por completarlo
- **Cialdini — Compromiso y coherencia:** una vez visualizan el paso 1 (gratis), siguen a 2, 3, 4
- **Reducción de incertidumbre:** "cero sorpresas", precios cerrados, tiempos por escrito

---

### 3.6 CASOS DE ÉXITO / TESTIMONIOS

**Propósito:** Validación social profunda con contexto.

**Layout:** Carousel de 3 cards o grid 3 columnas. Cada card: avatar + nombre + cargo/sector + ubicación + quote + métrica destacada + servicio asociado (badge).

**Copy de la sección:**
- **Eyebrow:** `"Lo que dicen nuestros clientes"`
- **H2:** `"Resultados reales, en español, sin maquillaje."`
- **Subhead:** `"No vendemos humo. Estos son ejemplos representativos de cómo trabajamos con clientes en Costa Rica."`

**Disclaimer fina (importante para honestidad):**
> `"Testimonios representativos. Nombres genéricos por confidencialidad de clientes."`

**Testimonio 1:**
- Avatar: iniciales `MR` sobre primary
- **Nombre:** `María R.`
- **Cargo:** `Gerente Administrativa`
- **Sector:** `Bufete legal, San José`
- **Quote:**
  > `"Llevábamos años con problemas de red que nadie resolvía. EasyTech vino, hizo un diagnóstico honesto, y en dos semanas teníamos todo estable. Lo mejor: nos explicaron en palabras que entendemos."`
- **Métrica:** `"-90% caídas de red"`
- **Badge servicio:** `Infraestructura y Redes`

**Testimonio 2:**
- Avatar: `CJ`
- **Nombre:** `Carlos J.`
- **Cargo:** `Dueño`
- **Sector:** `Pyme de comercio, Alajuela`
- **Quote:**
  > `"Necesitábamos una tienda en línea que aceptara SINPE Móvil y tarjetas. La tuvimos lista en menos de un mes y desde el primer día empezamos a vender. El acompañamiento post-lanzamiento marcó la diferencia."`
- **Métrica:** `"+180% ventas en 6 meses"`
- **Badge servicio:** `Desarrollo Web`

**Testimonio 3:**
- Avatar: `LV`
- **Nombre:** `Laura V.`
- **Cargo:** `Coordinadora de Operaciones`
- **Sector:** `Distribuidora, Heredia`
- **Quote:**
  > `"El chatbot de WhatsApp nos cambió la vida. Antes una persona dedicaba la mañana entera a responder consultas básicas; ahora el bot las maneja y solo escala lo importante. Recuperamos esas 4 horas diarias."`
- **Métrica:** `"20 horas/semana ahorradas"`
- **Badge servicio:** `Automatización`

**Componentes shadcn:** `Card`, `Avatar`, `Badge`, `Carousel` (de shadcn extendido o `embla-carousel-react`).

**Principios:**
- **Cialdini — Prueba social fuerte:** específica, con métrica, con sector identificable
- **Cialdini — Simpatía:** nombres tico-cercanos, ubicaciones reales
- **Honestidad declarada:** el disclaimer aumenta credibilidad paradójicamente

---

### 3.7 GARANTÍA / REDUCTORES DE RIESGO

**Propósito:** Eliminar la objeción "¿y si no funciona?"

**Layout:** Banda full-width con fondo `bg-primary/5` o degradado sutil. Icono grande + headline + 3 garantías en columnas + sello visual.

**Copy:**

- **Eyebrow:** `"Nuestro compromiso por escrito"`
- **H2:**
  > `"Si no resolvemos, no cobramos."`
- **Subhead:**
  > `"Es así de simple. Ponemos por escrito qué vamos a hacer, en cuánto tiempo y por cuánto. Si no cumplimos, no nos pagas. Sin letra chica."`

**Tres garantías (3 columnas con icono):**

1. **Diagnóstico siempre gratis**
   - Icono: `Gift`
   - `"La primera conversación, la visita inicial o la auditoría remota no tienen costo. Pagas solo si avanzas."`

2. **Precio cerrado por escrito**
   - Icono: `FileCheck`
   - `"Cotización detallada antes de empezar. No hay 'extras' inesperados. Si surge algo, lo conversamos antes."`

3. **Garantía de satisfacción**
   - Icono: `ShieldCheck`
   - `"30 días de garantía en todos los servicios. Si algo falla por nuestra parte, lo resolvemos sin costo."`

**Sello visual lateral:** Badge circular `"Garantía EasyTech 30 días"`.

**Componentes:** `Card` con `bg-primary/5`, iconos lucide grandes.

**Principios:**
- **Reducción de riesgo (frame de inversión):** convierte la decisión en "no tengo nada que perder"
- **Cialdini — Reciprocidad:** dar diagnóstico gratis activa devolución
- **Cialdini — Compromiso público:** "por escrito" amplifica confianza

---

### 3.8 PAQUETES / PLANES (anclaje + decoy)

**Propósito:** Facilitar decisión, anclar percepción de precio, dirigir al tier intermedio.

**Layout:** 3 cards horizontales. La del medio elevada visualmente con badge "Más popular", borde `--accent`, ligeramente escalada.

**Copy de la sección:**
- **Eyebrow:** `"Planes y paquetes"`
- **H2:** `"Elige el ritmo que tu empresa necesita."`
- **Subhead:** `"Tres formas de trabajar con nosotros. ¿No estás seguro? El diagnóstico gratuito te ayuda a decidir."`

#### Tier 1 — Básico ("Resolvé hoy")

- **Nombre:** `"Puntual"`
- **Tagline:** `"Para quienes tienen un problema específico."`
- **Precio:** `"Desde ₡25.000"`
- **Sub-precio:** `"por intervención"`
- **Incluye:**
  - `"Diagnóstico gratuito"`
  - `"1 servicio puntual (reparación, configuración, instalación)"`
  - `"Garantía 30 días sobre el trabajo realizado"`
  - `"Soporte por WhatsApp durante el servicio"`
- **CTA:** `"Solicitar cotización"`

#### Tier 2 — Pro ⭐ MÁS POPULAR (decoy + ancla)

- **Badge:** `"Más popular"` (color `--accent`)
- **Nombre:** `"Acompañamiento"`
- **Tagline:** `"Para pymes que quieren tranquilidad mensual."`
- **Precio:** `"Desde ₡85.000"`
- **Sub-precio:** `"por mes · cancelas cuando quieras"`
- **Incluye:**
  - `"Todo lo del plan Puntual"`
  - `"Soporte ilimitado por WhatsApp y remoto"`
  - `"1 visita presencial al mes incluida"`
  - `"Mantenimiento preventivo mensual"`
  - `"Respaldo automático configurado"`
  - `"Reporte mensual de salud de tu infraestructura"`
- **CTA primario:** `"Empezar este mes"`
- **Microcopy:** `"Sin permanencia. Cancelas cuando quieras."`

#### Tier 3 — Empresarial (ancla alta)

- **Nombre:** `"Aliado Tecnológico"`
- **Tagline:** `"Para empresas e instituciones que necesitan TI completa."`
- **Precio:** `"Cotización personalizada"`
- **Sub-precio:** `"según alcance"`
- **Incluye:**
  - `"Todo lo del plan Acompañamiento"`
  - `"SLA con tiempos de respuesta garantizados (4 horas hábiles)"`
  - `"Visitas presenciales ilimitadas"`
  - `"Gestión completa de infraestructura, redes y servidores"`
  - `"Desarrollo y automatización a medida"`
  - `"Punto de contacto dedicado"`
- **CTA:** `"Agendar reunión"`

**Nota fina debajo del grid:**
> `"¿Tu caso no encaja? Diseñamos un paquete a medida. Conversemos."`

**Componentes:** `Card`, `Badge`, `Button`, `Separator`, `CheckCircle2` icons (lucide).

**Principios:**
- **Anclaje:** tier 1 ancla bajo, tier 3 ancla alto, tier 2 se percibe como "balance perfecto"
- **Decoy effect:** tier 2 destacado visualmente desvía elección hacia él
- **Reducción de riesgo:** "sin permanencia", "cancelas cuando quieras"
- **Goldilocks principle:** 3 opciones óptimas para decisión

---

### 3.9 FAQ (neutralización de objeciones)

**Propósito:** Resolver dudas que frenan la conversión, sin requerir contacto.

**Layout:** 2 columnas desktop con `Accordion` shadcn. Buscador opcional arriba (no crítico v1).

**Copy de la sección:**
- **Eyebrow:** `"Preguntas frecuentes"`
- **H2:** `"Lo que más nos preguntan, respondido sin rodeos."`
- **Subhead:** `"Si tu pregunta no está aquí, escríbenos por WhatsApp y te respondemos en menos de 1 hora hábil."`

**Preguntas:**

1. **`"¿Cuánto cuesta una visita o un diagnóstico?"`**
   > `"El diagnóstico inicial siempre es gratuito, ya sea remoto o presencial dentro del Gran Área Metropolitana. Pagas solo si decides avanzar con la solución que te proponemos. Para cantones fuera del GAM, conversamos previamente sobre el viático."`

2. **`"¿En cuánto tiempo me responden si tengo una emergencia?"`**
   > `"En horario hábil (lunes a viernes 8am-6pm), respondemos en menos de 1 hora. Para clientes con plan Acompañamiento o Aliado Tecnológico, ofrecemos respuesta en menos de 4 horas garantizadas, incluyendo fines de semana."`

3. **`"¿Trabajan con empresas pequeñas o solo con grandes?"`**
   > `"Trabajamos con todos: desde profesionales independientes que necesitan arreglar su laptop, hasta instituciones con decenas de equipos. Más de la mitad de nuestros clientes son pymes y emprendimientos."`

4. **`"¿Qué pasa si después del trabajo el problema vuelve?"`**
   > `"Todo nuestro trabajo tiene 30 días de garantía por escrito. Si el mismo problema vuelve dentro de ese período, lo resolvemos sin costo adicional. Punto."`

5. **`"¿Atienden fuera de San José?"`**
   > `"Sí. El soporte remoto cubre todo Costa Rica sin costo adicional. Para visitas presenciales, atendemos sin recargo en el GAM (San José, Heredia, Alajuela, Cartago) y coordinamos viáticos para zonas más alejadas."`

6. **`"¿Cuánto tarda un sitio web o una automatización?"`**
   > `"Una landing simple: 7 días hábiles. Un sitio corporativo: 3-4 semanas. Un e-commerce completo: 4-8 semanas. Automatizaciones simples: 1-2 semanas. Todo se confirma por escrito en la propuesta antes de empezar."`

7. **`"¿Puedo cancelar el plan mensual cuando quiera?"`**
   > `"Sí, sin permanencia y sin penalización. Solo te pedimos avisarnos con 15 días de anticipación para cerrar prolijamente lo que esté en proceso."`

8. **`"¿Manejan facturación electrónica y emiten factura para crédito fiscal?"`**
   > `"Sí, somos contribuyentes formales y emitimos factura electrónica timbrada por Hacienda en todos nuestros servicios. Útil para tu deducción tributaria."`

**Componentes:** `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`.

**Principios:**
- **Neutralización de objeciones explícita** (precio, tiempo, garantía, cobertura, cancelación, formalidad)
- **Reducción de fricción cognitiva**
- **Cialdini — Autoridad:** respuestas concretas con números demuestran experiencia

---

### 3.10 CTA FINAL / CIERRE

**Propósito:** Última oportunidad de conversión con urgencia honesta.

**Layout:** Sección full-width con fondo gradient `from-primary to-secondary`, texto blanco, 2 CTAs grandes centrados.

**Copy:**

- **H2 (display):**
  > `"¿Listo para que tu tecnología deje de ser un dolor de cabeza?"`
- **Subhead:**
  > `"Atendemos un máximo de 8 nuevos clientes por mes para garantizar la calidad de nuestro acompañamiento. En abril nos quedan 3 cupos."`
- **CTA primario (grande):** `"Agendar diagnóstico gratuito"`
- **CTA secundario (outline blanco):** `"Escribir por WhatsApp ahora"`
- **Microcopy debajo:**
  > `"Te respondemos en menos de 1 hora hábil. Sin compromiso."`
- **Trust micro:** `"+500 clientes en CR · Garantía por escrito · Diagnóstico gratis"`

**Importante sobre la urgencia:**
- El número de cupos debe ser real o configurable desde `site-config.ts`. Nunca mentir.
- Si EasyTech no quiere usar urgencia por cupos, alternativa honesta:
  > `"Cada propuesta la trabajamos personalmente. Mientras antes nos escribas, antes empezamos."`

**Componentes:** Container con gradient bg, `Button` size lg variants `default` y `outline`.

**Principios:**
- **Cialdini — Escasez** (cupos limitados, real)
- **Loss aversion** ("deje de ser un dolor de cabeza")
- **Última llamada a la acción** (principio AIDA — Action)
- **Doble CTA** para distintos niveles de intención

---

### 3.11 CONTACTO

**Propósito:** Captura de leads con mínima fricción.

**Layout:** 2 columnas desktop. Izq: form 3 campos. Der: datos directos (WhatsApp, email, ubicación, horario, mapa estático opcional).

**Copy:**
- **Eyebrow:** `"Contacto"`
- **H2:** `"Conversemos. Sin formalidades."`
- **Subhead:** `"Cuéntanos brevemente qué necesitas. Te respondemos en menos de 1 hora hábil con próximos pasos claros."`

**Formulario (3 campos):**
- Label `"Nombre"` → input `"¿Cómo te llamas?"`
- Label `"WhatsApp o email"` → input `"Para contactarte de vuelta"`
- Label `"¿En qué te ayudamos?"` → textarea `"Cuéntanos brevemente tu situación o necesidad"`
- Botón submit: `"Enviar y recibir respuesta"`
- Microcopy bajo botón: `"Al enviar aceptas nuestra Política de Privacidad. No compartimos tus datos."`

**Datos directos (columna derecha):**
- WhatsApp grande con número formateado: `"+506 6138-6223"` → click abre wa.me
- Email: `"info@easytechservices.cr"` → mailto
- Ubicación: `"San José, Costa Rica"` con icono `MapPin`
- Horario: `"Lun-Vie 8am-6pm · Sáb 9am-1pm"`
- Redes sociales (LinkedIn, Facebook, Instagram) iconos

**Submit handler v1:**
- Sin backend: el form abre `wa.me` con mensaje pre-construido `"Hola, soy {nombre}. {mensaje}. Mi contacto: {contacto}"`. Redirige a `/gracias`.
- v2 futuro: integrar Resend o Formspree para llegar a inbox.

**Componentes shadcn:** `Form` (react-hook-form + zod), `Input`, `Textarea`, `Label`, `Button`, `Sonner` (toast confirmación).

**Principios:**
- **Reducción de fricción extrema:** 3 campos, lenguaje conversacional
- **Cialdini — Reciprocidad:** ofrece respuesta rápida explícita
- **Compromiso pequeño:** form corto activa coherencia

---

### 3.12 FOOTER

**Layout:** 4 columnas desktop. Logo + descripción | Servicios (links) | Empresa (links) | Contacto + redes. Banda inferior con copyright + legal.

**Copy:**

- **Columna 1 (logo + tagline):**
  - Logo + `"Hacemos fácil la tecnología de tu empresa."`
  - Mini-iconos redes sociales

- **Columna 2 — Servicios:**
  - Soporte Técnico
  - Infraestructura y Redes
  - Desarrollo Web
  - Automatización

- **Columna 3 — Empresa:**
  - Sobre nosotros
  - Casos de éxito
  - Blog (próximamente)
  - Contacto

- **Columna 4 — Contacto:**
  - WhatsApp: +506 6138-6223
  - info@easytechservices.cr
  - San José, Costa Rica
  - Lun-Vie 8am-6pm

- **Banda inferior:**
  - `© 2026 EasyTech Services S.A. Todos los derechos reservados.`
  - Links: `Política de Privacidad` · `Términos y Condiciones`
  - Cédula jurídica visible (formato CR): `Cédula jurídica: 3-101-XXXXXX`

**Componentes:** Grid simple, `Separator`.

---

### 3.13 ELEMENTOS PERSISTENTES

#### WhatsApp FAB (Floating Action Button)

- Botón circular fijo bottom-right (`fixed bottom-6 right-6 z-40`)
- Verde WhatsApp, icono blanco
- Tooltip al hover: `"Escríbenos por WhatsApp"`
- Mobile: ocultar si chatbot está abierto
- Z-index ordenado: chatbot > FAB

#### Chatbot Widget

Bottom-right, segundo botón sobre el FAB de WhatsApp (se reorganizan visualmente). Ver sección 5.

---

## 4. COPY PERSUASIVO — PRINCIPIOS APLICADOS

### 4.1 Cialdini (los 6)

| Principio       | Dónde se aplica                                                                                                                         |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| **Reciprocidad**| Diagnóstico gratuito (hero, garantía, FAQ). Mini-asesoría sin costo en chatbot. Microcopy "Sin compromiso".                            |
| **Compromiso**  | Proceso de 4 pasos visibles. Form corto que escala a propuesta. Plan mensual "cancelas cuando quieras" baja barrera de compromiso inicial. |
| **Prueba social**| Trust bar (+500 clientes). Mini-testimonials por servicio. Sección de testimonios completa. Stats animados.                            |
| **Autoridad**   | "8 años en CR". Tecnologías mencionadas con propiedad. Garantía por escrito. Datos específicos en FAQ.                                  |
| **Simpatía**    | Tono cercano "tico". Nombres y ubicaciones reales. "Hablamos claro". "Vecino que sabe de tecnología".                                   |
| **Escasez**     | "Máximo 8 nuevos clientes por mes". "Quedan 3 cupos en abril". (Solo si es real — configurar en site-config.) |

### 4.2 AIDA

- **Atención (Hero):** headline grande + promesa clara + visual fuerte
- **Interés (Servicios + Proceso):** beneficios específicos + cómo trabajan
- **Deseo (Testimonios + Garantía):** validación social + eliminación de riesgo
- **Acción (Pricing + CTA Final + Contacto):** múltiples puntos de conversión escalonados

### 4.3 Reducción de fricción

- WhatsApp como canal principal (más usado en CR que email)
- Form de 3 campos máximo
- WhatsApp FAB persistente
- Chatbot client-side sin esperar a conexión backend
- CTAs duales en hero y cierre (alta y baja intención)
- Microcopy explícito ("sin compromiso", "1 hora", "gratis")

### 4.4 Anclaje y framing

- **Pricing tiers:** tier 3 "cotización personalizada" ancla alto, tier 1 "desde ₡25.000" ancla bajo, tier 2 se ve como "el balance perfecto"
- **Framing de garantía:** "Si no resolvemos, no cobramos" reframe de "asumimos el riesgo nosotros"
- **Framing de diagnóstico:** "gratuito" en lugar de "incluido"
- **Framing de cancelación:** "cancelas cuando quieras" en lugar de "sin permanencia obligatoria"

### 4.5 Loss aversion

- **Hero subhead implícita:** "resolvemos rápido" sugiere costo de no actuar
- **Servicios:** mini-testimonials enfatizan lo que se evitó (caídas, horas perdidas)
- **CTA final:** "deje de ser un dolor de cabeza" apela al dolor presente
- **Mensaje de chatbot fallback:** "no pierdas más tiempo, conversemos por WhatsApp"

---

## 5. CHATBOT (client-side, sin API)

### 5.1 Arquitectura

- 100% client-side. Estado en React (`useState` o `useReducer`).
- Árbol de decisiones tipado en `components/chatbot/decision-tree.ts`.
- Persistencia ligera en `localStorage` para recordar última conversación (opcional v1).
- Tracking: cada nodo visitado dispara evento `chatbot_node_visited`.

### 5.2 Tipo de nodo

Cada nodo tiene:
```
{
  id: string
  message: string                  // texto del bot
  options?: Array<{
    label: string                  // texto del botón
    nextId: string                 // siguiente nodo
  }>
  isLeaf?: boolean                 // si es hoja, mostrar CTA WhatsApp
  whatsappContext?: string         // contexto a inyectar en wa.me
}
```

### 5.3 Árbol completo

#### NODO RAÍZ — `root`

- **Mensaje del bot:**
  > `"¡Hola! Soy el asistente de EasyTech. ¿En qué te puedo ayudar hoy? 👋"`
- **Opciones:**
  1. `"Necesito soporte técnico"` → `support`
  2. `"Quiero mejorar mi red o infraestructura"` → `network`
  3. `"Necesito un sitio web o tienda en línea"` → `web`
  4. `"Quiero automatizar procesos"` → `automation`
  5. `"Tengo otra consulta"` → `other`

---

#### RAMA SOPORTE TÉCNICO — `support`

- **Mensaje:**
  > `"Genial, en soporte técnico cubrimos desde reparaciones hasta mantenimiento. ¿Qué necesitas exactamente?"`
- **Opciones:**
  1. `"Mi computadora no enciende o falla"` → `support_repair`
  2. `"Quiero mantenimiento preventivo"` → `support_maintenance`
  3. `"Recuperar datos / quitar virus"` → `support_recovery`
  4. `"Hablar con una persona"` → `whatsapp_support`

##### `support_repair`
- **Mensaje:**
  > `"Hacemos reparación de PCs, laptops e impresoras. El diagnóstico es gratuito (presencial en GAM o remoto al país entero). En la mayoría de casos lo resolvemos en menos de 48 horas. ¿Querés agendar el diagnóstico?"`
- **Opciones:**
  1. `"Sí, agendar ahora"` → `whatsapp_support_repair`
  2. `"Más información"` → `whatsapp_support`

##### `support_maintenance`
- **Mensaje:**
  > `"Tenemos planes de mantenimiento mensual desde ₡85.000 que incluyen visitas, soporte ilimitado por WhatsApp y respaldos automáticos. Ideal para oficinas y pymes. ¿Te paso los detalles por WhatsApp?"`
- **Opciones:**
  1. `"Sí, envíenme detalles"` → `whatsapp_support_maintenance`
  2. `"Volver al inicio"` → `root`

##### `support_recovery`
- **Mensaje:**
  > `"Tratamos casos de recuperación de datos, eliminación de virus y ransomware. Importante: la posibilidad de recuperación depende del tipo de daño. Necesitamos verlo. ¿Conversamos por WhatsApp para coordinar el diagnóstico gratuito?"`
- **Opciones:**
  1. `"Sí, conversemos"` → `whatsapp_support_recovery`
  2. `"Volver al inicio"` → `root`

---

#### RAMA INFRAESTRUCTURA — `network`

- **Mensaje:**
  > `"Perfecto. Hacemos cableado estructurado, instalación de servidores, redes WiFi empresariales y respaldos. ¿Qué describe mejor tu situación?"`
- **Opciones:**
  1. `"Mi red se cae o anda lenta"` → `network_issues`
  2. `"Voy a montar / mudar oficina"` → `network_new`
  3. `"Necesito respaldos y servidores"` → `network_servers`
  4. `"Hablar con una persona"` → `whatsapp_network`

##### `network_issues`
- **Mensaje:**
  > `"En estos casos hacemos una auditoría de red para identificar el cuello de botella (cableado, equipo, configuración o cobertura). La auditoría es gratuita en GAM. ¿Coordinamos?"`
- **Opciones:**
  1. `"Sí, agendar auditoría"` → `whatsapp_network_audit`
  2. `"Volver al inicio"` → `root`

##### `network_new`
- **Mensaje:**
  > `"Excelente, ese es el momento ideal. Diseñamos la red completa: cableado certificado, equipos, WiFi, servidores y seguridad. Te entregamos plano y propuesta cerrada. ¿Te paso un caso similar y conversamos?"`
- **Opciones:**
  1. `"Sí, quiero conversar"` → `whatsapp_network_new`
  2. `"Volver al inicio"` → `root`

##### `network_servers`
- **Mensaje:**
  > `"Manejamos servidores físicos, NAS, respaldos en la nube y configuraciones híbridas. La elección depende de tu volumen y presupuesto. ¿Conversamos por WhatsApp para entender tu caso?"`
- **Opciones:**
  1. `"Sí, conversemos"` → `whatsapp_network_servers`
  2. `"Volver al inicio"` → `root`

---

#### RAMA DESARROLLO WEB — `web`

- **Mensaje:**
  > `"¡Buenísimo! Hacemos sitios corporativos, e-commerce y landings. ¿Qué andas buscando?"`
- **Opciones:**
  1. `"Sitio corporativo / institucional"` → `web_corporate`
  2. `"Tienda en línea (e-commerce)"` → `web_ecommerce`
  3. `"Landing para campaña"` → `web_landing`
  4. `"Hablar con una persona"` → `whatsapp_web`

##### `web_corporate`
- **Mensaje:**
  > `"Sitios corporativos optimizados para Google y mobile. Tiempo típico: 3-4 semanas. Inversión desde ₡450.000 según alcance. ¿Conversamos los detalles?"`
- **Opciones:**
  1. `"Sí, cotizar mi caso"` → `whatsapp_web_corporate`
  2. `"Volver al inicio"` → `root`

##### `web_ecommerce`
- **Mensaje:**
  > `"Tiendas con SINPE Móvil, BAC, BCR y tarjetas internacionales. Tiempo: 4-8 semanas. Inversión desde ₡950.000. Te recomendamos plataforma según tu volumen. ¿Cotizamos?"`
- **Opciones:**
  1. `"Sí, cotizar"` → `whatsapp_web_ecommerce`
  2. `"Volver al inicio"` → `root`

##### `web_landing`
- **Mensaje:**
  > `"Landings de campaña listas en 7 días hábiles, optimizadas para conversión y Google Ads. Inversión desde ₡180.000. ¿Te enviamos referencias por WhatsApp?"`
- **Opciones:**
  1. `"Sí, ver referencias"` → `whatsapp_web_landing`
  2. `"Volver al inicio"` → `root`

---

#### RAMA AUTOMATIZACIÓN — `automation`

- **Mensaje:**
  > `"Genial. Automatizamos lo que te quita tiempo: chatbots, integraciones entre sistemas, facturación, reportes. ¿Qué te interesa?"`
- **Opciones:**
  1. `"Chatbot de WhatsApp"` → `auto_chatbot`
  2. `"Integrar mis sistemas (CRM, contabilidad, tienda)"` → `auto_integration`
  3. `"Automatizar reportes o facturación"` → `auto_reports`
  4. `"Hablar con una persona"` → `whatsapp_automation`

##### `auto_chatbot`
- **Mensaje:**
  > `"Hacemos chatbots de WhatsApp que responden FAQ, agendan citas y escalan a humano cuando hace falta. Implementación típica: 1-2 semanas. Desde ₡280.000. ¿Conversamos tu caso?"`
- **Opciones:**
  1. `"Sí, quiero uno"` → `whatsapp_auto_chatbot`
  2. `"Volver al inicio"` → `root`

##### `auto_integration`
- **Mensaje:**
  > `"Conectamos CRMs, sistemas contables (Mekano, ContaPlus), e-commerce y herramientas en la nube vía API o no-code (Zapier, Make). Cotización según sistemas. ¿Conversamos?"`
- **Opciones:**
  1. `"Sí, conversemos"` → `whatsapp_auto_integration`
  2. `"Volver al inicio"` → `root`

##### `auto_reports`
- **Mensaje:**
  > `"Automatizamos generación de reportes, facturación electrónica timbrada y envíos automáticos por correo o WhatsApp. Te ahorra horas semanales. ¿Te paso un caso similar?"`
- **Opciones:**
  1. `"Sí, ver caso"` → `whatsapp_auto_reports`
  2. `"Volver al inicio"` → `root`

---

#### RAMA OTRA CONSULTA — `other`

- **Mensaje:**
  > `"Sin problema. Para consultas que no encajan en nuestras categorías estándar, lo mejor es conversar directo. Te conectamos por WhatsApp con respuesta en menos de 1 hora hábil."`
- **Opciones:**
  1. `"Ir a WhatsApp"` → `whatsapp_other`
  2. `"Volver al inicio"` → `root`

---

#### NODOS HOJA — WhatsApp con contexto

Cada nodo `whatsapp_*` es una hoja que muestra:
- **Mensaje del bot:**
  > `"Perfecto. Te abrimos WhatsApp con el contexto de lo que conversamos. 👇"`
- **CTA único grande:** `"Abrir WhatsApp"` → genera link

**Mapeo contexto → mensaje precargado:**

| Nodo                          | Contexto del mensaje WhatsApp                                                                  |
|-------------------------------|------------------------------------------------------------------------------------------------|
| `whatsapp_support`            | `"Hola, vengo del chatbot. Necesito soporte técnico, ¿pueden contarme más?"`                   |
| `whatsapp_support_repair`     | `"Hola, mi equipo tiene un problema y quisiera agendar el diagnóstico gratuito."`              |
| `whatsapp_support_maintenance`| `"Hola, me interesa el plan de mantenimiento mensual. ¿Me cuentan más?"`                       |
| `whatsapp_support_recovery`   | `"Hola, necesito ayuda con recuperación de datos / virus. ¿Podemos coordinar?"`                |
| `whatsapp_network`            | `"Hola, vengo del chatbot, tengo consulta sobre infraestructura y redes."`                     |
| `whatsapp_network_audit`      | `"Hola, mi red anda con problemas y quisiera agendar la auditoría gratuita."`                  |
| `whatsapp_network_new`        | `"Hola, voy a montar/mudar oficina y necesito que me ayuden con la red."`                      |
| `whatsapp_network_servers`    | `"Hola, necesito conversar sobre servidores y respaldos para mi empresa."`                     |
| `whatsapp_web`                | `"Hola, vengo del chatbot, tengo consulta sobre desarrollo web."`                              |
| `whatsapp_web_corporate`      | `"Hola, quiero cotizar un sitio corporativo. ¿Conversamos?"`                                   |
| `whatsapp_web_ecommerce`      | `"Hola, quiero cotizar una tienda en línea. ¿Conversamos?"`                                    |
| `whatsapp_web_landing`        | `"Hola, necesito una landing para campaña. ¿Me envían referencias?"`                           |
| `whatsapp_automation`         | `"Hola, vengo del chatbot, tengo consulta sobre automatización."`                              |
| `whatsapp_auto_chatbot`       | `"Hola, quiero implementar un chatbot de WhatsApp para mi negocio."`                           |
| `whatsapp_auto_integration`   | `"Hola, necesito integrar mis sistemas. ¿Conversamos?"`                                        |
| `whatsapp_auto_reports`       | `"Hola, quiero automatizar reportes / facturación. ¿Me cuentan?"`                              |
| `whatsapp_other`              | `"Hola, vengo del chatbot de la web y tengo una consulta diferente."`                          |
| `whatsapp_fallback`           | `"Hola, vengo del chatbot y necesito hablar con una persona."`                                 |

### 5.4 Triggers de fallback a WhatsApp

El chatbot escala a `whatsapp_fallback` cuando:
1. Usuario hace clic en cualquier opción `"Hablar con una persona"`
2. Usuario llega a una hoja sin tomar acción en X segundos (no implementar v1, solo opcional)
3. Si en v2 se permite input libre: cualquier texto que no matchea patrones obvios

### 5.5 Helper de generación de link

`lib/whatsapp.ts`:
- Función `buildWhatsAppLink(context: string): string`
- Number constante: `50661386223`
- Encoding: `encodeURIComponent(context)`
- Formato: `https://wa.me/50661386223?text={encoded}`
- Anexo final automático: `" — Enviado desde easytechservices.cr"` para tracking de origen

### 5.6 UI/UX del chatbot

- Launcher: botón circular bottom-right (encima del FAB de WhatsApp)
- Color: `--primary`
- Icono: `MessageCircle` (lucide)
- Badge rojo `1` la primera visita (para llamar atención)
- Window: `400px x 600px` desktop, fullscreen mobile
- Header: avatar bot + "EasyTech Asistente" + estado "En línea"
- Mensajes del bot izquierda (gris claro), opciones como botones primary
- Footer del widget: "Powered by EasyTech" + link cerrar
- Apertura inicial: mostrar indicador "escribiendo..." 800ms antes del primer mensaje (sensación humana)

---

## 6. SEO + METADATA

### 6.1 Metadata global (RootLayout)

- **Title template:** `"%s | EasyTech Services - Soluciones de TI en Costa Rica"`
- **Default title:** `"EasyTech Services | Soporte, Redes, Web y Automatización en Costa Rica"`
- **Description:** `"Servicios de TI en Costa Rica: soporte técnico, infraestructura, desarrollo web y automatización para personas, profesionales y pymes. Diagnóstico gratuito."`
- **Keywords:** soporte tecnico Costa Rica, redes empresariales CR, desarrollo web San José, automatización pymes Costa Rica, IT services Costa Rica
- **Canonical:** auto por página

### 6.2 Open Graph

- **og:title:** `"EasyTech Services - Hacemos fácil la tecnología"`
- **og:description:** `"Soporte, redes, desarrollo web y automatización para empresas en Costa Rica. Diagnóstico gratuito, garantía por escrito."`
- **og:url:** `https://easytechservices.cr`
- **og:type:** `website`
- **og:locale:** `es_CR`
- **og:image:** generada con `app/opengraph-image.tsx` (1200x630, gradient brand + headline)

### 6.3 Twitter

- **twitter:card:** `summary_large_image`
- Mismos title/description/image que OG

### 6.4 JSON-LD — LocalBusiness

Inyectar en RootLayout via `<Script type="application/ld+json">`:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "EasyTech Services S.A.",
  "image": "https://easytechservices.cr/og/cover.png",
  "url": "https://easytechservices.cr",
  "telephone": "+506-6138-6223",
  "email": "info@easytechservices.cr",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San José",
    "addressRegion": "San José",
    "addressCountry": "CR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "9.9281",
    "longitude": "-84.0907"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Costa Rica"
  },
  "priceRange": "₡₡-₡₡₡",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "13:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/easytechservicescr",
    "https://www.linkedin.com/company/easytechservices",
    "https://www.instagram.com/easytechservicescr"
  ]
}
```

Adicional: JSON-LD `FAQPage` en la home (con las 8 preguntas).

### 6.5 Sitemap & robots

- `app/sitemap.ts` genera URLs estáticas de todas las páginas
- `app/robots.ts` permite todo, apunta a sitemap
- Excluir `/gracias` de indexación (`noindex` en metadata)

### 6.6 Performance & Core Web Vitals

- Fuentes con `next/font` (zero CLS)
- Imágenes con `next/image` y `priority` solo en hero
- Lazy load de chatbot (dynamic import con `ssr: false`)
- Lazy load de testimonials carousel
- Inline critical CSS (Tailwind v4 lo hace bien)
- Pre-connect a wa.me

---

## 7. ROADMAP DE IMPLEMENTACIÓN

### Fase 0 — Setup (1-2 horas)

1. `npx create-next-app@latest easytech-web --typescript --tailwind --app --eslint`
2. Configurar Tailwind v4 (CSS-first config en `globals.css`)
3. Instalar dependencias: `framer-motion`, `lucide-react`, `react-hook-form`, `zod`, `@hookform/resolvers`, `clsx`, `tailwind-merge`, `embla-carousel-react`, `sonner`
4. `npx shadcn@latest init` (configurar tokens HSL del plan)
5. Agregar componentes shadcn listados en 1.4
6. Configurar `tsconfig.json` strict mode (`strict: true`, `noUncheckedIndexedAccess: true`)
7. Crear `.env.local` con `NEXT_PUBLIC_SITE_URL`
8. Configurar `next.config.ts` (image domains, etc.)

### Fase 1 — Sistema de diseño (2-3 horas)

9. `app/globals.css`: definir todos los tokens HSL (light + dark) y Tailwind theme
10. `app/layout.tsx`: setup de fonts (Plus Jakarta Sans + Inter), ThemeProvider, metadata base, JSON-LD LocalBusiness
11. `lib/site-config.ts`: centralizar nombre, teléfono, email, redes, cupos del mes
12. `lib/utils.ts`: `cn()` helper (de shadcn)
13. `lib/whatsapp.ts`: `buildWhatsAppLink()` helper
14. `lib/seo.ts`: `buildMetadata()` helper para páginas
15. `components/shared/container.tsx`, `section-heading.tsx`, `whatsapp-button.tsx`

### Fase 2 — Layout base (2 horas)

16. `components/layout/site-header.tsx` con NavigationMenu shadcn + sticky
17. `components/layout/mobile-nav.tsx` con Sheet
18. `components/layout/site-footer.tsx`
19. `components/layout/whatsapp-fab.tsx`
20. Integrar en `app/layout.tsx`

### Fase 3 — Datos de contenido (1 hora)

21. `content/services.ts` — array tipado con los 4 servicios
22. `content/testimonials.ts` — los 3 testimonios
23. `content/faq.ts` — las 8 preguntas
24. `content/pricing.ts` — los 3 tiers
25. `content/process.ts` — los 4 pasos

### Fase 4 — Secciones de la home (4-6 horas)

26. `components/sections/hero.tsx`
27. `components/sections/trust-bar.tsx` + `components/shared/animated-counter.tsx`
28. `components/sections/services-grid.tsx` + `service-card.tsx`
29. `components/sections/process-steps.tsx`
30. `components/sections/testimonials.tsx` (con embla carousel)
31. `components/sections/guarantee.tsx`
32. `components/sections/pricing-tiers.tsx`
33. `components/sections/faq.tsx`
34. `components/sections/final-cta.tsx`
35. `components/sections/contact-form.tsx` (con react-hook-form + zod, submit a wa.me v1)
36. `app/page.tsx` ensambla todas las secciones en orden

### Fase 5 — Chatbot (3-4 horas)

37. `components/chatbot/decision-tree.ts` — árbol completo tipado
38. `components/chatbot/chatbot-message.tsx`
39. `components/chatbot/chatbot-options.tsx`
40. `components/chatbot/chatbot-window.tsx`
41. `components/chatbot/chatbot-launcher.tsx`
42. `components/chatbot/chatbot-widget.tsx` (orquesta todo)
43. Integrar en `app/layout.tsx` con `dynamic(() => ..., { ssr: false })`

### Fase 6 — Páginas auxiliares (3-4 horas)

44. `app/(marketing)/servicios/soporte-tecnico/page.tsx` — landing dedicada SEO
45. Igual para infraestructura, desarrollo-web, automatizacion
46. `app/(marketing)/casos/page.tsx`
47. `app/(marketing)/sobre-nosotros/page.tsx`
48. `app/(marketing)/contacto/page.tsx`
49. `app/legal/privacidad/page.tsx`
50. `app/legal/terminos/page.tsx`
51. `app/gracias/page.tsx` (con noindex)

### Fase 7 — SEO técnico (1-2 horas)

52. `app/sitemap.ts`
53. `app/robots.ts`
54. `app/opengraph-image.tsx` (generación dinámica con ImageResponse)
55. `app/icon.tsx` (favicon)
56. JSON-LD LocalBusiness en layout
57. JSON-LD FAQPage en home
58. Meta por página con `buildMetadata()`

### Fase 8 — Pulido y QA (2-3 horas)

59. Animaciones de entrada con framer-motion (`whileInView`)
60. Verificar accesibilidad (aria-labels, contraste, navegación por teclado, focus rings)
61. Verificar responsive en breakpoints `sm`, `md`, `lg`, `xl`
62. Verificar dark mode end-to-end
63. Lighthouse audit (objetivo: 95+ en todo)
64. Verificar todos los `wa.me` links con dispositivo real
65. Verificar form que abre WhatsApp correctamente
66. Test del chatbot — recorrer todas las ramas

### Fase 9 — Deploy (30 min)

67. Push a GitHub
68. Conectar repo a Vercel
69. Configurar env vars en Vercel (`NEXT_PUBLIC_SITE_URL=https://easytechservices.cr`)
70. Configurar dominio custom y SSL
71. Verificar `robots.txt` y `sitemap.xml` en producción
72. Submit sitemap a Google Search Console
73. Setup de Vercel Analytics y Speed Insights

### Fase 10 — Post-launch (futuro)

- Integrar backend de form (Resend API + endpoint `/api/contact`)
- Blog con MDX o CMS headless
- A/B testing del CTA principal con Vercel
- Integración real con WhatsApp Business API para chatbot conversacional

---

### Critical Files for Implementation

- /app/layout.tsx
- /app/page.tsx
- /app/globals.css
- /lib/site-config.ts
- /components/chatbot/decision-tree.ts
