"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  context?: string;
  label?: string;
  size?: "sm" | "default" | "lg";
  variant?: "default" | "outline" | "secondary";
  className?: string;
  showIcon?: boolean;
}

export function WhatsAppButton({
  context,
  label = "WhatsApp",
  size = "default",
  variant = "default",
  className,
  showIcon = true,
}: WhatsAppButtonProps) {
  const href = buildWhatsAppLink(context);
  const isDefault = variant === "default";

  return (
    <Button
      asChild
      size={size}
      variant={variant}
      className={cn(
        isDefault && "bg-whatsapp text-white hover:bg-whatsapp/90",
        className,
      )}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Escribir por WhatsApp: ${label}`}
      >
        {showIcon ? <MessageCircle className="size-4" /> : null}
        {label}
      </a>
    </Button>
  );
}
