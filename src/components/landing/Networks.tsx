import { FadeIn } from "@/components/ui/FadeIn";

const networks = [
  { letter: "M", name: "MTN", bg: "#FFCC00", textColor: "#1A1300", nameColor: "#FFCC00" },
  { letter: "A", name: "Airtel", bg: "#FF0000", textColor: "#2A0000", nameColor: "#FF4444" },
  { letter: "G", name: "Glo", bg: "#008000", textColor: "#001F00", nameColor: "#00A050" },
  { letter: "9", name: "9mobile", bg: "#009999", textColor: "#002626", nameColor: "#33B3B3" },
];

export function Networks() {
  return (
    <section className="py-12 border-t border-b border-dl-border bg-dl-bg-deep">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <p className="text-center text-xs text-white/42 font-mono uppercase tracking-[1.5px] mb-7">
            Works with every Nigerian network
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {networks.map((n) => (
              <div
                key={n.name}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-dl-surface border border-dl-border cursor-pointer transition-all duration-150 hover:-translate-y-1 hover:border-dl-border-2"
              >
                <span
                  className="w-[38px] h-[38px] rounded-[11px] flex items-center justify-center font-extrabold text-[17px]"
                  style={{ background: n.bg, color: n.textColor }}
                >
                  {n.letter}
                </span>
                <span className="text-[17px] font-bold tracking-tight" style={{ color: n.nameColor }}>
                  {n.name}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
