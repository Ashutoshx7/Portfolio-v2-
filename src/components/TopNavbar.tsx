"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CommandMenu } from "./command-menu";

export function TopNavbar() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0.1 }
    );

    const sections = ["experience", "projects", "blogs", "opensource", "skills"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const links = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blogs" },
  ];

  return (
    <nav className="fixed top-2 right-[31%] z-[100] pointer-events-auto">
      <div
        className={`flex items-center gap-5 px-5 py-2.5 rounded-full transition-all duration-300 ${scrolled
          ? "bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/5 dark:border-white/[0.15]"
          : "bg-transparent border border-transparent"
          }`}
      >
        {links.map((link) => {
          const isActive = activeSection === link.href.slice(1);
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[12px] font-medium tracking-[0.05em] transition-colors duration-500 relative ${isActive
                ? "text-zinc-900 dark:text-zinc-100"
                : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
                }`}
            >
              {link.name}
            </Link>
          );
        })}

        {/* Divider */}
        <div className="w-[1px] h-3.5 bg-zinc-300 dark:bg-zinc-800 mx-0.5" />

        {/* Shortcut Button */}
        <CommandMenu />
      </div>
    </nav>
  );
}
