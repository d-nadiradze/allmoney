import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { FeaturePills } from "@/components/ui/FeaturePills";
import { MANAGE, PHONE_SCREENS } from "@/lib/content";

export function ManageCard() {
  return (
    <section id="manage" className="scroll-mt-24 pt-0 sm:pt-10">
      <Reveal>
        <h2 className="mx-auto text-center capitalize text-balance text-display font-semibold leading-(--text-display--line-height) tracking-(--text-display--letter-spacing)">
          {MANAGE.title}
        </h2>
      </Reveal>
      <FeaturePills items={MANAGE.pills} className="rail mt-10 max-w-4xl mx-auto" />
      {/* App screen showcase */}
      <div className="mt-8">
        <div className="flex snap-x snap-mandatory sm:gap-[64px] gap-4 overflow-x-auto pb-4 [scrollbar-width:none] sm:justify-center sm:overflow-visible">
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
