import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/landing/Nav";
import { ContactForm } from "@/components/contact/ContactForm";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Contact — DataLens",
  description: "Get in touch with the DataLens team. We're based in Lagos and reply within 24 hours.",
};

const channels = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "support@fbistech.com",
    href: "mailto:support@fbistech.com",
    color: "#00E676",
    note: "Replies within 24 hours",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+234 800 DATA LENS",
    href: "https://wa.me/2348001234567",
    color: "#25D366",
    note: "Mon – Fri, 9am – 6pm WAT",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    label: "Twitter / X",
    value: "@DataLensNG",
    href: "https://x.com/DataLensNG",
    color: "#ffffff",
    note: "Quickest for public questions",
  },
];

const faqs = [
  { q: "How do I report a bug?", a: "Use the form and pick “Bug report” — attach a screenshot if you can. We triage bugs within 4 hours during working hours." },
  { q: "Where is DataLens based?", a: "7th Floor, Churchgate Tower 2, Victoria Island, Lagos. We’re a Nigerian product built for Nigerians." },
  { q: "Do you have a press kit?", a: "Yes — email support@fbistech.com with subject “Press” and we’ll send logos, screenshots, and founder bios." },
];

export default function ContactPage() {
  return (
    <>
      <Nav />

      <main className="min-h-screen bg-dl-bg pt-28 pb-0">

        {/* Hero */}
        <div className="max-w-[1200px] mx-auto px-6 mb-16 text-center">
          <span className="inline-block font-mono text-xs font-bold tracking-[2.5px] uppercase text-dl-green mb-4">
            Contact
          </span>
          <h1 className="text-[clamp(36px,5vw,64px)] font-extrabold tracking-tight leading-[1.05]">
          
            <span className="text-dl-green">We answer fast.</span>
          </h1>
          <p className="text-[18px] text-white/60 mt-5 leading-relaxed max-w-xl mx-auto">
            Questions, bug reports, partnerships, press — drop us a message and
            a human will read it.
          </p>
        </div>

        {/* Main grid */}
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 items-start">

            {/* Left — channels + FAQ */}
            <div className="space-y-10">

              {/* Contact channels */}
              <div className="space-y-4">
                <h2 className="text-xs font-mono uppercase tracking-wider text-white/42">Reach us directly</h2>
                {channels.map((ch) => (
                  <a
                    key={ch.label}
                    href={ch.href}
                    target={ch.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-2xl border border-dl-border bg-dl-surface hover:border-dl-border-2 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
                  >
                    <span
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200"
                      style={{
                        background: `${ch.color}18`,
                        border: `1px solid ${ch.color}33`,
                        color: ch.color,
                      }}
                    >
                      {ch.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-mono uppercase tracking-wider text-white/40 mb-0.5">{ch.label}</div>
                      <div className="text-[15px] font-bold truncate" style={{ color: ch.color }}>{ch.value}</div>
                      <div className="text-xs text-white/36 mt-0.5">{ch.note}</div>
                    </div>
                    <svg
                      className="text-white/20 group-hover:text-white/60 transition-colors shrink-0"
                      width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Office */}
              <div className="p-6 rounded-2xl border border-dl-border bg-dl-surface">
                <h2 className="text-xs font-mono uppercase tracking-wider text-white/42 mb-4">Office</h2>
                <div className="flex gap-4">
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[rgba(0,230,118,0.1)] border border-[rgba(0,230,118,0.25)] text-dl-green">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-[15px] font-bold">7th Floor, Churchgate Tower 2</div>
                    <div className="text-sm text-white/42 mt-0.5 leading-relaxed">
                      Victoria Island, Lagos · WAT (UTC+1)
                    </div>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-dl-green">
                      <span className="w-1.5 h-1.5 rounded-full bg-dl-green animate-pulse" />
                      Open now · Mon – Fri, 9am – 6pm
                    </div>
                  </div>
                </div>
              </div>

              {/* Mini FAQ */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-wider text-white/42 mb-4">Quick answers</h2>
                <div className="space-y-3">
                  {faqs.map((f) => (
                    <div key={f.q} className="p-5 rounded-2xl border border-dl-border bg-dl-surface">
                      <div className="text-[14px] font-bold mb-1.5">{f.q}</div>
                      <div className="text-[13px] text-white/50 leading-relaxed">{f.a}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Link
                    href="/#faq"
                    className="text-sm text-dl-green font-semibold hover:underline"
                  >
                    See all FAQs →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <div className="rounded-3xl border border-dl-border bg-dl-surface p-8 sticky top-28">
                <h2 className="text-xl font-extrabold tracking-tight mb-1">Send a message</h2>
                <p className="text-sm text-white/42 mb-8">
                  Fill in the form and we&apos;ll reply to your email.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="mt-24">
        <Footer />
      </div>
    </>
  );
}
