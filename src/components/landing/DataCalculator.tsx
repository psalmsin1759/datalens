"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";

const PROFILES = [
  {
    id: "heavy",
    label: "Heavy streamer",
    desc: "YouTube, TikTok, Instagram daily",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
    mbs: {
      YouTube: 700, TikTok: 500, Instagram: 250, WhatsApp: 80, Chrome: 60, Other: 100,
    },
  },
  {
    id: "balanced",
    label: "Balanced user",
    desc: "Social + work + video calls",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    mbs: {
      YouTube: 300, TikTok: 150, Instagram: 150, WhatsApp: 120, Chrome: 100, Other: 80,
    },
  },
  {
    id: "light",
    label: "Light user",
    desc: "WhatsApp, news, occasional browse",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    mbs: {
      YouTube: 80, TikTok: 40, Instagram: 60, WhatsApp: 150, Chrome: 60, Other: 30,
    },
  },
];

const APP_COLORS: Record<string, string> = {
  YouTube: "#FF0000",
  TikTok: "#010101",
  Instagram: "#E1306C",
  WhatsApp: "#25D366",
  Chrome: "#4285F4",
  Other: "#7B61FF",
};

function formatBytes(mb: number): string {
  if (mb >= 1024) return `${(mb / 1024).toFixed(1)} GB`;
  return `${Math.round(mb)} MB`;
}

function formatCost(naira: number): string {
  return `₦${naira.toLocaleString()}`;
}

