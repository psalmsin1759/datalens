import { FadeIn, TextReveal } from "@/components/ui/FadeIn";
import { Magnetic } from "@/components/ui/Magnetic";

function AppleIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.05 12.04c-.02-2.05 1.68-3.03 1.75-3.08-.95-1.4-2.43-1.59-2.96-1.61-1.26-.13-2.46.74-3.1.74-.64 0-1.62-.72-2.67-.7-1.37.02-2.64.8-3.35 2.03-1.43 2.48-.37 6.15 1.02 8.16.68.99 1.49 2.1 2.55 2.06 1.03-.04 1.42-.66 2.66-.66 1.24 0 1.59.66 2.67.64 1.1-.02 1.8-1 2.47-1.99.78-1.14 1.1-2.25 1.12-2.31-.02-.01-2.15-.82-2.18-3.27zM15.0 6.21c.56-.68.94-1.63.84-2.58-.81.03-1.79.54-2.37 1.22-.52.6-.98 1.56-.86 2.48.9.07 1.83-.46 2.39-1.12z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3.5 2.5l11 9.5-11 9.5c-.3-.2-.5-.5-.5-.9V3.4c0-.4.2-.7.5-.9z" fill="#00E676" />
      <path d="M14.5 12l3.3-2.85-3.3-1.9L11.7 12l2.8 4.75 3.3-1.9L14.5 12z" fill="#FFD700" />
      <path d="M3.5 2.5c.15-.1.35-.13.55-.07L17.8 9.15l-3.3 2.85L3.5 2.5z" fill="#0BC97A" />
      <path d="M3.5 21.5c.15.1.35.13.55.07l13.75-6.62-3.3-2.95L3.5 21.5z" fill="#00A050" />
    </svg>
  );
}

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="download">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          {/* Gradient border wrapper */}
          <div
            className="rounded-[36px] p-px"
            style={{
              background: "linear-gradient(135deg, rgba(0,230,118,0.5), rgba(255,255,255,0.08) 40%, rgba(255,215,0,0.35))",
            }}
          >
            <div
              className="relative rounded-[35px] px-6 md:px-14 py-20 md:py-24 text-center overflow-hidden"
              style={{
                background: "linear-gradient(160deg, #0A2C1A 0%, #0D0D0D 60%, #0D0D0D 100%)",
              }}
            >
              {/* Grid + glow */}
              <div aria-hidden="true" className="absolute inset-0 bg-grid mask-fade-radial pointer-events-none" />
              <div
                aria-hidden="true"
                className="animate-aurora absolute top-[-180px] left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full pointer-events-none"
                style={{
                  filter: "blur(48px)",
                  background: "radial-gradient(circle, rgba(0,230,118,0.2), transparent 60%)",
                }}
              />

              <span className="relative inline-flex items-center gap-3 font-mono text-[11px] font-bold tracking-[0.3em] uppercase text-dl-green">
                <span className="opacity-50">[</span>
                Free to start
                <span className="opacity-50">]</span>
              </span>

              <h2 className="relative font-display text-[clamp(40px,6.5vw,80px)] font-bold tracking-[-0.04em] leading-[1.0] mt-6">
                <TextReveal
                  delay={0.1}
                  stagger={0.08}
                  segments={[
                    { text: "Stop guessing." },
                    { text: "Start seeing.", className: "text-dl-green", break: true },
                  ]}
                />
              </h2>

              <FadeIn delay={0.3}>
                <p className="relative text-[17px] md:text-[18px] text-white/55 mt-6 max-w-[520px] mx-auto leading-relaxed">
                  Join 12,000+ Nigerians who finally know where every byte goes. Download DataLens
                  free — no card required.
                </p>
              </FadeIn>

              <div className="relative flex flex-wrap items-center justify-center gap-4 mt-10">
                <Magnetic>
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 h-[60px] px-6 rounded-2xl bg-white/[0.04] border border-white/12 backdrop-blur-md cursor-pointer transition-all duration-200 hover:border-dl-green/60 hover:bg-white/[0.07]"
                  >
                    <AppleIcon />
                    <div className="text-left leading-tight">
                      <div className="text-[10px] text-white/45 tracking-wide">Download on the</div>
                      <div className="font-display text-[17px] font-bold tracking-tight">App Store</div>
                    </div>
                  </a>
                </Magnetic>

                <Magnetic>
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 h-[60px] px-6 rounded-2xl bg-white/[0.04] border border-white/12 backdrop-blur-md cursor-pointer transition-all duration-200 hover:border-dl-green/60 hover:bg-white/[0.07]"
                  >
                    <PlayIcon />
                    <div className="text-left leading-tight">
                      <div className="text-[10px] text-white/45 tracking-wide">GET IT ON</div>
                      <div className="font-display text-[17px] font-bold tracking-tight">Google Play</div>
                    </div>
                  </a>
                </Magnetic>
              </div>

              <FadeIn delay={0.45}>
                <p className="relative font-mono text-[11px] text-white/30 tracking-[0.2em] uppercase mt-8">
                  Android 8.0+ · iOS 14+ · Free forever
                </p>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
