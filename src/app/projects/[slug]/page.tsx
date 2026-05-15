import { ThemeToggle } from "@/components/theme-toggle";
import { projectsData, iconMap, techNames, Project, TechItem, TechKey } from "@/data/projectsData";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
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
      {/* Vertical Lines - Ultra-fine Micro Dots */}
      <div className="absolute top-0 bottom-0 left-[31%] w-0 border-r border-black/30 dark:border-white/10 pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />
      <div className="absolute top-0 bottom-0 right-[31%] w-0 border-r border-black/30 dark:border-white/10 pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />

      <div className="relative z-20 flex justify-center py-16">
        <div className="w-[38%] min-w-[320px] relative flex flex-col gap-8">
          <Link href="/" className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors w-fit group relative z-50">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Home
          </Link>
          
          <div className="flex flex-col gap-6 relative bg-white/50 dark:bg-[#0a0a0a]/50 p-6 rounded-2xl border border-black/30 dark:border-white/10 shadow-sm backdrop-blur-md">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">{project.title}</h1>
              <div className="flex items-center gap-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-100 dark:bg-zinc-900 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                    <SiGithub className="w-5 h-5" />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-100 dark:bg-zinc-900 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((t: TechItem, i: number) => {
                const isKey = typeof t === "string";
                const label = isKey ? techNames[t as TechKey] : t.label;
                const Icon = isKey ? iconMap[t as TechKey] : null;

                return (
                  <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/5 text-[12px] font-medium text-zinc-700 dark:text-zinc-300 shadow-sm">
                    {Icon && <Icon className="w-3.5 h-3.5" />}
                    <span>{label}</span>
                  </div>
                );
              })}
            </div>

            <div className="w-full aspect-video relative mt-4 rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/40">
              <Image 
                src={project.src} 
                alt={project.imageTitle} 
                fill 
                className="object-cover"
                priority
              />
            </div>
            
            {project.video && (
              <div className="w-full aspect-video relative mt-4 rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/40 bg-black">
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
            )}
            
            <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 mt-4" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
          </div>
        </div>
      </div>
      <ThemeToggle />
    </div>
  );
}
