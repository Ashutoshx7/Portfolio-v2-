"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { CommandMenu } from "@/components/command-menu";
import { CurrentTime } from "@/components/CurrentTime";
import { RightNavbar } from "@/components/RightNavbar";
import { FooterBackground } from "@/components/FooterBackground";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

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
  metrics?: { label: string; value: string }[];
  screenshot?: string;
};

const experiences: ExperienceData[] = [
  {
    title: "Vercel OSS Program x VengenceUI",
    role: "Founder & Maintainer",
    dates: "Oct 2025 - Present",
    location: "Remote",
    src: "/Experience-image/vercel-symbol-colored-light.png",
    imageFit: "contain",
    imageZoom: 0.72,
    description: `
      Selection: VengenceUI was chosen for Vercel's Winter 2026 Open Source Program in March 2026 as a composable, performance-first UI system for real-world product workflows
      VengenceUI v1: Founded the open-source animated component library in October 2025 and grew it to 683 GitHub stars, 40 forks, and a 10-contributor community
      Monthly traction: Grew from 30,000 to 40,000 monthly visitors and from 120,000 to 200,000 monthly page views while maintaining a 34% bounce rate
      VengenceUI v2: Rebuilt the product from the ground up with 50+ production-ready components, stronger visual consistency, improved documentation, and a faster component-discovery experience
      Developer experience: Designed copy-paste installation flows, reusable registry components, interactive previews, responsive documentation, and clearer integration guidance
      Engineering: Led architecture, design systems, component APIs, animation quality, performance optimization, accessibility, deployment, analytics, and community contributions across both versions
    `,
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "MDX",
      "Vercel",
    ],
    metrics: [
      { label: "GitHub Stars", value: "683" },
      { label: "Monthly Visitors", value: "30,000 - 40,000" },
      { label: "Monthly Page Views", value: "120,000 - 200,000" },
      { label: "V2 Components", value: "50+" },
    ],
    screenshot: "/Experience-image/vercel-analytics-color.png",
  },
  {
    title: "Open Source Contributor",
    role: "Sugar Labs, Joplin, kgateway & more",
    dates: "Sep 2025 - Apr 2026",
    location: "Remote",
    src: "/Experience-image/pngegg (1).png",
    imageFit: "contain",
    imageZoom: 1.5,
    description: `
      Sugar Labs: Delivered 82 pull requests across Music Blocks, Music Blocks V4, and www-v2, covering performance, reliability, testing, accessibility, CI, and developer tooling
      Sugar Labs: Reduced memory usage by 70-120 MB through lazy bitmap caching and by 50-115 MB by fixing leaked Tone.js synthesizers
      Sugar Labs: Improved canvas rendering, block interactions, audio loading, retry and timer handling, crash recovery, Lighthouse CI, PR automation, and unit-test coverage
      Joplin: Authored 18 pull requests with 11 merged across desktop and mobile, improving global shortcuts, E2EE, plugins, sync, exports, editors, localization, updates, and rendering
      Joplin: Prevented failing plugins from blocking startup, removed JSDOM from the Turndown renderer, reused the master-password flow for E2EE, fixed duplicate code blocks and Ctrl+wheel zoom, and enriched frontmatter exports
      Kmesh: Authored a macOS development guide to make local setup and contributor onboarding clearer
      Additional work: Improved kgateway migration documentation and HTTPS security, alongside contributions to FOSSology, FOSSASIA Eventyay, Extralit, and React JSON Schema Form covering scheduler stability, SPDX compliance, authentication flows, and React 19 compatibility
    `,
    tech: [
      "JavaScript",
      "TypeScript",
      "React",
      "Electron",
      "Python",
      "C",
      "Vue",
      "GitHub Actions",
    ],
    metrics: [
      { label: "Repositories", value: "10" },
      { label: "Pull Requests", value: "112" },
      { label: "Merged", value: "72" },
      { label: "Still Open", value: "8" },
    ],
  },
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

