import { DataLensLogo } from "@/components/ui/DataLensLogo";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how" },
    { label: "Buy data", href: "#buy" },
    { label: "Download", href: "#download" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Contact", href: "/contact" },
  ],
  Support: [
    { label: "Help center", href: "#" },
    { label: "Report a problem", href: "#" },
    { label: "Suggest a feature", href: "#" },
    { label: "Status", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden pt-20 pb-10 border-t border-white/[0.06] bg-dl-bg-deep">
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] font-display text-[clamp(100px,20vw,280px)] font-bold tracking-[-0.05em] whitespace-nowrap leading-none"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.005))",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        DataLens
      </span>

      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <a href="#top" className="flex items-center gap-2.5 w-fit">
              <DataLensLogo size={30} />
              <span className="font-display text-xl font-bold tracking-tight">
                Data<span className="text-dl-green">Lens</span>
              </span>
            </a>
            <p className="text-sm text-white/45 mt-4 leading-relaxed max-w-[280px]">
              See every byte you spend. The data tracker built for Nigeria — across MTN, Airtel, Glo
              and 9mobile.
            </p>
            <p className="font-mono text-[11px] text-white/30 tracking-[0.18em] uppercase mt-5">
              Built in Lagos 🇳🇬
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-mono text-[11px] text-white/40 uppercase tracking-[0.2em] mb-4">
                {title}
              </h4>
              <div className="flex flex-col">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-sm text-white/60 py-1.5 transition-colors duration-150 hover:text-dl-green cursor-pointer w-fit"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-16 pt-7 border-t border-white/[0.06]">
          <span className="text-[13px] text-white/40">© 2026 DataLens. All rights reserved.</span>
          <span className="text-[13px] text-white/40 font-mono">
            FBIS Technologies Limited
          </span>
        </div>
      </div>
    </footer>
  );
}
