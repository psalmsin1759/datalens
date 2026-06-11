import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DataLensLogo } from "@/components/ui/DataLensLogo";

const buyFeatures = [
  {
    title: "All four networks, one checkout",
    desc: "MTN, Airtel, Glo and 9mobile bundles side by side, with cost-per-MB shown.",
  },
  {
    title: "Pay however suits you",
    desc: "Card, bank transfer, USSD, or top up your wallet once and buy in a tap.",
  },
  {
    title: "Secured by Paystack",
    desc: "Bank-grade security with refunds in 30 minutes if anything goes wrong.",
  },
];

function CheckIcon() {
  return (
    <span className="w-[26px] h-[26px] rounded-full flex items-center justify-center shrink-0 bg-[rgba(0,230,118,0.12)] border border-[rgba(0,230,118,0.35)]">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2 6l3 3 5-5" stroke="#00E676" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function ReceiptCard() {
  return (
    <div className="relative max-w-[400px] mx-auto">
      {/* Glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-[40px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,230,118,0.1), transparent 70%)", filter: "blur(30px)" }}
      />
      <div
        className="relative rounded-[28px] border border-white/[0.09] p-7 backdrop-blur-xl"
        style={{
          background: "linear-gradient(160deg, rgba(26,32,48,0.9), rgba(13,13,13,0.95))",
          boxShadow: "0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <DataLensLogo size={22} />
            <span className="font-display text-sm font-bold">DataLens · Receipt</span>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full font-mono text-[11px] font-extrabold tracking-wide text-[#06140C] bg-dl-green shadow-[0_0_20px_rgba(0,230,118,0.4)]">
            PAID
          </span>
        </div>

        {/* Bundle info */}
        <div className="flex items-center gap-3 mt-5">
          <span className="w-11 h-11 rounded-[13px] flex items-center justify-center font-extrabold text-xl text-[#1A1300] bg-[#FFCC00]">
            M
          </span>
          <div>
            <div className="font-display text-[19px] font-bold tracking-tight">10 GB · MTN</div>
            <div className="text-xs text-white/42 mt-0.5">30-day validity · to 0803 456 7890</div>
          </div>
        </div>

        {/* Dashed divider */}
        <div className="relative my-5">
          <div className="border-t-[1.5px] border-dashed border-white/15" />
          <div className="absolute top-1/2 -translate-y-1/2 -left-9 w-5 h-5 rounded-full bg-dl-bg" />
          <div className="absolute top-1/2 -translate-y-1/2 -right-9 w-5 h-5 rounded-full bg-dl-bg" />
        </div>

        {/* Line items */}
        {[
          { label: "Bundle", value: "₦3,200", valueColor: "white" },
          { label: "Service fee", value: "Free", valueColor: "#00E676" },
          { label: "VAT (7.5%)", value: "₦240", valueColor: "white" },
          { label: "Reference", value: "DL-MAY19-A78F2C", valueColor: "white", mono: true, small: true },
        ].map((row) => (
          <div key={row.label} className="flex justify-between items-baseline py-1.5">
            <span className="text-[11px] text-white/42 font-mono uppercase tracking-wide">{row.label}</span>
            <span
              className={`font-semibold ${row.small ? "text-xs" : "text-sm"} ${row.mono ? "font-mono" : ""}`}
              style={{ color: row.valueColor }}
            >
              {row.value}
            </span>
          </div>
        ))}

        {/* Total */}
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/[0.08]">
          <span className="text-sm text-white/66 font-semibold">Total paid</span>
          <span className="font-display text-[28px] font-bold">
            <span className="text-dl-gold">₦</span>3,440
          </span>
        </div>

        {/* Live badge */}
        <div
          className="flex items-center gap-2.5 mt-4 p-3 rounded-xl"
          style={{
            background: "rgba(0,230,118,0.1)",
            border: "1px solid rgba(0,230,118,0.35)",
          }}
        >
          <span
            className="w-[7px] h-[7px] rounded-full bg-dl-green animate-pulse"
            style={{ boxShadow: "0 0 0 3px rgba(0,230,118,0.2)" }}
          />
          <span className="text-xs font-bold">Tracking started · 0.0 MB used</span>
          <span className="ml-auto text-[11px] text-dl-green font-mono font-extrabold">LIVE</span>
        </div>
      </div>
    </div>
  );
}

export function BuyInApp() {
  return (
    <section className="py-24 md:py-32" id="buy">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">

          <div>
            <SectionHeading
              index="07"
              eyebrow="Buy in-app"
              accent="gold"
              align="left"
              segments={[
                { text: "Top up any network," },
                { text: "pay your way", className: "text-dl-green", break: true },
              ]}
              sub="No switching apps, no airtime-to-data wahala. Buy data or airtime for any number, pay with card, bank transfer, USSD or your DataLens wallet — and tracking begins the second it lands."
            />

            <FadeIn delay={0.2}>
              <div className="flex flex-col gap-5 mt-9">
                {buyFeatures.map((f) => (
                  <div key={f.title} className="flex gap-4 items-start">
                    <CheckIcon />
                    <div>
                      <div className="text-base font-bold">{f.title}</div>
                      <div className="text-sm text-white/55 mt-0.5 leading-relaxed">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="left" delay={0.1}>
            <ReceiptCard />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
