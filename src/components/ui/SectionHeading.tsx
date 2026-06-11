import { FadeIn, TextReveal, type TextSegment } from "@/components/ui/FadeIn";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  segments: TextSegment[];
  sub?: string;
  align?: "center" | "left";
  accent?: "green" | "gold";
  className?: string;
}

export function SectionHeading({
  index,
  eyebrow,
  segments,
  sub,
  align = "center",
  accent = "green",
  className = "",
}: SectionHeadingProps) {
  const accentColor = accent === "gold" ? "text-dl-gold" : "text-dl-green";
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "max-w-[760px] mx-auto text-center" : "max-w-[680px]"} ${className}`}
    >
      <FadeIn>
        <span
          className={`inline-flex items-center gap-3 font-mono text-[11px] font-bold tracking-[0.3em] uppercase ${accentColor}`}
        >
          <span className="opacity-50">[</span>
          {index}
          <span className="w-8 h-px bg-current opacity-40" />
          {eyebrow}
          <span className="opacity-50">]</span>
        </span>
      </FadeIn>
      <h2 className="font-display text-[clamp(34px,4.6vw,56px)] font-bold tracking-[-0.03em] leading-[1.04] mt-5">
        <TextReveal segments={segments} delay={0.1} />
      </h2>
      {sub && (
        <FadeIn delay={0.25}>
          <p
            className={`text-[17px] md:text-[18px] text-white/55 mt-5 leading-relaxed ${centered ? "max-w-[560px] mx-auto" : "max-w-[520px]"}`}
          >
            {sub}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
