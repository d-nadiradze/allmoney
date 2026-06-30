"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Keyboard } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper/types";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/ui/icons";
import { CAPABILITIES } from "@/lib/content";

import "swiper/css";
import "swiper/css/pagination";

export function WhatYouCanDo() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  const bindControls = (swiper: SwiperClass) => {
    const nav = swiper.params.navigation;
    if (nav && typeof nav !== "boolean") {
      nav.prevEl = prevRef.current;
      nav.nextEl = nextRef.current;
    }
    const pagination = swiper.params.pagination;
    if (pagination && typeof pagination !== "boolean") {
      pagination.el = paginationRef.current;
    }
  };

  return (
    <section id="capabilities" className="scroll-mt-24 overflow-hidden py-10 sm:py-20">
      <div className="">
        <Reveal>
          <h2 className="mx-auto text-center capitalize text-balance text-display font-semibold leading-(--text-display--line-height) tracking-(--text-display--letter-spacing)">
            What you can do with AllMoneyCard
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.05} className="mt-10">
        <Swiper
          modules={[Navigation, Pagination, A11y, Keyboard]}
          onBeforeInit={bindControls}
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          grabCursor
          spaceBetween={20}
          slidesPerView={1.12}
          speed={650}
          breakpoints={{
            640: { slidesPerView: 2.1, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="px-(--gutter)! pb-2!"
          style={
            {
              "--swiper-pagination-color": "#7235d5",
              "--swiper-pagination-bullet-inactive-color": "#000734",
              "--swiper-pagination-bullet-inactive-opacity": "0.18",
              "--swiper-wrapper-transition-timing-function": "cubic-bezier(0.22, 1, 0.36, 1)",
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

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            ref={prevRef}
            type="button"
            aria-label="Previous slide"
            className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 [&.swiper-button-disabled]:pointer-events-none [&.swiper-button-disabled]:opacity-30"
          >
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
          </button>

          <div ref={paginationRef} className="static! flex! w-auto items-center justify-center gap-1" />

          <button
            ref={nextRef}
            type="button"
            aria-label="Next slide"
            className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 [&.swiper-button-disabled]:pointer-events-none [&.swiper-button-disabled]:opacity-30"
          >
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </div>
      </Reveal>
    </section>
  );
}
