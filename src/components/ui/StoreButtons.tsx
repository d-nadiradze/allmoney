import { AppleIcon, GooglePlayIcon, TelegramIcon } from "./icons";
import { DOWNLOAD_CTAS } from "@/lib/content";

const ICONS = {
  ios: <AppleIcon className="h-5 w-5" />,
  android: <GooglePlayIcon className="h-5 w-5" />,
  telegram: <TelegramIcon className="h-5 w-5" />,
};

type StoreButtonsProps = {
  className?: string;
  /** "dark" sits on near-black backgrounds, "primary" sits on the purple CTA card. */
  tone?: "dark" | "primary";
};

export function StoreButtons({ className = "", tone = "dark" }: StoreButtonsProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {DOWNLOAD_CTAS.map((cta) => {
        const isTelegram = cta.store === "telegram";
        const telegramClasses =
          tone === "primary"
            ? "bg-ink text-white shadow-[0_18px_40px_-18px_rgba(0,0,0,0.6)] hover:bg-ink-soft"
            : "bg-primary text-white shadow-[0_18px_40px_-18px_rgba(114,53,213,0.9)] hover:bg-primary-deep";
        return (
          <a
            key={cta.label}
            href={cta.href}
            className={[
              "group inline-flex items-center gap-2.5 rounded-xl px-4 py-3 text-[15px] font-bold tracking-tight",
              "transition-transform duration-200 will-change-transform hover:-translate-y-0.5 active:translate-y-0",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              isTelegram
                ? telegramClasses
                : "bg-white text-ink shadow-[0_18px_40px_-22px_rgba(0,7,52,0.45)] hover:shadow-[0_22px_46px_-22px_rgba(0,7,52,0.5)]",
            ].join(" ")}
          >
            <span className="shrink-0">{ICONS[cta.store]}</span>
            {cta.label}
          </a>
        );
      })}
    </div>
  );
}
