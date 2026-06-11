"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import gsap from "gsap";

interface StatProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
  numeric?: number;
  isGreen?: boolean;
}

function StatCounter({ value, label, prefix, suffix, numeric, isGreen }: StatProps) {
  const numRef = useRef<HTMLSpanElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current || !numeric || !numRef.current) return;
    hasAnimated.current = true;

    gsap.fromTo(
      numRef.current,
      { textContent: 0 },
      {
        textContent: numeric,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: Number.isInteger(numeric) ? 1 : 0.1 },
        onUpdate() {
          if (!numRef.current) return;
          const v = parseFloat(numRef.current.textContent || "0");
          if (numeric >= 1000) {
            numRef.current.textContent = v.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          } else if (Number.isInteger(numeric)) {
            numRef.current.textContent = Math.round(v).toString();
          } else {
            numRef.current.textContent = v.toFixed(1);
          }
        },
      }
    );
  }, [inView, numeric]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-[clamp(44px,6vw,76px)] font-bold tracking-[-0.03em] leading-none">
        {prefix && (
          <span className={isGreen ? "text-dl-green" : "text-dl-gold"}>{prefix}</span>
        )}
        {numeric !== undefined ? (
          <span ref={numRef}>0</span>
        ) : (
          <span className={isGreen ? "text-dl-green" : ""}>{value}</span>
        )}
        {suffix && <span className={isGreen ? "text-dl-green" : ""}>{suffix}</span>}
      </div>
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/45 mt-4">{label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section
      className="py-24 md:py-28 border-t border-b relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0A2C1A, #0F3D24)",
        borderColor: "rgba(0,230,118,0.2)",
      }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,230,118,0.12), transparent 65%)", filter: "blur(50px)" }}
      />
      <div className="max-w-[1200px] mx-auto px-6 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 md:divide-x md:divide-white/[0.08]">
          <StatCounter
            value="12k+"
            label="Nigerians tracking daily"
            numeric={12000}
            suffix="+"
            isGreen
          />
          <StatCounter
            value="4"
            label="Networks supported"
            numeric={4}
          />
          <StatCounter
            value="₦2.1M"
            label="Data value tracked"
            prefix="₦"
            numeric={2.1}
            suffix="M"
          />
          <StatCounter
            value="4.8★"
            label="Average app rating"
            numeric={4.8}
            suffix="★"
          />
        </div>
      </div>
    </section>
  );
}
