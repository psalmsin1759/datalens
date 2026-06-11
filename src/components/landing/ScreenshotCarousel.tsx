"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, animate } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ITEM_W = 220;
const GAP = 32;
const SLOT = ITEM_W + GAP;

const screens = [
  { label: "Onboarding",               caption: "Get started in seconds",         color: "#00E676", src: "/images/appscreens/1.png"  },
  { label: "Dashboard",                caption: "Every MB, identified",            color: "#5BC0EB", src: "/images/appscreens/2.png"  },
  { label: "Buy & Track / Track only", caption: "Choose how you stay in control",  color: "#FFD700", src: "/images/appscreens/3.png"  },
  { label: "Select Data Plan",         caption: "Pick the plan that fits",         color: "#00E676", src: "/images/appscreens/4.png"  },
  { label: "Buy Data",                 caption: "Top up without leaving the app",  color: "#FFB800", src: "/images/appscreens/5.png"  },
  { label: "Confirmation Purchase",    caption: "Your purchase, confirmed instantly", color: "#0BC97A", src: "/images/appscreens/6.png"  },
  { label: "Track Usage",              caption: "See exactly where data goes",     color: "#FFD700", src: "/images/appscreens/7.png"  },
  { label: "Active Tracking",          caption: "Live breakdown by app",           color: "#5BC0EB", src: "/images/appscreens/8.png"  },
  { label: "History",                  caption: "Your full usage history",         color: "#FFB800", src: "/images/appscreens/9.png"  },
  { label: "Email Report",             caption: "Usage insights in your inbox",   color: "#00E676", src: "/images/appscreens/10.png" },
];

const getTarget = (i: number) => ((screens.length - 1) / 2 - i) * SLOT;

function PhoneFrame({ color, src, label, isActive }: { color: string; src: string; label: string; isActive: boolean }) {
  return (
    <div
      className="relative w-[220px] h-[440px] rounded-[32px] bg-black flex-shrink-0 select-none transition-shadow duration-300"
      style={{
        boxShadow: isActive
          ? `0 40px 80px rgba(0,0,0,0.55), 0 0 0 1px #1a1a1a, 0 0 0 3px ${color}55, 0 0 60px ${color}2e`
          : `0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px #1a1a1a, 0 0 0 3px ${color}22`,
        padding: "4px",
      }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-b-xl z-20" />
      <div className="absolute inset-[4px] rounded-[28px] overflow-hidden bg-[#0D0D0D]">
        <Image
          src={src}
          alt={label}
          fill
          className="object-cover object-top"
          sizes="220px"
          draggable={false}
        />
      </div>
    </div>
  );
}

export function ScreenshotCarousel() {
  const [active, setActive] = useState(0);
  const x = useMotionValue(getTarget(0));
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const activeRef = useRef(0);

  const goTo = (i: number) => {
    activeRef.current = i;
    setActive(i);
    animate(x, getTarget(i), { duration: 0.5, ease: [0.2, 0.7, 0.3, 1] });
  };

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      goTo((activeRef.current + 1) % screens.length);
    }, 3000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="screens">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,230,118,0.06), transparent 65%)", filter: "blur(50px)" }}
      />
      <div className="max-w-[1200px] mx-auto px-6 relative">
        <SectionHeading
          index="05"
          eyebrow="The app"
          segments={[
            { text: "Every screen," },
            { text: "built for clarity", className: "text-dl-green", break: true },
          ]}
          sub="Tap a screen to preview it. Download to see it live on your phone."
          className="mb-14"
        />

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
            style={{ background: "linear-gradient(to right, #0D0D0D, transparent)" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
            style={{ background: "linear-gradient(to left, #0D0D0D, transparent)" }}
          />

          <motion.div
            className="flex gap-8 justify-center py-8 cursor-grab active:cursor-grabbing"
            style={{ x }}
            drag="x"
            dragMomentum={false}
            dragElastic={0.12}
            onDragStart={() => { if (timerRef.current) clearInterval(timerRef.current); }}
            onDragEnd={(_, info) => {
              const current = activeRef.current;
              const next =
                info.offset.x < -(SLOT / 2) ? Math.min(current + 1, screens.length - 1)
                : info.offset.x > (SLOT / 2)  ? Math.max(current - 1, 0)
                : current;
              goTo(next);
              startTimer();
            }}
          >
            {screens.map((s, i) => {
              const isActive = i === active;
              return (
                <motion.div
                  key={s.label}
                  animate={{
                    scale: isActive ? 1 : 0.86,
                    opacity: isActive ? 1 : 0.4,
                    y: isActive ? 0 : 24,
                  }}
                  transition={{ duration: 0.35, ease: [0.2, 0.7, 0.3, 1] }}
                  onClick={() => { goTo(i); startTimer(); }}
                  className="cursor-pointer flex flex-col items-center gap-5"
                >
                  <PhoneFrame color={s.color} src={s.src} label={s.label} isActive={isActive} />
                  <div className="text-center">
                    <div
                      className="font-display text-sm font-bold transition-colors duration-200"
                      style={{ color: isActive ? s.color : "rgba(255,255,255,0.4)" }}
                    >
                      {s.label}
                    </div>
                    <div className="text-xs text-white/30 mt-1">{s.caption}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Indicators */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <span className="font-mono text-[11px] text-white/30 tracking-[0.2em]">
            {String(active + 1).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            {screens.map((s, i) => (
              <button
                key={i}
                onClick={() => { goTo(i); startTimer(); }}
                aria-label={`Go to screen ${i + 1}: ${s.label}`}
                className="transition-all duration-200 rounded-full cursor-pointer"
                style={{
                  width: active === i ? 24 : 6,
                  height: 6,
                  background: active === i ? s.color : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
          <span className="font-mono text-[11px] text-white/30 tracking-[0.2em]">
            {String(screens.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
