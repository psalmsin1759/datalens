import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const beforeItems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF4444" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
      </svg>
    ),
    text: "Dial *323# and squint at a balance that just says '2.1GB remaining'",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF4444" strokeWidth="2" strokeLinecap="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><path d="M12 9v4M12 17h.01"/>
      </svg>
    ),
    text: "Data finishes in 2 days. No idea which app caused it. Blame the telco.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF4444" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/><path d="M4.93 4.93l14.14 14.14"/>
      </svg>
    ),
    text: "Mid-call. Data finished. No warning. Meeting ruined.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF4444" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    text: "Pay ₦5,000 for 10GB. It lasts 8 days. No receipt. No explanation.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF4444" strokeWidth="2" strokeLinecap="round">
        <path d="M18 6L6 18M6 6l12 12"/>
      </svg>
    ),
    text: "Switch between 4 apps to top up on different networks. Wahala.",
  },
];

const afterItems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="2" strokeLinecap="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    text: "Live dashboard: green ring, exact GB left, burn rate, days remaining.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="2" strokeLinecap="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    text: "Per-app breakdown: YouTube 1.8GB, WhatsApp 400MB, Instagram 600MB.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="2" strokeLinecap="round">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/>
      </svg>
    ),
    text: "Alert at 75%: tap to top up before your data dies mid-submission.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    text: "Receipt: ₦5,000 · 10GB MTN · lasted 12 days · ref DL-A78F2C.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="2" strokeLinecap="round">
        <path d="M13 2L3 14h9l-1 8 9-12h-7l1-8z"/>
      </svg>
    ),
    text: "Buy for MTN, Airtel, Glo or 9mobile — one checkout, instant tracking.",
  },
];

export function BeforeAfter() {
  return (
    <section className="py-[110px] bg-dl-bg-deep">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn className="max-w-[680px] mx-auto text-center mb-16">
          <span className="font-mono text-xs font-bold tracking-[2.5px] uppercase text-dl-green">
            Before &amp; after
          </span>
          <h2 className="text-[clamp(30px,4vw,46px)] font-extrabold tracking-tight leading-[1.08] mt-4">
            Life before DataLens.<br />
            <span className="text-dl-green">Life after.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* BEFORE */}
          <FadeIn direction="right">
            <div className="rounded-3xl border border-dl-border p-8 h-full relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #0D0D0D, #141929)" }}>
              {/* Dim red glow */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(255,68,68,0.08), transparent 70%)", filter: "blur(20px)" }} />

              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(255,68,68,0.12)", border: "1px solid rgba(255,68,68,0.3)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF4444" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/>
                  </svg>
                </span>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-white/42 mb-0.5">Before DataLens</div>
                  <div className="text-lg font-bold text-white/60">Flying blind</div>
                </div>
              </div>

              <StaggerContainer className="space-y-4" staggerDelay={0.06}>
                {beforeItems.map((item, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-3.5 p-4 rounded-xl"
                      style={{ background: "rgba(255,68,68,0.04)", border: "1px solid rgba(255,68,68,0.1)" }}>
                      <span className="mt-px shrink-0">{item.icon}</span>
                      <p className="text-[14px] text-white/50 leading-relaxed">{item.text}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          {/* AFTER */}
          <FadeIn direction="left" delay={0.1}>
            <div className="rounded-3xl border p-8 h-full relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0A2C1A, #0F3D24, #141929)",
                borderColor: "rgba(0,230,118,0.3)",
              }}>
              {/* Green glow */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(0,230,118,0.15), transparent 70%)", filter: "blur(20px)" }} />

              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(0,230,118,0.15)", border: "1px solid rgba(0,230,118,0.35)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="2" strokeLinecap="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </span>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-dl-green/70 mb-0.5">After DataLens</div>
                  <div className="text-lg font-bold text-white">Fully in control</div>
                </div>
              </div>

              <StaggerContainer className="space-y-4" staggerDelay={0.06}>
                {afterItems.map((item, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-3.5 p-4 rounded-xl"
                      style={{ background: "rgba(0,230,118,0.05)", border: "1px solid rgba(0,230,118,0.15)" }}>
                      <span className="mt-px shrink-0">{item.icon}</span>
                      <p className="text-[14px] text-white/80 leading-relaxed">{item.text}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
