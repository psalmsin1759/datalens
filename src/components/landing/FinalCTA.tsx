import { FadeIn } from "@/components/ui/FadeIn";

function AppleIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 12.04c-.02-2.05 1.68-3.03 1.75-3.08-.95-1.4-2.43-1.59-2.96-1.61-1.26-.13-2.46.74-3.1.74-.64 0-1.62-.72-2.67-.7-1.37.02-2.64.8-3.35 2.03-1.43 2.48-.37 6.15 1.02 8.16.68.99 1.49 2.1 2.55 2.06 1.03-.04 1.42-.66 2.66-.66 1.24 0 1.59.66 2.67.64 1.1-.02 1.8-1 2.47-1.99.78-1.14 1.1-2.25 1.12-2.31-.02-.01-2.15-.82-2.18-3.27zM15.0 6.21c.56-.68.94-1.63.84-2.58-.81.03-1.79.54-2.37 1.22-.52.6-.98 1.56-.86 2.48.9.07 1.83-.46 2.39-1.12z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3.5 2.5l11 9.5-11 9.5c-.3-.2-.5-.5-.5-.9V3.4c0-.4.2-.7.5-.9z" fill="#00E676" />
      <path d="M14.5 12l3.3-2.85-3.3-1.9L11.7 12l2.8 4.75 3.3-1.9L14.5 12z" fill="#FFD700" />
      <path d="M3.5 2.5c.15-.1.35-.13.55-.07L17.8 9.15l-3.3 2.85L3.5 2.5z" fill="#0BC97A" />
      <path d="M3.5 21.5c.15.1.35.13.55.07l13.75-6.62-3.3-2.95L3.5 21.5z" fill="#00A050" />
    </svg>
  );
}

export function FinalCTA() {
  return (
    <section className="py-[110px] relative overflow-hidden" id="download">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div
            className="relative rounded-[32px] px-14 py-[72px] text-center overflow-hidden border"
            style={{
              background: "linear-gradient(135deg, #0F3D24, #141929)",
              borderColor: "rgba(0,230,118,0.3)",
            }}
          >
            {/* Glow */}
            <div
              className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
              style={{
                filter: "blur(40px)",
                background: "radial-gradient(circle, rgba(0,230,118,0.2), transparent 60%)",
              }}
            />

            <span className="font-mono text-xs font-bold tracking-[2.5px] uppercase text-dl-green relative">
              Free to start
            </span>

            <h2
              className="font-extrabold tracking-tight leading-[1.05] relative mt-4"
              style={{ fontSize: "clamp(30px,4.5vw,52px)", letterSpacing: "-2px" }}
            >
              Stop guessing.
              <br />
              <span className="text-dl-green">Start seeing.</span>
            </h2>

            <p className="text-[18px] text-white/66 mt-4 relative">
              Join 12,000+ Nigerians who finally know where every byte goes. Download DataLens
              free — no card required.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5 mt-9 relative">
              <a
                href="#"
                className="inline-flex items-center gap-3 h-14 px-5 rounded-[14px] bg-dl-surface border border-dl-border-2 cursor-pointer transition-all duration-150 hover:border-dl-green hover:-translate-y-0.5"
              >
                <AppleIcon />
                <div className="text-left leading-tight">
                  <div className="text-[10px] text-white/42 tracking-wide">Download on the</div>
                  <div className="text-[17px] font-bold tracking-tight">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-3 h-14 px-5 rounded-[14px] bg-dl-surface border border-dl-border-2 cursor-pointer transition-all duration-150 hover:border-dl-green hover:-translate-y-0.5"
              >
                <PlayIcon />
                <div className="text-left leading-tight">
                  <div className="text-[10px] text-white/42 tracking-wide">GET IT ON</div>
                  <div className="text-[17px] font-bold tracking-tight">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
