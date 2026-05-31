import { FadeIn } from "@/components/ui/FadeIn";

export function Problem() {
  return (
    <section
      className="py-[110px]"
      style={{
        background: "linear-gradient(180deg, #0D0D0D 0%, #0A2C1A 50%, #0D0D0D 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="max-w-[880px] mx-auto rounded-[28px] border border-[rgba(0,230,118,0.25)] px-14 py-14 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0F3D24, #141929)",
            }}
          >
            {/* Decorative Q marks */}
            <span className="absolute text-[200px] font-extrabold text-[rgba(255,215,0,0.06)] leading-none top-[-30px] left-5 pointer-events-none select-none">?</span>
            <span className="absolute text-[200px] font-extrabold text-[rgba(255,215,0,0.06)] leading-none bottom-[-80px] right-[30px] pointer-events-none select-none">?</span>

            <span className="font-mono text-xs font-bold tracking-[2.5px] uppercase text-dl-gold relative">
              The data mystery
            </span>

            <h3 className="text-[clamp(28px,4vw,38px)] font-extrabold tracking-tight leading-[1.1] mt-4 relative">
              You bought{" "}
              <span className="text-white/42 line-through decoration-dl-danger">5GB</span>.
              <br />
              Where did it go?
            </h3>

            <p className="text-[17px] text-white/66 mt-5 leading-relaxed max-w-[560px] mx-auto relative">
              Telcos show you a number that only goes down. No breakdown. No receipts. No idea whether
              it was YouTube, a runaway app, or a background update eating your bundle. DataLens ends
              the guessing — for good.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
