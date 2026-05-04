import { AnimatedCounter } from "@/components/shared/animated-counter";
import { siteConfig } from "@/lib/site-config";

export function TrustBar() {
  return (
    <section className="border-b border-border bg-muted/30">
      <div className="container-page py-12 md:py-14">
        <p className="text-center text-xs sm:text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Confían en nosotros pymes e instituciones en todo el país
        </p>
        <div className="mt-8 grid grid-cols-3 gap-6 md:gap-10 max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-gradient-brand">
              <AnimatedCounter end={siteConfig.stats.clients} suffix="+" />
            </p>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              Clientes atendidos
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-gradient-brand">
              <AnimatedCounter end={siteConfig.stats.yearsInMarket} />
              <span className="text-2xl sm:text-3xl"> años</span>
            </p>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              En Costa Rica
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-gradient-brand">
              <AnimatedCounter end={siteConfig.stats.onTimeDelivery} suffix="%" />
            </p>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              Entregas a tiempo
            </p>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground/70">
          Datos actualizados a 2026.
        </p>
      </div>
    </section>
  );
}
