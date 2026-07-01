import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { FeaturePills } from "@/components/ui/FeaturePills";
import { MANAGE, PHONE_SCREENS } from "@/lib/content";

export function ManageCard() {
  return (
    <section id="manage" className="flex flex-col scroll-mt-24 pt-0 sm:pt-10 overflow-hidden">
      <Reveal>
        <h2 className="mx-auto text-center capitalize text-balance text-display font-semibold leading-(--text-display--line-height) tracking-(--text-display--letter-spacing)">
          {MANAGE.title}
        </h2>
      </Reveal>
      <FeaturePills items={MANAGE.pills} className="order-2 sm:order-1 rail mt-10 max-w-4xl mx-auto" />
      {/* App screen showcase — sits above the pills on mobile, below on desktop */}
      <div className="order-1 sm:order-2 mt-8">
        <div className="flex justify-center snap-x snap-mandatory sm:gap-[64px] gap-4 pb-4 [scrollbar-width:none] sm:overflow-visible">
          {PHONE_SCREENS.map((screen, i) => (
            <Reveal
              key={screen.src}
              delay={i * 0.08}
              className="shrink-0 snap-center"
            >
              <Image
                src={screen.src}
                alt={screen.alt}
                width={744}
                height={1196}
                sizes="(max-width: 640px) 60vw, 280px"
                className="h-auto w-[220px] sm:w-[240px] lg:w-[280px]"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
