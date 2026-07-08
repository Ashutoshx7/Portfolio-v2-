"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { highlightsData, type Highlight } from "@/data/highlightsData";

function HighlightCard({ item }: { item: Highlight }) {
  const inner = (
    <div className="group w-[260px] flex-shrink-0 flex flex-col rounded-[6px] overflow-hidden bg-zinc-50 dark:bg-[#09090b] border border-black/30 dark:border-white/[0.15] transition-colors duration-200 cursor-default">
      {/* Screenshot */}
      <div className="relative w-full aspect-video bg-zinc-100 dark:bg-zinc-800/40 overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
            loading="lazy"
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
      </div>

      {/* Divider */}
      <div className="h-px bg-black/30 dark:bg-white/[0.15]" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />

      {/* Info */}
      <div className="flex items-start justify-between gap-2 px-3 py-2.5">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-zinc-400 dark:text-zinc-500">
            {item.badge}
          </span>
          <p className="text-[13px] font-medium text-zinc-800 dark:text-zinc-200 leading-snug">
            {item.title}
          </p>
        </div>
        {item.link && (
          <ExternalLink className="w-3 h-3 mt-0.5 flex-shrink-0 text-zinc-300 dark:text-zinc-700 group-hover:text-zinc-500 dark:group-hover:text-zinc-500 transition-colors" />
        )}
      </div>
    </div>
  );

  if (item.link) {
    return (
      <Link href={item.link} target="_blank" rel="noopener noreferrer">
        {inner}
      </Link>
    );
  }

  return inner;
}

export function Highlights() {
  const items = [...highlightsData, ...highlightsData];

  return (
    <div className="relative mt-4 overflow-hidden">
      {/* Left fade mask */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
      {/* Right fade mask */}
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

      <div className="highlights-track flex gap-3 w-max">
        {items.map((item, i) => (
          <HighlightCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
