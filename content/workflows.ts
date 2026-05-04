import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bell,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileSpreadsheet,
  FileStack,
  FileText,
  Filter,
  GitBranch,
  LayoutDashboard,
  Network,
  Receipt,
  ShoppingCart,
  TrendingUp,
  Workflow as WorkflowIcon,
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
    id: "datos",
    title: "Procesamiento masivo de datos",
    tagline: "Miles de filas se vuelven decisiones en minutos.",
    description:
      "Subís un Excel, conectás una base de datos o una API y el sistema limpia, normaliza, agrega y entrega dashboards ejecutivos, reportes inteligentes y alertas accionables. Adiós tareas manuales y errores de copia-pega.",
    nodes: [
      { id: "input", icon: FileSpreadsheet, label: "Excel · DB · API", sublabel: "Cualquier fuente", type: "trigger" },
      { id: "clean", icon: Filter, label: "Limpieza y normalización", sublabel: "Datos consistentes", type: "process" },
      { id: "analyze", icon: BarChart3, label: "Análisis y agregación", sublabel: "Insights claros", type: "process" },
    ],
    outputs: [
      { id: "dash", icon: LayoutDashboard, label: "Dashboard ejecutivo", sublabel: "Tiempo real", type: "output" },
      { id: "report", icon: TrendingUp, label: "Reporte inteligente", sublabel: "PDF programado", type: "output" },
      { id: "alert", icon: Bell, label: "Alertas accionables", sublabel: "Email + dashboard", type: "output" },
    ],
  },
  {
    id: "contable",
    title: "Automatización contable y facturación masiva",
    tagline: "Cierres mensuales sin noches en vela.",
    description:
      "Procesamos lotes completos de facturas y movimientos: conciliación bancaria, categorización contable, validaciones cruzadas y generación de asientos. Lo que tomaba semanas, en horas y con auditoría completa.",
    nodes: [
      { id: "batch", icon: FileStack, label: "Lote de facturas", sublabel: "Mensual o por evento", type: "trigger" },
      { id: "match", icon: ClipboardCheck, label: "Conciliación + categorización", sublabel: "Reglas + criterio", type: "process" },
      { id: "validate", icon: CheckCircle2, label: "Validación cruzada", sublabel: "Hacienda + bancos", type: "process" },
    ],
    outputs: [
      { id: "entries", icon: FileText, label: "Asientos contables", sublabel: "Listos para cerrar", type: "output" },
      { id: "tax", icon: Receipt, label: "Reportes fiscales", sublabel: "D104, D125, IVA", type: "output" },
      { id: "close", icon: LayoutDashboard, label: "Cierre mensual auditable", sublabel: "Trazabilidad total", type: "output" },
    ],
  },
  {
    id: "integracion",
    title: "Automatización empresarial avanzada",
    tagline: "Tus sistemas conversan entre sí. Tu equipo se libera.",
    description:
      "Orquestamos flujos entre todos tus sistemas: CRM, ERP, e-commerce, contabilidad, nube y herramientas internas. Un evento en uno actualiza al resto, dispara notificaciones y mantiene a tu operación sincronizada.",
    nodes: [
      { id: "event", icon: WorkflowIcon, label: "Evento empresarial", sublabel: "En cualquier sistema", type: "trigger" },
      { id: "orchestrator", icon: Network, label: "Orquestador central", sublabel: "Reglas + decisiones", type: "process" },
      { id: "distribute", icon: GitBranch, label: "Distribución inteligente", sublabel: "A los sistemas correctos", type: "process" },
    ],
    outputs: [
      { id: "crm", icon: Database, label: "CRM actualizado", sublabel: "Cliente al día", type: "output" },
      { id: "erp", icon: WorkflowIcon, label: "ERP sincronizado", sublabel: "Operación consistente", type: "output" },
      { id: "notify", icon: Bell, label: "Equipo notificado", sublabel: "Solo lo importante", type: "output" },
    ],
  },
  {
    id: "facturacion",
    title: "Facturación electrónica end-to-end",
    tagline: "De la venta al PDF firmado en segundos.",
    description:
      "Una venta nueva dispara la validación de stock, la emisión electrónica timbrada por Hacienda y el envío del comprobante al cliente, mientras actualiza inventario y reportes en vivo.",
    nodes: [
      { id: "sale", icon: ShoppingCart, label: "Venta nueva", sublabel: "E-commerce / POS", type: "trigger" },
      { id: "validate", icon: Zap, label: "Validar stock", sublabel: "Inventario en vivo", type: "process" },
      { id: "hacienda", icon: Receipt, label: "Factura electrónica", sublabel: "Hacienda CR", type: "process" },
    ],
    outputs: [
      { id: "pdf", icon: FileText, label: "Comprobante al cliente", sublabel: "Email + descarga", type: "output" },
      { id: "stock", icon: Database, label: "Inventario sincronizado", sublabel: "Multi-canal", type: "output" },
      { id: "report", icon: LayoutDashboard, label: "Dashboard ejecutivo", sublabel: "KPI en vivo", type: "output" },
    ],
  },
];
