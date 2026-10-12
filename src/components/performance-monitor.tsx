"use client";

import { useEffect, useRef } from "react";

/** Local-only diagnostics; no analytics requests or external telemetry. */
export function PerformanceMonitor() {
  const output = useRef<HTMLOutputElement>(null);
  useEffect(() => {
    const node = output.current;
    if (!node || !("PerformanceObserver" in window)) return;
    node.dataset.cls = "0";
    let sessionValue = 0,
      sessionStart = 0,
      lastShift = 0,
      maxSession = 0;
    const observers: PerformanceObserver[] = [];
    if (
      PerformanceObserver.supportedEntryTypes.includes(
        "largest-contentful-paint",
      )
    ) {
      const observer = new PerformanceObserver((list) => {
        const entry = list.getEntries().at(-1);
        if (entry) node.dataset.lcpMs = String(Math.round(entry.startTime));
      });
      observer.observe({ type: "largest-contentful-paint", buffered: true });
      observers.push(observer);
    }
    if (PerformanceObserver.supportedEntryTypes.includes("layout-shift")) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const shift = entry as PerformanceEntry & {
            hadRecentInput: boolean;
            value: number;
          };
          if (shift.hadRecentInput) continue;
          if (
            entry.startTime - lastShift > 1000 ||
            entry.startTime - sessionStart > 5000
          ) {
            sessionStart = entry.startTime;
            sessionValue = 0;
          }
          sessionValue += shift.value;
          lastShift = entry.startTime;
          maxSession = Math.max(maxSession, sessionValue);
          node.dataset.cls = maxSession.toFixed(4);
        }
      });
      observer.observe({ type: "layout-shift", buffered: true });
      observers.push(observer);
    }
    return () => observers.forEach((observer) => observer.disconnect());
  }, []);
  return (
    <output ref={output} id="performance-metrics" hidden aria-hidden="true" />
  );
}
