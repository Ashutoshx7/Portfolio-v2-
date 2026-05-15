"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface PR {
  id: number;
  title: string;
  url: string;
  repository: {
    nameWithOwner: string;
  };
  state: string;
  createdAt: string;
  mergedAt?: string;
  closedAt?: string;
}

export function OpenSourceContributions({ isFullPage = false }: { isFullPage?: boolean }) {
  const [prs, setPrs] = useState<PR[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState<"merged" | "open" | "closed">("merged");
  const [closedPRIds] = useState<Set<number>>(new Set());

  const initialCount = 4;

  useEffect(() => {
    const fetchPRs = async () => {
      const cacheKey = `github_prs_${filterType}`;
      const cachedData = typeof window !== 'undefined' ? localStorage.getItem(cacheKey) : null;
      
      if (cachedData) {
        try {
          setPrs(JSON.parse(cachedData));
          setLoading(false);
        } catch (e) {
          setLoading(true);
        }
      } else {
        setLoading(true);
      }

      try {
        const searchQuery = filterType === "merged"
          ? "author:Ashutoshx7 type:pr is:merged"
          : filterType === "open"
            ? "author:Ashutoshx7 type:pr is:open"
            : "author:Ashutoshx7 type:pr is:closed is:unmerged";

        const query = `query {
          search(query: "${searchQuery}", type: ISSUE, first: 100) {
            edges {
              node {
                ... on PullRequest {
                  id
                  title
                  url
                  repository {
                    nameWithOwner
                  }
                  state
                  createdAt
                  mergedAt
                  closedAt
                }
              }
            }
          }
        }`;

        const response = await fetch("/api/github", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });

        const data = await response.json();
        if (data.data?.search?.edges) {
          const fetchedPRs = data.data.search.edges.map((edge: any) => edge.node).filter((pr: PR) => !(pr.title === "Main" && pr.repository.nameWithOwner === "Ashutoshx7/flexprice-storybook"));
          fetchedPRs.sort((a: PR, b: PR) => {
            const dateA = new Date(b.mergedAt || b.closedAt || b.createdAt).getTime();
            const dateB = new Date(a.mergedAt || a.closedAt || a.createdAt).getTime();
            return dateA - dateB;
          });
          setPrs(fetchedPRs);
          if (typeof window !== 'undefined') {
            localStorage.setItem(cacheKey, JSON.stringify(fetchedPRs));
          }
        } else {
            console.error("GraphQL response missing expected data structure", data);
        }
      } catch (error) {
        console.error("Failed to fetch PRs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPRs();
  }, [filterType]);

  return (
    <div className="w-full flex flex-col">
      <div className="py-2 relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Open Source Contributions</h2>
        
        {/* Toggle */}
        <div className="flex items-center gap-2 relative z-20 group mr-[8px]">
          <div className="absolute -inset-[5px] border border-black/5 dark:border-white/5 rounded-[11px] pointer-events-none transition-colors duration-300 group-hover:border-black/10 dark:group-hover:border-white/10" />
          <div className="relative grid grid-cols-3 p-1 bg-zinc-50 dark:bg-[#09090b] rounded-[6px] border border-black/5 dark:border-white/5 shadow-sm shadow-black/20 dark:shadow-lg dark:shadow-black/80 w-fit select-none">
            {/* Sliding Pill Background */}
            <div
              className={`absolute top-1 bottom-1 left-1 w-[calc((100%-8px)/3)] rounded-[4px] bg-white dark:bg-[#1e1e20] border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] transform will-change-transform ${filterType === "merged" ? "translate-x-0" : filterType === "open" ? "translate-x-[100%]" : "translate-x-[200%]"
                }`}
            />

            {/* Buttons */}
            {["merged", "open", "closed"].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type as any)}
                className={`z-10 relative px-3 py-1.5 text-[12px] font-medium text-center transition-colors duration-200 capitalize ${filterType === type
                  ? "text-zinc-900 dark:text-zinc-100"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal line below heading */}
        <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/10 pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
        {/* Intersections */}
        <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/40 dark:bg-white/20 -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
        <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/40 dark:bg-white/20 translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
      </div>

      <div className="relative pt-0 pb-2">
        {loading ? (
          <div className="text-[13px] text-zinc-500 py-4 flex justify-center">Loading pull requests...</div>
        ) : prs.length > 0 ? (
          <div className="flex flex-col">
            {prs.slice(0, isFullPage ? prs.length : initialCount).filter(pr => !closedPRIds.has(pr.id)).map((pr, idx, arr) => {
              const isLast = idx === arr.length - 1;
              return (
              <a
                key={pr.id}
                href={pr.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col gap-1.5 py-4 px-4 -mx-4 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/20 rounded-lg"
              >
                {!isLast && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0 border-b border-black/30 dark:border-white/10 pointer-events-none z-10"
                    style={{
                      maskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                      WebkitMaskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                    }}
                  />
                )}
                <div className="flex items-center gap-2.5 relative z-20 min-w-0">
                  <div className={`w-2 h-2 rounded-full shrink-0 ${pr.state === "MERGED"
                    ? "bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.4)]"
                    : pr.state === "OPEN"
                      ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"
                      : "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.4)]"
                    }`}></div>
                  <h3 className="text-[14px] font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors truncate">
                    {pr.title}
                  </h3>
                </div>
                <p className="text-[12px] text-zinc-500 dark:text-zinc-400 ml-4.5 pl-0.5 relative z-20">
                  {pr.repository.nameWithOwner}
                </p>
              </a>
            )})}
            
            {!isFullPage && prs.length > initialCount && (
              <div className="flex justify-center mt-4 relative z-20">
                <Link href="/pull-requests" className="relative group block">
                  <div className="absolute -inset-[5px] border border-black/5 dark:border-white/5 rounded-[11px] pointer-events-none transition-colors duration-300 group-hover:border-black/10 dark:group-hover:border-white/10" />
                  <div className="relative flex items-center gap-1.5 px-4 py-2 bg-zinc-50 hover:bg-zinc-100 dark:bg-[#09090b] dark:hover:bg-[#121214] text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-[6px] text-[13px] font-medium transition-all duration-300 border border-black/5 dark:border-white/5 shadow-sm shadow-black/20 dark:shadow-lg dark:shadow-black/80">
                    View All ({prs.length - initialCount} more)
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-transform duration-300 -rotate-90" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <polyline points="19 12 12 19 5 12"></polyline>
                    </svg>
                  </div>
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="text-[13px] text-zinc-500 py-4 flex justify-center">
            No pull requests found. <span className="text-zinc-400 ml-1">(Requires NEXT_PUBLIC_GITHUB_TOKEN)</span>
          </div>
        )}
      </div>
    </div>
  );
}
