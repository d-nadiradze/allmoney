"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Keyboard } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper/types";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/ui/icons";
import { CAPABILITIES, PHONE_SCREENS } from "@/lib/content";

import "swiper/css";
import "swiper/css/pagination";

export function WhatYouCanDo() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const bindNav = (swiper: SwiperClass) => {
    const nav = swiper.params.navigation;
    if (nav && typeof nav !== "boolean") {
      nav.prevEl = prevRef.current;
      nav.nextEl = nextRef.current;
    }
  };

  return (
    <section id="capabilities" className="scroll-mt-24 overflow-hidden py-20 sm:py-20">
      <div className="">
        <Reveal>
          <h2 className="mx-auto capitalize text-[64px] text-balance text-center text-headline font-semibold leading-[72px] tracking-[-2px] text-ink">
            What you can do with AllMoneyCard
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.05} className="mt-10">
        <Swiper
          modules={[Navigation, Pagination, A11y, Keyboard]}
          onBeforeInit={bindNav}
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1.12}
          breakpoints={{
            640: { slidesPerView: 2.1, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="!px-[var(--gutter)] !pb-14"
          style={
            {
              "--swiper-pagination-color": "#7235d5",
              "--swiper-pagination-bullet-inactive-color": "#000734",
              "--swiper-pagination-bullet-inactive-opacity": "0.18",
            } as React.CSSProperties
          }
        >
          {CAPABILITIES.map((cap) => (
            <SwiperSlide key={cap.index} className="h-auto">
              <article className="group relative aspect-[478/639] overflow-hidden rounded-3xl bg-ink/5">
                <Image
                  src={cap.image}
                  alt={cap.alt}
                  fill
                  sizes="(max-width: 640px) 88vw, (max-width: 1024px) 46vw, 31vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="sr-only">
                  {cap.index} — {cap.title}. {cap.caption}
                </span>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>  
      </Reveal>
    </section>
  );
}
