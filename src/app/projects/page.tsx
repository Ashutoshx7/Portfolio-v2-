"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { projectsData, ProjectCard } from "@/components/ProjectsGrid";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

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
      <div className="min-h-screen w-full bg-white dark:bg-[#0a0a0a] relative overflow-x-hidden transition-colors duration-300">
      <div className="relative z-20 flex justify-center py-16">
        <div className="w-[38%] min-w-[320px] relative">
          
          {/* Vertical Lines - Hugging the exact container width to prevent overlap */}
          <div className="absolute top-[-100vh] bottom-[-100vh] left-0 w-0 border-l border-zinc-200 dark:border-zinc-800 pointer-events-none z-0" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />
          <div className="absolute top-[-100vh] bottom-[-100vh] right-0 w-0 border-r border-zinc-200 dark:border-zinc-800 pointer-events-none z-0" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />

          <Link href="/" className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors mb-8 group relative z-50">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Home
          </Link>
          
          <div className="flex flex-col mb-6 relative z-10 px-4 md:px-0">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2">All Projects</h1>
            <p className="text-zinc-500 dark:text-zinc-400">A complete archive of everything I've built.</p>
          </div>

          <div className="relative pt-6 pb-6 mt-4 px-4">
            {/* Center Vertical Line */}
            <div className="absolute top-0 bottom-6 left-1/2 w-0 border-r border-zinc-200 dark:border-zinc-800 pointer-events-none -translate-x-1/2" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />
            {/* Top Center Intersection */}
            <div className="absolute top-0 left-1/2 w-[2px] h-[2px] bg-zinc-300 dark:bg-zinc-600 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />

            <div className="flex flex-col relative z-10 w-full">
              {Array.from({ length: Math.ceil(projectsData.length / 2) }).map((_, rowIndex) => {
                const rowProjects = projectsData.slice(rowIndex * 2, rowIndex * 2 + 2);
                return (
                  <div key={rowIndex} className="flex flex-col relative w-full">
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 md:gap-y-0 ${rowIndex === 0 ? 'pb-6' : rowIndex === Math.ceil(projectsData.length / 2) - 1 ? 'pt-6' : 'py-6'}`}>
                      {rowProjects.map((project) => (
                        <ProjectCard key={project.title} project={project} setActiveVideo={setActiveVideo} />
                      ))}
                    </div>
                    {/* Horizontal Divider after each row except the last one */}
                    {rowIndex < Math.ceil(projectsData.length / 2) - 1 && (
                      <div className="relative w-full h-0 hidden md:block">
                        <div className="absolute left-[-100vw] right-[-100vw] h-0 border-b border-zinc-200 dark:border-zinc-800 pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
                        <div className="absolute -left-4 w-[2px] h-[2px] bg-zinc-300 dark:bg-zinc-600 -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
                        <div className="absolute -right-4 w-[2px] h-[2px] bg-zinc-300 dark:bg-zinc-600 translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
                        <div className="absolute left-1/2 w-[2px] h-[2px] bg-zinc-300 dark:bg-zinc-600 -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        </div>
        <ThemeToggle />
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
