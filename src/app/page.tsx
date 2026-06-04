import { ThemeToggle } from "@/components/theme-toggle";
import { GithubGraph } from "@/components/GithubGraph";
import { CurrentTime } from "@/components/CurrentTime";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { ExperienceList } from "@/components/ExperienceList";
import { OpenSourceContributions } from "@/components/OpenSourceContributions";
import { BlogList } from "@/components/BlogList";
import { FooterBackground } from "@/components/FooterBackground";
import { RightNavbar } from "@/components/RightNavbar";
import { CommandMenu } from "@/components/command-menu";
import Link from "next/link";
import SoftPillButton from "@/components/pixel-perfect/soft-pill-button";
import SocialHoverCard from "@/components/pixel-perfect/social-hover-card";
import { BannerParticles } from "@/components/BannerParticles";

const skills = [
  { name: "React", icon: "react" },
  { name: "Next", icon: "nextdotjs" },
  { name: "Expo", icon: "expo" },
  { name: "Django", icon: "django" },
  { name: "Express", icon: "express" },
  { name: "Node", icon: "nodedotjs" },
  { name: "Bun", icon: "bun" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Redis", icon: "redis" },
  { name: "Prisma", icon: "prisma" },
  { name: "Zustand", icon: "https://raw.githubusercontent.com/pmndrs/zustand/main/docs/favicon.ico" },
  { name: "Tanstack Query", icon: "reactquery" },
  { name: "Postman", icon: "postman" },
  { name: "Tailwind", icon: "tailwindcss" },
  { name: "shadcn", icon: "shadcnui" },
  { name: "Motion", icon: "framer" },
  { name: "GSAP", icon: "greensock" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Python", icon: "python" },
  { name: "C/C++", icon: "cplusplus" },
  { name: "SQL", icon: "databricks" },
  { name: "Git", icon: "git" },
  { name: "Github", icon: "github" },
  { name: "Figma", icon: "figma" },
  { name: "Docker", icon: "docker" },
  { name: "Linux", icon: "linux" },
];

export default function Home() {
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

      {/* Cell 1: Banner */}
      <div className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-0 h-[22vh] -z-0 pointer-events-auto overflow-hidden bg-white dark:bg-black shadow-[0_4px_12px_rgba(2,6,23,0.04)] dark:shadow-[0_4px_12px_rgba(2,6,23,0.10)]">
        <img
          src="/ChatGPT%20Image%20May%2022%2C%202026%2C%2012_40_29%20AM.png"
          alt="Light mode banner"
          className="w-full h-full object-cover object-center dark:hidden"
        />
        <img
          src="/ChatGPT%20Image%20May%2022%2C%202026%2C%2012_49_39%20AM.png"
          alt="Dark mode banner"
          className="hidden w-full h-full object-cover object-center dark:block"
        />
        <BannerParticles />
        <div className="absolute inset-x-0 bottom-0 h-10 pointer-events-none z-[5] bg-gradient-to-t from-white/90 to-transparent dark:from-black/50 dark:to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-8 pointer-events-none z-20 bg-gradient-to-r from-white/90 to-transparent dark:from-black/40 dark:to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none z-20 bg-gradient-to-l from-white/90 to-transparent dark:from-black/40 dark:to-transparent" />
        <div className="absolute bottom-3 right-2 z-10 pointer-events-auto">
          <CurrentTime />
        </div>
      </div>

      {/* Cell 2: Profile Section - 112px height to wrap the framed image (13px gap top/bottom) */}
      <div className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-[22vh] h-[112px] flex items-center px-4 z-50">
        <div className="flex w-full items-center justify-between">

          <div className="flex items-center gap-4 sm:gap-5">
            <div className="relative p-[3px] rounded-[6px] sm:rounded-[8px] border-[1.5px] border-black/30 dark:border-white/[0.15] shrink-0">
              {/* The inner image */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-[3px] sm:rounded-[5px] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <img src="https://github.com/ashutoshx7.png" alt="Profile" className="w-full h-full object-cover grayscale opacity-90 contrast-100 mix-blend-multiply dark:mix-blend-normal" />
              </div>
            </div>

            <div className="flex flex-col justify-center pt-8">
              <h1 className="text-[20px] sm:text-[24px] font-bold text-zinc-800 dark:text-zinc-100 tracking-tight leading-none mb-0.5 [text-shadow:-1.5px_0_0_rgba(0,200,255,0.3),1.5px_0_0_rgba(255,80,0,0.3)] dark:[text-shadow:-1.5px_0_0_rgba(0,200,255,0.6),1.5px_0_0_rgba(255,80,0,0.6)]">
                Ashutoshx7
              </h1>
              <p className="text-[13px] sm:text-[14px] text-zinc-500 dark:text-zinc-400">20</p>
            </div>
          </div>

          <div className="flex items-start justify-end gap-2 sm:gap-3 h-20 sm:h-24 py-1">
            <CommandMenu />
            <ThemeToggle className="dark:text-zinc-400 hover:dark:text-zinc-300" />
          </div>

        </div>
      </div>

      {/* Flowing Content Section */}
      <div className="ml-0 mr-0 md:ml-[30%] md:mr-[30%] pt-[calc(22vh+112px)] pb-0 px-4 flex flex-col z-10 relative min-h-screen">
        <p className="text-[14px] sm:text-[15px] text-zinc-600 dark:text-zinc-300 leading-relaxed mt-4">
          Engineer / Artist. I love building, breaking, and shipping things.
        </p>

        <ul className="text-[14px] sm:text-[15px] text-zinc-600 dark:text-zinc-300 leading-relaxed mt-4 pl-4">
          <li className="flex gap-1.5"><span>•</span><span>AI, open source, and developer tools excite me.</span></li>
          <li className="flex gap-1.5"><span>•</span><span>I believe actions speak louder than words, so I put my code where my mouth is.</span></li>
          <li className="flex gap-1.5"><span>•</span><span>Currently building <span className="font-semibold text-zinc-900 dark:text-white">Draco</span>, <span className="font-semibold text-zinc-900 dark:text-white">VengeanceUI</span>, and experimental AI tools.</span></li>
        </ul>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <Link href="/contact">
            <SoftPillButton
              as="span"
              variant="primary"
              className="px-3 py-1.5 !text-[12px]"
            >
              <div className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Book an intro call
              </div>
            </SoftPillButton>
          </Link>
          <Link href="/contact">
            <SoftPillButton
              as="span"
              variant="secondary"
              className="px-3 py-1.5 !text-[12px]"
            >
              <div className="flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Send an email
              </div>
            </SoftPillButton>
          </Link>
        </div>

        {/* Socials */}
        <div id="contact" className="mt-6 scroll-mt-24">
          <h2 className="text-[14px] text-zinc-500 mb-2">Here are my <span className="font-medium text-zinc-800 dark:text-zinc-200">socials</span></h2>
          <div className="flex flex-wrap gap-1.5">
            {[
              { name: 'GitHub', href: 'https://github.com/Ashutoshx7?tab=overview&from=2026-05-01&to=2026-05-15', icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" fill="none"></path> },
              { name: 'Twitter', href: 'https://x.com/Ashutosh_7x7', icon: <path d="M4 4l11.733 16h4.267l-11.733 -16zM4 20l6.768 -6.768M20 4l-6.768 6.768" stroke="currentColor" strokeWidth="2" fill="none" /> },
              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ashutosh-singh-855177329/', icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2" fill="none"></path> },
              { name: 'Discord', href: '#', icon: <path d="M18 5c-1.5-.7-3.2-1-5-1s-3.5.3-5 1c-1.5 3.5-2.5 8-2.5 8 1.5 2 4.5 3 7.5 3s6-1 7.5-3c0 0-1-4.5-2.5-8zM9 13c-.8 0-1.5-.7-1.5-1.5S8.2 10 9 10s1.5.7 1.5 1.5S9.8 13 9 13zm6 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" fill="currentColor"></path> },
            ].map((social, i) => (
              <SocialHoverCard key={i} socialName={social.name}>
                <SoftPillButton
                  as="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="px-3 py-1.5 !text-[12px]"
                >
                  <div className="flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
                      {social.icon}
                    </svg>
                    {social.name}
                  </div>
                </SoftPillButton>
              </SocialHoverCard>
            ))}
          </div>
        </div>

        {/* Experiences */}
        <div id="experience" className="mt-6 flex flex-col relative z-10 scroll-mt-24">
          {/* Top full-width line */}
          <div
            className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/30 dark:border-white/[0.15] pointer-events-none"
            style={{
              maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)',
              WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)'
            }}
          />
          {/* Top Line Intersections */}
          <div className="absolute top-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />
          <div className="absolute top-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />

          <div className="py-2 relative">
            <h2 className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Experiences</h2>
            {/* Bottom full-width line */}
            <div
              className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
              style={{
                maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)',
                WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)'
              }}
            />
            {/* Bottom Line Intersections */}
            <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
            <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
          </div>

          <div className="block mt-0">
            <ExperienceList />

            {/* View All Button */}
            <div className="py-4 px-4 -mx-4 flex justify-center relative hover:bg-zinc-50 dark:hover:bg-zinc-900/20 transition-colors cursor-pointer rounded-b-lg mt-0">
              <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
              {/* Bottom Line Intersections */}
              <div className="absolute bottom-0 left-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
              <div className="absolute bottom-0 right-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
              <Link href="/experience" className="relative group block mt-0">
                <div className="absolute -inset-[5px] border border-black/5 dark:border-white/5 rounded-[11px] pointer-events-none transition-colors duration-300 group-hover:border-black/10 dark:group-hover:border-white/10" />
                <div className="relative flex items-center gap-1.5 px-4 py-2 bg-zinc-50 hover:bg-zinc-100 dark:bg-[#09090b] dark:hover:bg-[#121214] text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-[6px] text-[13px] font-medium transition-all duration-300 border border-black/5 dark:border-white/5 shadow-sm shadow-black/20 dark:shadow-lg dark:shadow-black/80">
                  View All
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div id="projects" className="mt-0 flex flex-col relative z-10 scroll-mt-24">
          <div className="py-2 relative mt-1">
            <h2 className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Projects</h2>

            {/* Horizontal line below Projects heading */}
            <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
            {/* Intersections */}
            <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
            <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
            <div className="absolute bottom-0 left-1/2 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
          </div>

          {/* Grid Container */}
          <div className="relative pt-6 pb-12 px-4">
            {/* Center Vertical Line */}
            <div className="absolute top-0 bottom-6 left-1/2 w-0 border-r border-black/30 dark:border-white/[0.15] pointer-events-none -translate-x-1/2 hidden md:block" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />

            <ProjectsGrid />

            {/* Bottom Horizontal Line */}
            <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
            {/* Intersections */}
            <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
            <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
            {/* Center dot removed to prevent crossing the outline gap of the View All button */}
          </div>

          {/* View All Button */}
          <div className="flex justify-center -mt-[19px] pb-0 relative z-20">
            <Link href="/projects" className="relative group block">
              <div className="absolute -inset-[5px] border border-black/5 dark:border-white/5 rounded-[11px] pointer-events-none transition-colors duration-300 group-hover:border-black/10 dark:group-hover:border-white/10" />
              <div className="relative flex items-center gap-1.5 px-4 py-2 bg-zinc-50 hover:bg-zinc-100 dark:bg-[#09090b] dark:hover:bg-[#121214] text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-[6px] text-[13px] font-medium transition-all duration-300 border border-black/5 dark:border-white/5 shadow-sm shadow-black/20 dark:shadow-lg dark:shadow-black/80">
                View All
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* Github Graph */}
        <GithubGraph />

        {/* Open Source Contributions */}
        <div id="opensource" className="scroll-mt-24">
          <OpenSourceContributions />
        </div>

        {/* Skills */}
        <div id="skills" className="mt-6 flex flex-col relative z-10 scroll-mt-24">
          {/* Top full-width line */}
          <div
            className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/30 dark:border-white/[0.15] pointer-events-none"
            style={{
              maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)',
              WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)'
            }}
          />
          {/* Top Line Intersections */}
          <div className="absolute top-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />
          <div className="absolute top-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />

          <div className="py-2 relative mt-1">
            <h2 className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Skills & Technologies</h2>

            {/* Horizontal line below Skills heading */}
            <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
            {/* Intersections */}
            <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
            <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
          </div>

          <div className="relative pt-6 pb-2">
            <div className="flex flex-wrap gap-2 w-full">
              {skills.map((skill, index) => (
                <div key={index} className="grow flex items-center justify-center gap-2 px-3 py-1.5 bg-zinc-50 hover:bg-zinc-100 dark:bg-[#0a0a0a] dark:hover:bg-[#121214] border border-black/30 dark:border-white/[0.15] rounded-[6px] transition-colors duration-200 cursor-default">
                  <img src={skill.icon.startsWith('http') ? skill.icon : `https://cdn.simpleicons.org/${skill.icon}/71717a`} alt={skill.name} className={`w-3.5 h-3.5 opacity-80 ${skill.icon.startsWith('http') ? 'rounded-sm grayscale' : ''}`} />
                  <span className="text-[13px] font-medium text-zinc-600 dark:text-zinc-400">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Blogs */}
        <div id="blogs" className="mt-6 flex flex-col relative scroll-mt-24">
          {/* Top full-width line */}
          <div
            className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/30 dark:border-white/[0.15] pointer-events-none"
            style={{
              maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)',
              WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)'
            }}
          />
          {/* Top Line Intersections */}
          <div className="absolute top-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />
          <div className="absolute top-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />

          <div className="py-2 relative mt-1">
            <h2 className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Blogs</h2>

            {/* Horizontal line below Blogs heading */}
            <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
            {/* Intersections */}
            <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
            <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
          </div>

          <BlogList />

          {/* View All Button */}
          <div className="py-4 px-4 -mx-4 flex justify-center relative hover:bg-zinc-50 dark:hover:bg-zinc-900/20 transition-colors cursor-pointer rounded-b-lg mt-0">
            <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
            {/* Bottom Line Intersections */}
            <div className="absolute bottom-0 left-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
            <div className="absolute bottom-0 right-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />

            <Link href="https://medium.com/@ashutoshx7" target="_blank" rel="noopener noreferrer" className="relative group block mt-0">
              <div className="absolute -inset-[5px] border border-black/5 dark:border-white/5 rounded-[11px] pointer-events-none transition-colors duration-300 group-hover:border-black/10 dark:group-hover:border-white/10" />
              <div className="relative flex items-center gap-1.5 px-4 py-2 bg-zinc-50 hover:bg-zinc-100 dark:bg-[#09090b] dark:hover:bg-[#121214] text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-[6px] text-[13px] font-medium transition-all duration-300 border border-black/5 dark:border-white/5 shadow-sm shadow-black/20 dark:shadow-lg dark:shadow-black/80">
                View All
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* Minimal Quote Section */}
        <div className="mt-12 flex flex-col items-center justify-center relative py-12">
          <div className="max-w-[480px] w-full flex flex-col items-center">
            <h3 className="text-[16px] font-medium text-center leading-relaxed text-zinc-500 dark:text-zinc-400 mb-6 italic">
              &quot;Do so much work that it would be unreasonable<br className="hidden md:block" /> for you to not be successful.&quot;
            </h3>

            <div className="flex items-center gap-3 text-[10px] font-medium tracking-[0.2em] text-zinc-400 dark:text-zinc-600 uppercase">
              <div className="w-4 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
              ALEX HORMOZI
              <div className="w-4 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
            </div>
          </div>
        </div>

        {/* Fading Grid Filler */}
        <div className="flex-grow w-[calc(100%+32px)] -mx-4 h-[300px] relative mt-4">
          {/* Top full-width line */}
          <div
            className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/30 dark:border-white/[0.15] pointer-events-none z-10"
            style={{
              maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)',
              WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)'
            }}
          />
          {/* Intersections */}
          <div className="absolute top-0 left-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />
          <div className="absolute top-0 right-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />

          <FooterBackground />
        </div>

      </div>

    </div>
  );
}
