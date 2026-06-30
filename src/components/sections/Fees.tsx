import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/ui/icons";
import { FEES } from "@/lib/content";

type Row = { label: string; value: string };

function FeeList({ title, rows, footer }: { title: string; rows: Row[]; footer?: React.ReactNode }) {
  return (
    <div className="rounded-card w-full sm:min-w-[447px] bg-white p-6 shadow-[0_30px_60px_-40px_rgba(0,7,52,0.35)]">
      <h3 className="text-cardtitle font-semibold tracking-tight text-ink">{title}</h3>
      <dl className="mt-5 divide-y divide-hairline">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-6 py-3.5">
            <dt className="text-sm text-ink/80">{row.label}</dt>
            <dd className="shrink-0 text-right text-sm font-semibold text-ink">{row.value}</dd>
          </div>
        ))}
      </dl>
      {
        footer && (
          <div className="mt-6 text-center">
            {footer}
          </div>
        )
      }
    </div>
  );
}

export function Fees() {
  return (
    <section
      id="fees"
      className="scroll-mt-24 bg-[linear-gradient(180deg,#F2F3F9_0%,#D5BEFF_24%,#B487FF_50%,#D28EFF_76%,#F2F3F9_100%)] py-20 sm:py-28"
    >
      <div className="rail">
        <Reveal>
          <h2 className="mx-auto text-center capitalize text-balance text-display font-semibold leading-(--text-display--line-height) tracking-(--text-display--letter-spacing)">
            {FEES.title}
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base sm:text-[24px]">
            {FEES.subtitle}
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col sm:flex-row justify-center items-start gap-6">
          <div className="bg-ink w-full sm:w-auto rounded-card p-6 shadow-[0_30px_60px_-40px_rgba(0,7,52,0.35)]">
              <Image
                src="/figma/hero-card.png"
                alt="Virtual Mastercard with a card issuance fee of 5.99$"
                width={586}
                height={724}
                sizes="(max-width: 1024px) 60vw, 245px"
                className="h-auto w-full max-w-[245px]"
              />
              <div className="text-white">
                <p className="text-[24px] max-w-[124px] mt-[22px] mb-[30px]">{FEES.issuance.note}</p>
                <div className="">
                  <p className="text-white/50 text-sm font-normal">
                    {FEES.issuance.label}
                  </p>
                  <p className="text-white text-[32px] font-semibold">
                    {FEES.issuance.value}
                  </p>
                </div>
              </div>
          </div>

          <Reveal delay={0.08}>
            <FeeList title={FEES.feesColumn.title} rows={FEES.feesColumn.rows} />
          </Reveal>

          <Reveal delay={0.14} className="w-full sm:w-auto">
            <div className="flex h-full w-full sm:w-auto flex-col gap-4">
              <FeeList 
              title={FEES.limitsColumn.title} 
              rows={FEES.limitsColumn.rows} 
              footer={<a
                href="#get-started"
                className="group inline-flex items-center gap-2 self-start px-1 text-sm font-semibold text-primary"
              >
                View full fees and limits
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
