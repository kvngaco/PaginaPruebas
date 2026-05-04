"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Bot, MessageCircle, RotateCcw, Send, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { decisionTree, ROOT_NODE_ID, type ChatNode, type NodeId } from "./decision-tree";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface ChatTurn {
  id: string;
  role: "bot" | "user";
  text: string;
  nodeId?: NodeId;
}

const TYPING_MS = 600;
let turnCounter = 0;
const nextTurnId = () => `turn-${++turnCounter}`;

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [turns, setTurns] = useState<ChatTurn[]>([]);
  const [currentNode, setCurrentNode] = useState<ChatNode>(decisionTree[ROOT_NODE_ID]);
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const typingTimerRef = useRef<number | null>(null);

  const pushBotMessage = useCallback((node: ChatNode) => {
    setTyping(true);
    if (typingTimerRef.current) window.clearTimeout(typingTimerRef.current);
    typingTimerRef.current = window.setTimeout(() => {
      setTurns((prev) => [
        ...prev,
        { id: nextTurnId(), role: "bot", text: node.message, nodeId: node.id },
      ]);
      setCurrentNode(node);
      setTyping(false);
    }, TYPING_MS);
  }, []);

  const start = useCallback(() => {
    setTurns([]);
    pushBotMessage(decisionTree[ROOT_NODE_ID]);
  }, [pushBotMessage]);

  useEffect(() => {
    if (open && turns.length === 0) {
      start();
      setUnread(false);
    }
  }, [open, turns.length, start]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [turns, typing]);

  useEffect(() => {
    if (!open) return;
    closeBtnRef.current?.focus();
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        launcherRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    return () => {
      if (typingTimerRef.current) window.clearTimeout(typingTimerRef.current);
    };
  }, []);

  function selectOption(label: string, nextId: NodeId) {
    setTurns((prev) => [...prev, { id: nextTurnId(), role: "user", text: label }]);
    const next = decisionTree[nextId];
    pushBotMessage(next);
  }

  function reset() {
    start();
  }

  function openWhatsApp(context: string) {
    window.open(buildWhatsAppLink(context), "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <button
        ref={launcherRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Cerrar chat" : "Abrir chat"}
        aria-expanded={open}
        className={cn(
          "fixed bottom-5 right-5 z-50 grid place-items-center size-14 rounded-full text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 active:scale-95",
          open ? "bg-foreground" : "gradient-brand",
        )}
      >
        {open ? <X className="size-6" /> : <Send className="size-5" />}
        {!open && unread ? (
          <span className="absolute -top-0.5 -right-0.5 grid place-items-center size-5 rounded-full bg-accent text-accent-foreground text-[11px] font-bold border-2 border-background">
            1
          </span>
        ) : null}
        <span className="sr-only">{open ? "Cerrar chat" : "Abrir chat"}</span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2.5rem)] sm:w-[380px] h-[560px] max-h-[80vh] rounded-2xl border border-border bg-background shadow-2xl overflow-hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Asistente EasyTech"
          >
            <header className="flex items-center gap-3 px-4 py-3 gradient-brand text-white">
              <div className="grid place-items-center size-9 rounded-full bg-white/20">
                <Bot className="size-5" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">Asistente EasyTech</p>
                <p className="text-xs text-white/80 inline-flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-success animate-pulse" />
                  En línea · responde al instante
                </p>
              </div>
              <button
                type="button"
                onClick={reset}
                aria-label="Reiniciar conversación"
                className="grid place-items-center size-8 rounded-md hover:bg-white/15 transition-colors"
              >
                <RotateCcw className="size-4" />
              </button>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={() => {
                  setOpen(false);
                  launcherRef.current?.focus();
                }}
                aria-label="Cerrar chat"
                className="grid place-items-center size-8 rounded-md hover:bg-white/15 transition-colors"
              >
                <X className="size-4" />
              </button>
            </header>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-muted/30">
              {turns.map((turn) => (
                <ChatBubble key={turn.id} turn={turn} />
              ))}
              {typing ? <TypingIndicator /> : null}
            </div>

            <div className="border-t border-border p-3 bg-background space-y-2 max-h-56 overflow-y-auto">
              {currentNode.isWhatsApp ? (
                <Button
                  type="button"
                  size="lg"
                  onClick={() => openWhatsApp(currentNode.whatsappContext ?? "")}
                  className="w-full bg-whatsapp text-white hover:bg-whatsapp/90"
                >
                  <MessageCircle className="size-4" />
                  Abrir WhatsApp
                </Button>
              ) : null}

              {currentNode.options?.map((opt) => (
                <button
                  key={opt.label + opt.nextId}
                  type="button"
                  onClick={() => selectOption(opt.label, opt.nextId)}
                  disabled={typing}
                  className="w-full text-left text-sm rounded-lg border border-border bg-card px-3 py-2.5 hover:border-primary hover:bg-primary/5 disabled:opacity-60 transition-colors"
                >
                  {opt.label}
                </button>
              ))}

              {currentNode.isWhatsApp ? (
                <button
                  type="button"
                  onClick={reset}
                  className="w-full text-left text-xs text-muted-foreground hover:text-foreground rounded-lg px-3 py-2 transition-colors"
                >
                  ↺ Empezar de nuevo
                </button>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function ChatBubble({ turn }: { turn: ChatTurn }) {
  const isBot = turn.role === "bot";
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={cn("flex gap-2", isBot ? "justify-start" : "justify-end")}
    >
      {isBot ? (
        <div className="grid place-items-center size-7 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
          <Bot className="size-4" />
        </div>
      ) : null}
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
          isBot
            ? "bg-card border border-border rounded-tl-sm"
            : "bg-primary text-primary-foreground rounded-tr-sm",
        )}
      >
        {turn.text}
      </div>
    </motion.div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-2">
      <div className="grid place-items-center size-7 rounded-full bg-primary/10 text-primary">
        <Bot className="size-4" />
      </div>
      <div className="bg-card border border-border rounded-2xl rounded-tl-sm px-3 py-2.5 inline-flex gap-1">
        <span className="size-1.5 rounded-full bg-muted-foreground/60 animate-bounce [animation-delay:-0.2s]" />
        <span className="size-1.5 rounded-full bg-muted-foreground/60 animate-bounce [animation-delay:-0.1s]" />
        <span className="size-1.5 rounded-full bg-muted-foreground/60 animate-bounce" />
      </div>
    </div>
  );
}
