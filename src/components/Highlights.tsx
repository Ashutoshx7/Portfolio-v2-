"use client";

import Link from "next/link";
import Image from "next/image";
import { highlightsData, type Highlight } from "@/data/highlightsData";
import { cn } from "@/lib/utils";

export function HighlightCard({ item, layout = "marquee", number }: { item: Highlight; layout?: "marquee" | "archive"; number?: number }) {
  const isArchive = layout === "archive";
  const inner = (
    <div
      className={cn(
        "relative group",
        isArchive ? "w-full min-w-0" : "flex-shrink-0",
        !isArchive && !item.cardWidth && "w-[280px] sm:w-[300px]",
      )}
      style={!isArchive && item.cardWidth ? { width: `${item.cardWidth}px` } : undefined}
    >
      {/* Outer subtle double-border frame matching portfolio design language */}
      <div className={cn(
        "absolute -inset-[4px] rounded-[10px] border border-black/5 dark:border-white/5 pointer-events-none transition-colors duration-300 group-hover:border-black/10 dark:group-hover:border-white/10",
        isArchive && "group-hover:border-black/15 dark:group-hover:border-white/15",
      )} />

      {/* Main Card Body */}
      <div className={cn(
        "relative flex flex-col rounded-[6px] overflow-hidden bg-zinc-50 dark:bg-[#09090b] border border-black/5 dark:border-white/5 shadow-sm shadow-black/5 dark:shadow-lg dark:shadow-black/80 transition-all duration-300 group-hover:bg-zinc-100/80 dark:group-hover:bg-[#121214]",
        isArchive && "motion-safe:group-hover:-translate-y-px group-hover:border-black/15 dark:group-hover:border-white/15 group-hover:shadow-md dark:group-hover:shadow-black/90",
      )}>
        {/* Screenshot Image Container */}
        <div className={cn(
          "relative w-full bg-zinc-100 dark:bg-[#0a0a0a] overflow-hidden",
          !isArchive && "h-[200px]",
        )}>
          {isArchive ? (
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: `${item.imageWidth} / ${item.imageHeight}` }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                preload={number !== undefined && number <= 2}
                sizes="(min-width: 768px) 20vw, 100vw"
                quality={75}
                className="object-cover object-top saturate-[.78] transition-[filter,transform] duration-500 ease-out motion-safe:group-hover:scale-[1.015] group-hover:saturate-100"
                draggable={false}
              />
            </div>
          ) : item.image ? (
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes={`${item.cardWidth ?? 300}px`}
              quality={70}
              className={`${item.imageFit === "contain" ? "object-contain" : "object-cover object-top"} grayscale transition-[filter,transform] duration-500 ease-out motion-safe:group-hover:scale-[1.025] group-hover:grayscale-0`}
              draggable={false}
            />
          ) : (
            <div
              className="absolute inset-0 opacity-[0.05] dark:opacity-[0.04]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg,transparent,transparent 23px,currentColor 23px,currentColor 24px),repeating-linear-gradient(90deg,transparent,transparent 23px,currentColor 23px,currentColor 24px)",
              }}
            />
          )}
          {isArchive && <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.025] to-white/[0.08] opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:via-white/[0.01] dark:to-white/[0.04]" />}
        </div>

        {/* Signature Dashed Divider Motif */}
        <div
          className="h-px bg-black/30 dark:bg-white/[0.15]"
          style={{
            maskImage:
              "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
            WebkitMaskImage:
              "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
          }}
        />

        {/* Info Content Section */}
        <div className={`flex flex-col gap-1.5 p-3 ${isArchive ? "min-h-[78px] sm:px-4" : "h-[86px]"}`}>
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-[4px] bg-black/5 dark:bg-white/5 text-[10px] font-semibold tracking-wider uppercase text-zinc-600 dark:text-zinc-400 border border-black/5 dark:border-white/5">
              {item.badge}
            </span>
            <div className="flex shrink-0 items-center gap-2">
              {isArchive && number && <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600">{String(number).padStart(2, "0")}</span>}
              {item.link && (
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              )}
            </div>
          </div>
          <p className={`font-medium text-zinc-800 dark:text-zinc-200 leading-snug transition-colors group-hover:text-zinc-900 dark:group-hover:text-white ${isArchive ? "text-[14px]" : "text-[13px] line-clamp-2"}`}>
            {item.title}
          </p>
        </div>
      </div>
    </div>
  );

  if (item.link) {
    return (
      <Link href={item.link} target="_blank" rel="noopener noreferrer" className={isArchive ? "block rounded-[6px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500" : "block"}>
        {inner}
      </Link>
    );
  }

  return inner;
}

export function Highlights() {
  const items = [...highlightsData, ...highlightsData];

  return (
    <div className="relative mt-4 overflow-hidden py-2">
      {/* Left fade mask */}
      <div className="absolute left-0 top-0 bottom-0 z-10 w-5 bg-gradient-to-r from-white/70 to-transparent pointer-events-none dark:from-black/70" />
      {/* Right fade mask */}
      <div className="absolute right-0 top-0 bottom-0 z-10 w-5 bg-gradient-to-l from-white/70 to-transparent pointer-events-none dark:from-black/70" />

      <div className="highlights-track flex w-max items-start gap-4">
        {items.map((item, i) => (
          <HighlightCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Highlights;
