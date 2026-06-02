import type { Metadata } from "next";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — DataLens",
  description: "The terms governing your use of the DataLens app and related services.",
};

const sections = [
  {
    n: "01",
    title: "Acceptance of terms",
    content: (
      <div className="text-[15px] text-white/65 leading-[1.75] space-y-3">
        <p>
          By downloading, installing, or using the DataLens mobile application or website
          (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms").
          If you do not agree, do not use the Service.
        </p>
        <p>
          These Terms form a binding legal agreement between you and{" "}
          <strong className="text-white/85">FBIS Technologies Limited</strong> ("DataLens", "we", "us").
        </p>
      </div>
    ),
  },
  {
    n: "02",
    title: "The service",
    content: (
      <div className="text-[15px] text-white/65 leading-[1.75] space-y-3">
        <p>DataLens provides:</p>
        <ul className="space-y-2">
          {[
            "Real-time mobile data usage tracking broken down by app, website, and time period",
            "Carrier detection and balance monitoring for MTN, Airtel, Glo, and 9mobile",
            "In-app purchase of data bundles and airtime directly from your carrier",
            "Usage alerts, spending reports, and historical data analytics",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-dl-green mt-2.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p>
          The Service is provided "as is" subject to these Terms. We reserve the right to modify,
          suspend, or discontinue any part of the Service at any time with reasonable notice.
        </p>
      </div>
    ),
  },
  {
    n: "03",
    title: "Eligibility",
    content: (
      <div className="text-[15px] text-white/65 leading-[1.75] space-y-3">
        <p>To use DataLens you must:</p>
        <ul className="space-y-2">
          {[
            "Be at least 13 years of age",
            "Have a valid Nigerian mobile SIM card on MTN, Airtel, Glo, or 9mobile",
            "Have the legal capacity to enter into a binding contract",
            "Not be prohibited from receiving services under Nigerian law",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-dl-green mt-2.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p>
          Users between 13 and 18 years old must have parental or guardian consent before using the
          Service, particularly before making any in-app purchases.
        </p>
      </div>
    ),
  },
  {
    n: "04",
    title: "Account registration",
    content: (
      <div className="text-[15px] text-white/65 leading-[1.75] space-y-3">
        <p>
          You must create an account to use DataLens. You agree to provide accurate, current, and
          complete information and to keep it up to date.
        </p>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials and for
          all activity that occurs under your account. Notify us immediately at{" "}
          <a href="mailto:support@fbistech.com" className="text-dl-green hover:underline">
            support@fbistech.com
          </a>{" "}
          if you suspect unauthorised access.
        </p>
        <p>
          You may not share your account with another person or create multiple accounts to circumvent
          any restriction.
        </p>
      </div>
    ),
  },
  {
    n: "05",
    title: "In-app purchases",
    content: (
      <div className="text-[15px] text-white/65 leading-[1.75] space-y-4">
        <p>
          DataLens lets you purchase mobile data bundles and airtime directly from your carrier via
          the app. By making a purchase, you authorise us to charge the payment method you provide.
        </p>
        <div className="space-y-3">
          {[
            {
              heading: "Pricing",
              text: "All prices are displayed in Nigerian Naira (₦) inclusive of applicable taxes. Carrier prices are set by the carriers and may change without notice.",
            },
            {
              heading: "Processing",
              text: "Payments are processed by Paystack or Flutterwave. By purchasing, you also agree to their respective terms of service.",
            },
            {
              heading: "Delivery",
              text: "Data bundles and airtime are delivered to your SIM by your carrier, typically within seconds. Delivery times depend on carrier availability.",
            },
            {
              heading: "Refunds",
              text: "Once a purchase is submitted to your carrier it cannot be reversed. If a bundle is not delivered within 30 minutes, contact us at support@fbistech.com and we will investigate with the carrier on your behalf.",
            },
            {
              heading: "Failed transactions",
              text: "If your payment fails but your card is charged, the amount will be reversed by your bank within 3–5 business days. Contact us if it is not.",
            },
          ].map(({ heading, text }) => (
            <div key={heading} className="pl-4 border-l-2 border-dl-border">
              <div className="text-[14px] font-semibold text-white/85 mb-1">{heading}</div>
              <p className="text-[14px]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    n: "06",
    title: "Acceptable use",
    content: (
      <div className="text-[15px] text-white/65 leading-[1.75] space-y-3">
        <p>You agree not to:</p>
        <ul className="space-y-2">
          {[
            "Use the Service to commit fraud or impersonate another person",
            "Attempt to reverse-engineer, decompile, or disassemble the app",
            "Interfere with or disrupt the integrity or performance of the Service",
            "Use automated scripts or bots to access the Service",
            "Purchase data for resale or commercial redistribution without our written consent",
            "Violate any applicable Nigerian or international law",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-dl-danger mt-2.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p>
          Violations may result in immediate account suspension or termination without refund, and may
          be reported to the appropriate authorities.
        </p>
      </div>
    ),
  },
  {
    n: "07",
    title: "Third-party networks",
    content: (
      <div className="text-[15px] text-white/65 leading-[1.75] space-y-3">
        <p>
          DataLens works with MTN, Airtel, Glo, and 9mobile to deliver data bundles and airtime. These
          carriers are independent third parties with their own terms and conditions.
        </p>
        <p>
          We are not responsible for carrier network outages, pricing changes, bundle policy changes,
          USSD downtime, or any failure by a carrier to deliver a purchased bundle.
        </p>
        <p>
          MTN, Airtel, Glo, and 9mobile are trademarks of their respective owners. DataLens is not
          affiliated with or endorsed by any carrier.
        </p>
      </div>
    ),
  },
  {
    n: "08",
    title: "Intellectual property",
    content: (
      <div className="text-[15px] text-white/65 leading-[1.75] space-y-3">
        <p>
          The DataLens app, website, logo, design system, and all content are the exclusive property
          of FBIS Technologies Limited, protected under Nigerian and international intellectual
          property law.
        </p>
        <p>
          You are granted a limited, non-exclusive, non-transferable, revocable licence to use the
          Service for personal, non-commercial purposes. This licence does not include any right to
          resell, sublicense, or create derivative works from any part of the Service.
        </p>
      </div>
    ),
  },
  {
    n: "09",
    title: "Disclaimer of warranties",
    content: (
      <div className="text-[15px] text-white/65 leading-[1.75] space-y-3">
        <p>
          The Service is provided on an <strong className="text-white/80">"as is" and "as available"</strong> basis
          without warranties of any kind, express or implied, including but not limited to
          merchantability, fitness for a particular purpose, or non-infringement.
        </p>
        <p>
          We do not warrant that the Service will be uninterrupted, error-free, or that usage data
          reported will be perfectly accurate — mobile OS APIs and carrier networks have inherent
          limitations.
        </p>
      </div>
    ),
  },
  {
    n: "10",
    title: "Limitation of liability",
    content: (
      <div className="text-[15px] text-white/65 leading-[1.75] space-y-3">
        <p>
          To the maximum extent permitted by Nigerian law, FBIS Technologies Limited shall not be
          liable for any indirect, incidental, special, consequential, or punitive damages — including
          loss of data, revenue, goodwill, or profits — arising from your use of or inability to use
          the Service.
        </p>
        <p>
          Our total liability for any claim arising from these Terms or the Service shall not exceed
          the amount you paid to us in the 3 months preceding the claim.
        </p>
      </div>
    ),
  },
  {
    n: "11",
    title: "Governing law",
    content: (
      <div className="text-[15px] text-white/65 leading-[1.75] space-y-3">
        <p>
          These Terms are governed by and construed in accordance with the laws of the{" "}
          <strong className="text-white/80">Federal Republic of Nigeria</strong>. Any dispute arising
          from these Terms shall be subject to the exclusive jurisdiction of the courts of Lagos
          State.
        </p>
        <p>
          Before initiating legal proceedings, both parties agree to attempt to resolve any dispute
          informally for at least 30 days.
        </p>
      </div>
    ),
  },
  {
    n: "12",
    title: "Termination",
    content: (
      <div className="text-[15px] text-white/65 leading-[1.75] space-y-3">
        <p>
          You may delete your account at any time from the app settings. We may suspend or terminate
          your account if you breach these Terms, engage in fraudulent activity, or if we are required
          to do so by law.
        </p>
        <p>
          On termination, your right to use the Service ceases immediately. Sections 8, 9, 10, and 11
          survive termination.
        </p>
      </div>
    ),
  },
  {
    n: "13",
    title: "Contact",
    content: (
      <div className="text-[15px] text-white/65 leading-[1.75] space-y-4">
        <p>For any questions about these Terms:</p>
        <div className="p-5 rounded-2xl border border-dl-border bg-dl-surface space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-white/35 font-mono text-xs uppercase tracking-wider w-12 shrink-0">
              Email
            </span>
            <a href="mailto:support@fbistech.com" className="text-dl-green hover:underline">
              support@fbistech.com
            </a>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-white/35 font-mono text-xs uppercase tracking-wider w-12 shrink-0 mt-0.5">
              Post
            </span>
            <span className="text-white/70">
              FBIS Technologies Limited, 7th Floor, Churchgate Tower 2, Victoria Island, Lagos
            </span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <Nav />

      <main className="min-h-screen bg-dl-bg pt-28 pb-24">
        <div className="max-w-[760px] mx-auto px-6">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs font-bold tracking-[2.5px] uppercase text-dl-green mb-4">
              Legal
            </span>
            <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold tracking-tight leading-[1.05] mb-5">
              Terms of Service
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/40 font-mono">
              <span>Effective: 1 June 2026</span>
              <span className="text-white/20">·</span>
              <span>FBIS Technologies Limited</span>
              <span className="text-white/20">·</span>
              <span>Lagos, Nigeria</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-dl-green/30 bg-[rgba(0,230,118,0.05)] mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-dl-green mb-3">Summary</div>
            <p className="text-[15px] text-white/70 leading-[1.75]">
              These terms cover your right to use DataLens, how in-app purchases work, what you can
              and cannot do with the app, and how disputes are handled. Nigerian law governs these
              terms. Questions? Email{" "}
              <a href="mailto:support@fbistech.com" className="text-dl-green hover:underline">
                support@fbistech.com
              </a>
              .
            </p>
          </div>

          <div className="space-y-10">
            {sections.map(({ n, title, content }) => (
              <section key={n}>
                <h2 className="flex items-center gap-3 text-[18px] font-extrabold tracking-tight mb-5">
                  <span className="font-mono text-xs text-dl-green bg-dl-bg-green px-2.5 py-1 rounded-lg">
                    {n}
                  </span>
                  {title}
                </h2>
                {content}
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
