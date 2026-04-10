"use client";

import React, { useCallback } from "react";
import { GlobePulse } from "@/components/ui/cobe-globe-pulse";
import { HeroBackground } from "@/components/ui/shape-landing-hero";

export default function Hero() {
  const smoothScrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.pageYOffset,
      behavior: "smooth",
    });
  }, []);

  return (
    <section
      id="profile"
      className="relative min-h-screen bg-[#030303] overflow-hidden"
    >
      {/* ── Geometric background shapes ── */}
      <HeroBackground />

      {/* ── Grain texture overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.032]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Main content grid ── */}
      <div className="relative z-10 grid md:grid-cols-[45fr_55fr] min-h-screen items-center gap-0">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-7 pl-[8vw] pr-6 py-24 md:py-0 animate-fadeUp">

          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span className="text-[11px] tracking-[0.18em] uppercase text-white/40 font-light">
              Full-Stack Developer · Calgary, CA
            </span>
          </div>

          {/* Name */}
          <h1
            className="font-display text-white leading-[0.88]"
            style={{ fontSize: "clamp(4.5rem, 9vw, 8rem)", letterSpacing: "0.01em" }}
          >
            Aman
            <br />
            <span
              className="text-transparent select-none"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.22)" }}
            >
              deep
            </span>
            <br />
            Singh
          </h1>

          {/* Tagline */}
          <p className="text-white/40 font-light leading-relaxed max-w-[32ch] text-sm md:text-[0.95rem] tracking-wide">
            Building products where engineering precision meets design
            intuition web, mobile, and everything in between.
          </p>

          {/* Role list */}
          <ul className="flex flex-col gap-2.5">
            {["Web Applications", "Mobile Experiences", "Product Design"].map((role) => (
              <li key={role} className="group flex items-center gap-3 cursor-default">
                <span className="block h-px w-5 bg-white/20 transition-all duration-300 group-hover:w-9 group-hover:bg-white" />
                <span className="text-[0.7rem] tracking-[0.14em] uppercase text-white/35 transition-colors duration-300 group-hover:text-white/80">
                  {role}
                </span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex items-center gap-8 pt-1">
            <button
              onClick={() => smoothScrollTo("projects")}
              className="px-8 py-3.5 rounded-full bg-white text-black text-[0.75rem] font-medium tracking-[0.1em] uppercase transition-all duration-200 hover:opacity-80 hover:scale-[1.02] active:scale-[0.98]"
            >
              View My Work
            </button>
            <button
              onClick={() => smoothScrollTo("contact")}
              className="text-white/45 text-[0.75rem] tracking-[0.1em] uppercase transition-colors duration-200 hover:text-white flex items-center gap-2 group"
            >
              Get in Touch
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </button>
          </div>

          {/* Available status */}
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-[0.68rem] tracking-[0.12em] uppercase text-white/30">
              Available for new projects
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN — Globe */}
        <div className="hidden md:flex items-center justify-center pr-[4vw]">
          <div className="relative w-[min(520px,78%)] aspect-square">
            {/* Orbit rings */}
            <div
              className="absolute rounded-full border border-white/[0.04]"
              style={{ inset: "-8%", animation: "spin 22s linear infinite" }}
            />
            <div
              className="absolute rounded-full border border-white/[0.025]"
              style={{ inset: "-20%", animation: "spin 34s linear infinite reverse" }}
            />

            <GlobePulse
              className="w-full h-full"
              markers={[
                { id: "pulse-1", location: [51.05, -114.07], delay: 0 },
                { id: "pulse-2", location: [40.71, -74.01], delay: 0.5 },
                { id: "pulse-3", location: [51.51, -0.13], delay: 1 },
                { id: "pulse-4", location: [1.35, 103.82], delay: 1.5 },
              ]}
              speed={0.003}
            />
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#030303] z-10 pointer-events-none" />

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 0.9s ease both;
        }
      `}</style>
    </section>
  );
}