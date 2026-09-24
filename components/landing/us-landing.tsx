"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Lock,
  MessageCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedBlobs } from "@/components/shared/animated-blobs";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { dictionaries, type Lang, type LandingDict } from "@/content/us-landing";

function wa(context: string): string {
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(context)}`;
}

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

export function UsLanding({ lang }: { lang: Lang }) {
  const dict = dictionaries[lang];
  return (
    <div lang={dict.lang} className="flex min-h-full flex-col">
      <LandingHeader dict={dict} />
      <main className="flex-1">
        <Hero dict={dict} />
        <TrustBar dict={dict} />
        <Services dict={dict} />
        <Portfolio dict={dict} />
        <WhyNearshore dict={dict} />
        <Process dict={dict} />
        <FinalCta dict={dict} />
      </main>
      <LandingFooter dict={dict} />
    </div>
  );
}

/* ---------------------------------- Header --------------------------------- */

function LandingHeader({ dict }: { dict: LandingDict }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href={dict.lang === "en" ? "/us" : "/us/es"} className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-lg gradient-brand text-white font-bold">
            E
          </span>
          <span className="font-heading text-lg font-bold">EasyTech</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href={dict.altHref}
            className="rounded-full border border-border px-3 py-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            aria-label={`Switch language to ${dict.altLabel}`}
          >
            {dict.altLabel}
          </Link>
          <Button asChild size="sm">
            <Link href="#contact">{dict.hero.ctaPrimary}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

/* ----------------------------------- Hero ---------------------------------- */

function Hero({ dict }: { dict: LandingDict }) {
  const reduce = useReducedMotion();
  const { hero } = dict;
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_60%_at_50%_0%,color-mix(in_oklch,var(--primary)_12%,transparent),transparent_60%)]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid-dots opacity-40 mask-fade-edges" />

      <div className="container-page py-20 text-center md:py-28 lg:py-32">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="rounded-full px-3 py-1">
            {hero.badge}
          </Badge>

          <h1 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {hero.titleLead}
            <span className="text-gradient-brand">{hero.titleHighlight}</span>
            {hero.titleTail}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="text-base">
              <Link href="#contact">
                {hero.ctaPrimary}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base"
            >
              <a href={wa(hero.whatsappContext)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                {hero.ctaSecondary}
              </a>
            </Button>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">{hero.microcopy}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {hero.chips.map((chip) => (
              <span key={chip} className="inline-flex items-center gap-2">
                <Check className="size-4 text-success" />
                {chip}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* --------------------------------- TrustBar -------------------------------- */

function TrustBar({ dict }: { dict: LandingDict }) {
  return (
    <section className="border-b border-border bg-muted/30">
      <div className="container-page grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
        {dict.trustBar.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center justify-center gap-2.5 text-center">
            <Icon className="size-5 shrink-0 text-primary" />
            <span className="text-sm font-medium">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------- Services -------------------------------- */

function Services({ dict }: { dict: LandingDict }) {
  const { services } = dict;
  return (
    <section id="services" className="section-y border-b border-border">
      <div className="container-page">
        <SectionHead eyebrow={services.eyebrow} title={services.title} subtitle={services.subtitle} />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.items.map((s) => (
            <motion.div
              key={s.title}
              {...fadeUp}
              className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-colors hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-xl gradient-brand text-white">
                  <s.icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="text-sm text-primary">{s.benefit}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-success" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Portfolio -------------------------------- */

function Portfolio({ dict }: { dict: LandingDict }) {
  const { portfolio } = dict;
  return (
    <section id="work" className="section-y relative overflow-hidden border-b border-border">
      <AnimatedBlobs variant="mixed" intensity="subtle" />
      <div className="container-page">
        <SectionHead
          eyebrow={portfolio.eyebrow}
          title={portfolio.title}
          subtitle={portfolio.subtitle}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.items.map((item) => {
            const live = Boolean(item.url);
            const content = (
              <>
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-tech">
                    {item.tag}
                  </span>
                  {live ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-semibold text-success">
                      <span className="size-1.5 animate-pulse rounded-full bg-success" />
                      {portfolio.liveLabel}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                      <Lock className="size-2.5" />
                      {portfolio.privateLabel}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 text-lg font-bold">{item.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{item.blurb}</p>
                {live ? (
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    {portfolio.visitLabel}
                    <ArrowUpRight className="size-4" />
                  </span>
                ) : null}
              </>
            );

            const className = cn(
              "block rounded-2xl border border-border bg-card p-6 shadow-card transition-all",
              live && "hover:-translate-y-1 hover:border-primary/40 hover:shadow-card-hover",
            );

            return live ? (
              <a
                key={item.name}
                href={item.url ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {content}
              </a>
            ) : (
              <div key={item.name} className={className}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- WhyNearshore ------------------------------ */

function WhyNearshore({ dict }: { dict: LandingDict }) {
  const { why } = dict;
  return (
    <section className="section-y border-b border-border">
      <div className="container-page">
        <SectionHead eyebrow={why.eyebrow} title={why.title} subtitle={why.subtitle} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {why.points.map((p) => (
            <motion.div
              key={p.title}
              {...fadeUp}
              className="rounded-2xl border border-border bg-card p-7 shadow-card"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <p.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Process --------------------------------- */

function Process({ dict }: { dict: LandingDict }) {
  const { process } = dict;
  return (
    <section className="section-y border-b border-border bg-muted/30">
      <div className="container-page">
        <SectionHead eyebrow={process.eyebrow} title={process.title} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => (
            <motion.div key={step.title} {...fadeUp} transition={{ duration: 0.45, delay: i * 0.06 }}>
              <div className="flex size-10 items-center justify-center rounded-full gradient-brand font-bold text-white">
                {i + 1}
              </div>
              <h3 className="mt-4 font-bold">{step.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- FinalCta -------------------------------- */

function FinalCta({ dict }: { dict: LandingDict }) {
  const { finalCta } = dict;
  return (
    <section id="contact" className="section-y relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 gradient-brand opacity-[0.06]" />
      <AnimatedBlobs variant="primary" intensity="subtle" />
      <div className="container-page text-center">
        <h2 className="mx-auto max-w-3xl text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
          {finalCta.subtitle}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-whatsapp text-base text-white hover:bg-whatsapp/90"
          >
            <a href={wa(finalCta.whatsappContext)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" />
              {finalCta.ctaPrimary}
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base">
            <a href={`mailto:${siteConfig.contact.email}`}>{finalCta.ctaSecondary}</a>
          </Button>
        </div>
        <p className="mt-5 text-sm text-muted-foreground">{finalCta.note}</p>
      </div>
    </section>
  );
}

/* ---------------------------------- Footer --------------------------------- */

function LandingFooter({ dict }: { dict: LandingDict }) {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-md gradient-brand text-xs font-bold text-white">
            E
          </span>
          <span className="font-medium text-foreground">EasyTech Services</span>
        </div>
        <p className="text-center sm:text-right">{dict.footerTagline}</p>
        <p>© {new Date().getFullYear()} EasyTech Services</p>
      </div>
    </footer>
  );
}

/* --------------------------------- Helpers --------------------------------- */

function SectionHead({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
