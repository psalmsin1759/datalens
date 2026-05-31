"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";

const screens = [
  {
    label: "Dashboard",
    caption: "Your data, at a glance",
    color: "#00E676",
    content: (
      <div className="flex flex-col gap-2.5 p-4 h-full">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-[8px] font-mono text-white/40 uppercase tracking-wider">Mon · May 19</div>
            <div className="text-[13px] font-bold mt-0.5">Good morning, <span className="text-[#00E676]">Isaiah</span></div>
          </div>
          <span className="text-[9px] font-bold bg-[rgba(255,204,0,0.15)] text-[#FFCC00] px-2 py-1 rounded-full border border-[rgba(255,204,0,0.3)]">MTN</span>
        </div>
        <div className="flex justify-center py-1">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="48" stroke="#1A1F1A" strokeWidth="10" fill="none"/>
            <circle cx="60" cy="60" r="48" stroke="url(#dash-g)" strokeWidth="10" fill="none"
              strokeLinecap="round" strokeDasharray="100 301" transform="rotate(-90 60 60)"
              style={{filter:"drop-shadow(0 0 6px rgba(0,230,118,0.5))"}}/>
            <defs><linearGradient id="dash-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00E676"/><stop offset="100%" stopColor="#FFD700"/>
            </linearGradient></defs>
            <text x="60" y="55" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">REMAINING</text>
            <text x="60" y="68" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="800">6.8<tspan fontSize="10" fill="rgba(255,255,255,0.5)"> GB</tspan></text>
            <text x="60" y="78" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="6" fontFamily="monospace">32% used</text>
          </svg>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[["Today","420MB","↑12%","#00E676"],["Week","2.1GB","↓8%","#0BC97A"],["Month","3.2GB","on pace","#FFD700"]].map(([l,v,d,c])=>(
            <div key={l} className="bg-[#141929] border border-[#1E2A45] rounded-lg p-2">
              <div className="text-[7px] font-mono text-white/40 uppercase">{l}</div>
              <div className="text-[13px] font-extrabold mt-0.5">{v}</div>
              <div className="text-[7px] font-mono mt-0.5 font-bold" style={{color:c}}>{d}</div>
            </div>
          ))}
        </div>
        <div className="bg-[#141929] border border-[#1E2A45] rounded-xl overflow-hidden">
          <div className="flex justify-between px-2.5 py-2 text-[10px]">
            <span className="font-bold">Recent activity</span>
            <span className="text-[#00E676]">See all</span>
          </div>
          {[["Y","#FF0000","YouTube","184 MB"],["W","#25D366","WhatsApp","62 MB"],["I","#E1306C","Instagram","54 MB"]].map(([ic,bg,name,val])=>(
            <div key={name} className="flex items-center gap-2 px-2.5 py-1.5 border-t border-[#1E2A45]">
              <span className="w-5 h-5 rounded-md flex items-center justify-center text-[9px] font-bold text-white" style={{background:bg}}>{ic}</span>
              <span className="flex-1 text-[9px] font-semibold">{name}</span>
              <span className="text-[9px] font-mono font-bold">{val}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: "Usage Breakdown",
    caption: "Every MB, identified",
    color: "#5BC0EB",
    content: (
      <div className="flex flex-col gap-3 p-4 h-full">
        <div className="text-sm font-bold">Usage by app</div>
        <div className="flex gap-2 text-[9px]">
          {["By App","By Site","By Hour"].map((t,i)=>(
            <span key={t} className={`px-2.5 py-1 rounded-full font-semibold ${i===0?"bg-[rgba(0,230,118,0.15)] text-[#00E676] border border-[rgba(0,230,118,0.3)]":"text-white/40 border border-[#1E2A45]"}`}>{t}</span>
          ))}
        </div>
        {[
          ["YouTube","1.84 GB",92,"#FF0000"],
          ["WhatsApp","620 MB",31,"#25D366"],
          ["Instagram","540 MB",27,"#E1306C"],
          ["Chrome","210 MB",11,"#4285F4"],
          ["Twitter/X","180 MB",9,"#1DA1F2"],
        ].map(([name,val,pct,color])=>(
          <div key={String(name)} className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-lg flex items-center justify-center text-[8px] font-bold text-white" style={{background:String(color)}}>{String(name)[0]}</span>
            <div className="flex-1">
              <div className="flex justify-between text-[9px] mb-1">
                <span className="font-semibold">{name}</span>
                <span className="font-mono text-white/60">{val}</span>
              </div>
              <div className="h-1.5 rounded-full bg-[#1E2A45] overflow-hidden">
                <div className="h-full rounded-full" style={{width:`${Number(pct)}%`,background:String(color)+"99"}}/>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-auto pt-2 border-t border-[#1E2A45] flex justify-between text-[9px]">
          <span className="text-white/40">Total this period</span>
          <span className="font-mono font-bold text-[#5BC0EB]">3.39 GB</span>
        </div>
      </div>
    ),
  },
  {
    label: "Purchase History",
    caption: "Every naira tracked",
    color: "#FFD700",
    content: (
      <div className="flex flex-col gap-3 p-4 h-full">
        <div className="text-sm font-bold">Purchase history</div>
        <div className="flex gap-1.5 text-[8px]">
          {["All","MTN","Airtel","Glo"].map((t,i)=>(
            <span key={t} className={`px-2 py-0.5 rounded-full font-semibold ${i===0?"bg-[rgba(0,230,118,0.15)] text-[#00E676]":"text-white/40 border border-[#1E2A45]"}`}>{t}</span>
          ))}
        </div>
        <div className="text-[8px] font-mono text-white/40 uppercase tracking-wider">May 2026</div>
        {[
          ["M","#FFCC00","10 GB · MTN","₦3,200","12 days","Tracking"],
          ["A","#FF4444","5 GB · Airtel","₦1,800","5 days","Used up"],
          ["M","#FFCC00","3 GB · MTN","₦1,100","3 days","Expired"],
        ].map(([av,bg,bundle,cost,dur,status])=>(
          <div key={String(bundle)} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#141929] border border-[#1E2A45]">
            <span className="w-8 h-8 rounded-[9px] flex items-center justify-center text-[11px] font-extrabold" style={{background:String(bg),color:"#1A1300"}}>{av}</span>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold">{bundle}</div>
              <div className="text-[8px] text-white/40 mt-0.5">{cost} · lasted {dur}</div>
            </div>
            <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full ${status==="Tracking"?"bg-[rgba(0,230,118,0.15)] text-[#00E676]":status==="Used up"?"bg-[rgba(255,184,0,0.12)] text-[#FFB800]":"text-white/30 bg-white/5"}`}>{status}</span>
          </div>
        ))}
        <div className="mt-auto p-2.5 rounded-xl bg-[rgba(255,215,0,0.06)] border border-[rgba(255,215,0,0.2)]">
          <div className="text-[8px] font-mono text-[#FFD700] uppercase tracking-wider mb-1">This month</div>
          <div className="flex justify-between text-[10px]">
            <span className="text-white/60">3 purchases · 18 GB</span>
            <span className="font-bold text-[#FFD700]">₦6,100</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Buy Data",
    caption: "Top up in seconds",
    color: "#00E676",
    content: (
      <div className="flex flex-col gap-3 p-4 h-full">
        <div className="text-sm font-bold">Buy data</div>
        <div className="flex gap-1.5">
          {[["M","#FFCC00","MTN"],["A","#FF4444","Airtel"],["G","#008000","Glo"],["9","#009999","9mob"]].map(([av,bg,name],i)=>(
            <div key={String(name)} className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-xl cursor-pointer ${i===0?"border border-[rgba(0,230,118,0.4)] bg-[rgba(0,230,118,0.08)]":"border border-[#1E2A45]"}`}>
              <span className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-extrabold" style={{background:String(bg),color:"#1A1300"}}>{av}</span>
              <span className="text-[8px] font-semibold text-white/60">{name}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[["1 GB","₦350","30 days","best value"],["2 GB","₦600","30 days",""],["5 GB","₦1,400","30 days","popular"],["10 GB","₦2,800","30 days",""]].map(([size,price,val,tag],i)=>(
            <div key={String(size)} className={`p-2.5 rounded-xl border cursor-pointer ${i===2?"border-[rgba(255,215,0,0.4)] bg-[rgba(255,215,0,0.06)]":"border-[#1E2A45] bg-[#141929]"}`}>
              {tag && <div className="text-[7px] font-mono font-bold uppercase text-[#FFD700] mb-1">{tag}</div>}
              <div className="text-[13px] font-extrabold">{size}</div>
              <div className="text-[9px] text-white/60 mt-0.5">{price} · {val}</div>
            </div>
          ))}
        </div>
        <div className="mt-auto p-3 rounded-xl bg-[#00E676] flex items-center justify-between cursor-pointer">
          <span className="text-[11px] font-extrabold text-[#06140C]">Pay ₦2,800</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06140C" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>
    ),
  },
  {
    label: "Alerts",
    caption: "Never be surprised",
    color: "#FFB800",
    content: (
      <div className="flex flex-col gap-3 p-4 h-full">
        <div className="text-sm font-bold">Alerts</div>
        <div className="text-[9px] text-white/40">We tap you before it's too late</div>
        {[
          {label:"50% used",desc:"Half your bundle's gone",icon:"🔔",active:true,color:"#00E676"},
          {label:"75% used",desc:"Time to think about topping up",icon:"⚡",active:true,color:"#FFB800"},
          {label:"90% used",desc:"Almost out — act now",icon:"🚨",active:true,color:"#FF4444"},
          {label:"Data finished",desc:"Full receipt ready for you",icon:"📋",active:true,color:"#5BC0EB"},
          {label:"No connection",desc:"When you go offline unexpectedly",icon:"📡",active:false,color:"#7B61FF"},
        ].map(item=>(
          <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl bg-[#141929] border border-[#1E2A45]">
            <span className="text-base">{item.icon}</span>
            <div className="flex-1">
              <div className="text-[10px] font-bold">{item.label}</div>
              <div className="text-[8px] text-white/40 mt-0.5">{item.desc}</div>
            </div>
            <div className={`w-8 h-4 rounded-full relative cursor-pointer transition-colors ${item.active?"bg-[#00E676]":"bg-[#1E2A45]"}`}>
              <div className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all ${item.active?"right-0.5":"left-0.5"}`}/>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

function PhoneFrame({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div
      className="relative w-[220px] h-[440px] rounded-[32px] bg-black flex-shrink-0 select-none"
      style={{
        boxShadow: `0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px #1a1a1a, 0 0 0 3px ${color}33`,
        padding: "4px",
      }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-b-xl z-20" />
      <div className="absolute inset-[4px] rounded-[28px] overflow-hidden bg-[#0D0D0D] flex flex-col text-white">
        {children}
      </div>
    </div>
  );
}

export function ScreenshotCarousel() {
  const [active, setActive] = useState(0);
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-[110px]" id="screens">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn className="max-w-[680px] mx-auto text-center mb-14">
          <span className="font-mono text-xs font-bold tracking-[2.5px] uppercase text-dl-green">
            The app
          </span>
          <h2 className="text-[clamp(30px,4vw,46px)] font-extrabold tracking-tight leading-[1.08] mt-4">
            Every screen,<br />
            <span className="text-dl-green">built for clarity</span>
          </h2>
          <p className="text-[18px] text-white/66 mt-4 leading-relaxed">
            Tap a screen to preview it. Download to see it live on your phone.
          </p>
        </FadeIn>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {screens.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                active === i
                  ? "text-[#06140C]"
                  : "text-white/50 border border-dl-border hover:text-white hover:border-dl-border-2"
              }`}
              style={active === i ? { background: s.color } : {}}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden" ref={constraintsRef}>
          {/* Edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 z-10"
            style={{ background: "linear-gradient(to right, #0D0D0D, transparent)" }} />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 z-10"
            style={{ background: "linear-gradient(to left, #0D0D0D, transparent)" }} />

          <motion.div
            className="flex gap-8 justify-center py-8"
            drag="x"
            dragConstraints={constraintsRef}
            dragElastic={0.1}
          >
            {screens.map((s, i) => {
              const isActive = i === active;
              return (
                <motion.div
                  key={s.label}
                  animate={{
                    scale: isActive ? 1 : 0.88,
                    opacity: isActive ? 1 : 0.5,
                    y: isActive ? 0 : 20,
                  }}
                  transition={{ duration: 0.35, ease: [0.2, 0.7, 0.3, 1] }}
                  onClick={() => setActive(i)}
                  className="cursor-pointer flex flex-col items-center gap-4"
                >
                  <PhoneFrame color={s.color}>
                    {s.content}
                  </PhoneFrame>
                  <div className="text-center">
                    <div
                      className="text-sm font-bold transition-colors duration-200"
                      style={{ color: isActive ? s.color : "rgba(255,255,255,0.4)" }}
                    >
                      {s.label}
                    </div>
                    <div className="text-xs text-white/30 mt-0.5">{s.caption}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {screens.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-200 rounded-full cursor-pointer"
              style={{
                width: active === i ? 20 : 6,
                height: 6,
                background: active === i ? s.color : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
