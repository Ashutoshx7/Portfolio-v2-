"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./ExperienceTimeline.module.css";

type TimelineItem = {
  label: string;
  shortLabel: string;
  dates: string;
  detail: string;
  experienceIndex: number;
  start: number;
  end: number;
  align: "start" | "end";
  icon: string;
  iconClassName?: string;
  barClassName: string;
};

// Begin at the first role so the durations use the full chart width.
const timelineItems: TimelineItem[] = [
  {
    label: "LF AI Security",
    shortLabel: "LF",
    dates: "Jun 2026 – Present",
    detail: "AI Security Intern, Caracal",
    experienceIndex: 0,
    start: 84,
    end: 100,
    align: "end",
    icon: "/Experience-image/lf-decentralized-trust.png",
    barClassName:
      "border-[#0369a1] bg-[#0369a1] text-white hover:border-[#0284c7] hover:bg-[#0284c7]",
  },
  {
    label: "GSoC 2026",
    shortLabel: "GSoC",
    dates: "May 2026 – August 2026",
    detail: "AI Intern, Sugar Labs",
    experienceIndex: 1,
    start: 79,
    end: 95,
    align: "end",
    icon: "/Experience-image/Google_Summer_of_Code_sun_logo_2022.svg (1).png",
    barClassName:
      "border-[#d97706] bg-[#d97706] text-white hover:border-[#f59e0b] hover:bg-[#f59e0b] hover:text-zinc-950",
  },
  {
    label: "VengenceUI",
    shortLabel: "VengenceUI",
    dates: "Oct 2025 – Present",
    detail: "Founder & Maintainer",
    experienceIndex: 2,
    start: 47,
    end: 100,
    align: "start",
    icon: "/Experience-image/vercel-symbol-colored-light.png",
    iconClassName: "scale-75",
    barClassName:
      "border-[#27272a] bg-[#27272a] text-white hover:border-[#3f3f46] hover:bg-[#3f3f46]",
  },
  {
    label: "Open Source Contributor",
    shortLabel: "Open source",
    dates: "Sep 2025 – Apr 2026",
    detail: "Sugar Labs, Joplin, kgateway & more",
    experienceIndex: 3,
    start: 42,
    end: 79,
    align: "end",
    icon: "/Experience-image/pngegg (1).png",
    iconClassName: "scale-[1.35]",
    barClassName:
      "border-[#6d28d9] bg-[#6d28d9] text-white hover:border-[#7c3aed] hover:bg-[#7c3aed]",
  },
  {
    label: "GSoC 2025",
    shortLabel: "GSoC",
    dates: "May 2025 – Aug 2025",
    detail: "Open Source Contributor",
    experienceIndex: 4,
    start: 23,
    end: 42,
    align: "start",
    icon: "/Experience-image/Google_Summer_of_Code_sun_logo_2022.svg (1).png",
    barClassName:
      "border-[#c2410c] bg-[#c2410c] text-white hover:border-[#ea580c] hover:bg-[#ea580c]",
  },
  {
    label: "C4GT",
    shortLabel: "C4GT",
    dates: "May 2025 – Aug 2025",
    detail: "Open Source Contributor",
    experienceIndex: 5,
    start: 23,
    end: 42,
    align: "end",
    icon: "https://static.wixstatic.com/media/060b0c_8029055ce0074bfaa4bb6d9f1c2c33d2~mv2.png/v1/fill/w_2266,h_2168,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/060b0c_8029055ce0074bfaa4bb6d9f1c2c33d2~mv2.png",
    barClassName:
      "border-[#be123c] bg-[#be123c] text-white hover:border-[#e11d48] hover:bg-[#e11d48]",
  },
  {
    label: "Open Source Contributor",
    shortLabel: "OSS",
    dates: "Dec 2024 – Apr 2025",
    detail: "Full Stack Developer",
    experienceIndex: 6,
    start: 0,
    end: 23,
    align: "start",
    icon: "/Experience-image/pngegg (1).png",
    iconClassName: "scale-[1.35]",
    barClassName:
      "border-[#047857] bg-[#047857] text-white hover:border-[#059669] hover:bg-[#059669]",
  },
];

type ExperienceTimelineProps = {
  onSelect: (experienceIndex: number) => void;
};

