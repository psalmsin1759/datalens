import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { FadeIn } from "@/components/ui/FadeIn";

const features = [
  {
    wide: true,
    color: "#00E676",
    glowBg: "rgba(0,230,118,0.18)",
    iconBg: "rgba(0,230,118,0.12)",
    iconBorder: "rgba(0,230,118,0.3)",
    title: "Every megabyte, accounted for",
    desc: "See real-time usage by app, by site, and by hour. DataLens watches the size of your traffic — never the content — and shows you exactly which apps are draining your bundle. The receipts you always wished your telco gave you.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    wide: false,
    color: "#FFD700",
    iconBg: "rgba(255,215,0,0.12)",
    iconBorder: "rgba(255,215,0,0.3)",
    title: "Buy data in seconds",
    desc: "Top up any network right inside the app — card, transfer, USSD or wallet. Tracking starts the instant it lands.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
      </svg>
    ),
  },
  {
    wide: false,
    color: "#5BC0EB",
    iconBg: "rgba(91,192,235,0.12)",
    iconBorder: "rgba(91,192,235,0.3)",
    title: "Receipts for every purchase",
    desc: "Full history of every bundle — what you paid, how long it lasted, and where it went. Settle every “my data finished sharp-sharp” argument.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5BC0EB" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 3v18l3-2 2 2 2-2 2 2 2-2 3 2V3H5z" />
        <path d="M9 8h6M9 12h6" />
      </svg>
    ),
  },
  {
    wide: false,
    color: "#FFB800",
    iconBg: "rgba(255,184,0,0.12)",
    iconBorder: "rgba(255,184,0,0.3)",
    title: "Alerts that have your back",
    desc: "A friendly tap at 50%, 75%, and when you're almost out. No more nasty surprises mid-call.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFB800" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8a6 6 0 1112 0c0 5 2 6 2 7H4c0-1 2-2 2-7z" />
        <path d="M10 21a2 2 0 004 0" />
      </svg>
    ),
  },
  {
    wide: false,
    color: "#7B61FF",
    iconBg: "rgba(123,97,255,0.12)",
    iconBorder: "rgba(123,97,255,0.3)",
    title: "Private by design",
    desc: "Everything stays on your phone. We never sell your data and we can't read your traffic. We track your data — not you.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7B61FF" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section className="py-[110px]" id="features">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn className="max-w-[680px] mx-auto text-center mb-16">
          <span className="font-mono text-xs font-bold tracking-[2.5px] uppercase text-dl-green">
            Everything you need
          </span>
          <h2 className="text-[clamp(30px,4vw,46px)] font-extrabold tracking-tight leading-[1.08] mt-4">
            One app to <span className="text-dl-green">see, buy, and control</span> your data
          </h2>
          <p className="text-[18px] text-white/66 mt-4 leading-relaxed">
            Built for the way Nigerians actually use data — across networks, on a budget, with full transparency.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5" staggerDelay={0.08}>
          {features.map((f, i) => (
            <StaggerItem key={i} className={f.wide ? "sm:col-span-2" : ""}>
              <div
                className="relative overflow-hidden rounded-[20px] bg-dl-surface border border-dl-border p-8 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:border-dl-border-2 h-full"
              >
                {f.wide && f.glowBg && (
                  <div
                    className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] rounded-full pointer-events-none"
                    style={{ background: f.glowBg, filter: "blur(30px)" }}
                  />
                )}
                <div
                  className="w-[54px] h-[54px] rounded-[15px] flex items-center justify-center mb-[22px]"
                  style={{ background: f.iconBg, border: `1px solid ${f.iconBorder}` }}
                >
                  {f.icon}
                </div>
                <h3 className="text-[22px] font-bold tracking-tight">{f.title}</h3>
                <p className="text-[15px] text-white/66 mt-2.5 leading-relaxed max-w-[460px]">{f.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
