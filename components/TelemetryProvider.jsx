"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackPageView } from "@/lib/telemetry";

export default function TelemetryProvider() {
  const pathname = usePathname();
  const lastPath = useRef("");

  useEffect(() => {
    if (!pathname) return;
    if (lastPath.current !== pathname) {
      lastPath.current = pathname;
      // Slight delay to ensure document.referrer and title are populated
      const timer = setTimeout(() => {
        trackPageView(pathname);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return null;
}

