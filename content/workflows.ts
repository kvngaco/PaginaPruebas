import type { LucideIcon } from "lucide-react";
import {
  AudioLines,
  BarChart3,
  Bell,
  Bot,
  Database,
  FileSpreadsheet,
  FileText,
  Filter,
  LayoutDashboard,
  MessageCircle,
  Mic,
  PhoneCall,
  Receipt,
  Send,
  ShoppingCart,
  TrendingUp,
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
    id: "voz",
    title: "Automatización por voz",
    tagline: "Una llamada entra. Tu sistema responde y resuelve.",
    description:
      "El cliente llama, el sistema entiende lo que pide en lenguaje natural y resuelve: agenda una cita, consulta un saldo, transfiere a la persona correcta o devuelve la respuesta hablada. Todo sin intervención humana, las 24 horas.",
    nodes: [
      { id: "call", icon: PhoneCall, label: "Llamada entrante", sublabel: "Trigger de voz", type: "trigger" },
      { id: "transcribe", icon: Mic, label: "Transcripción", sublabel: "Voz → texto", type: "process" },
      { id: "intent", icon: AudioLines, label: "Comprende intención", sublabel: "Lenguaje natural", type: "process" },
    ],
    outputs: [
      { id: "schedule", icon: Bell, label: "Agendar cita", sublabel: "Calendario sincronizado", type: "output" },
      { id: "voice-reply", icon: AudioLines, label: "Respuesta hablada", sublabel: "Voz natural", type: "output" },
      { id: "transfer", icon: UsersRound, label: "Transferir al equipo", sublabel: "Si requiere humano", type: "output" },
    ],
  },
  {
    id: "facturacion",
    title: "Facturación electrónica end-to-end",
    tagline: "De la venta al PDF firmado en segundos.",
    description:
      "Una venta nueva en tu tienda dispara la validación de stock, la emisión electrónica timbrada por Hacienda y el envío del comprobante al cliente, mientras actualiza inventario y reportes en tiempo real.",
    nodes: [
      { id: "sale", icon: ShoppingCart, label: "Venta nueva", sublabel: "E-commerce / POS", type: "trigger" },
      { id: "validate", icon: Zap, label: "Validar stock", sublabel: "Inventario en vivo", type: "process" },
      { id: "hacienda", icon: Receipt, label: "Factura electrónica", sublabel: "Hacienda CR", type: "process" },
    ],
    outputs: [
      { id: "pdf", icon: FileText, label: "Comprobante al cliente", sublabel: "Email + WhatsApp", type: "output" },
      { id: "stock", icon: Database, label: "Sincronizar inventario", sublabel: "Multi-canal", type: "output" },
      { id: "report", icon: LayoutDashboard, label: "Dashboard ejecutivo", sublabel: "KPI en vivo", type: "output" },
    ],
  },
  {
    id: "whatsapp",
    title: "Automatizaciones por WhatsApp",
    tagline: "Atención que nunca duerme. Leads que nunca se pierden.",
    description:
      "Mensaje entrante, asistente virtual responde FAQs, agenda citas y registra al lead en tu CRM. Cuando la consulta es compleja, escala a una persona del equipo con todo el contexto ya cargado.",
    nodes: [
      { id: "wa-in", icon: MessageCircle, label: "Mensaje WhatsApp", sublabel: "Trigger 24/7", type: "trigger" },
      { id: "bot", icon: Bot, label: "Asistente virtual", sublabel: "Comprende y responde", type: "process" },
      { id: "router", icon: Webhook, label: "Enrutador inteligente", sublabel: "Decide flujo", type: "process" },
    ],
    outputs: [
      { id: "crm", icon: UsersRound, label: "Registrar en CRM", sublabel: "Lead nuevo", type: "output" },
      { id: "reply", icon: Send, label: "Responder al cliente", sublabel: "Auto-respuesta", type: "output" },
      { id: "team", icon: Bell, label: "Notificar al equipo", sublabel: "Si escala", type: "output" },
    ],
  },
  {
    id: "datos",
    title: "Procesamiento masivo de datos",
    tagline: "Miles de filas en Excel se vuelven decisiones en minutos.",
    description:
      "Subís un Excel, una base de datos o conectás una API y el sistema limpia, normaliza, agrega y produce dashboards ejecutivos, reportes inteligentes y alertas accionables. Adiós tareas manuales repetitivas y errores de copia-pega.",
    nodes: [
      { id: "input", icon: FileSpreadsheet, label: "Excel · DB · API", sublabel: "Cualquier fuente", type: "trigger" },
      { id: "clean", icon: Filter, label: "Limpieza y normalización", sublabel: "Datos consistentes", type: "process" },
      { id: "analyze", icon: BarChart3, label: "Análisis y agregación", sublabel: "Insights claros", type: "process" },
    ],
    outputs: [
      { id: "dash", icon: LayoutDashboard, label: "Dashboard inteligente", sublabel: "Tiempo real", type: "output" },
      { id: "report", icon: TrendingUp, label: "Reporte ejecutivo", sublabel: "PDF programado", type: "output" },
      { id: "alert", icon: Bell, label: "Alertas accionables", sublabel: "WhatsApp + email", type: "output" },
    ],
  },
];
