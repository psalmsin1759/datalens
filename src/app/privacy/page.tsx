import type { Metadata } from "next";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — DataLens",
  description: "How DataLens collects, uses, and protects your personal data under the NDPR.",
};

const sections = [
  {
    n: "01",
    title: "Who we are",
    content: (
      <div className="text-[15px] text-white/65 leading-[1.75] space-y-3">
        <p>
          DataLens is a product of <strong className="text-white/85">FBIS Technologies Limited</strong>, a company
          incorporated in Nigeria. Our registered address is Victoria Island, Lagos, Nigeria.
        </p>
        <p>
          When we say "DataLens", "we", "us", or "our" in this policy, we mean FBIS Technologies Limited
          operating the DataLens mobile application and website at datalens.ng.
        </p>
        <p>
          We are subject to the{" "}
          <strong className="text-white/85">Nigeria Data Protection Regulation (NDPR) 2019</strong> and the
          Nigeria Data Protection Act 2023.
        </p>
      </div>
    ),
  },
  {
    n: "02",
    title: "Information we collect",
    content: (
      <div className="text-[15px] text-white/65 leading-[1.75] space-y-4">
        <p>We collect the following categories of personal data:</p>
        <div className="space-y-3">
          {[
            {
              cat: "Account data",
              desc: "Name, email address, and phone number you provide when you sign up.",
            },
            {
              cat: "Device data",
              desc: "Device model, OS version, and a unique device identifier. Used for bug reports and compatibility.",
            },
            {
              cat: "Network data",
              desc: "Your mobile carrier (MTN, Airtel, Glo, or 9mobile), SIM slot, and detected data balance. This is the core of the service — we cannot provide usage breakdowns without it.",
            },
            {
              cat: "Usage data",
              desc: "Data consumed per app, per website, and per hour, as reported by your device's network statistics API. We read byte counts only — never the content of your traffic.",
            },
            {
              cat: "Purchase data",
              desc: "Records of data bundles and airtime bought through the app, plus transaction reference numbers from our payment partners. We never store card numbers.",
            },
            {
              cat: "App events",
              desc: "Anonymised in-app events (e.g. opened data report, set low-data alert) used to improve the product. These are aggregated and cannot identify you individually.",
            },
          ].map(({ cat, desc }) => (
            <div key={cat} className="pl-4 border-l-2 border-dl-border">
              <div className="text-[14px] font-semibold text-white/85 mb-1">{cat}</div>
              <p className="text-[14px]">{desc}</p>
            </div>
          ))}
        </div>
        <p>
          We do <strong className="text-white/85">not</strong> collect the content of your messages, your
          browser history, or any data from apps beyond the byte count they consume.
        </p>
      </div>
    ),
  },
  {
    n: "03",
    title: "How we use your information",
    content: (
      <div className="text-[15px] text-white/65 leading-[1.75] space-y-4">
        <p>We process your data for these purposes, each with its legal basis under the NDPR:</p>
        <div>
          {[
            { purpose: "Provide and operate DataLens", basis: "Contract performance" },
            { purpose: "Process your in-app data and airtime purchases", basis: "Contract performance" },
            { purpose: "Send you low-data alerts and usage summaries", basis: "Contract performance" },
            { purpose: "Detect and prevent fraud or abuse", basis: "Legitimate interest" },
            {
              purpose: "Improve and develop new features",
              basis: "Legitimate interest (anonymised data only)",
            },
            { purpose: "Comply with legal obligations", basis: "Legal obligation" },
            { purpose: "Send you product updates (opt-in)", basis: "Consent" },
          ].map(({ purpose, basis }) => (
            <div
              key={purpose}
              className="flex items-start gap-3 py-3 border-b border-dl-border/50 last:border-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-dl-green mt-2.5 shrink-0" />
              <span className="flex-1 text-white/75">
                {purpose}
                <span className="text-white/35 font-mono text-xs ml-2">— {basis}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    n: "04",
    title: "Who we share your data with",
    content: (
      <div className="text-[15px] text-white/65 leading-[1.75] space-y-4">
        <p>
          We do <strong className="text-white/85">not sell</strong> your personal data. We share it only with:
        </p>
        <div className="space-y-3">
          {[
            {
              party: "Payment processors",
              detail:
                "Paystack and Flutterwave, to process data bundle and airtime purchases. They are bound by their own privacy policies and PCI-DSS standards.",
            },
            {
              party: "Cloud infrastructure",
              detail:
                "Amazon Web Services (EU-West region). Data is stored in ISO 27001-certified data centres.",
            },
            {
              party: "Error tracking",
              detail: "Sentry — anonymised stack traces only; no personal data appears in error reports.",
            },
            {
              party: "Legal authorities",
              detail:
                "We will disclose data if required by Nigerian law, a court order, or to protect the rights and safety of our users.",
            },
          ].map(({ party, detail }) => (
            <div key={party} className="pl-4 border-l-2 border-dl-border">
              <div className="text-[14px] font-semibold text-white/85 mb-1">{party}</div>
              <p className="text-[14px]">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    n: "05",
    title: "Data security",
    content: (
      <div className="text-[15px] text-white/65 leading-[1.75] space-y-3">
        <ul className="space-y-2">
          {[
            "All data in transit is encrypted with TLS 1.3",
            "Data at rest is encrypted using AES-256",
            "Production access is restricted to authorised engineers on a need-to-know basis",
            "We conduct regular security reviews and penetration tests",
            "Passwords are hashed with bcrypt — we never store plaintext passwords",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-dl-green mt-2.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p>
          If we become aware of a breach affecting your personal data, we will notify you within 72 hours
          as required by the NDPR.
        </p>
      </div>
    ),
  },
  {
    n: "06",
    title: "Data retention",
    content: (
      <div className="text-[15px] text-white/65 leading-[1.75] space-y-3">
        <p>We retain your data for as long as your account is active. When you delete your account:</p>
        <ul className="space-y-2">
          {[
            "Your profile and usage history are deleted within 30 days",
            "Purchase records are retained for 7 years to satisfy Nigerian tax and financial reporting requirements",
            "Anonymised, aggregated statistics are retained indefinitely",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-dl-green mt-2.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    n: "07",
    title: "Your rights",
    content: (
      <div className="text-[15px] text-white/65 leading-[1.75] space-y-4">
        <p>Under the NDPR and Nigeria Data Protection Act 2023, you have the right to:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { right: "Access", desc: "Request a copy of all personal data we hold about you" },
            { right: "Correction", desc: "Update inaccurate or incomplete information" },
            { right: "Deletion", desc: "Delete your account and associated personal data" },
            { right: "Portability", desc: "Export your data in a machine-readable format" },
            { right: "Objection", desc: "Object to processing based on legitimate interest" },
            { right: "Withdraw consent", desc: "Opt out of marketing emails at any time" },
          ].map(({ right, desc }) => (
            <div key={right} className="p-4 rounded-xl border border-dl-border bg-dl-surface">
              <div className="text-dl-green font-bold text-[14px] mb-1">{right}</div>
              <p className="text-[13px] text-white/55">{desc}</p>
            </div>
          ))}
        </div>
        <p>
          To exercise any right, email{" "}
          <a href="mailto:support@fbistech.com" className="text-dl-green hover:underline">
            support@fbistech.com
          </a>
          . We respond within 30 days.
        </p>
      </div>
    ),
  },
  {
    n: "08",
    title: "Children",
    content: (
      <p className="text-[15px] text-white/65 leading-[1.75]">
        DataLens is not intended for children under 13. We do not knowingly collect data from children
        under 13. If you believe a child has registered an account, contact{" "}
        <a href="mailto:support@fbistech.com" className="text-dl-green hover:underline">
          support@fbistech.com
        </a>{" "}
        and we will delete the account promptly.
      </p>
    ),
  },
  {
    n: "09",
    title: "Changes to this policy",
    content: (
      <p className="text-[15px] text-white/65 leading-[1.75]">
        We may update this policy from time to time. We will notify you of material changes via the app
        or by email at least 14 days before they take effect. Continued use of DataLens after the
        effective date means you accept the updated policy.
      </p>
    ),
  },
  {
    n: "10",
    title: "Contact",
    content: (
      <div className="text-[15px] text-white/65 leading-[1.75] space-y-4">
        <div className="p-5 rounded-2xl border border-dl-border bg-dl-surface space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-white/35 font-mono text-xs uppercase tracking-wider w-12 shrink-0">Email</span>
            <a href="mailto:support@fbistech.com" className="text-dl-green hover:underline">
              support@fbistech.com
            </a>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-white/35 font-mono text-xs uppercase tracking-wider w-12 shrink-0 mt-0.5">Post</span>
            <span className="text-white/70">
              FBIS Technologies Limited, 7th Floor, Churchgate Tower 2, Victoria Island, Lagos
            </span>
          </div>
        </div>
        <p>
          You also have the right to lodge a complaint with the{" "}
          <strong className="text-white/80">
            National Information Technology Development Agency (NITDA)
          </strong>
          , Nigeria&apos;s data protection authority.
        </p>
      </div>
    ),
  },
];

export default function PrivacyPage() {
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
              Privacy Policy
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
              DataLens is built on a simple promise: your data belongs to you. We collect only what we
              need to run the app, we never sell your information, and you can delete your account at any
              time. This policy explains everything in plain language — not legalese.
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
