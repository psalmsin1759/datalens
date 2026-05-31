import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { FadeIn } from "@/components/ui/FadeIn";

const testimonials = [
  {
    quote:
      "I always thought MTN was cheating me. Turns out it was YouTube autoplay eating 4GB a week. Switched to data-saver and my bundle now lasts the whole month.",
    name: "Chidi Okonkwo",
    location: "Lagos · MTN",
    avatar: "C",
    avatarGrad: "linear-gradient(135deg,#00E676,#0BC97A)",
  },
  {
    quote:
      "Buying data and seeing the receipt right after is so satisfying. No more dialing USSD codes and squinting at balances. This is how it should work.",
    name: "Aisha Bello",
    location: "Abuja · Airtel",
    avatar: "A",
    avatarGrad: "linear-gradient(135deg,#FFD700,#C9A800)",
  },
  {
    quote:
      "The alerts saved me during exams. Got a tap at 75% and topped up before my data finished mid-submission. DataLens just gets the Nigerian struggle.",
    name: "Tunde Adeyemi",
    location: "Ibadan · Glo",
    avatar: "T",
    avatarGrad: "linear-gradient(135deg,#5BC0EB,#3a9bc4)",
  },
];

export function Testimonials() {
  return (
    <section className="py-[110px]" id="reviews">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn className="max-w-[680px] mx-auto text-center mb-16">
          <span className="font-mono text-xs font-bold tracking-[2.5px] uppercase text-dl-green">
            Loved across Naija
          </span>
          <h2 className="text-[clamp(30px,4vw,46px)] font-extrabold tracking-tight leading-[1.08] mt-4">
            From "where did it go?"{" "}
            <span className="text-dl-green">to "now I know."</span>
          </h2>
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          staggerDelay={0.1}
        >
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <div className="bg-dl-surface border border-dl-border rounded-[20px] p-7 flex flex-col gap-4 h-full">
                <span className="text-dl-gold text-sm tracking-[2px]">★★★★★</span>
                <p className="text-[15px] leading-relaxed text-white flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <span
                    className="w-[42px] h-[42px] rounded-full flex items-center justify-center font-bold text-base text-[#06140C] shrink-0"
                    style={{ background: t.avatarGrad }}
                  >
                    {t.avatar}
                  </span>
                  <div>
                    <div className="text-sm font-bold">{t.name}</div>
                    <div className="text-xs text-white/42 mt-px">{t.location}</div>
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
