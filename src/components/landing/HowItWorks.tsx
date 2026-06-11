import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    num: "01",
    title: "Buy or log your data",
    desc: "Top up in-app, or log a bundle you bought elsewhere. Tell us the size, network and price.",
    connector: true,
  },
  {
    num: "02",
    title: "We watch every MB",
    desc: "DataLens tracks usage across every app and site, in real time, quietly in the background.",
    connector: true,
  },
  {
    num: "03",
    title: "See the full story",
    desc: "Get a live dashboard now, and a complete breakdown the moment your data finishes.",
    connector: false,
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-dl-bg-deep" id="how">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          index="06"
          eyebrow="Dead simple"
          segments={[
            { text: "Three steps." },
            { text: "No more wondering.", className: "text-dl-green" },
          ]}
          className="mb-16 md:mb-24"
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6" staggerDelay={0.12}>
          {steps.map((step, i) => (
            <StaggerItem key={i}>
              <div className="relative pt-14">
                {/* Ghost number */}
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 font-display text-[110px] font-bold leading-none text-stroke-ghost select-none pointer-events-none"
                >
                  {step.num}
                </span>

                {step.connector && (
                  <div
                    aria-hidden="true"
                    className="hidden md:block absolute h-px"
                    style={{
                      top: 56,
                      left: 130,
                      right: -24,
                      background: "linear-gradient(90deg, rgba(0,230,118,0.4), transparent)",
                    }}
                  />
                )}

                <div className="relative">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[rgba(0,230,118,0.1)] border border-[rgba(0,230,118,0.3)] mb-5">
                    <span className="w-2 h-2 rounded-full bg-dl-green shadow-[0_0_12px_rgba(0,230,118,0.8)]" />
                  </span>
                  <h3 className="font-display text-[22px] font-bold tracking-tight">{step.title}</h3>
                  <p className="text-[15px] text-white/55 mt-2.5 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
