import type { LucideIcon } from "lucide-react";
import { FileText, Search, ShieldCheck, Wrench } from "lucide-react";

export interface ProcessStep {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
  duration: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    icon: Search,
    title: "Consultoría inicial",
    description:
      "Conversamos por WhatsApp o videollamada. Entendemos tu situación, tus objetivos y el alcance del proyecto. Sin costo y sin compromiso.",
    duration: "~30 minutos",
  },
  {
    number: 2,
    icon: FileText,
    title: "Propuesta clara",
    description:
      "Te enviamos una propuesta por escrito con alcance, tiempos y precio cerrado. Si hay opciones, las explicamos. Tú decides con toda la información.",
    duration: "24–48 horas",
  },
  {
    number: 3,
    icon: Wrench,
    title: "Ejecución acompañada",
    description:
      "Ejecutamos el trabajo con avances semanales. Tienes un punto de contacto directo y reportes claros. Nada de \"luego te aviso\".",
    duration: "según proyecto",
  },
  {
    number: 4,
    icon: ShieldCheck,
    title: "Soporte continuo",
    description:
      "Garantía por escrito y plan de soporte opcional. Estamos para cuando nos necesites, no solo cuando vendemos.",
    duration: "mientras quieras",
  },
];
