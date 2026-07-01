import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { STEPS } from "@/lib/content";

export function Steps() {
  return (
    <section id="get-started" className="rail scroll-mt-24 pb-20 sm:pb-28">
      <Reveal>
        <h2 className="mx-auto text-center capitalize text-balance text-display font-semibold leading-(--text-display--line-height) tracking-(--text-display--letter-spacing)">
          How to get started
        </h2>
      </Reveal>

      <Stagger className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {STEPS.map((step) => (
          <StaggerItem key={step.step} className="h-full">
            <article className="relative liquid-glass bg-white/70 flex h-full flex-row items-center gap-4 rounded-card p-5 text-left shadow-[0_30px_60px_-45px_rgba(0,7,52,0.4)] transition-transform duration-300 md:flex-col md:items-stretch md:gap-0 md:text-center">
              {/* Desktop: step label sits absolute top-left; on mobile it's inline in the text block */}
              <p className="absolute top-[22px] left-[22px] hidden text-sm font-medium tracking-wide text-ink/40 md:block">
                {step.step}
              </p>
              <div className="grid h-24 w-24 shrink-0 place-items-center md:mx-auto md:h-[148px] md:w-[148px]">
                <Image
                  src={step.icon}
                  alt=""
                  width={256}
                  height={256}
                  sizes="(max-width: 768px) 96px, 148px"
                  className="h-auto w-full"
                />
              </div>
              <div className="min-w-0 flex-1 md:contents">
                <p className="sm:text-sm text-xs font-medium tracking-wide text-ink/40 md:hidden">{step.step}</p>
                <h3 className="mt-1 sm:text-[24px] text-base font-bold tracking-tight text-ink">{step.title}</h3>
                <p className="mt-1 text-sm leading-snug text-ink/55 md:mt-2">{step.body}</p>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