export function ExperienceTimeline({ onSelect }: ExperienceTimelineProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Mobile opens on the recent work while preserving the full history to the left.
    scroller.scrollLeft = scroller.scrollWidth - scroller.clientWidth;
  }, []);

  return (
    <section
      aria-labelledby="experience-timeline-title"
      className="relative z-10 flex h-full flex-col px-4 pb-4 pt-4"
    >
      <div className="flex h-8 shrink-0 items-start justify-between gap-4">
        <div className="flex min-w-0 items-baseline gap-2">
          <h2
            id="experience-timeline-title"
            className="truncate text-[15px] font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-[16px]"
          >
            Career timeline
          </h2>
          <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-600 sm:hidden">
            drag
          </span>
        </div>
        <span className="shrink-0 pt-0.5 font-mono text-[10px] font-medium tracking-[0.12em] text-zinc-500 dark:text-zinc-500 sm:text-[11px]">
          2024—PRESENT
        </span>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-4 top-[72px] z-0 grid grid-rows-7 gap-1"
      >
        {timelineItems.map((item) => (
          <span
            key={`lane-${item.experienceIndex}`}
            className="border-t border-black/[0.08] dark:border-white/[0.065]"
          />
        ))}
        <span className="absolute inset-x-0 bottom-0 border-b border-black/[0.08] dark:border-white/[0.065]" />
      </div>

      <div
        ref={scrollerRef}
        dir="rtl"
        className="relative min-h-0 flex-1 overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div dir="ltr" className="flex h-full w-full flex-col sm:w-[620px] 2xl:w-full">
          <div className="relative h-6 shrink-0 font-mono text-[9px] tracking-[0.08em] text-zinc-400 dark:text-zinc-600 sm:text-[10px]">
            <span className="absolute left-0">2025</span>
            <span className="absolute left-[59%] -translate-x-1/2">2026</span>
            <span className="absolute right-0 flex items-center gap-1 text-zinc-600 dark:text-zinc-400">
              <span className="size-1 rounded-full bg-orange-500" />
              NOW
            </span>
          </div>

          <div
            className="relative grid min-h-0 flex-1 grid-rows-7 gap-1"
            style={{
              backgroundImage:
                "linear-gradient(to right, transparent 24.5%, rgba(113,113,122,0.07) 24.5%, rgba(113,113,122,0.07) 25%, transparent 25%, transparent 49.5%, rgba(113,113,122,0.07) 49.5%, rgba(113,113,122,0.07) 50%, transparent 50%, transparent 74.5%, rgba(113,113,122,0.07) 74.5%, rgba(113,113,122,0.07) 75%, transparent 75%)",
            }}
          >
            {[5, 59].map((position) => (
              <span
                key={position}
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 z-0 w-px border-l border-black/20 dark:border-white/[0.12]"
                style={{
                  left: `${position}%`,
                  maskImage:
                    "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
                  WebkitMaskImage:
                    "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
                }}
              />
            ))}

            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-20 w-px bg-orange-500/90"
            />

            {timelineItems.map((item) => (
              <div
                key={item.experienceIndex}
                className="relative"
              >
                <div
                  className={`${styles.item} absolute top-1/2 z-10 -translate-y-1/2`}
                  style={{ left: `${item.start}%`, right: `${100 - item.end}%` }}
                >
                  <button
                    type="button"
                    aria-label={`View ${item.label}`}
                    aria-describedby={`experience-timeline-tip-${item.experienceIndex}`}
                    onClick={() => onSelect(item.experienceIndex)}
                    className={`${styles.bar} relative flex h-8 w-full cursor-pointer items-center overflow-hidden rounded-md border px-2 text-[10px] font-bold shadow-[0_3px_10px_rgba(0,0,0,0.18)] ring-1 ring-inset ring-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                      item.align === "end" ? "justify-end" : "justify-start"
                    } ${item.barClassName}`}
                  >
                    <span className="relative z-10 flex min-w-max items-center gap-1.5">
                      <span className="relative flex size-4 shrink-0 items-center justify-center overflow-hidden rounded-[4px] border border-black/10 bg-white dark:border-black/15">
                        <Image
                          src={item.icon}
                          alt=""
                          aria-hidden="true"
                          width={16}
                          height={16}
                          sizes="16px"
                          quality={60}
                          className={`size-full object-contain p-px ${item.iconClassName ?? ""}`}
                        />
                      </span>
                      <span className="whitespace-nowrap sm:hidden">{item.shortLabel}</span>
                      <span className="hidden whitespace-nowrap sm:inline">{item.label}</span>
                    </span>
                  </button>
                  <div
                    id={`experience-timeline-tip-${item.experienceIndex}`}
                    role="tooltip"
                    className={`${styles.tooltip} pointer-events-none absolute z-50 w-max max-w-56 rounded-md border border-zinc-200 bg-white/95 px-2.5 py-2 text-left shadow-[0_8px_20px_rgba(0,0,0,0.16)] backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-900/95 dark:shadow-[0_10px_24px_rgba(0,0,0,0.45)] ${
                      item.experienceIndex <= 3 ? "top-full mt-2" : "bottom-full mb-2"
                    } ${item.align === "end" ? "right-0" : "left-0"}`}
                  >
                    <p className="text-[11px] font-semibold leading-tight text-zinc-900 dark:text-zinc-100">
                      {item.label}
                    </p>
                    <p className="mt-1 text-[10px] leading-snug text-zinc-600 dark:text-zinc-300">
                      {item.detail}
                    </p>
                    <p className="mt-1.5 border-t border-zinc-100 pt-1.5 font-mono text-[10px] text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                      {item.dates}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="sr-only">
        Timeline spanning December 2024 to the present. Select a role to open its full details below.
      </p>
    </section>
  );
}
