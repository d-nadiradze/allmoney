"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Keyboard, Autoplay } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper/types";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/ui/icons";
import { CAPABILITIES } from "@/lib/content";

import "swiper/css";
import "swiper/css/pagination";

export function WhatYouCanDo() {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const syncEdges = (s: SwiperClass) => {
    setIsBeginning(s.isBeginning);
    setIsEnd(s.isEnd);
  };

  return (
    <section id="capabilities" className="scroll-mt-24 overflow-hidden py-10 sm:py-20 ml-10 md:mr-10 mr-0">
      <div className="">
        <Reveal>
          <h2 className="mx-auto text-center capitalize text-balance text-display font-semibold leading-(--text-display--line-height) tracking-(--text-display--letter-spacing)">
            Everything you can do with the AllMoney Card
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.05} className="mt-10">
        <Swiper
          modules={[Pagination, A11y, Keyboard, Autoplay]}
          onSwiper={(s) => {
            setSwiper(s);
            syncEdges(s);
          }}
          onSlideChange={syncEdges}
          onResize={syncEdges}
          keyboard={{ enabled: true }}
          pagination={{ el: "#capabilities-pagination", clickable: true }}
          grabCursor
          spaceBetween={20}
          slidesPerView={1.12}
          speed={650}
          autoplay={true}
          breakpoints={{
            640: { slidesPerView: 2.1, spaceBetween: 24 },
            768: { slidesPerView: 2.1, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1500: { slidesPerView: 4, spaceBetween: 24 },
          }}
          className="pb-2!"
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
                <article className="group relative w-full aspect-[477/639] overflow-hidden rounded-3xl bg-ink/5">
                  <Image
                      src={cap.image}
                      alt={cap.alt}
                      fill
                      sizes="(max-width: 477px) 100vw, 477px"
                      className="z-0 relative object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  {/* Bottom scrim so the title/caption stay legible over the photo */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,#21133E00_0%,#21133E_100%)]"
                  />
                  <div className="z-10 p-[10%] relative flex flex-col h-full justify-between text-white">
                    <p className={'text-sm font-bold'}>{cap.index}</p>
                    <div className="">
                        <p className={'text-[32px] capitalize font-bold mb-2 leading-10 tracking-[-1px] max-w-[370px]'}>{cap.title}</p>
                        <p>{cap.alt}</p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => swiper?.slidePrev()}
            disabled={isBeginning}
            className="grid cursor-pointer place-items-center text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:pointer-events-none disabled:opacity-30"
          >
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
          </button>

          <div id="capabilities-pagination" className="static! flex! w-auto! items-center justify-center gap-1" />

          <button
            type="button"
            aria-label="Next slide"
            onClick={() => swiper?.slideNext()}
            disabled={isEnd}
            className="grid cursor-pointer place-items-center text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:pointer-events-none disabled:opacity-30"
          >
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </div>
      </Reveal>
    </section>
  );
}
