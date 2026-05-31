import { FadeIn } from "@/components/ui/FadeIn";
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

function ReceiptCard() {
  return (
    <div
      className="relative rounded-3xl border border-dl-border p-7 max-w-[380px] mx-auto"
      style={{
        background: "#141929",
        boxShadow: "0 40px 80px rgba(0,0,0,0.4)",
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2.5">
          <DataLensLogo size={22} />
          <span className="text-sm font-extrabold">DataLens · Receipt</span>
        </div>
        <span
          className="inline-flex items-center px-3 py-1 rounded-full font-mono text-[11px] font-extrabold tracking-wide text-[#06140C]"
          style={{ background: "#00E676" }}
        >
          PAID
        </span>
      </div>

      {/* Bundle info */}
      <div className="flex items-center gap-3 mt-5">
        <span
          className="w-11 h-11 rounded-[13px] flex items-center justify-center font-extrabold text-xl text-[#1A1300]"
          style={{ background: "#FFCC00" }}
        >
          M
        </span>
        <div>
          <div className="text-[19px] font-extrabold tracking-tight">10 GB · MTN</div>
          <div className="text-xs text-white/42 mt-0.5">30-day validity · to 0803 456 7890</div>
        </div>
      </div>

      {/* Dashed divider */}
      <div className="relative my-5">
        <div className="border-t-[1.5px] border-dashed border-dl-border-2" />
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
          <span className="text-xs text-white/42 font-mono uppercase tracking-[0.3px]">{row.label}</span>
          <span
            className={`font-semibold ${row.small ? "text-xs" : "text-sm"} ${row.mono ? "font-mono" : ""}`}
            style={{ color: row.valueColor }}
          >
            {row.value}
          </span>
        </div>
      ))}

      {/* Total */}
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-dl-border">
        <span className="text-sm text-white/66 font-semibold">Total paid</span>
        <span className="text-[26px] font-extrabold">
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
  );
}

export function BuyInApp() {
  return (
    <section className="py-[110px]" id="buy">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">

          <FadeIn direction="right">
            <span className="font-mono text-xs font-bold tracking-[2.5px] uppercase text-dl-gold">
              Buy in-app
            </span>
            <h2
              className="font-extrabold tracking-tight leading-[1.1] mt-4"
              style={{ fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "-1.5px" }}
            >
              Top up any network,{" "}
              <span className="text-dl-green">pay your way</span>
            </h2>
            <p className="text-[17px] text-white/66 mt-4 leading-relaxed">
              No switching apps, no airtime-to-data wahala. Buy data or airtime for any number, pay
              with card, bank transfer, USSD or your DataLens wallet — and tracking begins the second
              it lands.
            </p>

            <div className="flex flex-col gap-5 mt-8">
              {buyFeatures.map((f) => (
                <div key={f.title} className="flex gap-4 items-start">
                  <span
                    className="w-[26px] h-[26px] rounded-full flex items-center justify-center font-extrabold text-sm shrink-0 text-[#06140C]"
                    style={{ background: "#00E676" }}
                  >
                    ✓
                  </span>
                  <div>
                    <div className="text-base font-bold">{f.title}</div>
                    <div className="text-sm text-white/66 mt-0.5 leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <ReceiptCard />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
