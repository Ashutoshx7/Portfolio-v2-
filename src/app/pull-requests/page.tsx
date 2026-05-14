import { ThemeToggle } from "@/components/theme-toggle";
import { OpenSourceContributions } from "@/components/OpenSourceContributions";
import Link from "next/link";

export default function PullRequestsPage() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-[#0a0a0a] relative overflow-x-hidden transition-colors duration-300">
      {/* Vertical Lines - Ultra-fine Micro Dots */}
      <div className="absolute top-0 bottom-0 left-[31%] w-0 border-r border-zinc-200 dark:border-zinc-800 pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />
      <div className="absolute top-0 bottom-0 right-[31%] w-0 border-r border-zinc-200 dark:border-zinc-800 pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />

      <div className="relative z-20 flex justify-center py-16">
        <div className="w-[38%] min-w-[320px] relative">
          <Link href="/" className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors mb-6 group relative z-50">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Home
          </Link>
          
          <OpenSourceContributions isFullPage />
        </div>
      </div>
      <ThemeToggle />
    </div>
  );
}
