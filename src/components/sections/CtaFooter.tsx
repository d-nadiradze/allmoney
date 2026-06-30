import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { StoreButtons } from "@/components/ui/StoreButtons";
import { CTA, FOOTER_LINKS } from "@/lib/content";

export function CtaFooter() {
  return (
    <footer id="download" className="rail scroll-mt-24 pb-12 pt-40 sm:pt-10">
      {/* CTA card */}
      <Reveal>
        <div className="relative rounded-[28px] bg-primary px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
          {/* glows */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-1/2 h-105 w-105 -translate-y-1/2 rounded-full bg-primary-soft/40 blur-[120px]" />
            <div className="absolute -right-10 -top-24 h-95 w-95 rounded-full bg-[#2B006F]/60 blur-[110px]" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="max-w-md text-display font-semibold leading-[1.05] tracking-[-0.03em] text-white">
                {CTA.title}
              </h2>
              <p className="mt-5 max-w-md text-base text-white/70 sm:text-lg">{CTA.subtitle}</p>
              <StoreButtons tone="primary" className="mt-8" />
            </div>

            <div className="relative justify-center">
                <Image
                  src="/figma/appinhand.webp"
                  alt="AllMoneyCard app on a phone"
                  width={436}
                  height={570}
                  sizes="436px"
                  className="absolute -bottom-12 left-5 sm:-bottom-16  h-auto w-109 drop-shadow-[0_40px_80px_rgba(0,0,0,0.45)]"
                />
            </div>
          </div>
        </div>
      </Reveal>

      {/* Footer bar */}
      <div className="mt-12 border-t border-ink/10 pt-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#top" aria-label="AllMoneyCard home" className="text-ink">
            <Image src="/icon-purple.svg" alt="AllMoneyCard logo" width={176} height={27.33} />
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
