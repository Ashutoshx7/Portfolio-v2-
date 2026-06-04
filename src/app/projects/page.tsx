"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { CommandMenu } from "@/components/command-menu";
import { CurrentTime } from "@/components/CurrentTime";
import { RightNavbar } from "@/components/RightNavbar";
import { FooterBackground } from "@/components/FooterBackground";
import { ProjectCard } from "@/components/ProjectsGrid";
import { projectsData } from "@/data/projectsData";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";

export default function AllProjectsPage() {
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
          { top: '22vh', left: '28%' },
          { top: '22vh', right: '28%' },
          { top: 'calc(22vh + 112px)', left: '28%' },
          { top: 'calc(22vh + 112px)', right: '28%' },
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
                  All Projects
                </h1>
                <p className="text-[12px] text-zinc-500 dark:text-zinc-400">
                  Full Project Archive
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
          <div className="relative pt-6 pb-6 px-4">
            {/* Center Vertical Line */}
            <div className="absolute top-0 bottom-6 left-1/2 w-0 border-r border-black/30 dark:border-white/[0.15] pointer-events-none -translate-x-1/2 hidden md:block" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />
            {/* Top Center Intersection */}
            <div className="absolute top-0 left-1/2 w-[2px] h-[2px] bg-black/40 dark:bg-white/[0.25] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 hidden md:block" />

            <div className="flex flex-col relative z-10 w-full">
              {Array.from({ length: Math.ceil(projectsData.length / 2) }).map((_, rowIndex) => {
                const rowProjects = projectsData.slice(rowIndex * 2, rowIndex * 2 + 2);
                return (
                  <div key={rowIndex} className="flex flex-col relative w-full">
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-10 ${rowIndex === 0 ? 'pb-10 md:pb-6 gap-y-10 md:gap-y-0' : rowIndex === Math.ceil(projectsData.length / 2) - 1 ? 'pt-0 md:pt-6 gap-y-10 md:gap-y-0' : 'pb-10 md:pb-6 pt-0 md:pt-6 gap-y-10 md:gap-y-0'}`}>
                      {rowProjects.map((project) => (
                        <ProjectCard key={project.title} project={project} setActiveVideo={setActiveVideo} />
                      ))}
                    </div>
                    {/* Horizontal Divider after each row except the last one */}
                    {rowIndex < Math.ceil(projectsData.length / 2) - 1 && (
                      <div className="relative w-full h-0 hidden md:block">
                        <div className="absolute left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
                        <div className="absolute -left-4 w-[2px] h-[2px] bg-black/40 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
                        <div className="absolute -right-4 w-[2px] h-[2px] bg-black/40 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
                        <div className="absolute left-1/2 w-[2px] h-[2px] bg-black/40 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Bottom Separator */}
          <div className="relative mt-8">
            <div className="absolute left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
            <div className="absolute left-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
            <div className="absolute right-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
          </div>
        </motion.div>
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
