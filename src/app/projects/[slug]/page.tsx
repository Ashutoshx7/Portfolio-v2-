import { ThemeToggle } from "@/components/theme-toggle";
import { CommandMenu } from "@/components/command-menu";
import { CurrentTime } from "@/components/CurrentTime";
import { RightNavbar } from "@/components/RightNavbar";
import { FooterBackground } from "@/components/FooterBackground";
import { projectsData, iconMap, techNames, Project, TechItem, TechKey } from "@/data/projectsData";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { SiGithub } from "react-icons/si";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full bg-white dark:bg-[#0a0a0a] relative overflow-x-hidden transition-colors duration-300">
      {/* Right Side Blueprint Navigation */}
      <RightNavbar />

      {/* Vertical Lines - Ultra-fine Micro Dots */}
      <div className="absolute top-0 bottom-0 left-[31%] w-0 border-r border-black/30 dark:border-white/10 pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />
      <div className="absolute top-0 bottom-0 right-[31%] w-0 border-r border-black/30 dark:border-white/10 pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />

      {/* Horizontal Lines - Ultra-fine Micro Dots */}
      <div className="absolute left-0 right-0 top-[22vh] h-0 border-b border-black/30 dark:border-white/10 pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
      <div className="absolute left-0 right-0 top-[calc(22vh+112px)] h-0 border-b border-black/30 dark:border-white/10 pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />

      {/* Ultra-Tiny Solid Nodes */}
      {[
        { top: '22vh', left: '31%' },
        { top: '22vh', right: '31%' },
        { top: 'calc(22vh + 112px)', left: '31%' },
        { top: 'calc(22vh + 112px)', right: '31%' },
      ].map((pos, i) => (
        <div key={i} className="absolute w-[2px] h-[2px] bg-black/50 dark:bg-white/20 pointer-events-none z-10"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            transform: `translate(${pos.right ? '50%' : '-50%'}, -50%)`
          }} />
      ))}

      {/* Cell 1: Dot Matrix Background */}
      <div className="absolute left-[31%] right-[31%] top-0 h-[22vh] -z-0 pointer-events-auto">
        <FooterBackground />
        <div className="absolute bottom-3 right-2 z-10 pointer-events-auto">
          <CurrentTime />
        </div>
      </div>

      {/* Cell 2: Header with Back Button + Title + Controls */}
      <div className="absolute left-[31%] right-[31%] top-[22vh] h-[112px] flex items-center px-4 z-50">
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
                {project.title}
              </h1>
              <p className="text-[12px] text-zinc-500 dark:text-zinc-400">
                Project Details
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
      <div className="ml-[31%] mr-[31%] pt-[calc(22vh+112px)] pb-16 px-4 flex flex-col z-10 relative">

        {/* Description */}
        <p className="text-[14px] sm:text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400 mt-4">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex items-center gap-2 mt-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-2.5 py-1.5 bg-zinc-100 dark:bg-zinc-800/40 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-md text-[12px] font-medium text-zinc-600 dark:text-zinc-300 transition-colors border border-zinc-200/50 dark:border-zinc-700/50">
              <SiGithub className="w-3.5 h-3.5" />
              Source Code
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-2.5 py-1.5 bg-zinc-100 dark:bg-zinc-800/40 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-md text-[12px] font-medium text-zinc-600 dark:text-zinc-300 transition-colors border border-zinc-200/50 dark:border-zinc-700/50">
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.tech.map((t: TechItem, i: number) => {
            const isKey = typeof t === "string";
            const label = isKey ? techNames[t as TechKey] : t.label;
            const Icon = isKey ? iconMap[t as TechKey] : null;

            return (
              <div key={i} className="flex items-center gap-1.5 px-2.5 py-1.5 bg-zinc-100 dark:bg-zinc-800/40 rounded-md text-[12px] font-medium text-zinc-600 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/50">
                {Icon && <Icon className="w-3.5 h-3.5" />}
                <span>{label}</span>
              </div>
            );
          })}
        </div>

        {/* Separator */}
        <div className="relative mt-8">
          <div className="absolute left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/10 pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
          <div className="absolute left-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/20 -translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
          <div className="absolute right-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/20 translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
        </div>

        {/* Project Image */}
        <div className="w-full aspect-video relative mt-8 rounded-lg overflow-hidden border border-black/10 dark:border-white/10 shadow-sm">
          <Image 
            src={project.src} 
            alt={project.imageTitle} 
            fill 
            className="object-cover"
            priority
          />
        </div>
        
        {/* Video */}
        {project.video && (
          <>
            {/* Separator before video */}
            <div className="relative mt-8">
              <div className="absolute left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/10 pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
              <div className="absolute left-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/20 -translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
              <div className="absolute right-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/20 translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
            </div>

            <div className="w-full aspect-video relative mt-8 rounded-lg overflow-hidden border border-black/10 dark:border-white/10 shadow-sm bg-black">
              {project.video.includes('youtube') ? (
                <iframe
                  src={project.video}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video 
                  src={project.video} 
                  className="w-full h-full object-cover" 
                  controls 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                />
              )}
            </div>
          </>
        )}

        {/* Bottom Separator */}
        <div className="relative mt-8">
          <div className="absolute left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/10 pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
          <div className="absolute left-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/20 -translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
          <div className="absolute right-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/20 translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
        </div>
      </div>
    </div>
  );
}
