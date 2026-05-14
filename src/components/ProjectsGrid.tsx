"use client";

import { useState, useEffect } from "react";
import type { ComponentType } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Star, X, Network, Search } from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiThreedotjs,
  SiPrisma,
  SiCloudflare,
  SiLangchain,
  SiNodedotjs,
  SiFramer,
  SiTailwindcss,
  SiBun,
  SiEslint,
  SiRadixui,
  SiChartdotjs,
  SiGithub,
  SiFastapi,
  SiRedis,
  SiCelery,
  SiTldraw,
  SiCss,
  SiPython,
  SiAnthropic,
  SiClaude,
  SiGooglegemini,
  SiMeta,
} from "react-icons/si";

type TechIcon = ComponentType<{ className?: string }>;
export type TechKey =
  | "next" | "ts" | "react" | "three" | "prisma" | "cloud" | "langchain" | "langgraph" | "rag"
  | "node" | "motion" | "tailwind" | "bun" | "eslint" | "radixui" | "charts" | "github" | "fastapi"
  | "redis" | "celery" | "tldraw" | "css3" | "python" | "anthropic" | "claude" | "gemini" | "llama";

export type TechItem = TechKey | { label: string; tooltip?: string; };

export interface Project {
  slug: string;
  title: string;
  imageTitle: string;
  src: string;
  lightModeSrc?: string;
  video: string;
  description: string;
  tech: TechItem[];
  github: string;
  live: string;
  starsText?: string;
  backgroundImage?: string;
  hasPin: boolean;
}

export const iconMap: Record<TechKey, TechIcon> = {
  next: SiNextdotjs, ts: SiTypescript, react: SiReact, three: SiThreedotjs, prisma: SiPrisma,
  cloud: SiCloudflare, langchain: SiLangchain, langgraph: Network, rag: Search, node: SiNodedotjs,
  motion: SiFramer, tailwind: SiTailwindcss, bun: SiBun, eslint: SiEslint, radixui: SiRadixui,
  charts: SiChartdotjs, github: SiGithub, fastapi: SiFastapi, redis: SiRedis, celery: SiCelery,
  tldraw: SiTldraw, css3: SiCss, python: SiPython, anthropic: SiAnthropic, claude: SiClaude,
  gemini: SiGooglegemini, llama: SiMeta,
};

export const techNames: Record<TechKey, string> = {
  next: "Next.js", ts: "TypeScript", react: "React", three: "Three.js", prisma: "Prisma",
  cloud: "Cloudflare", langchain: "LangChain", langgraph: "LangGraph", rag: "RAG",
  node: "Node.js", motion: "Framer Motion", tailwind: "Tailwind CSS", bun: "Bun", eslint: "ESLint",
  radixui: "Radix UI", charts: "Charts", github: "GitHub API", fastapi: "FastAPI", redis: "Redis",
  celery: "Celery", tldraw: "tldraw", css3: "CSS3", python: "Python", anthropic: "Anthropic",
  claude: "Claude", gemini: "Gemini", llama: "LLaMA",
};

