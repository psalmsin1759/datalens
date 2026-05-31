"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

function PhoneMockup() {
  return (
    <div className="relative flex justify-center">
      {/* Floating stat card 1 */}
      <div
        className="animate-float-card-1 absolute z-10"
        style={{ top: 80, left: -56 }}
      >
        <div className="rounded-2xl px-3.5 py-3 border border-[#2A3656] bg-[rgba(20,25,41,0.9)] backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
          <div className="text-[9px] font-mono text-white/42 uppercase tracking-wide">Today's usage</div>
          <div className="text-[17px] font-extrabold mt-0.5 text-dl-green">420 MB</div>
        </div>
      </div>

      {/* Floating stat card 2 */}
      <div
        className="animate-float-card-2 absolute z-10"
        style={{ bottom: 110, right: -52 }}
      >
        <div className="rounded-2xl px-3.5 py-3 border border-[#2A3656] bg-[rgba(20,25,41,0.9)] backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
          <div className="text-[9px] font-mono text-white/42 uppercase tracking-wide">Value used</div>
          <div className="text-[17px] font-extrabold mt-0.5">
            <span className="text-dl-gold">₦</span>1,024
          </div>
        </div>
      </div>

      {/* Phone body */}
      <div className="animate-float-phone relative w-[320px] h-[660px] rounded-[44px] bg-black p-[5px] shadow-[0_50px_100px_rgba(0,0,0,0.5),0_0_0_1.5px_#1a1a1a,inset_0_0_0_1px_rgba(255,255,255,0.06)]">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[130px] h-6 bg-black rounded-b-[18px] z-20" />

        {/* Screen */}
        <div className="absolute inset-[5px] rounded-[39px] overflow-hidden bg-[#0D0D0D] flex flex-col">
          <div className="flex flex-col gap-3 p-[38px_16px_16px] h-full overflow-hidden">
            {/* App header */}
            <div className="flex justify-between items-start">
              <div>
                <div className="text-[9px] font-mono text-white/42 tracking-[1px] uppercase">Mon · May 19</div>
                <div className="text-[17px] font-bold tracking-tight mt-0.5">
                  Good morning,<br />
                  <span className="text-dl-green">Isaiah</span> 👋
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[rgba(255,204,0,0.12)] border border-[rgba(255,204,0,0.35)]">
                <span className="w-[22px] h-[22px] rounded-[7px] flex items-center justify-center font-extrabold text-[11px] text-[#1A1300] bg-[#FFCC00]">M</span>
                <span className="text-[11px] font-bold text-[#FFCC00]">MTN</span>
              </div>
            </div>

            {/* Ring */}
            <div className="flex justify-center py-1">
              <svg width="172" height="172" viewBox="0 0 172 172">
                <defs>
                  <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00E676" />
                    <stop offset="80%" stopColor="#0BC97A" />
                    <stop offset="100%" stopColor="#FFD700" />
                  </linearGradient>
                </defs>
                <circle cx="86" cy="86" r="74" stroke="#1A1F1A" strokeWidth="14" fill="none" />
                <circle
                  cx="86" cy="86" r="74"
                  stroke="url(#ring-grad)"
                  strokeWidth="14"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="149 465"
                  transform="rotate(-90 86 86)"
                  style={{ filter: "drop-shadow(0 0 8px rgba(0,230,118,0.4))" }}
                />
                <text x="86" y="74" textAnchor="middle" fill="rgba(255,255,255,0.42)" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1.5">REMAINING</text>
                <text x="86" y="98" textAnchor="middle" fill="#fff" fontFamily="Poppins, sans-serif" fontSize="34" fontWeight="800" letterSpacing="-1.5">6.8<tspan fontSize="14" fill="rgba(255,255,255,0.66)"> GB</tspan></text>
                <text x="86" y="116" textAnchor="middle" fill="rgba(255,255,255,0.42)" fontFamily="JetBrains Mono, monospace" fontSize="8">of 10 GB · 32% used</text>
              </svg>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { label: "Today", val: "420", unit: " MB", delta: "↑ 12%", color: "#00E676" },
                { label: "Week", val: "2.1", unit: " GB", delta: "↓ 8%", color: "#0BC97A" },
                { label: "Month", val: "3.2", unit: " GB", delta: "on pace", color: "#FFD700" },
              ].map((s) => (
                <div key={s.label} className="bg-[#141929] border border-[#1E2A45] rounded-xl p-2.5">
                  <div className="text-[8px] font-mono text-white/42 tracking-wide uppercase">{s.label}</div>
                  <div className="text-base font-extrabold mt-1 tracking-tight">
                    {s.val}<small className="text-[9px] text-white/42 font-semibold">{s.unit}</small>
                  </div>
                  <div className="text-[8px] font-mono mt-0.5 font-bold" style={{ color: s.color }}>{s.delta}</div>
                </div>
              ))}
            </div>

            {/* Activity card */}
            <div className="bg-[#141929] border border-[#1E2A45] rounded-[14px] overflow-hidden">
              <div className="flex justify-between items-center px-3 py-2.5">
                <span className="text-xs font-bold">Recent activity</span>
                <span className="text-[10px] text-dl-green font-bold">See all</span>
              </div>
              {[
                { icon: "Y", color: "#FF0000", name: "YouTube", sub: "184 MB · now", val: "184 MB" },
                { icon: "W", color: "#25D366", name: "WhatsApp", sub: "62 MB · 8 min", val: "62 MB" },
                { icon: "I", color: "#E1306C", name: "Instagram", sub: "54 MB · 14 min", val: "54 MB" },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-2.5 px-3 py-2 border-t border-[#1E2A45]">
                  <span
                    className="w-[26px] h-[26px] rounded-lg flex items-center justify-center font-bold text-xs text-white shrink-0"
                    style={{ background: row.color }}
                  >
                    {row.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-semibold">{row.name}</div>
                    <div className="text-[9px] text-white/42 mt-px">{row.sub}</div>
                  </div>
                  <span className="text-[11px] font-bold font-mono">{row.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <header className="relative pt-40 pb-20 overflow-hidden" id="top">
      {/* Background glows */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: -200, right: -100, width: 700, height: 700,
          background: "radial-gradient(circle, rgba(0,230,118,0.14), transparent 62%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          bottom: -300, left: -200, width: 600, height: 600,
          background: "radial-gradient(circle, rgba(255,215,0,0.08), transparent 62%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">

          {/* Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.2, 0.7, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 h-8 px-3.5 pr-3.5 rounded-full bg-[rgba(0,230,118,0.1)] border border-[rgba(0,230,118,0.3)] text-xs font-semibold text-dl-green">
                <span className="w-[7px] h-[7px] rounded-full bg-dl-green animate-pulse-dot shadow-[0_0_0_3px_rgba(0,230,118,0.2)]" />
                Now live on Android &amp; iOS
              </span>
            </motion.div>

            <motion.h1
              className="text-[clamp(44px,6vw,68px)] font-extrabold tracking-[-3px] leading-[1.02] mt-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.3, 1], delay: 0.1 }}
            >
              Your data,
              <br />
              <span className="text-dl-green">fully accounted for.</span>
            </motion.h1>

            <motion.p
              className="text-[18px] text-white/66 leading-relaxed mt-5 max-w-[480px]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.3, 1], delay: 0.18 }}
            >
              That 5GB you bought yesterday — gone by lunch? DataLens tracks every megabyte across MTN, Airtel, Glo and 9mobile, so you always know exactly where it went.
            </motion.p>

            <motion.div
              className="flex items-center gap-3.5 mt-8 flex-wrap"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.3, 1], delay: 0.26 }}
            >
              <a
                href="#download"
                className="inline-flex items-center justify-center h-[58px] px-8 rounded-full bg-dl-green text-[#06140C] text-[17px] font-bold cursor-pointer transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,230,118,0.42)] shadow-[0_8px_24px_rgba(0,230,118,0.28),inset_0_1px_0_rgba(255,255,255,0.3)]"
              >
                Start tracking free
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center h-[58px] px-8 rounded-full bg-[rgba(255,255,255,0.04)] border border-[#2A3656] text-white text-[17px] font-bold cursor-pointer transition-all duration-150 hover:bg-[rgba(255,255,255,0.08)] hover:border-dl-green"
              >
                See how it works
              </a>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 mt-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <span className="text-dl-gold text-[15px] tracking-[2px]">★★★★★</span>
              <span className="text-sm text-white/42">
                <strong className="text-white">4.8</strong> from{" "}
                <strong className="text-white">12,000+</strong> Nigerians who stopped guessing
              </span>
            </motion.div>
          </div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.2, 0.7, 0.3, 1], delay: 0.2 }}
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </header>
  );
}
