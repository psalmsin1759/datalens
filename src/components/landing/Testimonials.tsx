import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "I always thought MTN was cheating me. Turns out it was YouTube autoplay eating 4GB a week. Switched to data-saver and my bundle now lasts the whole month.",
    name: "Chidi Okonkwo",
    location: "Lagos · MTN",
    avatar: "C",
    avatarGrad: "linear-gradient(135deg,#00E676,#0BC97A)",
    featured: false,
  },
  {
    quote:
      "Buying data and seeing the receipt right after is so satisfying. No more dialing USSD codes and squinting at balances. This is how it should work.",
    name: "Aisha Bello",
    location: "Abuja · Airtel",
    avatar: "A",
    avatarGrad: "linear-gradient(135deg,#FFD700,#C9A800)",
    featured: true,
  },
  {
    quote:
      "The alerts saved me during exams. Got a tap at 75% and topped up before my data finished mid-submission. DataLens just gets the Nigerian struggle.",
    name: "Tunde Adeyemi",
    location: "Ibadan · Glo",
    avatar: "T",
    avatarGrad: "linear-gradient(135deg,#5BC0EB,#3a9bc4)",
    featured: false,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32" id="reviews">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          index="09"
          eyebrow="Loved across Naija"
          segments={[
            { text: "From “where did it go?”" },
            { text: "to “now I know.”", className: "text-dl-green", break: true },
          ]}
          className="mb-16 md:mb-20"
        />

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch"
          staggerDelay={0.1}
        >
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <div
                className={`relative rounded-[24px] p-7 flex flex-col gap-5 h-full border transition-colors duration-300 ${
                  t.featured
                    ? "border-dl-green/30 bg-[linear-gradient(160deg,rgba(10,44,26,0.7),rgba(13,13,13,0.6))] md:-translate-y-3"
                    : "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.14]"
                }`}
                style={t.featured ? { boxShadow: "0 0 60px rgba(0,230,118,0.08)" } : undefined}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-5 right-7 font-display text-[64px] font-bold leading-none text-white/[0.06] select-none"
                >
                  ”
                </span>
                <span className="text-dl-gold text-sm tracking-[0.2em]">★★★★★</span>
                <p className="text-[15px] leading-relaxed text-white/90 flex-1">“{t.quote}”</p>
                <div className="flex items-center gap-3 pt-1 border-t border-white/[0.06] mt-auto">
                  <span
                    className="w-[42px] h-[42px] rounded-full flex items-center justify-center font-bold text-base text-[#06140C] shrink-0 mt-3"
                    style={{ background: t.avatarGrad }}
                  >
                    {t.avatar}
                  </span>
                  <div className="mt-3">
                    <div className="font-display text-sm font-bold">{t.name}</div>
                    <div className="font-mono text-[11px] text-white/40 mt-0.5">{t.location}</div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
