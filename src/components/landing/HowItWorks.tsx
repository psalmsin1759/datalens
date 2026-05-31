import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

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
    <section className="py-[110px] bg-dl-bg-deep" id="how">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn className="max-w-[680px] mx-auto text-center mb-16">
          <span className="font-mono text-xs font-bold tracking-[2.5px] uppercase text-dl-green">
            Dead simple
          </span>
          <h2 className="text-[clamp(30px,4vw,46px)] font-extrabold tracking-tight leading-[1.08] mt-4">
            Three steps.{" "}
            <span className="text-dl-green">No more wondering.</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
          {steps.map((step, i) => (
            <StaggerItem key={i}>
              <div className="relative">
                {step.connector && (
                  <div
                    className="hidden md:block absolute h-px"
                    style={{
                      top: 28,
                      left: 56,
                      right: -24,
                      background: "linear-gradient(90deg, rgba(0,230,118,0.4), transparent)",
                    }}
                  />
                )}
                <div
                  className="w-14 h-14 rounded-[17px] flex items-center justify-center font-mono text-[22px] font-bold text-dl-green mb-6"
                  style={{
                    background: "rgba(0,230,118,0.12)",
                    border: "1px solid rgba(0,230,118,0.3)",
                  }}
                >
                  {step.num}
                </div>
                <h3 className="text-[21px] font-bold tracking-tight">{step.title}</h3>
                <p className="text-[15px] text-white/66 mt-2.5 leading-relaxed">{step.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
