import type { LucideIcon } from "lucide-react";
import {
  Bell,
  Bot,
  Calendar,
  Database,
  FileText,
  LayoutDashboard,
  Mail,
  MessageCircle,
  Receipt,
  Send,
  ShoppingCart,
  UsersRound,
  Webhook,
  Zap,
} from "lucide-react";

export type NodeType = "trigger" | "process" | "output";

export interface FlowNode {
  id: string;
  icon: LucideIcon;
  label: string;
  sublabel: string;
  type: NodeType;
}

export interface Workflow {
  id: string;
  title: string;
  tagline: string;
  description: string;
  nodes: FlowNode[];
  outputs: FlowNode[];
}

export const workflows: Workflow[] = [
  {
    id: "atencion",
    title: "Atención automatizada por WhatsApp",
    tagline: "Tu cliente escribe, el sistema responde y registra.",
    description:
      "Mensaje entrante → asistente virtual responde FAQs, agenda citas y registra al lead en tu CRM. Si la consulta es compleja, escala a una persona del equipo.",
    nodes: [
      { id: "wa-in", icon: MessageCircle, label: "Mensaje WhatsApp", sublabel: "Trigger", type: "trigger" },
      { id: "bot", icon: Bot, label: "Asistente virtual", sublabel: "Procesa intent", type: "process" },
      { id: "router", icon: Webhook, label: "Enrutador", sublabel: "Decide flujo", type: "process" },
    ],
    outputs: [
      { id: "crm", icon: UsersRound, label: "Registrar en CRM", sublabel: "Lead nuevo", type: "output" },
      { id: "reply", icon: Send, label: "Responder cliente", sublabel: "Auto-respuesta", type: "output" },
      { id: "team", icon: Bell, label: "Notificar al equipo", sublabel: "Si escala", type: "output" },
    ],
  },
  {
    id: "facturacion",
    title: "Facturación electrónica end-to-end",
    tagline: "De la venta al PDF firmado en segundos.",
    description:
      "Una venta nueva en tu tienda dispara la validación de stock, la emisión electrónica timbrada por Hacienda y el envío del PDF al cliente, además de actualizar inventario y reportes.",
    nodes: [
      { id: "sale", icon: ShoppingCart, label: "Venta nueva", sublabel: "E-commerce / POS", type: "trigger" },
      { id: "validate", icon: Zap, label: "Validar stock", sublabel: "Inventario", type: "process" },
      { id: "hacienda", icon: Receipt, label: "Factura electrónica", sublabel: "Hacienda", type: "process" },
    ],
    outputs: [
      { id: "pdf", icon: FileText, label: "PDF al cliente", sublabel: "Email + WhatsApp", type: "output" },
      { id: "stock", icon: Database, label: "Actualizar inventario", sublabel: "Sincroniza", type: "output" },
      { id: "report", icon: LayoutDashboard, label: "Reporte ejecutivo", sublabel: "Dashboard live", type: "output" },
    ],
  },
  {
    id: "reportes",
    title: "Reportes diarios automáticos",
    tagline: "Información que llega sola, todos los días.",
    description:
      "Cada mañana el sistema consulta tus fuentes (CRM, contabilidad, base de datos), arma el reporte y lo entrega por correo, WhatsApp o publica en el dashboard del equipo.",
    nodes: [
      { id: "cron", icon: Calendar, label: "Cada día 8:00", sublabel: "Trigger horario", type: "trigger" },
      { id: "fetch", icon: Database, label: "Consultar fuentes", sublabel: "CRM + DB + nube", type: "process" },
      { id: "compose", icon: Zap, label: "Componer reporte", sublabel: "KPIs y gráficos", type: "process" },
    ],
    outputs: [
      { id: "mail", icon: Mail, label: "Email gerencia", sublabel: "PDF adjunto", type: "output" },
      { id: "wa", icon: MessageCircle, label: "WhatsApp resumen", sublabel: "Top 3 KPIs", type: "output" },
      { id: "dash", icon: LayoutDashboard, label: "Dashboard live", sublabel: "Equipo entero", type: "output" },
    ],
  },
];
