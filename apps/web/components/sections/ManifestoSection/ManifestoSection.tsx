"use client";

import React, { useState } from "react";

export interface ManifestoSectionProps {
  eyebrow?: string;
  statement?: React.ReactNode;
  actionLabel?: string;
  actionHref?: string;
  onActionClick?: () => void;
  className?: string;
}

export function ManifestoSection({
  eyebrow = "BUILDING SOMETHING TOGETHER",
  statement,
  actionLabel = "Discover The Average Guy",
  actionHref = "#community",
  onActionClick,
  className = "",
}: ManifestoSectionProps) {
  const [activeMood, setActiveMood] = useState<"day" | "evening">("day");

  return (
    <section
      aria-label="Brand Manifesto"
      className={`relative w-full min-h-[92vh] lg:min-h-screen min-h-[720px] flex flex-col justify-between items-center px-6 sm:px-12 md:px-16 lg:px-20 py-12 sm:py-16 md:py-20 bg-[#234537] text-[#f5efe4] selection:bg-[#f5efe4] selection:text-[#234537] transition-colors duration-700 overflow-hidden ${className}`}
    >
      {/* Subtle Ambient Depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025] mix-blend-overlay"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 48%, rgba(255,255,255,0.2) 0%, transparent 65%)`,
        }}
      />

      {/* Top Space / Eyebrow Header */}
      <div className="w-full flex justify-center pt-2 sm:pt-4 md:pt-6 z-10">
        <span className="text-[11px] sm:text-[12px] md:text-[12.5px] font-bold tracking-[0.22em] uppercase text-[#d9d0c1] font-sans text-center select-none">
          {eyebrow}
        </span>
      </div>

      {/* Center Editorial Statement Block */}
      <div className="w-full max-w-[1240px] mx-auto text-center my-auto py-8 sm:py-12 md:py-14 z-10">
        <h2 className="sr-only">Our Community Philosophy</h2>
        <div className="font-editorial text-[clamp(2.35rem,5.1vw,5.4rem)] leading-[1.0] sm:leading-[0.98] tracking-[-0.02em] text-[#f5efe4] font-light mx-auto">
          {statement ? (
            statement
          ) : (
            <p className="m-0 text-balance font-light">
              <span>Not just a place for coffee. </span>
              <br className="hidden md:inline" />
              <span>A place for </span>
              <span className="font-normal italic text-[#fffdfa]">conversations</span>,
              <span> familiar faces,</span>
              <br className="hidden md:inline" />
              <span>new stories, and let our </span>
              <span className="font-medium text-[#ffffff] not-italic">community</span>
              <br className="hidden md:inline" />
              <span>become a home for everyone in between.</span>
            </p>
          )}
        </div>
      </div>

      {/* Floating Bottom Control Bar */}
      <div className="w-full flex justify-center pb-2 sm:pb-4 md:pb-6 z-10">
        <div
          role="region"
          aria-label="Section Experience Controls"
          className="inline-flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 bg-[#ece5d8] text-[#234537] rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.22)] border border-[#ffffff]/20 backdrop-blur-md transition-transform duration-300 hover:scale-[1.01]"
        >
          {/* Café Experience Toggle */}
          <div className="flex items-center gap-1 bg-transparent rounded-full px-1 py-0.5">
            <button
              type="button"
              onClick={() => setActiveMood("day")}
              aria-label="Daytime coffee hours"
              className={`p-1.5 sm:p-2 rounded-full transition-all duration-300 ${
                activeMood === "day"
                  ? "bg-[#b86034] text-[#ffffff] shadow-sm"
                  : "text-[#234537]/70 hover:text-[#234537] hover:bg-[#234537]/10"
              }`}
              title="Daytime & Espresso"
            >
              {/* Sun Icon */}
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => setActiveMood("evening")}
              aria-label="Evening community sessions"
              className={`p-1.5 sm:p-2 rounded-full transition-all duration-300 ${
                activeMood === "evening"
                  ? "bg-[#b86034] text-[#ffffff] shadow-sm"
                  : "text-[#234537]/70 hover:text-[#234537] hover:bg-[#234537]/10"
              }`}
              title="Community & Evenings"
            >
              {/* Star / Sparkle Icon */}
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                aria-hidden="true"
              >
                <path d="M12 3v3m0 12v3M3 12h3m12 0h3M6.3 6.3l2.2 2.2m7 7 2.2 2.2M6.3 17.7l2.2-2.2m7-7 2.2-2.2" />
              </svg>
            </button>

            <span className="text-[11px] sm:text-[12px] font-medium tracking-wide px-2 text-[#324037] select-none font-sans">
              {activeMood === "day" ? "Daytime & Coffee" : "Evenings & Stories"}
            </span>
          </div>

          {/* Primary Action Button */}
          {actionHref ? (
            <a
              href={actionHref}
              onClick={onActionClick}
              className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#b86034] hover:bg-[#a15129] active:bg-[#8e4521] text-[#ffffff] text-xs sm:text-[13px] font-medium tracking-wide transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#234537] focus-visible:ring-offset-2"
            >
              {actionLabel}
            </a>
          ) : (
            <button
              type="button"
              onClick={onActionClick}
              className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#b86034] hover:bg-[#a15129] active:bg-[#8e4521] text-[#ffffff] text-xs sm:text-[13px] font-medium tracking-wide transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#234537] focus-visible:ring-offset-2"
            >
              {actionLabel}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
