"use client";

import dynamic from "next/dynamic";

export const ChatbotLoader = dynamic(
  () => import("./chatbot-widget").then((m) => m.ChatbotWidget),
  { ssr: false, loading: () => null },
);
