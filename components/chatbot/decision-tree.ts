export type NodeId =
  | "root"
  | "support" | "support_repair" | "support_maintenance" | "support_recovery"
  | "network" | "network_issues" | "network_new" | "network_servers"
  | "web" | "web_corporate" | "web_ecommerce" | "web_landing"
  | "automation" | "auto_chatbot" | "auto_integration" | "auto_reports"
  | "other"
  | "whatsapp_support" | "whatsapp_support_repair" | "whatsapp_support_maintenance" | "whatsapp_support_recovery"
  | "whatsapp_network" | "whatsapp_network_audit" | "whatsapp_network_new" | "whatsapp_network_servers"
  | "whatsapp_web" | "whatsapp_web_corporate" | "whatsapp_web_ecommerce" | "whatsapp_web_landing"
  | "whatsapp_automation" | "whatsapp_auto_chatbot" | "whatsapp_auto_integration" | "whatsapp_auto_reports"
  | "whatsapp_other" | "whatsapp_fallback";

export interface ChatOption {
  label: string;
  nextId: NodeId;
}

export interface ChatNode {
  id: NodeId;
  message: string;
  options?: ChatOption[];
  isWhatsApp?: boolean;
  whatsappContext?: string;
}

const back: ChatOption = { label: "← Volver al inicio", nextId: "root" };

