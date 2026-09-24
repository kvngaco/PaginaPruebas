import type { Metadata } from "next";
import { UsLanding } from "@/components/landing/us-landing";

export const metadata: Metadata = {
  title: "Software y Automatización con IA para Negocios en EE.UU. | EasyTech",
  description:
    "Estudio nearshore bilingüe en el huso horario de EE.UU. Automatización con IA y desarrollo web para negocios en Estados Unidos — software de calidad, portafolio en vivo, cobro en USD.",
  alternates: {
    canonical: "/us/es",
    languages: { "en-US": "/us", "es-US": "/us/es" },
  },
  openGraph: {
    type: "website",
    locale: "es_US",
    title: "Software y Automatización con IA para Negocios en EE.UU.",
    description:
      "Automatización con IA y desarrollo web para negocios en EE.UU. Mismo huso horario, bilingüe, software de calidad.",
  },
};

export default function UsSpanishPage() {
  return <UsLanding lang="es" />;
}
