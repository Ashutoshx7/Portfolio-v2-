"use client";

import React, { useState } from "react";
import Image from "next/image";

type ExperienceData = {
  title: string;
  role: string;
  dates: string;
  location: string;
  src: string;
  type?: string;
  imageFit?: "contain" | "cover";
  imageZoom?: number;
  description: string;
  tech: string[];
};

const experiences: ExperienceData[] = [
  {
    title: "Google Summer Of Code",
    role: "Open Source Contributor",
    dates: "May 2025 - August 2025",
    location: "Remote",
    src: "/Experience-image/Google_Summer_of_Code_sun_logo_2022.svg (1).png",
    imageFit: "contain",
    imageZoom: 0.9,
    description: `
      Built scalable solutions for open source organizations
      Received mentorship from top engineers and industry experts
      Contributed real-world features that impacted thousands of users
      Optimized codebase performance and reduced technical debt significantly
    `,
    tech: ["Next.js", "TypeScript", "React", "Node.js"],
  },
  {
    title: "C4GT",
    role: "Open Source Contributor",
    dates: "May 2025 - August 2025",
    location: "Remote",
    src: "https://static.wixstatic.com/media/060b0c_8029055ce0074bfaa4bb6d9f1c2c33d2~mv2.png/v1/fill/w_2266,h_2168,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/060b0c_8029055ce0074bfaa4bb6d9f1c2c33d2~mv2.png",
    imageFit: "contain",
    imageZoom: 1.2,
    description: `
      Developed innovative tools solving real developer problems
      Shipped production features with 10k+ downloads
      Collaborated with open source maintainers and communities
      Authored technical documentation to streamline developer onboarding
    `,
    tech: ["Prisma", "Cloudflare", "LangChain", "TypeScript"],
  },
  {
    title: "Open Source Contributor",
    role: "Full Stack Developer",
    dates: "December 2024 - April 2024",
    location: "Remote",
    src: "/Experience-image/pngegg (1).png",
    imageFit: "contain",
    imageZoom: 1.5,
    description: `
      Mastered React, Node.js, databases, and deployment technologies
      Contributed to multiple popular open source projects
      Built strong foundation in full-stack development practices
      Participated in code reviews and community discussions actively
    `,
    tech: ["React", "Node.js", "TypeScript"],
  },
];

export function ExperienceList() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="block">
      {experiences.map((item, idx) => {
        const isOpen = openIdx === idx;
        const isLast = idx === experiences.length - 1;

        return (
          <div key={idx} className="group relative">
            {/* Dashed bottom border for all items except the last one */}
            {!isLast && (
              <div
                className="absolute bottom-0 left-[-16px] right-[-16px] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none z-10"
                style={{
                  maskImage:
                    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                  WebkitMaskImage:
                    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                }}
              />
            )}

            {/* Special full-width dashed line and intersection dots for the last item */}
            {isLast && (
              <>
                <div
                  className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none z-10"
                  style={{
                    maskImage:
                      "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                    WebkitMaskImage:
                      "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                  }}
                />
                <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/40 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
                <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/40 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
              </>
            )}

            <div
              className="flex items-center justify-between py-4 px-4 -mx-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/20 transition-colors cursor-pointer relative z-20 rounded-lg"
              onClick={() => setOpenIdx(isOpen ? null : idx)}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-[10px] border border-black/10 dark:border-zinc-800 p-[2px] bg-zinc-50 dark:bg-[#111111] shrink-0 shadow-sm dark:shadow-md dark:shadow-black/50">
                  <div className="w-full h-full rounded-[7px] border border-black/5 dark:border-black/20 bg-white flex items-center justify-center overflow-hidden relative">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={40}
                      height={40}
                      style={item.imageZoom ? { transform: `scale(${item.imageZoom})` } : undefined}
                      className={`${item.imageFit === "contain" ? "object-contain" : "object-cover"} w-full h-full p-0.5`}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[17px] font-bold text-zinc-900 dark:text-zinc-100">
                      {item.title}
                    </span>
                    {item.type && (
                      <span className="px-1.5 py-[1px] rounded-[4px] text-[11px] font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-300/50 dark:border-zinc-700/50">
                        {item.type}
                      </span>
                    )}
                  </div>
                  <span className="text-[15px] text-zinc-600 dark:text-zinc-400">
                    {item.role}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-0.5 text-right pr-5">
                <div className="flex items-center text-[14px] font-medium text-zinc-900 dark:text-zinc-100 relative">
                  <span>{item.dates}</span>
                  <svg
                    viewBox="0 0 24 24"
                    className={`w-3.5 h-3.5 text-zinc-500 absolute -right-5 top-1/2 -translate-y-1/2 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                <span className="text-[14px] text-zinc-500 dark:text-zinc-400">
                  {item.location}
                </span>
              </div>
            </div>

            {/* Expandable Details Section */}
            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
            >
              <div className="overflow-hidden">
                <div
                  className={`${isOpen ? "pb-4 pt-0 opacity-100 translate-y-0" : "pb-0 pt-0 opacity-0 -translate-y-2"
                    } transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] pl-2 pr-4 text-[14px] text-zinc-600 dark:text-zinc-400`}
                >
                  <ul className="mb-4 space-y-2 text-[13px] leading-relaxed">
                    {item.description
                      .split("\n")
                      .filter((line) => line.trim() !== "")
                      .map((point, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-zinc-400 dark:text-zinc-500 mt-[2px] text-[14px] leading-none">•</span>
                          <span>{point.trim()}</span>
                        </li>
                      ))}
                  </ul>

                  {item.tech && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-[4px] border border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-50 dark:bg-[#111111] text-[11px] font-medium text-zinc-500 dark:text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
