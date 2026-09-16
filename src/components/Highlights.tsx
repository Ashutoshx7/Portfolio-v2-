"use client";

import Link from "next/link";
import { highlightsData, type Highlight } from "@/data/highlightsData";

function HighlightCard({ item }: { item: Highlight }) {
  const inner = (
    <div
      className={`relative group flex-shrink-0 ${item.cardWidth ? "" : "w-[280px] sm:w-[300px]"}`}
      style={item.cardWidth ? { width: `${item.cardWidth}px` } : undefined}
    >
      {/* Outer subtle double-border frame matching portfolio design language */}
      <div className="absolute -inset-[4px] border border-black/5 dark:border-white/5 rounded-[10px] pointer-events-none transition-colors duration-300 group-hover:border-black/10 dark:group-hover:border-white/10" />

      {/* Main Card Body */}
      <div className="relative flex flex-col rounded-[6px] overflow-hidden bg-zinc-50 dark:bg-[#09090b] border border-black/5 dark:border-white/5 shadow-sm shadow-black/5 dark:shadow-lg dark:shadow-black/80 transition-all duration-300 group-hover:bg-zinc-100/80 dark:group-hover:bg-[#121214]">
        {/* Screenshot Image Container */}
        <div className="relative h-[200px] w-full bg-zinc-100 dark:bg-[#0a0a0a] overflow-hidden">
          {item.image ? (
            <>
              {item.imageFit === "contain" && (
                <img
                  src={item.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 size-full scale-110 object-cover opacity-20 blur-xl grayscale transition-all duration-500 group-hover:opacity-30 group-hover:grayscale-0"
                  loading="lazy"
                  draggable={false}
                />
              )}
              <img
                src={item.image}
                alt={item.title}
                className={`relative z-[1] w-full h-full ${item.imageFit === "contain" ? "object-contain" : "object-cover object-top"} grayscale group-hover:grayscale-0 transition-all duration-500 scale-[1.01] group-hover:scale-[1.03]`}
                loading="lazy"
                draggable={false}
              />
            </>
          ) : (
            <div
              className="absolute inset-0 opacity-[0.05] dark:opacity-[0.04]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg,transparent,transparent 23px,currentColor 23px,currentColor 24px),repeating-linear-gradient(90deg,transparent,transparent 23px,currentColor 23px,currentColor 24px)",
              }}
            />
          )}
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
        <div className="flex h-[86px] flex-col gap-1.5 p-3">
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-[4px] bg-black/5 dark:bg-white/5 text-[10px] font-semibold tracking-wider uppercase text-zinc-600 dark:text-zinc-400 border border-black/5 dark:border-white/5">
              {item.badge}
            </span>
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
          <p className="text-[13px] font-medium text-zinc-800 dark:text-zinc-200 leading-snug transition-colors group-hover:text-zinc-900 dark:group-hover:text-white line-clamp-2">
            {item.title}
          </p>
        </div>
      </div>
    </div>
  );

  if (item.link) {
    return (
      <Link href={item.link} target="_blank" rel="noopener noreferrer" className="block">
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
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
      {/* Right fade mask */}
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

      <div className="highlights-track flex w-max items-start gap-4">
        {items.map((item, i) => (
          <HighlightCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Highlights;
