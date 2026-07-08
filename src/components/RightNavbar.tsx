"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function RightNavbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

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

    const sections = ["experience", "projects", "opensource", "skills", "blogs", "highlights"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const links = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Open Source", href: "#opensource" },
    { name: "Skills", href: "#skills" },
    { name: "Blog", href: "#blogs" },
    { name: "Highlights", href: "#highlights" },
  ];

  // Only render on the homepage where the #hash sections exist
  if (pathname !== "/") return null;

  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none hidden lg:block"
      style={{ width: 'calc(100vw - var(--removed-body-scroll-bar-size, 0px))' }}
    >
      <nav className="absolute top-[22vh] left-[calc(69%+32px)] pointer-events-auto flex flex-col gap-4 mt-2">
        <h3 className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 dark:text-zinc-600 uppercase mb-1">Index</h3>
        {links.map((link) => {
          const isActive = activeSection === link.href.slice(1);
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[12px] font-medium tracking-[0.05em] transition-all duration-300 ease-out flex items-center gap-3 ${isActive
                  ? "text-zinc-800 dark:text-zinc-200"
                  : "text-zinc-400 dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400"
                }`}
            >
              <span className={`h-[1px] transition-all duration-300 ease-out ${isActive
                  ? "w-3 bg-zinc-300 dark:bg-zinc-700"
                  : "w-0 bg-transparent"
                }`} />
              {link.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
