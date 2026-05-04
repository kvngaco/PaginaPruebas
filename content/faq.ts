export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "¿Cuánto cuesta una visita o un diagnóstico?",
    answer:
      "El diagnóstico inicial siempre es gratuito, ya sea remoto o presencial dentro del Gran Área Metropolitana. Pagas solo si decides avanzar con la solución que te proponemos. Para cantones fuera del GAM, conversamos previamente sobre el viático.",
  },
  {
    question: "¿En cuánto tiempo me responden si tengo una emergencia?",
    answer:
      "En horario hábil (lunes a viernes 8am–6pm), respondemos en menos de 1 hora. Para clientes con plan Acompañamiento o Aliado Tecnológico, ofrecemos respuesta en menos de 4 horas garantizadas, incluyendo fines de semana.",
  },
  {
    question: "¿Trabajan con empresas pequeñas o solo con grandes?",
    answer:
      "Trabajamos con todos: desde profesionales independientes que necesitan arreglar su laptop, hasta instituciones con decenas de equipos. Más de la mitad de nuestros clientes son pymes y emprendimientos.",
  },
  {
    question: "¿Qué pasa si después del trabajo el problema vuelve?",
    answer:
      "Todo nuestro trabajo tiene 30 días de garantía por escrito. Si el mismo problema vuelve dentro de ese período, lo resolvemos sin costo adicional. Punto.",
  },
  {
    question: "¿Atienden fuera de San José?",
    answer:
      "Sí. El soporte remoto cubre todo Costa Rica sin costo adicional. Para visitas presenciales, atendemos sin recargo en el GAM (San José, Heredia, Alajuela, Cartago) y coordinamos viáticos para zonas más alejadas.",
  },
  {
    question: "¿Cuánto tarda un sitio web o una automatización?",
    answer:
      "Una landing simple: 7 días hábiles. Un sitio corporativo: 3–4 semanas. Un e-commerce completo: 4–8 semanas. Automatizaciones simples: 1–2 semanas. Todo se confirma por escrito en la propuesta antes de empezar.",
  },
  {
    question: "¿Puedo cancelar el plan mensual cuando quiera?",
    answer:
      "Sí, sin permanencia y sin penalización. Solo te pedimos avisarnos con 15 días de anticipación para cerrar prolijamente lo que esté en proceso.",
  },
  {
    question: "¿Manejan facturación electrónica y emiten factura para crédito fiscal?",
    answer:
      "Sí, somos contribuyentes formales y emitimos factura electrónica timbrada por Hacienda en todos nuestros servicios. Útil para tu deducción tributaria.",
  },
];
