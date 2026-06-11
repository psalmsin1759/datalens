import { FadeIn } from "@/components/ui/FadeIn";

const networks = [
  { name: "MTN", color: "#FFCC00" },
  { name: "AIRTEL", color: "#FF4444" },
  { name: "GLO", color: "#00A050" },
  { name: "9MOBILE", color: "#33B3B3" },
];

function TickerRow() {
  return (
    <>
      {networks.map((n) => (
        <span key={n.name} className="flex items-center shrink-0">
          <span
            className="font-display text-[clamp(30px,4.5vw,52px)] font-bold tracking-[-0.02em] leading-none px-8 md:px-12"
            style={{ color: n.color, opacity: 0.85 }}
          >
            {n.name}
          </span>
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className="shrink-0">
            <path d="M7 0l1.7 5.3L14 7l-5.3 1.7L7 14 5.3 8.7 0 7l5.3-1.7L7 0z" fill="rgba(255,255,255,0.18)" />
          </svg>
        </span>
      ))}
      <span className="flex items-center shrink-0">
        <span className="text-stroke-ghost font-display text-[clamp(30px,4.5vw,52px)] font-bold tracking-[-0.02em] leading-none px-8 md:px-12 whitespace-nowrap">
          ONE APP
        </span>
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className="shrink-0">
          <path d="M7 0l1.7 5.3L14 7l-5.3 1.7L7 14 5.3 8.7 0 7l5.3-1.7L7 0z" fill="rgba(255,255,255,0.18)" />
        </svg>
      </span>
    </>
  );
}

export function Networks() {
  return (
    <section className="py-12 border-t border-b border-white/[0.06] bg-dl-bg-deep overflow-hidden">
      <FadeIn>
        <p className="text-center text-[11px] text-white/40 font-mono uppercase tracking-[0.3em] mb-8">
          Works with every Nigerian network
        </p>
      </FadeIn>
      <div className="relative marquee-paused">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-full w-28 z-10"
          style={{ background: "linear-gradient(to right, #070707, transparent)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-full w-28 z-10"
          style={{ background: "linear-gradient(to left, #070707, transparent)" }}
        />
        <div className="animate-marquee flex items-center w-max">
          <TickerRow />
          <TickerRow />
        </div>
      </div>
    </section>
  );
}
