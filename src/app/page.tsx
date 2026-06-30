import { Header } from "@/components/sections/Header";
import { StickyHero } from "@/components/sections/StickyHero";
import { Features } from "@/components/sections/Features";
import { WhatYouCanDo } from "@/components/sections/WhatYouCanDo";
import { ManageCard } from "@/components/sections/ManageCard";
import { Fees } from "@/components/sections/Fees";
import { Steps } from "@/components/sections/Steps";
import { CtaFooter } from "@/components/sections/CtaFooter";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <StickyHero />
        <div className="relative z-10 -mt-10 rounded-t-[40px] bg-surface shadow-[0_-40px_80px_-30px_rgba(3,3,3,0.55)] md:-mt-16 md:rounded-t-[64px]">
          {/* Sentinel: when this reaches the header line, the header switches to its light theme */}
          <div id="content-top-sentinel" aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px" />
          <Features />
          <WhatYouCanDo />
          <ManageCard />
          <Fees />
          <Steps />
          <CtaFooter />
        </div>
      </main>
    </>
  );
}
