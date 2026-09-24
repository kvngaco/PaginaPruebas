"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

const PULSE_SCRIPT_URL = "https://marketing-os-navy.vercel.app/pulse.js";
const PULSE_ENDPOINT = "https://marketing-os-navy.vercel.app/api/collect";
const PULSE_BRAND = "easytech";

declare global {
  interface Window {
    pulseConfig?: { brand: string; endpoint: string };
    pulse?: { track: (event: string, metadata?: Record<string, unknown>) => void };
  }
}

/**
 * Marketing OS — tracking pulse.js (marca easytech).
 *
 * - Inyecta `window.pulseConfig` ANTES de cargar pulse.js (beforeInteractive).
 * - Carga el SDK con afterInteractive.
 * - Dispara `page_view` en navegaciones SPA del App Router (omite la primera,
 *   ya que el SDK emite el page_view inicial al cargar).
 */
export function PulseTracking() {
  const pathname = usePathname();
  const isFirstRun = useRef(true);

  useEffect(() => {
    // El SDK ya dispara el page_view inicial al cargar; omitimos el primer
    // valor del pathname para evitar el duplicado.
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    window.pulse?.track("page_view", { title: document.title });
  }, [pathname]);

  return (
    <>
      {/* El config DEBE ejecutarse antes que pulse.js. */}
      <Script id="pulse-config" strategy="beforeInteractive">
        {`window.pulseConfig={brand:${JSON.stringify(PULSE_BRAND)},endpoint:${JSON.stringify(
          PULSE_ENDPOINT,
        )}};`}
      </Script>
      <Script src={PULSE_SCRIPT_URL} strategy="afterInteractive" />
    </>
  );
}
