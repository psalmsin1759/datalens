import type { Metadata } from "next";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "About — DataLens",
  description:
    "The story behind DataLens — giving every Nigerian full visibility and control over their mobile data.",
};

const values = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Full transparency",
    body: "No hidden counters. No vague 'unlimited' that throttles after 1 GB. Every byte you spend is visible, attributed, and explained.",
    color: "#00E676",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Privacy first",
    body: "We read byte counts, not content. Your messages, calls, and browsing stay private. We will never sell your data.",
    color: "#5BC0EB",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Built for Nigerians",
    body: "MTN, Airtel, Glo, 9mobile — all four major carriers, all Nigerian pricing, in Naira, from Lagos. Not an afterthought, not a port.",
    color: "#FFD700",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Speed matters",
    body: "Lagos moves fast. DataLens updates in real time so your balance, usage, and spending are always current — not yesterday's numbers.",
    color: "#0BC97A",
  },
];

const stats = [
  { value: "12k+", label: "Active users" },
  { value: "4", label: "Carriers supported" },
  { value: "₦2.1M+", label: "Data purchased in-app" },
  { value: "4.8★", label: "App Store rating" },
];

export default function AboutPage() {
  return (
    <>
      <Nav />

      <main className="min-h-screen bg-dl-bg">

        {/* Hero */}
        <div className="relative overflow-hidden pt-36 pb-24 border-b border-dl-border">
          <div
            aria-hidden
            className="pointer-events-none select-none absolute inset-0 flex items-center justify-center text-[clamp(120px,22vw,300px)] font-extrabold tracking-tighter text-white/[0.025] leading-none"
          >
            FBIS
          </div>
          <div className="relative max-w-[900px] mx-auto px-6 text-center">
            <span className="inline-block font-mono text-xs font-bold tracking-[2.5px] uppercase text-dl-green mb-6">
              About DataLens
            </span>
            <h1 className="text-[clamp(36px,5.5vw,72px)] font-extrabold tracking-tight leading-[1.02] mb-7">
              Made for
              <br />
              <span className="text-dl-green">Nigeria.</span>
            </h1>
            <p className="text-[clamp(16px,2vw,20px)] text-white/60 leading-[1.7] max-w-[640px] mx-auto">
              DataLens started with one question: you bought 5 GB — where did it go? We built the app
              we always wished existed.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="border-b border-dl-border bg-dl-bg-deep">
          <div className="max-w-[1200px] mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-[clamp(28px,4vw,48px)] font-extrabold tracking-tight text-dl-green font-mono leading-none mb-2">
                    {value}
                  </div>
                  <div className="text-sm text-white/42 uppercase tracking-wider font-mono">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Origin story */}
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block font-mono text-xs font-bold tracking-[2.5px] uppercase text-dl-green mb-4">
                Origin
              </span>
              <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold tracking-tight leading-[1.1] mb-6">
                The problem is real — and it affects everyone
              </h2>
              <div className="space-y-4 text-[15px] text-white/65 leading-[1.75]">
                <p>
                  Every Nigerian with a smartphone knows the feeling: you top up ₦5,000 of data on a
                  Monday and by Wednesday you&apos;re dialling{" "}
                  <span className="font-mono text-white/80">*323#</span> in confusion, wondering where
                  it all went.
                </p>
                <p>
                  Carriers give you a number — &ldquo;3.2 GB remaining&rdquo; — but no context. Was it
                  YouTube? WhatsApp statuses? A background app update at 2 AM? You&apos;ll never know.
                </p>
                <p>
                  We built DataLens so you always know. Real-time breakdowns by app, by site, by hour.
                  Low-data alerts before you run out. And when you do need more, buy it in the app in
                  under 10 seconds.
                </p>
              </div>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div className="rounded-3xl border border-dl-border bg-dl-surface p-8 space-y-5">
                <div className="text-xs font-mono uppercase tracking-wider text-white/35 mb-2">
                  Before DataLens
                </div>
                {[
                  { icon: "📵", text: "Dial *323# and get a number with no explanation" },
                  { icon: "🤷", text: "Wonder which app ate your data overnight" },
                  { icon: "😰", text: "Run out mid-video-call with no warning" },
                  { icon: "🏃", text: "Open the carrier app, log in, navigate 4 screens to top up" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-start gap-3 text-[14px] text-white/55">
                    <span className="text-lg leading-none mt-0.5">{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}

                <div className="my-2 border-t border-dl-border" />

                <div className="text-xs font-mono uppercase tracking-wider text-dl-green mb-2">
                  With DataLens
                </div>
                {[
                  { icon: "📊", text: "Live breakdown — YouTube used 1.2 GB, WhatsApp 340 MB" },
                  { icon: "🔔", text: "Alert at 20% remaining so you&apos;re never caught off guard" },
                  { icon: "⚡", text: "Buy 1 GB for ₦300 in one tap, delivered in seconds" },
                  { icon: "📈", text: "Weekly spending report so you budget smarter next month" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-start gap-3 text-[14px] text-white/75">
                    <span className="text-lg leading-none mt-0.5">{icon}</span>
                    <span dangerouslySetInnerHTML={{ __html: text }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-dl-bg-deep border-t border-b border-dl-border py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block font-mono text-xs font-bold tracking-[2.5px] uppercase text-dl-green mb-4">
                What we stand for
              </span>
              <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold tracking-tight">
                Our values
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map(({ icon, title, body, color }) => (
                <div
                  key={title}
                  className="p-6 rounded-2xl border border-dl-border bg-dl-surface flex flex-col gap-4"
                >
                  <span
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `${color}15`,
                      border: `1px solid ${color}30`,
                      color,
                    }}
                  >
                    {icon}
                  </span>
                  <div>
                    <div className="text-[15px] font-extrabold tracking-tight mb-2">{title}</div>
                    <p className="text-[13px] text-white/52 leading-[1.65]">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company */}
        <div className="bg-dl-bg-deep border-t border-dl-border py-20">
          <div className="max-w-[900px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block font-mono text-xs font-bold tracking-[2.5px] uppercase text-dl-green mb-4">
                  The company
                </span>
                <h2 className="text-[clamp(24px,3vw,36px)] font-extrabold tracking-tight leading-[1.1] mb-5">
                  FBIS Technologies Limited
                </h2>
                <p className="text-[15px] text-white/60 leading-[1.75]">
                  We are a Nigerian technology company incorporated in Lagos, building mobile-first
                  products for the everyday Nigerian user. DataLens is our flagship product.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Founded", value: "2025" },
                  { label: "Headquarters", value: "7th Floor, Churchgate Tower 2, Victoria Island, Lagos" },
                  { label: "Incorporation", value: "Nigeria (FBIS Technologies Limited)" },
                  { label: "Mission", value: "Your data, fully accounted for" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start gap-4 py-3 border-b border-dl-border/50 last:border-0">
                    <span className="text-xs font-mono uppercase tracking-wider text-white/35 w-32 shrink-0 pt-0.5">
                      {label}
                    </span>
                    <span className="text-[14px] text-white/75 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative overflow-hidden py-24 border-t border-dl-border">
          <div
            aria-hidden
            className="pointer-events-none select-none absolute inset-0 flex items-center justify-center text-[clamp(80px,16vw,220px)] font-extrabold tracking-tighter text-dl-green/[0.04] leading-none"
          >
            DataLens
          </div>
          <div className="relative max-w-[720px] mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dl-green/30 bg-dl-bg-green text-dl-green text-xs font-mono uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-dl-green animate-pulse" />
              Now available in Nigeria
            </div>
            <h2 className="text-[clamp(28px,4vw,52px)] font-extrabold tracking-tight leading-[1.05] mb-5">
              See every byte you spend.
            </h2>
            <p className="text-[16px] text-white/55 mb-10 leading-[1.7]">
              Download DataLens and take back control of your mobile data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="flex items-center justify-center gap-3 h-14 px-8 rounded-2xl font-bold text-[15px] text-[#06140C] cursor-pointer"
                style={{ background: "#00E676", boxShadow: "0 8px 24px rgba(0,230,118,0.3)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-3 h-14 px-8 rounded-2xl font-bold text-[15px] border border-dl-border hover:border-dl-border-2 transition-colors duration-150 cursor-pointer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.34.19.72.24 1.1.14l12.02-6.95-2.54-2.54-10.58 9.35zM20.7 10.06L17.3 8.1l-2.85 2.84 2.85 2.85 3.41-1.97c.97-.56.97-2.2-.01-2.76zM1.55.46C1.22.81 1 1.34 1 2.02v19.96c0 .68.22 1.22.55 1.56l.08.08 11.18-11.18v-.27L1.63.38l-.08.08zM14.28 8.42L3.18.24C2.8.14 2.42.19 2.08.38l12.2 8.04z" />
                </svg>
                Google Play
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
