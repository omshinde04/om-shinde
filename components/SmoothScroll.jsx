"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      // 🧠 Core smoothness
      duration: 1.8, // higher = smoother
      easing: (t) =>
        1 - Math.pow(1 - t, 4), // smooth ease-out curve

      // 🎢 Inertia & wheel control
      smooth: true,
      wheelMultiplier: 0.9, // slows wheel = silk feel
      touchMultiplier: 1.2,

      // 🖱️ Precision
      normalizeWheel: true,
      smoothTouch: false,

      // 🔒 Stability
      infinite: false,
    });

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
