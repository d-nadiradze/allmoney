"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, type ReactNode } from "react";
import "lenis/dist/lenis.css";

/** Leave room for the fixed 72px header when jumping to a section. */
const HEADER_OFFSET = 84;

function AnchorScroll() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      const anchor = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const el = document.querySelector(hash);
      if (!el) return;

      event.preventDefault();
      lenis.scrollTo(hash === "#top" ? 0 : (el as HTMLElement), {
        offset: hash === "#top" ? 0 : -HEADER_OFFSET,
        duration: 1.2,
      });
      history.replaceState(null, "", hash);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [lenis]);

  return null;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.15,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
      }}
    >
      <AnchorScroll />
      {children}
    </ReactLenis>
  );
}
