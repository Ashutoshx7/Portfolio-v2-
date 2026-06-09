"use client";

import React, { useState } from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const darkBannerImage = "/ChatGPT%20Image%20May%2022%2C%202026%2C%2012_49_39%20AM.jpg";

interface SocialProfile {
  name: string;
  handle: string;
  avatar: string;
  bio: string;
  location: string;
  banner?: string;
  stats: {
    label: string;
    value: string | number;
  }[];
}

const socialProfiles: Record<string, SocialProfile> = {
  GitHub: {
    name: "Ashutosh Singh",
    handle: "Ashutoshx7",
    avatar: "https://github.com/ashutoshx7.png",
    bio: "20 • Artist / Engineer",
    location: "Delhi, India (UTC +05:30)",
    stats: [
      { value: "138", label: "Repositories" },
      { value: "236", label: "Followers" },
    ],
  },
  Twitter: {
    name: "Ashutoshx7",
    handle: "@Ashutosh_7x7",
    avatar: "https://unavatar.io/twitter/Ashutosh_7x7",
    banner: darkBannerImage,
    bio: "Artist / Engineer 20 • Backed by Vercel • Building Draco",
    location: "Delhi, India (UTC +05:30)",
    stats: [
      { value: "395", label: "Following" },
      { value: "2,312", label: "Followers" },
    ],
  },
  LinkedIn: {
    name: "Ashutosh Singh",
    handle: "in/ashutosh-singh-855177329",
    avatar: "https://github.com/ashutoshx7.png",
    banner: darkBannerImage,
    bio: "20 • Artist / Engineer ||",
    location: "Lucknow, Uttar Pradesh, India",
    stats: [
      { value: "195", label: "Connections" },
    ],
  },
  Medium: {
    name: "Ashutosh Singh",
    handle: "@ashutoshx7",
    avatar: "https://github.com/ashutoshx7.png",
    bio: "Writing about modern web engineering, pixel-perfect design systems, and frontend optimizations.",
    location: "Delhi, India (UTC +05:30)",
    stats: [
      { value: "12", label: "Stories" },
      { value: "85", label: "Followers" },
    ],
  },
  Discord: {
    name: "Ashutoshx7",
    handle: "ashutoshsingh71",
    avatar: "/discord-avatar.png",
    bio: "Even if it's dark, keep moving forward.",
    location: "",
    stats: [],
  },
};

interface SocialHoverCardProps {
  socialName: string;
  children: React.ReactNode;
}

