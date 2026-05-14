"use client";

import React, { useEffect, useState } from 'react';

interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionMonth {
  name: string;
}

export function GithubGraph() {
  const [weeks, setWeeks] = useState<ContributionWeek[]>([]);
  const [months, setMonths] = useState<ContributionMonth[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributions = async () => {
      const cacheKey = 'github_contributions';
      const cachedData = typeof window !== 'undefined' ? localStorage.getItem(cacheKey) : null;
      
      if (cachedData) {
        try {
          const parsed = JSON.parse(cachedData);
          setWeeks(parsed.weeks);
          setMonths(parsed.months || []);
          setTotalContributions(parsed.totalContributions);
          setLoading(false);
        } catch (e) {
          setLoading(true);
        }
      }

      const query = `
        query {
          user(login: "Ashutoshx7") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                months {
                  name
                }
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
          }
        }
      `;

      try {
        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN || ""}`,
          },
          body: JSON.stringify({ query }),
        });

        const data = await response.json();
        const calendar = data?.data?.user?.contributionsCollection?.contributionCalendar;
        
        if (calendar) {
          setWeeks(calendar.weeks);
          setMonths(calendar.months);
          setTotalContributions(calendar.totalContributions);
          if (typeof window !== 'undefined') {
            localStorage.setItem(cacheKey, JSON.stringify({
              weeks: calendar.weeks,
              months: calendar.months,
              totalContributions: calendar.totalContributions
            }));
          }
        }
      } catch (error) {
        console.error("Failed to fetch GitHub contributions", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  // Calculate colors based on contribution count
  const getColor = (count: number) => {
    if (count === 0) return 'bg-zinc-100 dark:bg-[#1a1a1a]';
    if (count <= 3) return 'bg-zinc-600 dark:bg-zinc-700'; // Low
    if (count <= 6) return 'bg-zinc-500 dark:bg-zinc-600'; // Med-low
    if (count <= 9) return 'bg-zinc-400 dark:bg-zinc-400'; // Med-high
    return 'bg-zinc-300 dark:bg-zinc-200'; // High
  };

  const defaultMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const displayMonths = months.length > 0 ? months.map(m => m.name.substring(0, 3)) : defaultMonths;

  return (
    <div className="w-full flex flex-col gap-2 mt-6">
      <div className="flex justify-between items-end mb-1 w-full">
        <div className="flex justify-between w-full text-zinc-500 pr-4">
          {displayMonths.map((m, i) => (
            <span key={i} className="text-[10px] sm:text-[11px]">{m}</span>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-[repeat(53,1fr)] gap-x-[2px] w-full">
        {loading && weeks.length === 0 ? (
          // Skeleton loading state
          Array.from({ length: 53 }).map((_, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-[2px]">
              {Array.from({ length: 7 }).map((_, rowIndex) => (
                <div key={rowIndex} className="w-full aspect-square rounded-[1px] sm:rounded-[2px] bg-zinc-100 dark:bg-[#1a1a1a] animate-pulse" />
              ))}
            </div>
          ))
        ) : (
          weeks.map((week, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-[2px]">
              {/* Fill top empty days if the first week doesn't start on Sunday */}
              {colIndex === 0 && Array.from({ length: 7 - week.contributionDays.length }).map((_, i) => (
                <div key={`empty-top-${i}`} className="w-full aspect-square rounded-[1px] sm:rounded-[2px] bg-transparent" />
              ))}
              
              {week.contributionDays.map((day, rowIndex) => (
                <div 
                  key={rowIndex} 
                  className={`w-full aspect-square rounded-[1px] sm:rounded-[2px] ${getColor(day.contributionCount)}`}
                  title={`${day.contributionCount} contributions on ${day.date}`}
                />
              ))}
              
              {/* Fill bottom empty days if the last week is incomplete */}
              {colIndex !== 0 && week.contributionDays.length < 7 && Array.from({ length: 7 - week.contributionDays.length }).map((_, i) => (
                <div key={`empty-bottom-${i}`} className="w-full aspect-square rounded-[1px] sm:rounded-[2px] bg-transparent" />
              ))}
            </div>
          ))
        )}
      </div>

      <div className="flex justify-between items-center mt-1 px-1">
        <span className="text-[11px] text-zinc-500">
          {loading && totalContributions === 0 ? "Loading..." : `${totalContributions} activities in the last year`}
        </span>
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] text-zinc-500 mr-1">Less</span>
          <div className="w-[10px] h-[10px] rounded-[2px] bg-zinc-100 dark:bg-[#1a1a1a]" />
          <div className="w-[10px] h-[10px] rounded-[2px] bg-zinc-600 dark:bg-zinc-700" />
          <div className="w-[10px] h-[10px] rounded-[2px] bg-zinc-500 dark:bg-zinc-600" />
          <div className="w-[10px] h-[10px] rounded-[2px] bg-zinc-400 dark:bg-zinc-400" />
          <div className="w-[10px] h-[10px] rounded-[2px] bg-zinc-300 dark:bg-zinc-200" />
          <span className="text-[11px] text-zinc-500 ml-1">More</span>
        </div>
      </div>
    </div>
  );
}