export const projectsData: Project[] = [
  {
    slug: "vengenceui",
    title: "VengenceUI",
    imageTitle: "Landing Page",
    src: "/project-image/image copy.png",
    lightModeSrc: "/project-image/image.png",
    video: "https://www.youtube.com/embed/Z-5Y1JQlrdw?si=hA_aQJ3Syv-_jzo0",
    description: "VengenceUI helps you to build your landing page by providing you animated beautiful components",
    tech: ["next", "react", "ts", "tailwind", "motion"],
    github: "https://github.com/Ashutoshx7/VengeanceUI",
    live: "https://www.vengenceui.com/",
    starsText: "500+",
    backgroundImage: "/image copy 5.png",
    hasPin: true,
  },
  {
    slug: "scribble3d",
    title: "Scribble3D",
    imageTitle: "App Interface",
    src: "/Screenshot%202026-02-07%20234301.png",
    lightModeSrc: "/Screenshot%202026-02-07%20234011.png",
    video: "https://www.youtube.com/embed/vEW0auc6fXI?si=SEShsAG_h-e9kdnP",
    description: "Turn your sketches into 3D objects and worlds — no 3D skills required.",
    tech: ["next", "tldraw", "three", "ts", "fastapi", "gemini"],
    github: "https://github.com/Ashutoshx7/Scribble3D-Sketch-to-3rd-",
    live: "",
    backgroundImage: "/image copy.png",
    hasPin: false,
  },
  {
    slug: "blueprint",
    title: "Blueprint",
    imageTitle: "Canvas Interface",
    src: "/Screenshot%202026-02-07%20233440.png",
    lightModeSrc: "/Screenshot%202026-02-07%20233831.png",
    video: "",
    description: "Blueprint is an AI UI builder that turns prompts into structured, production-ready interfaces.",
    tech: ["next", "ts", "tailwind", "prisma", "bun", "node", "langchain", "rag"],
    github: "https://github.com/Ashutoshx7/Blueprint",
    live: "",
    backgroundImage: "/image copy 3.png",
    hasPin: false,
  },
  {
    slug: "inquiro",
    title: "Inquiro",
    imageTitle: "Search UI",
    src: "/Screenshot 2026-02-07 011550.png",
    lightModeSrc: "/Screenshot 2026-02-07 012511.png",
    video: "/inquiro.mp4",
    description: "Inquiro is an AI-powered search engine that helps you find information on the internet",
    tech: ["next", "ts", "radixui", "node", "gemini", "langchain", "langgraph"],
    github: "https://github.com/Ashutoshx7/Inquiro-",
    live: "",
    backgroundImage: "/image copy 4.png",
    hasPin: false,
  },
];

