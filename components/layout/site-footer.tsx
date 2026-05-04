import Link from "next/link";
import { Mail, MapPin, MessageCircle, Microchip, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/content/services";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.13 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.92 3.78-3.92 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.81 8.43-4.94 8.43-9.94Z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34V10.5H5.67v7.84h2.67ZM7 9.34a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1Zm11.34 9V13.7c0-2.4-1.28-3.51-3-3.51-1.39 0-2.01.76-2.36 1.3v-1H10.3c.04.75 0 7.84 0 7.84h2.67v-4.38c0-.24.02-.47.09-.65.18-.48.62-.97 1.34-.97.95 0 1.33.72 1.33 1.78v4.22h2.67Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.4A4 4 0 1 1 12.6 8a4 4 0 0 1 3.4 3.4Z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 font-heading font-bold text-lg">
              <span className="grid place-items-center size-9 rounded-lg gradient-brand text-white">
                <Microchip className="size-5" />
              </span>
              <span>{siteConfig.legalName}</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Hacemos fácil la tecnología para personas, profesionales y pymes en
              Costa Rica.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid place-items-center size-9 rounded-md border border-border hover:bg-muted transition-colors"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid place-items-center size-9 rounded-md border border-border hover:bg-muted transition-colors"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid place-items-center size-9 rounded-md border border-border hover:bg-muted transition-colors"
              >
                <InstagramIcon className="size-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-muted-foreground">
              Servicios
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <a href="#servicios" className="hover:text-primary transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-muted-foreground">
              Empresa
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#proceso" className="hover:text-primary transition-colors">Cómo trabajamos</a></li>
              <li><a href="#casos" className="hover:text-primary transition-colors">Casos de éxito</a></li>
              <li><a href="#planes" className="hover:text-primary transition-colors">Planes</a></li>
              <li><a href="#contacto" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-muted-foreground">
              Contacto
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3">
                <MessageCircle className="size-4 mt-0.5 text-whatsapp" />
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.contact.whatsappDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="size-4 mt-0.5 text-muted-foreground" />
                <span>{siteConfig.contact.whatsappDisplay}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="size-4 mt-0.5 text-muted-foreground" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="size-4 mt-0.5 text-muted-foreground" />
                <span>{siteConfig.contact.location}</span>
              </li>
              <li className="text-xs text-muted-foreground pt-1">
                {siteConfig.contact.schedule.weekday} · {siteConfig.contact.schedule.saturday}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. Todos los derechos reservados.</p>
          <p>Hacemos fácil la tecnología.</p>
        </div>
      </div>
    </footer>
  );
}
