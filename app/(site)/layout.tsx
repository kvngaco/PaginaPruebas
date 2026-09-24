import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { ChatbotLoader } from "@/components/chatbot/chatbot-loader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Soporte, Redes, Web y Automatización en Costa Rica`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "soporte técnico Costa Rica",
    "redes empresariales CR",
    "desarrollo web San José",
    "automatización pymes Costa Rica",
    "servicios de TI Costa Rica",
    "EasyTech Services",
  ],
  openGraph: {
    type: "website",
    locale: "es_CR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.legalName,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  url: siteConfig.url,
  telephone: `+${siteConfig.contact.whatsappNumber}`,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "San José",
    addressRegion: "San José",
    addressCountry: "CR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "9.9281",
    longitude: "-84.0907",
  },
  areaServed: { "@type": "Country", name: "Costa Rica" },
  priceRange: "₡₡-₡₡₡",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  sameAs: [siteConfig.social.facebook, siteConfig.social.linkedin, siteConfig.social.instagram],
};

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <WhatsAppFab />
      <ChatbotLoader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
