import { FadeIn, TextReveal } from "@/components/ui/FadeIn";

export function Problem() {
  return (
    <section
      className="py-28 md:py-40 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0D0D0D 0%, #0A2C1A 50%, #0D0D0D 100%)",
      }}
    >
      {/* Ghost question marks */}
      <span
        aria-hidden="true"
        className="absolute font-display text-[clamp(220px,30vw,420px)] font-bold text-[rgba(255,215,0,0.05)] leading-none top-[-60px] left-[2%] pointer-events-none select-none"
      >
        ?
      </span>
      <span
        aria-hidden="true"
        className="absolute font-display text-[clamp(220px,30vw,420px)] font-bold text-[rgba(255,215,0,0.05)] leading-none bottom-[-140px] right-[4%] pointer-events-none select-none"
      >
        ?
      </span>

      <div className="max-w-[1000px] mx-auto px-6 text-center relative">
        <FadeIn>
          <span className="inline-flex items-center gap-3 font-mono text-[11px] font-bold tracking-[0.3em] uppercase text-dl-gold">
            <span className="opacity-50">[</span>
            02
            <span className="w-8 h-px bg-current opacity-40" />
            The data mystery
            <span className="opacity-50">]</span>
          </span>
        </FadeIn>

        <h2 className="font-display text-[clamp(42px,7vw,88px)] font-bold tracking-[-0.04em] leading-[1.02] mt-7">
          <TextReveal
            delay={0.1}
            stagger={0.08}
            segments={[
              { text: "You bought" },
              { text: "5GB.", className: "text-white/35 line-through decoration-dl-danger decoration-[3px]" },
              { text: "Where did it go?", className: "text-dl-gold", break: true },
            ]}
          />
        </h2>

        <FadeIn delay={0.35}>
          <p className="text-[17px] md:text-[19px] text-white/55 mt-7 leading-relaxed max-w-[600px] mx-auto">
            Telcos show you a number that only goes down. No breakdown. No receipts. No idea whether
            it was YouTube, a runaway app, or a background update eating your bundle. DataLens ends
            the guessing — for good.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
