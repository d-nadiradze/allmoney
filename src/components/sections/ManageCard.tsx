import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { FeaturePills } from "@/components/ui/FeaturePills";
import { MANAGE, PHONE_SCREENS } from "@/lib/content";

export function ManageCard() {
  return (
    <section id="manage" className="rail scroll-mt-24 pt-[40px]">
      <Reveal>
        <h2 className="mx-auto text-[64px] capitalize text-balance text-center text-headline font-semibold leading-[72px] tracking-[-2px] text-ink">
          {MANAGE.title}
        </h2>
      </Reveal>
      <FeaturePills items={MANAGE.pills} className="mt-10 max-w-4xl mx-auto" />
      {/* App screen showcase */}
      <div className="rail mt-8">
        <div className="flex snap-x snap-mandatory gap-[64px] overflow-x-auto pb-4 [scrollbar-width:none] sm:justify-center sm:overflow-visible">
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