export function DataCalculator() {
  const [planGB, setPlanGB] = useState(5);
  const [profileId, setProfileId] = useState("balanced");

  const profile = PROFILES.find((p) => p.id === profileId)!;

  const results = useMemo(() => {
    const planMB = planGB * 1024;
    const totalDailyMB = Object.values(profile.mbs).reduce((a, b) => a + b, 0);
    const daysToFinish = Math.floor(planMB / totalDailyMB);
    const costPerMB = planGB <= 2 ? 0.34 : planGB <= 5 ? 0.29 : planGB <= 10 ? 0.28 : 0.26;
    const costPerDay = Math.round(totalDailyMB * costPerMB);
    const planCost = Math.round(planMB * costPerMB);
    const topCulprit = Object.entries(profile.mbs).sort(([, a], [, b]) => b - a)[0];
    const culpritPct = Math.round((topCulprit[1] / totalDailyMB) * 100);
    const warnDay = Math.floor(daysToFinish * 0.75);

    const breakdown = Object.entries(profile.mbs)
      .sort(([, a], [, b]) => b - a)
      .map(([app, mb]) => ({
        app,
        mb,
        pct: Math.round((mb / totalDailyMB) * 100),
        color: APP_COLORS[app] || "#7B61FF",
      }));

    return { daysToFinish, costPerDay, planCost, topCulprit, culpritPct, breakdown, totalDailyMB, warnDay };
  }, [planGB, profileId, profile]);

  const urgencyColor = results.daysToFinish >= 14 ? "#00E676" : results.daysToFinish >= 7 ? "#FFB800" : "#FF4444";

  return (
    <section className="py-[110px] bg-dl-bg-deep" id="calculator">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn className="max-w-[680px] mx-auto text-center mb-16">
          <span className="font-mono text-xs font-bold tracking-[2.5px] uppercase text-dl-gold">
            Data calculator
          </span>
          <h2 className="text-[clamp(30px,4vw,46px)] font-extrabold tracking-tight leading-[1.08] mt-4">
            How long will your data last?
          </h2>
          <p className="text-[18px] text-white/66 mt-4 leading-relaxed">
            Pick your plan and usage pattern. See exactly what DataLens would show you.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 items-start">

          {/* Controls */}
          <FadeIn direction="right" className="space-y-8">
            {/* Plan size */}
            <div>
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-sm font-mono uppercase tracking-wider text-white/42">Plan size</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={planGB}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="text-2xl font-extrabold"
                    style={{ color: urgencyColor }}
                  >
                    {planGB} GB
                  </motion.span>
                </AnimatePresence>
              </div>
              <input
                type="range"
                min={1}
                max={50}
                value={planGB}
                onChange={(e) => setPlanGB(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #00E676 0%, #00E676 ${(planGB / 50) * 100}%, #1E2A45 ${(planGB / 50) * 100}%, #1E2A45 100%)`,
                }}
              />
              <div className="flex justify-between text-xs text-white/30 mt-2 font-mono">
                <span>1 GB</span>
                <span>10 GB</span>
                <span>25 GB</span>
                <span>50 GB</span>
              </div>
            </div>

            {/* Usage profile */}
            <div>
              <div className="text-sm font-mono uppercase tracking-wider text-white/42 mb-4">How do you use data?</div>
              <div className="space-y-3">
                {PROFILES.map((p) => {
                  const sel = profileId === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setProfileId(p.id)}
                      className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all duration-200 cursor-pointer text-left"
                      style={{
                        background: sel ? "rgba(0,230,118,0.07)" : "rgba(255,255,255,0.02)",
                        borderColor: sel ? "rgba(0,230,118,0.4)" : "#1E2A45",
                      }}
                    >
                      <span
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          background: sel ? "rgba(0,230,118,0.15)" : "rgba(255,255,255,0.05)",
                          color: sel ? "#00E676" : "rgba(255,255,255,0.4)",
                        }}
                      >
                        {p.icon}
                      </span>
                      <div className="flex-1">
                        <div className={`text-sm font-bold ${sel ? "text-white" : "text-white/60"}`}>{p.label}</div>
                        <div className="text-xs text-white/36 mt-0.5">{p.desc}</div>
                      </div>
                      {sel && (
                        <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "#00E676" }}>
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke="#06140C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          {/* Results */}
          <FadeIn direction="left" delay={0.1}>
            <div className="rounded-3xl border p-7 space-y-6"
              style={{ background: "linear-gradient(135deg,#0F3D24,#141929)", borderColor: "rgba(0,230,118,0.25)" }}>

              {/* Headline result */}
              <div className="text-center py-4 px-6 rounded-2xl"
                style={{ background: "rgba(0,0,0,0.3)", border: `1px solid ${urgencyColor}33` }}>
                <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2">Your {planGB}GB lasts</div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${planGB}-${profileId}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="text-5xl font-extrabold tracking-tight"
                    style={{ color: urgencyColor }}
                  >
                    {results.daysToFinish}
                    <span className="text-2xl font-bold text-white/60 ml-2">days</span>
                  </motion.div>
                </AnimatePresence>
                <div className="text-sm text-white/42 mt-2">
                  DataLens would warn you on day{" "}
                  <span className="font-bold" style={{ color: "#FFB800" }}>{results.warnDay}</span>
                </div>
              </div>

              {/* Key metrics */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Plan cost", value: formatCost(results.planCost), sub: `${planGB} GB bundle` },
                  { label: "Daily cost", value: formatCost(results.costPerDay), sub: "based on usage" },
                  { label: "Daily usage", value: formatBytes(results.totalDailyMB), sub: "across all apps" },
                  { label: "Biggest drain", value: results.topCulprit[0], sub: `${results.culpritPct}% of data` },
                ].map((m) => (
                  <div key={m.label} className="p-3 rounded-xl bg-[rgba(0,0,0,0.3)] border border-[#1E2A45]">
                    <div className="text-[10px] font-mono text-white/40 uppercase tracking-wide">{m.label}</div>
                    <div className="text-lg font-extrabold mt-1 tracking-tight">{m.value}</div>
                    <div className="text-[10px] text-white/36 mt-0.5">{m.sub}</div>
                  </div>
                ))}
              </div>

              {/* App breakdown */}
              <div>
                <div className="text-xs font-mono text-white/40 uppercase tracking-wider mb-3">Daily breakdown by app</div>
                <div className="space-y-2.5">
                  {results.breakdown.map((row) => (
                    <div key={row.app} className="flex items-center gap-3">
                      <span
                        className="w-6 h-6 rounded-md flex items-center justify-center text-[9px] font-bold text-white shrink-0"
                        style={{ background: row.color }}
                      >
                        {row.app[0]}
                      </span>
                      <div className="flex-1">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-semibold">{row.app}</span>
                          <span className="font-mono text-white/50">{formatBytes(row.mb)}/day</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-[#1E2A45] overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${row.pct}%` }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            style={{ background: row.color + "cc" }}
                          />
                        </div>
                      </div>
                      <span className="text-[10px] text-white/40 w-8 text-right font-mono">{row.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#download"
                className="w-full flex items-center justify-center gap-2 h-12 rounded-2xl font-bold text-sm text-[#06140C] transition-all duration-150 hover:brightness-110 cursor-pointer"
                style={{ background: "#00E676" }}
              >
                Track my real usage — it's free
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
