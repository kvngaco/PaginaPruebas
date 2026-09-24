import type { Metadata } from "next";
import { UsLanding } from "@/components/landing/us-landing";

export const metadata: Metadata = {
  title: "Nearshore Software & AI Automation for US Businesses | EasyTech",
  description:
    "Bilingual nearshore studio in the US Central time zone. AI automation and web development for US businesses — senior-quality software, live portfolio, USD invoicing.",
  alternates: {
    canonical: "/us",
    languages: { "en-US": "/us", "es-US": "/us/es" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Nearshore Software & AI Automation for US Businesses",
    description:
      "AI automation and web development for US businesses. Same time zone, bilingual, senior-quality software.",
  },
};

export default function UsEnglishPage() {
  return <UsLanding lang="en" />;
}
