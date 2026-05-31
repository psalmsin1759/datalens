import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Networks } from "@/components/landing/Networks";
import { BeforeAfter } from "@/components/landing/BeforeAfter";
import { Problem } from "@/components/landing/Problem";
import { DataCalculator } from "@/components/landing/DataCalculator";
import { Features } from "@/components/landing/Features";
import { ScreenshotCarousel } from "@/components/landing/ScreenshotCarousel";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { BuyInApp } from "@/components/landing/BuyInApp";
import { Stats } from "@/components/landing/Stats";
import { SocialProof } from "@/components/landing/SocialProof";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Networks />
        <BeforeAfter />
        <Problem />
        <DataCalculator />
        <Features />
        <ScreenshotCarousel />
        <HowItWorks />
        <BuyInApp />
        <Stats />
        <SocialProof />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