export default function AllExperiencePage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black relative overflow-x-hidden transition-colors duration-300">
      {/* Right Side Blueprint Navigation */}
      <RightNavbar />

      {/* Vertical Lines - Ultra-fine Micro Dots */}
      <div className="absolute top-0 bottom-0 left-[30%] w-0 border-r border-black/30 dark:border-white/[0.15] pointer-events-none hidden md:block" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />
      <div className="absolute top-0 bottom-0 right-[30%] w-0 border-r border-black/30 dark:border-white/[0.15] pointer-events-none hidden md:block" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />

      {/* Horizontal Lines - Ultra-fine Micro Dots */}
      <div className="absolute left-0 right-0 top-[22vh] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
      <div className="absolute left-0 right-0 top-[calc(22vh+112px)] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />

      {/* Ultra-Tiny Solid Nodes */}
      {[
        { top: '22vh', left: '30%' },
        { top: '22vh', right: '30%' },
        { top: 'calc(22vh + 112px)', left: '30%' },
        { top: 'calc(22vh + 112px)', right: '30%' },
      ].map((pos, i) => (
        <div key={i} className="absolute w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] pointer-events-none z-10 hidden md:block"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            transform: `translate(${pos.right ? '50%' : '-50%'}, -50%)`
          }} />
      ))}

      {/* Cell 1: Dot Matrix Background */}
      <div className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-0 h-[22vh] -z-0 pointer-events-auto">
        <FooterBackground />
        <div className="absolute bottom-3 right-2 z-10 pointer-events-auto">
          <CurrentTime />
        </div>
      </div>

      {/* Cell 2: Header with Back Button + Title + Controls */}
      <div className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-[22vh] h-[112px] flex items-center px-4 z-50">
        <div className="flex w-full items-center justify-between">
          {/* Left: Back + Title */}
          <div className="flex items-center gap-5">
            <Link
              href="/"
              className="group flex items-center justify-center w-8 h-8 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            </Link>
            <div className="flex flex-col justify-center">
              <h1 className="text-[20px] sm:text-[24px] font-bold text-zinc-800 dark:text-zinc-100 tracking-tight leading-none mb-0.5 [text-shadow:-1.5px_0_0_rgba(0,200,255,0.3),1.5px_0_0_rgba(255,80,0,0.3)] dark:[text-shadow:-1.5px_0_0_rgba(0,200,255,0.6),1.5px_0_0_rgba(255,80,0,0.6)]">
                All Experiences
              </h1>
              <p className="text-[12px] text-zinc-500 dark:text-zinc-400">
                Full Experience Archive
              </p>
            </div>
          </div>

          {/* Right: Controls */}
          <div className="flex items-start justify-end gap-2 sm:gap-3 h-20 sm:h-24 py-1">
            <CommandMenu />
            <ThemeToggle className="dark:text-zinc-400 hover:dark:text-zinc-300" />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <motion.div 
        initial={{ opacity: 0, filter: "blur(8px)", y: 12 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        className="ml-0 mr-0 md:ml-[30%] md:mr-[30%] pt-[calc(22vh+112px)] pb-16 px-4 flex flex-col z-10 relative"
      >
        <div className="relative pt-0 pb-6">

          {/* Experience Items */}
          <div className="flex flex-col relative z-10 w-full">
            {experiences.map((item, idx) => {
              const isOpen = openIdx === idx;
              const isLast = idx === experiences.length - 1;

              return (
                <div key={idx} className="group relative">
                  {/* Dashed bottom border for all items */}
                  <div
                    className={`absolute bottom-0 ${isLast ? 'left-[-100vw] right-[-100vw]' : 'left-[-16px] right-[-16px]'} h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none z-10`}
                    style={{
                      maskImage:
                        "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                      WebkitMaskImage:
                        "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                    }}
                  />

                  {/* Intersection dots for last item */}
                  {isLast && (
                    <>
                      <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/40 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
                      <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/40 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
                    </>
                  )}

                  <div
                    className="flex flex-col items-start gap-3 py-4 px-4 -mx-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/20 transition-colors cursor-pointer relative z-20 rounded-lg 2xl:flex-row 2xl:items-center 2xl:justify-between"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                  >
                    <div className="flex min-w-0 flex-1 items-start gap-3 sm:gap-4">
                      <div className="size-10 shrink-0 rounded-[10px] border border-black/10 bg-zinc-50 p-[2px] shadow-sm shadow-black/15 dark:border-zinc-800 dark:bg-[#111111] dark:shadow-md dark:shadow-black/50">
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
                      <div className="flex min-w-0 flex-col gap-0.5 pr-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[14px] font-bold leading-none text-zinc-900 dark:text-zinc-100 sm:text-[17px]">
                            {item.title === "Vercel OSS Program x VengenceUI" ? (
                              <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 align-middle">
                                <span className="inline-flex h-10 items-center">
                                  Vercel OSS Program
                                </span>
                                <span className="inline-flex h-10 items-center text-[12px] font-semibold leading-none text-zinc-500 dark:text-zinc-500 sm:text-[13px]">
                                  x
                                </span>
                                <span className="inline-flex h-10 items-center gap-2 leading-none">
                                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-[10px] border border-black/10 bg-zinc-50 p-[2px] shadow-sm shadow-black/15 dark:border-zinc-800 dark:bg-[#111111] dark:shadow-md dark:shadow-black/50">
                                    <span className="inline-flex size-full items-center justify-center overflow-hidden rounded-[7px] border border-black/5 bg-white dark:border-black/20">
                                      <Image
                                        src="/Experience-image/vengenceui-title-bg-less.png"
                                        alt=""
                                        width={113}
                                        height={96}
                                        aria-hidden="true"
                                        className="h-[18px] w-auto -translate-x-px translate-y-px rotate-180 object-contain"
                                      />
                                    </span>
                                  </span>
                                  <span className="inline-flex h-10 items-center">
                                    VengenceUI
                                  </span>
                                </span>
                              </span>
                            ) : (
                              item.title
                            )}
                          </span>
                          {item.type && (
                            <span className="self-center whitespace-nowrap px-1.5 py-[1px] rounded-[4px] text-[11px] font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-300/50 dark:border-zinc-700/50">
                              {item.type}
                            </span>
                          )}
                        </div>
                        <span className="truncate text-[14px] text-zinc-600 dark:text-zinc-400 sm:text-[15px]">
                          {item.role}
                        </span>
                      </div>
                    </div>
                    <div className="flex shrink-0 flex-col items-start gap-0.5 pr-5 pl-[56px] text-left 2xl:items-end 2xl:pl-0 2xl:text-right">
                      <div className="relative flex items-center text-[13px] font-medium text-zinc-900 dark:text-zinc-100 sm:text-[14px]">
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
                      <span className="text-[13px] text-zinc-500 dark:text-zinc-400 sm:text-[14px]">
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Expandable Details Section */}
                  <div
                    className={`-mx-4 grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`${isOpen ? "pb-4 pt-0 opacity-100 translate-y-0" : "pb-0 pt-0 opacity-0 -translate-y-2"
                          } transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] pl-6 pr-8 text-[14px] text-zinc-600 dark:text-zinc-400`}
                      >
                        {item.metrics && (
                          <div className="relative -ml-6 -mr-8 mb-4">
                            <div className="grid max-w-full grid-cols-2 pl-6 pr-8 2xl:grid-cols-4">
                              {item.metrics.map((metric) => (
                                <div
                                  key={metric.label}
                                  className="relative min-w-0 px-3 py-2 after:absolute after:bottom-0 after:right-0 after:top-0 after:w-0 after:border-r after:border-black/30 after:[mask-image:repeating-linear-gradient(to_bottom,black_0,black_1px,transparent_1px,transparent_6px)] dark:after:border-white/[0.15] [&:nth-child(2n)]:after:hidden 2xl:[&:not(:last-child)]:after:block 2xl:[&:last-child]:after:hidden"
                                >
                                  <p
                                    className={`${metric.value.includes(" - ") ? "text-[13px]" : "text-[16px]"} whitespace-nowrap font-bold leading-none text-zinc-900 dark:text-zinc-100`}
                                  >
                                    {metric.value}
                                  </p>
                                  <p className="mt-1 text-[10px] font-medium uppercase text-zinc-400 dark:text-zinc-600">
                                    {metric.label}
                                  </p>
                                </div>
                              ))}
                            </div>
                            <span
                              className="pointer-events-none absolute inset-x-0 top-0 h-0 border-t border-black/30 dark:border-white/[0.15]"
                              style={{
                                maskImage:
                                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                                WebkitMaskImage:
                                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                              }}
                            />
                            <span
                              className="pointer-events-none absolute inset-x-0 top-1/2 h-0 border-t border-black/30 dark:border-white/[0.15] 2xl:hidden"
                              style={{
                                maskImage:
                                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                                WebkitMaskImage:
                                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                              }}
                            />
                            <span
                              className="pointer-events-none absolute inset-x-0 bottom-0 h-0 border-b border-black/30 dark:border-white/[0.15]"
                              style={{
                                maskImage:
                                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                                WebkitMaskImage:
                                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                              }}
                            />
                            <span className="pointer-events-none absolute left-0 top-0 h-[2px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-black/50 dark:bg-white/[0.25]" />
                            <span className="pointer-events-none absolute right-0 top-0 h-[2px] w-[2px] translate-x-1/2 -translate-y-1/2 bg-black/50 dark:bg-white/[0.25]" />
                            <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-[2px] -translate-x-1/2 translate-y-1/2 bg-black/50 dark:bg-white/[0.25]" />
                            <span className="pointer-events-none absolute bottom-0 right-0 h-[2px] w-[2px] translate-x-1/2 translate-y-1/2 bg-black/50 dark:bg-white/[0.25]" />
                          </div>
                        )}

                        {item.screenshot && (
                          <div className="relative mb-4 overflow-hidden bg-black">
                            <Image
                              src={item.screenshot}
                              alt={`${item.title} analytics screenshot`}
                              width={1400}
                              height={1050}
                              className="h-auto w-full object-cover"
                            />
                          </div>
                        )}

                        <ul className="mb-4 space-y-2 text-[13px] leading-relaxed">
                          {item.description
                            .split("\n")
                            .filter((line) => line.trim() !== "")
                            .map((point, i) => {
                              const [label, ...detail] = point.trim().split(":");

                              return (
                                <li key={i} className="flex items-start gap-1.5">
                                  <span className="text-zinc-400 dark:text-zinc-500 mt-[2px] text-[14px] leading-none">•</span>
                                  <span>
                                    {detail.length > 0 ? (
                                      <>
                                        <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                                          {label}:
                                        </strong>
                                        {detail
                                          .join(":")
                                          .split(
                                            /(kgateway|FOSSology|FOSSASIA Eventyay|Extralit|React JSON Schema Form)/,
                                          )
                                          .map((part, partIndex) =>
                                            /^(kgateway|FOSSology|FOSSASIA Eventyay|Extralit|React JSON Schema Form)$/.test(
                                              part,
                                            ) ? (
                                              <strong
                                                key={partIndex}
                                                className="font-semibold text-zinc-800 dark:text-zinc-200"
                                              >
                                                {part}
                                              </strong>
                                            ) : (
                                              part
                                            ),
                                          )}
                                      </>
                                    ) : (
                                      point.trim()
                                    )}
                                  </span>
                                </li>
                              );
                            })}
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
        </div>

        {/* Bottom Separator */}
        <div className="relative mt-8">
          <div className="absolute left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
          <div className="absolute -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
          <div className="absolute -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
        </div>
      </motion.div>
    </div>
  );
}
