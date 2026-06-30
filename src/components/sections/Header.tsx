"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { MenuIcon, CloseIcon, TelegramIcon } from "@/components/ui/icons";
import { NAV_LINKS } from "@/lib/content";
import Image from "next/image";

const HEADER_HEIGHT = 72;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(false);
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Switch to the light theme once the white content has scrolled up to the header line.
  useEffect(() => {
    const sentinel = document.getElementById("content-top-sentinel");
    if (!sentinel) return;
    const io = new IntersectionObserver(
      ([entry]) => setLight(entry.boundingClientRect.top <= HEADER_HEIGHT),
      { rootMargin: `-${HEADER_HEIGHT}px 0px 0px 0px` },
    );
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (open) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [open, lenis]);

  const barClass = light
    ? "border-b border-ink/10 bg-surface/80 backdrop-blur-xl"
    : scrolled
      ? "border-b border-transparent"
      : "border-b border-transparent bg-transparent";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={["transition-colors duration-300", barClass].join(" ")}>
        <div className="rail flex h-[72px] items-center justify-between">
          <a
            href="#top"
            aria-label="AllMoneyCard home"
            className={["transition-colors duration-300", light ? "text-ink" : "text-white"].join(" ")}
          >
            <AnimatePresence mode="wait">
            {
              light ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>  
                  <Image src="/icon-purple.svg" alt="AllMoneyCard logo" width={176} height={27.33} />
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Image src="/icon.svg" alt="AllMoneyCard logo" width={176} height={27.33} />
                </motion.div>
              )
            }
            </AnimatePresence>  
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={[
                  "text-[13px] font-medium uppercase tracking-wide transition-colors",
                  light ? "text-ink/60 hover:text-ink" : "text-white/60 hover:text-white",
                ].join(" ")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={[
              "grid h-10 w-10 place-items-center rounded-lg transition-colors md:hidden",
              light ? "text-ink" : "text-white",
            ].join(" ")}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] z-40 bg-night/95 backdrop-blur-xl md:hidden"
          >
            <nav className="rail flex flex-col gap-1 py-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="border-b border-white/10 py-4 text-lg font-semibold text-white"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-base font-bold text-white"
              >
                <TelegramIcon className="h-5 w-5" />
                Get the app
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