export default function SocialHoverCard({ socialName, children }: SocialHoverCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const profile = socialProfiles[socialName];

  // If there's no profile configuration for this social name, just render the child as-is
  if (!profile) {
    return <>{children}</>;
  }

  return (
    <HoverCard.Root
      open={isOpen}
      onOpenChange={setIsOpen}
      openDelay={80}
      closeDelay={120}
    >
      <HoverCard.Trigger asChild>
        <span className="inline-block">{children}</span>
      </HoverCard.Trigger>
      <AnimatePresence>
        {isOpen && (
          <HoverCard.Portal forceMount>
            <HoverCard.Content
              asChild
              forceMount
              side="bottom"
              align="center"
              sideOffset={8}
              className="z-50 select-none outline-none"
            >
              <motion.div
                initial={{ opacity: 0, y: 4, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 3, scale: 0.985 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "w-[230px] sm:w-[250px] rounded-xl shadow-2xl backdrop-blur-md overflow-hidden",
                  "bg-white/95 dark:bg-[#0c0c0e]/95 border border-black/5 dark:border-white/5",
                  "text-zinc-900 dark:text-zinc-100 select-none"
                )}
              >
                {socialName === "GitHub" || socialName === "Discord" ? (
                  // Official flat Layout (No banner, side-by-side avatar and name/handle)
                  <div className="p-4">
                    {/* Top Row: Avatar & Name side-by-side */}
                    <div className="flex items-center gap-3">
                      {/* Circular Avatar Container with status dot */}
                      <div className="relative shrink-0">
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-black/5 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900">
                          <Image
                            src={profile.avatar}
                            alt={profile.name}
                            width={48}
                            height={48}
                            loading="eager"
                            decoding="async"
                            quality={75}
                            sizes="48px"
                            className="w-full h-full object-cover grayscale opacity-90 contrast-100 mix-blend-multiply dark:mix-blend-normal"
                          />
                        </div>
                        {/* Discord active green dot indicator */}
                        {socialName === "Discord" && (
                          <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-[#0c0c0e] bg-green-500 shadow-sm" />
                        )}
                      </div>

                      {/* Name and Handle */}
                      <div className="flex flex-col min-w-0">
                        <h3 className="text-[13.5px] font-bold tracking-tight text-zinc-950 dark:text-zinc-50 truncate leading-tight">
                          {profile.name}
                        </h3>
                        <span className={cn(
                          "text-[11.5px] mt-0.5 leading-none",
                          socialName === "Discord"
                            ? "text-zinc-400 dark:text-zinc-500 font-sans"
                            : "text-zinc-400 dark:text-zinc-500 font-mono"
                        )}>
                          {profile.handle}
                        </span>
                      </div>
                    </div>

                    {/* Bio Section */}
                    <div className="mt-3">
                      <p className="text-[12px] leading-relaxed text-zinc-800 dark:text-zinc-300">
                        {profile.bio}
                      </p>
                    </div>

                    {/* Discord Status Footer */}
                    {socialName === "Discord" && (
                      <div className="mt-3.5 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11.5px]">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-zinc-700 dark:text-zinc-300 font-semibold">Online</span>
                        </div>
                        <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-sans uppercase tracking-wider font-semibold">Active Status</span>
                      </div>
                    )}

                    {/* Location Section */}
                    {profile.location && (
                      <div className="mt-2.5 flex items-center gap-1.5">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span className="text-[10.5px] text-zinc-400 dark:text-zinc-500">
                          {profile.location}
                        </span>
                      </div>
                    )}

                    {/* Stats Section */}
                    {profile.stats && profile.stats.length > 0 && (
                      <div className="mt-3.5 flex items-center gap-5 text-[12px] text-zinc-400 dark:text-zinc-500 pt-3 border-t border-black/5 dark:border-white/5">
                        {profile.stats.map((stat, i) => (
                          <div key={i} className="flex items-center gap-1">
                            <span className="font-extrabold text-zinc-950 dark:text-zinc-100">
                              {stat.value}
                            </span>
                            <span className="text-zinc-400 dark:text-zinc-500">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // Twitter / LinkedIn / Others stacked banner layout
                  <>
                    {/* Banner Section */}
                    {profile.banner ? (
                      <div className="relative w-full h-[64px] bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                        {profile.banner.startsWith("bg-") ? (
                          <div className={cn("w-full h-full", profile.banner)} />
                        ) : (
                          <Image
                            src={profile.banner}
                            alt="Banner"
                            width={250}
                            height={64}
                            loading="eager"
                            decoding="async"
                            quality={75}
                            sizes="250px"
                            className="w-full h-full object-cover opacity-95 scale-[1.15] origin-right"
                          />
                        )}
                      </div>
                    ) : (
                      // Fallback dark gradient banner for cards without a customized banner
                      <div className="relative w-full h-[36px] bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-950 border-b border-black/5 dark:border-white/5" />
                    )}

                    {/* Card Content Container */}
                    <div className="p-3.5 pt-0">
                      {/* Avatar Section (with absolute overlap) */}
                      <div className="relative h-9 mb-1.5">
                        <div className={cn(
                          "absolute -top-7 left-0 rounded-full overflow-hidden border-2 bg-zinc-100 dark:bg-zinc-900 shadow-sm shrink-0",
                          profile.banner
                            ? "w-14 h-14 border-white dark:border-[#0c0c0e]"
                            : "w-12 h-12 border-black/5 dark:border-white/10 -top-4"
                        )}>
                          <Image
                            src={profile.avatar}
                            alt={profile.name}
                            width={56}
                            height={56}
                            loading="eager"
                            decoding="async"
                            quality={75}
                            sizes="56px"
                            className="w-full h-full object-cover grayscale opacity-90 contrast-100 mix-blend-multiply dark:mix-blend-normal"
                          />
                        </div>
                      </div>

                      {/* Name and Handle Section */}
                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-[13.5px] font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 truncate leading-none">
                            {profile.name}
                          </h3>
                          {/* verified blue badge for Twitter */}
                          {socialName === "Twitter" && (
                            <svg viewBox="0 0 24 24" className="w-[13.5px] h-[13.5px] text-[#1d9bf0] fill-current shrink-0 select-none">
                              <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.99-3.818-3.99-.48 0-.94.1-1.348.27C14.825 2.515 13.512 1.5 12 1.5s-2.825 1.015-3.422 2.28c-.408-.17-.867-.27-1.348-.27-2.108 0-3.818 1.78-3.818 3.99 0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.71 3.99 3.818 3.99.48 0 .94-.1 1.348-.27.597 1.265 1.91 2.28 3.422 2.28s2.825-1.015 3.422-2.28c.408.17.867.27 1.348.27 2.108 0 3.818-1.78 3.818-3.99 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6zm-12.72 3.28L6.47 12.5c-.39-.39-.39-1.03 0-1.42s1.02-.39 1.41 0l2.2 2.2 5.09-5.09c.39-.39 1.03-.39 1.42 0s.39 1.03 0 1.42l-5.8 5.8c-.2.2-.46.3-.71.3s-.51-.1-.71-.3z" />
                            </svg>
                          )}
                        </div>
                        <span className="text-[10.5px] text-zinc-400 dark:text-zinc-500 font-mono mt-0.5 leading-none">
                          {profile.handle}
                        </span>
                      </div>

                      {/* Bio Section */}
                      <div className="mt-2.5">
                        <p className="text-[12px] leading-[16px] text-zinc-600 dark:text-zinc-300 font-sans">
                          {profile.bio}
                        </p>
                      </div>

                      {/* Location Section */}
                      <div className="mt-2 flex items-center gap-1">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-2.5 h-2.5 text-zinc-400 dark:text-zinc-500 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span className="text-[10.5px] text-zinc-400 dark:text-zinc-500">
                          {profile.location}
                        </span>
                      </div>

                      {/* Stats Section */}
                      <div className="mt-3.5 flex items-center gap-4 text-[11.5px] text-zinc-400 dark:text-zinc-500 border-t border-black/5 dark:border-white/5 pt-2.5">
                        {profile.stats.map((stat, i) => (
                          <div key={i} className="flex items-center gap-1">
                            <span className="font-extrabold text-zinc-950 dark:text-zinc-100">
                              {stat.value}
                            </span>
                            <span className="text-zinc-400 dark:text-zinc-500">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </HoverCard.Content>
          </HoverCard.Portal>
        )}
      </AnimatePresence>
    </HoverCard.Root>
  );
}
