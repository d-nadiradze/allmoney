import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Logo } from "@/components/ui/Logo";
import { StoreButtons } from "@/components/ui/StoreButtons";
import { CTA, FOOTER_LINKS } from "@/lib/content";

export function CtaFooter() {
  return (
    <footer id="download" className="rail scroll-mt-24 pb-12 pt-10">
      {/* CTA card */}
      <Reveal>
        <div className="relative overflow-hidden rounded-[28px] bg-primary px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
          {/* glows */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-primary-soft/40 blur-[120px]" />
            <div className="absolute -right-10 -top-24 h-[380px] w-[380px] rounded-full bg-[#2B006F]/60 blur-[110px]" />
          </div>

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="max-w-md text-display font-semibold leading-[1.05] tracking-[-0.03em] text-white">
                {CTA.title}
              </h2>
              <p className="mt-5 max-w-md text-base text-white/70 sm:text-lg">{CTA.subtitle}</p>
              <StoreButtons tone="primary" className="mt-8" />
            </div>

            <div className="relative hidden justify-center lg:flex">
              <div className="animate-float">
                <Image
                  src="/figma/phone-hero.webp"
                  alt="AllMoneyCard app on a phone"
                  width={743}
                  height={1196}
                  sizes="320px"
                  className="h-auto w-[300px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.45)]"
                />
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Footer bar */}
      <div className="mt-12 border-t border-ink/10 pt-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#top" aria-label="AllMoneyCard home" className="text-ink">
            <Logo className="h-7 w-auto" uid="footer" />
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink/60 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-8 text-center text-xs text-ink/40 sm:text-left">
          © {new Date().getFullYear()} AllMoneyCard. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
