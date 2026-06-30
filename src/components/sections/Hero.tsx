import Image from "next/image";
import { StoreButtons } from "@/components/ui/StoreButtons";
import { HERO_ICONS } from "@/components/ui/icons";
import { HERO } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden text-white">
      <div className="rail relative pt-32 pb-40 sm:pt-36 lg:pt-20 lg:pb-56">
        {/* Headline + CTA — above the fold, painted immediately (no JS-gated entrance) */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mt-6 capitalize text-balance text-display font-semibold leading-(--text-display--line-height) tracking-(--text-display--letter-spacing)">
            {HERO.headline[0]}
            <br />
            <span className="bg-linear-to-r from-white via-white to-primary-soft bg-clip-text text-transparent">
              {HERO.headline[1]}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base text-white/55 sm:text-lg">
            {HERO.subtitle}
          </p>

          <StoreButtons className="mt-8 justify-center" />
        </div>

        {/* Visual composition */}
        <div className="relative mt-16 flex justify-center lg:mt-12">
          {/* Phone — LCP image, rendered immediately (no opacity entrance) */}
          <div className="relative flex justify-center z-10">

          <div className="glass absolute -left-87.5 backdrop-blur-[35.4px] max-w-88.75 w-full rounded-2xl p-4 mt-18">
              <ul className="space-y-3">
                {HERO.highlights.map((h) => {
                  const Icon = HERO_ICONS[h.icon];
                  return (
                    <li key={h.title} className="flex gap-3 rounded-xl transition-color items-center">
                      <span className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-[#100C2F] text-primary-soft">
                        <Icon className="h-6 w-6 text-white" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-bold leading-4.25 text-white">{h.title}</p>
                        <p className="mt-1 text-xs leading-snug text-white/50">{h.body}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
          </div>

            <Image
              src="/figma/phone-hero.webp"
              alt="AllMoneyCard mobile app showing balance, cards and transactions"
              width={743}
              height={1196}
              priority
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 768px) 70vw, 360px"
              className="h-auto w-65 z-10 drop-shadow-[0_40px_80px_rgba(0,0,0,0.55)] sm:w-75 lg:w-90"
            />  

            <div className="absolute z-0 -right-95 mt-34">
              <Image
                src="/figma/hero-card.webp"
                alt="AllMoneyCard virtual Mastercard"
                width={894}
                height={648}
                sizes="400px"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
