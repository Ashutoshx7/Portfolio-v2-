"use client";

import React, { useState, useRef } from "react";
import { FooterBackground } from "@/components/FooterBackground";
import { CommandMenu } from "@/components/command-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { CurrentTime } from "@/components/CurrentTime";
import { RightNavbar } from "@/components/RightNavbar";
import DisplacementText from "@/components/DisplacementText";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const planeRef = useRef<SVGSVGElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.message.trim() !== "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting || isSent) return;
    setIsSubmitting(true);

    // Animate the plane icon flying away
    if (planeRef.current) {
      gsap.to(planeRef.current, {
        x: 60,
        y: -40,
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        ease: "power2.in",
      });
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/as1142120@gmail.com",
        {
          method: "POST",
          body: data,
        }
      );

      if (response.ok) {
        setIsSent(true);
        form.reset();
        setFormData({ name: "", email: "", message: "" });

        // Reset after 3 seconds
        setTimeout(() => {
          setIsSent(false);
          setIsSubmitting(false);
          if (planeRef.current) {
            gsap.set(planeRef.current, { x: 0, y: 0, opacity: 1, scale: 1 });
          }
        }, 3000);
      } else {
        setIsSubmitting(false);
        if (planeRef.current) {
          gsap.set(planeRef.current, { x: 0, y: 0, opacity: 1, scale: 1 });
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      if (planeRef.current) {
        gsap.set(planeRef.current, { x: 0, y: 0, opacity: 1, scale: 1 });
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-white dark:bg-[#0a0a0a] relative overflow-x-hidden transition-colors duration-300">
      <RightNavbar />

      {/* Blueprint Vertical Lines */}
      <div className="absolute top-0 bottom-0 left-[31%] w-0 border-r border-black/30 dark:border-white/10 pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />
      <div className="absolute top-0 bottom-0 right-[31%] w-0 border-r border-black/30 dark:border-white/10 pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />

      {/* Blueprint Horizontal Lines */}
      <div className="absolute left-0 right-0 top-[22vh] h-0 border-b border-black/30 dark:border-white/10 pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
      <div className="absolute left-0 right-0 top-[calc(22vh+112px)] h-0 border-b border-black/30 dark:border-white/10 pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />

      {/* Grid Intersection Nodes */}
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
                Contact
              </h1>
              <p className="text-[12px] text-zinc-500 dark:text-zinc-400">
                Open for meaningful work.
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
      <div className="ml-[31%] mr-[31%] pt-[calc(22vh+112px)] pb-0 px-4 flex flex-col z-10 relative">
        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-8">
          {/* FormSubmit Configuration */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="New Submission from Portfolio" />
          <input type="text" name="_honey" style={{ display: "none" }} />

          <div className="space-y-2">
            <label className="text-[11px] font-bold tracking-[0.15em] text-zinc-400 dark:text-zinc-600 uppercase ml-0.5">
              Full Name
            </label>
            <input
              required
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Tyler Durden"
              className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 px-0.5 text-[14px] text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-500 transition-colors placeholder:text-zinc-300 dark:placeholder:text-zinc-700"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold tracking-[0.15em] text-zinc-400 dark:text-zinc-600 uppercase ml-0.5">
              Email Address
            </label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="tyler@projectmayhem.com"
              className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 px-0.5 text-[14px] text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-500 transition-colors placeholder:text-zinc-300 dark:placeholder:text-zinc-700"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold tracking-[0.15em] text-zinc-400 dark:text-zinc-600 uppercase ml-0.5">
              Message
            </label>
            <textarea
              required
              name="message"
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="You're crazy good, never change."
              className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 px-0.5 text-[14px] text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-500 transition-colors placeholder:text-zinc-300 dark:placeholder:text-zinc-700 resize-none"
            />
          </div>

          {/* Send Message Button - View All style */}
          <div className="flex justify-center w-full pt-4">
            <div className="relative group">
              <div className="absolute -inset-[5px] border border-black/5 dark:border-white/5 rounded-[11px] pointer-events-none transition-colors duration-300 group-hover:border-black/10 dark:group-hover:border-white/10" />
              <button
                ref={btnRef}
                type="submit"
                disabled={isSubmitting || !isFormValid || isSent}
                className="relative flex items-center gap-1.5 px-4 py-2 bg-zinc-50 hover:bg-zinc-100 dark:bg-[#09090b] dark:hover:bg-[#121214] text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-[6px] text-[13px] font-medium transition-all duration-300 border border-black/5 dark:border-white/5 shadow-sm shadow-black/20 dark:shadow-lg dark:shadow-black/80 disabled:opacity-40 disabled:cursor-not-allowed overflow-hidden"
              >
                {isSent ? (
                  <>
                    Sent
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </>
                ) : (
                  <>
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <svg ref={planeRef} viewBox="0 0 24 24" className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Separator */}
        <div className="relative mt-16 mb-0">
          <div className="absolute left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/10 pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
          {/* Intersection nodes */}
          <div className="absolute left-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/20 -translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
          <div className="absolute right-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/20 translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
        </div>

        {/* Footer - Socials */}
        <div className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-[12px] text-zinc-500 dark:text-zinc-400">
              Open for collaborations and full-time roles.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* GitHub */}
            <a href="https://github.com/Ashutoshx7" target="_blank" className="p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              <svg viewBox="0 0 24 24" className="w-[14px] h-[14px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            {/* Twitter/X */}
            <a href="https://x.com/Ashutosh_7x7" target="_blank" className="p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              <svg viewBox="0 0 24 24" className="w-[14px] h-[14px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768M20 4l-6.768 6.768" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" target="_blank" className="p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              <svg viewBox="0 0 24 24" className="w-[14px] h-[14px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Displacement Text - ASHUTOSH hover effect */}
        <div className="w-full h-56 relative overflow-hidden flex items-center justify-center -mt-8 mb-0">
          <DisplacementText
            text="ASHUTOSH"
            fontSize={280}
            className="h-full w-full"
            lightColor="#171717"
            darkColor="#e5e5e5"
          />
        </div>
      </div>
    </div>
  );
}
