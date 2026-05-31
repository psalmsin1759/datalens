"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";

const faqs = [
  {
    q: "Does DataLens drain my battery?",
    a: "No. DataLens uses the same VPN-permission Android grants to VPN apps — it reads packet sizes only, never content. The background service is designed to use under 1% battery per day. Most users never notice it running.",
    tag: "Performance",
  },
  {
    q: "Can DataLens read my messages or browsing history?",
    a: "Absolutely not. DataLens sees only the size of your traffic — the same information your telco sees. It never reads the content of your messages, emails, or web sessions. Everything stays on your device.",
    tag: "Privacy",
  },
  {
    q: "Does it work with dual SIM phones?",
    a: "Yes. DataLens handles dual SIM setups natively. You can track each SIM independently, switch between networks mid-session, and even buy data for either number from a single app.",
    tag: "Compatibility",
  },
  {
    q: "What if I buy data directly from my telco — does DataLens still track it?",
    a: "Yes, two ways. Either log it manually in seconds (size, network, cost) and DataLens starts tracking immediately, or buy it inside DataLens and tracking starts the instant the bundle activates.",
    tag: "Purchases",
  },
  {
    q: "How accurate is the usage breakdown?",
    a: "DataLens measures actual bytes passing through your device's network interface. It's as accurate as the OS allows — typically within 1-3% of your telco's own measurement. Differences beyond that are usually telco overhead charges.",
    tag: "Accuracy",
  },
  {
    q: "Is the app free?",
    a: "DataLens is free to download and use. Buying data through the app is optional — you pay exactly the bundle price with no markup. We make money on a small service fee shown transparently at checkout.",
    tag: "Pricing",
  },
  {
    q: "What happens when my data finishes?",
    a: "You get a detailed receipt: total bought, where every MB went, and which apps used the most. It's the breakdown your telco never gave you. You can also tap to buy a new bundle immediately.",
    tag: "Features",
  },
  {
    q: "Which Android and iOS versions are supported?",
    a: "Android 8.0 (Oreo) and above, and iOS 14 and above. This covers the vast majority of Nigerian phones currently in use.",
    tag: "Compatibility",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-[110px]" id="faq">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn className="max-w-[680px] mx-auto text-center mb-16">
          <span className="font-mono text-xs font-bold tracking-[2.5px] uppercase text-dl-green">
            Got questions?
          </span>
          <h2 className="text-[clamp(30px,4vw,46px)] font-extrabold tracking-tight leading-[1.08] mt-4">
            Everything you need to know
          </h2>
          <p className="text-[18px] text-white/66 mt-4 leading-relaxed">
            The answers Nigerians actually ask before downloading.
          </p>
        </FadeIn>

        <div className="max-w-[860px] mx-auto space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <FadeIn key={i} delay={i * 0.04}>
                <div
                  className="rounded-2xl border transition-all duration-200 overflow-hidden"
                  style={{
                    background: isOpen
                      ? "linear-gradient(135deg,rgba(0,230,118,0.06),rgba(20,25,41,0.95))"
                      : "#141929",
                    borderColor: isOpen
                      ? "rgba(0,230,118,0.35)"
                      : "#1E2A45",
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center gap-5 px-7 py-5 text-left cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    {/* Toggle icon */}
                    <span
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-200"
                      style={{
                        background: isOpen
                          ? "rgba(0,230,118,0.15)"
                          : "rgba(255,255,255,0.05)",
                        border: isOpen
                          ? "1px solid rgba(0,230,118,0.4)"
                          : "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <motion.svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <path d="M7 1v12M1 7h12" stroke={isOpen ? "#00E676" : "white"} strokeWidth="1.5" strokeLinecap="round" />
                      </motion.svg>
                    </span>

                    <div className="flex-1 flex items-center gap-3 min-w-0">
                      <span className={`text-base font-semibold leading-snug transition-colors duration-200 ${isOpen ? "text-white" : "text-white/90"}`}>
                        {item.q}
                      </span>
                      <span
                        className="hidden sm:inline-flex shrink-0 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                        style={{
                          background: isOpen ? "rgba(0,230,118,0.12)" : "rgba(255,255,255,0.06)",
                          color: isOpen ? "#00E676" : "rgba(255,255,255,0.42)",
                          border: isOpen ? "1px solid rgba(0,230,118,0.25)" : "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.2, 0.7, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-7 pb-6 pt-1 text-[15px] text-white/66 leading-relaxed pl-[72px]">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* CTA nudge */}
        <FadeIn className="text-center mt-12">
          <p className="text-sm text-white/42">
            Still have questions?{" "}
            <a href="#" className="text-dl-green font-semibold hover:underline cursor-pointer">
              Chat with us
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
