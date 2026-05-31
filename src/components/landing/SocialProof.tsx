import { FadeIn } from "@/components/ui/FadeIn";

interface Tweet {
  handle: string;
  name: string;
  avatar: string;
  text: string;
  network: string;
  networkColor: string;
  city: string;
}

const tweets: Tweet[] = [
  { handle: "@isaiah_eze_", name: "Isaiah Eze", avatar: "E", text: "DataLens just told me TikTok ate 3GB in 4 days. I thought it was MTN cheating me 😭 this app is a game changer", network: "MTN", networkColor: "#FFCC00", city: "Lagos" },
  { handle: "@aisha_abuja", name: "Aisha M.", avatar: "A", text: "Bought 5GB, finished in 2 days. DataLens showed it was WhatsApp video calls 😅 at least now I know. Never going back to guessing", network: "Airtel", networkColor: "#FF4444", city: "Abuja" },
  { handle: "@tunde_coder", name: "Tunde A.", avatar: "T", text: "The receipt feature is incredible. Paid ₦2,500 for 3GB, DataLens tracked exactly where all of it went. Built different", network: "Glo", networkColor: "#00A050", city: "Ibadan" },
  { handle: "@ngozi_writes", name: "Ngozi O.", avatar: "N", text: "My data finishing early every month was stressing me out. DataLens revealed my 'background refresh' was the culprit. Fixed it. Done.", network: "9mobile", networkColor: "#33B3B3", city: "Enugu" },
  { handle: "@biodun_tech", name: "Biodun F.", avatar: "B", text: "The DataLens buy feature saved my presentation. Data finished, topped up inside the app in 30 seconds. Tracking resumed immediately 🔥", network: "MTN", networkColor: "#FFCC00", city: "Lagos" },
  { handle: "@chiamaka_ph", name: "Chiamaka U.", avatar: "C", text: "Every Nigerian with a data plan needs this. The alerts alone are worth it — got a 75% warning and bought more before my data died mid-exam", network: "Airtel", networkColor: "#FF4444", city: "Port Harcourt" },
  { handle: "@kelechi_dev", name: "Kelechi N.", avatar: "K", text: "MTN swore I used my data. DataLens receipts said otherwise. I walked into the service center with receipts. They gave me 500MB compensation 🤣", network: "MTN", networkColor: "#FFCC00", city: "Owerri" },
  { handle: "@fatima_kano", name: "Fatima A.", avatar: "F", text: "Data is expensive in Nigeria. DataLens showed me I waste 40% on YouTube autoplay. Cut that out, my 10GB now lasts the full month", network: "Glo", networkColor: "#00A050", city: "Kano" },
  { handle: "@seun_lasgidi", name: "Seun B.", avatar: "S", text: "The per-app breakdown is insane. Instagram used more data in 1 hour than I did in a whole work day. Low data mode ON.", network: "MTN", networkColor: "#FFCC00", city: "Lagos" },
  { handle: "@adaeze_imo", name: "Adaeze C.", avatar: "A", text: "Cost per MB comparison for all 4 networks? In one place? DataLens is doing what the telcos never wanted us to know 👀", network: "9mobile", networkColor: "#33B3B3", city: "Owerri" },
];

const row1 = tweets.slice(0, 5);
const row2 = tweets.slice(5, 10);

function TweetCard({ tweet }: { tweet: Tweet }) {
  return (
    <div className="flex-shrink-0 w-[320px] mx-3 rounded-2xl border border-dl-border bg-dl-surface p-5 hover:-translate-y-1 transition-transform duration-200 cursor-default">
      <div className="flex items-center gap-3 mb-3">
        <span
          className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-base shrink-0"
          style={{
            background: `linear-gradient(135deg, ${tweet.networkColor}33, ${tweet.networkColor}66)`,
            color: tweet.networkColor,
            border: `1px solid ${tweet.networkColor}44`,
          }}
        >
          {tweet.avatar}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-bold truncate">{tweet.name}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#1d9bf0" className="shrink-0">
              <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91-1.01-1-2.52-1.27-3.91-.81-.67-1.31-1.9-2.19-3.34-2.19-1.43 0-2.67.88-3.34 2.19-1.39-.46-2.9-.2-3.91.81-1 1.01-1.27 2.52-.81 3.91-1.31.67-2.19 1.9-2.19 3.34 0 1.43.88 2.67 2.19 3.34-.46 1.39-.2 2.9.81 3.91 1.01 1 2.52 1.27 3.91.81.67 1.31 1.9 2.19 3.34 2.19 1.43 0 2.67-.88 3.34-2.19 1.39.46 2.9.2 3.91-.81 1-1.01 1.27-2.52.81-3.91 1.31-.67 2.19-1.9 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/>
            </svg>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-xs text-white/42">{tweet.handle}</span>
            <span className="text-white/22">·</span>
            <span
              className="text-[10px] font-bold font-mono"
              style={{ color: tweet.networkColor }}
            >
              {tweet.network}
            </span>
            <span className="text-white/22">·</span>
            <span className="text-[10px] text-white/42">{tweet.city}</span>
          </div>
        </div>
        {/* X/Twitter icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.3)" className="shrink-0">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </div>
      <p className="text-[14px] text-white/80 leading-relaxed">{tweet.text}</p>
    </div>
  );
}

function MarqueeRow({ tweets, reverse = false }: { tweets: Tweet[]; reverse?: boolean }) {
  const doubled = [...tweets, ...tweets];
  return (
    <div className="relative overflow-hidden w-full">
      {/* Edge masks */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
        style={{ background: "linear-gradient(to right, #0D0D0D, transparent)" }} />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
        style={{ background: "linear-gradient(to left, #0D0D0D, transparent)" }} />

      <div
        className="flex"
        style={{
          animation: `marquee-scroll ${reverse ? "35s" : "30s"} linear infinite ${reverse ? "reverse" : "normal"}`,
          width: "max-content",
        }}
      >
        {doubled.map((tweet, i) => (
          <TweetCard key={i} tweet={tweet} />
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="py-[110px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn className="max-w-[680px] mx-auto text-center mb-14">
          <span className="font-mono text-xs font-bold tracking-[2.5px] uppercase text-dl-green">
            Twitter / X
          </span>
          <h2 className="text-[clamp(30px,4vw,46px)] font-extrabold tracking-tight leading-[1.08] mt-4">
            Naija is talking about it
          </h2>
          <p className="text-[18px] text-white/66 mt-4 leading-relaxed">
            12,000+ Nigerians have already found out where their data really goes.
          </p>
        </FadeIn>
      </div>

      {/* Full-bleed marquee */}
      <div className="flex flex-col gap-4">
        <MarqueeRow tweets={row1} reverse={false} />
        <MarqueeRow tweets={row2} reverse={true} />
      </div>
    </section>
  );
}
