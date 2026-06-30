import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { STEPS } from "@/lib/content";

export function Steps() {
  return (
    <section id="get-started" className="rail scroll-mt-24 pb-20 sm:pb-28">
      <Reveal>
        <h2 className="text-center capitalize text-[64px] text-balance text-headline font-semibold leading-[72px] tracking-[-2px] text-ink">
          How to get started
        </h2>
      </Reveal>

      <Stagger className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {STEPS.map((step) => (
          <StaggerItem key={step.step} className="h-full">
            <article className="flex h-full flex-col rounded-card bg-white p-5 shadow-[0_30px_60px_-45px_rgba(0,7,52,0.4)] transition-transform duration-300 hover:-translate-y-1">
              <div className="mx-auto grid h-32 w-32 place-items-center">
                <Image
                  src={step.icon}
                  alt=""
                  width={256}
                  height={256}
                  sizes="128px"
                  className="h-auto w-full"
                />
              </div>
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-ink/40">
                {step.step}
              </p>
              <h3 className="mt-1 text-lg font-semibold tracking-tight text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-snug text-ink/55">{step.body}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
