"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SUBJECTS = [
  "General enquiry",
  "Bug report",
  "Feature request",
  "Data purchase issue",
  "Partnership / business",
  "Press & media",
];

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "", email: "", subject: SUBJECTS[0], message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate network request
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("sent");
  };

  const inputBase =
    "w-full rounded-2xl bg-dl-surface border border-dl-border px-5 py-4 text-[15px] text-white placeholder:text-white/30 outline-none transition-all duration-200 focus:border-dl-green focus:ring-2 focus:ring-dl-green/20 font-poppins";

  return (
    <AnimatePresence mode="wait">
      {status === "sent" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.2, 0.7, 0.3, 1] }}
          className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-3xl border h-full"
          style={{ borderColor: "rgba(0,230,118,0.3)", background: "linear-gradient(135deg,#0A2C1A,#141929)" }}
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
            style={{ background: "rgba(0,230,118,0.15)", border: "1px solid rgba(0,230,118,0.4)" }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h3 className="text-2xl font-extrabold tracking-tight mb-3">Message sent!</h3>
          <p className="text-white/60 text-[15px] leading-relaxed max-w-xs">
            We&apos;ll get back to you within 24 hours. Check your inbox —
            we&apos;re usually faster than that.
          </p>
          <button
            onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: SUBJECTS[0], message: "" }); }}
            className="mt-8 px-6 py-3 rounded-full border border-dl-border text-sm font-semibold text-white/60 hover:text-white hover:border-dl-border-2 transition-colors duration-150 cursor-pointer"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono uppercase tracking-wider text-white/42">Full name</label>
              <input
                required
                type="text"
                placeholder="Isaiah Eze"
                value={form.name}
                onChange={set("name")}
                className={inputBase}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono uppercase tracking-wider text-white/42">Email address</label>
              <input
                required
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={set("email")}
                className={inputBase}
              />
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-mono uppercase tracking-wider text-white/42">Subject</label>
            <div className="relative">
              <select
                value={form.subject}
                onChange={set("subject")}
                className={`${inputBase} appearance-none cursor-pointer pr-12`}
              >
                {SUBJECTS.map((s) => (
                  <option key={s} value={s} className="bg-[#141929]">{s}</option>
                ))}
              </select>
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40"
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-mono uppercase tracking-wider text-white/42">Message</label>
            <textarea
              required
              rows={6}
              placeholder="Tell us what's on your mind..."
              value={form.message}
              onChange={set("message")}
              className={`${inputBase} resize-none leading-relaxed`}
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={status === "sending"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full h-14 rounded-2xl font-bold text-[15px] text-[#06140C] cursor-pointer transition-all duration-150 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            style={{
              background: "#00E676",
              boxShadow: "0 8px 24px rgba(0,230,118,0.3)",
            }}
          >
            {status === "sending" ? (
              <>
                <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 12a9 9 0 11-6.219-8.56" strokeLinecap="round"/>
                </svg>
                Sending…
              </>
            ) : (
              <>
                Send message
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                </svg>
              </>
            )}
          </motion.button>

          <p className="text-center text-xs text-white/30">
            We reply within 24 hours · Mon – Fri · 9am – 6pm WAT
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
