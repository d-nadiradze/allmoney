import { AppleIcon, GooglePlayIcon, TelegramIcon } from "./icons";
import { DOWNLOAD_CTAS } from "@/lib/content";

const ICONS = {
  ios: <AppleIcon className="h-8 w-6.5" />,
  android: <GooglePlayIcon className="h-8 w-7" />,
  telegram: <TelegramIcon className="h-8 w-8" />,
};

type StoreButtonsProps = {
  className?: string;
};

export function StoreButtons({ className = "" }: StoreButtonsProps) {
  return (
    <div className={`flex flex-row items-center gap-1 ${className}`}>
      {DOWNLOAD_CTAS.map((cta) => (
        <a
          key={cta.label}
          href={cta.href}
          className={[
            "group liquid-glass inline-flex items-center rounded-xl px-4 py-2 text-[15px] font-bold tracking-tight text-white sm:w-auto w-26.75",
            "transition-all duration-200 will-change-transform hover:-translate-y-0.5 active:translate-y-0",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70",
          ].join(" ")}
        >
          <span className="relative flex sm:flex-row flex-col z-10 items-center gap-2.5 sm:text-base text-xs">
            <span className="shrink-0">{ICONS[cta.store]}</span>
            <span className={'text-center'}>{cta.label}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