export const ProjectCard = ({ project, setActiveVideo }: { project: Project; setActiveVideo: (v: string) => void }) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => { setMounted(true); }, []);
  const imageSrc = mounted && theme === "light" && project.lightModeSrc ? project.lightModeSrc : project.src;

  const isNotStarted = project.title === "Inquiro";
  const isBuilding = project.title === "Blueprint" || project.title === "Scribble3D";
  const statusColor = isNotStarted ? "bg-zinc-400" : isBuilding ? "bg-red-500" : "bg-emerald-500";
  const statusLabel = isNotStarted ? "Not Started" : isBuilding ? "Building" : "Live";

  return (
    <div className="flex flex-col group cursor-pointer" onClick={() => router.push(`/projects/${project.slug}`)}>
      {/* Outer Wrapper exactly like screenshot */}
      <motion.div
        className="relative w-full aspect-[1.4] rounded-xl border border-black/5 dark:border-white/5 bg-zinc-50/80 dark:bg-[#09090b]/80 shadow-sm p-4 pb-0 flex flex-col overflow-hidden transition-all duration-300 hover:shadow-md hover:border-black/10 dark:hover:border-white/10"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <div className="flex items-center justify-end z-10 min-h-[24px]">
          {project.hasPin && (
            <div className="w-6 h-6 rounded-[6px] bg-transparent border border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-center text-zinc-400 dark:text-zinc-500">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 17v5" /><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />
              </svg>
            </div>
          )}
        </div>

        {/* Ambient Hover Background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${project.backgroundImage || "/image.png"}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          variants={{
            rest: { opacity: 0, scale: 1 },
            hover: { opacity: 1, scale: 1.05 },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        <motion.h1
          className="absolute top-4 left-4 text-[10px] font-bold text-zinc-500 dark:text-zinc-400 z-30 uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
          variants={{
            rest: { left: "1rem", top: "1rem", x: "0%", color: "var(--neutral-500)", opacity: 0 },
            hover: { left: "50%", top: "25%", x: "-50%", color: "#ffffff", opacity: 1 },
          }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          Play Video
        </motion.h1>

        {project.video && (
          <motion.div
            className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none group-hover:pointer-events-auto"
            variants={{ rest: { scale: 0.5, opacity: 0 }, hover: { scale: 1, opacity: 1 } }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.05 }}
          >
            <div 
              className="h-10 w-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-200 border border-white/50"
              onClick={(e) => {
                e.stopPropagation();
                if (project.video) setActiveVideo(project.video);
              }}
            >
              <svg className="w-4 h-4 text-zinc-900 ml-0.5 fill-current" viewBox="0 0 24 24">
                <path d="M5.25 5.653v12.694c0 .856.926 1.39 1.668.958l11.1-6.347a1.125 1.125 0 000-1.916L6.918 4.695c-.742-.432-1.668.102-1.668.958z" />
              </svg>
            </div>
          </motion.div>
        )}

        {/* Floating screenshot sitting directly at the bottom of the outer wrapper */}
        <motion.div
          className="absolute bottom-0 left-1/2 w-[85%] rounded-t-[10px] bg-white dark:bg-[#0a0a0a] p-0 shadow-[0_-8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_-8px_30px_rgba(0,0,0,0.5)] z-20 border border-black/5 dark:border-white/10 border-b-0"
          variants={{
            rest: { height: "78%", y: 0, x: "-50%" },
            hover: { height: "72%", y: 4, x: "-50%" },
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <div className="size-full overflow-hidden rounded-t-[9px]">
            <Image src={imageSrc} alt={`${project.title} preview`} width={600} height={400} className="size-full object-cover" />
          </div>
        </motion.div>
      </motion.div>

      {/* Content Area directly below the wrapper */}
      <div className="mt-4 flex flex-col px-0.5">
        <div className="flex items-center justify-between">
          <h3 className="text-[15px] font-bold text-zinc-900 dark:text-zinc-100">{project.title}</h3>

          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-zinc-200/50 dark:border-zinc-800/50 bg-white dark:bg-zinc-900/50">
            <div className={`w-1.5 h-1.5 rounded-full ${statusColor}`} />
            <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">{statusLabel}</span>
          </div>
        </div>

        <p className="mt-1.5 text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed pr-2">
          {project.description}
        </p>

        <div className="flex items-center justify-between gap-3 mt-3">
          <div className="flex gap-2 flex-wrap">
            {project.tech.map((item) => {
              const key = typeof item === "string" ? item : item.label;
              const isIconItem = typeof item === "string";
              const tooltipText = isIconItem ? techNames[item] : item.tooltip || item.label;
              const uniqueId = `${project.title}-${key}`;

              return (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => setHoveredTech(uniqueId)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  {isIconItem ? (
                    (() => {
                      const TechIcon = iconMap[item];
                      return <TechIcon className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors" />;
                    })()
                  ) : (
                    <span className="px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-800 text-[9px] text-zinc-500 dark:text-zinc-400 leading-none">
                      {item.label}
                    </span>
                  )}
                  <AnimatePresence>
                    {hoveredTech === uniqueId && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute -top-7 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
                      >
                        <div className="bg-zinc-800 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 text-[10px] px-2 py-0.5 rounded shadow-xl whitespace-nowrap">
                          {tooltipText}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-1 text-[12px] font-medium text-zinc-500 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition-colors cursor-pointer shrink-0" onClick={(e) => { e.stopPropagation(); if (project.live) window.open(project.live, "_blank"); else if (project.github) window.open(project.github, "_blank"); }}>
            View Project
            <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export function ProjectsGrid() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <div className="flex flex-col relative z-10 w-full">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 md:gap-y-0 pb-6">
          {projectsData.slice(0, 2).map((project, idx) => (
            <ProjectCard key={project.title} project={project} setActiveVideo={setActiveVideo} />
          ))}
        </div>

        {/* Middle Horizontal Line Container */}
        <div className="relative w-full h-0 hidden md:block">
          <div className="absolute left-[-100vw] right-[-100vw] h-0 border-b border-zinc-200 dark:border-zinc-800 pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
          {/* Intersections */}
          <div className="absolute -left-4 w-[2px] h-[2px] bg-zinc-300 dark:bg-zinc-600 -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
          <div className="absolute -right-4 w-[2px] h-[2px] bg-zinc-300 dark:bg-zinc-600 translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
          <div className="absolute left-1/2 w-[2px] h-[2px] bg-zinc-300 dark:bg-zinc-600 -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 md:gap-y-0 pt-6">
          {projectsData.slice(2, 4).map((project, idx) => (
            <ProjectCard key={project.title} project={project} setActiveVideo={setActiveVideo} />
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[100] cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-black rounded-xl overflow-hidden w-[90%] max-w-3xl shadow-2xl"
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-3 right-3 p-2 bg-neutral-800/80 hover:bg-neutral-700 rounded-full cursor-pointer transition-colors z-50"
              >
                <X size={20} className="text-neutral-200" />
              </button>

              {activeVideo.includes("youtube") ? (
                <iframe
                  src={activeVideo}
                  className="w-full aspect-video border-0"
                  allowFullScreen
                ></iframe>
              ) : (
                <video src={activeVideo} className="w-full h-auto" controls autoPlay />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
