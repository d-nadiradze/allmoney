import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { FeaturePills } from "@/components/ui/FeaturePills";
import { FEATURES } from "@/lib/content";

export function Features() {
  return (
    <section id="features" className="rail scroll-mt-24 py-10 sm:py-28">
      <Reveal>
        <h2 className="mx-auto text-center capitalize text-balance text-display font-semibold leading-(--text-display--line-height) tracking-(--text-display--letter-spacing)">
          {FEATURES.title[0]}
          <br className="hidden sm:block" /> {FEATURES.title[1]}
        </h2>
      </Reveal>

      <Reveal delay={0.08} className="relative mx-auto mt-12 w-full max-w-[600px]">
        <div
          aria-hidden
          className="absolute inset-x-8 top-10 -z-10 h-3/4 rounded-full bg-primary/30 blur-[80px]"
        />
        <Image
          src="/figma/features-card.webp"
          alt="AllMoneyCard virtual Mastercard with Apple Pay and Google Pay support"
          width={1374}
          height={997}
          sizes="(max-width: 768px) 90vw, 600px"
          className="h-auto w-full"
        />
      </Reveal>

      <FeaturePills items={FEATURES.pills} className="relative -mt-14 max-w-3xl mx-auto" />
    </section>
  );
}