export const decisionTree: Record<NodeId, ChatNode> = {
  root: {
    id: "root",
    message: "¡Hola! 👋 Soy el asistente de EasyTech. ¿En qué te puedo ayudar hoy?",
    options: [
      { label: "🛠️ Necesito soporte técnico", nextId: "support" },
      { label: "🌐 Mejorar mi red o infraestructura", nextId: "network" },
      { label: "💻 Sitio web o tienda en línea", nextId: "web" },
      { label: "🤖 Automatizar procesos", nextId: "automation" },
      { label: "💬 Tengo otra consulta", nextId: "other" },
    ],
  },

  support: {
    id: "support",
    message:
      "Genial, en soporte técnico cubrimos desde reparaciones hasta mantenimiento. ¿Qué necesitas exactamente?",
    options: [
      { label: "Mi computadora no enciende o falla", nextId: "support_repair" },
      { label: "Quiero mantenimiento preventivo", nextId: "support_maintenance" },
      { label: "Recuperar datos / quitar virus", nextId: "support_recovery" },
      { label: "Hablar con una persona", nextId: "whatsapp_support" },
      back,
    ],
  },
  support_repair: {
    id: "support_repair",
    message:
      "Hacemos reparación de PCs, laptops e impresoras. El diagnóstico es gratuito (presencial en GAM o remoto al país entero). En la mayoría de casos lo resolvemos en menos de 48 horas. ¿Querés agendar el diagnóstico?",
    options: [
      { label: "✅ Sí, agendar ahora", nextId: "whatsapp_support_repair" },
      { label: "Más información", nextId: "whatsapp_support" },
      back,
    ],
  },
  support_maintenance: {
    id: "support_maintenance",
    message:
      "Tenemos planes de mantenimiento mensual desde ₡85.000 que incluyen visitas, soporte ilimitado por WhatsApp y respaldos automáticos. Ideal para oficinas y pymes. ¿Te paso los detalles por WhatsApp?",
    options: [
      { label: "✅ Sí, envíenme detalles", nextId: "whatsapp_support_maintenance" },
      back,
    ],
  },
  support_recovery: {
    id: "support_recovery",
    message:
      "Tratamos casos de recuperación de datos, eliminación de virus y ransomware. La posibilidad de recuperación depende del tipo de daño. Necesitamos verlo. ¿Conversamos por WhatsApp para coordinar el diagnóstico gratuito?",
    options: [
      { label: "✅ Sí, conversemos", nextId: "whatsapp_support_recovery" },
      back,
    ],
  },

  network: {
    id: "network",
    message:
      "Perfecto. Hacemos cableado estructurado, instalación de servidores, redes WiFi empresariales y respaldos. ¿Qué describe mejor tu situación?",
    options: [
      { label: "Mi red se cae o anda lenta", nextId: "network_issues" },
      { label: "Voy a montar / mudar oficina", nextId: "network_new" },
      { label: "Necesito respaldos y servidores", nextId: "network_servers" },
      { label: "Hablar con una persona", nextId: "whatsapp_network" },
      back,
    ],
  },
  network_issues: {
    id: "network_issues",
    message:
      "En estos casos hacemos una auditoría de red para identificar el cuello de botella (cableado, equipo, configuración o cobertura). La auditoría es gratuita en GAM. ¿Coordinamos?",
    options: [
      { label: "✅ Sí, agendar auditoría", nextId: "whatsapp_network_audit" },
      back,
    ],
  },
  network_new: {
    id: "network_new",
    message:
      "Excelente, ese es el momento ideal. Diseñamos la red completa: cableado certificado, equipos, WiFi, servidores y seguridad. Te entregamos plano y propuesta cerrada. ¿Conversamos?",
    options: [
      { label: "✅ Sí, quiero conversar", nextId: "whatsapp_network_new" },
      back,
    ],
  },
  network_servers: {
    id: "network_servers",
    message:
      "Manejamos servidores físicos, NAS, respaldos en la nube y configuraciones híbridas. La elección depende de tu volumen y presupuesto. ¿Conversamos por WhatsApp para entender tu caso?",
    options: [
      { label: "✅ Sí, conversemos", nextId: "whatsapp_network_servers" },
      back,
    ],
  },

  web: {
    id: "web",
    message:
      "¡Buenísimo! Hacemos sitios corporativos, e-commerce y landings. ¿Qué andas buscando?",
    options: [
      { label: "Sitio corporativo / institucional", nextId: "web_corporate" },
      { label: "Tienda en línea (e-commerce)", nextId: "web_ecommerce" },
      { label: "Landing para campaña", nextId: "web_landing" },
      { label: "Hablar con una persona", nextId: "whatsapp_web" },
      back,
    ],
  },
  web_corporate: {
    id: "web_corporate",
    message:
      "Sitios corporativos optimizados para Google y mobile. Tiempo típico: 3-4 semanas. Inversión desde ₡450.000 según alcance. ¿Conversamos los detalles?",
    options: [
      { label: "✅ Sí, cotizar mi caso", nextId: "whatsapp_web_corporate" },
      back,
    ],
  },
  web_ecommerce: {
    id: "web_ecommerce",
    message:
      "Tiendas con SINPE Móvil, BAC, BCR y tarjetas internacionales. Tiempo: 4-8 semanas. Inversión desde ₡950.000. Te recomendamos plataforma según tu volumen. ¿Cotizamos?",
    options: [
      { label: "✅ Sí, cotizar", nextId: "whatsapp_web_ecommerce" },
      back,
    ],
  },
  web_landing: {
    id: "web_landing",
    message:
      "Landings de campaña listas en 7 días hábiles, optimizadas para conversión y Google Ads. Inversión desde ₡180.000. ¿Te enviamos referencias por WhatsApp?",
    options: [
      { label: "✅ Sí, ver referencias", nextId: "whatsapp_web_landing" },
      back,
    ],
  },

  automation: {
    id: "automation",
    message:
      "Genial. Automatizamos lo que te quita tiempo: chatbots, integraciones entre sistemas, facturación, reportes. ¿Qué te interesa?",
    options: [
      { label: "Chatbot de WhatsApp", nextId: "auto_chatbot" },
      { label: "Integrar mis sistemas", nextId: "auto_integration" },
      { label: "Automatizar reportes / facturación", nextId: "auto_reports" },
      { label: "Hablar con una persona", nextId: "whatsapp_automation" },
      back,
    ],
  },
  auto_chatbot: {
    id: "auto_chatbot",
    message:
      "Hacemos chatbots de WhatsApp que responden FAQ, agendan citas y escalan a humano cuando hace falta. Implementación típica: 1-2 semanas. Desde ₡280.000. ¿Conversamos tu caso?",
    options: [
      { label: "✅ Sí, quiero uno", nextId: "whatsapp_auto_chatbot" },
      back,
    ],
  },
  auto_integration: {
    id: "auto_integration",
    message:
      "Conectamos CRMs, sistemas contables, e-commerce y herramientas en la nube vía API o no-code (Zapier, Make). Cotización según sistemas. ¿Conversamos?",
    options: [
      { label: "✅ Sí, conversemos", nextId: "whatsapp_auto_integration" },
      back,
    ],
  },
  auto_reports: {
    id: "auto_reports",
    message:
      "Automatizamos generación de reportes, facturación electrónica timbrada y envíos automáticos por correo o WhatsApp. Te ahorra horas semanales. ¿Te paso un caso similar?",
    options: [
      { label: "✅ Sí, ver caso", nextId: "whatsapp_auto_reports" },
      back,
    ],
  },

  other: {
    id: "other",
    message:
      "Sin problema. Para consultas que no encajan en nuestras categorías estándar, lo mejor es conversar directo. Te conectamos por WhatsApp con respuesta en menos de 1 hora hábil.",
    options: [
      { label: "💬 Ir a WhatsApp", nextId: "whatsapp_other" },
      back,
    ],
  },

  whatsapp_support: {
    id: "whatsapp_support",
    message: "Perfecto. Te abrimos WhatsApp con el contexto de lo que conversamos. 👇",
    isWhatsApp: true,
    whatsappContext: "Hola, vengo del chatbot. Necesito soporte técnico, ¿pueden contarme más?",
  },
  whatsapp_support_repair: {
    id: "whatsapp_support_repair",
    message: "Te abrimos WhatsApp para coordinar el diagnóstico gratuito. 👇",
    isWhatsApp: true,
    whatsappContext: "Hola, mi equipo tiene un problema y quisiera agendar el diagnóstico gratuito.",
  },
  whatsapp_support_maintenance: {
    id: "whatsapp_support_maintenance",
    message: "Te abrimos WhatsApp para enviarte los detalles del plan. 👇",
    isWhatsApp: true,
    whatsappContext: "Hola, me interesa el plan de mantenimiento mensual. ¿Me cuentan más?",
  },
  whatsapp_support_recovery: {
    id: "whatsapp_support_recovery",
    message: "Te abrimos WhatsApp para coordinar el diagnóstico de recuperación. 👇",
    isWhatsApp: true,
    whatsappContext: "Hola, necesito ayuda con recuperación de datos / virus. ¿Podemos coordinar?",
  },
  whatsapp_network: {
    id: "whatsapp_network",
    message: "Te abrimos WhatsApp para conversar sobre redes. 👇",
    isWhatsApp: true,
    whatsappContext: "Hola, vengo del chatbot, tengo consulta sobre infraestructura y redes.",
  },
  whatsapp_network_audit: {
    id: "whatsapp_network_audit",
    message: "Te abrimos WhatsApp para coordinar la auditoría gratuita. 👇",
    isWhatsApp: true,
    whatsappContext: "Hola, mi red anda con problemas y quisiera agendar la auditoría gratuita.",
  },
  whatsapp_network_new: {
    id: "whatsapp_network_new",
    message: "Te abrimos WhatsApp para conversar el proyecto. 👇",
    isWhatsApp: true,
    whatsappContext: "Hola, voy a montar/mudar oficina y necesito que me ayuden con la red.",
  },
  whatsapp_network_servers: {
    id: "whatsapp_network_servers",
    message: "Te abrimos WhatsApp para conversar sobre servidores y respaldos. 👇",
    isWhatsApp: true,
    whatsappContext: "Hola, necesito conversar sobre servidores y respaldos para mi empresa.",
  },
  whatsapp_web: {
    id: "whatsapp_web",
    message: "Te abrimos WhatsApp para conversar sobre tu sitio web. 👇",
    isWhatsApp: true,
    whatsappContext: "Hola, vengo del chatbot, tengo consulta sobre desarrollo web.",
  },
  whatsapp_web_corporate: {
    id: "whatsapp_web_corporate",
    message: "Te abrimos WhatsApp para cotizar tu sitio corporativo. 👇",
    isWhatsApp: true,
    whatsappContext: "Hola, quiero cotizar un sitio corporativo. ¿Conversamos?",
  },
  whatsapp_web_ecommerce: {
    id: "whatsapp_web_ecommerce",
    message: "Te abrimos WhatsApp para cotizar tu tienda en línea. 👇",
    isWhatsApp: true,
    whatsappContext: "Hola, quiero cotizar una tienda en línea. ¿Conversamos?",
  },
  whatsapp_web_landing: {
    id: "whatsapp_web_landing",
    message: "Te abrimos WhatsApp para enviarte referencias. 👇",
    isWhatsApp: true,
    whatsappContext: "Hola, necesito una landing para campaña. ¿Me envían referencias?",
  },
  whatsapp_automation: {
    id: "whatsapp_automation",
    message: "Te abrimos WhatsApp para conversar sobre automatización. 👇",
    isWhatsApp: true,
    whatsappContext: "Hola, vengo del chatbot, tengo consulta sobre automatización.",
  },
  whatsapp_auto_chatbot: {
    id: "whatsapp_auto_chatbot",
    message: "Te abrimos WhatsApp para conversar tu chatbot. 👇",
    isWhatsApp: true,
    whatsappContext: "Hola, quiero implementar un chatbot de WhatsApp para mi negocio.",
  },
  whatsapp_auto_integration: {
    id: "whatsapp_auto_integration",
    message: "Te abrimos WhatsApp para conversar la integración. 👇",
    isWhatsApp: true,
    whatsappContext: "Hola, necesito integrar mis sistemas. ¿Conversamos?",
  },
  whatsapp_auto_reports: {
    id: "whatsapp_auto_reports",
    message: "Te abrimos WhatsApp para mostrarte un caso similar. 👇",
    isWhatsApp: true,
    whatsappContext: "Hola, quiero automatizar reportes / facturación. ¿Me cuentan?",
  },
  whatsapp_other: {
    id: "whatsapp_other",
    message: "Te conectamos por WhatsApp con uno de nuestros especialistas. 👇",
    isWhatsApp: true,
    whatsappContext: "Hola, vengo del chatbot de la web y tengo una consulta diferente.",
  },
  whatsapp_fallback: {
    id: "whatsapp_fallback",
    message: "Te conectamos con una persona por WhatsApp. 👇",
    isWhatsApp: true,
    whatsappContext: "Hola, vengo del chatbot y necesito hablar con una persona.",
  },
};

export const ROOT_NODE_ID: NodeId = "root";
