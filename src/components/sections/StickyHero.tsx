"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Hero } from "./Hero";
import Image from "next/image";

/**
 * Pins the hero to the top of the viewport so the following light content
 * scrolls up and "hovers" over it. While pinned, the hero gently recedes
 * (scale + fade) to add depth as the content panel rises over it.
 */
export function StickyHero() {
  const { scrollY } = useScroll();
  // Plays on every OS regardless of the reduce-motion setting (intentional).
  const scale = useTransform(scrollY, [0, 650], [1, 0.90]);

  return (
    <div className="sticky top-0 z-0 bg-night">
      <Image src="/hero-bg.svg" alt="AllMoneyCard hero background" className="absolute w-full h-full object-cover" width={1440} height={1024} />
      <motion.div
        style={{ scale }}
        className="relative z-10 origin-top will-change-transform"
      >
        <Hero />
      </motion.div>
    </div>
  );
}
