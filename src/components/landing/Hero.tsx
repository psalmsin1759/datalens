"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { TextReveal } from "@/components/ui/FadeIn";
import { Magnetic } from "@/components/ui/Magnetic";

function PhoneMockup() {
  return (
    <div className="relative flex justify-center" style={{ transformStyle: "preserve-3d" }}>
      {/* Glow halo behind phone */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,230,118,0.16), rgba(255,215,0,0.05) 45%, transparent 68%)",
          filter: "blur(30px)",
        }}
      />

      {/* Floating stat card 1 */}
      <div className="animate-float-card-1 absolute z-10" style={{ top: 80, left: -56, transform: "translateZ(60px)" }}>
        <div className="rounded-2xl px-3.5 py-3 border border-white/10 bg-[rgba(10,12,16,0.78)] backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <div className="text-[9px] font-mono text-white/40 uppercase tracking-[0.14em]">Today’s usage</div>
          <div className="text-[17px] font-display font-bold mt-0.5 text-dl-green">420 MB</div>
        </div>
      </div>

      {/* Floating stat card 2 */}
      <div className="animate-float-card-2 absolute z-10" style={{ bottom: 110, right: -52, transform: "translateZ(80px)" }}>
        <div className="rounded-2xl px-3.5 py-3 border border-white/10 bg-[rgba(10,12,16,0.78)] backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <div className="text-[9px] font-mono text-white/40 uppercase tracking-[0.14em]">Value used</div>
          <div className="text-[17px] font-display font-bold mt-0.5">
            <span className="text-dl-gold">₦</span>1,024
          </div>
        </div>
      </div>

      {/* Phone body */}
      <div className="animate-float-phone relative w-[320px] h-[660px] rounded-[44px] bg-black p-[5px] shadow-[0_50px_100px_rgba(0,0,0,0.6),0_0_0_1.5px_#1a1a1a,inset_0_0_0_1px_rgba(255,255,255,0.06)]">
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

const avatars = [
  { letter: "C", grad: "linear-gradient(135deg,#00E676,#0BC97A)" },
  { letter: "A", grad: "linear-gradient(135deg,#FFD700,#C9A800)" },
  { letter: "T", grad: "linear-gradient(135deg,#5BC0EB,#3a9bc4)" },
  { letter: "N", grad: "linear-gradient(135deg,#FF8A65,#E64A19)" },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRX = useSpring(rotateX, { stiffness: 100, damping: 18 });
  const springRY = useSpring(rotateY, { stiffness: 100, damping: 18 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <header
      ref={sectionRef}
      className="relative pt-44 pb-24 overflow-hidden"
      id="top"
      onMouseMove={(e) => {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (!rect) return;
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        rotateY.set(px * 10);
        rotateX.set(-py * 7);
      }}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
    >
      {/* Blueprint grid */}
      <div aria-hidden="true" className="absolute inset-0 bg-grid mask-fade-radial pointer-events-none" />

      {/* Aurora blobs */}
      <div
        aria-hidden="true"
        className="animate-aurora absolute pointer-events-none rounded-full"
        style={{
          top: -260, right: -140, width: 760, height: 760,
          background: "radial-gradient(circle, rgba(0,230,118,0.13), transparent 62%)",
          filter: "blur(48px)",
        }}
      />
      <div
        aria-hidden="true"
        className="animate-aurora absolute pointer-events-none rounded-full"
        style={{
          bottom: -320, left: -220, width: 640, height: 640,
          background: "radial-gradient(circle, rgba(255,215,0,0.07), transparent 62%)",
          filter: "blur(48px)",
          animationDelay: "-9s",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">

          {/* Copy */}
          <motion.div style={{ y: copyY }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.2, 0.7, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2.5 h-9 px-4 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-xs font-medium text-white/80">
                <span className="w-[7px] h-[7px] rounded-full bg-dl-green animate-pulse-dot shadow-[0_0_0_3px_rgba(0,230,118,0.2)]" />
                Now live on Android &amp; iOS
                <span className="font-mono text-[10px] text-dl-green tracking-[0.18em] uppercase">v2.0</span>
              </span>
            </motion.div>

            <h1 className="font-display text-[clamp(46px,7vw,84px)] font-bold tracking-[-0.04em] leading-[0.98] mt-7">
              <TextReveal
                delay={0.1}
                stagger={0.07}
                segments={[
                  { text: "Your data," },
                  { text: "fully accounted", className: "text-dl-green", break: true },
                  { text: "for." },
                ]}
              />
            </h1>

            <motion.p
              className="text-[17px] md:text-[18px] text-white/55 leading-relaxed mt-6 max-w-[480px]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.3, 1], delay: 0.45 }}
            >
              That 5GB you bought yesterday — gone by lunch? DataLens tracks every megabyte across MTN, Airtel, Glo and 9mobile, so you always know exactly where it went.
            </motion.p>

            <motion.div
              className="flex items-center gap-4 mt-9 flex-wrap"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.3, 1], delay: 0.55 }}
            >
              <Magnetic>
                <a
                  href="#download"
                  className="group relative inline-flex items-center justify-center gap-2.5 h-[56px] px-8 rounded-full bg-dl-green text-[#06140C] text-base font-bold cursor-pointer overflow-hidden transition-shadow duration-200 shadow-[0_8px_24px_rgba(0,230,118,0.28),inset_0_1px_0_rgba(255,255,255,0.3)] hover:shadow-[0_14px_40px_rgba(0,230,118,0.45)]"
                >
                  Start tracking free
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="transition-transform duration-200 group-hover:translate-x-1">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#how"
                  className="inline-flex items-center justify-center h-[56px] px-8 rounded-full bg-white/[0.04] border border-white/12 backdrop-blur-md text-white text-base font-semibold cursor-pointer transition-all duration-200 hover:bg-white/[0.08] hover:border-dl-green/60"
                >
                  See how it works
                </a>
              </Magnetic>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 mt-9"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <div className="flex -space-x-2.5">
                {avatars.map((a) => (
                  <span
                    key={a.letter}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold text-[#06140C] ring-2 ring-dl-bg"
                    style={{ background: a.grad }}
                  >
                    {a.letter}
                  </span>
                ))}
              </div>
              <span className="text-sm text-white/45 leading-snug">
                <span className="text-dl-gold tracking-[0.1em]">★★★★★</span>{" "}
                <strong className="text-white">4.8</strong> from{" "}
                <strong className="text-white">12,000+</strong> Nigerians who stopped guessing
              </span>
            </motion.div>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            style={{ y: phoneY, perspective: 1200 }}
          >
            <motion.div style={{ rotateX: springRX, rotateY: springRY, transformStyle: "preserve-3d" }}>
              <PhoneMockup />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
