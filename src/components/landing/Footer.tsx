import { DataLensLogo } from "@/components/ui/DataLensLogo";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how" },
    { label: "Buy data", href: "#buy" },
    { label: "Download", href: "#download" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
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
    <footer className="pt-[72px] pb-10 border-t border-dl-border bg-dl-bg-deep">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <a href="#top" className="flex items-center gap-2.5 w-fit">
              <DataLensLogo size={30} />
              <span className="text-xl font-extrabold tracking-tight">
                Data<span className="text-dl-green">Lens</span>
              </span>
            </a>
            <p className="text-sm text-white/42 mt-4 leading-relaxed max-w-[280px]">
              See every byte you spend. The data tracker built for Nigeria — across MTN, Airtel, Glo
              and 9mobile.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-mono text-white/42 uppercase tracking-[1.2px] mb-4">
                {title}
              </h4>
              <div className="flex flex-col">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-sm text-white/66 py-1.5 transition-colors duration-150 hover:text-dl-green cursor-pointer"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-14 pt-7 border-t border-dl-border">
          <span className="text-[13px] text-white/42">© 2026 DataLens. All rights reserved.</span>
          <span className="text-[13px] text-white/42 font-mono">
            Built in Lagos <span className="text-dl-green">·</span> Naija to the world 🇳🇬
          </span>
        </div>
      </div>
    </footer>
  );
}
