"use client";

import React, { useRef, useEffect } from 'react';

export function FooterBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !spotlightRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        if (!spotlightRef.current) return;
        const mask = `radial-gradient(250px circle at ${x}px ${y}px, black, transparent)`;
        spotlightRef.current.style.maskImage = mask;
        spotlightRef.current.style.webkitMaskImage = mask;
      });
    };

    const handleMouseEnter = () => {
      if (spotlightRef.current) spotlightRef.current.style.opacity = "0.25";
    };
    const handleMouseLeave = () => {
      if (spotlightRef.current) spotlightRef.current.style.opacity = "0";
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      cancelAnimationFrame(frameId);
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
    >
      {/* Base dots that fade out */}
      <div 
        className="absolute inset-0 w-full h-full text-zinc-400 dark:text-zinc-500 opacity-20 dark:opacity-[0.1] pointer-events-none transition-opacity duration-500"
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '16px 16px',
          backgroundPosition: 'center',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'
        }}
      />

      {/* Interactive hover spotlight that reveals more opaque dots */}
      <div 
        ref={spotlightRef}
        className="absolute inset-0 w-full h-full text-zinc-500 dark:text-zinc-400 opacity-0 pointer-events-none transition-opacity duration-700 ease-in-out"
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '16px 16px',
          backgroundPosition: 'center',
          maskImage: 'radial-gradient(250px circle at -1000px -1000px, black, transparent)',
          WebkitMaskImage: 'radial-gradient(250px circle at -1000px -1000px, black, transparent)'
        }}
      />
    </div>
  );
}
